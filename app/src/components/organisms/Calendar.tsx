'use client';
import React, {useState, useRef, useEffect  } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Default theme file
import { format } from "date-fns";
// import { usePopup } from "@/context/PopUpContext";

const DateTimelineSelector = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // const { openPopup, closePopup } = usePopup();

  // const [calendarStyles, setCalendarStyles] = useState({});
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
//   const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });



//   const calculatePosition = () => {
//     if (!buttonRef.current || !calendarRef.current) return {};
//   }

  const handleSelect = (rangesByKey: RangeKeyDict) => {
    const { selection } = rangesByKey;
    if (selection.startDate && selection.endDate) {
      setSelectedRange({
        startDate: selection.startDate || new Date(),
        endDate: selection.endDate || new Date(),
        key: selection.key || "selection",
      });
    }
  };

  //closing popup events
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current?.contains(e.target as Node)) return;
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', () => setIsCalendarOpen(false));
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', () => setIsCalendarOpen(false));
    };
  }, [isCalendarOpen]);

  // Handle positioning the calendar popup dynamically
// Position the calendar to the right of the button
// useEffect(() => {
//     if (isCalendarOpen && buttonRef.current) {
//       const buttonRect = buttonRef.current.getBoundingClientRect();
//       setCalendarPosition({
//         top: buttonRect.top,
//         left: buttonRect.right + 10, // Position to the right of the button
//       });
//     }
//   }, [isCalendarOpen]);


  // handle Done button click
  const handleDone = () => {
    setIsCalendarOpen(false);
    alert(
      `Selected Date Range: ${format(
        selectedRange.startDate,
        "MM/dd/yyyy"
      )} to ${format(selectedRange.endDate, "MM/dd/yyyy")}`
    );
  };

  const handleCancel = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Button to toggle the calendar */}
      <button
       ref={buttonRef}
        className="w-full py-2 text-black bg-white border border-red-500 rounded-[6px] hover:bg-red-600"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        Select Date and Timeline
      </button>

      {/* Calendar Popup */}
      {isCalendarOpen && (
        <div ref={calendarRef} className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <DateRangePicker
            ranges={[selectedRange]}
            onChange={handleSelect}
            rangeColors={["#f43f5e"]}
            moveRangeOnFirstSelection={false}
          />
          <div className="flex justify-end gap-4 px-4 py-2 border-t">
            {/* Cancel Button */}
            <button
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
              onClick={handleCancel}
            >
              Cancel
            </button>
            {/* Done Button */}
            <button
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimelineSelector;

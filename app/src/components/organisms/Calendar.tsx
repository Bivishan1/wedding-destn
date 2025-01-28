import React, {useState, useRef, useEffect  } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Default theme file
import { format } from "date-fns";

const DateTimelineSelector = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [calendarStyles, setCalendarStyles] = useState({});
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

  // Handle positioning the calendar popup dynamically
  useEffect(() => {
    if (isCalendarOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const calendarHeight = 350; // Approximate calendar height
      const topPosition =
        buttonRect.bottom + calendarHeight > windowHeight
          ? buttonRect.top - calendarHeight - 10
          : buttonRect.bottom + 10;

      setCalendarStyles({
        top: `${topPosition}px`,
        left: `${buttonRect.left}px`,
        width: `${buttonRect.width}px`,
        position: "absolute",
      });
    }
  }, [isCalendarOpen]);


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
        className="w-full py-3 text-black bg-white border border-red-500 rounded-[4px] hover:bg-red-600"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        Select Date and Timeline
      </button>

      {/* Calendar Popup */}
      {isCalendarOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50" style={calendarStyles}>
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

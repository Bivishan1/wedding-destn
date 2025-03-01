import { useState, useRef } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { format } from 'date-fns';
import { useCloseOnOutsideClick } from "@/hooks/useOutsideClick";
import { useUI } from "@/context/PopUpContext";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateTimelineSelector = () => {
   // Get UI context values
  const { isOpen, setisOpen } = useUI();
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('23:59');

  // Refs for click-outside detection
  const calendarRef = useRef<HTMLDivElement>(null);
  const calendarButtonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (rangesByKey: RangeKeyDict) => {
    const { selection } = rangesByKey;
    if (selection.startDate && selection.endDate) {
      const newRange = {
        startDate: selection.startDate,
        endDate: selection.endDate,
        key: selection.key || "selection",
      };
      setSelectedRange(newRange);
      // Preserve time when dates change
      setStartTime(format(newRange.startDate, 'HH:mm'));
      setEndTime(format(newRange.endDate, 'HH:mm'));
    }
  };

  const handleTimeChange = (type: 'start' | 'end', time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const newDate = new Date(type === 'start' ? selectedRange.startDate : selectedRange.endDate);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    
    if (type === 'start') {
      setStartTime(time);
      setSelectedRange(prev => ({
        ...prev,
        startDate: newDate
      }));
    } else {
      setEndTime(time);
      setSelectedRange(prev => ({
        ...prev,
        endDate: newDate
      }));
    }
  };

 // Use the custom hook
 useCloseOnOutsideClick(
  isOpen,
  calendarRef as React.RefObject<HTMLElement>,
  [calendarButtonRef as React.RefObject<HTMLElement>],
  () => setisOpen(false)
);

  const handleDone = () => {
    setisOpen(false);
    alert(
      `Selected Date Range: ${format(selectedRange.startDate, "MM/dd/yyyy HH:mm")} to ${format(
        selectedRange.endDate,
        "MM/dd/yyyy HH:mm"
      )}`
    );
  };

  const handleCancel = () => {
    setisOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        ref={calendarButtonRef}
        className="w-full py-2 text-black bg-white border border-red-500 rounded-[6px] hover:bg-red-600"
        onClick={() => setisOpen(!isOpen)}
      >
        Select Date and Timeline
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div ref={calendarRef} className="bg-white rounded-lg shadow-lg p-4">
            <DateRangePicker
              ranges={[selectedRange]}
              onChange={handleSelect}
              rangeColors={["#f43f5e"]}
              moveRangeOnFirstSelection={false}
              months={2}
              direction="horizontal"
            />
            
            <div className="flex gap-4 mb-4 px-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => handleTimeChange('start', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => handleTimeChange('end', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 px-4 py-2 border-t">
              <button
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimelineSelector;
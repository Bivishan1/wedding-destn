'use client';
import { useEffect } from 'react';
import { RefObject } from 'react';


interface PopUpHandleProps {
  firstRef: RefObject<HTMLElement | HTMLButtonElement | null>;
  secondRef: RefObject<HTMLElement | null>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PopUpHandle: React.FC<PopUpHandleProps> = ({ firstRef, secondRef, isOpen, setIsOpen }) => {
  useEffect(() => {
 
    const handleClickOutside = (e: MouseEvent) => {
      if (firstRef.current?.contains(e.target as Node)) return;
      if (secondRef.current && !secondRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    // <div onClick={handleClickOutside} className="overlay"></div>
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      const handleResize = () => setIsOpen(false);
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('resize', handleResize);
      };
    }

    // If the popup is closed, no need to add event listeners
    return undefined;
  }, [firstRef, secondRef, isOpen, setIsOpen]);

  // The component doesn't need to render anything visually, so we can return null
  return null;
};

export default PopUpHandle;

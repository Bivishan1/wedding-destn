import { RefObject, useEffect } from "react";

export const useCloseOnOutsideClick = (
    isOpen: boolean,
    elementRef: RefObject<HTMLElement>,
    triggerRefs: RefObject<HTMLElement>[], // Array of refs
    onClose: () => void
  ) => {
    useEffect(() => {
      if (!isOpen) return;
  
      const handleClickOutside = (e: MouseEvent) => {
        // Check if click is in any trigger
        const isTriggerClick = triggerRefs.some(ref => 
          ref.current?.contains(e.target as Node)
        );
  
        // Check if click is outside menu
        const isOutside = elementRef.current && 
          !elementRef.current.contains(e.target as Node);
  
        if (!isTriggerClick && isOutside) {
          onClose();
        }
      };
  
      const handleResize = () => onClose();
  
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('resize', handleResize);
      };
    }, [isOpen, elementRef, triggerRefs, onClose]);
  };
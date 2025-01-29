// "use client";
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface PopupContextType {
//   openPopup: () => void;
//   closePopup: () => void;
// }

// // Create the Popup context
// const PopupContext = createContext<PopupContextType | undefined>(undefined);

// // Create the PopupProvider component
// export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false); // Track whether the popup is open or closed

//   // Function to open the popup
//   const openPopup = () => {
//     setIsOpen(true);
//   };

//   // Function to close the popup
//   const closePopup = () => {
//     setIsOpen(false);
//   };

//   return (
//     <PopupContext.Provider value={{ openPopup, closePopup }}>
//       {children}
//     </PopupContext.Provider>
//   );
// };

// // The usePopup hook to use popup state in any component
// export const usePopup = (): PopupContextType => {
//   const context = useContext(PopupContext);
//   if (!context) {
//     throw new Error('usePopup must be used within a PopupProvider');
//   }
//   return context;
// };

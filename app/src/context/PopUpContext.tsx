// contexts/UIContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

type UIContextType = {
  isCalendarOpen: boolean;
  setIsCalendarOpen: (value: boolean) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (value: boolean) => void;
};

const UIContext = createContext<UIContextType>({} as UIContextType);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{ isCalendarOpen, setIsCalendarOpen, isProfileOpen, setIsProfileOpen }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
// contexts/UIContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

type UIContextType = {
  isOpen: boolean;
  setisOpen: (value: boolean) => void;
};

const UIContext = createContext<UIContextType>({} as UIContextType);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{ isOpen, setisOpen}}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
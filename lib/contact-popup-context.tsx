'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface ContactPopupContextValue {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextValue>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactPopupContext.Provider
      value={{
        isOpen,
        openPopup: () => setIsOpen(true),
        closePopup: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  return useContext(ContactPopupContext);
}

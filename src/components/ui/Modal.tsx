"use client";
import React, { createContext, useContext, useState } from 'react';

type ModalType = 'test_drive' | 'trade_in' | 'emi' | 'service' | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  return (
    <ModalContext.Provider value={{ activeModal, openModal: setActiveModal, closeModal: () => setActiveModal(null) }}>
      {children}
    </ModalContext.Provider>
  );
};

"use client";

import React, { createContext, useContext, useState } from "react";

export type ModalMode = "book-now" | "test-drive" | "trade-in" | "emi" | "service";

interface DealershipContextType {
  isModalOpen: boolean;
  modalMode: ModalMode;
  preselectedVehicle: string | null;
  openModal: (mode: ModalMode, vehicleId?: string) => void;
  closeModal: () => void;
}

const DealershipContext = createContext<DealershipContextType | undefined>(undefined);

export function DealershipProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("test-drive");
  const [preselectedVehicle, setPreselectedVehicle] = useState<string | null>(null);

  const openModal = (mode: ModalMode, vehicleId?: string) => {
    setModalMode(mode);
    setPreselectedVehicle(vehicleId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: add a slight delay before clearing vehicle so exit animation is smooth
    setTimeout(() => setPreselectedVehicle(null), 300);
  };

  return (
    <DealershipContext.Provider
      value={{
        isModalOpen,
        modalMode,
        preselectedVehicle,
        openModal,
        closeModal,
      }}
    >
      {children}
    </DealershipContext.Provider>
  );
}

export function useDealership() {
  const context = useContext(DealershipContext);
  if (context === undefined) {
    throw new Error("useDealership must be used within a DealershipProvider");
  }
  return context;
}

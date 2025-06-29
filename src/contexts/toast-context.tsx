import React, { createContext, useContext, useState, useCallback } from "react";
import { ToastContainer, type ToastProps } from "@/components/ui/premium-toast";

interface ToastContextType {
  showToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  showSuccess: (title: string, description?: string) => void;
  showError: (title: string, description?: string) => void;
  showWarning: (title: string, description?: string) => void;
  showInfo: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (toast: Omit<ToastProps, "id" | "onClose">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: ToastProps = {
        ...toast,
        id,
        onClose: removeToast,
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto remove after duration
      const duration = toast.duration || 5000;
      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast],
  );

  const showSuccess = useCallback(
    (title: string, description?: string) => {
      showToast({ title, description, type: "success" });
    },
    [showToast],
  );

  const showError = useCallback(
    (title: string, description?: string) => {
      showToast({ title, description, type: "error" });
    },
    [showToast],
  );

  const showWarning = useCallback(
    (title: string, description?: string) => {
      showToast({ title, description, type: "warning" });
    },
    [showToast],
  );

  const showInfo = useCallback(
    (title: string, description?: string) => {
      showToast({ title, description, type: "info" });
    },
    [showToast],
  );

  return (
    <ToastContext.Provider
      value={{ showToast, showSuccess, showError, showWarning, showInfo }}
    >
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

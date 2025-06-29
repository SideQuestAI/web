import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle, Info } from "lucide-react";

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: (id: string) => void;
}

export const PremiumToast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  type,
  onClose,
}) => {
  const icons = {
    success: Check,
    error: X,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-pink-600",
    warning: "from-yellow-500 to-orange-600",
    info: "from-blue-500 to-cyan-600",
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="glass p-4 rounded-xl border border-white/20 max-w-sm w-full shadow-2xl"
    >
      <div className="flex items-start space-x-3">
        <motion.div
          className={`w-6 h-6 rounded-full bg-gradient-to-r ${colors[type]} flex items-center justify-center flex-shrink-0`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <Icon className="w-3 h-3 text-white" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.h4
            className="text-sm font-medium text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h4>
          {description && (
            <motion.p
              className="text-xs text-slate-400 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        <motion.button
          onClick={() => onClose(id)}
          className="text-slate-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export const ToastContainer: React.FC<{
  toasts: ToastProps[];
  onClose: (id: string) => void;
}> = ({ toasts, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <PremiumToast key={toast.id} {...toast} onClose={onClose} />
        ))}
      </AnimatePresence>
    </div>
  );
};

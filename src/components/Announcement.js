import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Announcement({ message, resetMessage }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        resetMessage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, resetMessage]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-6 right-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-5 rounded-xl shadow-2xl z-50"
        >
          <p className="text-sm font-semibold">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

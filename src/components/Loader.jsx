import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white z-[9999]">
      {/*Logo pulse*/}
      <motion.img
        src="/logo1.png"
        alt="Loading..."
        className="w-40 h-40 object-contain mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*Animated dots*/}
      <div className="flex space-x-2">
        <motion.span
          className="w-3 h-3 bg-[#22227A] rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          className="w-3 h-3 bg-[#434C9A] rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.span
          className="w-3 h-3 bg-[#6D77B3] rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>

      {/*Loading Text*/}
      <motion.p
        className="mt-4 text-blue-900 font-semibold tracking-wide text-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;

// the same page transition for all pages, so I create a reusable PageWrapper:
// /✅ How it works:
// •	AnimatePresence handles exit animations.
// •	motion.div wraps each page.
// •	initial → state when it enters, animate → visible state, exit → when it leaves.
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default PageWrapper;

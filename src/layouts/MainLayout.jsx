import React from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <motion.div
      className="main-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="main-content">
        {children}
      </main>
    </motion.div>
  );
};

export default MainLayout;
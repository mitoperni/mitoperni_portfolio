// MainLayout.jsx
import React from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default MainLayout;

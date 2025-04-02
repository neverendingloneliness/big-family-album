import React from 'react'
import { NavList } from '../constant/constant';
import { motion } from 'motion/react';
import { spring } from 'motion';

interface NavbarProps {
  navlist: Array<{ key: string; label: string }>,
  onNavClick: (sectionKey: string) => void
}

const Nav: React.FC<NavbarProps> = ({ navlist, onNavClick }) => {
  return (
    <nav className="fixed left-0 bottom-0 top-0 h-screen w-64 p-6 z-40">
      <ul className="flex flex-col gap-6 font-bold justify-center h-full">
        {NavList.map((i) => (
          <li key={i.key}>
            <motion.button
              whileHover={{ scale: 1.5, x:50, transition: { type: "spring", stiffness: 200 } }}
              onClick={() => onNavClick(i.key)}
              className="w-full text-left p-3 rounded-md"
            >
              {i.label}
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;

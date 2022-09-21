import React from 'react';
import TriggerDarkMode from './TriggerDarkMode';

const Sidebar = () => {
  return (
      <nav className=' w-72 border border-gray-400'>
        <TriggerDarkMode />
      </nav>
  );
};

export default Sidebar;

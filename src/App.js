import './App.css';
import SkillTest from './pages/SkillTest';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    disableTextSelection();
    disableCopyCut();
    disableConsole();
    disableRightClick();
  }, []);

  const disableTextSelection = () => {
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });
  };

  const disableCopyCut = () => {
    document.addEventListener('copy', (e) => {
      e.clipboardData.setData('text/plain', 'Copying is disabled');
      e.preventDefault();
    });

    document.addEventListener('cut', (e) => {
      e.clipboardData.setData('text/plain', 'Cutting is disabled');
      e.preventDefault();
    });
  };

  const disableConsole = () => {
    if (typeof window.console === 'object') {
      Object.keys(window.console).forEach((key) => {
        window.console[key] = () => {};
      });
    }
  };

  const disableRightClick = () => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };

  return (
    <div className="App">
      <SkillTest/>
    </div>
  );
}

export default App;

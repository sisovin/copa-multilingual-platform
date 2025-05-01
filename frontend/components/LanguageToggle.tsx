import React, { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default LanguageToggle;

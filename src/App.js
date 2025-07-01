import React, { useState } from 'react';
import SkillsList from './SkillsList';

function App() {
  return (
    <div className="App">
      <div className="skills-container">
        <h1>Danh sách sở thích</h1>
        <SkillsList />
      </div>
    </div>
  );
}

export default App;
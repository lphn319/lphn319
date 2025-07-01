import React, { useState } from 'react';

const SkillsList = () => {
  // Mock data for demonstration - in real app this would come from props or API
  const [skills] = useState([
    'JavaScript', 'React', 'Python', 'Java', 'TypeScript'
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  // Filter skills based on search term
  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuggestionSubmit = () => {
    if (newSkill.trim()) {
      // In a real app, this would add the skill to the database
      console.log('Adding new skill:', newSkill);
      setNewSkill('');
      setShowSuggestion(false);
    }
  };

  const toggleSuggestion = () => {
    setShowSuggestion(!showSuggestion);
  };

  return (
    <div>
      {/* Search input for demonstration */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Tìm kiếm sở thích..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Skills list */}
      <div>
        {filteredSkills.length > 0 ? (
          <ul>
            {filteredSkills.map((skill, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {/* This is the main functionality requested in the problem statement */}
            <span 
              className="clickable-link" 
              onClick={toggleSuggestion}
            >
              Đề xuất sở thích của bạn
            </span>
          </div>
        )}
      </div>

      {/* Suggestion form - shown/hidden based on toggle */}
      {showSuggestion && (
        <div className="suggestion-form">
          <h3 className="suggestion-title">Đề xuất</h3>
          <input
            type="text"
            className="suggestion-input"
            placeholder="Nhập sở thích"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSuggestionSubmit();
              }
            }}
          />
          <button 
            className="suggestion-button" 
            onClick={handleSuggestionSubmit}
          >
            Thêm sở thích
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsList;
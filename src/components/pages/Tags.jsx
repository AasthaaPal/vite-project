import React, { useState } from 'react';
import './tags.css'; // Import the CSS file

export const Tags = () => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleEdit = () => {
    setEditing(true);
    setEditValue(tags.join(', '));
  };

  const handleSaveEdit = () => {
    const newTags = editValue.split(',').map(tag => tag.trim());
    setTags(newTags.filter(tag => tag !== ''));
    setEditing(false);
  };

  const handleSave = () => {
    if (value.trim() !== '') {
      setTags([...tags, value.trim()]);
    }
    setValue('');
    setEditing(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input 
            type="text" 
            value={editValue} 
            onChange={handleEditChange} 
            placeholder="Edit tags (comma-separated)"
          />
          <button onClick={handleSaveEdit}>Save Edit</button>
        </div>
      ) : (
        <div>
          {tags.map((tag, index) => (
            <span key={index} style={{ marginRight: '5px' }}>
              {tag}
              <button onClick={() => handleRemoveTag(index)}>x</button>
            </span>
          ))}
          <button onClick={handleEdit}>Edit Tags</button>
        </div>
      )}
      
      {/* Section to add new tags */}
      {!editing && (
        <div>
          <input 
            type="text" 
            value={value} 
            onChange={handleChange} 
            placeholder="Add a tag"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}

      {/* Section to display added tags */}
      <div>
        <h3>Added Tags:</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;

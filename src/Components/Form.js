import React, { useState, useEffect } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [savedName, setSavedName] = useState('');
  const [savedAge, setSavedAge] = useState('');

  // Load data from session storage on component mount
  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    const storedAge = sessionStorage.getItem('age');
    if (storedName) setSavedName(storedName);
    if (storedAge) setSavedAge(storedAge);
  }, []);

  // Save data to session storage
  const handleSave = () => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('age', age);
    setSavedName(name);
    setSavedAge(age);
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="text"id='age' value={age} onChange={(e) => setAge(e.target.value)}  autoComplete="age"/>
        </label>
      </div>
      <button onClick={handleSave}>Save to Session Storage</button>
      <h2>Saved Data:</h2>
      <p>Name: {savedName}</p>
      <p>Age: {savedAge}</p>
    </div>
  );
}

export default Form;

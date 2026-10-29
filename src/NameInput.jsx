import { useState } from 'react';

function NameInput({ onSubmitName }) {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={() => onSubmitName(name)}>
        Submit
      </button>
    </div>
  );
}

export default NameInput;


import { useState } from 'react';
import NameInput from './NameInput';
import NameDisplay from './NameDisplay';

function App() {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <div>
      <h1>Student Name App</h1>

      <NameInput onSubmitName={setSubmittedName} />

      <NameDisplay name={submittedName} />
    </div>
  );
}

export default App;

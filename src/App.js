import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Hello, Electron and React with Tailwind!
      </h1>
      <p className="mb-4 text-lg">Button clicked {count} times</p>

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me!
      </button>
    </div>
  );
}

export default App;

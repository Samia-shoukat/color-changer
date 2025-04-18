import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) characters += "0123456789";
    if (charAllow) characters += "!@#$%^&*()-_+=<>?/{}[]";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      newPassword += characters[index];
    }

    setPassword(newPassword);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    generatePassword(); // generate one initially
  }, [generatePassword]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">🔐 Password Generator</h1>

      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-5">

        {/* Password Display */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            className="flex-1 p-2 rounded-xl border border-gray-300"
          />
          <button
            onClick={copyToClipboard}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-xl"
          >
            Copy
          </button>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-medium">Length: {length}</label>
            <input
              type="range"
              min={8}
              max={26}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-1/2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Numbers</label>
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(prev => !prev)}
              className="accent-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(prev => !prev)}
              className="accent-indigo-500"
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition-all"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;

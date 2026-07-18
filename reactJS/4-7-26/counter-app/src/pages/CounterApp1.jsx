import React, { useState } from 'react'

const CounterApp1 = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function getCountColor() {
    if (count > 0) return "text-green-500";
    if (count < 0) return "text-red-500";
    return "text-gray-500";
  }

  return (
    <div className="flex flex-col items-center justify-center border border-gray-400 p-5 gap-5 bg-black text-white ">
      <h1 className="text-2xl font-bold">Counter App</h1>

      <p className={getCountColor()}>{count}</p>
      
      <div className="flex gap-4">
        <button
          onClick={handleDec}
          className="border border-red-500 text-red-500 p-2"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="border border-gray-500 text-gray-500 p-2"
        >
          Reset
        </button>
        <button
          onClick={handleInc}
          className="border border-green-500 text-green-500 p-2"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterApp1;

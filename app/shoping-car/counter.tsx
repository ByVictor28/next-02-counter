"use client";
import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="flex items-center justify-center p-2 px-6 rounded-xl bg-gray-800 text-white"
        >
          -1
        </button>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="flex items-center justify-center p-2 px-6 rounded-xl bg-gray-800 text-white"
        >
          +1
        </button>
      </div>
    </>
  );
};

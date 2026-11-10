"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)} className="mt-6 block rounded-full bg-stone-900 px-8 py-4 text-2xl text-white">
      Clicked {count} times
    </button>
  );
}

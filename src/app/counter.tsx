"use client";

import { useUnit } from "effector-react";
import { $count, incremented } from "./model";

export function Counter() {
  // Error
  const [count, inc] = useUnit([$count, incremented]);

  // Ok
  // const count = useUnit($count);
  // const inc = useUnit(incremented);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>Inc +</button>
    </div>
  );
}

import { createEvent, createStore, sample } from "effector";

export const $count = createStore(0, { sid: "count" });
export const incremented = createEvent();

sample({
  clock: incremented,
  source: $count,
  fn: (c) => c + 1,
  target: $count,
});

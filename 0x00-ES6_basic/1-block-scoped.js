export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;  // This `task` is block-scoped and won't overwrite the outer `task`.
    const task2 = false; // This `task2` is block-scoped and won't overwrite the outer `task2`.
  }

  return [task, task2];
}

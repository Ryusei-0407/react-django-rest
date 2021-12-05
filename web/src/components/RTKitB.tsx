import { VFC } from 'react';
import { useAppDispatch } from '../app/hooks';
import { increment } from '../slices/counterSlice';

export const RTKitB: VFC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">Redux Tool Kit B</p>
      <button
        className="py-2 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};
import { VFC } from 'react';
import { useAppDispatch } from '../app/hooks';
import { toggleMode } from '../slices/counterSlice';

export const RTKitC: VFC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">Redux Tool Kit C</p>
      <button
        onClick={() => {
          dispatch(toggleMode());
        }}
      >
        Toggle Mode
      </button>
    </div>
  );
};

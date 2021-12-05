import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, selectCount } from '../slices/counterSlice';

export const RTKitA: VFC = () => {
  const count = useAppSelector(selectCount);
  const dispath = useAppDispatch();

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">Redux Tool Kit A</p>
      {count}
      <button className="" onClick={() => dispath(increment())}>
        Increment
      </button>
    </div>
  );
};

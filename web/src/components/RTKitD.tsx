import { VFC } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectMode } from '../slices/counterSlice';

export const RTKitD: VFC = () => {
  const mode = useAppSelector(selectMode);

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">Reudx Tool Kit D</p>
      <p className="text-blue-500">{mode ? 'mode on' : 'mode off'}</p>
    </div>
  );
};

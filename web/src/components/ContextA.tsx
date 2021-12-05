import { VFC } from 'react';
import { useStateContext } from '../context/StateProvider';

export const ContextA: VFC = () => {
  const { dark, setDark } = useStateContext();

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">ContextA</p>
      <p className="py-3">{dark ? 'on' : 'off'}</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => setDark(!dark)}
      >
        Toggle mode
      </button>
    </div>
  );
};

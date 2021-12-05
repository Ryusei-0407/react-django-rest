import { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateProvider';
import axios from 'axios';

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchDatea = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const res = await axios.get('http://localhost:8080/api/tasks');
        setTasks(res.data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchDatea();
  }, [setTasks]);

  return { tasks, isLoading, isError };
};

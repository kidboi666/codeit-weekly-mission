import { useState } from "react";

const useAsync = (asyncFunction: any) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const requestFunction = async (...args: any) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFunction(...args);
    } catch (error: any) {
      setError(error);
      throw error;
    } finally {
      setPending(false);
    }
  };

  return { pending, error, requestFunction };
};

export default useAsync;

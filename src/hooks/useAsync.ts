import { useCallback, useState } from "react";

const useAsync = (asyncFunction: any) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const requestFunction = useCallback(
    async (...args: any) => {
      try {
        setError(null);
        setPending(true);
        return await asyncFunction(...args);
      } catch (error: any) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction],
  );

  return { pending, error, requestFunction };
};

export default useAsync;

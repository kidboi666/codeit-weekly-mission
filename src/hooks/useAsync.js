import { useState } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const requestFunction = async (...args) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };

  return [pending, error, requestFunction];
}

export default useAsync;

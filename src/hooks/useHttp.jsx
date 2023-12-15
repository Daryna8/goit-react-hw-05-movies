import { useEffect, useState } from 'react';

export const useHttp = (apiFunction, apiParams) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (apiParams === null) {
      return;
    }
    setIsLoading(true);

    apiFunction(apiParams)
      .then(data => setData(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [apiFunction, apiParams]);

  return [data, isLoading];
};

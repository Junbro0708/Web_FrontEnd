import { getHotDealTimeApi } from '@/api/hotDealApi';
import { hotDealTimeType } from '@/types/hotdeals';
import { useEffect, useState } from 'react';

const useHotDealTime = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState<hotDealTimeType>({
    startTime: '',
    endTime: '',
  });
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getHotDealTime = async () => {
      try {
        setIsLoading(true);
        const data = await getHotDealTimeApi();
        setTime(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('알 수 없는 에러가 발생했습니다.'),
        );
      } finally {
        setIsLoading(false);
      }
    };

    getHotDealTime();
  }, []);

  return { isLoading, time, error };
};

export default useHotDealTime;

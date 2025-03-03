import { getTodayListApi } from '@/api/todayApi';
import { listItemType } from '@/types/commons';
import { useEffect, useState } from 'react';

const useTodayList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<listItemType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getTodayList = async () => {
      try {
        setIsLoading(true);
        const data = await getTodayListApi();
        setList(data);
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

    getTodayList();
  }, []);

  return { isLoading, list, error };
};

export default useTodayList;

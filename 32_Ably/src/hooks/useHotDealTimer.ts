import { hotDealTimeType } from '@/types/hotdeals';
import { useEffect, useState } from 'react';

export const useHotDealTimer = ({ startTime, endTime }: hotDealTimeType) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!startTime || !endTime) return;

    const updateTimer = () => {
      const now = new Date();
      const start = new Date();
      const end = new Date();

      const [startHour, startMinute, startSecond] = startTime
        .split(':')
        .map(Number);
      const [endHour, endMinute, endSecond] = endTime.split(':').map(Number);

      start.setHours(startHour, startMinute, startSecond, 0);
      end.setHours(endHour, endMinute, endSecond, 0);

      // 현재 시간이 startTime보다 이전이면 시작할 때까지 대기
      if (now < start) {
        setTimeLeft('타이머가 아직 시작되지 않았어요.');
        return;
      }

      // 남은 시간 계산
      const diff = end.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft('시간이 종료되었습니다.');
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return { timeLeft };
};

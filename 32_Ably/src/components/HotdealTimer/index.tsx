import useHotDealTime from '@/hooks/api/useHotDealTime';
import styles from './index.module.css';
import { useHotDealTimer } from '@/hooks/useHotDealTimer';

function HotdealTimer() {
  const { time, isLoading } = useHotDealTime();
  const { timeLeft } = useHotDealTimer(time);
  const startHours = time.startTime.split(':')[0];
  const endHours = time.endTime.split(':')[0];
  const currentLeftTime = timeLeft.split(':');

  return (
    <div className={styles.wrapper}>
      {!isLoading ? (
        <>
          {currentLeftTime.length === 3 && (
            <div className={styles.title}>
              🔥 핫딜이 {currentLeftTime[0]}시간 {currentLeftTime[1]}분{' '}
              {currentLeftTime[2]}초 남았어요
            </div>
          )}
          <div className={styles.subTitle}>
            핫딜 시간: {startHours}시 ~ {endHours}시
          </div>
        </>
      ) : (
        <span>로딩중</span>
      )}
    </div>
  );
}

export default HotdealTimer;

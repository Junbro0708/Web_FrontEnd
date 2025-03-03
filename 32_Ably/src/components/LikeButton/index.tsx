import inactiveImage from '@/assets/icon_like_inactive.png';
import activeImage from '@/assets/icon_like_active.png';
import styles from './index.module.css';

interface LikeButtonProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

function LikeButton({ value, onChange }: LikeButtonProps) {
  const toggleValue = () => {
    onChange(!value);
  };

  return (
    <div className={styles.wrapper} onClick={toggleValue}>
      <img
        className={styles.image}
        src={value ? activeImage : inactiveImage}
        alt="하트 아이콘"
      />
    </div>
  );
}

export default LikeButton;

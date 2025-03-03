import inactiveImage from '@/assets/icon_checkbox_inactive.svg';
import activeImage from '@/assets/icon_checkbox_active.svg';
import styles from './index.module.css';

interface CheckboxProps {
  id: number;
  value: boolean;
  onChange: (value: boolean) => void;
  deleteList: number[];
  setDeleteList: (x: number[]) => void;
}

function Checkbox({
  id,
  value,
  onChange,
  deleteList,
  setDeleteList,
}: CheckboxProps) {
  const toggleValue = () => {
    onChange(!value);
    checkWishlistItem(id);
  };

  const checkWishlistItem = (itemId: number) => {
    if (deleteList.includes(itemId)) {
      setDeleteList(deleteList.filter(idx => idx !== itemId));
    } else {
      setDeleteList([...deleteList, itemId]);
    }
  };

  return (
    <div className={styles.wrapper} onClick={toggleValue}>
      <img
        className={styles.image}
        style={{ ...(value && { backgroundColor: 'white' }) }}
        src={value ? activeImage : inactiveImage}
        alt="체크박스 아이콘"
      />
    </div>
  );
}

export default Checkbox;

import { useEffect, useState } from 'react';
import LikeButton from '../LikeButton';
import styles from './index.module.css';
import { USER_WISHLIST } from '@/constant/keys';
import useWishList from '@/hooks/useWishList';
import Checkbox from '../Checkbox';

export interface GoodsCardProps {
  id: number;
  image: string;
  price: number;
  name: string;
  isDisplayLike?: boolean;
  isEditMode?: boolean;
  deleteList?: number[];
  setDeleteList?: (x: number[]) => void;
}

function GoodsCard({
  id,
  image,
  price,
  name,
  isDisplayLike = true,
  isEditMode = false,
  deleteList = [],
  setDeleteList = () => {},
}: GoodsCardProps) {
  const formattedPrice = price.toLocaleString('ko-KR');
  const { isChecked: isWishlistChecked, onChangeHandler } = useWishList({
    id,
    image,
    price,
    name,
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.wrapper}>
      {isDisplayLike && (
        <LikeButton
          value={isWishlistChecked}
          onChange={() => onChangeHandler()}
        />
      )}
      {isEditMode && (
        <Checkbox
          id={id}
          value={isChecked}
          onChange={setIsChecked}
          deleteList={deleteList}
          setDeleteList={setDeleteList}
        />
      )}
      <img className={styles.image} src={image} alt="상품 이미지" />
      <p className={styles.priceText}>{formattedPrice}</p>
      <p className={styles.priceTitle}>{name}</p>
    </div>
  );
}

export default GoodsCard;

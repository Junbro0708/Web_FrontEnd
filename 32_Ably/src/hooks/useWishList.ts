import { USER_WISHLIST } from '@/constant/keys';
import { listItemType } from '@/types/commons';
import { useEffect, useState } from 'react';

const useWishList = ({ id, image, price, name }: listItemType) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storageKey = USER_WISHLIST;
    const currentWishList = JSON.parse(
      localStorage.getItem(storageKey) || '{}',
    );
    setIsChecked(!!currentWishList[id]);
  }, [id]);

  const onChangeHandler = () => {
    const storageKey = USER_WISHLIST;
    const currentWishList = JSON.parse(
      localStorage.getItem(storageKey) || '{}',
    );

    if (currentWishList[id]) {
      const { [id]: removed, ...rest } = currentWishList;
      localStorage.setItem(storageKey, JSON.stringify(rest));
      setIsChecked(false);
    } else {
      const newWishlist = {
        ...currentWishList,
        [id]: {
          image,
          price,
          name,
        },
      };
      localStorage.setItem(storageKey, JSON.stringify(newWishlist));
      setIsChecked(true);
    }
  };

  return { isChecked, onChangeHandler };
};

export default useWishList;

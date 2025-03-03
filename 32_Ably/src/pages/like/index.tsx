import { useEffect, useState } from 'react';
import { GoodsCard, GoodsListLayout } from '@/components';
import styles from './index.module.css';
import { USER_WISHLIST } from '@/constant/keys';
import { listItemType } from '@/types/commons';

function Like() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [listItem, setListItem] = useState<listItemType[]>([]);
  const [deleteList, setDeleteList] = useState<number[]>([]);

  const toggleIsEditMode = () => {
    setIsEditMode(state => !state);
  };

  const deleteWishlistItem = () => {
    const storageKey = USER_WISHLIST;
    const currentWishList = JSON.parse(
      localStorage.getItem(storageKey) || '{}',
    );

    deleteList.forEach(id => {
      currentWishList[id] && delete currentWishList[id];
    });

    localStorage.setItem(storageKey, JSON.stringify(currentWishList));

    // 객체를 배열로 변환하여 설정
    const updatedList = Object.entries(currentWishList).map(
      ([itemId, item]: [string, any]) => ({
        itemId,
        ...item,
      }),
    );
    setListItem(updatedList);
    setDeleteList([]);
    setIsEditMode(false);
  };

  useEffect(() => {
    const storageKey = USER_WISHLIST;
    const wishlistData = JSON.parse(localStorage.getItem(storageKey) || '{}');

    const currentLiskList = Object.entries(wishlistData).map(
      ([id, item]: [string, any]) => ({
        id,
        ...item,
      }),
    );
    setListItem(currentLiskList);
  }, []);

  return (
    <>
      {listItem.length ? (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>찜한 상품</h1>
            <button className={styles.editButton} onClick={toggleIsEditMode}>
              {isEditMode ? '취소' : '편집'}
            </button>
          </header>

          <GoodsListLayout>
            {listItem.map((item, index) => (
              <GoodsCard
                key={index}
                {...item}
                isDisplayLike={false}
                isEditMode={isEditMode}
                deleteList={deleteList}
                setDeleteList={setDeleteList}
              />
            ))}
          </GoodsListLayout>

          {isEditMode && (
            <button
              className={styles.deleteButton}
              onClick={deleteWishlistItem}
            >
              상품 삭제
            </button>
          )}
        </>
      ) : (
        <div className={styles.emptyLike}>찜한 상품이 없습니다.</div>
      )}
    </>
  );
}

export default Like;

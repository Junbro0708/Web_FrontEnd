import { GoodsListLayout, GoodsCard, HotdealTimer } from '@/components';
import useHotDealList from '@/hooks/api/useHotDealItem';

function Hotdeal() {
  const { list, isLoading, error } = useHotDealList();

  if (isLoading) {
    return <span>로딩중</span>;
  }

  if (error) {
    return <div>오류가 발생했습니다. {error.message}</div>;
  }

  return (
    <>
      <HotdealTimer />
      <GoodsListLayout title="핫딜 상품">
        {list.map(({ id, ...item }) => (
          <GoodsCard key={id} id={id} {...item} />
        ))}
      </GoodsListLayout>
    </>
  );
}
export default Hotdeal;

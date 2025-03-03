import { GoodsListLayout, GoodsCard } from '@/components';
import useTodayList from '@/hooks/api/useTodayList';

function Today() {
  const { list, isLoading, error } = useTodayList();

  if (isLoading) {
    return <span>로딩중</span>;
  }

  if (error) {
    return <div>오류가 발생했습니다. {error.message}</div>;
  }

  return (
    <GoodsListLayout title="에이블리님을 위한 추천 상품">
      {list.map(({ id, ...item }) => (
        <GoodsCard key={id} id={id} {...item} />
      ))}
    </GoodsListLayout>
  );
}

export default Today;

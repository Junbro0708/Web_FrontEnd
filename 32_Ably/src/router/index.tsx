import { Routes, Route, Navigate } from 'react-router-dom';
import { Hotdeal, Like, Today } from '@/pages';

function Router() {
  return (
    <Routes>
      <Route path="/today" element={<Today />} />
      <Route path="/hotdeal" element={<Hotdeal />} />
      <Route path="/like" element={<Like />} />
      <Route path="/" element={<Navigate to="/today" replace />} />
    </Routes>
  );
}

export default Router;

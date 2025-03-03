import { BrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/components';
import Router from '@/router';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Router />
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;

import { Navigation } from '@/components';
import styles from './index.module.css';

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      <Navigation />
    </div>
  );
}

export default BaseLayout;

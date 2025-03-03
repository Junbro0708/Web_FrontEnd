import styles from './index.module.css';

interface GoodsListLayoutProps {
  title?: string;
  children: React.ReactNode;
}

function GoodsListLayout({ title, children }: GoodsListLayoutProps) {
  return (
    <div className={styles.wrapper}>
      {title && <h1>{title}</h1>}
      <div className={styles.listWrapper}>{children}</div>
    </div>
  );
}

export default GoodsListLayout;

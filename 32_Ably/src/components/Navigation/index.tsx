import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const NAV_LIST = [
  {
    name: '투데이',
    path: '/today',
  },
  {
    name: '핫딜',
    path: '/hotdeal',
  },
  {
    name: '찜',
    path: '/like',
  },
];

function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickNavItem = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {NAV_LIST.map(item => {
          const { name, path } = item;
          return (
            <li
              className={
                pathname === path ? styles.activeListItem : styles.listItem
              }
              key={path}
              onClick={() => onClickNavItem(path)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;

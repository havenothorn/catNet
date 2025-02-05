import { useAuth } from "../utils/store";
import * as styles from "./styles.css";

export const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="/">
              <p>Home</p>
            </a>
          </li>
          {user ? (
            <div className={styles.itemWrap}>
              <li className={styles.item}>
                <a>
                  <p>{}</p>
                  <p>{user.name}님 안녕하세요!</p>
                </a>
              </li>
              <li className={styles.item}>
                <a onClick={logout}>
                  <p>Logout</p>
                </a>
              </li>
            </div>
          ) : (
            <div className={styles.itemWrap}>
              <li className={styles.item}>
                <a href="/login">
                  <p>Login</p>
                </a>
              </li>
              <li className={styles.item}>
                <a href="/signup">
                  <p>Join Us</p>
                </a>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

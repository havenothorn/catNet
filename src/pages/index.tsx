import { Header } from "../components/Header";
import { List } from "../components/List";
import { Profile } from "../components/Profile";

export const Home = () => {
  return (
    <>
      <Header />
      <Profile>
        <p>프로필 영역</p>
      </Profile>
      <List />
    </>
  );
};

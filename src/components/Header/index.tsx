import { useRef } from "react";
import { useAuth } from "../../utils/store";
import axios from "axios";
import api from "../../utils/api";
import * as styles from "./styles.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const Header = () => {
  const { user, login, logout } = useAuth();
  const imageInput = useRef<HTMLInputElement>(null);
  const router = useNavigate();

  const handleLogout = () => {
    logout();
    router("/login");
  };

  const handleImgChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || !user) return;

    const files = event.target.files;
    const form = new FormData();

    Array.from(files).forEach((file: Blob) => {
      form.append("image", file);
    });

    console.log("업로드할 FormData", Array.from(form.entries()));

    try {
      const res = await axios.post(`${api.cats}/upload`, form, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("이미지 업로드 응답", res);
      login({ ...res.data.data, token: user.token });
    } catch (error) {
      console.error("Failed to upload image", error);
    }
  };

  const handleImgUpload = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  return (
    <header>
      <nav>
        <div className={styles.navList}>
          <Button onClick={() => router("/")} variant="menu">
            Home
          </Button>
          {user ? (
            <div className={styles.navItem}>
              <div className={styles.profile}>
                <input
                  type="file"
                  ref={imageInput}
                  multiple
                  hidden
                  onChange={handleImgChange}
                />
                {user.imgUrl && (
                  <a onClick={handleImgUpload}>
                    <img
                      className={styles.img}
                      src={user.imgUrl}
                      alt={user.name}
                    />
                  </a>
                )}
                <p>{user.name}</p>
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className={styles.navItem}>
              <Button onClick={() => router("/login")} variant="menu">
                Login
              </Button>
              <Button onClick={() => router("/signup")} variant="menu">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

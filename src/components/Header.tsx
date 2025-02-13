import { useEffect, useRef, useState } from "react";
import { useAuth } from "../utils/store";
import axios from "axios";
import api from "../utils/api";
import * as styles from "./styles.css";

export const Header = () => {
  const { user, login, logout } = useAuth();
  const imageInput = useRef<HTMLInputElement>(null);
  const [isUpdated, setIsUpdated] = useState(true);
  const [trigger, setTrigger] = useState(false);

  const handleImgChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || !user) return;
    const files = event.target.files;
    const form = new FormData();
    Array.from(files).forEach((file: Blob) => {
      form.append("image", file);
    });

    console.log("업로드할 FormData", form.get("image")); // FormData {}

    try {
      setIsUpdated(false);
      const res = await axios.post(`${api.cats}/upload`, form, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      login({ ...res.data.data, token: user.token });
      setTrigger((prev) => !prev);
    } catch (error) {
      console.error("Failed to upload image", error);
    }
  };

  const handleImgUpload = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  useEffect(() => {
    setIsUpdated(true);
  }, [trigger]);

  return (
    <header>
      <nav>
        <div className={styles.list}>
          <a href="/">
            <p>Home</p>
          </a>
          {user ? (
            <div className={styles.itemWrap}>
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
                {!isUpdated && <span>Updating...</span>}
                <p>{user.name}</p>
              </div>
              <a onClick={logout}>
                <p>Logout</p>
              </a>
            </div>
          ) : (
            <div className={styles.itemWrap}>
              <a href="/login">
                <p>Login</p>
              </a>
              <a href="/signup">
                <p>Join Us</p>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

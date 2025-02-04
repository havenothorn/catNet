import { useEffect, useRef, useState } from "react";
import { useAuth } from "../utils/store";
import axios from "axios";
import api from "../utils/api";

type LayoutProps = {
  children: React.ReactNode;
  isSignup?: boolean;
};

export const Layout = ({ children }: LayoutProps) => {
  const { user, login, logout } = useAuth();
  const imageInput = useRef<HTMLInputElement>(null);
  const [isUpdated, setIsUpdated] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setIsUpdated(true);
  }, [trigger]);

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

  return (
    <div>
      <header>
        <h1>My App</h1>
        {user ? (
          <>
            {user.imgUrl && (
              <>
                <img src={user.imgUrl} alt={user.name} />
              </>
            )}
            <input
              type="file"
              ref={imageInput}
              multiple
              hidden
              onChange={handleImgChange}
            />
            <button onClick={handleImgUpload}>Upload</button>
            {!isUpdated && <span>Updating...</span>}
            <span>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

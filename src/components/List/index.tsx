import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../utils/api";

interface Item {
  _id: string;
  email: string;
  name: string;
  imgUrl: string;
}

export const List = () => {
  const [items, setItems] = useState<Item[]>([]);

  const getItems = async () => {
    const user = localStorage.getItem("user");
    const token = user ? JSON.parse(user).token : "";

    console.log("token", token);

    try {
      const res = await axios.get(`${api.cats}/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setItems(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Failed to get items", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <p>User List</p>
      {items.map((item) => (
        <div key={item._id}>
          <img src={item.imgUrl} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

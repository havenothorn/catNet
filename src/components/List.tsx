import axios from "axios";
import { useEffect, useState } from "react";
import api from "../utils/api";

interface Item {
  _id: string;
  email: string;
  name: string;
  imgUrl: string;
}

export const List = () => {
  const [items, setItems] = useState<Item[]>([]);

  const getItems = async () => {
    try {
      const res = await axios.get(`${api.cats}/all`);
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
      <h1>User List</h1>
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

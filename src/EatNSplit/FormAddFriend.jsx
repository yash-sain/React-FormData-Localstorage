import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ getItems, setOpen }) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!name || !imageURL) return;

    const id = crypto?.randomUUID();
    const data = {
      id,
      name,
      image: `${imageURL}?u=${id}`,
      balance: 0
    };

    getItems(data);

    setName("");
    setImageURL("https://i.pravatar.cc/48");
    setOpen(false);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend name">🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e?.target?.value)}
      />

      <label htmlFor="image URL">🌄 Image URL</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e?.target?.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

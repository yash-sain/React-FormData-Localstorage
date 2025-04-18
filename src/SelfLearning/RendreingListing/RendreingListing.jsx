import React, { useEffect } from "react";
import RendreingForm from "./RendreingForm/RendreingForm";
import RendreingItemListing from "./RendreingItemListing/RendreingItemListing";
import "./RendreingListing.css";
import { useState } from "react";

const RendreingListing = () => {
  const [data, setData] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem("tableData"));
    return storedValue?.length > 0 ? storedValue : [];
  });
  const [editFormData, setEditFormData] = useState({});
  const [editSelectedId, setEditSelectedId] = useState(null);

  const handleFormData = (value) => {
    setData((curItem) => [...curItem, value]);
  };

  const handleEdit = (id) => {
    const editData = data?.find((curItem) => curItem?.id === id);
    setEditFormData(editData);
    // console.log(editData)
  };

  const handleDelete = (id) => {
    const deleteData = data?.filter((curItem) => curItem?.id !== id);
    setData(deleteData);
  };

  const handleSelectedId = (id) => {
    setEditSelectedId((selectId => id === selectId ? null : id));
  }

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(data));
  }, [data]);

  const handleOrderChange = (e) => {
    const sortOrder = e?.target?.value;

    setData(prevData => {
      const newData = [...prevData];

      if (sortOrder === "asc") {
        return newData.sort((a, b) => {
          return a?.name?.toLowerCase()?.localeCompare(b?.name?.toLowerCase());
        });
      } else if (sortOrder === "desc") {
        return newData.sort((a, b) => {
          return b?.name?.toLowerCase()?.localeCompare(a?.name?.toLowerCase());
        });
      }

      return newData;
    });
  };

  return (
    <div className="container">
      <RendreingForm
        onFormData={handleFormData}
        data={data}
        editFormData={editFormData}
        editSelectedId={editSelectedId}
        onSetEditSelectedId={setEditSelectedId}
        onSetData={setData}
      />
      <select onChange={handleOrderChange}>
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>
      <RendreingItemListing
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSelectedId={handleSelectedId}
      />
    </div>
  );
};

export default RendreingListing;

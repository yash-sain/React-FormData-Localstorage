import React from "react";

const RendreingItemListing = ({
  data,
  handleDelete,
  handleEdit,
  handleSelectedId
}) => {
  const handleTableEditData = (id) => {
    handleEdit(id);
    handleSelectedId(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>School Name</th>
            <th>City</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={data?.length > 0 ? "" : "data-nofound"}>
          {data?.length > 0 ? (
            data?.map((curItem) => {
              return (
                <tr key={curItem?.id}>
                  <td>{curItem?.name}</td>
                  <td>{curItem?.age}</td>
                  <td>{curItem?.schoolName}</td>
                  <td>{curItem?.city}</td>
                  <td>{curItem?.class}</td>
                  <td>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => handleTableEditData(curItem?.id)}
                    >
                      Edit{" "}
                    </p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(curItem?.id)}
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="no-data--found">
              <p>No Data Found</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RendreingItemListing;

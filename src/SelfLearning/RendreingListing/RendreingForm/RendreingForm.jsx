import React, { useEffect, useState } from "react";

const RendreingForm = ({ onFormData, editFormData, editSelectedId ,onSetData,onSetEditSelectedId}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  const [classSet, setClassSet] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!name || !age || !schoolName || !city || !classSet)
      return alert("all Fields no fill");

    if(editSelectedId){
      onSetData((data)=> data?.map((item)=>item?.id === editSelectedId ? {name,age,schoolName,city,id:editSelectedId}: item))
    }else{
      const data = {
        id: crypto?.randomUUID(),
        name,
        age,
        schoolName,
        city,
        class: classSet
      };
  
      onFormData(data);
    }

    
    onSetEditSelectedId("")
    setName("");
    setAge("");
    setSchoolName("");
    setCity("");
    setClassSet("");
  };

useEffect(() => {
  if (editFormData?.id === editSelectedId) {
    setName(editFormData?.name);
    setAge(editFormData?.age);
    setSchoolName(editFormData?.schoolName);
    setCity(editFormData?.city);
    setClassSet(editFormData?.class);
  }
}, [editSelectedId]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="rendreing-form">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
        />
      </div>
      <div className="rendreing-form">
        <label htmlFor="Age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(Number(e?.target?.value))}
        />
      </div>
      <div className="rendreing-form">
        <label htmlFor="School Name">School Name:</label>
        <input
          type="text"
          id="school-name"
          value={schoolName}
          onChange={(e) => setSchoolName(e?.target?.value)}
        />
      </div>
      <div className="rendreing-form">
        <label htmlFor="City">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e?.target?.value)}
        />
      </div>
      <div className="rendreing-form">
        <label htmlFor="Class">Class:</label>
        <input
          type="number"
          id="class"
          value={classSet}
          onChange={(e) => setClassSet(Number(e?.target?.value))}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default RendreingForm;

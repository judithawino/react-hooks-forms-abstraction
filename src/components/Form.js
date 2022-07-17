import React, { useState } from "react";

function Form() {
    // const [firstName, setFirstName] = useState("John");
    // const [lastName, setLastName] = useState("Henry");
    const [formData, setFormData]= useState({firstName:"John", lastName:"Henry",checkBox:false});

  function handleChange(event) {
    // using the spread operator, copy data from fromData object and overwrite values of lastName with a new value.
    // name attribute reprensts a key in our formData
    let value=event.target.value;
    const name=event.target.name;

    if (event.target.type==="checkbox"){
      value= event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,});
  }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName:event.target.value,});
  // }

  return (
    <form>
      {/* add a name attribute to help destructure the form*/}
      <input 
      type="text"
      name="firstName" 
      onChange={handleChange}
      value={formData.firstName} 
      />
      <input
       type="text" 
       name="lastName" 
       onChange={handleChange} 
       value={formData.lastName} 
       />
       <input
       type="checkbox" 
       name="checkBox" 
       onChange={handleChange} 
       checked={formData.checkBox} 
       />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

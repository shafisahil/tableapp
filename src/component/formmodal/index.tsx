import React, { useState } from "react";
import { TableType } from "../tablemodal";
import FormModal from "./formModal";
interface childernType{
}
interface dataTypes{
    label?:string,
    placeholder?:string,
    value?:string
}
interface stateProp{
tableData :TableType[],
 setTableData:React.Dispatch<React.SetStateAction<TableType[]>>
}
const App = ({tableData, setTableData}:stateProp) => {
    const [inputValue, setInputValue] = useState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      createdDate: "",
      updatedDate: "",
      role: "",
      lastVisited: "",
      speciality: "",
      phoneNumber: "",
    });
  const HandleSave = () => {
  setTableData([...tableData,inputValue])
  
    console.log(inputValue)
  };

  const datas:dataTypes[] = [
    {
      label: "id",
      placeholder: "Enter name",
      value:inputValue.id,
    },
    {
      label: "firstName",
      placeholder: "Enter firstname",
      value: inputValue.firstName,
    },
    {
      label: "lastName",
      placeholder: "Enter lastName",
      value:inputValue.lastName,
    },
    {
      label: "email",
      placeholder: "Enter email",
      value: inputValue.email,
    },
    {
      label: "gender",
      placeholder: "Enter gender",
      value:  inputValue.gender,
    },
    {
      label: "createdDate",
      placeholder: "Enter create",
      value: "",
    },
    {
      label: "updatedDate",
      placeholder: "Enter name",
      value: "",
    },
    {
      label: "lastVisited",
      placeholder: "Enter email",
      value: "",
    },
    {
      label: "speciality",
      placeholder: "Enter email",
      value: "",
    },
    {
      label: "phoneNumber",
      placeholder: "Enter email",
      value: "",
    },
  ];
  const handleChange =(e:any)=>{
 setInputValue({
    ...inputValue,
    [e.target.name]: e.target.value
 })

  }
  const renderData =(prop:dataTypes ,values:childernType)=>{
return(<>
<label htmlFor="">{prop.label}</label>
<input onChange={handleChange} placeholder={prop.placeholder} name={prop.label}/>

</>)
  }
  console.log(inputValue)
  return (
    <div>
      <FormModal<dataTypes,childernType> data={datas} values={tableData} title="MY GENERIC APP" onSave={HandleSave}>
        {(value , values)=>renderData(value , values)}
      </FormModal>
    </div>
  );
};

export default App;

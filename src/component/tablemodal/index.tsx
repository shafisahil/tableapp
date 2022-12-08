import React, { useState } from 'react';
import tableDatalist from "../../jsonData/tabledata.json"
import App from '../formmodal';
import TableModal from './tableModal';
export interface TableType{

    id?:string ,
    firstName ?:string,
    lastName?:string ,
    email?:string ,
    gender?:string ,
    createdDate?:string ,
    updatedDate?:string ,
    role?:string ,
    lastVisited?:string ,
    speciality?:string ,
    phoneNumber?:string ,
    image?:string
}
const RenderTable = () => {
  const tableDat:TableType[] =tableDatalist.map((e)=>{return e})
  const [tableData, setTableData] = useState(tableDat);
  const [isopen, setisopen] = useState(false);
  
  

const rendertabledata =(prop:TableType)=>{
    const handleDel=(id:any)=>{
        const index =tableData.filter((e)=>e.id !==id)
        setTableData(index)
    }
    const handleEdit=(id:any)=>{
        const index =tableData.findIndex((e)=>e.id ===id)
        console.log(index)
    
        
        setisopen(true)
    }
    
    return(
        <>
        <div>name ={prop.firstName}</div>
        <button onClick={()=>handleDel(prop.id)} >Delete</button>
        <button onClick={()=>handleEdit(prop.id)} >handleEDit</button>
        </>
    )
}

  return (
    <div>
      <TableModal<TableType> dataTable={tableData} isopen={()=>setisopen(!isopen) } >
        {(value) =>rendertabledata(value)}
      </TableModal>
      {isopen && <App tableData={tableData} setTableData={setTableData}/>}
    </div>
  );
}

export default RenderTable;

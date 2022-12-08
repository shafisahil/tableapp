import React from 'react';
interface tableType<T>{
  tittle?:string,
  children?:(item:T)=>JSX.Element
  dataTable:T[];
  isopen:()=>void
}
const TableModal = <T extends {}>(prop:tableType<T>) => {
  return (
    <div>
      <h1>{prop.tittle}</h1>
      <h2>{prop.dataTable.map((e)=>prop.children?.(e))}</h2>
      <button onClick={prop.isopen}>Open</button>
    </div>
  );
}

export default TableModal;

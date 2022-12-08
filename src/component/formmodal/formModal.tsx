import React from 'react';
interface formType<T ,D>{
    title?:string,
    children?:(item:T , values:D) =>JSX.Element,
    values:D
    data:T[]
    onSave:()=>void
}
const FormModal = <T extends {} ,D extends {}>(prop:formType<T ,D>) => {
  return (
    <div>
      <h1>{prop.title}</h1>
      <h2>{prop.data.map((value)=>prop.children?.(value ,prop.values))}</h2>
      <button onClick={prop.onSave}>save</button> 
    </div>
  );
}

export default FormModal;

import React,{useState} from 'react'

function FiltroDeBusqueda() {


const List=[
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
];
const[mylist, setMylist]=useState(List)
const handleSearch=(event)=>{
 if(event.target.value ===""){
    return setMylist(List);
    //con if valuamos y se ingreso texto o no, si esta vacio retorna toda la lista 
 }
 const searchList = List.filter((item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
 setMylist(searchList);
 // aqui filtramos todos los valores de la lista con filter  toLowerCase= combierte todo lo ingresado en el input a minuscula 
 //indexOf()= busca el element 
}

  return (
    <div>
        Search: <input type="text" onChange={handleSearch}/>
        {mylist.map((item)=>
        (<div>{item}</div>))}
        {/* Aqui mostramos los elemento en List */}

    </div>
  )
}

export default FiltroDeBusqueda
//https://upmostly.com/tutorials/react-onchange-events-with-examples
import React,{useState, useEffect} from 'react'

const ObjetenerDatosDeUsuarios=()=> {
    const[list, setList]= useState({})
    const UserList=async()=>{
        const usersR = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${usersR}`)
        const responseJson=await response.json();
        setList(responseJson);
    };
    useEffect(()=>{
        UserList();
    },[]);
    const reset =async()=>{
        await UserList();
    }
  return (
    <>
       <button onClick={()=> reset()}>Reset</button> 
       <h1>User Data</h1>
        <p>
            <strong>Name: </strong>{list.name}
            
        </p>
        <p>
            <strong>Web Site: </strong>{list.website}
        </p>
        <p>
            <strong>Email: </strong>{list.email}
            
        </p>
        <p>
            <strong>Phone: </strong>{list.phone}
            
        </p>
    </>
  )
}

export default ObjetenerDatosDeUsuarios
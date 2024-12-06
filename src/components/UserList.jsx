import React from 'react'

export const UserList = ()=>{
    const users = [
        {id:1, name:'Telephone', price:"$699"},
        {id:2, name: "Laptop", price: "$1200"},
        {id:3, name:"Charli", price:"$199"}
    ]
    return (
        <div>
            {users.map(user=>(
                <ol key = {user.id}>
                    <li>Name: {user.name}</li>
                    <li>Price: {user.price}</li>
                    <li>Id: {user.id}</li>
                </ol>
            ))}
        </div>
    )}

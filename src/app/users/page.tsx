import { list } from 'postcss';
import React from 'react'
interface User{
  id : number;
  name: String;
  email: String;
}
const UsersPage = async ()  => {
  //yesma 10 sec ma user datas haru randomly change hunca 
  //const res = await fetch('https://jsonplaceholder.typicode.com/users',
   // {next : {revalidate :10 }}
  //);

  //yesma chai cache ma store
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users : User[] = await res.json();
  return (
    <div>
      <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user=> <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          </tr>)}  
        </tbody>
      </table>  
      </>
    </div>
  )
}

export default UsersPage

import React, { useEffect, useState } from 'react'
import UserItem from '../UserItem';
import userService from '@/app/Services/UserService';


function UserPanel({ selectUser }:{selectUser:(id:string)=>void}) {
  const [users, setUsers] = useState<any[]>([]);
  async function fetchUser() {
    const users: any[] = await userService.getUsers();
    setUsers(users);
  }
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <div className="w-[300px] border border-black ">
      <div className="p-3 border-b border-black text-center">
        <h3>Most Recommended</h3>
      </div>
      <div className="border-b border-black text-center">
        <ul>
          {users.slice(0, 6).map((user) => (
            <UserItem user={user} key={user.email} selectUser={selectUser} />
          ))}
        </ul>
      </div>
      <div className="border-b border-black text-center h-[30px]"></div>
      <div className="text-center">
        <ul>
          {users.slice(6, 12).map((user) => (
            <UserItem user={user} key={user.email} selectUser={selectUser} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPanel;
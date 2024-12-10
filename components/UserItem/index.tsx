import Image from 'next/image'
import React from 'react'


function UserItem({ user, selectUser }: { user: any; selectUser :(id:string)=>void}) {
  return (
    <li className="flex items-center justify-between m-auto w-[250px] my-4 border-b pb-3">
      <div>
        <Image
          src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
          className="w-10 h-10 rounded-full"
          height={24}
          width={24}
          alt={user.name}
        />
      </div>
      {user.name}
      <button
        onClick={()=>selectUser(user.id)}
        className="h-8 min-w-8 inline-flex justify-center items-center text-blue-700 border border-blue-700 rounded-full"
      >
        +
      </button>
    </li>
  );
}

export default UserItem
"use client"
import React from 'react'
import HeatBox from '../HeatBox';


function HeatMap({ selectedUser }: { selectedUser :any}) {
  console.log("selected", selectedUser);
  const skillset = selectedUser[0]?.data?.data?.skillset;
  return (
    <div className="flex p-5">
      <div>
        <ul>
          {skillset?.map((skill: any) => (
            <li className="h-9" key={skill.name}>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex'>
        {selectedUser.map((user: any, ) => (
          <ul key={user.id}>
            {user?.data?.data?.skillset.map((skill:any) => (
              <li key={skill.id}><HeatBox score={skill.skills[0].pos[0].consensus_score} /></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default HeatMap;
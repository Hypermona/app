"use client"
import Header from "@/components/Header";
import HeatMap from "@/components/HeatMap";
import Tabs from "@/components/Tabs";
import UserPanel from "@/components/UserPanel";
import { useState } from "react";
import userService from "./Services/UserService";

export default  function Home() {
  const [selectedUser, setSelectedUser] = useState<any[]>([])
  async function  selectUser(id:string){
    const user=await userService.getUser(id)
    setSelectedUser((prev)=>[...prev,user])
  }
  return (
    <div>
      <Header />
      <div className={"flex"}>
        <UserPanel selectUser={selectUser} />
        <div className="w-[calc(100vw - 350px)] ml-[40px]">
          <Tabs />
          <HeatMap selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
}

import { BtnHeader } from "./components/Btn/BtnHeader";
import { IoMenu } from "react-icons/io5";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import { Aside } from "../Aside/Aside";

export const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

    return ( 
        <>
        <div className="w-full h-[70px] px-6 flex justify-between items-center bg-[#272727]">
            <div className="flex ">
                <div className="w-10 h-10 rounded-full bg-white">logo</div>
                <div className="hidden">Anime Raifu</div>
            </div>
            <div className="flex relative gap-3">
                <Aside isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                {sidebarOpen && (
                    <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleSidebar}
                    ></div>
                )}
                <BtnHeader title="Top" />
                <BtnHeader title="Catalogo" />
                <NavBar />
                
                <div className="lg:hidden">
                    <IoMenu onClick={()=>toggleSidebar()} className="text-5xl" />
                </div>
                
                
                
            </div>
            
        </div>
            
               
    </> 
    );
}

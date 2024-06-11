import { NavBar } from "./components/NavBar/NavBar";
import { BtnSideBar } from "./components/Btn/BtnSideBar";
import { Title } from "../Title/Title";

export const Aside = ({ isOpen, toggleSidebar }) => {
    return ( 
        <div className={`fixed flex flex-col gap-2 top-0 right-0 h-full w-64 sm:w-80 p-3 bg-gray-900 text-white transform 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}  duration-300 z-20`}>
            
            <NavBar/>
            <Title title="Filtro"/>
            <div className="w-full flex gap-1 justify-between sm:px-2">
                <BtnSideBar title="Top" />
                <BtnSideBar title="Catalogo" />
            </div>

            <button className="absolute hidden bg-white top-0 right-0 mt-4 mr-4 text-2xl" onClick={() => toggleSidebar()}>
                boton
            </button>
        </div>
     );
}
 

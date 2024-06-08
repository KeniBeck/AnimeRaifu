export const Aside = ({ isOpen, toggleSidebar }) => {
    return ( 
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}  duration-300 z-20`}>
            <button className="absolute bg-white top-0 right-0 mt-4 mr-4 text-2xl" onClick={()=>toggleSidebar()}>
boton
            </button>


        </div>
     );
}
 

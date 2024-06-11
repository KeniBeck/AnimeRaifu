export const BtnSideBar = ({title}) => {
    return ( 
        <div className="">
            <div className="w-28 sm:w-32 py-1.5  flex text-center justify-center rounded-3xl text-xl font-medium cursor-pointer text-slate-900 bg-slate-500 hover:bg-slate-600 ">
                {title}
            </div>
        </div>
    );
}
 

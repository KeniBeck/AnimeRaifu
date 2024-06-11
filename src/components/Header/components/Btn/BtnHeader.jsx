export const BtnHeader = ({title}) => {
    return ( 
        <div className="hidden lg:block">
            <div className="w-32 py-2 flex text-center justify-center rounded-3xl text-xl font-medium cursor-pointer text-slate-900 bg-slate-500 hover:bg-slate-600 ">
                {title}
            </div>
        </div>
    );
}
 

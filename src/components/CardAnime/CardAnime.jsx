import PruebaJujutsu from "../../../public/img/pruebaJujutsu.jpeg"


export const CardAnime = () => {
    return ( 
        <div className="w-[150px] flex flex-col gap-1 p-2.5 rounded-xl bg-slate-200">
            <div className="w-full flex justify-center h-44 rounded-lg bg-slate-400">
                <img className="rounded-lg h-auto" src={PruebaJujutsu} alt=""/>
            </div>
            <div className="text-lg font-semibold">Name</div>
            <div className="w-16 h-6 flex justify-center items-center font-semibold rounded-lg bg-red-500">Estado</div>
        </div>
    );
}
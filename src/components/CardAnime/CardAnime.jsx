import PruebaJujutsu from "../../../public/img/pruebaJujutsu.jpeg"


export const CardAnime = () => {
    return ( 
        <div className="w-[150px] md:w-[200px] xl:w-[240px] flex flex-col gap-1 p-2.5 rounded-xl md:rounded-2xl bg-slate-200">
            <div className="w-full h-44 md:h-60 xl:h-72 flex justify-center rounded-lg  bg-slate-400">
                <img className="rounded-lg md:rounded-xl h-auto" src={PruebaJujutsu} alt=""/>
            </div>
            <div className="text-lg md:text-2xl font-semibold">Name</div>
            <div className="w-16 h-6 md:w-20 md:h-7 md:text-lg flex justify-center items-center font-semibold rounded-lg bg-red-500">Estado</div>
        </div>
    );
}
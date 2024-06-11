import { CardAnime } from "../CardAnime/CardAnime";
import { Title } from "../Title/Title";


export const Top = () => {
    return ( 
        <div className="w-full flex flex-col gap-4 py-3 px-4">
            <Title title="Top global"/>
            
            <div className="w-full lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-between">
                <div className="w-full max-h-[250px] lg:max-h-[1000px] xl:max-h-full lg:mb-0 flex flex-col lg:w-1/3 mb-4 ">
                    <div className="py-2 text-lg md:text-2xl font-bold text-center rounded-t-xl bg-slate-200 sm:bg-slate-300 ">
                        Que son los top global
                    </div>
                    <div className="p-4 font-medium md:text-lg  rounded-b-xl text-center bg-slate-300  sm:bg-slate-400">
                        Únete al Anime que está triunfando
                        globalmente y atrayendo a miles de
                        usuarios. Los fanáticos comparten sus
                        pasiones en un espacio dinámico.
                        ¡Conéctate con personas
                        que comparten tus intereses!
                    </div>
                    <div className="hidden lg:block w-full h-full mt-4 bg-black"></div>
                </div>        
                <div className="w-full lg:w-2/3 flex flex-wrap justify-center gap-3 md:gap-5 pt-4 sm:p-4 sm:bg-[#9F9F9F] sm:rounded-2xl">
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                    <CardAnime />
                </div>
            </div>
        </div>
    );
}

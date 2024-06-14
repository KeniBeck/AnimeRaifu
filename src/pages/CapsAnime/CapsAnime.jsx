import { InfoAnime } from "./components/InfoAnime/InfoAnime";
import { InfoAnimeMobile } from "./components/InfoAnimeMobile/InfoAnimeMobile";
import { Episodios } from "../../components/Episodios/Episodios";

export const CapsAnime = () => {
    return (  
        <div className=" p-3 flex flex-col justify-center items-center gap-2 bg-[#cfcfcf]">
            
            <InfoAnimeMobile />
            <InfoAnime/>
            <Episodios/>
        </div>
    );
}
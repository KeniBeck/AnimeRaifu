import { CardAnime } from "../CardAnime/CardAnime";

export const Top = () => {
    return ( 
        <div className="w-full flex flex-col gap-4 py-3 ">
            <div className="px-5 font-medium text-2xl">Top global</div>
            <div className="px-4 w-full flex flex-wrap justify-center gap-3 ">
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime/>
            </div>
        </div>
    );
}
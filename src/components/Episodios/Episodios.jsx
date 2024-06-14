import { Title } from "../Title/Title";
import { Capitulos } from "./components/Capitulos/Capitulos";

export const Episodios = () => {
    return (  
        <div className="flex flex-col gap-3 xl:px-16">
            <Title title="Episodios" />
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
            </div>
        </div>
    );
}

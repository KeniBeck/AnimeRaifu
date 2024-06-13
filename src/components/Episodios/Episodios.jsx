import { Title } from "../Title/Title";
import { Capitulos } from "./components/Capitulos/Capitulos";

export const Episodios = () => {
    return (  
        <div className="flex flex-col gap-3">
            <Title title="Episodios" />
            <div className="flex flex-wrap gap-2">
                <Capitulos />
                <Capitulos />
                <Capitulos/>
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos />
                <Capitulos/>
                <Capitulos />
                <Capitulos />
                <Capitulos/>
            </div>
        </div>
    );
}

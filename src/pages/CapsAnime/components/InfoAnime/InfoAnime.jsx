import pruebaJujutsu from '/public/img/pruebaJujutsu.jpeg'

export const InfoAnime = () => {
    return ( 
        <div className="w-full max-w-[1200px] hidden sm:block">
            <div className="w-full flex flex-col rounded-2xl px-5 py-4 lg:px-8 gap-3 bg-[#9F9F9F] ">
                <div className="w-full text-4xl font-semibold ">Jujutsu kaisen </div>
                <div className="w-full flex gap-3 lg:px-4">  
                    <div className="w-1/3 flex flex-col gap-3">   
                        <div className="w-full flex flex-col gap-2 ">
                            <div className="w-full">
                                <img className="w-full max-w-80 rounded-lg  h-auto" src={pruebaJujutsu} alt=""/>
                            </div>
                            <div className="w-full text-lg font-medium lg:hidden">
                                <div className="">- asdasd</div>
                                <div className="">- asdasdasd</div>
                                <div className="">- gdfgxvxc</div>
                                <div className="">- asdasdar</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-2">
                        <div className="text-3xl font-medium">Sinopsis</div>
                        <div className=" h-64 md:h-auto text-lg leading-snug font-medium md:overflow-hidden overflow-y-scroll">
                            Seguimos a Yuji Itadori, un estudiante con habilidades físicas
                            excepcionales que se une a la escuela de magia para combatir
                            maldiciones. Junto a Megumi Fushiguro y Nobara Kugisaki, se
                            enfrentan a diversas amenazas sobrenaturales. Yuji debe controlar
                            el poder de Ryomen Sukuna, un demonio poderoso que se encuentra
                            dentro de su cuerpo. Con la guía de su instructor, Satoru Gojo,
                            luchan contra enemigos poderosos mientras descubren más sobre el
                            mundo de las maldiciones. En la segunda temporada se cubrirá el
                            arco que presenta la relación de Satoru Gojo con Suguru Geto y su
                            primer encuentro con Toji Fushiguro, el padre de Megumi. Por otra
                            parte, veremos el tan esperado arco del "incidente de Shibuya".
                        </div>
                        <div className="w-full text-lg font-medium hidden lg:block">
                            <div className="">- asdasd</div>
                            <div className="">- asdasdasd</div>
                            <div className="">- gdfgxvxc</div>
                            <div className="">- asdasdar</div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

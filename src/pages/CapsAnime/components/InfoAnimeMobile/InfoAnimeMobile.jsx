import pruebaJujutsu from '/img/pruebaJujutsu.jpeg'


export const InfoAnimeMobile = () => {
    return (  
        <div className="w-full flex flex-col rounded-2xl px-4 py-3 gap-3 sm:hidden bg-[#9F9F9F] ">
            <div className="text-4xl font-semibold ">Jujutsu kaisen </div>
            <div className="w-full flex gap-3 ">
                <div className="w-full">
                    <img className="rounded-lg  h-auto" src={pruebaJujutsu} alt=""/>
                </div>
                <div className="w-full text-lg font-medium">
                    <div className="">- asdasd</div>
                    <div className="">- asdasdasd</div>
                    <div className="">- gdfgxvxc</div>
                    <div className="">- asdasdar</div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-3xl font-medium">Sinopsis</div>
                <div className="w-full h-40 text-lg leading-snug font-medium overflow-y-scroll">
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
            </div>
        </div>
        
    );
}
 
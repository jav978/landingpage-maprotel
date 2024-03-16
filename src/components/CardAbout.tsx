import  {cardData}  from "../data/card-data.ts";
import "../css/styles.css";

const Data = cardData;

import "@fontsource/bakbak-one";



const CardAbout = () => {

   
    return (
        <>
            <section
                className="dark:bg-gradient-to-r  dark:to-slate-700"
                id="profolio"
            >
                <h1 className="text-3xl text-center lg:text-4xl mb-10 mt-4 dark:text-white px-8">
                    Portafolio de Productos y Servicios
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mx-4 lg:mx-20">
                    {Data.map((card:any) => (
                        <div className="rounded-3xl  shadow-lg dark:shadow-lg overflow-hidden h-65">
                            <div className=" mx-auto text-centerddark:bg-slate-400">
                                <img
                                    className="bg-slate-50 p-4 h-60 w-[100%] dark:bg-stone-100"
                                    src={card.img.src }
                                    alt={card.alt}
                                />
                            </div>
                            <div className="p-4 bg-sky-500 h-[100%] dark:bg-slate-700 ">
                                <h3 className="text-xl font-bold mb-4 text-center  text-white">
                                    {card.title.toUpperCase()}
                                </h3>
                                <p className="px-2 dak:text-whiter  text-center font-normal text-white">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CardAbout;

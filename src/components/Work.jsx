import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Work = ({title, description, iconList, pictureList, bgColor}) => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);

    return (
        <div className={"flex justify-center text-center w-full min-h-[150vh] text-gray-600 "+bgColor}>
            
            <div >
                <h2 className="mb-12 mt-24 text-3xl" data-aos="fade-up">{title}</h2>
                <p className="text-lg px-[20vw] description text-left" data-aos="fade-up">{description}</p>
                <div className="flex justify-center mt-12" data-aos="fade-up">
                    <div className="flex justify-between">
                        {iconList.map((icon, index) => (
                                <span key={index} className="mr-4">{icon}</span>
                        ))}
                    </div>
                </div>
                <div className="w-full flex justify-center mt-8 " data-aos="fade-right">
                    <div className="relative w-[800px] max-w-[100vw] h-[200px]">
                        {pictureList.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt=""
                                className={`h-[400px] absolute transition-transform duration-300 hover:scale-105 hover:z-30 shadow-lg rounded ${index === 0 ? "left-0 top-10 z-20" : "top-50 right-0 z-10"}`}
                            />
                        ))}
                    </div>
                </div>


            </div>
            
        </div>
    );
}

export default Work;

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Work = ({ title, description, iconList, pictureList, bgColor, projectLink }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className={`flex justify-center text-center w-full min-h-screen text-gray-600 ${bgColor}`}>
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 mt-20 text-2xl sm:text-3xl" data-aos="fade-up">
                    {title}
                </h2>
                <div className='mb-12 '  data-aos="fade-up">
                    <a
                        className="py-2 px-4 shadow-md rounded bg-slate-600 text-white"
                        target="_blank"
                        href={projectLink}
                    >
                        專案連結
                    </a>
                </div>
                <p
                    className="text-base sm:text-lg sm:px-[10vw] px-4 text-left description"
                    data-aos="fade-up"
                >
                    {description}
                </p>
                <div className="flex justify-center mt-8" data-aos="fade-up">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {iconList.map((icon, index) => (
                            <span key={index} className="text-2xl">
                                {icon}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-24 w-full flex justify-center mt-8" data-aos="fade-right">
                    <div className="relative w-full max-w-[800px] h-auto flex flex-col sm:flex-row items-center justify-center gap-6">
                        {pictureList.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt=""
                                className="w-[80%] sm:w-[45%] h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

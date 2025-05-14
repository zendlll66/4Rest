import React, { useState } from 'react';

const Cardblog = ({ image, title, description, date }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full h-full group">
            <div className="w-full relative gap-4 h-[500px] overflow-hidden">
                <img
                    src={`/assets/images/card-bg${image}.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-30 text-white">
                    {/* Title */}
                    <h1
                        className="
                            text-2xl font-bold 
                            transform transition-all duration-800 
                            group-hover:-translate-y-80 mb-2
                        "
                    >
                        {title}
                    </h1>

                    {/* Description (อยู่ตลอด) */}
                    <p className="text-sm ">{description}</p>

                    {/* Date (fade-up) */}
                    <p
                        className="
                            text-sm mt-2
                            opacity-0 translate-y-2
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-500 ease-out
                        "
                    >
                        {date}
                    </p>

                    {/* Button (fade-up) */}
                    <button
                        className="
                            bg-white text-black px-3 py-1 rounded-md mt-2
                            opacity-0 translate-y-2
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-500 ease-out
                        "
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'less' : 'more'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cardblog;

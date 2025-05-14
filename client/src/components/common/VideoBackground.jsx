import React, { useRef, useEffect } from "react";

const VideoBackground = () => {
    const videoRef = useRef(null);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         // Set playback rate to 0.5 (half speed)
    //         videoRef.current.playbackRate = 0.5;
    //     }
    // }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="assets/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md mb-5">
                    ธรรมชาติไม่ได้หายไปไหน แค่คุณยังไม่มาหามัน
                </h1>
                <p className="mt-4 text-lg md:text-2xl drop-shadow-sm text-[#C5C5BE]">
                    ออกเดินทางไปกับเรา
                </p>
            </div> */}
        </div>
    );
};

export default VideoBackground;

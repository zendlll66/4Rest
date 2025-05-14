import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let rafId;

        const animate = () => {
            currentX += (mouseX - currentX) * 0.18; // smoothness
            currentY += (mouseY - currentY) * 0.18;
            if (cursor) {
                cursor.style.transform = `translate3d(${currentX - 15}px, ${currentY - 15}px, 0)`;
            }
            rafId = requestAnimationFrame(animate);
        };

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener('mousemove', onMouseMove);
        rafId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="
      fixed
      top-0 left-0
      w-[40px] h-[40px]
      rounded-full
      bg-white/5
      border-2 border-white
      pointer-events-none
      z-[9999]
      transition-colors duration-200
      backdrop-blur-sm"
            style={{
                mixBlendMode: 'difference',
                willChange: 'transform'
            }}
        />
    );
};

export default CustomCursor; 
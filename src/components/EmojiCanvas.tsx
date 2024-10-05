// @ts-nocheck
import { useEffect, useRef } from "react";
import Emoji from "./Emoji";

const EmojiScene = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const emojis = useRef([]);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        let ctx = canvasRef.current.getContext("2d");
        let animationID = null;
        let mouseX, mouseY;
        let width, height;

        const onResize = () => {
            if (!containerRef.current || !canvasRef.current) return;

            // width = containerRef.current.offsetWidth;
            // height = containerRef.current.offsetHeight;

            //instead make the width and height mased on screen width and height

            width = window.innerWidth;
            height = window.innerHeight;


            canvasRef.current.style.width = `${width}px`;
            canvasRef.current.style.height = `${height}px`;
            canvasRef.current.width = width;
            canvasRef.current.height = height;

            emojis.current.forEach((emoji) =>
                emoji.onResize({ width, height })
            );
        };

        const onMouseMove = (e) => {
            const bbox = e.target.getBoundingClientRect();

            mouseX = e.clientX - bbox.left;
            mouseY = e.clientY - bbox.top;
        };

        onResize();

        window.addEventListener("resize", onResize);
        containerRef.current.addEventListener("mousemove", onMouseMove);

        emojis.current = new Array(10).fill(0).map(
            (_) =>
                new Emoji({
                    width,
                    height,
                })
        );

        const desiredFrameRate = 120; // Frames per second
        let previousTimeStamp = performance.now();

        const animate = (timestamp) => {
          const timeSinceLastFrame = timestamp - previousTimeStamp;
          const targetFrameDuration = 1000 / desiredFrameRate; // Duration between frames in milliseconds

          if (timeSinceLastFrame >= targetFrameDuration) {
            previousTimeStamp = timestamp;
            ctx.clearRect(0, 0, width, height);
            emojis.current.forEach((emoji) => emoji.update(mouseX, mouseY));
            emojis.current.forEach((emoji) => emoji.render(ctx));
          }

          animationID = requestAnimationFrame(animate);
        };

        animationID = animate();

        return () => {
            try {
                cancelAnimationFrame(animationID);
                window.removeEventListener("resize", onResize);
                containerRef.current.removeEventListener(
                    "mousemove",
                    onMouseMove
                );
            } catch (e) {}
        };
    }, [containerRef, canvasRef]);

    return (
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-transparent" ref={containerRef}>
            <canvas
              className="pointer-events-none absolute top-0 left-0 h-full w-full"
              ref={canvasRef}></canvas>
        </div>
    );
};

export default EmojiScene;

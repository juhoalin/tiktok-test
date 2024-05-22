import React, { useRef, useEffect } from 'react';

const VideoComponent = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play(); // Play the video when it is in view
                    videoRef.current.muted = false; // Unmute the video when playing
                } else {
                    videoRef.current.pause(); // Pause the video when it goes out of view
                    videoRef.current.muted = true; // Mute the video when paused
                }
            });
        }, { threshold: 0.5 });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [videoRef.current]);

    return (
        <div className='container'>
            <video ref={videoRef} className='video-component' autoPlay muted loop>
                <source src={src} type="video/mp4" />
            </video>
      
            <style jsx>{`
                .container {
                    min-width: 300px;
                    min-height: 600px;
                    max-width: 300px;
                    max-height: 500px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 600px) {
                    .container {
                        min-width: 100vw;
                        min-height: 100vh;
                        max-width: 100vw;
                        max-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                .video-component {
                    min-width: 100%;
                    min-height: 100%;
                    object-fit: cover; /* Makes sure the video covers the container */
                }
            `}</style>
        </div>
    );
};

export default VideoComponent;
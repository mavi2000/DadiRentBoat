import React, { useEffect, useRef, useState } from 'react';

const HeroVideo = ({ ...props }) => {
  const [isMuted, setIsMuted] = useState(true);
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  const isIOS = useRef(/iPad|iPhone|iPod/.test(navigator.userAgent));

  useEffect(() => {
    if (!cloudinaryRef.current) {
      cloudinaryRef.current = window.cloudinary;
      cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloud_name: 'dqyayxdnq',
        // fluid: true, // Optional for responsive video
        controls: false,
        muted: isMuted,
        showJumpControls: false,
        pictureInPictureToggle: true,
        autoplay: true,
        loop: true,
        aiHighlightsGraph: true,
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isIOS.current) {
        videoRef.current?.pause(); // Pause on scroll for iOS
      } else {
        // Use IntersectionObserver for other browsers
        let options = {
          rootMargin: '0px',
          threshold: [0.25, 0.75],
        };

        let handlePlay = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef?.current?.play();
              setIsMuted(false);
            } else {
              videoRef?.current?.pause();
              setIsMuted(true);
            }
          });
        };

        let observer = new IntersectionObserver(handlePlay, options);
        observer.observe(videoRef.current);
      }
    };

    const handleTouchMove = () => {
      videoRef.current?.pause(); // Pause on touch move for iOS
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 h-[100svh] md:min-h-[calc(100vh+6rem)] w-full object-fill max-h-[36rem]">
        <video
          onContextMenu={(e) => e.preventDefault()}
          onLoadedData={() => {
            console.log('Dadi intro Video loaded');
          }}
          playsInline
          ref={videoRef}
          data-cld-public-id="Dadi_Rent_-_hero-section_ifd37v"
          className="cld-video-player cld-video-player-skin-dark w-full h-[100svh] md:min-h-[calc(100vh+6rem)] max-h-[36rem] !object-cover"
        />
      </div>
      <br />
    </>
  );
};

export default HeroVideo;

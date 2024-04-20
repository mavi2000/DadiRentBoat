import React, { useEffect, useRef, useState } from 'react';

const ISAVideo = ({ ...props }) => {
  const [isMuted, setIsMuted] = useState(true);
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  const isIOS = useRef(/iPad|iPhone|iPod/.test(navigator.userAgent));

  useEffect(() => {
    if (!cloudinaryRef.current) {
      cloudinaryRef.current = window.cloudinary;
      if (cloudinaryRef.current) {
        cloudinaryRef.current.videoPlayer(videoRef.current, {
          cloud_name: 'dtknqgojs',
          // fluid: true, // Optional for responsive video
          controls: true,
          muted: isMuted,
          showJumpControls: true,
          pictureInPictureToggle: true,
          autoplay: true,
          loop: true,
          aiHighlightsGraph: true,
          logoOnclickUrl: 'https://isaconsulting.com/',
          logoImageUrl:
            'https://res.cloudinary.com/dtknqgojs/image/upload/v1711149659/ISA_Intro_video/xlnohp0vbrhjaccrij8i.svg',
          info: {
            title: 'ISA-Consulting',
          },
        });
      }
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

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        videoRef.current?.pause(); // Mute on tab visibility change
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="my-4 h-[50svh] md:min-h-[calc(100vh-5rem)] max-h-[36rem]">
        <video
          onContextMenu={(e) => e.preventDefault()}
          onLoadedData={() => {
            console.log('ISA intro Video loaded');
          }}
          playsInline
          ref={videoRef}
          data-cld-public-id="ISA_Intro_video/zii5oaklxdstpai5fbfj"
          className="cld-video-player cld-video-player-skin-dark w-full h-[50svh] md:min-h-[calc(100vh-5rem)] max-h-[36rem]"
        />
      </div>
      <br />
    </>
  );
};

export default ISAVideo;

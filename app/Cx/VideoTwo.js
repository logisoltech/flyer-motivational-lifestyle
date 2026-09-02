"use client";

import { FaPlay } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function VideoTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(true);
    v.play().catch(() => setIsPlaying(false));
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <div
        className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-3xl sm:rounded-[1.75rem]"
        data-aos="zoom-in-up"
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/flyer-video.mp4"
          playsInline
          preload="metadata"
          controls={isPlaying}
          onEnded={handleEnded}
        />

        {/* OVERLAY + BUTTON */}
        {!isPlaying && (
          <>
            <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />

            <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
              <button
                type="button"
                onClick={handlePlay}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-3.5 sm:text-base"
                aria-label="Play video"
              >
                <FaPlay
                  className="size-3.5 shrink-0 text-red-600 sm:size-4"
                  aria-hidden
                />
                Play video
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
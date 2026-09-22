"use client";

import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function VideoTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
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

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setIsPlaying(true);
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const next = Number(e.target.value);
    v.currentTime = next;
    setCurrentTime(next);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      v.requestFullscreen?.();
    }
  };

  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3">
        <div
          className="relative aspect-video w-full overflow-hidden rounded-3xl sm:rounded-[1.75rem]"
          data-aos="zoom-in-up"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/new-flyer.mp4"
            playsInline
            preload="metadata"
            onEnded={handleEnded}
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!isPlaying && currentTime === 0 && (
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

        {/* Controls outside the video */}
        <div className="flex w-full items-center gap-3 rounded-full bg-neutral-900/90 px-4 py-2.5 text-white shadow-md">
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FaPause className="size-3.5" aria-hidden />
            ) : (
              <FaPlay className="size-3.5" aria-hidden />
            )}
          </button>

          <span className="shrink-0 text-xs tabular-nums text-white/90 sm:text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="h-1.5 w-full cursor-pointer accent-white"
            aria-label="Seek"
          />

          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <FaVolumeMute className="size-3.5" aria-hidden />
            ) : (
              <FaVolumeUp className="size-3.5" aria-hidden />
            )}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10"
            aria-label="Fullscreen"
          >
            <FaExpand className="size-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

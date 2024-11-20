"use client";

import { useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import { Element } from "react-scroll";
import YouTube from "react-youtube";

interface VideoProps {
  videoId: string;
}

export const Video = ({ videoId = "1U2AL8abSgg" }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Configuración para el player de YouTube
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      controls: 1,
    },
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Element name="video" className="w-full flex justify-center">
      <div className="my-20 w-full max-w-6xl px-4">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/5">
          {!isPlaying ? (
            <>
              <div className="absolute inset-0">
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/40 group"
                aria-label="Play video"
              >
                <div className="rounded-full bg-white/90 p-4 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <IoPlayCircle className="h-12 w-12 text-black" />
                </div>
              </button>
            </>
          ) : (
            <div className="absolute inset-0">
              <YouTube
                videoId={videoId}
                opts={opts}
                className="w-full h-full"
                iframeClassName="w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </Element>
  );
};

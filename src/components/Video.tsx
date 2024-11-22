"use client";

import Image from "next/image";
import { useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import { Element } from "react-scroll";
import YouTube from "react-youtube";
import imagenVideo from "../../public/imagenes/video.png";

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
      <div className=" my-10 lg:my-20 w-full max-w-6xl px-4">
        <h3 className="lg:text-[48px] text-[36px] leading-tight font-bold mb-6 lg:mb-10">
          Conozca nuestra historia.
        </h3>
        <div className="relative  aspect-[9/16] md:aspect-video w-full rounded-2xl overflow-hidden bg-black/5">
          {!isPlaying ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src={imagenVideo}
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
                <IoPlayCircle className="h-20 w-20 text-white" />
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

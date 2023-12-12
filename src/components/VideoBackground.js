import React from "react";
import { useCurrentMovieTrailer } from "../hooks/useCurrentMovieTrailer";
import { useSelector } from "react-redux";


export default function VideoBackground({ movieId }) {
  useCurrentMovieTrailer(movieId);
  const trailerID = useSelector((store) => store.movie?.currentMovieTrailer)
  if (!trailerID) return;
  return (
    <>
       
       <div className="overflow-hidden">
        <iframe
          className="w-screen aspect-video  "
          src={"https://www.youtube.com/embed/" + trailerID.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

        ></iframe>
       </div>
    </>
  );
}

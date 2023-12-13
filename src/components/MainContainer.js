import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

export default function MainContainer() {

    const movies = useSelector((store) => store.movie?.nowPlaying)

    if (!movies) return;
    const mainMovie = movies[16];
    const { original_title, overview,id } = mainMovie

    return (
        <>
                <VideoTitle title={original_title}
                    description={overview}
                />
                <VideoBackground movieId={id} />
        </>
    )
}

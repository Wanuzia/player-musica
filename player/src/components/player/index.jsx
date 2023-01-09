import * as S from "./player.styles.js";
import React, { useEffect, useState } from "react";
import { music } from "../../resources/musics.js";
import { durationInSeconds, formatTime } from "../../utils/durationInSeconds.js";

const audio = new Audio();

export const MusicCardPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = () => {
    audio.src = music[(currentIndex + 1) % music.length].src;
    setCurrentIndex((currentIndex + 1) % music.length);
    if(isPlaying) {
      audio.play()
    }
  };
  const updateProgress = () => {
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handlePlay = () => {
    audio.src = music[currentIndex].src;
    audio.play();
      setIsPlaying(true);
  };

  const handlePause = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const handlePrev = () => {
    audio.src = music[(currentIndex - 1 + music.length) % music.length].src;
    setCurrentIndex((currentIndex - 1 + music.length) % music.length);
    if(isPlaying) {
      audio.play()
    }    
  };

  const timeformated = durationInSeconds(music[currentIndex].duration)
  
  useEffect(() => {
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentIndex, handleNext]);

  
  return (
    <S.MusicCard>
      <img src="https://res.cloudinary.com/dc8mp7dgl/image/upload/v1673196798/hans-unsplash_rkmfqe.png" alt="Imagem em dois tons de lilás, que lembram uma flor." />
      <h3>{music[currentIndex].title}</h3>
      <p>{music[currentIndex].artist}</p>
      <p className="time-elapsed">{formatTime(audio.currentTime)} / {formatTime(timeformated)}</p>
      <div className="progress-bar" style={{ width: `${progress}%`, background: '#E1E1E6', borderRadius: '20px', height: '5px' }} />
      <button onClick={handlePrev}><img src="https://res.cloudinary.com/dc8mp7dgl/image/upload/v1673227415/Vectorpreview_ovwdrk.png" alt="ícone de anterior"/></button>
      {isPlaying ? (
        <button onClick={handlePause}><img src="https://res.cloudinary.com/dc8mp7dgl/image/upload/v1673228178/pause_jfqili.svg" alt="ícone de pause"/></button>
      ) : (
        <button onClick={handlePlay}><img src="https://res.cloudinary.com/dc8mp7dgl/image/upload/v1673227415/play_wspg2l.png" alt="ícone de play"/></button>
      )}
      <button onClick={handleNext}><img src="https://res.cloudinary.com/dc8mp7dgl/image/upload/v1673227415/play-forwardnext_i8ldmv.png" alt="ícone de próxima"/></button>
    </S.MusicCard>
  );
};

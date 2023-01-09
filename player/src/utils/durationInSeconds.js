export const durationInSeconds = (duration) => {
const [minutes, seconds] = duration.split(":").map(Number);
if(seconds > 99) {
    return 0;
}
let durationFormat = (minutes * 60) + seconds;
if(isNaN(durationFormat)) {
    return durationFormat = 0;
}
return durationFormat;
}

export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

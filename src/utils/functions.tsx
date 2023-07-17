export const milisecondsToMinutesAndSeconds = (miliseconds: number) => {
  const hours = Math.round(miliseconds / 1000 / 60 / 60);
  hours > 0 && (miliseconds -= hours * 60 * 60 * 1000)
  const minutes = Math.round(miliseconds / 1000 / 60);
  minutes > 0 && (miliseconds -= minutes * 60 * 1000);
  const seconds = Math.round(miliseconds / 1000);
  return `${hours}:${minutes < 10 ? (minutes > 0 ? `0${minutes}` : '00') : minutes}:${seconds < 10 ? (seconds > 0 ? `0${seconds}` : '00') : seconds}`;
};

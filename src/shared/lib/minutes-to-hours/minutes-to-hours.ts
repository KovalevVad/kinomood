export const minutesToHour = (minute: number) => {
  const Hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  
  return { Hours, minutes };
};
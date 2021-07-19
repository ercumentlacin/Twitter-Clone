/* eslint-disable import/prefer-default-export */
export const getTimeBetweendSecond = ({ start, end = Date.now() }) => {
  const diff = end - start;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return { time: years, key: 'y' };
  if (months > 0) return { time: months, key: 'a' };
  if (days > 0) return { time: days, key: 'g' };
  if (hours > 0) return { time: hours, key: 's' };
  if (seconds > 0) return { time: Math.floor(seconds / 60), key: 'd' };
  return { time: 1, key: 'd' };
};

const calculateTime = (time: string) => {
  let currentDateTime = Date.now() / (1000 * 60 * 60 * 24);
  let currentHourTime = Date.now() / (1000 * 60 * 60);
  let currentMinuteTime = Date.now() / (1000 * 60);
  const dateTime = new Date(time).getTime() / (1000 * 60 * 60 * 24);
  const hourTime = new Date(time).getTime() / (1000 * 60 * 60);
  const minuteTime = new Date(time).getTime() / (1000 * 60);
  let diffTime = currentDateTime - dateTime;

  if (diffTime >= 365) {
    return `${Math.floor(diffTime / 365)} years ago`;
  } else if (diffTime > 31) {
    return `${Math.floor(diffTime / 30)} months ago`;
  } else if (diffTime >= 1) {
    return `${Math.floor(diffTime)} days ago`;
  } else if (diffTime > 0.01) {
    diffTime = currentHourTime - hourTime;
    return `${Math.floor(diffTime <= 1 ? 1 : diffTime)} hour ago`;
  } else if (diffTime > 0) {
    diffTime = currentMinuteTime - minuteTime;
    return `${Math.floor(diffTime <= 1 ? 1 : diffTime)} minutes ago`;
  }
};

export default calculateTime;

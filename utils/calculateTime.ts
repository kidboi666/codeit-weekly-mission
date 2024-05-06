const calculateTime = (time: string) => {
  const currentTime = Date.now() / (1000 * 60 * 60 * 24);
  const dateTime = new Date(time).getTime() / (1000 * 60 * 60 * 24);
  const diffTime = currentTime - dateTime;
  if (diffTime >= 365) {
    return `${Math.floor(diffTime / 365)} years ago`;
  } else if (diffTime > 31) {
    return `${Math.floor(diffTime / 30)} months ago`;
  } else if (diffTime > 1) {
    return `${Math.floor(diffTime)} days ago`;
  }
  return `${Math.floor(diffTime)} day ago`;
};

export default calculateTime;

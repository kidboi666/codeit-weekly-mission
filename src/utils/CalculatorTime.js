export function formatDate(time) {
  const date = new Date(time);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function calculatorTime(value) {
  const currentTime = new Date() / (1000 * 60 * 60 * 24);
  const dateTime = new Date(value) / (1000 * 60 * 60 * 24);
  const diffTime = currentTime - dateTime;
  if (diffTime >= 365) {
    return `${Math.floor(diffTime / 365)} years ago`;
  } else if (diffTime > 31) {
    return `${Math.floor(diffTime / 30)} months ago`;
  } else if (diffTime > 1) {
    return `${Math.floor(diffTime)} days ago`;
  } else if (Math.floor(diffTime) === 1) {
    return `${Math.floor(diffTime)} day ago`;
  }
}

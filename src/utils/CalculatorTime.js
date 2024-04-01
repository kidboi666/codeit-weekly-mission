export function FormatDate({ value }) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function CalculatorTime({ value }) {
  let currentTime = new Date() / (1000 * 60 * 60 * 24);
  let dateTime = new Date(value) / (1000 * 60 * 60 * 24);
  let diffTime = currentTime - dateTime;
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

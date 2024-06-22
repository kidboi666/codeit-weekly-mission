const calculateTime = (time: string) => {
  const currentDateTime = Date.now() / (1000 * 60 * 60 * 24)
  const currentHourTime = Date.now() / (1000 * 60 * 60)
  const currentMinuteTime = Date.now() / (1000 * 60)
  const dateTime = new Date(time).getTime() / (1000 * 60 * 60 * 24)
  const hourTime = new Date(time).getTime() / (1000 * 60 * 60)
  const minuteTime = new Date(time).getTime() / (1000 * 60)
  let diffTime = currentDateTime - dateTime

  if (diffTime >= 365) {
    return `${Math.floor(diffTime / 365)} years ago`
  }
  if (diffTime > 31) {
    return `${Math.floor(diffTime / 30)} months ago`
  }
  if (diffTime >= 1) {
    return `${Math.floor(diffTime)} days ago`
  }
  if (diffTime > 0.01) {
    diffTime = currentHourTime - hourTime
    return `${Math.floor(diffTime <= 1 ? 1 : diffTime)} hour ago`
  }
  if (diffTime > 0) {
    diffTime = currentMinuteTime - minuteTime
    return `${Math.floor(diffTime <= 1 ? 1 : diffTime)} minutes ago`
  }
  return `1 minutes ago`
}

export default calculateTime

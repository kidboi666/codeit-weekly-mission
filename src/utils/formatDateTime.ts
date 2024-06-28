const formatDateTime = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  const day = newDate.getDate().toString().padStart(2, '0')
  const hours = newDate.getHours().toString().padStart(2, '0')
  const minutes = newDate.getMinutes().toString().padStart(2, '0')
  return `${year}.${month}.${day} ${hours}:${minutes}`
}

export default formatDateTime

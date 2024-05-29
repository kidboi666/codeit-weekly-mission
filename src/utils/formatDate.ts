const formatDate = (time: string) => {
  const date = new Date(time);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export default formatDate;

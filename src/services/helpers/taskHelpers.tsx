export const idGenerator = (): string => {
  return Math.floor(Math.random() * 1000000000000000000000).toString();
};

export const dayInMilliseconds = 24 * 60 * 60 * 1000;

const getDateObject = (date: string): Date => {
  const [day, month, year] = date.split("/");
  return new Date(`${year}-${month}-${day} 16:00:00`);
};

export const addDayInDate = (prevDate: string): string => {
  const date = getDateObject(prevDate);
  return new Date(date.getTime() + dayInMilliseconds).toLocaleDateString();
};

export const removeDayInDate = (prevDate: string): string => {
  const date = getDateObject(prevDate);
  return new Date(date.getTime() - dayInMilliseconds).toLocaleDateString();
};

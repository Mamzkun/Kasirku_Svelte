export function getFormattedDateToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}${pad(month, 2)}${pad(day, 2)}`;
}

function pad(num, length) {
  let str = num.toString();
  while (str.length < length) {str = "0" + str}
  return str;
}

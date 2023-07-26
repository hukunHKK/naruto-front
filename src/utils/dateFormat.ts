export function getDate(date, symbol = "-", showTime = false) {
  date = date || Date.now();
  date = new Date(date);
  const year = String(date.getFullYear()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  return showTime
    ? `${year}${symbol}${month}${symbol}${day} ${hour}:${min}:${sec}`
    : `${year}${symbol}${month}${symbol}${day}`;
}

export function getYesterday(symbol = '') {
  return getDate(Date.now() - 24 * 60 * 60 * 1000, symbol);
}

export function getCurrentMonth() {
  return getDate(null, "").substr(0, 6);
}

export function getCurrentYear() {
  return new Date().getFullYear()
}

export function getLastMonth(date) {
  date = date || Date.now();
  return getDate(
    date - (new Date(date).getDate() + 1) * 24 * 60 * 60 * 1000,
    ""
  ).substr(0, 6);
}
export function getPreviousMonth(offset, date) {
  date = new Date(date || Date.now())
  date = new Date(date.setDate(1))
  const month = date.getMonth()
  return getDate(date.setMonth(month + offset), '').substring(0, 6)
}
export function formatDate(date) {
  if (!date) return "";
  if (date.length === 6) {
    return `${date.substr(0, 4)}-${date.substr(4, 2)}`;
  }
  if (date.length === 8) {
    return `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6, 2)}`;
  }
  return `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(
    6,
    2
  )} ${date.substr(8, 2)}:${date.substr(10, 2)}:${date.substr(12, 2)}`;
}

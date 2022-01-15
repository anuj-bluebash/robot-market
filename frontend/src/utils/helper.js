export const thbPrice = (price) => {
  const realPrice = parseInt(price);
  return realPrice.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
};

export const formatDate = (date) => {
  date = new Date(date);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

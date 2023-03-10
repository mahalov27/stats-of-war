const getFomatedDate = (date) => {
  return typeof date === "object"
    ? `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
    : date;
};
export default getFomatedDate;

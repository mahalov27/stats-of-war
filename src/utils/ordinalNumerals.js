const ordinalNumerals = (day) => {
  const arr = day && day.toString().split("");
  const penultimateNumber = day && arr[arr.length - 2];
  const lastNumber = day % 10;

  if (penultimateNumber !== "1") {
    if (lastNumber === 1) {
      return "st";
    } else if (lastNumber === 2) {
      return "nd";
    } else if (lastNumber === 3) {
      return "rd";
    } else {
      return "th";
    }
  } else {
    return "th";
  }
};

export default ordinalNumerals;

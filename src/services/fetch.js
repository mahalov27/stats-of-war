import axios from "axios";
import getFomatedDate from "../utils/getFormatedDate";

export const getWarInfo = () => {
  return axios
    .get("https://russianwarship.rip/api/v2/war-info")
    .then((data) => data.data.data);
};

export const getTodayStatistic = (date) => {
  return axios
    .get(`https://russianwarship.rip/api/v2/statistics/${getFomatedDate(date)}`)
    .then((data) => data.data.data);
};

export const getTerms = (lang = "ua") => {
  return axios
    .get(`https://russianwarship.rip/api/v2/terms/${lang}`)
    .then((data) => data.data.data);
};

export const getStatisticList = (offset = 0, limit = 20) => {
  return axios
    .get(
      `https://russianwarship.rip/api/v2/statistics?offset=${offset}&limit=${limit}`
    )
    .then((data) => data.data.data.records);
};

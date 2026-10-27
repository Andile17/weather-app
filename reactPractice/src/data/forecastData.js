import sunnyIcon from "../assets/sunny.png";

const forecastData = [
  { day: "Monday", condition: "Mostly sunny", high: 24, low: 15 },
  { day: "Tuesday", condition: "Mostly sunny", high: 26, low: 16 },
  { day: "Wednesday", condition: "Mostly sunny", high: 25, low: 14 },
  { day: "Thursday", condition: "Mostly sunny", high: 23, low: 13 },
  { day: "Friday", condition: "Mostly sunny", high: 27, low: 17 },
].map((day) => ({ ...day, icon: sunnyIcon }));

export default forecastData;

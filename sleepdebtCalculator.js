/*  unfunctionnal => if no else => NaN
const getSleepHours = (day) => {
 if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  } else {
    console.log("wrong spelling");
    return 8;
  }
};
*/
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "error !";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You've got " +(idealSleepHours - actualSleepHours)+" hours - the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "you slept  " + (idealSleepHours - actualSleepHours)+" hours too long. You've slept too much already, get back to work, you lazy ass !!!"
    );
  } else {
    console.log("You must be tired and should have some rest. You only slept  " + ( idealSleepHours - actualSleepHours)+" hours");
  }
};

// ######## Console renderings ########
console.log("----- Summ of sleeping normal hours -----");
console.log(
  getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
);
calculateSleepDebt();
console.log("----- Summ of IDEAL sleeping time -----");
console.log(getIdealSleepHours());

console.log("-------- The verdict of DOOM --------");
console.log(calculateSleepDebt());

const getSleepHours = (day) => {
  if (day === "monday") {
     return 8;
   } else if (day === "tuesday") {
     return 8;
   } else if (day === "wednedsay") {
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

 const getActualSleepHours = () =>
   getSleepHours("monday") +
   getSleepHours("tuesday") +
   getSleepHours("wednedsay") +
   getSleepHours("thursday") +
   getSleepHours("friday") +
   getSleepHours("saturday") +
   getSleepHours("sunday");

 console.log("----- Summ of sleeping normal hours -----")
 console.log( getSleepHours("monday") + getSleepHours("tuedsay") + getSleepHours("wednedsay") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"));

const getSleepHours = day => {
  if (day === 'monday'|| day === 'tuesday'|| day === 'wednedsay' || day === 'thursday'|| day === 'wednesday'||day === 'saturday'||day === 'sunday'){
    return 8;
  }
}

console.log(getSleepHours('monday'))

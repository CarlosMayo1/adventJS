function countHours(year, holidays) {
  let counter = 0;

  holidays.find(holiday => {
    const date = new Date(`${year}/${holiday}`).getDay();
    if(date > 0 && date < 6) {
      counter += 2;
    }
  })
  
  return counter;
}

function distributeGifts(packOfGifts, reindeers) {
  const weightOfGifts = packOfGifts.reduce((accumulator, counter) => {
    return accumulator + counter.length
  }, 0)

  const weightOfReindeers = reindeers.reduce((accumulator, counter) => {
    return accumulator + (counter.length * 2)
  },0)
  
  return Math.trunc(weightOfReindeers / weightOfGifts)
}
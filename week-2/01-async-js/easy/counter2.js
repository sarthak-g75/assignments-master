function startCounter(count) {
  console.log(count)
  count++
  setTimeout(() => {
    startCounter(count)
  }, 1000)
}
startCounter(0)

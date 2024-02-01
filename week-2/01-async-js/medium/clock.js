setInterval(() => {
  let date = new Date()
  let seconds = date.getSeconds()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let zone = 'AM'
  if (hours > 12) {
    hours -= 12
    zone = 'PM'
  }

  hours = timeLessThanTen(hours)
  seconds = timeLessThanTen(seconds)
  minutes = timeLessThanTen(minutes)

  console.log(hours + ':' + minutes + ':' + seconds + ' ' + zone)
}, 1000)
function timeLessThanTen(data) {
  if (data < 10) {
    data = '0' + data
  }
  return data
}

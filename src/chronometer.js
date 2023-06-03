class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    let count = this.currentTime /60
  let minuteCount = Math.floor(count)
   

  return minuteCount
  }

  getSeconds() {
    let getSecond=this.currentTime %60
    return getSecond
  }

  computeTwoDigitNumber(value) {
    let number=value.toString()
    if(number.length<2){
      number="0"+number.slice(0,1)
    }
    return number
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    let secondeSplit = this.getSeconds()
    let secondeString = secondeSplit.toString()
    let minuteSplit = this.getMinutes()
    let minuteString = minuteSplit.toString()


  if(secondeString.length < 2){
    secondeString = "0" + secondeString.slice(0,1)
    }
    if(minuteString.length < 2){
      minuteString = "0" + minuteString.slice(0,1)
    }
    return `${minuteString}:${secondeString}`
   
  }
}

  


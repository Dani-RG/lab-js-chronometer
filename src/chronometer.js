class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1; if (printTimeCallback) {printTimeCallback()} }, 1000);

  }

  getMinutes() {
    let toMinutes = this.currentTime / 60;
    return  Math.floor(toMinutes);
  }

  getSeconds() {
    let remainingSeconds = this.currentTime % 60;
    return Math.floor(remainingSeconds);
  }

  computeTwoDigitNumber(value) {
    const digitString = value.toString();
    if (digitString.length === 1) {
      return `0${digitString}`;
    }
    else {return digitString
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  //BONUS - ITERATION 8:
  split() {
    // ... your code goes here
  }
}

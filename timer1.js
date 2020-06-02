let inputTimes = process.argv;
inputTimes.splice(0, 2);

inputTimes = inputTimes
  .filter(time => !isNaN(Number(time)))
  .filter((time) => time > 0);

const timer = (times) => {
  if (!times.length) {
    console.log("Did not you forget to enter time?");
    return undefined;
  }

  for (const time of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${time} seconds`);
    },
    time * 1000);
  }

};

timer(inputTimes);
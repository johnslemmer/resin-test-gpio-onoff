const Gpio = require('onoff').Gpio;

const led = new Gpio(17, 'out');
let nextValue = Gpio.HIGH;

setInterval(() => {
  led.writeSync(nextValue);
  if (nextValue === Gpio.HIGH) nextValue = Gpio.LOW;
  else nextValue = Gpio.HIGH;
}, 5000);

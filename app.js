const Gpio = require('onoff').Gpio;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const ON = Gpio.LOW;
const OFF = Gpio.HIGH;

const switch1 = new Gpio(4, 'high');
const switch2 = new Gpio(17, 'high');
const switch3 = new Gpio(27, 'high');
const switch4 = new Gpio(22, 'high');
const switch5 = new Gpio(5, 'high');
const switch6 = new Gpio(6, 'high');
const switch7 = new Gpio(13, 'high');

(async function main() {
  while (true) {
    allOn();
    await sleep(1000);
    allOff();
    await sleep(1000);
    cascadeOn();
    await sleep(1000);
    cascadeOff();
    await sleep(1000);
  }
})();

function allOn() {
  switch1.writeSync(ON);
  switch2.writeSync(ON);
  switch3.writeSync(ON);
  switch4.writeSync(ON);
  switch5.writeSync(ON);
  switch6.writeSync(ON);
  switch7.writeSync(ON);
}

function allOff() {
  switch1.writeSync(OFF);
  switch2.writeSync(OFF);
  switch3.writeSync(OFF);
  switch4.writeSync(OFF);
  switch5.writeSync(OFF);
  switch6.writeSync(OFF);
  switch7.writeSync(OFF);
}

async function cascadeOn() {
  switch1.writeSync(ON);
  await sleep(500);
  switch2.writeSync(ON);
  await sleep(500);
  switch3.writeSync(ON);
  await sleep(500);
  switch4.writeSync(ON);
  await sleep(500);
  switch5.writeSync(ON);
  await sleep(500);
  switch6.writeSync(ON);
  await sleep(500);
  switch7.writeSync(ON);
}

async function cascadeOff() {
  switch1.writeSync(OFF);
  await sleep(500);
  switch2.writeSync(OFF);
  await sleep(500);
  switch3.writeSync(OFF);
  await sleep(500);
  switch4.writeSync(OFF);
  await sleep(500);
  switch5.writeSync(OFF);
  await sleep(500);
  switch6.writeSync(OFF);
  await sleep(500);
  switch7.writeSync(OFF);
}

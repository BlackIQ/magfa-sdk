import MagFa from "magfa-sdk";

const sms = new MagFa("", "", "", "");

// Send
// --------------------------

const recipients = ["09014784362", "09363158232"];
const messages = ["سلام", "سلام"];

const send = await sms.send(recipients, messages);

if (send.status === 0) {
  console.log(send.messages);
} else {
  console.log({ message: sms.error(send.status) });
}

// Read
// --------------------------

// const messages = await sms.messages();

// if (messages.status === 0) {
//   console.log(messages.messages);
// } else {
//   console.log({ message: sms.error(messages.status) });
// }

// Status
// --------------------------

const status = await sms.status("120990667412");

if (status.status === 0) {
  console.log(status.dlrs);
} else {
  console.log({ message: sms.error(status.status) });
}

// Balance
// --------------------------

const balance = await sms.balance();

if (balance.status === 0) {
  console.log({ balance: balance.balance });
} else {
  console.log({ message: sms.error(balance.status) });
}

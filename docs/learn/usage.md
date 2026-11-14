# Usage

## Create a client

```javascript
import MagFa from "magfa-sdk";

const sms = new MagFa(
  "username", // MagFa username
  "password", // MagFa password
  "domain", // MagFa domain
  "3000xxxxxxx", // sender line (from)
);
```

Auth is sent as HTTP Basic: `username/domain` + `password` against `https://sms.magfa.com/api/http/sms/v2`.

## Functions and how to use them

### Balance

Get your account balance.

```javascript
const result = await sms.balance();

if (result.status === 0) {
  console.log(result.balance);
} else {
  console.log(sms.error(result.status));
}
```

### Send

Send a message.

`recipients` and `messages` are parallel arrays (same length). Sender is filled from the `from` you passed to the constructor.

```javascript
const recipients = ["0912xxxxxxx", "0935xxxxxxx"];
const messages = ["Hello", "Hi there"];

const result = await sms.send(recipients, messages);

console.log(result.messages);

// each item includes status and a human-readable message on success/error
```

### Inbox (incoming)

Get messages in your inbox.

```javascript
const result = await sms.messages();

if (result.status === 0) {
  console.log(result.messages);
} else {
  console.log(sms.error(result.status));
}
```

### Delivery status

Check delivery status. Is it delivered, on the way or had issues.

```javascript
const result = await sms.status(messageId);

console.log(result.dlrs); // status text attached per DLR
```

### Errors

A usefull helper to pass error status code and get error message.

```javascript
sms.error(statusCode); // Persian description for MagFa status codes
```

On HTTP failures the SDK returns the API error payload when available (it does not always throw).

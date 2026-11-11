# MagfaSMS

JavaScript SDK for the MagFa SMS API.

```bash
npm install magfa-sdk
```

```javascript
import MagFa from "magfa-sdk";

const sms = new MagFa("username", "password", "domain", "3000xxxxxxx");

console.log(await sms.balance());

await sms.send(["0912xxxxxxx"], ["Hello"]);
```

**Methods:** `balance` · `send` · `messages` · `status` · `error`

## Docs

Full documentation: [magfasms.amirhossein.info](https://magfasms.amirhossein.info)

## Links

| Title  | URL                                     |
| ------ | --------------------------------------- |
| npm    | https://www.npmjs.com/package/magfa-sdk |
| Source | https://github.com/BlackIQ/magfa-sdk    |
| Docs   | https://magfasms.amirhossein.info       |

## License

MIT

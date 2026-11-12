# MagfaSMS SDK

JavaScript client for the [MagFa](https://www.magfa.com) SMS HTTP API.

Send messages, check balance, read inbox, and query delivery status with a small async API.

```javascript
import MagFa from "magfa-sdk";

const sms = new MagFa("username", "password", "domain", "3000xxxxxxx");

const balance = await sms.balance();

console.log(balance);
```

|        |                                                                        |
| ------ | ---------------------------------------------------------------------- |
| npm    | [npmjs.com/package/magfa-sdk](https://www.npmjs.com/package/magfa-sdk) |
| Source | [GitHub](https://github.com/BlackIQ/magfa-sdk)                         |

## Next

- [Install](learn/install.md)
- [Usage](learn/usage.md)

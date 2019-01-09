# Level2 - Fallout

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x220beee334f1c1f8078352d88bcc4e6165b792f6)

# Issue

- The constructor is missplet (i.e., Fallout vs Fal1out) which means the intended constructor becomes a publically callable function letting any caller become owner of the contract

# Solution

```
(await contract.Fal1out())
```

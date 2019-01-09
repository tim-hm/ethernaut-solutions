# Level0 - Hello Ethernaut

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xdf51a9e8ce57e7787e4a27dd19880fd7106b9a5c)

# Issue

- This is just the intro and confirms you're setup

# Solution

```
const password = (await contract.password())
(await contract.authenticate(password))
```

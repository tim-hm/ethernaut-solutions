# Level0 - Hello Ethernaut

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xdf51a9e8ce57e7787e4a27dd19880fd7106b9a5c)

# Issue

- This is just the intro. It confirms you're setup and that you understand the basics of the game and interacting with a smart contract.

# Solution

1. Click "Get new instance"
1. Read the password using `var password = await contract.password()`
1. Then, submit the password to finish the level `await contract.authenticate(password)`
1. Finally, click 'Submit Instance'

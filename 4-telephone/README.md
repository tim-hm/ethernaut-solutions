# Level4 - Telephone

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x6b7b4a5260b67c1ee9196a42dd1ed8633231ba0a)

# Issue

- `function changeOwner(address)` relies on tx.origin to not be the sender ... which is total stupid. Just call this function from another smart contract and anyone can set the owner.
-

# Solution

1. Click "Get new instance"
1. Deployed the BadPhone.sol contract using `deploy.sh`
1. You can check the current owner with `await contract.owner()`
1. Take ownership by running `badphone.pwn(player, { from: web3.eth.accounts[0]}, (e, r) => console.info(r))`
1. Finally, click 'Submit Instance'

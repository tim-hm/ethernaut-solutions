# Level8 - Vault

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xdf51a9e8ce57e7787e4a27dd19880fd7106b9a5c)

# Issue

Variables in solidity marked with the `private` visibility modifier are not confidential. They're simply a mechanism to protect that variable from an abstraction viewpoint.

Additionally, there is no such thing as confidential data on-chain; everything is visible to everyone! So dont' store confidential data on-chain, and in fact, don't store encrypted data on chain either unless it only useful for a short period. And for the love of God, don't store anyone's private data on-chain!

# Solution

1.  Determine which storage slot the password variable is at. Since it's declare second, it will be at the second slot (or slot 1 since they're zero indexed):

```
 var _password
 web3.eth.getStorageAt(contract.address, 1, (e, r) => _password = r)
```

1. You can convert the output to Ascii with `web3.toAscci(_password)`
1. Unlock the vault with the password: `contract.unlock(_password)`
1. Submit the instance once the transaction is mined!

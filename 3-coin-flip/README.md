# Level3 - Coin Flip

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xd340de695bbc39e72df800dfde78a20d2ed94035a)

# Issue

`CoinFlip.flip(bool)` is deterministic, because there is no source of randomness (entropy) in the flips calculation. The next flip can be calculated by:

`flip = Math.floor(prevBlockHash / FACTOR) == 1 ? true : false`

# Solution

`determinisitc-coin-flip.sol` calls the vulnerable `CoinFlip.flip(bool)` function with the calculated flip result.

1. Deploy `deterministic-coin-flip.sol` (see `deploy.dflip.js` for how to do this)
2. Execute `flipper.dFlip(contract.address, { from: web3.eth.accounts[0]}, console.info )` 10 times
3. Submit instance

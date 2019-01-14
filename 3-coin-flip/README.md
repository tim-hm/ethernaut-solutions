# Level3 - Coin Flip

- [link to challenge](https://ethernaut.zeppelin.solutions/level/0xd340de695bbc39e72df800dfde78a20d2ed94035)

# Issue

CoinFlip calucaltes the flip deterministically. i.e., `flip = prevBlockHash / FACTOR`. Both variables are public, so anyone can calcualte the outcome. The only restrait is the calculation must keep track of which block is the current and previous block.

# Solution

1. Click "Get new instance"
2. Deploy `HackFlip.sol` using `deploy.sh`
3. Call `hackFlip.flip({ from: web3.eth.accounts[0] }, (e, r) => console.info(r)))` ten times using **`flip**-ten-times.js` as a guide
4. Finally, click 'Submit Instance'

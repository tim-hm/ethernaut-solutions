var i = 0
var id
id = setInterval(() => {
  if (i === 10) {
    console.info("All done!")
    clearInterval(id)
  } else {
    console.info("Calling hackFlip.flip()")
    hackFlip.hackFlip({ from: web3.eth.accounts[0] }, (e, r) => console.info(r))
    i++
  }
}, 20000)
// this wasn't working on ropsten because block times varied
// and so transactions were reverting

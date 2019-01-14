var badtokenContract = web3.eth.contract([
  {
    constant: false,
    inputs: [{ name: "_token", type: "address" }, { name: "_to", type: "address" }],
    name: "baaad",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
])
var badtoken = badtokenContract.new(
  {
    from: web3.eth.accounts[0],
    data:
      "0x6060604052341561000f57600080fd5b6101a18061001e6000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630905e45e14610046575b600080fd5b341561005157600080fd5b61009c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061009e565b005b60008090506015810390508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561015457600080fd5b6102c65a03f1151561016557600080fd5b50505060405180519050505050505600a165627a7a723058208679211acc1530f01ecfbd0053bf049b4c85a19999d9e719e32636fcdf61b65d0029",
    gas: "4700000"
  },
  function(e, contract) {
    console.info(e, contract)
    if (typeof contract.address !== "undefined") {
      console.info(
        "Contract mined! address: " + contract.address + " transactionHash: " + contract.transactionHash
      )
    }
  }
)

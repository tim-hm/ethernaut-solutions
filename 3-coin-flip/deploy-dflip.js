var dcfContract = web3.eth.contract([
  {
    constant: false,
    inputs: [{ name: "cFlipAddress", type: "address" }],
    name: "dFlip",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
])
var flipper = dcfContract.new(
  {
    from: web3.eth.accounts[0],
    data:
      "0x60606040527f8000000000000000000000000000000000000000000000000000000000000000600155341561003357600080fd5b610192806100426000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806351a91c0614610046575b600080fd5b341561005157600080fd5b61007d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061007f565b005b6000806000600143034060019004925082600054141561009e57600080fd5b82600081905550600154838115156100b257fe5b049150600182146100c45760006100c7565b60015b90508373ffffffffffffffffffffffffffffffffffffffff16631d263f67826000604051602001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082151515158152602001915050602060405180830381600087803b151561014457600080fd5b6102c65a03f1151561015557600080fd5b5050506040518051905050505050505600a165627a7a723058201a034e2bedcd7f03fdadaf7899705b0e4930db37dcbcb83832b32f7771dc0ad10029",
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

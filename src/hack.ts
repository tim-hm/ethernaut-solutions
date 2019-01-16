import repl from "repl"
import Web3 from "web3"

const { INFURA_ENDPOINT, PRIVATE_KEY } = process.env
const web3 = new Web3(INFURA_ENDPOINT)

web3.eth.accounts.wallet.add(<string>PRIVATE_KEY)

const r = repl.start({ prompt: "Ξ " })
r.context.web3 = web3
r.context.eth = web3.eth
r.context.utils = web3.utils

// @ts-ignore
// const from = web3.eth.accounts.wallet[0].address
// const gas = 100000
// const gasPrice = 2200000000
// const options = { from, gas, gasPrice }
// const abi = [
//   {
//     constant: true,
//     inputs: [],
//     name: "owner",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "pwn",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     inputs: [{ name: "_owner", type: "address" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor"
//   }
// ]

// r.context.contract = new web3.eth.Contract()

import repl from "repl"
import Web3 from "web3"

const { INFURA_ENDPOINT, PRIVATE_KEY } = process.env
const web3 = new Web3(INFURA_ENDPOINT)

web3.eth.accounts.wallet.add(<string>PRIVATE_KEY)

const r = repl.start({ prompt: "Ξ " })
r.context.web3 = web3
r.context.eth = web3.eth

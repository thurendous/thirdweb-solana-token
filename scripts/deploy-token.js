import { ThirdwebSDK } from '@thirdweb-dev/sdk/solana'
import { config } from 'dotenv'
config()

const { PRIVATE_KEE } = process.env

// initiate the SDK and pass in a signer
const sdk = ThirdwebSDK.fromPrivateKey(
    'https://api.devnet.solana.com',
    PRIVATE_KEE
)

// Define the metadata for your program
const metadata = {
    symbol: 'BBT ',
    descripton: 'best sonana token as a test token',
    name: 'best babe token',
    initialSupply: 100,
}

// deploy a new program from the connected wallet
const address = await sdk.deployer.createToken(metadata)

console.log(`address -> ${address}`)
console.log(`well done! Contract deployed successfully!`)

// get the total supply of the token and show it
const token = await sdk.getToken(address)
const supply = await token.totalSupply()

console.log(`total supply -> ${supply}`)

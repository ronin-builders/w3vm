import { CoreHelperUtil } from '@web3modal/scaffold'
import { NAMESPACE } from './constants'

// -- Helpers ------------------------------------------------------------------
const RPC_URL = CoreHelperUtil.getBlockchainApiUrl()

// -- Types --------------------------------------------------------------------
interface Options {
	projectId: string
}

// -- Provider -----------------------------------------------------------------
export function walletConnectProvider({ projectId }: Options) {
	return function provider(chainId: number) {
		const supported = [
			// Ethereum
			1,
			// Ethereum Goerli
			5,
			// Ethereum Sepolia
			11155111,
			// Optimism
			10,
			// Optimism Goerli
			420,
			// Arbitrum
			42161,
			// Arbitrum Goerli
			421613,
			// Polygon
			137,
			// Polygon Mumbai
			80001,
			// Celo Mainnet
			42220,
			// Aurora
			1313161554,
			// Aurora Testnet
			1313161555,
			// Binance Smart Chain
			56,
			// Binance Smart Chain Testnet
			97,
			// Avalanche C-Chain
			43114,
			// Avalanche Fuji Testnet
			43113,
			// Gnosis Chain
			100,
			// Base
			8453,
			// Base Goerli
			84531,
			// Zora
			7777777,
			// Zora Goerli
			999,
			// ZkSync Era Mainnet
			324,
			// ZkSync Era Testnet
			280,
		]

		if (!supported.includes(chainId)) {
			return null
		}

		const baseHttpUrl = `${RPC_URL}/v1/?chainId=${NAMESPACE}:${chainId}&projectId=${projectId}`
	}
}

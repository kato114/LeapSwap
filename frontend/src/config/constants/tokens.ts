import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xBB8f735e1ec578EF7964A13827F126b78A8439e8', 18, 'SYNC', 'PepeSync'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xBB8f735e1ec578EF7964A13827F126b78A8439e8', 18, 'SYNC', 'PepeSync'),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xadf393f388BBd5EFbA07987dd734467F7c6e81f0',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xadf393f388BBd5EFbA07987dd734467F7c6e81f0',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0x79369226fe743EC278C7169B83D2FEd7A0500642', 18, 'WBNB', 'Wrapped BNB')

const tokens = {
  bnb: {
    symbol: 'ETH',
    projectLink: '',
  },
  wbnb: {
    symbol: 'WETH',
    address: {
      882687: '0x79369226fe743EC278C7169B83D2FEd7A0500642',
      882688: '0x79369226fe743EC278C7169B83D2FEd7A0500642',
    },
    decimals: 18,
    projectLink: '',
  },
  cake: {
    symbol: 'SYNC',
    address: {
      882687: '0xBB8f735e1ec578EF7964A13827F126b78A8439e8',
      882688: '0xBB8f735e1ec578EF7964A13827F126b78A8439e8',
    },
    decimals: 18,
    projectLink: 'https://leap.io/',
  },
}

export default tokens

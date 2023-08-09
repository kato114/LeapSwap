import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Leap',
    lpAddresses: {
      882688: '0x05c86418c11d610d28268e0C2aF2C2386fB38FDd',
      882687: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Leap-ETH LP',
    lpAddresses: {
      882688: '0x3f5A93E45756f08659Ab31f0dA851bF62E9775b4',
      882687: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
]

export default farms

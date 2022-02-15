'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line camelcase
const ethers_1 = require('ethers')
class Contracts {
  get provider() {
    if (!window.ethereum) {
      // eslint-disable-next-line no-throw-literal
      throw 'no ethereum plugin'
    }
    return new ethers_1.providers.Web3Provider(window.ethereum)
  }

  get signer() {
    return this.provider.getSigner()
  }
}
const contracts = new Contracts()
exports.default = contracts

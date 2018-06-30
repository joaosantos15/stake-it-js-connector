const fs = require('fs')
const Web3 = require('web3')

let abiFile = require('./bet-contract-abi.js')
let ABI = abiFile.abi

let CONTRACT_ADDRESS
let mySenderAddress
var BetInstance

function connectToNode (contractAddress) {
  return new Promise(function (resolve, reject) {
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider)
      resolve()
    } else {
      console.log('Using default ethereumRPC')
      let ethereumRPCAddress = 'http://localhost:7545'

    // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider(ethereumRPCAddress))
  // console.alert('You need to have a Web3 provider. Try Metamask.')
    }
    // const CONTRACT_ADDRESS = '0x01ffefba4281b08a4f66b77359c244ba665bbbf2'
    CONTRACT_ADDRESS = contractAddress

    mySenderAddress = web3.eth.accounts[0]
    web3.eth.defaultAccount = mySenderAddress
    resolve(mySenderAddress)
  })
}

function connectToContract () {
  return new Promise(function (resolve, reject) {
    let contractAddress = CONTRACT_ADDRESS

    web3.eth.defaultAccount = web3.eth.accounts[0]
    var BetContract = web3.eth.contract(ABI)
    BetInstance = BetContract.at(contractAddress)

    resolve(BetInstance)
  })
}

function init (contractAddress) {
  return new Promise((resolve, reject) => {
    connectToNode(contractAddress).then(connectToContract).then(resolve)
  })
}

function createStatement (party2Address, judgeAddress, tweetId, stakeValue) {
  return new Promise((resolve, reject) => {
    if (testing) {
      parameters = {from: accounts[0], value: stakeValue, gas: 1280110}
    } else {
      parameters = {value: stakeValue, gas: 1280110}
    }
    BetInstance.createStatement(party2Address, judgeAddress, tweetId, {from: accounts[0], value: stakeValue, gas: 1280110}, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function confirmStatement (tweetId, stakeValue) {
  return new Promise((resolve, reject) => {
    if (testing) {
      parameters = {from: accounts[1], value: stakeValue, gas: 1280110}
    } else {
      parameters = {value: stakeValue, gas: 1280110}
    }
    BetInstance.confirmStatement(tweetId, parameters, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function judgeSettlesDraw (tweetId) {
  return new Promise((resolve, reject) => {
    if (testing) {
      parameters = {from: accounts[2], gas: 1280110}
    } else {
      parameters = {gas: 1280110}
    }
    BetInstance.judgeSettlesDraw(tweetId, parameters, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function judgeSettles (tweetId, winner) {
  return new Promise((resolve, reject) => {
    if (testing) {
      parameters = {from: accounts[2], gas: 1280110}
    } else {
      parameters = {gas: 1280110}
    }
    BetInstance.judgeSettles(tweetId, winner, parameters, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

// exports.connectToContract = connectToContract
exports.init = init
exports.judgeSettles = judgeSettles
exports.judgeSettlesDraw = judgeSettlesDraw
exports.confirmStatement = confirmStatement
exports.createStatement = createStatement

/*

  THIS IS ALL FOR TESTING

*/

/*
input: (party2Address:string(ethereum wallet address), judgeAddress:string(ethereum wallet address), tweetId:string, stakeValue:number)
output: none
*/

/*
mock accounts:

5:  0x219C32A3Add86913fCF259cE938378f07779d702
4:  0x37A8cA1312c3b7f1f4e0b7B08C6633F1d747E3fe
3:  0xa2aB1AC4862E3E04Bb3E6100C41631eAFc011877
2:  0x76CC77f2627e4bfFf1Dc7a88f4c80a632894F0E2
1:  0x0D0963f22D2491CA534d2F3aE3549Ec9CdD01571
0:  0x629573ad5A234A921628bF6BFD545949CA8b6eEd
*/

let accounts =
  [
    '0x629573ad5A234A921628bF6BFD545949CA8b6eEd',
    '0x0D0963f22D2491CA534d2F3aE3549Ec9CdD01571',
    '0x76CC77f2627e4bfFf1Dc7a88f4c80a632894F0E2',
    '0xa2aB1AC4862E3E04Bb3E6100C41631eAFc011877',
    '0x37A8cA1312c3b7f1f4e0b7B08C6633F1d747E3fe',
    '0x219C32A3Add86913fCF259cE938378f07779d702'
  ]

let tweetId = 'zxcv'
let inEth = 1
let toWei = 1000000000000000000
let value = inEth * toWei
let testing = true

let CA = '0x559f7e775c8386e909d839b4f29d4d16b1fa7924'

/*
init(CA).then(val => {
  // createStatement(accounts[1], accounts[2], tweetId, value).then(console.log).catch(console.error)
  //confirmStatement(tweetId, value).then(console.log).catch(console.error)
  // judgeSettlesDraw(tweetId).then(console.log).catch(console.error)
  judgeSettles(tweetId, accounts[1]).then(console.log).catch(console.error)
})
*/

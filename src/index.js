exports = module.exports
let jsConnector = require('./js-connector.js')

/*
input: (party2Address:string(ethereum wallet address), judgeAddress:string(ethereum wallet address), tweetId:string, stakeValue:number)
output: none
*/
exports.createStatement = jsConnector.createStatement

/*
input: (tweetId:string, stakeValue:string)
output: none
*/
exports.confirmStatement = jsConnector.confirmStatement

/*
input: (tweetId:string, winner:string(ethereum wallet address), draw:boolean); // draw is a boolean
output: none
*/
exports.judgeSettles = jsConnector.judgeSettles

/*
input: (currentUserAddress:string(ethereum wallet address), tweetId:string(sha3))
output: boolean
*/
exports.checkIfCurrentUserIsJudgeOfTweet = jsConnector.checkIfCurrentUserIsJudgeOfTweet

 /*
function(party2Address, judgeAddress, tweetId, stakeValue)
function(tweetId, stakeValue);
function(tweetId, winner, draw); // draw is a boolean
function(currentUserAddress, tweetId)

 */

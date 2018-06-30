# full-of-tweet-js-connector

## API

### init

> goal: creates an instance of the smart-contract

```js
init(contractAddress:string, testing:bool)
```

### createStatement

> output: none

```js
createStatement(party2Address:string, judgeAddress:string, tweetId:string, stakeValue:number)
```


### confirmStatement

> output: none

```js
confirmStatement(tweetId:string, stakeValue:string)
```


### judgeSettles

> output: none

```js
judgeSettles(tweetId:string, winner:string(ethereum wallet address) 
```



### getStatementForTweet

> output: Statement

```js
getStatementForTweet(tweetId:string)
```

### Statement

> output: Statement

```js
Statement(party1, party2, judge, tweetId, stake, confirmed)
```

### statement.isJudgeOfTweet

> output: boolean

```js
statement.isJudgeOfTweet(judgeAddress:string)
```

### Statement.isSettled

> output: boolean

```js
statement.isSettled(judgeAddress:string)
```

## Usage

```js
let value = 1000000000000000000 // 1 Eth in Wei

let contractAddress = '0x559f7e775c8386e909d839b4f29d4d16b1fa7924'

// Addresses for test. web3.eth.accounts[i] should be used instead
let aliceAddress= "0x629573ad5A234A921628bF6BFD545949CA8b6eEd"
let bobAddress= "0x0D0963f22D2491CA534d2F3aE3549Ec9CdD01571"
let charlieAddress="0x76CC77f2627e4bfFf1Dc7a88f4c80a632894F0E2"

// connect to deployed contract by providing the contract address.
// The second argument, `true`, is to run init in testing mode, which 
// will setup different accounts for the different functions
init(contractAddress, true).then(val => {
    // Alice's account is setup. She creates a bet against Bob, with Charlie as the Judge
	createStatement(bobAddress, charlieAddress, tweetId, value).then(val=>{
        // Bob's account is setup. He confirms the bet
        confirmStatement(tweetId, value).then(val=>{
            //Charlie's account is setup. He settles the bet. The funds are transfered.
            judgeSettles(tweetId, bobAddress)
        }).catch(console.error)

    // Querying the smart-contract for the Statement for a tweet with id = `tweetId`
    getStatementForTweet(tweetId).then(value => {
        // `value` is false if tweet has no statement
        if (!value) {return}
        // map return array to meaningful variables
        let party1 = value[0]
        let party2 = value[1]
        let judge = value[2]
        let stake = value[4]
        let confirmed = value[5]
        // create a new Statement Object
        let thisStatement = new Statement(party1, party2, judge, tweetId, stake, confirmed)
        console.log(thisStatement.isJudgeOfTweet(charlieAddress))
        // > false
        console.log(thisStatement.isSettled())
        // > false
    }
    ).catch(console.error)
    })
})

```
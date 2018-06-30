# full-of-tweet-js-connector

## API

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
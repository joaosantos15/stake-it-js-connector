exports = module.exports

let abi = [
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'statementsList',
    'outputs': [
      {
        'name': 'party1',
        'type': 'address'
      },
      {
        'name': 'party2',
        'type': 'address'
      },
      {
        'name': 'judge',
        'type': 'address'
      },
      {
        'name': 'tweetId',
        'type': 'bytes32'
      },
      {
        'name': 'stake',
        'type': 'uint256'
      },
      {
        'name': 'confirmed',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tweetId',
        'type': 'bytes32'
      }
    ],
    'name': 'confirmStatement',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tweetId',
        'type': 'bytes32'
      },
      {
        'name': '_winner',
        'type': 'address'
      }
    ],
    'name': 'judgeSettles',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'statementsListByJudge',
    'outputs': [
      {
        'name': 'party1',
        'type': 'address'
      },
      {
        'name': 'party2',
        'type': 'address'
      },
      {
        'name': 'judge',
        'type': 'address'
      },
      {
        'name': 'tweetId',
        'type': 'bytes32'
      },
      {
        'name': 'stake',
        'type': 'uint256'
      },
      {
        'name': 'confirmed',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'judge',
        'type': 'address'
      }
    ],
    'name': 'getStatementsForJudgeSize',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tweetId',
        'type': 'bytes32'
      }
    ],
    'name': 'judgeSettlesDraw',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'judge',
        'type': 'address'
      },
      {
        'name': 'index',
        'type': 'uint256'
      }
    ],
    'name': 'getStatementForJudge',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'party2',
        'type': 'address'
      },
      {
        'name': 'judge',
        'type': 'address'
      },
      {
        'name': 'tweetId',
        'type': 'bytes32'
      }
    ],
    'name': 'createStatement',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'party1',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'party2',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'judge',
        'type': 'address'
      }
    ],
    'name': 'LogStatement',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'tweetId',
        'type': 'bytes32'
      }
    ],
    'name': 'LogConfirmedByParty2',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'tweetId',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': '_winner',
        'type': 'address'
      }
    ],
    'name': 'LogConfirmedByJudge',
    'type': 'event'
  }
]
exports.abi = abi

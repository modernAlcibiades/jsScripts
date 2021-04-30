#!/bin/bash
# Test script to display functioning of miner

# Genesis block
node miner 0 "" '[]'
#Block  0 : { prevHash: '',
#  blockNumber: '0',
#  transactions: [ { to: 'Owner Address', value: 50 } ],
#  nonce: 136426 }
#// Hash : 000058d0689236177ba8f8807113b22f399ee62f4f80ca046679540d16e15f85

node miner 1 "000058d0689236177ba8f8807113b22f399ee62f4f80ca046679540d16e15f85" \
  '[{from: owner, to:burner, value:1}]'
#Block  1 : { prevHash:
#   '000058d0689236177ba8f8807113b22f399ee62f4f80ca046679540d16e15f85',
#  blockNumber: '1',
#  transactions:
#   [ { to: 'Owner Address', value: 50 },
#     { from: 'Owner Address',
#       to:
#        '0000000000000000000000000000000000000000000000000000000000000000',
#       value: 1 } ],
#  nonce: 38658 }
#// Hash : 00006ba0d96b298eb26e3fc6e3afc0a1cb4b341d74560b8c1fb5932f8b6ff00f

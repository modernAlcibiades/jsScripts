const SHA256 = require("crypto-js/sha256");

const ADDRESS_LENGTH = 64;
const MAX_TRANSACTIONS = 10;

const owner = "Owner Address";
const burner = "0".repeat(ADDRESS_LENGTH);
const coinbase = 50;
const difficulty = "0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";


function get_block(_blockNumber, _prevHash, _transactions) {
    let block = {
        prevHash: "",
        blockNumber: 0,
        transactions: [
            { to: owner, value: coinbase }
        ],
        nonce: 0
    }
    block.blockNumber = _blockNumber;
    block.prevHash = _prevHash;
    for (let i = 0; i < _transactions.length; i++) {
        if (i >= MAX_TRANSACTIONS) {
            console.log(`Block full at ${MAX_transactions}, skipping the remaining transactions`);
            console.log(_transactions);
            break;
        }
        block.transactions.push(_transactions.shift());

    }
    return block;
}

function mine(prevHash, blockNumber, transactions) {
    let block = get_block(blockNumber, prevHash, transactions);
    let i = 0;
    let hash = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    while (hash > difficulty) {
        block["nonce"] = i;
        hash = SHA256(JSON.stringify(block)).toString();
        i += 1;
    }
    console.log("Block ", blockNumber, ":", block);
    console.log(`// Hash : ${hash}`);

    return hash;
}

if (process.argv.length <= 3) {
    console.log("Usage : node miner blockNumber 'Previous Hash' '[{List}, {of}, {transactions}']");
} else {
    mine(prevHash = process.argv[3].toString(),
        blockNumber = process.argv[2],
        transactions = eval(process.argv[4])
    );
}
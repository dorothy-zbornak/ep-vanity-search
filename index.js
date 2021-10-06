require('colors');
const crypto = require('crypto');
const ethjs = require('ethereumjs-util');

const TARGET_PREFIX_TEST = /^0xdef1520[a-f]/i;

while (true) {
    const key = crypto.randomBytes(32);
    const addr = ethjs.privateToAddress(key);
    const deployed = ethjs.bufferToHex(ethjs.rlphash([addr, 0]).slice(12));
    if (TARGET_PREFIX_TEST.test(deployed)) {
        console.log(`deployer: ${ethjs.bufferToHex(addr)}, key: ${ethjs.bufferToHex(key)}, deployed: ${deployed}`);
        break;
    }
}

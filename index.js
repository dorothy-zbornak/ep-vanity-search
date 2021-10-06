require('colors');
const crypto = require('crypto');
const ethjs = require('ethereumjs-util');

const TARGET_PREFIX = '0xdef1c0de250';

while (true) {
    const key = crypto.randomBytes(32);
    const addr = ethjs.privateToAddress(key);
    const deployed = ethjs.bufferToHex(ethjs.rlphash([addr, 0]).slice(12));
    if (deployed.startsWith(TARGET_PREFIX)) {
        console.log(`deployer: ${ethjs.bufferToHex(addr)}, key: ${ethjs.bufferToHex(key)}, deployed: ${deployed}`);
        break;
    }
}

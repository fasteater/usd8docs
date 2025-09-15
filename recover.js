const { ethers } = require("ethers");

// Replace with your BIP39 seed phrase
const mnemonic = "test test test test test test test test test test test junk";

// Derive first account
const wallet = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");

console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
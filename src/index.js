// file-encryption-utility.js

const fs = require('fs');
const crypto = require('crypto');

// Define the FileEncryptionUtility class
class FileEncryptionUtility {
    constructor(algorithm, key) {
        this.algorithm = algorithm;
        this.key = key;
    }

    // Function to encrypt a file
    encryptFile(inputFilePath, outputFilePath) {
        const input = fs.createReadStream(inputFilePath);
        const output = fs.createWriteStream(outputFilePath);
        const cipher = crypto.createCipher(this.algorithm, this.key);

        input.pipe(cipher).pipe(output);
    }

    // Function to decrypt a file
    decryptFile(inputFilePath, outputFilePath) {
        const input = fs.createReadStream(inputFilePath);
        const output = fs.createWriteStream(outputFilePath);
        const decipher = crypto.createDecipher(this.algorithm, this.key);

        input.pipe(decipher).pipe(output);
    }
}

// Export the FileEncryptionUtility class for use in other modules
module.exports = FileEncryptionUtility;

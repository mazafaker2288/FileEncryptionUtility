# File Encryption Utility

This File Encryption Utility package provides a simple utility for encrypting and decrypting files in Node.js applications using various encryption algorithms.

## Installation

You can install the File Encryption Utility package via npm:

```bash
npm install file-encryption-utility
```

## Usage

Import the `FileEncryptionUtility` class into your JavaScript code:

```javascript
const FileEncryptionUtility = require('file-encryption-utility');
```

### Creating a FileEncryptionUtility Instance

To create a new instance of the FileEncryptionUtility, instantiate the `FileEncryptionUtility` class with an encryption algorithm and key:

```javascript
const encryptionUtility = new FileEncryptionUtility('aes-256-cbc', 'mySecretKey');
```

### Encrypting a File

To encrypt a file, use the `encryptFile` method:

```javascript
encryptionUtility.encryptFile('input.txt', 'encrypted.txt');
```

This will encrypt the `input.txt` file using the specified algorithm and key, and save the encrypted content to `encrypted.txt`.

### Decrypting a File

To decrypt a file, use the `decryptFile` method:

```javascript
encryptionUtility.decryptFile('encrypted.txt', 'decrypted.txt');
```

This will decrypt the `encrypted.txt` file using the specified algorithm and key, and save the decrypted content to `decrypted.txt`.

## License

This File Encryption Utility package is licensed under the [MIT License](LICENSE).

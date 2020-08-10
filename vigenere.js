class Vigenere {
	constructor() {
		this.alphabet = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ "
		this.blockSize = 5
	}

	getUniqueKeys(password){
		let uniqueKeys = ""

		for(let i=0; i<password.length; ++i){
			let letter = password[i]

			if(uniqueKeys.indexOf(letter) == -1 ) {
				uniqueKeys += letter
			}
		}
		return uniqueKeys
	}

	getKeys(password, message_len){
		let keys = "", keySize = password.length, keyCount = -1

		while(message_len != 0) {
			keyCount +=1
			if(keyCount == keySize){
				keyCount = 0
			}

			keys += password[keyCount]
			message_len -= 1;
		}

		return keys
	}

	encrypt(){

	}

	decrypt(){

	}
}

const message = "now is the time for all good men to come to the aid of their fellow man";
const password = "excalibure";
const v = new Vigenere()
console.log(v.getUniqueKeys(password))
console.log(v.getKeys(password, 24))

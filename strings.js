// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//your code is here
		if (character.length !== 1){
			return "Please enter one character"
		}
		var alphabet="abcdefghijklmnopqrstuvwxyz"

		return alphabet.indexOf(character.toLowerCase())+1
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		//your code is here
		if (s === 0 ) {
			return "";
		}
		return n + repeatStr(n, s-1);
	}
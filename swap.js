	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
		input=input.split("")
		input=input.map(function(elem){
			if (elem===elem.toLowerCase()){
				return elem.toUpperCase();
			}
			return elem.toLowerCase()
		});
		return input.join("");
	}
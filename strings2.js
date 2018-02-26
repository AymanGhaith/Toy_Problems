//  Given a sequence of items and a specific item in that sequence, return the item
// 	immediately following the item specified. If the item occurs more than once in a sequence,
// 	return the item after the first occurence. This should work for a sequence of any type.
// 	When the item isn't present or nothing follows it, the function should return null
//  nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
//  nextItem("testing", "t") # "e"

	function nextItem(items, elem){
		//your code is here
		var elemIndex= items.indexOf(elem);
		if (elemIndex === -1 || items[elemIndex+1]=== undefined ){
			return null;
		}
		return items[elemIndex+1]
	}

//  We need a function that can transform a number into a string.
// 	What ways of achieving this do you know?
// 	numberToString(123); // returns '123';`   
// 	numberToString(999); // returns '999';`

	function numberToString(num) {
	  //your code is here

	  // both of the following worked with me
	  //return num.toString();
	  return num+"";
	}
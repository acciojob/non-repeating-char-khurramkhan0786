function firstNonRepeatedChar(str) {
 // Write your code here

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

for(let i=0;i<input.length;i++){
	let isRepeated = false;
	for(let j=0;j<input.length;j++){
		if(i !== j && input[i] === input[j]){
			isRepeated = true;
			break;
		}
	}
	if(!isRepeated){
		return input[i];
	}
}
	return null;
}

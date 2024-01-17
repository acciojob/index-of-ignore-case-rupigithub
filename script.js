function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s2.toLowercase();
	let l = s1.length;
	for(let i=0; i<l i++){
		if(s1.charAt(i) === s2.charAt(0)){
			console.log(i);
		}
	}
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));

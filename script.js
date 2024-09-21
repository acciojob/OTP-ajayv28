//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, idx) => {
	code.addEventListener("keydown", (e)=>{
		const keyPressed= e.key;

		if(keyPressed>=0 && keyPressed<=9){
			codes[idx].value="";
			if(codes.length-1 > idx){
				codes[idx].blur;
				setTimeout(()=> codes[idx+1].focus(),100);
			}
		}
		else if(keyPressed === "Backspace"){
			if(idx>0){
				codes[idx].blur;
				setTimeout(()=> codes[idx-1].focus(),100)
			}
		}
	})
});
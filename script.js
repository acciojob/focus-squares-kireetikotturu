//your JS code here. If required.
let squares = [
	document.getElementById("square1"),
	document.getElementById("square2"),
	document.getElementById("square3")
]

squares.forEach((item, index)=>{
	item.addEventListener("mouseover", ()=>{
		squares.forEach((s, i)=>{
			s.style.backgroundColor = i === index ? "#E6E6FA" : "#6F4E37"; 
		})
	})

	item.addEventListener("mouseout", ()=>{
		squares.forEach((s, i)=>{
			s.style.backgroundColor = "#E6E6FA" ; 
		})
	})
})
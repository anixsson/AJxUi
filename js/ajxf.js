//
// Accordion
//
function ajxAccordion(self) {
	self.classList.toggle("active");
	let panel = self.nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}


//
// Tree View
//
let toggler = document.getElementsByClassName("treeViewBox");

for (let i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("dblclick", function () {
		this.parentElement.querySelector(".treeViewNested").classList.toggle("active");
		this.classList.toggle("check-box");
	});
}


//
// Copy text from a template
//
function copyText(ID) {
	var copyText = document.getElementById(ID);
	console.log(copyText);
	copyText.style.display = "block";
	copyText.focus();
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	copyText.style.display = "none";
	notix("Copied to clipboard!", 3000, "black", "white")
}


//
// Notification system
//
let notix_stack = [null];
function notix(text, time, bgcolor, txcolor){
	let box = document.createElement("div");

	box.style.backgroundColor = bgcolor;
	box.style.color = txcolor;
	box.style.position = "fixed";
	box.style.padding = "10px";
	box.style.fontSize = "10px";
	box.style.fontWeight = "bold";
	box.style.right = "0px";
	

	box.className += "notix";
	box.innerHTML = text;

	// Get first empty slot in notix_stack
	let box_index;
	for (let index = 0; index < notix_stack.length + 1; index++) {
		const element = notix_stack[index];
		if (notix_stack[index] == null || undefined) {
			notix_stack[index] = 1;
			box_index = index;
			break
		}
	}

	box.style.top = 35 * box_index + "px";

	box.addEventListener("click", function(event){
		event.currentTarget.remove();
	}, false)

	box.addEventListener("DOMNodeInserted", function(event){
		setTimeout(function(){
			notix_stack[box_index] = null;
			event.target.remove();
		}.bind(event, box_index), time);

	}.bind(box_index), false)

	document.body.insertAdjacentElement("beforeend", box);
}



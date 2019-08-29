//
// Accordion
//

// # The following code will go thru the document and add click event on class
// let acc = document.getElementsByClassName("AJxAccordion");

// for (let Ti = 0; Ti < acc.length; Ti++) {
// 	acc[Ti].addEventListener("click", function() {
// 		this.classList.toggle("active");
// 		let panel = this.nextElementSibling;
// 		if (panel.style.maxHeight){
// 			panel.style.maxHeight = null;
// 		} else {
// 			panel.style.maxHeight = panel.scrollHeight + "px";
// 		}
// 	});
// }


function ajxAccordion (self){
	self.classList.toggle("active");
		let panel = self.nextElementSibling;
		if (panel.style.maxHeight){
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
	toggler[i].addEventListener("dblclick", function() {
		this.parentElement.querySelector(".treeViewNested").classList.toggle("active");
		this.classList.toggle("check-box");
	});
}


// Get an empty DIV id of a TreeView

// Set this DIV to the "AJxTreeView" class


/**
 *  Code color
 */
function ajxCodeColor (self, type){

	let colors = {1:"blue", 2:"red"}

	let dictionary;
	switch (type) {
		case "javascript":
			dictionary = {"function":1, "let":2}
			break;

		default:
			break;
	}
	
	let dictionary_array = new Array();
	for (let i = 0; i < Object.keys(dictionary).length; i++) {
		dictionary_array[i] = Object.keys(dictionary)[i];
	}

	console.log(dictionary);
	console.log(dictionary_array);

	

}
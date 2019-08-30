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



// Get an empty DIV id of a TreeView

// Set this DIV to the "AJxTreeView" class


function copyText(ID) {
	var copyText = document.getElementById(ID);
	console.log(copyText);
	copyText.style.display = "block";
	copyText.focus();
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	copyText.style.display = "none";
  }




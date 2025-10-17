const submitElement=document.getElementById("submit");
const tableBody=document.querySelector("#book-list tbody");
submitElement.addEventListener("click",function(){
	const title=document.getElementById("title").value.trim();
	const author=document.getElementById("author").value.trim();
	const isbn=document.getElementById("isbn").value.trim();

	if(!title||!author||!isbn){
		alert("Please fill all fields");
		return;
	}
	const row=document.createElement("tr");
	row.innerHTML=`
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete-btn">X</button></td>
	`
		tableBody.appendChild(row);
	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
	row.querySelector(".delete-btn").addEventListener("click",
				function(){
		row.remove();
	})
	
})
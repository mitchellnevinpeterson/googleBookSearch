function bookSearch() {
	// creating the variable to store the user input
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)
	// creating the ajax to get the json objects from google to then be displayed into my html
	$.ajax ({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {
			for(i = 0; i < data.items.length; i++) {
				var newCol = document.createElement("div")
				newCol.className = "col-sm-4"
				results.appendChild(newCol)
				results.getElementsByTagName("div")[i].innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>"
				console.log(data.items)
				results.getElementsByTagName("div")[i].innerHTML += "<h4>" + data.items[i].volumeInfo.authors[0] + "</h4>"
				results.getElementsByTagName("div")[i].innerHTML += "<img>"
				document.getElementsByTagName("img")[i].setAttribute("src", data.items[i].volumeInfo.imageLinks.thumbnail)	
			}
		},
		type: "GET"
	})
}

document.getElementById("searchButton").addEventListener("click", bookSearch, false)


function enter(event) {
	var x = event.keyCode
	console.log(x)
	if (x == 13) {
		bookSearch()
	}
}

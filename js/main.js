/*
Task 2: Create an API call to the following address:
https://savingsmultipliedssh.firebaseio.com/items.json

This should return an array with 22 objects in it.  Each of those objects has an image url, username, price, title, and date open until.  
Using this input and the mockup you did in part 1, 
you should have an auction page with items getting loaded in from the API.

*/

$(document).ready(function() {
	var $itemDiv = $('#auction-items');

	function getAuctionItems() {
		$.get("http://savingsmultipliedssh.firebaseio.com/items.json",
			function(data) {
				/* data is an array of objects with the following properties:
					 {
						 endDate: string,
						 image: string (url),
						 price: number,
						 seller: string,
						 title: string
					 }
				*/

				for (var i = 0; i < data.length; i++) {
					var imageURL = data[i].image;
					var title = data[i].title;
					var price = data[i].price;
					var seller = data[i].seller;
					var endDate = new Date(data[i].endDate);
					var month = endDate.getMonth() + 1;
					var day = endDate.getDate();
					var year = endDate.getFullYear();
					// var time = Date.parse(data[i].endDate).getFullYear();

					var contentString = "";
					contentString += "<figure>";
					contentString += "<img class=\"thumb\" src=\"" + imageURL + "\" alt=\"\">";
					contentString += "<figcaption>" + title + " $" + price.toFixed(2) + "</figcaption>"
					contentString += "<figcaption>" + seller + " " + month + "-" + day + "-" + year + "</figcaption>"
					contentString += "</figure>"
					$itemDiv.before(contentString);
					// console.log(i);
				}
				// console.log("here");
			});
		}
		getAuctionItems();
		
});
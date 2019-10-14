javascript: (function () {
	if (location.hostname == "www.hotelbeds.com" || location.hostname == "www.bedsonline.com") {
		var btn = document.getElementById("availability-list").getElementsByClassName("box-search-no-availability");
		var btn2 = document.getElementsByClassName("item-pricing-detail-border");
		for (let b of btn) {
			let s = b.querySelector(".customclass");
			if (b.contains(s)) {
				b.querySelector(".customclass").remove();
			}
			let button = document.createElement("BUTTON");
			let calculate = document.createTextNode("Calc");
			button.classList.add("customclass");
			if (location.hostname == "www.hotelbeds.com") {
				button.style.background = "#b52555";
				button.style.borderTopColor = "#7c082e";
				button.style.borderLeftColor = "#7c082e";
				button.style.borderRightColor = "#2e807c";
				button.style.borderBottomColor = "#7c082e";
				button.styleborderBottomColor = "#7c082e";
				button.style.borderBorderBottomColor = "#7c082e";
			} else {
				button.style.background = "#e26329";
				button.style.borderTopColor = "#b74504";
				button.style.borderLeftColor = "#b74504";
				button.style.borderRightColor = "#b74504";
				button.style.borderBottomColor = "#b74504";
				button.styleborderBottomColor = "#b74504";
				button.style.borderBorderBottomColor = "#b74504";
			}
				button.style.borderBottomStyle = "solid";
                button.style.borderBottomWidth = "3px";
                button.style.borderLeftStyle = "solid";
				button.style.borderLeftWidth = "1px";
		        button.style.borderRadius = "3px";
                button.style.borderRightStyle = "solid";
				button.style.borderRightWidth = "1px";
		        button.style.borderStyle = "solid";
                button.style.borderTopStyle = "solid";
				button.style.borderTopWidth = "1px";
		        button.style.borderWidth = "1px";
                button.style.color = "white";
		        button.style.cursor = "pointer";
                button.style.filter = "contrast(6,25%)";
				button.style.fontFamily = "Arial";
		        button.style.fontSize = "20px";
				button.style.height = "40px";
		        button.style.paddingBottom = "4px";
                button.style.paddingLeft = "8px";
				button.style.paddingRight = "8px";
		        button.style.paddingTop = "4px";
                button.style.position = "relative";
				button.style.right = "-698px";
		        button.style.width = "210px";

			button.addEventListener("mouseover", hoverButton);
			button.addEventListener("mouseout", buttonOriginal);
			button.addEventListener("click", myFunction);
			button.appendChild(calculate);

			function hoverButton() {
				if (location.hostname == "www.hotelbeds.com") {
					button.style.background = "#d592aa";
				} else {
					button.style.background = "#ea8e5a";
				}
			}

			function buttonOriginal() {
				if (location.hostname == "www.hotelbeds.com") {
					button.style.background = "#b52555";
				} else {
					button.style.background = "#e26329";
				}
			}
			b.appendChild(button);
			console.log(b);
		}
		for (var i = 0; i < btn2.length; i++) {
			let s = btn2[i].getElementsByClassName("item-action-col")[0].querySelector(".customclass");
			if (btn2[i].getElementsByClassName("item-action-col")[0].contains(s)) {
				btn2[i].getElementsByClassName("item-action-col")[0].querySelector(".customclass").remove();
			}
			let button = document.createElement("BUTTON");
			let calculate = document.createTextNode("Calc");
			button.classList.add("customclass");
			if (location.hostname == "www.hotelbeds.com") {
				button.style.background = "#b52555";
				button.style.borderTopColor = "#7c082e";
				button.style.borderLeftColor = "#7c082e";
				button.style.borderRightColor = "#2e807c";
				button.style.borderBottomColor = "#7c082e";
				button.styleborderBottomColor = "#7c082e";
				button.style.borderBorderBottomColor = "#7c082e";
			} else {
				button.style.background = "#e26329";
				button.style.borderTopColor = "#b74504";
				button.style.borderLeftColor = "#b74504";
				button.style.borderRightColor = "#b74504";
				button.style.borderBottomColor = "#b74504";
				button.styleborderBottomColor = "#b74504";
				button.style.borderBorderBottomColor = "#b74504";
			}
			    button.style.borderBorderBottomColor = "solid";
                button.style.borderBottomStyle = "solid";
                button.style.borderBottomWidth = "3px";
                button.style.borderBottomWidth = "3px";
                button.style.borderLeftStyle = "solid";
                button.style.borderLeftWidth = "1px";
                button.style.borderRadius = "3px";
                button.style.borderRightStyle = "solid";
                button.style.borderRightWidth = "1px";
                button.style.borderStyle = "solid";
                button.style.borderTopStyle = "solid";
                button.style.borderTopWidth = "1px";
                button.style.borderWidth = "1px";
                button.style.color = "white";
                button.style.cursor = "pointer";
                button.style.filter = "contrast(6,25%)";
                button.style.fontFamily = "Arial";
                button.style.fontSize = "20px";
                button.style.height = "30px";
                button.style.marginTop = "4px";
                button.style.padding = "4px";
                button.style.paddingBottom = "4px";
                button.style.paddingLeft = "8px";
                button.style.paddingRight = "8px";
                button.style.paddingTop = "4px";
                button.style.width = "75px";

			button.addEventListener("mouseover", hoverButton);
			button.addEventListener("mouseout", buttonOriginal);
			button.addEventListener("click", myFunction);
			button.appendChild(calculate);

			function hoverButton() {
				if (location.hostname == "www.hotelbeds.com") {
					button.style.background = "#d592aa";
				} else {
					button.style.background = "#ea8e5a";
				}
			}

			function buttonOriginal() {
				if (location.hostname == "www.hotelbeds.com") {
					button.style.background = "#b52555";
				} else {
					button.style.background = "#e26329";
				}
			}
			btn2[i].getElementsByClassName("item-action-col")[0].appendChild(button);
			console.log(btn2[i].getElementsByClassName("item-action-col")[0])
		}

		function myFunction(e) {
			var tar = e.target.parentElement.parentElement;
			if (tar.classList.value == "wrapper " || tar.classList.value == "wrapper keyproduct") {
				let hotel = tar.parentElement.getElementsByClassName("product-maininfo")[0].children[0].children[0].children[0].children[0].innerHTML.trim();
				let room = tar.parentElement.getElementsByClassName("room-rate")[0].children[0].children[0].children[1].innerHTML.trim();
				let pansion = tar.parentElement.getElementsByClassName("room-rate")[0].children[0].children[1].innerHTML.trim();
				let canx = tar.parentElement.getElementsByClassName("room-rate")[0].children[0].getElementsByClassName("cancellationdate-col")[0].children[0].getElementsByClassName("promo-name")[0].innerHTML.trim();
				let price = Number(tar.parentElement.getElementsByClassName("room-rate")[0].getElementsByClassName("bottom-info")[0].getElementsByClassName("price-module")[0].getElementsByClassName("hotel-pricing")[0].getElementsByClassName("calendarInfo")[0].children[0].children[0].innerHTML.replace(",", "").trim());
				price = Number(price + 1);
				let bruttoPrice = Number(price * 1.1);
				let aux = document.createElement("input");
				if (location.hostname == "www.hotelbeds.com") {
					aux.setAttribute("value", `${hotel} ${room} ${pansion} Price ${Math.round( price )}€ Cancellation Policy: ${canx}`);
				} else {
					aux.setAttribute("value", `${hotel} ${room} ${pansion} Price ${Math.round( bruttoPrice )}€ Cancellation Policy: ${canx}`);
				}
				document.body.appendChild(aux);
				aux.select();
				document.execCommand("copy");
				document.body.removeChild(aux);
			} else if (tar.className == "item-pricing-detail-border") {
				let hotel = tar.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("product-maininfo")[0].children[0].children[0].children[0].children[0].innerHTML.trim();
				let room = tar.parentElement.parentElement.parentElement.children[0].children[0].innerText.trim();
				let pansion = tar.parentElement.parentElement.getElementsByClassName("board-col")[0].children[0].innerText.trim();
				let canx = tar.parentElement.getElementsByClassName("cancellationdate-col")[0].getElementsByClassName("promo-name")[0].innerText.trim();
				let price = Number(tar.parentElement.children[0].getElementsByClassName("total-price-col dispo-calendar")[0].children[0].getElementsByClassName("calendarInfo")[0].innerText.slice(0, -5).replace(",", ""));
				price = Number(price + 1);
				let bruttoPrice = Number(price * 1.1);
				let aux = document.createElement("input");
				if (location.hostname == "www.hotelbeds.com") {
					aux.setAttribute("value", `${hotel} ${room} ${pansion} Price ${Math.round( price )}€ Cancellation Policy: ${canx}`);
				} else {
					aux.setAttribute("value", `${hotel} ${room} ${pansion} Price ${Math.round( bruttoPrice )}€ Cancellation Policy: ${canx}`);
				}
				document.body.appendChild(aux);
				aux.select();
				document.execCommand("copy");
				document.body.removeChild(aux);
			}
		}
	}
})();

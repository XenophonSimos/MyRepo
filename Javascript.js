javascript: (function() {
  var btn = document
    .getElementById("availability-list")
    .getElementsByClassName("box-search-no-availability");
  var btn2 = document.getElementsByClassName("item-pricing-detail-border");

    const button = document.createElement("BUTTON");
    const calculate = document.createTextNode("Calc");
    button.style.background = "#b52555";
    button.style.borderBottomColor = "#7c082e";
    button.style.borderBottomColor = "3px";
    button.style.borderBottomColor = "rgb(124, 8, 46)";
    button.style.borderBottomColor = "solid";
    button.style.borderBottomStyle = "solid";
    button.style.borderBottomWidth = "3px";
    button.style.borderBottomWidth = "3px";
    button.style.borderLeftColor = "#7c082e";
    button.style.borderLeftStyle = "solid";
    button.style.borderLeftWidth = "1px";
    button.style.borderRadius = "3px";
    button.style.borderRightColor = "rgb(124, 8, 46)";
    button.style.borderRightStyle = "solid";
    button.style.borderRightWidth = "1px";
    button.style.borderStyle = "solid";
    button.style.borderTopColor = "rgb(124, 8, 46)";
    button.style.borderTopStyle = "solid";
    button.style.borderTopWidth = "1px";
    button.style.borderWidth = "1px";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.filter = "contrast(6,25%)";
    button.style.fontFamily = "Arial";
    button.style.fontSize = "20px";

  for (let b of btn) {
    let s = b.querySelector(".customclass");

    if (b.contains(s)) {
      b.querySelector(".customclass").remove();
    }

    
    button.style.height = "40px";
    button.style.paddingBottom = "4px";
    button.style.paddingLeft = "8px";
    button.style.paddingRight = "8px";
    button.style.paddingTop = "4px";
    button.style.position = "relative";
    button.style.right = "-698px";
    button.style.width = "210px";


    button.addEventListener("mouseover", hoverButton);
    button.addEventListener("mouseout", buttonOriginal);
    button.addEventListener("click", myFunction);
    button.classList.add("customclass");
    button.appendChild(calculate);

    function hoverButton() {
      button.style.background = "#d592aa";
    }
    function buttonOriginal() {
      button.style.background = "#b52555";
    }

    b.appendChild(button.cloneNode(true));
  }

  for (var i = 0; i < btn2.length; i++) {
    let s = btn2[i]
      .getElementsByClassName("item-action-col")[0]
      .querySelector(".customclass");

    if (btn2[i].getElementsByClassName("item-action-col")[0].contains(s)) {
      btn2[i]
        .getElementsByClassName("item-action-col")[0]
        .querySelector(".customclass")
        .remove();
    }

    button.classList.add("customclass");
    button.style.height = "30px";
    button.style.marginTop = "4px";
    button.style.padding = "4px";
    button.style.paddingBottom = "4px";
    button.style.paddingLeft = "8px";
    button.style.paddingRight = "8px";
    button.style.paddingTop = "4px";
    button.style.width = "75px";


    button.addEventListener("mouseover", hoverButton);
    button.addEventListener("mouseout", buttonOriginal);
    button.addEventListener("click", myFunction);
    button.appendChild(calculate);

    function hoverButton() {
      button.style.background = "#d592aa";
    }
    function buttonOriginal() {
      button.style.background = "#b52555";
    }

    btn2[i].getElementsByClassName("item-action-col")[0].appendChild(button.cloneNode(true));
  }

  function myFunction(e) {
    var tar = e.target.parentElement.parentElement;
    if (tar.className == "wrapper keyproduct") {
      let hotel = tar.parentElement
        .getElementsByClassName("product-maininfo")[0]
        .children[0].children[0].children[0].children[0].innerHTML.trim();
      let room = tar.parentElement
        .getElementsByClassName("room-rate")[0]
        .children[0].children[0].children[1].innerHTML.trim();
      let pansion = tar.parentElement
        .getElementsByClassName("room-rate")[0]
        .children[0].children[1].innerHTML.trim();
      let canx = tar.parentElement
        .getElementsByClassName("room-rate")[0]
        .children[0].getElementsByClassName("cancellationdate-col")[0]
        .children[0].getElementsByClassName("promo-name")[0]
        .innerHTML.trim();
      let price = Number(
        tar.parentElement
          .getElementsByClassName("room-rate")[0]
          .getElementsByClassName("bottom-info")[0]
          .getElementsByClassName("price-module")[0]
          .getElementsByClassName("hotel-pricing")[0]
          .getElementsByClassName("calendarInfo")[0]
          .children[0].children[0].innerHTML.trim()
      );
      price = Number(price + 1);

      let aux = document.createElement("input");
      aux.setAttribute(
        "value",
        `${hotel} ${room} ${pansion} Price ${price}€ Cancellation Policy: ${canx}`
      );
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    } else {
      if (tar.className == "item-pricing-detail-border") {
        let hotel = tar.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
          .getElementsByClassName("product-maininfo")[0]
          .children[0].children[0].children[0].children[0].innerHTML.trim();
        let room = tar.parentElement.parentElement.parentElement.children[0].children[0].innerText.trim();
        let pansion = tar.parentElement.parentElement
          .getElementsByClassName("board-col")[0]
          .children[0].innerText.trim();
        let canx = tar.parentElement
          .getElementsByClassName("cancellationdate-col")[0]
          .getElementsByClassName("promo-name")[0]
          .innerText.trim();
        let price = Number(
          tar.parentElement.children[0]
            .getElementsByClassName("total-price-col dispo-calendar")[0]
            .children[0].getElementsByClassName("calendarInfo")[0]
            .innerText.slice(0, -5)
            .replace(",", "")
        );
        price = Number(price + 1);

        let aux = document.createElement("input");
        aux.setAttribute(
          "value",
          `${hotel} ${room} ${pansion} Price ${price}€ Cancellation Policy: ${canx}`
        );
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
      }
    }
  }
})();

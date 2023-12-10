function generateHtml() {
  let htmlBoxes = "";

  numbers.forEach((number) => {
    htmlBoxes += `<div class="number-box">
    <div class="box-header">
      <div class="box-image">
        <img src="${number.image}" />
      </div>
      <div class="box-number">${number.number}</div>
    </div>
    <div class="box-text">
      ${number.htmlText}
    </div>
    </div>`;
  });

  document.querySelector(".main").innerHTML = htmlBoxes;
}

generateHtml();


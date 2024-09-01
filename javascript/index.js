function updateTime() {
  //San Salvador
  let sanSalvadorElement = document.querySelector("#san-salvador");
  let sanSalvadorDateElement = sanSalvadorElement.querySelector(".date");
  let sanSalvadorTimeElement = sanSalvadorElement.querySelector(".time");
  let sanSalvadorTime = moment().tz("America/El_Salvador");
  sanSalvadorDateElement.innerHTML = sanSalvadorTime.format("MMMM Do, YYYY");
  sanSalvadorTimeElement.innerHTML = sanSalvadorTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do, YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Montevideo
  let montevideoElement = document.querySelector("#montevideo");
  let montevideoDateElement = montevideoElement.querySelector(".date");
  let montevideoTimeElement = montevideoElement.querySelector(".time");
  let montevideoTime = moment().tz("America/Montevideo");
  montevideoDateElement.innerHTML = montevideoTime.format("MMMM Do, YYYY");
  montevideoTimeElement.innerHTML = montevideoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

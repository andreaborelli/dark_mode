function selectMode(mode) {

 var color = "#fff";

 if (mode === "dark") {
  color = "#000";

} else if(mode === "light") {
  color = "#fff";
 }

 document.getElementById("theme")
  .style.backgroundColor = color;
}

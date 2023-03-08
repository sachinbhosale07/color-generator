const getColor = () => {
  //Hex Code
  const randomCode = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomCode;
  color.innerHTML = "#" + randomCode;
};
document.getElementById("btn").addEventListener("click", getColor);

getColor();

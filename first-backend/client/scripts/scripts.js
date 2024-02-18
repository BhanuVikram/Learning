fetch("http://localhost:8080/population")
  .then((res) => res.json())
  .then((convertedData) => console.log(convertedData))
  .catch((err) => console.log("Error is: ", err));

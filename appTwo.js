var carYear = document.getElementById("year"),
    carMake = document.getElementById("make"),
    carModel = document.getElementById("model"),
    carVin = document.getElementById("vin"),
    btnAddCar = document.getElementById("btnAddCar"),
    infoPage = document.getElementById("carInfoForm"),
    carPrintArea = document.getElementById("printArea");


var cars = [];

var Car = function Car(year, make, model, vin) {
    this.Year = year;
    this.Make = make;
    this.Model = model;
    this.Vin = vin;
}

btnAddCar.addEventListener("click", function () {
    if (isNaN(carYear.value)) {
        alert("Car Year Must Be a Number!");
        return;
    } else {
        if (carYear.value == "" || carModel.value == "" || carVin.value == "" || carMake.value == "") {
            alert("All information must be entered.");
            return;
        }
        else {
            if (carYear.value < "1800" && carYear.value > "2018"){
                alert("Enter a valid Year");
                return;
            }
        }
    }
    driversCar = new Car(carYear.value, carMake.value, carModel.value, carVin.value);
    cars.push(driversCar);
    displayCar();
    infoPage.reset();
   
});


var displayCar = function displayCar() {
    carPrintArea.innerHTML = "";
    cars.forEach(function (item) {
        carPrintArea.innerHTML += "<br><span class=\"ml-2\"><strong>Year: </strong>" + item.Year + "</span><span class=\"ml-3\"><strong>Make: </strong>" + item.Make
            + "</span><span class=\"ml-3\"><strong>Model: </strong>" + item.Model + "</span><span class=\"ml-3\"><strong>VIN: </strong>" + item.Vin +"</span>"
    });

}
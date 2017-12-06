var carYear = document.getElementById("year"),
    carMake = document.getElementById("make"),
    carModel = document.getElementById("model"),
    carVin = document.getElementById("vin"),
    btnAddCar = document.getElementById("btnAddCar")
    infoPage = document.getElementById("carInfoForm");

var cars = [];

var Car = function Car(year, make, model, vin){
    this.Year = year;
    this.Make = make;
    this.Model = model;
    this.Vin = vin;
}

btnAddCar.addEventListener("click", function(){
    if(isNaN(carYear.value)){
        alert("Car Year Must Be a Number!");
    }
    driversCar = new Car(carYear.value,carMake.value,carModel.value,carVin.value);
    cars.push(driversCar);
    infoPage.reset();
});
from models import Car, Bike

car1 = Car("Toyota", "Camry", 2020, 4)
car2 = Car("BMW", "M5", 2022, 4)

bike1 = Bike("Yamaha", "R1", 2021, "sport")
bike2 = Bike("Harley", "Iron 883", 2019, "cruiser")

vehicles = [car1, car2, bike1, bike2]

for v in vehicles:
    print(v.info())
    print(v.start_engine())
    print()
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return "Engine started"

    def info(self):
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start_engine(self):
        return f"Car {self.brand} engine started"


class Bike(Vehicle):
    def __init__(self, brand, model, year, type_bike):
        super().__init__(brand, model, year)
        self.type_bike = type_bike

    def start_engine(self):
        return f"Bike {self.brand} engine started"
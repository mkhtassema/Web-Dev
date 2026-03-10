from models import Animal, Dog, Cat

dog = Dog("Buddy", 3, "brown", "Labrador")
cat = Cat("Luna", 2, "white", 9)

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.speak())
    print(animal.info())
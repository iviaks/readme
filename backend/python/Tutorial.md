# Python tutorial

## Variables

```python
a = 1  # Number
b = 1.0  # Float
c = '1'  # String
d = u'1'  # Unicode (for Python 2.x)
e = True/False  # Boolean
f = [1, 2, 3]  # List
g = (1, 2, 3)  # Tuple
h = {1, 2, 3}  # Set
i = {1: 1, 2: 2, 3: 3}  # Dict
j = lambda x: x ** 2  # Anonymous function
h = (i for i in range(10))  # Generator
```

## Conditions

```python
if <cond1>:  # If condition 1 is True, execute expression 1
    <expr_1>
[elif <cond 2>: <expr_2>]  # If condition 2 is True, execute expression 2
[else: <expr_3>]  # If all conditions is False, execute expression 3
```

### Example:

```python
if x > 10:
    print('x bigger than 10')
else:
    print('x lower than 10')
```

## Loops

Python has two types of loop: **for** and **while**

### For loop

```python
for <counter> in <variable>:  # Variable can be list, tuple or generator
    <expression>
```

#### Example:

```python
for index in range(10):  # Range built-in function in Python
    print(index)
```

### While loop

```python
while <cond>:  # While condition is True, execute expression
    <expression>
```

#### Example:

```python
while c > 2:
    c = c ** (1 / 2)
```

## Functions

In python, you can create two types of function: **normal function** and **anonymous function**

### Normal functions

Arguments of function can be named or non-named.

```python
def <name>([<arguments>]):
    <expression>
```

#### Example 1:

```python
def sqrt(x):  # one required argument
    return x ** (1 / 2)
```

#### Example 2:

```python
def log():  # without any argument
    print('Logging')  # for Python 2.x use `print 'Logging'`
```

#### Example 3:

```python
def pow(x, n=2):  # one required argument and one argument with default param
    return x ** n
```

### Anonymous functions

```python
lambda <argument>: <expression>
```

#### Example:

```python
lambda x: x ** 2
```

## Classes

```python
class <name>(<extends>):
    <methods>
```

### Example 1:

```python
class Main:
    def connect(self):  # self is reserved word for class method
        pass
```

### Example 2:

```python
class Animal:
    pass

class Dog(Animal):  # Extending
    pass
```

## Modules

In Python, you can import certain function or class from another module.

```python
import module_name  # Import all module
from module_name import func  # Import certain function from module
```

### Example 1:

```python
from math import pi
print(pi)  # 3.141592653589793
```

### Example 2:

```python
import math
print(math.pi)  # 3.141592653589793
```

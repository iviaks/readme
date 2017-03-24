# Переменные
## let
```javascript
let a = 5;
```
> Область видимости переменной let – блок {...}.
> Переменная let видна только после объявления.
> При использовании в цикле, для каждой итерации создаётся своя переменная.

## const

```javascript
const apple = 5;
const user = {
  name: "Вася"
};
user.name = "Петя"; // допустимо
```

# Деструктуризация
```javascript
let [firstName, lastName] = ["Максим", "Сайков"];
let [, , title] = "Юлий Цезарь Император Рима".split(" ");
let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
// значения по умолчанию
let [firstName="Гость", lastName="Анонимный"] = [];

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;
```

# Функции
```javascript
// ES5
function a(x, y){
  return x + y;
}

// ES6
let a = (x, y) => x + y;
```

## Появилась возможность передачи параметра по умолчанию
```javascript
function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(title + ' ' + width + ' ' + height);
}

showMenu("Меню"); // Меню 100 200
```

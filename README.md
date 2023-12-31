# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

[Результат](https://prnt.sc/tNgbeLMlfRFH)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

[Результат](https://prnt.sc/9navNAnpe_1Z)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

[Результат](https://prnt.sc/WqzcS22WWojH)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

[Результат](https://prnt.sc/ee-rlgNK44vV)

[Результат - null](https://prnt.sc/h5rmkcReDocI)

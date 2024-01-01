# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

[Результат](https://prnt.sc/U4JxyU8Di9wt)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

[Результат](https://prnt.sc/WoBMv4INEs_M)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

[Результат](https://prnt.sc/SwEm2CgiS8OW)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

[Результат](https://prnt.sc/DOhOnMh5PdwC)

[Результат - null](https://prnt.sc/h5rmkcReDocI)

const correctPassword = 'ADMIN_PASSWORD'
let message

while (true) {
    let userInput = prompt('Введіть пароль:')
    if (userInput === null) {
        message = 'Скасовано користувачем!'
        break;
    } 
    else if (userInput === correctPassword) {
        message = 'Ласкаво просимо!'
        break;
    } 
    else {
        alert('Доступ заборонений, невірний пароль!')
    }
}

alert(message)
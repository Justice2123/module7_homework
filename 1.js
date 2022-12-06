

const userIvanov = {
  Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'
  }
  
  Object.getOwnPropertyNames(userIvanov).forEach(function(val) {
    console.log(val + ': ' + userIvanov[val]);
  });
   /*"Имя: Иван"
  "Фамилия: Иванов"
  "Возраст: 25"*/


let firstNum1,   
    firstNum2;
    do {
        firstNum1 = prompt("Введите число первое");
        
      }
      while (isNaN(firstNum1) || firstNum1 == null || firstNum1 == '' || firstNum1 > firstNum2);

    do {
        firstNum2 = prompt("Введите число второе");
      }
      while (isNaN(firstNum2) || firstNum2 == null || firstNum2 == '');
 
      if (firstNum1 > firstNum2) {
          alert('Первое число больше второго');
      } 
      else if (firstNum2 === firstNum1) {
          alert('Числа равны')
      }
      else { alert('Второе число больше первого')};



















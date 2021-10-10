# Проєкт бібліотеки стилізованих елементів (блоків) банди lazyHamsters (draft ver.01 19.00 09/10/2021).

## Базові поняття:
   - **margin**:
      властивість *margin* - встановлює зовнішні відступи (поля) навколо елемента. Таким відступом є простір від грані поточного елемента до внутрішнього краю його батьківського елемента
   - **padding**:
      властивість *padding* - задає відступ навколо вмісту елемента (тобто, задає відстань між кордоном елемента та уявним прямокутником, котрий обмежує текст)
   - Властивість **position** визначає тип позиціювання відносно вікна браузера або інших елементів: *static*, *relative*, *absolute*, *fixed* або *sticky* (статичний, відносний, абсолютний, фіксований або клейкий). 
      - *absolute* (абсолютне позиціювання) : видаляє елемент з загального потоку (місце, що звільнив елемент заповнюється іншими елементами) і вставляється відносно свого батьківського, не статично позиційованого елемента, якщо такого елемента немає, то їм вважається вікно браузера (При цьому ширина елемента, без задання, встановлюється за його вмістом). Нове місце розраховується за допомогою властивостей left, top, right та bottom.
      - *relative* (відносне позиціювання) : положення елемента встановлюється відносно його поточного положення. Додавання властивостей left, top, right і bottom змінює позицію елемента і зрушує його в ту чи іншу сторону. Ця властивість дозволяє змінюва ти позицію елемента без зміни макету
   - Значення *block* властивості *display* забезпечує розташування блокових елементів один над одним, вертикально (якщо немає особистих своїх позиціонувань, наприклад float). 
   - Значення *inline-block* властивості *display* характеризується при порівняння з display: block, основною відмінністю є те, що display: inline-block не формує розрив строки після елемента, тому елемент може бути розташовуватися поруч з іншими елементами. 
 
## Туторіал стилізованих елементів (блоків) банди lazyHamsters
Запропонована бібліотека стилів (а саме створений файл main.css) базується на узачальненні та систематизації стилів, отриманий під час верстки реального макету (частини його мобільної версії), а саме:
   
   [Our Site example](https://lazyhamsters.github.io/lazyHamsters/)
           
   В результаті роботи створено бібліотеку стилів (у вигляді файлу "main.css"): 
      
   [Our "CSS_lazyHamsters_v0"](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_lazyHamsters_v0_09_10_2021.css)

## Базові посилання:

   [CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)

   [Going manual](https://marksheet.io/css-position.html)

## Додаткові посилання:

   [CSS:SIGMA](https://itba-sigma.github.io/MAIN-SIGMA/build/index.html)
   
   [CSS:PENGUING](https://itba-penguins.github.io/penguins-css/penguins-ui-docs.html)
   
   [CSS:INSAIDER](https://htmlpreview.github.io/?https://github.com/ruslankravchuk/ITBRO/blob/project/lesson_2/directory_lesson/index.html)
   
   [CSS:ACTIVEHAMSTERS](https://htmlpreview.github.io/?https://github.com/Andrii17s/activehamsters/blob/main/Week_2/Hamsters/About_activeLib.html)
      
## Базова кастомна стилізація елементів (блоків) банди lazyHamsters (draft ver.01 19.00 09/10/2021):

**Концепція використання бібліотеки стилів CSS_lazyHamsters**

- Бібліотека пропонує стилізацію основних елементів, але акцентує увагу на необхідності **самостійно** вирішувати питання: 
   - розташування блоків/елементів;
   - визначення розміру блоків/елементів.
   
- Визначена система формування назв елементів стилізації: **<Назва елемента>_<sh>_<Type "number">**:
   - <Назва елемента>, що стилізується;
   - "sh", скорочення від "lazyHamsters";
   - <Type "number">, де "number" це порядковий номер запропонованої стилізації від команди "lazyHamsters" для даного блоку/елементу, нормер "0" - відповідає варіанту без вказання розміру блоку/елементу.
  
### Топографія та визначення кольорової палітри:
   
   **Топографія**
   | Основним шрифтом є "Catamaran" | 
   |:-------------------------------: |
   | ![Font type 1](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Font_1.png "Один з запропонованих кольорів палітри")    | 

***Особливості підключення в HTML5***
```
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Catamaran&display=swap" rel="stylesheet">
</head>
``` 

 ***Особливості підключення в CSS3***
   На розсуд користувача, шляхом додавання відповідних полів *font-family, font-size, font-style* та їх значень, до відповідних елементів стилізації.
   
   **Кольорова палітра** - в основному присутнні білі, зелені, сірі кольори таїх відтінки:**
   
   | Вигляд блоку/елементу на сайті  | Особливості підключення в HTML5| Особливості підключення в CSS3| Примітки |
   |:-------------------------------: |:-------------------------------| :-------------| :-------------|
   | ![Color type 1](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_1.png "Один з запропонованих кольорів палітри")    | через CSS3 | Додати значення **#11B55B** до відповідної властивості: *color, border, background-color, background-color,background*  | на розсуд користувача | 
   | ![Color type 2](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_2.png "Один з запропонованих кольорів палітри")    | через CSS3 | Додати значення **#E7F0F0** до відповідної властивості: *color, border, background-color, background-color,background*  | на розсуд користувача | 
   | ![Color type 3](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_3.png "Один з запропонованих кольорів палітри")    | через CSS3 | Додати значення **#197069** до відповідної властивості: *color, border, background-color, background-color,background*  | на розсуд користувача | 
   | ![Color type 4](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_4.png "Один з запропонованих кольорів палітри")    | через CSS3 | Додати значення **#FFFFFF** до відповідної властивості: *color, border, background-color, background-color,background*  | на розсуд користувача | 
    
   

### Стилістика зображення:

### Стилістика для форм:

### Стилістика таблиць (в розробці):

### Стилістика для форм:

| Вигляд блоку/елементу на сайті  | Особливості підключення в HTML5| Особливості підключення в CSS3| Примітки |
   |:-------------------------------: |:-------------------------------| :-------------| :-------------|
   | ![Приклад 4](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_4.png "Один з запропонованих кольорів палітри")    |  |  |  | 
   | ![Приклад 4](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_4.png "Один з запропонованих кольорів палітри")    |  |  |  | 
   | ![Приклад 4](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_4.png "Один з запропонованих кольорів палітри")    |  |  |  | 
   | ![Приклад 4](https://github.com/lazyHamsters/lazyHamsters/blob/main/CSS_lazyHamsters/CSS_examples/Color_4.png "Один з запропонованих кольорів палітри")    |  |  |  | 

# lecture_X_JS_to_do_list  
![image](https://user-images.githubusercontent.com/113675674/218657499-47f92025-b765-41c6-8220-86cec0a7dfd7.png)  

## Описание задачи:  

-  Задача состоит в создании простой страницы для хранения списка задач. На странице должны быть размещены элементы для добавления новых задач, а также для отображения существующих задач в списке.  

-  Функциональность страницы должна включать возможность добавления новых задач с помощью формы ввода текста и кнопки "Добавить". При добавлении новой задачи, она должна появляться в списке задач на странице.  

-  Для каждой задачи в списке должна быть доступна возможность отметить ее как выполненную. Это можно сделать, например, с помощью флажка или кнопки. При отметке задачи как выполненной, она должна изменять свой внешний вид или перемещаться в другую часть списка, чтобы пользователь мог легко видеть, какие задачи еще нужно выполнить.  

-  Кроме того, каждая задача в списке должна иметь возможность быть удалена. Для этого должна быть предусмотрена кнопка "Удалить" для каждой задачи в списке.  

-  Все эти функции можно реализовать с помощью JavaScript, используя массивы, циклы и условные операторы для хранения, изменения и удаления задач в списке. Также необходимо использовать HTML и CSS для создания формы и списка задач на странице, а также для стилизации страницы в целом.  

## Для решения задачи мы используем HTML, CSS и JavaScript.  

1. В HTML мы создаем форму и список задач, а также подключаем наш файл со стилями CSS и файл со скриптом JavaScript. В форме мы создаем поле ввода для новой задачи и кнопку "Добавить".  

2. В CSS мы стилизуем нашу страницу, используя flexbox для размещения элементов в форме и списке задач.  

3. В JavaScript мы начинаем с того, что находим элементы, с которыми будем работать, используя методы document.querySelector() и document.getElementById(). Затем мы создаем пустой массив tasks, который будет содержать объекты задач.  

4. Мы создаем функцию renderTasks(), которая очищает список задач и затем создает новые элементы списка для каждой задачи в массиве tasks. Для каждого элемента списка мы создаем новый li элемент и добавляем текст задачи. Мы также добавляем кнопку "Удалить", которая вызывает функцию splice() для удаления задачи из массива и вызывает функцию renderTasks(), чтобы обновить список задач. Мы также добавляем обработчик событий, чтобы при щелчке на элементе списка задача отмечалась как выполненная или не выполненная, и вызывает функцию renderTasks(), чтобы обновить список задач.  


5. Мы добавляем обработчик событий submit к форме, который вызывает функцию preventDefault() для отмены отправки формы по умолчанию, а затем добавляет новую задачу в массив tasks и вызывает функцию renderTasks(), чтобы обновить список задач.  

6. Наконец, мы вызываем функцию renderTasks(), чтобы отобразить список задач при загрузке страницы.  

Таким образом, мы создаем простую страницу для хранения списка задач, которая позволяет добавлять, удалять и отмечать задачи как выполненные, используя JavaScript для манипулирования содержимым страницы.  

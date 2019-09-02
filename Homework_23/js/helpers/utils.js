class Utils {
    static parseRequestURL() {
        const url = location.hash.slice(2), //вырезаем из url текущий hash(# и всё что после неё) начиная со 2 символа(т.е. без #/) и записываем в переменную;
        //пример: http://127.0.0.1:5500/#/task/u8ufk4vkxu/edit => location.hash.slice(2) => task/u8ufk4vkxu/edit
            
            request = {}; //создаём пустой объект

        [request.resource, request.id, request.action] = url.split('/');  //путём деструктуризации присваиваем ключи и значения объекту
        //url.split('/') делит наш url task/u8ufk4vkxu/edit на отдельные составляющие и помещает их в массив => ["task", "u8ufk4vkxu", "edit"]

        return request;
    }

    static generateID() {  //генерируем рандомный ID
        //toString() система исчисления(в данном примере ставим 36 всегда)
        //substr - с какого и какое кол-во символов вырезается от полученного числа
        return Math.random().toString(36).substr(2, 10);
    }
}

export default Utils;
//знаходження мін та макс 
function findMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {//аргумент пор чи не
        return "Помилка: передано не масив або порожній масив!";
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `Мінімум: ${min}, Максимум: ${max}`;
}

//порівняння двох об'єктів
function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

let numbers = [3, 7, 1, 9, 4, -2, 10];
let objA = { name: "lala", age: 22 };
let objB = { name: "lala", age: 23 };

//обробник події для кнопки, знаходить мін та макс
document.getElementById("findMinMaxBtn").onclick = function() {
    let result = findMinMax(numbers);
    document.getElementById("result").textContent = result;
};

// обробник події для кнопки, яка порівнює два об'єкти
document.getElementById("compareObjectsBtn").onclick = function() {
    let result = compareObjects(objA, objB) ? "Об'єкти рівні" : "Об'єкти не рівні";
    document.getElementById("result").textContent = result;
};

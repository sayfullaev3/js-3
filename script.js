let watch = +prompt("Введите текущее время")
switch (watch) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        alert("Доброе утро хорошего вам дня")
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        alert("Хорошего вам дня")
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        alert("Как прошел твой день")
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("Доброй ночи")
        break;
    default:
        break;
}
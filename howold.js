let years = prompt ( 'Сколько тебе лет ?');

if (years == +years && years != '') {


    let mod = years % 100;

    if (mod > 19) {
        mod = mod % 10;
    }

    if (mod === 1) {
        alert(years + ' год');
    } else if (mod > 1 && mod <= 4) {
        alert(years + ' года');
    } else {
        alert(years + ' лет')


    }
}
else {
    alert('Неверный данные, повторите попытку! Для изменения обновите страницу.');

}
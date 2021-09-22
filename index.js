let log = document.getElementById('calclog');
// form.display.value = eval(form.display.value)
let field = document.getElementById('display')
const update = () => {
    if (field.value != '') {
        let expression = field.value;
        let result = eval(field.value);
        field.value = result;
        let logupdate = `<div>${expression} <div class='result'> = ${result}</div> </div><hr>`;
        log.innerHTML += logupdate;
        field.value = '';
    }
}
// const inp = (key) => {
//     field.value += key;
// }
// const btn = document.querySelectorAll('.btn');
// btn.forEach(element => {
//     element.addEventListener('click', inp(element.value))
// });

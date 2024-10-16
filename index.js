let dateTime = new Date();
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
let date = dateTime.toLocaleDateString(undefined, options);

if(document.getElementById('date-today')){
    document.getElementById('date-today').textContent = date
}

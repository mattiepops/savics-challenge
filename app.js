const first = document.querySelector('#first_name')
const last = document.querySelector('#last_name')
const age = document.querySelector('#age')
const city = document.querySelector('#city')
const save = document.querySelector('#save-button')
const resultDiv = document.querySelector('.resultDiv')


let results = []

const displayRecord = () => {
    if (!first.value || !last.value || !age.value || !city.value){
        alert('Please fill all the boxes');
        return;
    } 
    

    const newRecord = document.createElement('p')
    newRecord.classList.add('new-record')
    resultDiv.appendChild(newRecord)
    newRecord.innerHTML = first.value + ' ' + last.value + ' ' + age.value + " " + city.value

    first.value = ''
    last.value = ''
    age.value = ''
    city.value = ''
}

save.addEventListener('click', displayRecord)


let numArray = [];

function addValue() {
    let value = parseFloat(document.getElementById('numEntry').value);
    if (isNaN(value)) {
        alert('That is not a number. Try again.');
    }
    else {
        numArray.push(value);
    }
    let output = '';
    for (let i = 0; i <= numArray.length - 2; i++) {
        output += numArray[i] + ', ';
    }
    output += numArray[numArray.length - 1];
    document.getElementById('arrayDisplay').innerHTML = output;
    computeMean();
}

function removeValue() {
    let value = parseFloat(document.getElementById('numEntry').value);
    if (isNaN(value)) {
        alert('That is not a number. Try again.');
    }
    else if (!(numArray.includes(value))) {
        alert('That number is not in your array.');
    }
    else {
        let index = numArray.indexOf(value);
        numArray.splice(index, 1);
    }
    let output = '';
    for (let i = 0; i <= numArray.length - 2; i++) {
        output += numArray[i] + ', ';
    }
    output += numArray[numArray.length - 1];
    document.getElementById('arrayDisplay').innerHTML = output;
    computeMean();
}

function computeMean() {
    let sum = 0;
    for (let i = 0; i <= numArray.length - 1; i++) {
        sum += numArray[i];
    }
    document.getElementById('meanDisplay').innerHTML = (sum / numArray.length);
}
function pentAP() {
    let length = parseFloat(document.getElementById('pentlength').value);
    let perimeter = length * 5;
    let height = (length / 2) * Math.tan(Math.PI / 5);
    let triarea = (height * length) / 2;
    let area = triarea * 5;
    document.getElementById('pentPerimeter').innerHTML = perimeter;
    document.getElementById('pentArea').innerHTML = area;
}

function d12Volume() {
    let length = parseFloat(document.getElementById('d12length').value);
    const volume = (1 / 4) * (15 + (7 * Math.sqrt(5))) * (length * length * length);
    console.log(volume);
    document.getElementById('d12V').innerHTML = volume;
}
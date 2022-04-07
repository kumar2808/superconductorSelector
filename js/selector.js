var data;

function doSelection() {
    
    var inputElement = getById("inputEle").value;
    var inputType = getById("inputType").value;
    var inputBCS = getById("inputBCS").value;

    var impresionTabla = "";

    var n = data.length;

    var s = 1;
    for (var i = 0; i < n; i++) {
        if (data[i]['Class'] == inputElement && (data[i]['Type'] == inputType || data[i]['Type'] == 'Not-Applicable') && (data[i]['BCS'] == inputBCS || data[i]['BCS'] == 'Not-Applicable')) {
            impresionTabla += "<tr><td>" + (s) + "</td><td>" + data[i]['Substance'] + "</td><td>" + data[i]['Tc'] + "</td><td>" + data[i]['Hc'];
            s++;
        }
    }
    if (impresionTabla == "") {
        impresionTabla = "<tr><td>" + ("No Suitable Superconductor for the mentioned permutation.") + "</td><td>"
    }
    getById("tableBody").innerHTML = impresionTabla;
}

function getById(id) {
    return document.getElementById(id);
}

function load() {
	var mydata = JSON.parse(data);
    data = mydata;
}

function doRandom() {
    var randomEye = randomOptionFrom($('#inputEle')[0]).value;
    doSelection();
}

function randomItemFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomOptionFrom(select) {
    return randomItemFrom(select.options);
}
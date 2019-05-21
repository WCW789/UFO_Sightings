// from data.js
let tableData = data;

let tbody = d3.select("tbody");
let array1 = [];
let array2 = ["datetime", "city", "state", "country", "shape"];

let submit = d3.select("#submit");

tableData.forEach((w => {
    let u = tbody.append("tr");
    console.log("Ni hao")
    Object.entries(w).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
})
);

submit.on("click", function () {
    d3.event.preventDefault();

    let inputElement = d3.select("#date");

    let inputValue0 = inputElement.property("value");
    if (inputValue0 != "") {
        array1.push(inputValue0)
    } else {
        array1.push("")
    }

    let inputElement2 = d3.select("#city");

    let inputValue2 = inputElement2.property("value").toLowerCase();
    if (inputValue2 != "") {
        array1.push(inputValue2)
    } else {
        array1.push("")
    }

    let inputElement3 = d3.select("#state");

    let inputValue3 = inputElement3.property("value").toLowerCase();
    if (inputValue3 != "") {
        array1.push(inputValue3)
    } else {
        array1.push("")
    }

    let inputElement4 = d3.select("#country");

    let inputValue4 = inputElement4.property("value").toLowerCase();
    if (inputValue4 != "") {
        array1.push(inputValue4)
    } else {
        array1.push("")
    }

    var inputElement5 = d3.select("#shape");

    var inputValue5 = inputElement5.property("value").toLowerCase();
    if (inputValue5 != "") {
        array1.push(inputValue5)
    } else {
        array1.push("")
    }
    console.log("array1", array1)


    if (array1[0] != "") {
        filteredData1 = tableData.filter((row => ((row[array2[0]] === array1[0]))));
        tbody.html(null)
    } else {
        filteredData1 = tableData
        tbody.html(null)
    }

    if (array1[1] != "") {
        filteredData2 = filteredData1.filter((row => ((row[array2[1]] === array1[1]))));
        tbody.html(null)
    } else {
        filteredData2 = filteredData1
        tbody.html(null)
    }

    if (array1[2] != "") {
        filteredData3 = filteredData2.filter((row => ((row[array2[2]] === array1[2]))));
        tbody.html(null)
    } else {
        filteredData3 = filteredData2
        tbody.html(null)
    }

    if (array1[3] != "") {
        filteredData4 = filteredData3.filter((person => ((person[array2[3]] === array1[3]))));
        tbody.html(null)
    } else {
        filteredData4 = filteredData3
        tbody.html(null)
    }

    if (array1[4] != "") {
        filteredData5 = filteredData4.filter((person => ((person[array2[4]] === array1[4]))));
        tbody.html(null)
    } else {
        filteredData5 = filteredData4
        tbody.html(null)
    }


    filteredData5.forEach((x => {
        let y = tbody.append("tr");
        console.log("Hello")
        Object.entries(x).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
    );

    array1 = []

});

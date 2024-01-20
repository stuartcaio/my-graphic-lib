const graphicContent = document.getElementsByClassName("graphics__content")[0];
const xAxis = document.getElementsByClassName("graphics__x")[0];
const yAxis = document.getElementsByClassName("graphics__y")[0];
const originalWidthbyPercentage = 10;
const colors = ["blue", "green", "red", "orange", "yellow", "purple", "gray", "pink", "brown", "cyan"];
const columnsNumber = document.getElementById("columnsNumber");
const columnsValues = [];

window.addEventListener("load", function (){
    let widthByColumnsNumber = (originalWidthbyPercentage - (originalWidthbyPercentage / columnsNumber.value));
    
    getValuesAndDefineGraphic(widthByColumnsNumber);
});

function getValuesAndDefineGraphic(widthByColumnsNumber){
    for(let i = 0; i < columnsNumber.value; i++){
        columnsValues.push(newColumnValue);
        defineXAxis(newColumnLabel, widthByColumnsNumber);
        defineColumn(newColumnValue, widthByColumnsNumber, colors[i]);
    }

    checkYLimitAndSoDefine();
}

function checkYLimitAndSoDefine(){
    const largestColumValue = columnsValues.sort().reverse()[0];

    if(largestColumValue < 10){
        defineYAxis(largestColumValue, 1);
    }

    if(largestColumValue > 10 && largestColumValue < 50){
        defineYAxis(largestColumValue, 5);
    }

    if(largestColumValue > 50 && largestColumValue < 100){
        defineYAxis(largestColumValue, 10);
    }
}

function defineYAxis(limit, spaceBetweenValues){
    for(let value = limit; value > 0; value = value - spaceBetweenValues){
        let currentYAxis = document.createElement("h2");

        currentYAxis.innerHTML = value;
        yAxis.appendChild(currentYAxis);
    }
}

function defineXAxis(label, widthByColumnsNumber){
    let currentXAxis = document.createElement("h2");

    currentXAxis.style.width = `${widthByColumnsNumber}%`;
    currentXAxis.innerHTML = label;
    xAxis.appendChild(currentXAxis);
}

function defineColumn(value, widthByColumnsNumber, color){
    let currentGraphic = document.createElement("div");

    currentGraphic.className = "graphic";
    currentGraphic.style.height = `${value}px`;
    currentGraphic.style.width = `${widthByColumnsNumber}%`;
    currentGraphic.style.backgroundColor = color;
    graphicContent.appendChild(currentGraphic);
}
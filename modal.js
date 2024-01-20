const body = document.getElementById("main");
const showModalColumnsNumber = document.getElementById("modal-columns-number");
const showModalColumnsOptions = document.getElementById("modal-columns-options");

window.addEventListener("load", function () {
    showModalColumnsNumber.style.display = "flex";
});

if(showModalColumnsNumber.style.display === "flex"){
    body.style.opacity = "0.5";
}

function showColumnOptionsByDefinedNumber(){
    showModalColumnsNumber.style.display = "none";
    showModalColumnsOptions.style.display = "flex";

    for(var currentOption = 0; currentOption < columnsNumber.value; currentOption++){
        defineNewOption(currentOption);
    }

    defineButtonsDiv();
}

function defineButtonsDiv(){
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "modal__buttons";
    showModalColumnsNumber.appendChild(buttonDiv);

    defineNewOptionButton(buttonDiv, "Salvar");
    defineNewOptionButton(buttonDiv, "Fechar");
}

function defineNewOptionButton(newButtonDiv, title){
    const newButton = document.createElement("button");
    newButton.innerHTML = title;
    newButtonDiv.appendChild(newButton);
}

function defineNewOption(currentOption){
    const newOptionDiv = document.createElement("div");
    defineNewOptionDiv(newOptionDiv);
    
    const labelNameOption = document.createElement("label");
    const inputNameOption = document.createElement("input");
    defineNewInfosColumnDiv(newOptionDiv, "Nome", labelNameOption, inputNameOption, `Nome da coluna ${currentOption}`, "text");

    const labelValueOption = document.createElement("label");
    const inputValueOption = document.createElement("input");
    defineNewInfosColumnDiv(newOptionDiv, "Valor", labelValueOption, inputValueOption, `Valor da coluna ${currentOption}`, "number");
}

function defineNewOptionDiv(newOptionDiv){
    newOptionDiv.className = "modal__option";
    showModalColumnsOptions.appendChild(newOptionDiv);
}

function defineNewInfosColumnDiv(newOptionDiv, title, labelElement, inputElement, labelContent, inputType){
    const newInfosColumnDiv = document.createElement("div");
    newInfosColumnDiv.className = "modal___info-column"
    newInfosColumnDiv.title = title;
    newOptionDiv.appendChild(newInfosColumnDiv);

    defineNewLabel(newInfosColumnDiv, labelElement, labelContent);
    defineNewInputOption(newInfosColumnDiv, inputElement, inputType);
}

function defineNewLabel(newInfoColumnDiv, newLabelNameOption, text){
    newLabelNameOption.innerHTML = text;
    newLabelNameOption.className = "modal___label";
    newInfoColumnDiv.appendChild(newLabelNameOption);
}

function defineNewInputOption(newInfoColumnDiv, newInputOption, type){
    newInputOption.type = type;
    newInputOption.className = "modal___input";
    newInfoColumnDiv.appendChild(newInputOption);
}
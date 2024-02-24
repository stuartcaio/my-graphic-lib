const body = document.getElementById("main");
const showModalColumnsNumber = document.getElementById("modal-columns-number");
const showModalColumnsOptions = document.getElementById("modal-columns-options");

window.addEventListener("load", function () {
    showModalColumnsNumber.style.display = "flex";
});

function showColumnOptionsByDefinedNumber(){
    showModalColumnsNumber.style.display = "none";
    showModalColumnsOptions.style.display = "flex";

    for(var currentOption = 0; currentOption < columnsNumber.value; currentOption++){
        defineOption(currentOption);
    }

    defineButtonsDiv();
}

function defineButtonsDiv(){
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "modal__buttons";
    showModalColumnsNumber.appendChild(buttonDiv);

    defineOptionButton(buttonDiv, "Salvar");
    defineOptionButton(buttonDiv, "Fechar");
}

function defineOptionButton(buttonDiv, title){
    const button = document.createElement("button");
    button.innerHTML = title;
    buttonDiv.appendChild(button);
}

function defineOption(currentOption){
    const newOptionDiv = document.createElement("div");
    newOptionDiv.className = "modal__option";
    showModalColumnsOptions.appendChild(newOptionDiv);

    defineInfosColumnDiv(newOptionDiv, "Nome", `Nome da coluna ${currentOption}`, "text");
    defineInfosColumnDiv(newOptionDiv, "Valor", `Valor da coluna ${currentOption}`, "number");
}

function defineInfosColumnDiv(newOptionDiv, title, labelElement, inputElement, labelContent, inputType){
    const newInfosColumnDiv = document.createElement("div");
    newInfosColumnDiv.className = "modal___info-column"
    newInfosColumnDiv.title = title;
    newOptionDiv.appendChild(newInfosColumnDiv);

    defineLabel(newInfosColumnDiv, labelElement, labelContent);
    defineInputOption(newInfosColumnDiv, inputElement, inputType);
}

function defineLabel(newInfoColumnDiv, text){
    const newLabelOption = document.createElement("label");
    newLabelOption.innerHTML = text;
    newLabelOption.className = "modal___label";
    newInfoColumnDiv.appendChild(newLabelOption);
}

function defineInputOption(newInfoColumnDiv, type){
    const newInputOption = document.createElement("input");
    newInputOption.type = type;
    newInputOption.className = "modal___input";
    newInfoColumnDiv.appendChild(newInputOption);
}
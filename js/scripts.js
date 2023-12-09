//Seleção de elementos

const sideBarElement = document.querySelectorAll(".side-bar-inner");
const btnsBottomBar = document.querySelectorAll(".button-bottom-bar");

//Listas Sidebar
const utilidadesSbElement = document.querySelector("#utilidades");
const electricPanelsSbElement = document.querySelector("#paineis-eletricos");

//Botões da Topbar
const tbMachineResourcesBtn = document.querySelector("#tb-machines-resources");
const tbElectricPanelsBtn = document.querySelector("#tb-electric-panels");

//Botões da Sidebar


//Funçoes

//Remove seleção do botão da sidebar e remove a lista de elementos da sidebar
function addHideDisplaytoAll () {
    sideBarElement.forEach((item) => {
        item.classList.add("hide");
    });
    
    btnsBottomBar.forEach((item) => {
        item.classList.remove("button-selected");
    });

}


//Eventos

//Função para os eventos dos botões da topbar
function btnTopBarEvent (btn, sideBarElement) {
    btn.addEventListener("click", () => {
        if (!sideBarElement.classList.contains("hide")) {
            return
        } else {
            addHideDisplaytoAll();
            sideBarElement.classList.remove("hide");
            btn.classList.add("button-selected");
        }
    });
}

btnTopBarEvent (tbMachineResourcesBtn, utilidadesSbElement);
btnTopBarEvent (tbElectricPanelsBtn, electricPanelsSbElement);



//Seleção de elementos

const sideBarElement = document.querySelector(".side-bar-inner");

//Listas Sidebar
const utilidadesSbElement = document.querySelector("#utilidades");
const electricPanelsSbElement = document.querySelector("#paineis-eletricos");

//Botões da Topbar
const tbMachineResourcesBtn = document.querySelector("#tb-machines-resources");
const tbElectricPanelsBtn = document.querySelector("#tb-electric-panels");

//Botões da Sidebar


//Funçoes
function addHideDisplaytoAll () {
    utilidadesSbElement.classList.add("hide");
    electricPanelsSbElement.classList.add("hide");
}


//Eventos
tbMachineResourcesBtn.addEventListener("click", () => {
    if (!utilidadesSbElement.classList.contains("hide")) {
        return
    } else {
        addHideDisplaytoAll();
        utilidadesSbElement.classList.remove("hide");
    }
});

tbElectricPanelsBtn.addEventListener("click", () => {
    if (!electricPanelsSbElement.classList.contains("hide")) {
        return
    } else {
        addHideDisplaytoAll();
        electricPanelsSbElement.classList.remove("hide");
    }
});


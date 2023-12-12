//Seleção de elementos
const sideBarElement = document.querySelectorAll(".side-bar-inner");
const btnsBottomBar = document.querySelectorAll(".button-bottom-bar");

//Listas Sidebar
const utilidadesSbElement = document.querySelector("#utilidades");
const electricPanelsSbElement = document.querySelector("#paineis-eletricos");

//Botões da Topbar
const tbMachineResourcesBtn = document.querySelector("#tb-machines-resources");
const tbElectricPanelsBtn = document.querySelector("#tb-electric-panels");

//Card de máquinas
const centralInnerElement = document.querySelector(".central-inner");
const centralItens = document.querySelectorAll(".central-item");

//Elementos da tela de add resource
const addResourceBtn = document.querySelector("#add-resource");
const addResourceScreenElement = document.querySelector(".add-resource-screen");
const resourceScreenBtnClose = document.querySelector("#add-resource-screen-button-close");
const resourceScreenBtnOk = document.querySelector("#add-resource-screen-form-button-ok");

//Botões da Sidebar


//Funçoes

//Função para criar um card no container central
function createCard (item) {
    
    //Cria o card
    const divPrincipal = document.createElement("div");
    divPrincipal.classList.add("central-item");

    const divText = document.createElement("div");
    divText.classList.add("central-item-text");
    divPrincipal.appendChild(divText);

    const itemTitle = document.createElement("h4");
    itemTitle.innerText = item.title;
    divText.appendChild(itemTitle);

    const itemDescription = document.createElement("p");
    itemDescription.innerText = item.description;
    divText.appendChild(itemDescription);

    const divResourceImg = document.createElement("div");
    divResourceImg.classList.add("resource-img");
    divPrincipal.appendChild(divResourceImg);

    const itemImg = document.createElement("img");
    itemImg.src = item.img;
    divResourceImg.appendChild(itemImg);

    centralInnerElement.appendChild(divPrincipal);

    //Cria a tela de especificações do card (Resource)

}

//Função de adicionar cards
function addCard () {

    const title = document.querySelector("#add-resource-screen-form-title");
    const description = document.querySelector("#add-resource-screen-form-description");
    const img = document.querySelector("#add-resource-screen-img-file");

    console.log(img.files[0].name);

    const item = {
        title: title.value,
        description: description.value,
        img: "img/machines/cda/nirvana150.jpg",
    }

    if (title.value && description.value){
        createCard (item);
        addResourceScreenElement.classList.add("hide");  
    }
    

}

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

//Eventos dos botões da topbar
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

//Evento para o botão de adicionar cards a div central (abre tela de adicionar cards)
addResourceBtn.addEventListener("click", () =>{
    addResourceScreenElement.classList.remove("hide");
});

//Evento para o botão de fechar tela de adicionar cards
resourceScreenBtnClose.addEventListener("click", () => {
    addResourceScreenElement.classList.add("hide");
});


//

//Evento para o botão de OK da tela de adicionar cards
resourceScreenBtnOk.addEventListener("click", () => {
    addCard ();
    
})

//Evento de clique dos cards
function abrirCard (cardTitle, screenElements) {

    document.addEventListener("click", (e) => {
        const itens = document.querySelectorAll(".central-item");
        const targetEl = e.target;
        const parentEl = targetEl.closest("div");
    
        if(parentEl && parentEl.querySelector("h4").innerText == cardTitle) {
        
            itens.forEach((item) => {
                item.classList.add("hide");
            });
        }
        
    });

}

// //Adiciona os cards na div Central
// dados.forEach((item) => {
//     createCard(item);
// });

dados.forEach((item) => {
    abrirCard(item.title, item.screen);
});



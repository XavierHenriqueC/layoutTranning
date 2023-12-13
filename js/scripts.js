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


//Elementos da central e da tela de add resource
const returnBtnTbCenter = document.querySelector("#return-button")
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
    const resourceSpecDiv = document.createElement("div");
    resourceSpecDiv.classList.add("resouce-espec");
    resourceSpecDiv.classList.add("hide");

    const resourceSpecTitleDiv = document.createElement("div");
    resourceSpecTitleDiv.classList.add("resource-espec-title");
    resourceSpecDiv.appendChild(resourceSpecTitleDiv);

    const resouceSpecTitle = document.createElement("h4");
    resouceSpecTitle.innerText = item.title;
    resourceSpecTitleDiv.appendChild(resouceSpecTitle);

    const resourseSpecButtons = document.createElement ("div");
    resourseSpecButtons.classList.add("resourse-espec-buttons");
    resourceSpecTitleDiv.appendChild(resourseSpecButtons);

    const manualBtn = document.createElement("button");
    manualBtn.classList.add("manual-btn");
    manualBtn.innerText = "Manuais de Instruções";
    resourseSpecButtons.appendChild(manualBtn);

    const procedureBtn = document.createElement("button");
    procedureBtn.classList.add("procedure-btn");
    procedureBtn.innerHTML = "Procedimentos";
    resourseSpecButtons.appendChild(procedureBtn);

    const diagramsBtn = document.createElement("button");
    diagramsBtn.classList.add("diagrams-btn");
    diagramsBtn.innerHTML = "Diagramas Elétricos";
    resourseSpecButtons.appendChild(diagramsBtn);

    const picturesBtn = document.createElement("button");
    picturesBtn.classList.add("pictures-btn");
    picturesBtn.innerHTML = "Fotos";
    resourseSpecButtons.appendChild(picturesBtn);
    
    const resourceSpecBoby = document.createElement("div");
    resourceSpecBoby.classList.add("resource-espec-boby");
    resourceSpecDiv.appendChild(resourceSpecBoby);

    const resourceSpecBodyLeft = document.createElement("div");
    resourceSpecBodyLeft.classList.add("resource-espec-body-left");
    resourceSpecBoby.appendChild(resourceSpecBodyLeft);

    const resouceTableHeader = document.createElement("div");
    resouceTableHeader.classList.add("resouce-table-header");
    resourceSpecBodyLeft.appendChild(resouceTableHeader);

    const ionIconCircleOutline = document.createElement("ion-icon");
    ionIconCircleOutline.name = "list-circle-outline";
    resouceTableHeader.appendChild(ionIconCircleOutline);

    const resouceTableHeaderTitle = document.createElement("h4");
    resouceTableHeaderTitle.innerText = "Especificações Gerais";
    resouceTableHeader.appendChild(resouceTableHeaderTitle);

    const resouceTable1 = document.createElement("div");
    resouceTable1.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable1);

    const text1 = document.createElement("h4");
    text1.innerText = "Utilidades:";
    resouceTable1.appendChild(text1);

    const text2 = document.createElement("p");
    text2.innerText = item.utility;
    resouceTable1.appendChild(text2);

    const resouceTable2 = document.createElement("div");
    resouceTable2.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable2);

    const text3 = document.createElement("h4");
    text3.innerText = "Categoria:";
    resouceTable2.appendChild(text3);

    const text4 = document.createElement("p");
    text4.innerText = item.category;
    resouceTable2.appendChild(text4);
    
    const resouceTable3 = document.createElement("div");
    resouceTable3.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable3);

    const text5 = document.createElement("h4");
    text5.innerText = "Sub Categoria:";
    resouceTable3.appendChild(text5);

    const text6 = document.createElement("p");
    text6.innerText = item.subCategory;
    resouceTable3.appendChild(text6);

    const resouceTable4 = document.createElement("div");
    resouceTable4.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable4);

    const text7 = document.createElement("h4");
    text7.innerText = "Fabricante:";
    resouceTable4.appendChild(text7);

    const text8 = document.createElement("p");
    text8.innerText = item.factory;
    resouceTable4.appendChild(text8);

    const resouceTable5 = document.createElement("div");
    resouceTable5.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable5);

    const text9 = document.createElement("h4");
    text9.innerText = "Modelo:";
    resouceTable5.appendChild(text9);

    const text10 = document.createElement("p");
    text10.innerText = item.model;
    resouceTable5.appendChild(text10);

    const resouceTable6 = document.createElement("div");
    resouceTable6.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable6);

    const text11 = document.createElement("h4");
    text11.innerText = "Tag:";
    resouceTable6.appendChild(text11);

    const text12 = document.createElement("p");
    text12.innerText = item.tag;
    resouceTable6.appendChild(text12);

    const resouceTable7 = document.createElement("div");
    resouceTable7.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable7);

    const text13 = document.createElement("h4");
    text13.innerText = "Partnumber:";
    resouceTable7.appendChild(text13);

    const text14 = document.createElement("p");
    text14.innerText = item.partNumber;
    resouceTable7.appendChild(text14);

    const resouceTable8 = document.createElement("div");
    resouceTable8.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable8);

    const text15 = document.createElement("h4");
    text15.innerText = "Capacidade:";
    resouceTable8.appendChild(text15);

    const text16 = document.createElement("p");
    text16.innerText = item.capacity;
    resouceTable8.appendChild(text16);

    console.log(resourceSpecDiv);
    centralInnerElement.appendChild(resourceSpecDiv);

    const resouceTableHeader2 = document.createElement("div");
    resouceTableHeader2.classList.add("resouce-table-header");
    resourceSpecBodyLeft.appendChild(resouceTableHeader2);

    const ionIconCircleOutline2 = document.createElement("ion-icon");
    ionIconCircleOutline2.name = "flash-outline";
    resouceTableHeader2.appendChild(ionIconCircleOutline2);

    const resouceTableHeader2Title = document.createElement("h4");
    resouceTableHeader2Title.innerText = "Especificações Elétricas";
    resouceTableHeader2.appendChild(resouceTableHeader2Title);

    const resouceTable9 = document.createElement("div");
    resouceTable9.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable9);

    const text17 = document.createElement("h4");
    text17.innerText = "Potência:";
    resouceTable9.appendChild(text17);

    const text18 = document.createElement("p");
    text18.innerText = item.power;
    resouceTable9.appendChild(text18);

    const resouceTable10 = document.createElement("div");
    resouceTable10.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable10);

    const text19 = document.createElement("h4");
    text19.innerText = "Tensão:";
    resouceTable10.appendChild(text19);

    const text20 = document.createElement("p");
    text20.innerText = item.voltage;
    resouceTable10.appendChild(text20);

    const resouceTable11 = document.createElement("div");
    resouceTable11.classList.add("resouce-table");
    resourceSpecBodyLeft.appendChild(resouceTable11);

    const text21 = document.createElement("h4");
    text21.innerText = "Corrente:";
    resouceTable11.appendChild(text21);

    const text22 = document.createElement("p");
    text22.innerText = item.current;
    resouceTable11.appendChild(text22);
}

//Função de adicionar cards
function addCard () {

    const title = document.querySelector("#add-resource-screen-form-title");
    const description = document.querySelector("#add-resource-screen-form-description");
    const img = document.querySelector("#add-resource-screen-img-file");

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
function abrirCard (cardTitle) {

    document.addEventListener("click", (e) => {
        const itens = document.querySelectorAll(".central-item");
        const targetEl = e.target;
        const parentEl = targetEl.closest("div");
        const screen = document.querySelectorAll(".resouce-espec");
        
        if(parentEl.classList.contains("central-item") && parentEl && parentEl.querySelector("h4").innerText === cardTitle) {
            itens.forEach((item) => {
                item.classList.add("hide");

            });

            screen.forEach((item) => {
                if (item.children[0].childNodes[0].innerText == parentEl.querySelector("h4").innerText) {
                    item.classList.remove("hide");
                 }
            });
            
        };

        returnBtnTbCenter.addEventListener("click", () => {
            itens.forEach((item) => {
                item.classList.remove("hide");
                // screen.classList.add("hide");
            });

            screen.forEach((item) => {
                item.classList.add("hide");
            });
       })
        
    });

}

//Evento do botão de voltar da topbar-central

//Adiciona os cards na div Central
dados.forEach((item) => {
    createCard(item);
});

dados.forEach((item) => {
    abrirCard(item.title, item.screen);
});



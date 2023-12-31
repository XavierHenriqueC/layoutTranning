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
const returnBtnTbCenter = document.querySelector(".return-button")
const addResourceBtn = document.querySelector("#add-resource");
const addResourceScreenElement = document.querySelector(".add-resource-screen");
const resourceScreenBtnClose = document.querySelector("#add-resource-screen-button-close");
const resourceScreenBtnOk = document.querySelector("#add-resource-screen-form-button-ok");
const searchInput = document.querySelector("#search-input");
const searchBar = document.querySelector(".search-bar");

//Botões da Sidebar


//Funçoes

//Função para criar um card no container central e a tela de especificações do Resource
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

    const itemDescription1 = document.createElement("p");
    itemDescription1.classList.add("hide");
    itemDescription1.innerText = `Utilidades: ${item.utility}`;
    divText.appendChild(itemDescription1);

    const itemDescription2 = document.createElement("p");
    itemDescription2.classList.add("hide");
    itemDescription2.innerText = `Tag: ${item.tag}`;
    divText.appendChild(itemDescription2);

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
    manualBtn.classList.add("resource-screen-buttons");
    manualBtn.innerText = "Manuais de Instruções";
    resourseSpecButtons.appendChild(manualBtn);

    const procedureBtn = document.createElement("button");
    procedureBtn.classList.add("resource-screen-buttons");
    procedureBtn.innerHTML = "Procedimentos";
    resourseSpecButtons.appendChild(procedureBtn);

    const diagramsBtn = document.createElement("button");
    diagramsBtn.classList.add("resource-screen-buttons");
    diagramsBtn.innerHTML = "Diagramas Elétricos";
    resourseSpecButtons.appendChild(diagramsBtn);

    const picturesBtn = document.createElement("button");
    picturesBtn.classList.add("resource-screen-buttons");
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
        img: img,
        utility: "",
        category: "",
        subCategory: "",
        factory: "",
        model: "",
        tag: "",
        partNumber: "",
        capacity: "",

        power: "",
        voltage: "",
        current: "",

        manualLink: "",
        procedureLink: "",
        diagramLink: "",
        picturesLink: "",
    }

    if (title.value && description.value){
        addResourceScreenElement.classList.add("hide");  
        dados.push(item);
        createCard(item);
        btnsResource(item);
        abrirCard(item.title);
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

//Função para a barra de pesquisa dos cards
const getSearchCards = (search) => {
    const centralItens = document.querySelectorAll(".central-item");

    centralItens.forEach ((card) => {
        let cardTitle = card.querySelector("h4").innerText.toLowerCase();

        const normalizedSearch = search.toLowerCase();

        if(!cardTitle.includes(normalizedSearch)) {
            card.classList.add("hide");       
        }
    });
};


//Eventos

//Eventos dos botões da topbar
function btnTopBarEvent (btn, screen) {
    
    btn.addEventListener("click", () => {
       
        if (!screen.classList.contains("hide")) {
            return
        } else {
            addHideDisplaytoAll();
            screen.classList.remove("hide");
            btn.classList.add("button-selected");
        }
    });
};

btnTopBarEvent (tbMachineResourcesBtn, utilidadesSbElement);


//FUNÇÃO PARA OS FILTROS DA SIDEBAR
function listSideBar () {

    const centralItens = document.querySelectorAll(".central-item");
    let sideBarFilter = [];

    filters.forEach ((item) => {
        const inputName = item.querySelector("input[name]").name;
        const inputCheck = item.querySelector("input[type=checkbox]").checked;
        sideBarFilter.push({nome: inputName, status: inputCheck});
    });

    centralItens.forEach((screen) => {
        const paragraphs = screen.querySelectorAll("p");
        paragraphs.forEach((p) => {
            sideBarFilter.forEach((filterUnique) => {
                const normalizedP = p.innerText.toLowerCase();
               // console.log(normalizedP);
                const normalizedFilter = filterUnique.nome.toLowerCase();
              //  console.log(normalizedFilter);
                if (normalizedP.includes("utilidades:") && normalizedP.includes(normalizedFilter) && filterUnique.status == false){
                    screen.classList.add("hide");
                }

                if (normalizedP.includes("utilidades:") && normalizedP.includes(normalizedFilter) && filterUnique.status == true){
                    screen.classList.remove("hide");
                }
        
            });
        });
    });

    let emptyArr = [];
    sideBarFilter = emptyArr;
}


//Evento para o botão de adicionar cards a div central (abre tela de adicionar cards)
addResourceBtn.addEventListener("click", () =>{
    addResourceScreenElement.classList.remove("hide");
});

//Evento para o botão de fechar tela de adicionar cards
resourceScreenBtnClose.addEventListener("click", () => {
    addResourceScreenElement.classList.add("hide");
});


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
        
        //Clique do card
        if(parentEl.classList.contains("central-item") && parentEl && parentEl.querySelector("h4").innerText === cardTitle) {
            
            returnBtnTbCenter.style.pointerEvents = "all";
            returnBtnTbCenter.style.opacity = "1";
            
            sideBarElement.forEach ((element) => {
                element.style.opacity = "0.3";
                element.style.pointerEvents = "none";
            });

            itens.forEach((item) => {
                item.classList.add("hide");
            });

            screen.forEach((item) => {
            
                if (item.children[0].childNodes[0].innerText == parentEl.querySelector("h4").innerText) {
                    item.classList.remove("hide");
                    searchBar.classList.add("hide");
                    addResourceBtn.classList.add("hide");
                 }
            });
            
        };

        //Clique do botão de retornar
        returnBtnTbCenter.addEventListener("click", () => {
            
            searchBar.classList.remove("hide");
            searchInput.value = "";

            addResourceBtn.classList.remove("hide");

            returnBtnTbCenter.style.pointerEvents = "none";
            returnBtnTbCenter.style.opacity = "0.3";

            sideBarElement.forEach ((element) => {
                element.style.opacity = "1";
                element.style.pointerEvents = "all";
            });
            
            itens.forEach((item) => {
                item.classList.remove("hide");
            });

            screen.forEach((item) => {
                item.classList.add("hide");
            });
       })

    });

}

//Evento para os botões das telas de Especificações do Resource
function btnsResource (item) {

    document.addEventListener("click", (e) => {

        let titleCardTarget = 0;

        if(e.target.classList.contains("resource-screen-buttons")) {
            titleCardTarget = e.target.parentNode.parentNode.querySelector("h4").innerText;
        }
        
        if(titleCardTarget == item.title){
            
            const button = e.target.innerText;

            //Clique do botão de Manual de Instruções
            if(button == "Manuais de Instruções" && item.manualLink){
                window.open(item.manualLink, "_blank");
            }

            //Clique do botão de Procedimentos
            if(button == "Procedimentos" && item.manualLink){
                window.open(item.procedureLink, "_blank");
            }

            //Clique do botão de Diagrama Elétricos
            if(button == "Diagramas Elétricos" && item.manualLink){
                window.open(item.diagramLink, "_blank");
            }

            //Clique do botão de Fotos
            if(button == "Fotos" && item.manualLink){
                window.open(item.picturesLink, "_blank");
            }
        }

    });
}


//Adiciona os cards na div Central
dados.forEach((item) => {
    createCard(item);
    abrirCard(item.title);
    btnsResource(item);
});

//EVENTO DOS FILTROS DA SIDEBAR
const filters = document.querySelectorAll (".filter-sidebar");

filters.forEach ((item) => {
    item.addEventListener("click", () => {
        listSideBar ();
    });
});

//Evento da barra de pesquisa
searchInput.addEventListener("keyup", (e) => {
    let search = e.target.value;

    const centralItens = document.querySelectorAll(".central-item");
    centralItens.forEach((screen) => {
        screen.classList.remove("hide");
    });

    listSideBar ();
    getSearchCards(search);
    
});


import wixData from 'wix-data';

$w.onReady(function () {
    const buttonColors = ['#corCinza', '#corRosa', '#corAzul', '#corAmarelo', '#corVerde', '#corRoxo', '#corVermelho'];
    
    buttonColors.forEach(item => {
        $w(item).onClick(() => changeBackground(item.replace('#', '')));
    });

    $w('#gallery1').onCurrentItemChanged((event) => {
        const itemAtual = event.item;
        if (itemAtual) {
            $w("#txtBeneficio").text = itemAtual.title;
            $w('#txtDescription').text = itemAtual.description;
        }
    });

    $w('#repeater4').onItemReady(($item, itemData) => {
        console.log(itemData)
        $item('#image5').src = itemData.image;
        $item('#image5').alt = itemData.modelName;
        $item('#image5').tooltip = "";
        $item('#text10').text = itemData.modelName;
        $item('#text9').text = itemData.except;
        $item('#button5').target = "_blank";
        $item('#button5').link = `/modelos/${itemData.modelName}`;
    });
});

const CorService = {
    colors: {
        corCinza: "https://static.wixstatic.com/media/cebf22_873a438393dd462ea423bab7f1293181~mv2.png",
        corRosa: "https://static.wixstatic.com/media/cebf22_dcb289e34fbb4d64b6f32546f5ff43ac~mv2.png",
        corAzul: "https://static.wixstatic.com/media/cebf22_6c592a42e02145c0a8ca7b3381baddac~mv2.png",
        corAmarelo: "https://static.wixstatic.com/media/cebf22_cfaa191966a54ca9bb3ec53860df8e06~mv2.png",
        corVerde: "https://static.wixstatic.com/media/cebf22_fd8d5c50644a416f955a455552bb7a9a~mv2.png",
        corRoxo: "https://static.wixstatic.com/media/cebf22_2f7383a9126542398b2f54c700087e62~mv2.png",
        corVermelho: "https://static.wixstatic.com/media/cebf22_5394033ccbec435db64514f2b6a2a352~mv2.png",
    },
    getColors(color) {
        return this.colors[color] || null;
    }
};

function changeBackground(color) {
    const url = CorService.getColors(color);
    if (url) {
        $w('#sectionCor').background.src = url;
    } 
}

async function loadFurnitures() {
    const furnitures = await wixData.query("Models").find();
    const items = furnitures.items;

    $w('#repeater4').data = items;
}
loadFurnitures();

let tabs = document.getElementsByClassName('tabs');
let arrayTabs = Array.from(tabs);

arrayTabs.forEach((tabs) => {
    let tabColletion = tabs.getElementsByClassName('tab');
    let arrayTabCollection = Array.from(tabColletion);
    let tabContentCollection = tabs.getElementsByClassName('tab__content');
    let arrayTabContentCollection = Array.from(tabContentCollection);

    arrayTabCollection.forEach((tab) => {
        tab.onclick = function() {
            tab.className = 'tab tab_active';        
            arrayTabCollection.forEach((otherTab) => {
                if(otherTab !== tab) {
                    otherTab.className = 'tab';
                }
            });

            arrayTabContentCollection.forEach((tabContent) => {
                if(arrayTabCollection.indexOf(tab) === arrayTabContentCollection.indexOf(tabContent)) {
                    tabContent.className = 'tab__content tab__content_active';
                } else {
                    tabContent.className = 'tab__content';
                }
            });        
        };
    })
});
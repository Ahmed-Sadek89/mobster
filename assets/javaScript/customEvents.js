class customEvents{
    constructor(){

    }

    homeCollapseToggle = (homeLink, homeCollapse) => {
        homeLink.addEventListener('click', () => {
            homeCollapse.classList.toggle('menu-open')
        });
        document.addEventListener('click', (e) =>{
            if(e.target !== homeLink && e.target !== homeCollapse ){
                homeCollapse.classList.remove('menu-open')
            }
        })
    }

    itemsCollapseToggle = (showList, list) => {
        showList.addEventListener('click', () => {
            list.classList.toggle('links-open')
            console.log(list.parentNode.children)
        });
    }
}
export default customEvents

const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabDesign = document.querySelectorAll('.feature__img')
const tabTitle = document.querySelectorAll('.section__title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    } )
}
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        document.title = tabButton.innerHTML
        const dataValue = tabButton.dataset.tabsHandler
       tabButtons.forEach((btn) => {


           changeContent(tabImages, dataValue)
           changeContent(tabDescription, dataValue)
           changeContent(tabDesign, dataValue)
           changeContent(tabTitle, dataValue)


           if (btn === event.target) {
               btn.classList.add('design-list__item_active')

           } else {
               btn.classList.remove('design-list__item_active')

           }
       })
    })
})








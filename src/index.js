import { elementContent, container } from './utils'
import { tabNav } from './navigation'
import { HomeContent } from './home'

function initTab(elem) {
  //addEventListener on mouse click
  document.addEventListener('click', function (e) {
    //check is the right element clicked
    if (!e.target.matches('.tab-btn')) return
    else {
      if (!e.target.classList.contains('active')) {
        //if option true remove active class from all other t-btn and t-panel
        findActiveElementAndRemoveIt('.tab-btn')
        console.log('click1')
        // findActiveElementAndRemoveIt(elem+' .t-panel');

        //add active class on clicked tab
        e.target.classList.add('active')

        // setTimeout(function(){
        //     var panel = document.querySelectorAll(elem+' .t-panel.'+e.target.dataset.name);
        //     Array.prototype.forEach.call(panel, function (el) {
        //         //add active class on right t-panel after 200ms because of the smooth animation
        //         el.classList.add('active');
        //     });
        // }, 200);
      }
    }
  })
}

//if option true remove active class from added element
function findActiveElementAndRemoveIt(elem) {
  var elementList = document.querySelectorAll(elem)
  Array.prototype.forEach.call(elementList, function (e) {
    e.classList.remove('active')
    console.log('remove')
  })
}

//activate tabs function
initTab('.tabs')

tabNav()
const homePanel = HomeContent.tabPanel
container.appendChild(homePanel)

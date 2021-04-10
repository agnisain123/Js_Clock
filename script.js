setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minHand=document.querySelector('[data-minute-hand]')
const secHand=document.querySelector('[data-second-hand]')

function setClock()
{
    const currdate=new Date()
    const secratio=currdate.getSeconds()/60
    const minratio=(secratio+currdate.getMinutes())/60
    const hourratio=(minratio+currdate.getHours())/12
    setRotation(secHand,secratio)
    setRotation(minHand,minratio)
    setRotation(hourHand,hourratio)

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}
//the setClock() function is called to not let the clock jump from 12:00 clock time to the curr time
//Instead, we call the function again to start with the curr time everytime we load the page  
setClock()
const container = document.querySelector('.header')
const colors = ['#EBC78E','#F6F6F6','#111111']

const figures = () =>{
    for (let i = 0; i <= 50; i++) {
        let figure = document.createElement('section');
        let selec = Math.round(colors.length * Math.random())
        figure.style.top = innerHeight * Math.random()+'px'
        figure.style.left = innerWidth * Math.random()+'px'
        figure.style.background = colors[selec >= colors.length ? selec - 1 : selec] 

        container.appendChild(figure)


        setInterval(()=>{


        figure.style.top = innerHeight * Math.random()+'px'
        figure.style.left = innerWidth * Math.random()+'px'

        }, 5000)
        
    }
}
figures()



const firstHabilidad = document.querySelector('#conatiner-info-habilidad'),
      containerModal= document.querySelector('#container-modal'),
      openButton = document.querySelector('#habilidad1'),
      closeButton = document.querySelector('#boton-close');
      

      openButton.addEventListener('click', ()=>firstHabilidad.style.display  = 'flex' )



const closeModal = ()=>{
    containerModal.classList.add('close');

    setTimeout(() =>{
        containerModal.classList.remove('close')
        firstHabilidad.style.display  = 'none'
    }, 1000);
}
closeButton.addEventListener('click', ()=>closeModal());

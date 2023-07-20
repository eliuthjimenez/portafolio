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


//variables las cuales obtienen los id para ser usadas en las funciones 
const firstHabilidad = document.querySelector('#conatiner-info-habilidad'),
      towHabilidad = document.querySelector('#conatiner-info-habilidad2'),
      containerModal= document.querySelector('#container-modal'),
      containerModal2 = document.querySelector('#container-modal2'),
      openButton = document.querySelector('#habilidad1'),
      openButton2 = document.querySelector('#habilidad2'),

      closeButton = document.querySelector('#boton-close'),
      closeButton2 = document.querySelector('#boton-close2');
      

      openButton.addEventListener('click', ()=>firstHabilidad.style.display  = 'flex' )


//funcion qeu cierra el modal 
const closeModal = ()=>{
    containerModal.classList.add('close');

    setTimeout(() =>{
        containerModal.classList.remove('close')
        firstHabilidad.style.display  = 'none'
    }, 1000);
}

const closeModal2 = ()=>{
    containerModal2.classList.add('close');

    setTimeout(() =>{
        containerModal2.classList.remove('close')
        towHabilidad.style.display  = 'none'
    }, 1000);
}
//llama la funcion que cierra el modal 
closeButton.addEventListener('click', ()=>closeModal());
closeButton2.addEventListener('click', ()=>closeModal2());


openButton2.addEventListener('click', ()=>towHabilidad.style.display  = 'flex' )
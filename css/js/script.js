
//particulas en movimineto
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
      threeHabilidad = document.querySelector('#conatiner-info-habilidad3'),
      containerModal= document.querySelector('#container-modal'),
      containerModal2 = document.querySelector('#container-modal2'),
      containerModal3 = document.querySelector('#container-modal3'),
      openButton = document.querySelector('#habilidad1'),
      openButton2 = document.querySelector('#habilidad2'),
      openButton3 = document.querySelector('#habilidad3'),
      closeButton = document.querySelector('#boton-close'),
      closeButton2 = document.querySelector('#boton-close2'),
      closeButton3 = document.querySelector('#boton-close3');
      

      openButton.addEventListener('click', ()=>firstHabilidad.style.display  = 'flex' );
      openButton2.addEventListener('click', ()=>towHabilidad.style.display  = 'flex' );
      openButton3.addEventListener('click', ()=>threeHabilidad.style.display  = 'flex' );


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

const closeModal3 = ()=>{
    containerModal3.classList.add('close');

    setTimeout(() =>{
        containerModal3.classList.remove('close')
        threeHabilidad.style.display  = 'none'
    }, 1000);
}
//llama la funcion que cierra el modal 
closeButton.addEventListener('click', ()=>closeModal());
closeButton2.addEventListener('click', ()=>closeModal2());
closeButton3.addEventListener('click', ()=>closeModal3());

//funcion para enviar mensaje por Gmail botones para mostar los formularios de mensaje

const botonGmail = document.querySelector('.gmail-b');
const formGmail = document.querySelector('.form');
const botonWhatsapp = document.querySelector('.whatsapp-b');
const formWhatsapp = document.querySelector('.form-whatsapp')

botonGmail.addEventListener('click', abrirGmail);
botonWhatsapp.addEventListener('click', abrirWhatsapp);

function abrirGmail(){
    const isWhatsappClose = formWhatsapp.classList.contains('inactive');

    if (!isWhatsappClose) {
        formWhatsapp.classList.add('inactive')
    }
    formGmail.classList.toggle('inactive');
}
function abrirWhatsapp(){
    const isGmailClose = formGmail.classList.contains('inactive');

    if (!isGmailClose) {
        formGmail.classList.add('inactive')
    }
    formWhatsapp.classList.toggle('inactive');
}

//funcion de enviar el formulario de Email
const formEnEmail = document.querySelector('#form')
const  envioEmail= document.querySelector('.envio-de-email')


formEnEmail.addEventListener('submit', enviarMensajeEmail);

function enviarMensajeEmail (event){
    event.preventDefault()
    const $form = new FormData(this)
    envioEmail.setAttribute('href', `mailto:elmartinezjm751@icloud.com?subject=${$form.get('name')} ${$form.get('email')} &body=${$form.get('mensaje')}`)
    envioEmail.click()
}
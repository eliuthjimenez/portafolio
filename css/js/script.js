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
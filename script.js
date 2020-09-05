var stick = [document.getElementsByClassName('stick')[0], document.getElementsByClassName('stick')[1]]
var score = document.getElementsByTagName('p')[0]
stick[0].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
})
stick[1].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
})

setInterval(() => {
    stick[0].style.display = 'block';
    stick[1].style.display = 'block';

    if(Math.random() * (10 - 0) > 5){
        stick[0].style.top = `${Math.random() * (100 - 10) - 10}%`
        stick[1].style.display = 'none';
    }else{
        stick[1].style.top = `${Math.random() * (100 - 10) - 10}%`
        stick[0].style.display = 'none';
    }   
    
     
}, 1400);
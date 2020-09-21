var stick = [document.getElementsByClassName('stick')[0], document.getElementsByClassName('stick')[1], document.getElementsByClassName('stick')[2], document.getElementsByClassName('stick')[3]]
var score = document.getElementsByTagName('p')[0]

stick[0].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
    document.getElementsByTagName('audio')[0].play()
})
stick[1].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
    document.getElementsByTagName('audio')[0].play()
})
stick[2].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
    document.getElementsByTagName('audio')[0].play()
})
stick[3].addEventListener('click', () => {
    score.innerHTML = 1 + Number(score.innerHTML)
    document.getElementsByTagName('audio')[0].play()
})

setInterval(() => {
    stick[0].style.display = 'block';
    stick[1].style.display = 'block';
    stick[2].style.display = 'block';
    stick[3].style.display = 'block';

    if (Math.random() * (10 - 0) < 2) {
        stick[0].style.top = `${Math.random() * (100 - 10) - 10}%`
        stick[1].style.display = 'none';
        stick[2].style.display = 'none';
        stick[3].style.display = 'none';
    } else if (Math.random() * (10 - 0) > 2 && Math.random() * (10 - 0) < 4) {
        stick[1].style.top = `${Math.random() * (100 - 10) - 10}%`
        stick[0].style.display = 'none';
        stick[2].style.display = 'none';
        stick[3].style.display = 'none';
    } else if (Math.random() * (10 - 0) > 4 && Math.random() * (10 - 0) < 6) {
        stick[2].style.right = `${Math.random() * (100 - 10) - 10}%`
        stick[0].style.display = 'none';
        stick[1].style.display = 'none';
        stick[3].style.display = 'none';
    } else {
        stick[3].style.right = `${Math.random() * (100 - 10) - 10}%`
        stick[0].style.display = 'none';
        stick[1].style.display = 'none';
        stick[2].style.display = 'none';
    }
    
     
}, 2000);
document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector('.image');
    const body = document.body
    const text = document.body.querySelector('.text')

    image.addEventListener('click', () => {
        if(body.classList.contains('dark')){
            body.classList.remove('dark')
            image.setAttribute('src', 'lightmod.png')
            text.textContent = "Light Mode"
            text.style.color = 'black'
        }
        else{
            body.classList.add('dark')
            image.setAttribute('src', 'darkmod.png')
            text.textContent = 'Dark Mode'
            text.style.color = 'white'
        }
    });
});
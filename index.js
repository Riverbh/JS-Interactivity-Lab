

function addMovie (event){
    event.preventDefault()
    let inputFeild = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    document.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputFeild.value
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deletMovie)
    movie.appendChild(deleteBtn)
    let movieSection = document.querySelector('ul')
    movieSection.appendChild(movie)
}



document.querySelector('form').addEventListener('submit', addMovie)


function deletMovie (event){
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted"
}

function crossOffMovie (event){
    event.target.classList.toggle('checked')

}
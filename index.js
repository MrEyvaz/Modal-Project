const modal1 = document.querySelector('.modal1')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const modalsButton = document.querySelectorAll('.container button')

modalsButton.forEach(button => {
    button.addEventListener('click', () => {
        const newDiv = document.createElement('div')
        newDiv.className = 'modal-window'
        newDiv.innerHTML = `
      <h2>I'm a modal window</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis cupiditate doloribus, quibusdam maiores laboriosam modi? Incidunt, in neque? Harum a dolore dignissimos recusandae sed qui fugiat atque laboriosam voluptate est.</p>
      <button class="close-modal">Close</button>
    `

        document.body.appendChild(newDiv)

        const closeModalButton = newDiv.querySelector('.close-modal')
        closeModalButton.addEventListener('click', () => {
            newDiv.remove()
        })
    })
})
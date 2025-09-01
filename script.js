const box = document.getElementById('box')
const animateBtn = document.getElementById('animateBtn')
const card = document.getElementById('card')
const modal = document.getElementById('modal')
const modalBtn = document.getElementById('modalBtn')
const closeModal = document.getElementById('closeModal')

function toggleBoxAnimation(element){
    element.classList.toggle('animate')
}

function flipCard(element){
    element.classList.toggle('flipped')
}

function showModal(modalElement){
    modalElement.classList.add('show')
}

function hideModal(modalElement){
    modalElement.classList.remove('show')
}

animateBtn.addEventListener('click', function(){
    toggleBoxAnimation(box)
})

card.addEventListener('click', function(){
    flipCard(card)
})

modalBtn.addEventListener('click', function(){
    showModal(modal)
})

closeModal.addEventListener('click', function(){
    hideModal(modal)
})

window.addEventListener('click', function(e){
    if(e.target === modal){
        hideModal(modal)
    }
})

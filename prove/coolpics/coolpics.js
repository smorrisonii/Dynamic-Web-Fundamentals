const btn = document.querySelector('#menu_button');
const menu = document.querySelector('nav');

const gallery = document.querySelector('#pictures');

const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');



// Toggle mobile menu
btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
}



// Open image modal
gallery.addEventListener('click', openModal);

function openModal(event) {

    const clickedImage = event.target;

    // Prevents errors if something other than an image is clicked
    if (clickedImage.tagName !== 'IMG') {
        return;
    }

    // Get the small image source
    const smallSrc = clickedImage.src;

    // Convert small image filename to full image filename
    const largeSrc = smallSrc.replace('.jpg', '-full.jpg');

    // Put the large image into the modal
    modalImage.src = largeSrc;
    modalImage.alt = clickedImage.alt;

    // Open the modal
    modal.showModal();
}



// Close modal with X button
closeButton.addEventListener('click', closeModal);

function closeModal() {
    modal.close();
}



// Close modal when clicking outside image
modal.addEventListener('click', function(event) {

    if (event.target === modal) {
        modal.close();
    }

});
"use strict";
const main = () => {
    const HTMLFactory = (selector) => {
        return document.querySelector(selector);
    };
    const $modal = HTMLFactory('.modal');
    const $overlay = HTMLFactory('.overlay');
    const $btnCloseModal = HTMLFactory('.close-modal');
    const $btnsOpenModal = document.querySelectorAll('.show-modal');
    const handleOpenModal = () => {
        $modal.classList.remove('hidden');
        $overlay.classList.remove('hidden');
    };
    const handleCloseModal = () => {
        $modal.classList.add('hidden');
        $overlay.classList.add('hidden');
    };
    for (const btn of $btnsOpenModal)
        btn.addEventListener('click', handleOpenModal);
    $btnCloseModal.addEventListener('click', handleCloseModal);
    $overlay.addEventListener('click', handleCloseModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !$modal.classList.contains('hidden'))
            handleCloseModal();
    });
};
main();

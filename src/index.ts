const main = (): void => {
  const HTMLFactory = <T>(selector: string): T => {
    return document.querySelector(selector)! as T;
  };

  const $modal: HTMLDivElement = HTMLFactory<HTMLDivElement>('.modal');
  const $overlay: HTMLDivElement = HTMLFactory<HTMLDivElement>('.overlay');
  const $btnCloseModal: HTMLButtonElement = HTMLFactory<HTMLButtonElement>('.close-modal');
  const $btnsOpenModal: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.show-modal')! as NodeListOf<HTMLButtonElement>;

  const handleOpenModal = (): void => {
    $modal.classList.remove('hidden');
    $overlay.classList.remove('hidden');
  };
  const handleCloseModal = (): void => {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  };

  for (const btn of $btnsOpenModal) btn.addEventListener('click', handleOpenModal);

  $btnCloseModal.addEventListener('click', handleCloseModal);
  $overlay.addEventListener('click', handleCloseModal);

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !$modal.classList.contains('hidden')) handleCloseModal();
  });
};

main();

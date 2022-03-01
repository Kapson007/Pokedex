export const closeLoader = (): void => {
    const loader =  document.querySelector('.app__loader') as HTMLDivElement;
    loader?.parentElement?.removeChild(loader);
    console.log('deleted');
}
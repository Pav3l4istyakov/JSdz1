console.log("Сайт загружен!");
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Вы нажали на ссылку: ${link.href}`);
    });
});
document.querySelector('.header').style.backgroundColor = 'lightblue';
const footerDateElement = document.querySelector('.site-footer p:nth-child(2)');
const currentDate = new Date().toLocaleDateString();
footerDateElement.textContent += ` ${currentDate}`;
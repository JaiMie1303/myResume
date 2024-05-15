// About

const aboutBtns = document.querySelectorAll(".about__nav button");
const aboutItems = document.querySelectorAll(".about__item");

function hideTabs() {
    aboutItems.forEach(item => item.classList.add("hide"));
    aboutBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index) {
    aboutItems[index].classList.remove("hide")
    aboutBtns[index].classList.add("active")
}

hideTabs();
showTab(0);

aboutBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

//Anchors 

const anchors = document.querySelectorAll(".header__nav a");
const anchorsLink = document.querySelectorAll(".hello__links a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});

anchorsLink.forEach(ancL => {
    ancL.addEventListener("click", function(event) {
        event.preventDefault();

        const id = ancL.getAttribute("href");

        const elem2 = document.querySelector(id);

        window.scroll({
            top: elem2.offsetTop,
            behavior: 'smooth'
        });
    });
});



let lisList = document.querySelectorAll('ul.shuffel li');
let bars_button = document.querySelector('i.fas.fa-search');
let listBullets = document.querySelectorAll(".testimonials ul.bullets li");
let listPoints = document.querySelectorAll(".landing ul.points li");
let listContent = document.querySelectorAll(".testimonials .content");
let nameUser = ["Mouna","khalid Said","Hamada, El","John Doe, CEO","Aicha, Many","Stiva, Ber"];
let listSorc = ["../images/pic04.jpg",'../images/pic06.jpg','../images/pic08.jpg','../images/pic03.jpg'];
let skillProg = document.querySelectorAll("div.skills .container .skill div.prog span");
let linksNav = document.querySelectorAll("nav ul#listNav li a");

bars_button.addEventListener('click', function() {
    let input = document.querySelector('input[name="cherche"]');
    input.classList.toggle('hidden');  
    if(!input.classList.contains('hidden')) {
        input.parentElement.style.borderLeft = '2px solid #fff';
        input.parentElement.style.marginLeft = '12px';
        bars_button.classList.remove("left");
    } else {
        input.parentElement.style.border = 'none';
        input.parentElement.style.marginLeft = '160px';
        bars_button.classList.add("left");
    }
});
document.querySelector('i.toggle-menu').addEventListener('click', function() {
    document.querySelector('ul#listNav').classList.toggle('show');
});
document.querySelector('footer .container input[type="button"]').addEventListener('click', () => {
    window.scrollTo({ top:0 , behavior:"smooth" });
});
function changeCommentsUser(list) {
    let ImageSource = ["images/avat.png","images/avat1.png","images/avataa2.png","images/avat3.png","images/avat4.png","images/avat5.png"], j = 0;
    return () => {
    if(j == ImageSource.length - 2) { 
        j = 0;
    } else {
        j++;
    }
    if(list.length > 0) {
        list[0].firstElementChild.src = ImageSource[j];
        list[0].lastElementChild.lastElementChild.innerHTML = `${nameUser[j]}`;
        list[1].firstElementChild.src = ImageSource[j+1];
        list[1].lastElementChild.lastElementChild.innerHTML = `${nameUser[j+1]}`;
    }
    }
}
function changebackgroundImg(list) {
    let landing = document.querySelector("div.landing"), i = 0;
    return () => {
    landing.style.backgroundImage = `url(${list[i]})`;
    i++;
    if(i == list.length) {
        i = 0;
    } 
    }
}
let fncBackgr = changebackgroundImg(listSorc);
window.setInterval(() => {
    fncBackgr();
}, 10000);
function skillsScroll(boxContent) {
    if(Math.trunc(window.scrollY) > boxContent.offsetTop - 240 && Math.trunc(window.scrollY) < boxContent.offsetTop - 220) {
        let incrIntr = setInterval(() => {
            if(parseInt(skillProg[0].dataset.volum) < 90) {
                skillProg[0].dataset.volum = `${parseInt(skillProg[0].dataset.volum) + 1}%`;
                skillProg[0].style.width = skillProg[0].dataset.volum;
            }
            if(parseInt(skillProg[1].dataset.volum) < 80) {
                skillProg[1].dataset.volum = `${parseInt(skillProg[1].dataset.volum) + 1}%`;
                skillProg[1].style.width = skillProg[1].dataset.volum;
            }
            if(parseInt(skillProg[2].dataset.volum) < 85) {
                skillProg[2].dataset.volum = `${parseInt(skillProg[2].dataset.volum) + 1}%`;
                skillProg[2].style.width = skillProg[2].dataset.volum;
            }
            if(parseInt(skillProg[3].dataset.volum) < 87) {
                skillProg[3].dataset.volum = `${parseInt(skillProg[3].dataset.volum) + 1}%`;
                skillProg[3].style.width = skillProg[3].dataset.volum;
            } else {
                clearInterval(incrIntr);
            }
        },5);
    }
}
window.onscroll = function() {
    let skills = document.querySelector("div.skills");
    skillsScroll(skills);
}
function changeActiveShuffel(listShuffel, listUser = [], imgList = []) {
    let changeUser = changeCommentsUser(listUser);
    listShuffel.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        if(ele.classList.contains('active')) {
            e.preventDefault();
        } else {
            listShuffel.forEach((ele) => { ele.classList.remove('active'); })
            ele.classList.add('active');
            listUser.length > 0 ? changeUser() : imgList.length > 0 ? fncBackgr() : imgList.length;
        }
    });
});
}
changeActiveShuffel(listBullets, listContent);
changeActiveShuffel(listPoints, [], listSorc);
changeActiveShuffel(lisList);
changeActiveShuffel(linksNav);

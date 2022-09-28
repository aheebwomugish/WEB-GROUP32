const menuItems = document.querySelectorAll('.menu-list');
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message =messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//theme
const theme = document.querySelector('#theme');
const themeModal= document.querySelector('.customerize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')
const colorPalette= document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const changeActiveItem =() => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notifications-popup').
            style.display ='none';
        }else {
            document.querySelector('.notifications-popup').
            style.display ='block';
            document.querySelector('#notifications .notification-count').style.display='none';

        }
    })
})

//academic background
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='background'){
            document.querySelector('.academic').
            style.display ='none';
        }else {
            document.querySelector('.academic').
            style.display ='block';
        }
    })
})
//hobbies
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='enjoy'){
            document.querySelector('.hobby').
            style.display ='none';
        }else {
            document.querySelector('.hobby').
            style.display ='block';
        }
    })
})
//messages 
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display='none';
        }
    }) 
}
//search message
messageSearch.addEventListener('keyup',searchMessage);
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display='none'
  setTimeout(() => {
    messages.style.boxShadow ='none';
  },1000);
}) 

//theme customerisation
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customerize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
     size.classList.remove('active');   
    })
}
  
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    size.addEventListener('click', () => {
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }else  if(size.classList.contains('font-size-2')){
        fontSize = '15px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-6rem');
    }else  if(size.classList.contains('font-size-3')){
        fontSize = '20px';
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }else  if(size.classList.contains('font-size-4')){
        fontSize = '25px';
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem');
    }else  if(size.classList.contains('font-size-5')){
        fontSize = '30px';
        root.style.setProperty('--sticky-top-left','-10rem');
        root.style.setProperty('--sticky-top-right','-33rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
})
})
})
//color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
    let primary;
    if(color.classList.contains('color-1')){
        primaryHue = 252;
    } else if(color.classList.contains('color-2')){
        primaryHue = 60;
    } else if(color.classList.contains('color-3')){
        primaryHue = 300;
    } else if(color.classList.contains('color-4')){
        primaryHue = 150;
    } 
    else if(color.classList.contains('color-5')){
        primaryHue = 20;
    } 
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue);
})
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
Bg1.addEventListener('click' , () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})
 
Bg2.addEventListener('click' , () => {
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    BG3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click' , () => {
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    BG3.classList.remove('active');
    changeBG();
})
function imageHandler() {
    image = document.getElementById("profile")
    reader = new FileReader()
    reader.onload = () => {
        if(reader.readyState === 2) {
            image.src = reader.result;
        }
    }
    reader.readAsDataURL(event.target.files[0])
}
//hobbyform
function hobbyHandler(event) {
    var hobby = document.getElementById("text").value;
    if(hobby==""){
        alert("Hobbies are inputed");
        if(event.preventDefault){
            event.preventDefault() 
        };
        if(window.event){
            window.event.returnValue = false;
        }
    }
    var sub = document.getElementById("myForm");
    if(sub.addEventListener) {
        sub.addEventListener("submit",hobbyHandler,false);
    }
    else {
        sub.attachEvent('onsubmit',hobbyHandler);
    }
}
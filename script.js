const element = document.getElementsByTagName("li");
element[23].style.visibility="hidden";
document.getElementsByClassName('related-post-heading box-title')[0].firstElementChild.innerHTML = 'Publicaciones Relacionadas';
document.querySelector('.nav-subtitle').innerHTML = 'Anterior';
const a=document.getElementsByClassName('nav-subtitle');
a[1].innerHTML='Siguiente';
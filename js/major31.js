let my = document.getElementById('button');
my.style.backgroundColor = 'transparent';
my.style.border = '1px solid black';
my.style.color = '#DD3142';
let my1 = document.getElementsByTagName('input');
my1[0].value = '';
my1[1].value = 'example';
my1[2].placeholder = 'email@mail.com'
document.getElementsByTagName('label')[4].remove();
my1[4].checked = true;
let my2 = document.getElementsByTagName('input');
for (let i = 0; i < my.length; i++) {
    my2[i].style.borderColor = 'black'
}

var menuitem = document.querySelectorAll('.itemmenu')

function selectlink(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

var exp = document.querySelector('#exp')
var meniside = document.querySelector('.menulateral')

exp.addEventListener('click', function(){
    meniside.classList.toggle('expandir')
})

document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('modal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

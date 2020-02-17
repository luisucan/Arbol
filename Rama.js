Rama.data = {
    texto: '',
    menu: []
}

function Rama(data = Rama.data) {
    let _this = this;
    let ramas = [];
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let contextMenu = new MenuContextual(titulo, data, this);

    //CONSTRUCTOR
    (function() {

        titulo.innerHTML = data.texto;
        li.appendChild(titulo);
        li.appendChild(contextMenu.getElementoMenu());
        ul.appendChild(li);

        acciones();
    })();

    function acciones() {
        titulo.onclick = function(ev) {
            console.log(ev.which);
        }
    }

    this.getRama = function() {
        return ul;
    }
    this.getTitulo = function() {
        return titulo;
    }

    function addBranch(rama = new Rama()) {
        ul.appendChild(rama.getRama());
        ramas.push(rama);
    }

    this.agregarRama = function(rama = new Rama()) {
        addBranch(rama);
        return _this;
    }

    this.getRaiz = function() {
        return _this;
    }
}
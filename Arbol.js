function Arbol(IdContenedor, data = Rama.data) {
    let div = document.getElementById(IdContenedor);
    let ul = document.createElement('ul');
    let rama = new Rama(data);

    //CONSTRUCTOR
    (() => {
        div.appendChild(ul);
        addBranch(rama);
    })();

    function addBranch(rama = new Rama()) {
        ul.appendChild(rama.getRama());
    }

    this.agregarRama = function(rama = new Rama()) {
        addBranch(rama);
    }

    this.getRaiz = function() {
        return rama;
    }
}
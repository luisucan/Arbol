function MenuContextual(titulo, data, _this) {

    let contextMenu = document.createElement('div');
    let bolContextMenu = false;

    //CONSTRUCTOR
    (function() {
        contextMenu.className = 'contextMenu';
        cerrarMenu();
        acciones();
    })();

    function acciones() {
        titulo.oncontextmenu = function(e) {
            if (!bolContextMenu) {
                abrirMenu();
            } else {
                cerrarMenu();
            }
            e.preventDefault();
        }


        fillMenu(data.menu);
    }

    function abrirMenu() {
        contextMenu.style.display = '';
        bolContextMenu = true;
    }

    function cerrarMenu() {
        contextMenu.style.display = 'none';
        bolContextMenu = false;
    }

    function fillMenu(menu) {
        menu.forEach(element => {
            let div = document.createElement('div');
            div.className = 'itemMenu';
            div.innerHTML = element.texto;
            div.onclick = function() {
                element.fn(_this);
            }
            contextMenu.appendChild(div);
        });
    }

    this.getElementoMenu = function() {
        return contextMenu;
    }
}
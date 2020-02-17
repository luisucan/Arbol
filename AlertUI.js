AlertUI.data = {
    ancho: 200,
    alto: 150,
    titulo: '',
    html: ''
}

function AlertUI(data = AlertUI.data) {

    let body;
    let div = document.createElement('div');
    let divTitulo = document.createElement('div');
    let divCuerpo = document.createElement('div');
    let spanCerrar = document.createElement('span');
    let spanTitulo = document.createElement('span');
    let tabla = document.createElement('table');

    //FUNCINES
    let onAfterBuild = function() {};
    let onBeforeBulild = function() {};

    ///CONSTRUCTOR
    (function() {



    })();

    function build() {
        body = document.body;

        div.className = 'AlertUI';
        div.style.width = data.ancho + "px";
        div.style.height = data.alto + "px";

        div.style.top = ((body.clientHeight / 2) + (data.alto / 2)) + "px"; //VERTICAL
        div.style.left = ((body.clientWidth / 2) - (data.ancho / 2)) + "px"; //HORIZONTAL

        ///TITULO
        divTitulo.className = 'AlertUITitulo';
        div.appendChild(divTitulo);

        //TABLA TITULO
        tabla.style.width = '100%';
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.style.width = '90%';
        td.appendChild(spanTitulo);
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(spanCerrar);
        tr.appendChild(td);

        tabla.appendChild(tr);
        divTitulo.appendChild(tabla);

        ///TEXTOS TITULOS
        spanTitulo.innerHTML = data.titulo || "";

        spanCerrar.className = 'AlertUICerrar';
        spanCerrar.innerHTML = 'X';
        spanCerrar.onclick = function() {
            close();
        }

        //CUERPO
        divCuerpo.className = 'AlertUICuerpo';
        divCuerpo.innerHTML = data.html || "";
        div.appendChild(divCuerpo);
    }

    function close() {
        body.removeChild(div);
    }

    this.cerrar = function() {
        close();
    }

    this.onDespuesConstruir = function(fn) {
        onAfterBuild = fn;
    }

    this.onAntesConstruir = function(fn) {
        onBeforeBulild = fn;
    }

    this.show = function() {
        onAfterBuild();
        build();
        body.appendChild(div);
        onBeforeBulild();
    }
}
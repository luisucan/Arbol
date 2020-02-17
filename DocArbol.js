var menu = [{
        texto: 'Nueva rama',
        fn: function(instancia) {
            console.log('click add', instancia);
        }
    },
    {
        texto: 'Editar rama',
        fn: function() {
            console.log('click edit');
        }
    },
    {
        texto: 'Eliminar rama',
        fn: function() {
            console.log('click delete');
        }
    }
];


var arbol = new Arbol('arbol', {
    texto: 'Encuesta 1',
    data: [],
    menu
});

let h1 = arbol.getRaiz().agregarRama(new Rama({
    texto: 'Hijo 1',
    data: [],
    menu
}));

h1.getRaiz().agregarRama(new Rama({
    texto: 'Nieto 1',
    data: [],
    menu
}));




document.getElementById('btnVentana').onclick = function() {
    let alert = new AlertUI({
        ancho: 200,
        alto: 150,
        titulo: 'Agregar',
        html: `
            <center>
                <input type="text" />
                <br>
                <button class="btnUI Verde">Agregar</button>
            </center>
        `
    });
    alert.show();
}
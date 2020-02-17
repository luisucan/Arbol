var arbol = new Arbol('arbol','Encuesta 1');

/*arbol.agregarRama(new Rama({
    texto:'rama_principal',
    data:[]
}));*/

let i = 0;
document.getElementById('btnadd').onclick = function(){
    let rama = new Rama({
        texto:'rama'+(i++),
        data:[]
    });
    arbol.agregarRama(rama);
}
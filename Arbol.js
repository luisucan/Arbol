
function Rama(data = Rama.data){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let contextMenu = document.createElement('div');
    let bolContextMenu = false;

     //CONSTRUCTOR
    (function(){
        
        titulo.innerHTML = data.texto;
        li.appendChild(titulo);
        li.appendChild(contextMenu);
        ul.appendChild(li);

        contextMenu.className = 'contextMenu';
        contextMenu.style.display = 'none';
        contextMenu.innerHTML = 'a';
        acciones();
    })();

    function acciones(){
        titulo.onclick = function(ev){
            console.log(ev.which);
        }
        titulo.oncontextmenu = function(e){
            if(!bolContextMenu){
                contextMenu.style.display = '';
                bolContextMenu = true;
            }else{
                contextMenu.style.display = 'none';
                bolContextMenu = false;
            }
            e.preventDefault();
        }
    }

    this.getRama = function (){
        return ul;
    }
}


function Arbol(IdContenedor,texto){
    let div = document.getElementById(IdContenedor);
    let ul = document.createElement('ul');
    let rama = new Rama({
        texto,
        data:[]
    });

    //CONSTRUCTOR
    (()=>{
        div.appendChild(ul);
        addBranch(rama);
    })();

    function addBranch(rama = new Rama()){
        ul.appendChild(rama.getRama());
    }


























































    this.agregarRama = function(rama = new Rama()){
        addBranch(rama);
    }
}
Rama.data = {
    texto:'',
    menu:[]
}



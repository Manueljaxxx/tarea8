class Interfaz{
     constructor(){
          //inicializa la app al instanciar
          this.init();

          this.eventos = document.getElementById('resultado-eventos');

     }
     //metodo para cuando inicialice la app
     
     init(){

          //llamamos a imprimir categorias

          this.imprimirCategorias();

     }

     imprimirCategorias(){

          const ListaCategorias =  eventbrite.obtenerCategorias()

           .then( categorias =>{

               const cats = categorias.categorias.categories;
               //llenar categorias
               const SelCatego = document.getElementById('listado-categorias');

               //recorre categorias y las agrega al html
               cats.forEach(cat =>{

                 const opcion = document.createElement('option');
                 opcion.value = cat.id;
                 opcion.appendChild(document.createTextNode(cat.name_localized));
                 SelCatego.appendChild(opcion);

               })
          })

     }

}
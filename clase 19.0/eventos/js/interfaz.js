class Interfaz{
     constructor(){
          //inicializa la ap al instanciar
          this.init();

          this.eventos = document.getElementById('resultado-eventos');
     }
     //metodo para cuando inicialice la app
     init(){

     }

     imprimirCategorias(){
          const ListaCategorias = eventbrite.obtenerCategorias();
     }
}
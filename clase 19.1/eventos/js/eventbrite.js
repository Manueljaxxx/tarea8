class EventBrite{

     constructor(){

          this.token_auth = 'CROLFN7GD36364AY4Y3E';

          this.ordenar = 'date';
     }

     async obtenerCategorias(){

          const RespuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

          const categorias = await RespuestaCategorias.json();

          return{

               categorias

          }
     }
}
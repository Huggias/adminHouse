var menu = [
      { 
        title : 'Home',
        url : '/home',
        icon : 'home',
        descripcion : '',
        active : false
      },
      {
        title: 'Compras',
        url: '/compras/gcompras',
        icon: 'basket',
        descripcion : 'Guardar las compras de todos para poder hacer un reparto equitativo de los gastos',
        active : false
      }
      ,{
        title: 'Tareas de limpieza',
        url: '/tareas/gtareas',
        icon: 'brush',
        descripcion : 'Tener todas las tareas de limpieza para poder repartirlas aleatoria y equitativamente entre todos',
        active : false
      }
      ,{
         title: 'Cuenta',
         url: '/movimientos/gmovimientos',
         icon: 'logo-usd',
         descripcion : 'Cargar ingresos y egrosos de la cuenta para llevar el monto restante al dia siempre',
         active : false
      }
      ,{
        title: 'Lista de compras',
        url: '/lista-compras/glista-compras',
        icon: 'list',
        descripcion : 'Una lista de compras para el super, asi se puede cargar lo que falta nada mas se termina',
        active : false
      }
      ,{
        title: 'Comidas',
        url: '/comidas',
        icon: 'pizza',
        descripcion : 'Cargar distintos menus para poder asignarlos a un dia y horario distinto',
        active : false
      }
]

export default menu;
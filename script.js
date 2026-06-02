// script.js completo con mejoras profesionales
// Incluye: categorías, carrito con X, cantidad placeholder y animaciones

const productos = [
  // Lista completa de productos con todas las categorías
  // ==========================
  // SALCHICHAS
  // ==========================
  { categoria:'SALCHICHAS', nombre:'SALCHICHA AHUMADA', foto:'imagenes/sal-001.webp', peso:'1-3.5 Kg | 18 Unid. por kilo | 12 cm', codigo:'SAL-001', precio:42 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA SIN PIEL AL VACIO', foto:'imagenes/sal-002.webp', peso:'1 Kg', codigo:'SAL-002', precio:45 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA SIN PIEL AL VACIO', foto:'imagenes/sal-003.webp', peso:'10 Unidades | 11 cm', codigo:'SAL-003', precio:18 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA SALCHICHON', foto:'imagenes/sal-004.webp', peso:'1-3.5 Kg | 8 a 9 Unid. por kilo | 5 cm de grosor', codigo:'SAL-004', precio:39 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA SUPER ESPECIAL', foto:'imagenes/sal-005.webp', peso:'1-3.5 Kg | 18 Unid. por kilo | 17 cm', codigo:'SAL-005', precio:42 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA ESPECIAL CON PIEL PICADO', foto:'imagenes/sal-006.webp', peso:'3-5 Kg', codigo:'SAL-006', precio:40 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA COCTELERO SIN PIEL', foto:'imagenes/sal-007.webp', peso:'1/2 Kg | 40 Unid. | 3 cm', codigo:'SAL-007', precio:30 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA EXTRA LARGA', foto:'imagenes/sal-008.webp', peso:'13 Unid. | 20 cm', codigo:'SAL-008', precio:45 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA ESPECIAL DE RES TIPO VIENA', foto:'imagenes/sal-009.webp', peso:'1-3.5 Kg | 18 Unid. por kilo | 17 cm', codigo:'SAL-009', precio:39 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA VIENA DE POLLO', foto:'imagenes/sal-010.webp', peso:'1-3.5 Kg | 18 Unid. por kilo | 17 cm', codigo:'SAL-010', precio:39 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA EXTRA LARGO', foto:'imagenes/sal-011.webp', peso:'17 Unid. por kilo | 21 cm', codigo:'SAL-011', precio:45 },
  { categoria:'SALCHICHAS', nombre:'SALCHICHA POPULAR', foto:'imagenes/sal-012.webp', peso:'3-5 Kg', codigo:'SAL-012', precio:33 },

  // ==========================
  // CHORIZOS
  // ==========================
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE CERDO', foto:'imagenes/ch-001.webp', peso:'1/2 Kg | 9-10 Unidades | 9 cm', codigo:'CH-001', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE RES AHUMADO', foto:'imagenes/ch-002.webp', peso:'1/2 Kg | 9-10 Unidades | 9 cm', codigo:'CH-002', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE POLLO', foto:'imagenes/ch-003.webp', peso:'1/2 Kg | 9-10 Unidades | 9 cm', codigo:'CH-003', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE RES PICANTE', foto:'imagenes/ch-004.webp', peso:'1/2 Kg | 9-10 Unidades | 9 cm', codigo:'CH-004', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO COCTELERO DE CERDO', foto:'imagenes/ch-005.webp', peso:'1/2 Kg | 40 Unidades | 3 cm', codigo:'CH-005', precio:30 },
  { categoria:'CHORIZOS', nombre:'CHORIZO COCTELERO DE RES', foto:'imagenes/ch-006.webp', peso:'1/2 Kg | 40 Unidades | 3 cm', codigo:'CH-006', precio:30 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE CERDO DELGADO', foto:'imagenes/ch-007.webp', peso:'1/2 Kg | 11-12 Unid. por kilo | 21 cm', codigo:'CH-007', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE RES DELGADO', foto:'imagenes/ch-008.webp', peso:'1/2 Kg | 11-12 Unid. por kilo | 21 cm', codigo:'CH-008', precio:29 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE CERDO AGRANEL', foto:'imagenes/ch-009.webp', peso:'1-3.5 Kg | 14 Unid. por kilo | 12 cm', codigo:'CH-009', precio:48 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE RES AGRANEL', foto:'imagenes/ch-010.webp', peso:'1-3.5 Kg | 10-11 Unid. por kilo | 12 cm', codigo:'CH-010', precio:48 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE RES PICANTE AGRANEL', foto:'imagenes/ch-011.webp', peso:'1-3.5 Kg | 10-11 Unid. por kilo | 12 cm', codigo:'CH-011', precio:48 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE POLLO AGRANEL', foto:'imagenes/ch-012.webp', peso:'1-3.5 Kg | 10-11 Unid. por kilo | 12 cm', codigo:'CH-012', precio:48 },
  { categoria:'CHORIZOS', nombre:'CHORIZO PRECOCIDO DE POLLO PICANTE AGRANEL', foto:'imagenes/ch-013.webp', peso:'1-3.5 Kg | 14 Unid. por kilo | 12 cm', codigo:'CH-013', precio:48 },
  { categoria:'CHORIZOS', nombre:'CHORIZO FRESCO CRIOLLO PARRILLERO', foto:'imagenes/ch-014.webp', peso:'3-5 Kg | 14 Unidades | 12 cm', codigo:'CH-014', precio:43 },
  { categoria:'CHORIZOS', nombre:'CHORIZO CHUQUISAQUEÑO', foto:'imagenes/ch-015.webp', peso:'1/2 Kg | 11-12 Unidades | 21 cm', codigo:'CH-015', precio:35 },
  { categoria:'CHORIZOS', nombre:'CHORIZO FRESCO DE CERDO PARRILLERO DELGADO', foto:'imagenes/ch-016.webp', peso:'3-5 Kg | 10-11 Unidades | 12 cm', codigo:'CH-016', precio:43 },
  { categoria:'CHORIZOS', nombre:'CHORIZO TIPO ARGENTINO', foto:'imagenes/ch-017.webp', peso:'1-3.5 Kg | 10-11 Unid.', codigo:'CH-017', precio:43 },
  { categoria:'CHORIZOS', nombre:'CHORIZO FRESCO CRIOLLO PARRILLERO DE CERDO', foto:'imagenes/ch-018.webp', peso:'3-5 Kg | 14 Unidades | 12 cm', codigo:'CH-018', precio:43 },

  // ==========================
  // MORTADELAS Y JAMONES
  // ==========================
  { categoria:'MORTADELAS Y JAMONES', nombre:'JAMON SANDWICHERO EN BARRA', foto:'imagenes/mtbr-001.webp', peso:'4 Kg≈', codigo:'MTBR-001', precio:52 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'JAMONADA EN BARRA', foto:'imagenes/mtbr-002.webp', peso:'4 Kg≈', codigo:'MTBR-002', precio:43 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA QUESO DE CHANCHO EN BARRA', foto:'imagenes/mtbr-003.webp', peso:'4 Kg≈', codigo:'MTBR-003', precio:43 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA CERVECERO EN BARRA', foto:'imagenes/mtbr-004.webp', peso:'3.5 Kg≈', codigo:'MTBR-004', precio:42 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA DE POLLO EN BARRA', foto:'imagenes/mtbr-005.webp', peso:'3.5 Kg≈', codigo:'MTBR-005', precio:42 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA LIONEZA EN BARRA', foto:'imagenes/mtbr-006.webp', peso:'3.5 Kg≈', codigo:'MTBR-006', precio:42 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA PASTEL DE CABEZA EN BARRA', foto:'imagenes/mtbr-007.webp', peso:'3.5 Kg≈', codigo:'MTBR-007', precio:42 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA PICANTE EN BARRA', foto:'imagenes/mtbr-008.webp', peso:'3.5 Kg≈', codigo:'MTBR-008', precio:42 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA PRIMAVERA EN BARRA', foto:'imagenes/mtbr-009.webp', peso:'4 Kg≈', codigo:'MTBR-009', precio:43 },
  { categoria:'MORTADELAS Y JAMONES', nombre:'MORTADELA CAZADOR EN BARRA', foto:'imagenes/mtbr-010.webp', peso:'3.5 Kg≈', codigo:'MTBR-010', precio:42 },

  // ==========================
  // MORTADELAS Y JAMONES SELLADOS
  // ==========================
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'JAMON SANDWICHERO', foto:'imagenes/mrt-001.webp', peso:'200 gr | 10 unidades', codigo:'MRT-001', precio:18 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA JAMONADA', foto:'imagenes/mrt-002.webp', peso:'200 gr | 10 unidades', codigo:'MRT-002', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA QUESO DE CHANCHO', foto:'imagenes/mrt-003.webp', peso:'200 gr | 10 unidades', codigo:'MRT-003', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA CAZADOR', foto:'imagenes/mrt-004.webp', peso:'200 gr | 10 unidades', codigo:'MRT-004', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA CERVECERO', foto:'imagenes/mrt-005.webp', peso:'200 gr | 10 unidades', codigo:'MRT-005', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA DE POLLO', foto:'imagenes/mrt-006.webp', peso:'200 gr | 10 unidades', codigo:'MRT-006', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA LIONEZA', foto:'imagenes/mrt-007.webp', peso:'200 gr | 10 unidades', codigo:'MRT-007', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA PASTEL DE CABEZA', foto:'imagenes/mrt-008.webp', peso:'200 gr | 10 unidades', codigo:'MRT-008', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA PICANTE', foto:'imagenes/mrt-009.webp', peso:'200 gr | 10 unidades', codigo:'MRT-009', precio:15 },
  { categoria:'MORTADELAS Y JAMONES SELLADOS', nombre:'MORTADELA PRIMAVERA', foto:'imagenes/mrt-010.webp', peso:'200 gr | 10 unidades', codigo:'MRT-010', precio:15 },

  // ==========================
  // SALAME Y PEPPERONI
  // ==========================
  { categoria:'SALAME Y PEPPERONI', nombre:'SALAME FILETEADO', foto:'imagenes/sm-001.webp', peso:'100 gr | 24 unidades', codigo:'SM-001', precio:15 },
  { categoria:'SALAME Y PEPPERONI', nombre:'SALAME FILETEADO', foto:'imagenes/sm-002.webp', peso:'1 Kg | 250 unidades', codigo:'SM-002', precio:49 },
  { categoria:'SALAME Y PEPPERONI', nombre:'SALAME EN BARRA', foto:'imagenes/sm-003.webp', peso:'1 Kg', codigo:'SM-003', precio:49 },
  { categoria:'SALAME Y PEPPERONI', nombre:'PEPPERONI FILETEADO', foto:'imagenes/sm-004.webp', peso:'100 gr | 24 unidades', codigo:'SM-004', precio:15 },
  { categoria:'SALAME Y PEPPERONI', nombre:'PEPPERONI FILETEADO', foto:'imagenes/sm-005.webp', peso:'1 Kg | 250 unidades', codigo:'SM-005', precio:49 },
  { categoria:'SALAME Y PEPPERONI', nombre:'PEPPERONI EN BARRA', foto:'imagenes/sm-006.webp', peso:'1 Kg', codigo:'SM-006', precio:49 },

  // ==========================
  // TOCÍNO Y PASTA DE HÍGADO
  // ==========================
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'PASTA DE HÍGADO', foto:'imagenes/pst-001.webp', peso:'100 gr', codigo:'PST-001', precio:6 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'PASTA DE HÍGADO', foto:'imagenes/pst-002.webp', peso:'200 gr', codigo:'PST-002', precio:11 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO CON COLOR', foto:'imagenes/tc-001.webp', peso:'100 gr | 5 unidades', codigo:'TC-001', precio:17 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO CON COLOR', foto:'imagenes/tc-002.webp', peso:'1 Kg | 50 unidades', codigo:'TC-002', precio:100 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO EN BARRA', foto:'imagenes/tc-003.webp', peso:'1 Kg≈', codigo:'TC-003', precio:100, precioPorKilo:true },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO NATURAL', foto:'imagenes/tc-004.webp', peso:'100 gr | 5 unidades', codigo:'TC-004', precio:17 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO NATURAL', foto:'imagenes/tc-005.webp', peso:'1 Kg | 50 unidades', codigo:'TC-005', precio:100 },
  { categoria:'TOCÍNO Y PASTA DE HÍGADO', nombre:'TOCINO AHUMADO NATURAL', foto:'imagenes/tc-006.webp', peso:'1 Kg≈', codigo:'TC-006', precio:100, precioPorKilo:true },
];

const inicio = document.getElementById('inicio');
const btnComenzar = document.getElementById('btn-comenzar');
const catalogo = document.getElementById('catalogo');
const botonesCategoriasDiv = document.getElementById('botones-categorias');
const categoriasDiv = document.getElementById('categorias');

btnComenzar.addEventListener('click', () => {
  inicio.classList.add('oculta');
  catalogo.classList.remove('oculta');
  mostrarCategoriasBotones();
});

function mostrarCategoriasBotones() {
  botonesCategoriasDiv.innerHTML = '';
  const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];
  categoriasUnicas.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      mostrarProductosPorCategoria(cat);
      document.querySelectorAll('.botones-categorias button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    botonesCategoriasDiv.appendChild(btn);
  });
}

function mostrarProductosPorCategoria(catSeleccionada) {
  categoriasDiv.innerHTML = '';
  const productosFiltrados = productos.filter(p => p.categoria === catSeleccionada);
  const contenedor = document.createElement('div');
  contenedor.className = 'contenedor-productos';
  productosFiltrados.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <img src="${prod.foto}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.peso}</p>
      
      <p class="precio">
  ${prod.precioPorKilo ? 'Precio por kilo: Bs ' : 'Precio: Bs '}
  ${prod.precio}
</p>
      <input type="number" min="1" placeholder="CANTIDAD" id="cantidad-${prod.codigo}">
      <button onclick="agregarAlCarrito('${prod.codigo}')">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
  categoriasDiv.appendChild(contenedor);

  
}

// CARRITO
let carrito = [];
const itemsCarrito = document.getElementById('items-carrito');
const totalCarrito = document.getElementById('total-carrito');
const limpiarCarrito = document.getElementById('limpiar-carrito');
const enviarPedido = document.getElementById('enviar-pedido');
const btnCarrito = document.getElementById('btn-carrito');
const listaCarrito = document.getElementById('lista-carrito');

btnCarrito.addEventListener('click', () => { listaCarrito.classList.toggle('oculta'); });

function agregarAlCarrito(codigo) {
  const producto = productos.find(p => p.codigo === codigo);
  const cantidadInput = document.getElementById(`cantidad-${codigo}`);
  
  // Obtener el valor que escribió el usuario, si está vacío usar 1
  let cantidad = parseInt(cantidadInput.value);
  if(isNaN(cantidad) || cantidad < 1) cantidad = 1;

  // Verificar si el producto ya está en el carrito
  const existe = carrito.find(p => p.codigo === codigo);
  if(existe){ 
    existe.cantidad += cantidad; 
  } else { 
    carrito.push({...producto, cantidad}); 
  }

  // Actualizar el carrito en pantalla
  actualizarCarrito();

  // Resetear el input a placeholder "CANTIDAD" después de agregar
  cantidadInput.value = '';
};

function actualizarCarrito() {
  itemsCarrito.innerHTML = '';
  let total = 0;
  carrito.forEach((item,index)=>{
    const li = document.createElement('li');
    li.innerHTML = `<span>• ${item.nombre} x${item.cantidad} Bs ${item.precio*item.cantidad}</span>
<button class="eliminar-item" onclick="eliminarProducto(${index})">X</button>`;
    itemsCarrito.appendChild(li);
    total += item.precio*item.cantidad;
  });
  totalCarrito.textContent = total.toFixed(2);
}

function eliminarProducto(index){
  carrito.splice(index,1);
  actualizarCarrito();
}

limpiarCarrito.addEventListener('click', ()=>{ carrito=[]; actualizarCarrito(); });
enviarPedido.addEventListener('click', ()=>{
  if(carrito.length===0){ 
      alert('No hay productos en el carrito'); 
      return;
  }
  
  // Mensaje con PEDIDO MANWIL al inicio
  let mensaje = '*PEDIDO MANWIL*%0A%0A'; // %0A%0A = salto de línea doble
  
  carrito.forEach(item=>{
    mensaje += `• ${item.nombre} x${item.cantidad} Bs ${item.precio*item.cantidad}%0A`;
  });
  
  mensaje += `%0ATotal: Bs ${totalCarrito.textContent}`; // línea separada para total
  
  // Abrir WhatsApp con mensaje
  window.open(`https://wa.me/59165545622?text=${mensaje}`, '_blank');
});
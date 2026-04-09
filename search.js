/* ========= DATOS DE AUTOS =========
   Cada entrada tiene: nombre, img, precio, agencia, brand, year, type, essential, condition
   condition: "nuevo" o "seminuevo"
*/
const autos = [
  // Ford Territory (Ford Polanco) - nuevos
  { nombre: "Territory Trend 2024", img: "img/territory1.jpg", precio: 590000, agencia: "Ford Polanco", brand: "Ford", year: 2024, type: "SUV", essential: "Familiar", condition: "nuevo" },
  { nombre: "Territory Titanium 2024", img: "img/territory2.jpg", precio: 660000, agencia: "Ford Polanco", brand: "Ford", year: 2024, type: "SUV", essential: "Premium", condition: "nuevo" },
  // Ford Territory seminuevos
  { nombre: "Territory 2022 Trend", img: "img/territory3.jpg", precio: 420000, agencia: "Ford Polanco", brand: "Ford", year: 2022, type: "SUV", essential: "Económico", condition: "seminuevo" },
  { nombre: "Territory 2021 Titanium", img: "img/territory4.jpg", precio: 395000, agencia: "Ford Polanco", brand: "Ford", year: 2021, type: "SUV", essential: "Familiar", condition: "seminuevo" },

  // Mercedes (Mercedes Benz Satélite) - nuevos
  { nombre: "Mercedes AMG G63S", img: "img/MercedesG63.jpg", precio: 4200000, agencia: "Mercedes Benz Satélite", brand: "Mercedes", year: 2024, type: "Deportivo", essential: "Premium", condition: "nuevo" },

  // Toyota RAV4 (ford placeholder) - new
  { nombre: "Toyota RAV4 GR", img: "img/Rav42026.jpg", precio: 1150000, agencia: "Ford Polanco", brand: "Toyota", year: 2026, type: "SUV", essential: "Deportivo", condition: "nuevo" },

  // Seminuevos - Hyundai Coyoacán
  { nombre: "CHIREY TIGGO 4 PRO 2024", img: "img/chirey.jpg", precio: 420000, agencia: "Hyundai Coyoacán", brand: "Chirey", year: 2024, type: "SUV", essential: "Económico", condition: "seminuevo" },
  { nombre: "HONDA CIVIC TOURING 2024", img: "img/civic.jpg", precio: 720000, agencia: "Hyundai Coyoacán", brand: "Honda", year: 2024, type: "Sedán", essential: "Familiar", condition: "seminuevo" },

  // Nissan X-Trail (hyundai coyoacan)
  { nombre: "X-Trail Advance 2024", img: "img/xtrail1.jpg", precio: 470000, agencia: "Hyundai Coyoacán", brand: "Nissan", year: 2024, type: "SUV", essential: "Familiar", condition: "nuevo" },
  { nombre: "X-Trail Platinum 2024", img: "img/xtrail2.jpg", precio: 540000, agencia: "Hyundai Coyoacán", brand: "Nissan", year: 2024, type: "SUV", essential: "Premium", condition: "nuevo" },
  { nombre: "X-Trail 2021 Sense", img: "img/xtrail3.jpg", precio: 320000, agencia: "Hyundai Coyoacán", brand: "Nissan", year: 2021, type: "SUV", essential: "Económico", condition: "seminuevo" },
  { nombre: "X-Trail 2020 Exclusive", img: "img/xtrail4.jpg", precio: 280000, agencia: "Hyundai Coyoacán", brand: "Nissan", year: 2020, type: "SUV", essential: "Familiar", condition: "seminuevo" },

  // Audi Q5
  { nombre: "Audi Q5 Inicial 2024", img: "img/audiq5inicial2024.jpg", precio: 850000, agencia: "Mercedes Benz Satélite", brand: "Audi", year: 2024, type: "SUV", essential: "Premium", condition: "nuevo" },
  { nombre: "Audi Q5 S-Line 2024", img: "img/audiq5sline2024.jpg", precio: 980000, agencia: "Mercedes Benz Satélite", brand: "Audi", year: 2024, type: "SUV", essential: "Deportivo", condition: "nuevo" },
  { nombre: "Audi Q5 2022 Premium", img: "img/audiq52022premium.jpg", precio: 620000, agencia: "Mercedes Benz Satélite", brand: "Audi", year: 2022, type: "SUV", essential: "Familiar", condition: "seminuevo" },
  { nombre: "Audi Q5 2021 Sportback", img: "img/audiq52021sportback.jpg", precio: 560000, agencia: "Mercedes Benz Satélite", brand: "Audi", year: 2021, type: "SUV", essential: "Económico", condition: "seminuevo" },

  // BMW X4
  { nombre: "BMW X4 sDrive 2024", img: "img/bmwx41.jpg", precio: 920000, agencia: "Mercedes Benz Satélite", brand: "BMW", year: 2024, type: "SUV", essential: "Premium", condition: "nuevo" },
  { nombre: "BMW X4 M Sport 2024", img: "img/bmwx42.jpg", precio: 1200000, agencia: "Mercedes Benz Satélite", brand: "BMW", year: 2024, type: "Deportivo", essential: "Premium", condition: "nuevo" },
  { nombre: "BMW X4 2021 xDrive", img: "img/bmwx43.jpg", precio: 650000, agencia: "Mercedes Benz Satélite", brand: "BMW", year: 2021, type: "SUV", essential: "Familiar", condition: "seminuevo" },
  { nombre: "BMW X4 2020 M-Package", img: "img/bmwx44.jpg", precio: 590000, agencia: "Mercedes Benz Satélite", brand: "BMW", year: 2020, type: "SUV", essential: "Deportivo", condition: "seminuevo" },

  // Porsche Macan
  { nombre: "Macan Base 2024", img: "img/macan1.jpg", precio: 1500000, agencia: "Mercedes Benz Satélite", brand: "Porsche", year: 2024, type: "SUV", essential: "Premium", condition: "nuevo" },
  { nombre: "Macan GTS 2024", img: "img/macan2.jpg", precio: 2200000, agencia: "Mercedes Benz Satélite", brand: "Porsche", year: 2024, type: "Deportivo", essential: "Premium", condition: "nuevo" },
  { nombre: "Macan 2021 Turbo", img: "img/macan3.jpg", precio: 1100000, agencia: "Mercedes Benz Satélite", brand: "Porsche", year: 2021, type: "SUV", essential: "Deportivo", condition: "seminuevo" },
  { nombre: "Macan 2020 S", img: "img/macan4.jpg", precio: 950000, agencia: "Mercedes Benz Satélite", brand: "Porsche", year: 2020, type: "SUV", essential: "Familiar", condition: "seminuevo" }
];

/* ===== Agencias info (usada en detalles) ===== */
const agencias = {
  "Ford Polanco": {
    nombre: "Ford Polanco",
    direccion: "Calle Lago Zurich 219, Granada, Miguel Hidalgo, 11529, CDMX, México",
    telefono: "5561424059"
  },
  "Mercedes Benz Satélite": {
    nombre: "Mercedes Benz Satélite",
    direccion: "Autopista México-Querétaro 4, La Loma, Tlalnepantla de Baz, 54080, Estado de México",
    telefono: "01 55 1106 0350"
  },
  "Hyundai Coyoacán": {
    nombre: "Hyundai Coyoacán",
    direccion: "Periférico Sur No. 4258, Pedregal, Delegacion Coyoacán, Ciudad de México",
    telefono: "(55) 5927 5957"
  }
};

/* ===== Carrito persistente en localStorage ===== */
const STORAGE_KEY = 'automatch_cart_v1';
let cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function saveCart(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); renderCartCount(); updateCartListsAll(); }

/* ===== Helpers ===== */
function numberWithCommas(x){ if(!x && x !== 0) return x; return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

/* ===== RENDER / UI HELPERS ===== */
function renderCartCount(){
  document.querySelectorAll('.cart-count').forEach(el=> el.textContent = cart.length);
}

/* update the lists of cart in pages (several IDs used per page) */
function updateCartListsAll(){
  const areas = [
    {id:'cartItems', total:'cartTotal'},
    {id:'cartItemsN', total:'cartTotalN'},
    {id:'cartItemsS', total:'cartTotalS'},
    {id:'cartItemsC', total:'cartTotalC'},
    {id:'cartItemsA', total:'cartTotalA'}
  ];
  areas.forEach(area=>{
    const ul = document.getElementById(area.id);
    const tot = document.getElementById(area.total);
    if (!ul) return;
    ul.innerHTML = '';
    let sum = 0;
    cart.forEach(item=>{
      const li = document.createElement('li');
      li.innerHTML = `<img src="${item.img}" alt="${item.nombre}"><div style="flex:1"><strong>${item.nombre}</strong><div class="result-muted">${item.agencia}</div></div><div style="font-weight:700;">$${numberWithCommas(item.precio)}</div>`;
      ul.appendChild(li);
      sum += item.precio;
    });
    if (tot) tot.textContent = `$${numberWithCommas(sum)}`;
  });
}

/* add item */
function addToCart(item){
  cart.push(item);
  saveCart();
  showToast(`${item.nombre} agregado al carrito`);
}

/* remove all (used for apartar simulation) */
function clearCart(){
  cart = [];
  saveCart();
}

/* Modal handling */
function showCartModal(){
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('cartModal').classList.add('show');
  updateCartListsAll();
}
function hideCartModal(){
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('cartModal').classList.remove('show');
}

/* reserve (apartar) simulation */
function apartar(){
  if(cart.length === 0){ alert('El carrito está vacío'); return; }
  // simulate reservation
  alert('Gracias — tu apartado ha sido registrado (simulado). Un agente te contactará.');
  clearCart();
  hideCartModal();
}

/* cotizar desde carrito -> mailto con resumen */
function cotizarFromCart(){
  if(cart.length === 0){ alert('El carrito está vacío'); return; }
  const total = cart.reduce((s,i)=> s + i.precio, 0);
  const lines = cart.map(i=> `${i.nombre} - $${numberWithCommas(i.precio)} (${i.agencia})`).join('%0D%0A');
  const body = `Hola AutoMatch,%0D%0A%0D%0AMe interesa recibir una cotización de los siguientes vehículos:%0D%0A%0D%0A${lines}%0D%0A%0D%0ATotal estimado: $${numberWithCommas(total)}%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0ACorreo:%0D%0A%0D%0AGracias.`;
  window.location.href = `mailto:automatchhelp@hotmail.com?subject=Cotización%20de%20vehículos&body=${body}`;
}

/* toast */
function showToast(msg){
  const t = document.createElement('div');
  t.style.position = 'fixed';
  t.style.bottom = '36px';
  t.style.right = '20px';
  t.style.background = '#222';
  t.style.color = 'white';
  t.style.padding = '10px 14px';
  t.style.borderRadius = '8px';
  t.style.zIndex = 99999;
  t.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 2000);
}

/* ===== SEARCH HEADER (quick search) ===== */
function initHeaderSearch(){
  const headerSearch = document.getElementById('headerSearch');
  if(!headerSearch) return;
  headerSearch.addEventListener('keyup', (e)=>{
    const q = headerSearch.value.toLowerCase().trim();
    if(q.length === 0) { closeSearchPanel(); return; }
    const matches = autos.filter(a => a.nombre.toLowerCase().includes(q) || a.brand.toLowerCase().includes(q));
    renderQuickSearch(matches.slice(0,6));
  });
}

/* quick search panel */
function closeSearchPanel(){
  const panel = document.querySelector('.search-results');
  if(panel) panel.style.display = 'none';
}
function renderQuickSearch(list){
  let root = document.getElementById('search-results-root');
  if(!root){ root = document.createElement('div'); root.id='search-results-root'; document.body.appendChild(root); }
  let panel = root.querySelector('.search-results');
  if(!panel){ panel = document.createElement('div'); panel.className='search-results'; root.appendChild(panel); }
  if(list.length === 0){ panel.style.display='none'; return; }
  panel.innerHTML = `<h3>Resultados rápidos</h3>${list.map(a=> `<div class="tarjeta-auto"><img src="${a.img}" class="img-auto"><div style="flex:1"><p style="font-weight:800">${a.nombre}</p><div class="result-muted">${a.agencia}</div><div style="color:#C00000; font-weight:800;">$${numberWithCommas(a.precio)}</div></div><button class="btn-version" data-img="${a.img}" data-name="${a.nombre}" data-price="${a.precio}" data-agency="${a.agencia}">Agregar</button></div>`).join('')}`;
  panel.style.display = 'block';
  panel.querySelectorAll('.btn-version').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = { nombre: btn.dataset.name, precio: parseInt(btn.dataset.price,10), agencia: btn.dataset.agency, img: btn.dataset.img };
      addToCart(item);
    });
  });
}

/* ===== FILTERS for NUEVOS / SEMINUEVOS ===== */
function applyFilters(condition, brand, year, type, priceMax){
  let results = autos.filter(a => a.condition === condition);
  if(brand && brand.trim() !== '') results = results.filter(a => a.brand.toLowerCase().includes(brand.toLowerCase()));
  if(year && year.trim() !== '') {
    const y = parseInt(year,10);
    if(!isNaN(y)) results = results.filter(a => a.year === y);
  }
  if(type && type.trim() !== '') results = results.filter(a => a.type.toLowerCase() === type.toLowerCase());
  if(priceMax && !isNaN(priceMax)) results = results.filter(a => a.precio <= parseInt(priceMax,10));
  return results;
}

function renderResultsGrid(containerId, list){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  if(list.length === 0){ container.innerHTML = '<p>No se encontraron resultados.</p>'; return; }
  list.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'result-card';
    div.innerHTML = `
      <img src="${a.img}" alt="${a.nombre}">
      <div class="result-title">${a.nombre}</div>
      <div class="result-muted">${a.agencia}</div>
      <div class="result-price">$${numberWithCommas(a.precio)}</div>
      <div style="margin-top:10px; display:flex; gap:8px;">
        <button class="add-cart small">Agregar</button>
        <button class="add-cart small outline" onclick="openAgency('${encodeURIComponent(a.agencia)}')">Ver agencia</button>
      </div>
    `;
    // agregar handler para agregar
    div.querySelector('.add-cart').addEventListener('click', ()=>{
      addToCart({ nombre: a.nombre, precio: a.precio, agencia: a.agencia, img: a.img });
    });
    container.appendChild(div);
  });
}

/* small helper to show agency info */
function openAgency(encodedName){
  const name = decodeURIComponent(encodedName);
  const info = agencias[name];
  if(!info){ alert('Información de agencia no disponible'); return; }
  alert(`${info.nombre}\n${info.direccion}\nTel: ${info.telefono}`);
}

/* ===== COTIZACIONES: enviar mail con formulario ===== */
function initCotizaciones(){
  const btn = document.getElementById('sendCot');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const name = document.getElementById('cotName').value || '';
    const email = document.getElementById('cotEmail').value || '';
    const phone = document.getElementById('cotPhone').value || '';
    const auto = document.getElementById('cotAuto').value || '';
    const comments = document.getElementById('cotComments').value || '';
    const body = `Hola AutoMatch,%0D%0A%0D%0ASolicito una cotización con los siguientes datos:%0D%0A%0D%0ANombre: ${encodeURIComponent(name)}%0D%0ACorreo: ${encodeURIComponent(email)}%0D%0ATeléfono: ${encodeURIComponent(phone)}%0D%0AAuto: ${encodeURIComponent(auto)}%0D%0AComentarios: ${encodeURIComponent(comments)}%0D%0A%0D%0AAdjunto: (subir archivos manualmente al responder)%0D%0A%0D%0AGracias.`;
    window.location.href = `mailto:automatchhelp@hotmail.com?subject=Solicitud%20de%20cotización&body=${body}`;
  });
}

/* ===== Eventos de modal globales y botones ===== */
function initCartUI(){
  // open cart buttons
  document.querySelectorAll('[id^="cartBtn"]').forEach(btn=>{
    btn.addEventListener('click', showCartModal);
  });
  document.getElementById('cartBtn')?.addEventListener('click', showCartModal);

  // close buttons
  document.querySelectorAll('[id^="closeCartBtn"]').forEach(b=> b.addEventListener('click', hideCartModal));
  document.getElementById('closeCartBtn')?.addEventListener('click', hideCartModal);

  // overlay click
  document.getElementById('overlay')?.addEventListener('click', hideCartModal);

  // Reserve & Quote buttons (global)
  document.querySelectorAll('[id^="reserveBtn"]').forEach(b=> b.addEventListener('click', apartar));
  document.querySelectorAll('[id^="quoteBtn"]').forEach(b=> b.addEventListener('click', cotizarFromCart));

  // global Reserve/Cotizar inside modal buttons
  document.getElementById('reserveBtn')?.addEventListener('click', apartar);
  document.getElementById('quoteBtn')?.addEventListener('click', cotizarFromCart);
}

/* ===== Init filters & search on pages ===== */
function initPageFilters(){
  // NUEVOS
  const searchBtnN = document.getElementById('searchBtnN');
  if(searchBtnN){
    searchBtnN.addEventListener('click', ()=>{
      const brand = document.getElementById('brandFilterN').value;
      const year = document.getElementById('yearFilterN').value;
      const type = document.getElementById('typeFilterN').value;
      const price = document.getElementById('priceMaxN').value;
      const res = applyFilters('nuevo', brand, year, type, price);
      renderResultsGrid('resultsN', res);
    });
  }

  // SEMINUEVOS
  const searchBtnS = document.getElementById('searchBtnS');
  if(searchBtnS){
    searchBtnS.addEventListener('click', ()=>{
      const brand = document.getElementById('brandFilterS').value;
      const year = document.getElementById('yearFilterS').value;
      const type = document.getElementById('typeFilterS').value;
      const price = document.getElementById('priceMaxS').value;
      const res = applyFilters('seminuevo', brand, year, type, price);
      renderResultsGrid('resultsS', res);
    });
  }

  // show default initial sets (all)
  const resultsN = autos.filter(a=> a.condition === 'nuevo');
  renderResultsGrid('resultsN', resultsN);

  const resultsS = autos.filter(a=> a.condition === 'seminuevo');
  renderResultsGrid('resultsS', resultsS);
}

/* ===== Bind quick search for page-specific inputs ===== */
function bindPageSearchInputs(){
  ['searchN','searchS','searchC','searchA','searchBtn'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('keyup', (e)=>{
      const q = el.value.toLowerCase().trim();
      // attempt to match brand or name within the correct condition for this page
      let condition = null;
      if(id === 'searchN') condition = 'nuevo';
      if(id === 'searchS') condition = 'seminuevo';
      if(id === 'searchC' || id === 'searchA') condition = null;
      if(condition){
        const res = autos.filter(a=> a.condition === condition && (a.nombre.toLowerCase().includes(q) || a.brand.toLowerCase().includes(q)));
        const container = id === 'searchN' ? 'resultsN' : 'resultsS';
        renderResultsGrid(container, res);
      }
    });
  });
}

/* ===== Inicio general ===== */
document.addEventListener('DOMContentLoaded', ()=>{
  renderCartCount();
  updateCartListsAll();
  initHeaderSearch();
  initCartUI();
  initPageFilters();
  bindPageSearchInputs();
  initCotizaciones();
});

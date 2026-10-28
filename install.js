(() => {
 const button=document.querySelector('#install-app');if(!button)return;
 button.dataset.bilingualReady='true';let prompt=null;
 const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
 function refresh(){button.hidden=standalone();button.style.display=standalone()?'none':''}
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();prompt=event;refresh()});
 window.addEventListener('appinstalled',()=>{prompt=null;button.hidden=true;button.style.display='none'});
 matchMedia('(display-mode: standalone)').addEventListener('change',refresh);refresh();
 function instructions(){
  const dialog=document.createElement('dialog');dialog.className='install-dialog';dialog.dataset.bilingualReady='true';
  const local=location.protocol==='file:';
  dialog.innerHTML=`<h2>Instalar Robot Semilla<span class="en-line" lang="en">Install Robot Semilla</span></h2>${local?'<p>Para instalarla, abre primero el juego publicado en internet.</p><p lang="en">To install it, first open the published game online.</p><a class="primary" href="https://salextros.github.io/Robot_semilla/">Abrir juego · Open game ↗</a>':'<p><strong>Android · Chrome</strong></p><ol><li>Abre el menú ⋮.<span class="en-line" lang="en">Open the ⋮ menu.</span></li><li>Toca «Instalar aplicación» o «Agregar a la pantalla principal».<span class="en-line" lang="en">Tap “Install app” or “Add to Home screen”.</span></li><li>Confirma la instalación.<span class="en-line" lang="en">Confirm the installation.</span></li></ol><p><strong>iPhone · Safari</strong></p><ol><li>Toca Compartir ↑.<span class="en-line" lang="en">Tap Share ↑.</span></li><li>Elige «Agregar a inicio» y pulsa «Agregar».<span class="en-line" lang="en">Choose “Add to Home Screen”, then tap “Add”.</span></li></ol><p>Las opciones dependen del navegador y del dispositivo.<span class="en-line" lang="en">Available options depend on your browser and device.</span></p>'}<button class="primary" autofocus>Entendido · Got it</button>`;
  document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{dialog.remove();button.focus()});dialog.showModal();
 }
 button.onclick=async()=>{if(!prompt){instructions();return}const available=prompt;prompt=null;try{await available.prompt();await available.userChoice}catch{instructions()}};
})();

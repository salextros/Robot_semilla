/* Local bilingual presentation; no external translation service or data transfer. */
(() => {
 const normalize = text => text.trim().replace(/\s+/g,' ');
 const dictionary = new Map(Object.entries(EN_TRANSLATIONS).map(([es,en])=>[normalize(es),en]));
 const skills = ['Avanzar','Ordenar pasos','Girar a la derecha','Girar a la izquierda','Encontrar un error','Combinar y corregir'];
 function translate(text) {
  const t=normalize(text);if(dictionary.has(t))return dictionary.get(t);
  let m=t.match(/^(\d+) de 6 plantas cuidadas\. Cada misión hace crecer una idea\.$/);if(m)return `${m[1]} of 6 plants cared for. Each mission grows an idea.`;
  m=t.match(/^(\d+) \/ 24 bloques$/);if(m)return `${m[1]} / 24 blocks`;
  m=t.match(/^MISI[ÓO]N (\d+) · (.+)$/i);if(m){const skill=skills.find(s=>s.toUpperCase()===m[2].toUpperCase());return `MISSION ${m[1]} · ${dictionary.get(skill)||m[2]}`}
  m=t.match(/^Misión (\d+) de 06 · (.+)$/);if(m)return `Mission ${m[1]} of 06 · ${dictionary.get(m[2])||m[2]}`;
  m=t.match(/^Paso (\d+): (Avanzar|Izquierda|Derecha)\.$/);if(m)return `Step ${m[1]}: ${dictionary.get(m[2])}.`;
  m=t.match(/^En el paso (\d+), Semilla salió del camino\./);if(m)return `At step ${m[1]}, Semilla left the path. Check the highlighted block and the arrow's direction.`;
  m=t.match(/^Llegaste a la planta\. Quedaron (\d+) bloques sin usar:/);if(m)return `You reached the plant. There are ${m[1]} unused blocks: you can go back and simplify your program.`;
  m=t.match(/^0(\d) · (.+)$/);if(m&&dictionary.has(m[2]))return `0${m[1]} · ${dictionary.get(m[2])}`;
  if(/^\d+$/.test(t)||!/[a-záéíóúñ]/i.test(t))return null;
  if(/^(lunes|martes|miércoles|jueves|viernes|sábado|domingo),/.test(t))return new Intl.DateTimeFormat('en-US',{timeZone:'America/Bogota',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());
  const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];const month=months.indexOf(t.toLowerCase());if(month>=0)return ['January','February','March','April','May','June','July','August','September','October','November','December'][month];
  return null;
 }
 function apply(){
  observer.disconnect();
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){const parent=node.parentElement;if(!parent||parent.closest('script,style,[lang="en"],.concept-spanish,[data-bilingual-ready],.bilingual-text,option,.brand,.clock-digits'))continue;
   const english=translate(node.textContent);if(!english)continue;
   const wrap=document.createElement('span');wrap.className='bilingual-text';const es=document.createElement('span');es.lang='es';es.textContent=node.textContent;const en=document.createElement('span');en.className='en-line';en.lang='en';en.textContent=english;wrap.append(es,en);node.replaceWith(wrap);
  }
  document.querySelectorAll('option').forEach(option=>{if(option.dataset.bilingualReady)return;const en=translate(option.textContent);if(en){option.textContent+=' / '+en;option.dataset.bilingualReady='true'}});
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
 }
 const observer=new MutationObserver(apply);apply();
})();

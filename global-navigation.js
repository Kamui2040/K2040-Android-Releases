(() => {
  "use strict";
  const labels = {
    en:{menu:"K2040 navigation",home:"Home",android:"Android Projects",gaming:"Gaming Mods",projectAreas:"Project Areas",news:"News",about:"About",androidHome:"Android Home",apps:"Apps",updates:"Updates",modsHome:"Mods Home",modProjects:"Mod Projects"},
    de:{menu:"K2040-Navigation",home:"Home",android:"Android-Projekte",gaming:"Gaming Mods",projectAreas:"Projektbereiche",news:"News",about:"Info",androidHome:"Android-Startseite",apps:"Apps",updates:"Updates",modsHome:"Mods-Startseite",modProjects:"Mod-Projekte"},
    "pt-PT":{menu:"Navegação K2040",home:"Início",android:"Projetos Android",gaming:"Gaming Mods",projectAreas:"Áreas de projetos",news:"Notícias",about:"Sobre",androidHome:"Início Android",apps:"Apps",updates:"Atualizações",modsHome:"Início dos Mods",modProjects:"Projetos de Mods"},
    es:{menu:"Navegación K2040",home:"Inicio",android:"Proyectos Android",gaming:"Gaming Mods",projectAreas:"Áreas de proyectos",news:"Noticias",about:"Acerca de",androidHome:"Inicio Android",apps:"Apps",updates:"Actualizaciones",modsHome:"Inicio de Mods",modProjects:"Proyectos de Mods"},
    fr:{menu:"Navigation K2040",home:"Accueil",android:"Projets Android",gaming:"Gaming Mods",projectAreas:"Domaines de projets",news:"Actualités",about:"À propos",androidHome:"Accueil Android",apps:"Apps",updates:"Mises à jour",modsHome:"Accueil des Mods",modProjects:"Projets de Mods"}
  };
  const normalize=(value)=>{const v=(value||"").toLowerCase();if(v.startsWith("de"))return"de";if(v.startsWith("pt"))return"pt-PT";if(v.startsWith("es"))return"es";if(v.startsWith("fr"))return"fr";return"en"};
  const current=()=>{try{const saved=localStorage.getItem("k2040-language");if(saved&&labels[saved])return saved}catch{}return normalize(document.documentElement.lang||navigator.language)};
  const apply=(language=current())=>{const copy=labels[language]||labels.en;document.querySelectorAll("[data-global-i18n]").forEach((el)=>{const value=copy[el.dataset.globalI18n];if(value)el.textContent=value});document.querySelectorAll("[data-global-aria]").forEach((el)=>{const value=copy[el.dataset.globalAria];if(value)el.setAttribute("aria-label",value)})};
  const initMenu=(menu)=>{
    const items=[...menu.querySelectorAll("[data-global-menu-item]")];
    const position=(item)=>{item.classList.remove("global-menu-item--flip");if(!item.open||innerWidth<=760)return;requestAnimationFrame(()=>{const panel=menu.querySelector(".global-menu-panel");const sub=item.querySelector(".global-menu-submenu");if(!panel||!sub)return;const rect=panel.getBoundingClientRect(),width=sub.offsetWidth||245,gap=9,margin=16;const fitsRight=rect.right+gap+width<=innerWidth-margin;const fitsLeft=rect.left-gap-width>=margin;item.classList.toggle("global-menu-item--flip",!fitsRight&&fitsLeft)})};
    items.forEach((item)=>{
      const summary=item.querySelector(":scope > summary");
      summary?.addEventListener("click",(event)=>{
        event.preventDefault();
        const shouldOpen=!item.open;
        items.forEach((other)=>{if(other!==item)other.open=false});
        item.open=shouldOpen;
        if(shouldOpen)position(item);
      });
      item.addEventListener("toggle",()=>{if(item.open){items.forEach((other)=>{if(other!==item)other.open=false});position(item)}});
    });
    menu.addEventListener("toggle",()=>{if(!menu.open)items.forEach((item)=>item.open=false)});
    addEventListener("resize",()=>items.forEach(position),{passive:true});
  };
  const init=()=>{apply();document.querySelectorAll("[data-global-menu]").forEach(initMenu);document.querySelectorAll("[data-language-option]").forEach((button)=>button.addEventListener("click",()=>apply(button.dataset.languageOption)));document.addEventListener("click",(event)=>document.querySelectorAll("[data-global-menu][open]").forEach((menu)=>{if(!menu.contains(event.target))menu.open=false}))};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();

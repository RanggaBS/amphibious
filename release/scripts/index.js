import{formatRupiah,getTimeOfDay,getData,createPackageCard,createElementFromHTML,createPackageModal,createPackageCardWithoutButton,randomIntBetween,formatUnit}from"./utils.js";const getDatas=async()=>{"undefined"!=typeof HOTSPOT_DATA&&HOTSPOT_DATA||await getData()};await getDatas();const contactButtons=document.querySelectorAll("[data-contact-button='true']");if(contactButtons.forEach((e=>{e.addEventListener("click",(e=>{window.open("https://wa.me/%2B628991799916/?text=Halo%20kak.","_blank")}))})),window.location.href.includes("alogin"));else if(window.location.href.includes("login")){const e=document.querySelector("input#username"),t=document.querySelector("input#password");e.addEventListener("input",(()=>{t.value=e.value}))}else if(window.location.href.includes("status")){document.querySelector("#welcome").textContent="Selamat "+getTimeOfDay();document.querySelectorAll("#upload, #download").forEach(((e,t)=>{const a=e.innerText.split(" ")[1];a.length>1&&"B"!==a&&(e.innerText=formatUnit(e.innerText,2))}))}else if(window.location.href.includes("packages")){const e=document.querySelector("ul#packages");HOTSPOT_DATA.packages.forEach(((t,a)=>{const o=createElementFromHTML("<li></li>"),n=createPackageCard(t.isLaris,t.quota,t.activePeriod,t.price,`modal-${a+1}`),i=createPackageCardWithoutButton(t.isLaris,t.quota,t.activePeriod,t.price),c=createPackageModal(`modal-${a+1}`,i,a);n.appendChild(c),o.appendChild(n),e.appendChild(o)})),MicroModal.init({awaitCloseAnimation:!0,disableFocus:!0,disableScroll:!0})}else if(window.location.href.includes("logout")){document.querySelector("img").src=`/images/logged-out-${randomIntBetween(1,3)}.webp`}
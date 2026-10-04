const grid=document.querySelector('#photo-grid');
const dialog=document.querySelector('#lightbox');
const viewer=document.querySelector('#lightbox-image');
const count=document.querySelector('#lightbox-count');
if(grid&&dialog&&viewer&&count){
 const items=Array.from({length:56},(_,i)=>`/images/gallery/IMG${i+1}.jpeg`);
 items.forEach((src,i)=>{const img=document.createElement('img');img.src=src;img.alt=`Gallery photograph ${i+1}`;img.loading='lazy';img.className='gallery-photo';img.tabIndex=0;img.addEventListener('click',()=>open(i));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}});grid.append(img)});
 let current=0;
 function open(i){current=i;update();dialog.showModal()}
 function update(){viewer.src=items[current];viewer.alt=`Gallery photograph ${current+1} of ${items.length}`;count.textContent=`${String(current+1).padStart(2,'0')} / ${items.length}`}
 function step(n){current=(current+n+items.length)%items.length;update()}
 dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
 dialog.querySelector('.lightbox-prev').addEventListener('click',()=>step(-1));
 dialog.querySelector('.lightbox-next').addEventListener('click',()=>step(1));
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
}

const typedName = document.querySelector('.typed-name');
const typedTitle = document.querySelector('.typed-title');
const nameCursor = document.querySelector('.name-line .cursor');
const titleCursor = document.querySelector('.role .cursor');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedName && typedTitle) {
  const name = typedName.dataset.text;
  const title = typedTitle.dataset.text;

  if (reduceMotion) {
    typedName.textContent = name;
    typedTitle.textContent = title;
    nameCursor.hidden = true;
    titleCursor.hidden = true;
  } else {
    const typeText = (element, text, cursor, next) => {
      let index = 0;
      const typeNext = () => {
        element.textContent = text.slice(0, index++);
        if (index <= text.length) window.setTimeout(typeNext, 72);
        else if (next) next();
      };
      cursor.classList.add('is-active');
      window.setTimeout(typeNext, 350);
    };

    typeText(typedName, name, nameCursor, () => {
      nameCursor.classList.remove('is-active');
      titleCursor.classList.add('is-active');
      typeText(typedTitle, title, titleCursor);
    });
  }
}

const projects = [
  {name:'Peak Browser',category:'Apps',url:'https://www.peakbrowser.app/',description:'A native browser workspace for Mac, iPhone, and iPad: browsing, notes, boards, whiteboards, and optional AI in one place.',tag:'Native workspace',peak:true},
  {name:'Free Flow',category:'Apps',url:'https://freeflow-freestyle.vercel.app/',description:'A digital freestyle and lyricism partner for rappers, poets, and songwriters, with tools to spark ideas and find words.',tag:'Creative tool'},
  {name:'Mapr Atlas',category:'Apps',url:'https://apps.apple.com/no/app/mapr-atlas/id6752829712?l=nb',description:'An interactive world atlas for exploring economic, market, and demographic data, with a contextual AI assistant and practical converters.',tag:'World data'},
  {name:'Mapr',category:'Apps',url:'https://mapr-homepage.vercel.app/',description:'A toolkit for tradespeople: map-based projects, time tracking, planning, materials, calculators, and a professional community.',tag:'Tools for the trade'},
  {name:'TextClip',category:'Apps',url:'https://apps.apple.com/no/app/textclip/id6746357735?mt=12',description:'A Mac utility that captures a region of the screen, recognizes its text, and copies it to the clipboard; the App Store describes its OCR as offline.',tag:'Mac utility'},
  {name:'WebDesign.Theory',category:'Learning Resources',url:'https://designrpros.github.io/WEBDESIGN.THEORY/',description:'A visual introduction to design systems and styles, with examples, code snippets, and core principles.',tag:'Learn by exploring'},
  {name:'Berentsen Labs',category:'Creative Portfolios',url:'https://berentsenlabs.no/',description:'A web and AI development studio presenting its services, approach, and project work.',tag:'Studio'},
  {name:'Studio 51',category:'Community Initiatives',url:'https://studio51.vercel.app/',description:'A Bærum community music space built around creativity, belonging, and personal growth.',tag:'Music & community'},
  {name:'Høl i CV’en',category:'Community Initiatives',url:'https://holicven.vercel.app/',description:'A community café and work-training initiative in Sandvika, centred on coffee, inclusion, and recovery.',tag:'Coffee & community'},
  {name:'Sandvika Platemesse',category:'Community Initiatives',url:'https://sandvikaplatemesse.no/',description:'A local vinyl fair bringing together records, artists, and the Sandvika community.',tag:'Local culture'},
  {name:'Cost of Living',category:'Travel',url:'https://costofliving.no/',description:'A Europe-focused cost-of-living guide with country and city information for people planning travel or relocation.',tag:'Travel guide'},
  {name:'NordFisk',category:'Activity',url:'https://designrpros.github.io/nordfisk/',description:'A Norwegian fishing guide with regional information, species, beginner resources, and equipment guidance.',tag:'Outdoors'},
  {name:'The Lineup',category:'Games',url:'https://thelineup.world/',description:'A surf simulator and travel game exploring famous waves, break types, and surf destinations around the world.',tag:'Surf & travel'}
];

const nav = document.querySelector('#journey-nav');
const stage = document.querySelector('#journey-stage');
const counter = document.querySelector('.journey-count');
const previous = document.querySelector('.journey-prev');
const next = document.querySelector('.journey-next');
const filters = [...document.querySelectorAll('.filter-chip')];
let visibleProjects = projects;
let activeIndex = 0;

function renderJourney() {
  if (!nav || !stage || !visibleProjects.length) return;
  const project = visibleProjects[activeIndex];
  nav.innerHTML = visibleProjects.map((item, index) => `<button class="journey-stop${index === activeIndex ? ' is-active' : ''}" type="button" data-index="${index}" aria-current="${index === activeIndex ? 'step' : 'false'}"><span class="stop-number">${String(index + 1).padStart(2, '0')}</span><span class="stop-name">${item.name}</span></button>`).join('');
  const media = project.peak ? `<figure class="peak-film"><video controls playsinline preload="metadata" aria-label="Peak Browser app demo"><source src="/media/peak-browser-app-demo.mp4" type="video/mp4">Your browser does not support video playback.</video><figcaption>Peak Browser · App demo</figcaption></figure>` : '';
  stage.innerHTML = `<article class="project-chapter"><div class="chapter-copy"><p class="chapter-tag">${project.category} <span>·</span> ${project.tag}</p><h3>${project.name}</h3><p class="chapter-description">${project.description}</p><a class="chapter-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Visit ${project.name}<span aria-hidden="true"> ↗</span></a></div>${media}</article>`;
  if (counter) counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(visibleProjects.length).padStart(2, '0')}`;
  if (previous) previous.disabled = activeIndex === 0;
  if (next) {
    next.disabled = activeIndex === visibleProjects.length - 1;
    next.textContent = next.disabled ? 'End of this journey' : 'Next project →';
  }
}

nav?.addEventListener('click', event => {
  const button = event.target.closest('.journey-stop');
  if (!button) return;
  activeIndex = Number(button.dataset.index);
  renderJourney();
});
previous?.addEventListener('click', () => { if (activeIndex > 0) { activeIndex--; renderJourney(); } });
next?.addEventListener('click', () => { if (activeIndex < visibleProjects.length - 1) { activeIndex++; renderJourney(); } });
filters.forEach(filter => filter.addEventListener('click', () => {
  const category = filter.dataset.filter;
  visibleProjects = category === 'All' ? projects : projects.filter(project => project.category === category);
  activeIndex = 0;
  filters.forEach(button => {
    const selected = button === filter;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderJourney();
}));
renderJourney();

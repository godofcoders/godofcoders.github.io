const projects = [
  {id:'ledger-city', title:'Ledger City', tags:'3D WORLD / BLOCKCHAIN', category:'worlds', image:'ledger-shot', style:'landscape', description:'A 3D city that turns XRP blockchain accounts into virtual buildings and properties.', link:'https://ledgercitygame.com', source:'PROJECT WEBSITE'},
  {id:'vulcan-td', title:'Vulcan’s Tower Defense', tags:'STRATEGY / TOWER DEFENSE', category:'strategy', image:'vulcan-shot', style:'landscape vulcan-art', description:'Supported live operations, gameplay balancing, and performance investigation using Unity Profiler, Frame Debugger, and Memory Profiler.', link:'https://apps.apple.com/in/app/vulcans-tower-defense/id1658249651', source:'APP STORE'},
  {id:'rob-rush', title:'Rob Rush', tags:'ARCADE / MOBILE', category:'arcade', image:'rob-icon', style:'icon-composition rob-art', description:'Built this 3D robbery game from concept, contributed to gameplay design, and implemented dialogue, combat, vehicle variants, and weapon systems.', link:'https://playmods.net/game/rob-rush---ad-free/googoo.games.robrushpro', source:'VIEW GAME LISTING', artText:'ROB<br>RUSH'},
  {id:'edverse', title:'Edverse', tags:'EDUCATION / INTERACTIVE 3D', category:'worlds', image:'edverse-icon', style:'landscape', description:'Developed Edverse Creator’s core 3D world-building systems and runtime authoring tools, including asset-type-specific import preprocessors.', link:'https://edverse.ca', source:'PROJECT WEBSITE'},
  {id:'city-of-chaos', title:'City of Chaos', tags:'MMORPG / MULTIPLAYER', category:'worlds', image:'city-icon', style:'icon-composition city-art', description:'An online multiplayer RPG set in a chaotic city, with exploration, combat, and social play.', link:'https://play.google.com/store/apps/details?id=com.vnlentertainment.coc&hl=en_IN', source:'GOOGLE PLAY', artText:'WELCOME<br>TO CHAOS.'},
  {id:'revolution-chess', title:'Revolution Chess', tags:'CHESS / STRATEGY', category:'strategy', style:'chess-art', description:'Implemented gameplay systems and AI decision logic for this chess project.', link:'https://revolution-chess-game.updatestar.com', source:'VIEW GAME LISTING'},
  {id:'vulcan-forged', title:'Vulcan Forged', tags:'WEB3 / GAMING ECOSYSTEM', category:'worlds', image:'forged-shot', style:'landscape', description:'A Web3 gaming ecosystem spanning games, digital assets, and connected virtual experiences.', link:'https://docs.vulcanforged.com', source:'EXPLORE DOCUMENTATION'},
  {id:'alnasha-run', title:'Alnasha Run', tags:'RUNNER / MOBILE', category:'arcade', image:'alnasha-shot', style:'icon-composition alnasha-art', description:'A mobile runner project in my arcade game portfolio.', link:'https://play.google.com/store/search?q=alnasha+run&c=apps&hl=en_IN', source:'FIND ON GOOGLE PLAY', artText:'KEEP<br>RUNNING.'}
];

const grid = document.querySelector('#project-grid');
const arrow = '<span aria-hidden="true">↗</span>';
function projectMarkup(p) {
  let visual = p.image ? `<img src="assets/${p.image}.webp" alt="${p.title} ${p.style.includes('landscape') ? 'project artwork' : 'game artwork'}" loading="lazy" width="640" height="380">` : '<div class="chess-board" aria-hidden="true"><span>♜</span><span>♞</span><span>♝</span><span>♛</span><span>♚</span><span>♝</span><span>♞</span><span>♜</span><span>♟</span><span>♟</span><span>♟</span><span>♟</span><span>♟</span><span>♟</span><span>♟</span><span>♟</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>';
  if (p.artText) visual += `<div class="art-type" aria-hidden="true">${p.artText}</div>`;
  return `<article class="project-card collection-card" id="${p.id}" data-category="${p.category}"><a class="project-visual ${p.style}" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="${p.title}: ${p.source.toLowerCase()}">${visual}<span class="visual-link" aria-hidden="true">↗</span></a><div class="project-info"><div class="card-meta mono">${p.tags}</div><h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title} ${arrow}</a></h3><p>${p.description}</p><a class="project-source mono" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.source} ${arrow}</a></div></article>`;
}
grid.innerHTML = projects.map(projectMarkup).join('');
const filters = document.querySelectorAll('.filter');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button));});
    let count = 0;
    document.querySelectorAll('.collection-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    document.querySelector('#project-count').textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'PROJECT' : 'PROJECTS'}`;
  });
});
// A project linked from the hero is always visible, even after filtering.
document.querySelectorAll('.floating-game').forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target?.hidden) document.querySelector('[data-filter="all"]').click();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const SPORTS_DATA = [
  {id:'football',name:'Football',icon:'⚽',category:'team',color:'#7c6dfa',members:'3.2M',posts:'142K',desc:'The beautiful game. World Cup, Premier League, Champions League and every competition on earth.',tags:[{l:'Global',bg:'rgba(124,109,250,.15)',c:'#a99dfc'},{l:'Popular',bg:'rgba(250,109,124,.15)',c:'#fc9daa'}],teams:[{name:'Real Madrid',country:'Spain',color:'#fff'},{name:'Barcelona',country:'Spain',color:'#a50044'},{name:'Man City',country:'England',color:'#6cabdd'},{name:'Arsenal',country:'England',color:'#ef0107'},{name:'Bayern Munich',country:'Germany',color:'#dc052d'},{name:'PSG',country:'France',color:'#004170'},{name:'Inter Milan',country:'Italy',color:'#010e80'},{name:'Chelsea',country:'England',color:'#034694'}]},
  {id:'basketball',name:'Basketball',icon:'🏀',category:'team',color:'#fa6d7c',members:'2.1M',posts:'98K',desc:'From NBA to street ball — hoops culture, fantasy leagues, highlights and GOAT debates.',tags:[{l:'NBA',bg:'rgba(250,109,124,.15)',c:'#fc9daa'},{l:'WNBA',bg:'rgba(124,109,250,.15)',c:'#a99dfc'}],teams:[{name:'LA Lakers',country:'USA',color:'#fdb927'},{name:'Golden State',country:'USA',color:'#1d428a'},{name:'Boston Celtics',country:'USA',color:'#007a33'},{name:'Miami Heat',country:'USA',color:'#98002e'},{name:'Chicago Bulls',country:'USA',color:'#ce1141'},{name:'Dallas Mavericks',country:'USA',color:'#0053bc'}]},
  {id:'tennis',name:'Tennis',icon:'🎾',category:'racket',color:'#6dfabd',members:'980K',posts:'54K',desc:'Grand Slams, ATP & WTA rankings, and the fiercest rivalries in sport.',tags:[{l:'ATP',bg:'rgba(109,250,189,.15)',c:'#6dfabd'},{l:'WTA',bg:'rgba(250,189,109,.15)',c:'#fabd6d'}],teams:[{name:'Carlos Alcaraz',country:'Spain',color:'#e63946'},{name:'Jannik Sinner',country:'Italy',color:'#457b9d'},{name:'Novak Djokovic',country:'Serbia',color:'#2a9d8f'},{name:'Iga Swiatek',country:'Poland',color:'#e76f51'},{name:'Coco Gauff',country:'USA',color:'#264653'}]},
  {id:'cricket',name:'Cricket',icon:'🏏',category:'team',color:'#fabd6d',members:'1.7M',posts:'76K',desc:'IPL, Test matches, T20 World Cup — the gentleman\'s game gone truly global.',tags:[{l:'Test',bg:'rgba(250,189,109,.15)',c:'#fabd6d'},{l:'IPL',bg:'rgba(250,109,124,.15)',c:'#fc9daa'}],teams:[{name:'India',country:'IND',color:'#ff9933'},{name:'Australia',country:'AUS',color:'#ffcd00'},{name:'England',country:'ENG',color:'#012169'},{name:'Pakistan',country:'PAK',color:'#01411c'},{name:'West Indies',country:'WI',color:'#7b0d1e'},{name:'Mumbai Indians',country:'IPL',color:'#004ba0'},{name:'CSK',country:'IPL',color:'#ffc72c'}]},
  {id:'f1',name:'Formula 1',icon:'🏎️',category:'motor',color:'#fa4d4d',members:'1.4M',posts:'89K',desc:'Speed, strategy, spectacle. Live race threads, team radios and data deep dives.',tags:[{l:'Live',bg:'rgba(250,77,77,.15)',c:'#fa4d4d'},{l:'Technical',bg:'rgba(109,250,189,.12)',c:'#6dfabd'}],teams:[{name:'Red Bull Racing',country:'Austria',color:'#1e41ff'},{name:'Ferrari',country:'Italy',color:'#dc0000'},{name:'Mercedes',country:'Germany',color:'#00d2be'},{name:'McLaren',country:'UK',color:'#ff8000'},{name:'Aston Martin',country:'UK',color:'#006f62'}]},
  {id:'nfl',name:'American Football',icon:'🏈',category:'team',color:'#fabd6d',members:'1.9M',posts:'110K',desc:'Super Bowl hype, fantasy leagues, and the best sports analysis community online.',tags:[{l:'NFL',bg:'rgba(250,189,109,.15)',c:'#fabd6d'},{l:'Fantasy',bg:'rgba(124,109,250,.15)',c:'#a99dfc'}],teams:[{name:'Kansas City Chiefs',country:'USA',color:'#e31837'},{name:'49ers',country:'USA',color:'#aa0000'},{name:'Dallas Cowboys',country:'USA',color:'#003594'},{name:'Green Bay Packers',country:'USA',color:'#203731'},{name:'Buffalo Bills',country:'USA',color:'#00338d'}]},
  {id:'mma',name:'MMA / UFC',icon:'🥊',category:'combat',color:'#fa6d7c',members:'1.1M',posts:'67K',desc:'UFC, Bellator, ONE Championship. Fighter breakdowns, picks, and GOAT debates.',tags:[{l:'UFC',bg:'rgba(250,109,124,.15)',c:'#fc9daa'}],teams:[{name:'Jon Jones',country:'USA',color:'#e63946'},{name:'Islam Makhachev',country:'Russia',color:'#457b9d'},{name:'Alex Pereira',country:'Brazil',color:'#2d6a4f'},{name:'Amanda Nunes',country:'Brazil',color:'#6a0572'}]},
  {id:'baseball',name:'Baseball',icon:'⚾',category:'team',color:'#6dfabd',members:'890K',posts:'43K',desc:'America\'s pastime reimagined. Stats, trades, and pennant race drama.',tags:[{l:'MLB',bg:'rgba(109,250,189,.15)',c:'#6dfabd'}],teams:[{name:'NY Yankees',country:'USA',color:'#003087'},{name:'LA Dodgers',country:'USA',color:'#005a9c'},{name:'Boston Red Sox',country:'USA',color:'#bd3039'},{name:'Chicago Cubs',country:'USA',color:'#0e3386'}]},
  {id:'golf',name:'Golf',icon:'⛳',category:'individual',color:'#6dfabd',members:'540K',posts:'28K',desc:'From Augusta to the Open Championship — swing analysis, tour updates, and handicap talk.',tags:[{l:'PGA Tour',bg:'rgba(109,250,189,.15)',c:'#6dfabd'}],teams:[{name:'Scottie Scheffler',country:'USA',color:'#7bc67e'},{name:'Rory McIlroy',country:'N. Ireland',color:'#2196f3'},{name:'Jon Rahm',country:'Spain',color:'#e53935'},{name:'Nelly Korda',country:'USA',color:'#e91e63'}]},
  {id:'hockey',name:'Ice Hockey',icon:'🏒',category:'winter',color:'#85b7eb',members:'720K',posts:'39K',desc:'The fastest game on ice. NHL playoffs, Stanley Cup drama and trade deadline madness.',tags:[{l:'NHL',bg:'rgba(133,183,235,.15)',c:'#85b7eb'}],teams:[{name:'Edmonton Oilers',country:'Canada',color:'#ff4c00'},{name:'Colorado Avalanche',country:'USA',color:'#6f263d'},{name:'Toronto Maple Leafs',country:'Canada',color:'#003e7e'},{name:'Boston Bruins',country:'USA',color:'#fcb514'}]},
  {id:'boxing',name:'Boxing',icon:'🥋',category:'combat',color:'#fa4d4d',members:'800K',posts:'51K',desc:'Sweet science. Big fights, pound-for-pound rankings, and legendary matchups dissected.',tags:[{l:'WBC',bg:'rgba(250,77,77,.15)',c:'#fa4d4d'}],teams:[{name:'Canelo Álvarez',country:'Mexico',color:'#c62828'},{name:'Tyson Fury',country:'UK',color:'#1565c0'},{name:'Anthony Joshua',country:'UK',color:'#2e7d32'},{name:'Oleksandr Usyk',country:'Ukraine',color:'#0057b7'}]},
  {id:'swimming',name:'Swimming',icon:'🏊',category:'water',color:'#6dbdfa',members:'430K',posts:'22K',desc:'Olympic records, butterfly, freestyle and relay — the deep world of competitive swimming.',tags:[{l:'Olympics',bg:'rgba(109,189,250,.15)',c:'#6dbdfa'}],teams:[{name:'Léon Marchand',country:'France',color:'#0055a4'},{name:'Caeleb Dressel',country:'USA',color:'#b22234'},{name:'Katie Ledecky',country:'USA',color:'#3c3b6e'}]},
  {id:'esports',name:'Esports',icon:'🎮',category:'esports',color:'#c77dff',members:'3.8M',posts:'210K',desc:'League of Legends, CS2, Valorant, Fortnite — pro gaming, tier lists, and scene drama.',tags:[{l:'Live',bg:'rgba(199,125,255,.15)',c:'#c77dff'},{l:'Digital',bg:'rgba(124,109,250,.12)',c:'#a99dfc'}],teams:[{name:'T1',country:'South Korea',color:'#c8102e'},{name:'Team Liquid',country:'Netherlands',color:'#93b2cc'},{name:'FaZe Clan',country:'Int.',color:'#c8102e'},{name:'Cloud9',country:'USA',color:'#a8dadc'},{name:'NaVi',country:'Ukraine',color:'#f5a623'}]},
  {id:'volleyball',name:'Volleyball',icon:'🏐',category:'team',color:'#ffd166',members:'480K',posts:'24K',desc:'Indoor, beach — Olympic coverage, top leagues, and technique breakdowns.',tags:[{l:'Olympic',bg:'rgba(255,209,102,.15)',c:'#ffd166'}],teams:[{name:'Brazil',country:'BRA',color:'#009c3b'},{name:'Poland',country:'POL',color:'#dc143c'},{name:'Italy',country:'ITA',color:'#009246'},{name:'USA',country:'USA',color:'#b22234'}]},
  {id:'rugby',name:'Rugby',icon:'🏉',category:'team',color:'#06d6a0',members:'620K',posts:'33K',desc:'Union, League, Sevens — big hits, bigger moments, and the most passionate fans.',tags:[{l:'World Cup',bg:'rgba(6,214,160,.15)',c:'#06d6a0'}],teams:[{name:'New Zealand',country:'NZL',color:'#000'},{name:'South Africa',country:'RSA',color:'#007a4d'},{name:'Ireland',country:'IRL',color:'#169b62'},{name:'France',country:'FRA',color:'#0055a4'}]},
  {id:'athletics',name:'Athletics',icon:'🏃',category:'individual',color:'#ffd166',members:'550K',posts:'29K',desc:'100m to marathon — world records, championship glory, and the joy of running.',tags:[{l:'Olympics',bg:'rgba(255,209,102,.15)',c:'#ffd166'}],teams:[{name:'Noah Lyles',country:'USA',color:'#b22234'},{name:'Armand Duplantis',country:'Sweden',color:'#006aa7'},{name:'Faith Kipyegon',country:'Kenya',color:'#006600'},{name:'Sydney McLaughlin',country:'USA',color:'#3c3b6e'}]},
  {id:'cycling',name:'Cycling',icon:'🚴',category:'individual',color:'#fabd6d',members:'390K',posts:'19K',desc:'Tour de France, Giro, Vuelta — the ultimate endurance community.',tags:[{l:'Grand Tour',bg:'rgba(250,189,109,.15)',c:'#fabd6d'}],teams:[{name:'Tadej Pogačar',country:'Slovenia',color:'#ffcc00'},{name:'Jonas Vingegaard',country:'Denmark',color:'#ff0000'},{name:'Team UAE',country:'Team',color:'#007b5e'}]},
  {id:'skiing',name:'Skiing',icon:'⛷️',category:'winter',color:'#85b7eb',members:'310K',posts:'17K',desc:'Alpine, cross-country, freestyle — the mountains are calling.',tags:[{l:'Winter',bg:'rgba(133,183,235,.15)',c:'#85b7eb'}],teams:[{name:'Mikaela Shiffrin',country:'USA',color:'#b22234'},{name:'Marco Odermatt',country:'Switzerland',color:'#ff0000'},{name:'Sofia Goggia',country:'Italy',color:'#009246'}]},
];

const FILTERS = [
  {key:'all',label:'🌍 All'},
  {key:'team',label:'🏆 Team'},
  {key:'individual',label:'🏃 Individual'},
  {key:'combat',label:'🥊 Combat'},
  {key:'racket',label:'🎾 Racket'},
  {key:'water',label:'🌊 Water'},
  {key:'motor',label:'🏎️ Motor'},
  {key:'winter',label:'❄️ Winter'},
  {key:'esports',label:'🎮 Esports'},
];

let activeFilter = 'all', searchQ = '', followed = new Set();

function buildFilters() {
  document.getElementById('filterPills').innerHTML = FILTERS.map(f =>
    `<button class="filter-pill ${f.key===activeFilter?'active':''}" onclick="setFilter('${f.key}',this)">${f.label}</button>`
  ).join('');
}

function setFilter(key, btn) {
  activeFilter = key;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSports();
}

function handleSearch(val) { searchQ = val.toLowerCase(); renderSports(); }

function filtered() {
  return SPORTS_DATA.filter(s => {
    const mf = activeFilter === 'all' || s.category === activeFilter;
    const ms = !searchQ || s.name.toLowerCase().includes(searchQ) || s.teams.some(t => t.name.toLowerCase().includes(searchQ));
    return mf && ms;
  });
}

function renderSports() {
  const grid = document.getElementById('sportsGrid');
  const noRes = document.getElementById('noResults');
  const list = filtered();
  if (!list.length) { grid.innerHTML=''; noRes.style.display='block'; return; }
  noRes.style.display = 'none';
  grid.innerHTML = list.map((s,i) =>
    `<div class="sport-card" style="animation:cardIn .4s ${i*40}ms ease both" onclick="openModal('${s.id}')">
      <div class="sc-header" style="background:${s.color}14">
        <div><div class="sc-icon-wrap" style="background:${s.color}20">${s.icon}</div><div class="sc-name">${s.name}</div><div class="sc-category">${s.category}</div></div>
        <div class="sc-members"><div class="sc-num" style="color:${s.color}">${s.members}</div><div class="sc-num-lbl">Members</div></div>
      </div>
      <div class="sc-body">
        <p class="sc-desc">${s.desc}</p>
        <div class="sc-teams-label">Featured teams</div>
        <div class="sc-teams">${s.teams.slice(0,5).map(t=>`<span class="sc-team-chip"><span class="team-dot" style="background:${t.color}"></span>${t.name}</span>`).join('')}${s.teams.length>5?`<span class="sc-team-chip">+${s.teams.length-5}</span>`:''}</div>
        <div class="sc-footer">
          <div class="sc-tags">${s.tags.map(t=>`<span class="sc-tag" style="background:${t.bg};color:${t.c}">${t.l}</span>`).join('')}</div>
          <button class="sc-join-btn ${followed.has(s.id)?'joined':''}" onclick="event.stopPropagation();toggleFollow('${s.id}',this)">${followed.has(s.id)?'✓ Joined':'Join'}</button>
        </div>
      </div>
    </div>`
  ).join('');
}

function toggleFollow(id, btn) {
  followed.has(id) ? followed.delete(id) : followed.add(id);
  btn.textContent = followed.has(id) ? '✓ Joined' : 'Join';
  btn.classList.toggle('joined', followed.has(id));
}

function openModal(id) {
  const s = SPORTS_DATA.find(x => x.id === id);
  document.getElementById('modalIcon').textContent = s.icon;
  document.getElementById('modalName').textContent = s.name;
  document.getElementById('modalCat').textContent = s.category.toUpperCase() + ' SPORT';
  document.getElementById('modalHead').style.background = s.color + '1a';
  document.getElementById('modalDesc').textContent = s.desc;
  document.getElementById('modalStats').innerHTML = [
    {num:s.members,lbl:'Members'},{num:s.posts,lbl:'Posts/month'},{num:s.teams.length,lbl:'Teams'}
  ].map(x=>`<div class="modal-stat"><div class="modal-stat-num" style="color:${s.color}">${x.num}</div><div class="modal-stat-lbl">${x.lbl}</div></div>`).join('');
  document.getElementById('modalTeams').innerHTML = s.teams.map(t =>
    `<div class="modal-team"><div class="modal-team-dot" style="background:${t.color};border:1px solid rgba(255,255,255,.12)"></div><div><div class="modal-team-name">${t.name}</div><div class="modal-team-sub">${t.country}</div></div></div>`
  ).join('');
  const btn = document.getElementById('modalFollowBtn');
  const isJoined = followed.has(id);
  btn.textContent = isJoined ? '✓ Leave community' : `Join ${s.name} community →`;
  btn.className = 'modal-follow-btn' + (isJoined ? ' joined' : '');
  btn.onclick = () => { toggleFollow(id, {textContent:'',classList:{toggle:()=>{},has:()=>{}}}); renderSports(); closeModal(); };
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalBackdrop')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

buildFilters();
renderSports();

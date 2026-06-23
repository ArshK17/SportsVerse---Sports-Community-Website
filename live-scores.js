const LS_DATA = [
  {sport:'Football',icon:'⚽',matches:[
    {home:'🇧🇷 Brazil',away:'🇦🇷 Argentina',score:'2 – 1',status:'live',time:'74\'',league:'World Cup 2026 · Group A'},
    {home:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',away:'🇩🇪 Germany',score:'1 – 1',status:'live',time:'55\'',league:'World Cup 2026 · Group C'},
    {home:'🇵🇹 Portugal',away:'🇪🇸 Spain',score:'3 – 2',status:'finished',time:'FT',league:'World Cup 2026 · Group D'},
    {home:'Man City',away:'Arsenal',score:'2 – 1',status:'live',time:'67\'',league:'Premier League · GW31'},
    {home:'Real Madrid',away:'Barcelona',score:'',status:'upcoming',time:'20:45',league:'La Liga · El Clásico'},
    {home:'Bayern',away:'Dortmund',score:'1 – 0',status:'finished',time:'FT',league:'Bundesliga · GW28'},
    {home:'🇫🇷 France',away:'🇳🇬 Nigeria',score:'',status:'upcoming',time:'18:00',league:'World Cup 2026 · Group B'},
  ]},
  {sport:'Basketball',icon:'🏀',matches:[
    {home:'Lakers',away:'Warriors',score:'108 – 103',status:'live',time:'Q4 4:23',league:'NBA Playoffs · Conf. Semis'},
    {home:'Celtics',away:'Bucks',score:'112 – 98',status:'finished',time:'Final',league:'NBA Playoffs'},
    {home:'Nuggets',away:'Suns',score:'',status:'upcoming',time:'21:30',league:'NBA Playoffs'},
  ]},
  {sport:'Tennis',icon:'🎾',matches:[
    {home:'Djokovic',away:'Alcaraz',score:'6-4 3-6 4-3',status:'live',time:'Set 3',league:'Wimbledon · QF'},
    {home:'Sinner',away:'Zverev',score:'7-6 6-4',status:'finished',time:'FT',league:'Wimbledon · QF'},
    {home:'Swiatek',away:'Gauff',score:'',status:'upcoming',time:'13:00',league:'Wimbledon · Women\'s SF'},
  ]},
  {sport:'Formula 1',icon:'🏎️',matches:[
    {home:'P1 Leclerc',away:'P2 Norris',score:'+0.8s gap',status:'live',time:'Lap 48/78',league:'Monaco Grand Prix 2026'},
    {home:'P3 Hamilton',away:'P4 Verstappen',score:'+3.1s gap',status:'live',time:'Lap 48/78',league:'Monaco Grand Prix 2026'},
  ]},
  {sport:'Cricket',icon:'🏏',matches:[
    {home:'🇮🇳 India',away:'🇬🇧 England',score:'247/4',status:'live',time:'Day 2',league:'Test Series · Match 3'},
    {home:'🇦🇺 Australia',away:'🇿🇦 South Africa',score:'189 all out',status:'finished',time:'Day 3',league:'Test Series'},
  ]},
  {sport:'Ice Hockey',icon:'🏒',matches:[
    {home:'Oilers',away:'Panthers',score:'3 – 2',status:'live',time:'P3 8:14',league:'NHL Playoffs · SCF'},
    {home:'Rangers',away:'Hurricanes',score:'4 – 1',status:'finished',time:'Final',league:'NHL Playoffs · CF'},
  ]},
];

let activeFilter = 'all';

function buildSidebar() {
  const counts = {all: LS_DATA.reduce((a,s) => a + s.matches.length, 0)};
  LS_DATA.forEach(s => counts[s.sport.toLowerCase()] = s.matches.length);
  const items = [{key:'all',label:'All Sports',icon:'🌍'}, ...LS_DATA.map(s => ({key:s.sport.toLowerCase(),label:s.sport,icon:s.icon}))];
  document.getElementById('sportFilterList').innerHTML = items.map(item =>
    `<div class="sport-filter-item ${item.key === activeFilter ? 'active' : ''}" onclick="setFilter('${item.key}',this)">
      <span class="sport-filter-icon">${item.icon}</span>
      <span>${item.label}</span>
      <span class="sport-filter-count">${counts[item.key] || 0}</span>
    </div>`
  ).join('');
}

function setFilter(key, el) {
  activeFilter = key;
  document.querySelectorAll('.sport-filter-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  renderMatches();
}

function statusClass(s) { return s === 'live' ? 'live' : s === 'finished' ? 'finished' : 'upcoming'; }
function statusLabel(m) {
  if (m.status === 'live') return `<span class="live-dot"></span>${m.time}`;
  if (m.status === 'finished') return m.time;
  return m.time;
}

function renderMatches() {
  const sports = activeFilter === 'all' ? LS_DATA : LS_DATA.filter(s => s.sport.toLowerCase() === activeFilter);
  const container = document.getElementById('lsMain');
  if (!sports.length) { container.innerHTML = '<div class="no-matches"><h3>No matches found</h3></div>'; return; }
  container.innerHTML = sports.map(s =>
    `<div class="ls-sport-section">
      <div class="ls-sport-header">
        <span class="ls-sport-icon">${s.icon}</span>
        <span class="ls-sport-name">${s.sport}</span>
        <span class="ls-sport-count">${s.matches.filter(m=>m.status==='live').length} live</span>
      </div>
      ${s.matches.map(m =>
        `<div class="match-card ${m.status === 'live' ? 'is-live' : ''}">
          <div class="match-team"><span class="match-team-flag">${m.home.split(' ')[0]}</span><span class="match-team-name">${m.home.replace(/^[^ ]+ /,'')}</span></div>
          <div class="match-center">
            <div class="match-score">${m.score || 'vs'}</div>
            <div class="match-status ${statusClass(m.status)}">${statusLabel(m)}</div>
            <div class="match-league">${m.league}</div>
          </div>
          <div class="match-team right"><span class="match-team-flag">${m.away.split(' ')[0]}</span><span class="match-team-name">${m.away.replace(/^[^ ]+ /,'')}</span></div>
        </div>`
      ).join('')}
    </div>`
  ).join('');
}

buildSidebar();
renderMatches();

setInterval(() => {
  LS_DATA.forEach(s => s.matches.forEach(m => {
    if (m.status === 'live' && m.sport !== 'Formula 1') {
      const parts = m.time.replace("'",'').split(' ');
      if (!isNaN(parts[0])) {
        const t = parseInt(parts[0]) + 1;
        m.time = t + "'";
      }
    }
  }));
  renderMatches();
}, 10000);

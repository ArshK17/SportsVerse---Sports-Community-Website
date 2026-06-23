const QUICK_NAV = [
  {icon:'⚽',name:'Football',count:'3.2M',href:'football.html'},
  {icon:'🏀',name:'Basketball',count:'2.1M',href:'sports.html'},
  {icon:'🎾',name:'Tennis',count:'980K',href:'sports.html'},
  {icon:'🏈',name:'NFL',count:'1.9M',href:'sports.html'},
  {icon:'🏎️',name:'Formula 1',count:'1.4M',href:'sports.html'},
  {icon:'🏏',name:'Cricket',count:'1.7M',href:'sports.html'},
  {icon:'🥊',name:'MMA',count:'1.1M',href:'sports.html'},
  {icon:'🎮',name:'Esports',count:'3.8M',href:'sports.html'},
  {icon:'⛳',name:'Golf',count:'540K',href:'sports.html'},
  {icon:'🏒',name:'Ice Hockey',count:'720K',href:'sports.html'},
];

const WC_GROUPS = [
  {name:'Group A',teams:[{flag:'🇧🇷',name:'Brazil',pts:6},{flag:'🇺🇸',name:'USA',pts:4},{flag:'🇲🇽',name:'Mexico',pts:1},{flag:'🇵🇱',name:'Poland',pts:0}]},
  {name:'Group B',teams:[{flag:'🇦🇷',name:'Argentina',pts:6},{flag:'🇫🇷',name:'France',pts:3},{flag:'🇳🇬',name:'Nigeria',pts:3},{flag:'🇦🇺',name:'Australia',pts:0}]},
  {name:'Group C',teams:[{flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'England',pts:4},{flag:'🇩🇪',name:'Germany',pts:4},{flag:'🇯🇵',name:'Japan',pts:3},{flag:'🇮🇷',name:'Iran',pts:0}]},
  {name:'Group D',teams:[{flag:'🇵🇹',name:'Portugal',pts:6},{flag:'🇪🇸',name:'Spain',pts:4},{flag:'🇲🇦',name:'Morocco',pts:2},{flag:'🇨🇦',name:'Canada',pts:1}]},
];

const LIVE_MATCHES = [
  {sport:'⚽ World Cup',teams:'Brazil vs Argentina',score:'2 – 1',status:'74\'',live:true},
  {sport:'🏀 NBA',teams:'Lakers vs Warriors',score:'108 – 103',status:'Q4 4:23',live:true},
  {sport:'🎾 Wimbledon',teams:'Djokovic vs Alcaraz',score:'6-4 3-6 4-3',status:'Set 3',live:true},
  {sport:'🏎️ Monaco GP',teams:'Verstappen leads',score:'Lap 48/78',status:'P1: Leclerc',live:true},
  {sport:'🏏 Test Cricket',teams:'India vs England',score:'247/4',status:'Day 2',live:true},
  {sport:'⚽ Premier League',teams:'Man City vs Arsenal',score:'2 – 1',status:'67\'',live:true},
];

const TRENDING = [
  {rank:'01',sport:'⚽ Football',color:'#7c6dfa',title:'Vinicius Jr scores wonder goal vs Argentina — WC 2026 opener 🔥',comments:'48.2K',time:'2h'},
  {rank:'02',sport:'🏀 Basketball',color:'#fa6d7c',title:'Wembanyama 45/12/7 — generational night in the NBA',comments:'31.7K',time:'5h'},
  {rank:'03',sport:'🎾 Tennis',color:'#6dfabd',title:'Alcaraz vs Sinner rivalry — best of the decade?',comments:'19.4K',time:'8h'},
  {rank:'04',sport:'🏈 NFL',color:'#fabd6d',title:'Trade deadline mega thread — biggest moves ranked',comments:'22.8K',time:'1h'},
];

function buildQuickNav() {
  document.getElementById('quickGrid').innerHTML = QUICK_NAV.map(q =>
    `<div class="quick-card" onclick="location.href='${q.href}'">
      <div class="quick-icon">${q.icon}</div>
      <div class="quick-name">${q.name}</div>
      <div class="quick-count">${q.count} members</div>
    </div>`
  ).join('');
}

function buildWcGroups() {
  const el = document.getElementById('wcGroups');
  if (!el) return;
  el.innerHTML = WC_GROUPS.map(g =>
    `<div class="wc-group">
      <div class="wc-group-title">${g.name}</div>
      ${g.teams.map(t => `<div class="wc-team-row"><div class="wc-team-left"><span class="wc-team-flag">${t.flag}</span><span>${t.name}</span></div><span class="wc-team-pts">${t.pts} pts</span></div>`).join('')}
    </div>`
  ).join('');
}

function buildLiveMatches() {
  document.getElementById('liveMatchesScroll').innerHTML = LIVE_MATCHES.map(m =>
    `<div class="live-match-card ${m.live ? 'live-active' : ''}" onclick="location.href='live-scores.html'">
      <div class="lmc-sport">${m.sport}</div>
      <div class="lmc-teams">${m.teams}</div>
      <div class="lmc-score">${m.score}</div>
      ${m.live ? `<div class="lmc-status"><span class="live-dot"></span>${m.status}</div>` : `<div class="lmc-status" style="color:var(--txt3)">${m.status}</div>`}
    </div>`
  ).join('');
}

function buildTrending() {
  document.getElementById('trendingGrid').innerHTML = TRENDING.map(t =>
    `<div class="trending-card" onclick="location.href='community.html'">
      <div class="trend-rank">${t.rank}</div>
      <div>
        <div class="trend-sport" style="color:${t.color}">${t.sport}</div>
        <div class="trend-title">${t.title}</div>
        <div class="trend-meta">${t.comments} comments · ${t.time} ago</div>
      </div>
    </div>`
  ).join('');
}

let min = 74, sec = 0;
function tickMatch() {
  sec++;
  if (sec >= 60) { sec = 0; min++; }
  const el = document.getElementById('featTime');
  if (el) el.textContent = min + '\'';
}
setInterval(tickMatch, 1000);

buildQuickNav();
buildWcGroups();
buildLiveMatches();
buildTrending();

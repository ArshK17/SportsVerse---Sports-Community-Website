const FL_TABS = ['World Cup 2026','Premier League','Champions League','La Liga'];
let activeTab = 0;

const FL_MATCHES = [
  [
    {home:'🇧🇷 Brazil',away:'🇦🇷 Argentina',score:'2 – 1',status:'live',time:'74\''},
    {home:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',away:'🇩🇪 Germany',score:'1 – 1',status:'live',time:'55\''},
    {home:'🇵🇹 Portugal',away:'🇪🇸 Spain',score:'3 – 2',status:'finished',time:'FT'},
    {home:'🇫🇷 France',away:'🇳🇬 Nigeria',score:'',status:'upcoming',time:'18:00'},
    {home:'🇺🇸 USA',away:'🇲🇽 Mexico',score:'',status:'upcoming',time:'21:00'},
    {home:'🇯🇵 Japan',away:'🇮🇷 Iran',score:'2 – 0',status:'finished',time:'FT'},
  ],
  [
    {home:'Man City',away:'Arsenal',score:'2 – 1',status:'live',time:'67\''},
    {home:'Liverpool',away:'Chelsea',score:'1 – 1',status:'live',time:'80\''},
    {home:'Tottenham',away:'Man United',score:'',status:'upcoming',time:'17:30'},
    {home:'Newcastle',away:'Aston Villa',score:'3 – 0',status:'finished',time:'FT'},
    {home:'Brighton',away:'West Ham',score:'1 – 2',status:'finished',time:'FT'},
  ],
  [
    {home:'Real Madrid',away:'Bayern Munich',score:'2 – 1',status:'live',time:'88\''},
    {home:'Man City',away:'PSG',score:'',status:'upcoming',time:'21:00'},
    {home:'Inter Milan',away:'Dortmund',score:'1 – 0',status:'finished',time:'FT'},
  ],
  [
    {home:'Real Madrid',away:'Barcelona',score:'',status:'upcoming',time:'20:45'},
    {home:'Atletico Madrid',away:'Sevilla',score:'2 – 0',status:'finished',time:'FT'},
    {home:'Villarreal',away:'Valencia',score:'1 – 1',status:'finished',time:'FT'},
  ],
];

const WC_GROUPS_SMALL = [
  {name:'A',teams:[{flag:'🇧🇷',name:'Brazil',pts:6},{flag:'🇺🇸',name:'USA',pts:4}]},
  {name:'B',teams:[{flag:'🇦🇷',name:'Argentina',pts:6},{flag:'🇫🇷',name:'France',pts:3}]},
  {name:'C',teams:[{flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'England',pts:4},{flag:'🇩🇪',name:'Germany',pts:4}]},
  {name:'D',teams:[{flag:'🇵🇹',name:'Portugal',pts:6},{flag:'🇪🇸',name:'Spain',pts:4}]},
];

const TOP_SCORERS = [
  {name:'Vinicius Jr.',team:'Brazil',goals:4},{name:'Kylian Mbappé',team:'France',goals:3},
  {name:'Harry Kane',team:'England',goals:3},{name:'Lamine Yamal',team:'Spain',goals:2},
  {name:'Lionel Messi',team:'Argentina',goals:2},
];

const PL_TABLE = [
  {pos:1,team:'Man City',p:31,gd:'+38',pts:72},{pos:2,team:'Arsenal',p:31,gd:'+29',pts:68},
  {pos:3,team:'Liverpool',p:30,gd:'+31',pts:65},{pos:4,team:'Chelsea',p:31,gd:'+14',pts:58},
  {pos:5,team:'Aston Villa',p:31,gd:'+12',pts:55},{pos:6,team:'Tottenham',p:31,gd:'+4',pts:49},
  {pos:7,team:'Newcastle',p:31,gd:'+8',pts:46},{pos:8,team:'Brighton',p:31,gd:'+7',pts:44},
];

function buildTabs() {
  document.getElementById('flTabBar').innerHTML = FL_TABS.map((t,i) =>
    `<div class="fl-tab ${i===activeTab?'active':''}" onclick="setTab(${i})">${t}</div>`
  ).join('');
}

function setTab(i) {
  activeTab = i;
  buildTabs();
  buildMatches();
}

function buildMatches() {
  document.getElementById('flMatchList').innerHTML = FL_MATCHES[activeTab].map(m =>
    `<div class="fl-match ${m.status==='live'?'is-live':''}">
      <div class="fl-team"><span class="fl-team-flag">${m.home.split(' ')[0]}</span><span class="fl-team-name">${m.home.replace(/^\S+ /,'')}</span></div>
      <div class="fl-score-center">
        <div class="fl-score">${m.score || 'vs'}</div>
        <div class="fl-status ${m.status==='live'?'live':''}">${m.status==='live'?`<span class='live-dot'></span>${m.time}`:m.time}</div>
      </div>
      <div class="fl-team right"><span class="fl-team-flag">${m.away.split(' ')[0]}</span><span class="fl-team-name">${m.away.replace(/^\S+ /,'')}</span></div>
    </div>`
  ).join('');
}

function buildWcGroupsSmall() {
  document.getElementById('wcGroupsSmall').innerHTML = WC_GROUPS_SMALL.map(g =>
    `<div style="padding:.6rem 1.2rem;border-bottom:1px solid var(--border)">
      <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:1px;color:var(--txt3);font-weight:600;margin-bottom:.5rem">Group ${g.name}</div>
      ${g.teams.map(t=>`<div style="display:flex;align-items:center;gap:.5rem;padding:.3rem 0;font-size:.82rem"><span>${t.flag}</span><span style="flex:1;color:var(--txt)">${t.name}</span><span style="color:var(--accent3);font-weight:700;font-size:.78rem">${t.pts}pts</span></div>`).join('')}
    </div>`
  ).join('');
}

function buildTopScorers() {
  document.getElementById('topScorers').innerHTML = TOP_SCORERS.map((s,i) =>
    `<div class="top-scorer-row">
      <span class="scorer-rank">${i+1}</span>
      <div><div class="scorer-name">${s.name}</div><div class="scorer-team">${s.team}</div></div>
      <span class="scorer-goals">${s.goals} ⚽</span>
    </div>`
  ).join('');
}

function buildPLTable() {
  document.getElementById('plBody').innerHTML = PL_TABLE.map((r,i) =>
    `<tr class="${i<4?'cl':''}${i===0?'promoted':''}">
      <td class="pos">${r.pos}</td>
      <td class="team-cell">${r.team}</td>
      <td>${r.p}</td><td>${r.gd}</td>
      <td class="pts">${r.pts}</td>
    </tr>`
  ).join('');
}

buildTabs();
buildMatches();
buildWcGroupsSmall();
buildTopScorers();
buildPLTable();

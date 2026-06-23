const POSTS = [
  {id:1,author:'ViniJr_Fan',handle:'@vinijr_fan',avatar:'VF',avatarBg:'rgba(124,109,250,.2)',avatarColor:'#a99dfc',time:'2h ago',sport:'Football',sportColor:'#7c6dfa',sportBg:'rgba(124,109,250,.12)',title:'That Vinicius goal vs Argentina 🔥🔥🔥',body:'Genuinely one of the best World Cup goals I have ever seen. The stepover, the pace, the finish — absolute cinema. Brazil looking unstoppable fr.',likes:4821,comments:842,reposts:1203,liked:false,emoji:'⚽'},
  {id:2,author:'HoopsAnalytics',handle:'@hoops_analytics',avatar:'HA',avatarBg:'rgba(250,109,124,.2)',avatarColor:'#fc9daa',time:'4h ago',sport:'Basketball',sportColor:'#fa6d7c',sportBg:'rgba(250,109,124,.12)',title:'Wembanyama stat line last night was insane',body:'45 pts / 12 reb / 7 ast / 4 blk on 58% FG. He\'s 22. Let that sink in. We are watching the best player of a generation develop in real time.',likes:3102,comments:567,reposts:891,liked:false,emoji:'🏀'},
  {id:3,author:'TennisTalk_',handle:'@tennistalk_',avatar:'TT',avatarBg:'rgba(109,250,189,.2)',avatarColor:'#6dfabd',time:'6h ago',sport:'Tennis',sportColor:'#6dfabd',sportBg:'rgba(109,250,189,.12)',title:'Alcaraz vs Sinner is the rivalry we needed',body:'Both under 23. Both Grand Slam winners. Contrasting styles — Alcaraz the all-court magician, Sinner the baseline machine. The next decade of tennis is SET.',likes:2441,comments:398,reposts:610,liked:false,emoji:'🎾'},
  {id:4,author:'F1DataNerd',handle:'@f1_data_nerd',avatar:'F1',avatarBg:'rgba(250,77,77,.2)',avatarColor:'#fa4d4d',time:'8h ago',sport:'Formula 1',sportColor:'#fa4d4d',sportBg:'rgba(250,77,77,.12)',title:'Monaco GP lap time analysis — Leclerc vs Norris',body:'Leclerc\'s sector 1 through the tunnel is genuinely supernatural. 0.4s faster than anyone else on medium tyres. The Ferrari in Monaco is a cheat code.',likes:1882,comments:244,reposts:501,liked:false,emoji:'🏎️'},
  {id:5,author:'CricketDaily',handle:'@cricketdaily',avatar:'CD',avatarBg:'rgba(250,189,109,.2)',avatarColor:'#fabd6d',time:'10h ago',sport:'Cricket',sportColor:'#fabd6d',sportBg:'rgba(250,189,109,.12)',title:'India vs England Test — Rohit\'s century changes everything',body:'What a knock. 127 off 198 balls on a tricky pitch. Just pure class. England\'s bowlers had no answers. Day 3 is going to be wild.',likes:2890,comments:476,reposts:720,liked:false,emoji:'🏏'},
];

const TRENDING_TOPICS = [
  {rank:'01',name:'#WorldCup2026',count:'284K posts'},{rank:'02',name:'#ViniJrMagic',count:'142K posts'},
  {rank:'03',name:'#Wembanyama',count:'98K posts'},{rank:'04',name:'#MonacoGP',count:'76K posts'},
  {rank:'05',name:'#Wimbledon2026',count:'54K posts'},
];

const SUGGESTED_USERS = [
  {name:'ESPN FC',handle:'@espnfc',av:'ES',bg:'rgba(250,77,77,.2)',c:'#fa4d4d'},
  {name:'NBA Official',handle:'@nba',av:'NB',bg:'rgba(250,109,124,.2)',c:'#fc9daa'},
  {name:'F1 Central',handle:'@f1central',av:'F1',bg:'rgba(250,77,77,.2)',c:'#fa4d4d'},
  {name:'Cricket World',handle:'@cricketworld',av:'CW',bg:'rgba(250,189,109,.2)',c:'#fabd6d'},
];

const POST_FILTERS = ['All','Football','Basketball','Tennis','F1','Cricket','More'];
let activeFilter = 'All', following = new Set();

function buildPostFilters() {
  document.getElementById('postFilters').innerHTML = POST_FILTERS.map(f =>
    `<button class="post-filter ${f===activeFilter?'active':''}" onclick="setPostFilter('${f}',this)">${f}</button>`
  ).join('');
}

function setPostFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.post-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPosts();
}

function renderPosts() {
  const list = activeFilter === 'All' ? POSTS : POSTS.filter(p => p.sport === activeFilter);
  document.getElementById('postsContainer').innerHTML = list.map(p =>
    `<div class="post-card">
      <div class="post-header">
        <div class="avatar" style="background:${p.avatarBg};color:${p.avatarColor}">${p.avatar}</div>
        <div class="post-meta">
          <div class="post-author">${p.author} <span style="font-size:.72rem;color:var(--txt3);font-weight:400">${p.handle}</span></div>
          <div class="post-time">${p.time}</div>
        </div>
        <span class="post-sport-badge" style="background:${p.sportBg};color:${p.sportColor}">${p.emoji} ${p.sport}</span>
      </div>
      <div class="post-title">${p.title}</div>
      <div class="post-body">${p.body}</div>
      <div class="post-actions">
        <button class="post-action ${p.liked?'liked':''}" onclick="toggleLike(${p.id},this)">❤️ <span id="likes-${p.id}">${p.likes.toLocaleString()}</span></button>
        <button class="post-action">💬 ${p.comments.toLocaleString()}</button>
        <button class="post-action">🔁 ${p.reposts.toLocaleString()}</button>
        <button class="post-action" style="margin-left:auto">🔖</button>
        <button class="post-action">↗ Share</button>
      </div>
    </div>`
  ).join('');
}

function toggleLike(id, btn) {
  const post = POSTS.find(p => p.id === id);
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  btn.classList.toggle('liked', post.liked);
  document.getElementById('likes-'+id).textContent = post.likes.toLocaleString();
}

function submitPost() {
  const textarea = document.querySelector('.composer-input');
  const text = textarea.value.trim();
  if (!text) return;
  POSTS.unshift({id:Date.now(),author:'You',handle:'@you',avatar:'You',avatarBg:'rgba(124,109,250,.2)',avatarColor:'var(--accent)',time:'Just now',sport:'Football',sportColor:'#7c6dfa',sportBg:'rgba(124,109,250,.12)',title:'',body:text,likes:0,comments:0,reposts:0,liked:false,emoji:'⚽'});
  textarea.value = '';
  renderPosts();
}

function buildTrendingTopics() {
  document.getElementById('trendingTopics').innerHTML = TRENDING_TOPICS.map(t =>
    `<div class="trending-topic">
      <span class="trending-topic-rank">${t.rank}</span>
      <span class="trending-topic-name">${t.name}</span>
      <span class="trending-topic-count">${t.count}</span>
    </div>`
  ).join('');
}

function buildSuggestedUsers() {
  document.getElementById('suggestedUsers').innerHTML = SUGGESTED_USERS.map(u =>
    `<div class="suggested-user">
      <div class="avatar" style="background:${u.bg};color:${u.c};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0">${u.av}</div>
      <div class="suggested-user-info"><div class="suggested-user-name">${u.name}</div><div class="suggested-user-handle">${u.handle}</div></div>
      <button class="follow-btn-small ${following.has(u.handle)?'following':''}" onclick="toggleFollowUser('${u.handle}',this)">${following.has(u.handle)?'Following':'Follow'}</button>
    </div>`
  ).join('');
}

function toggleFollowUser(handle, btn) {
  following.has(handle) ? following.delete(handle) : following.add(handle);
  btn.textContent = following.has(handle) ? 'Following' : 'Follow';
  btn.classList.toggle('following', following.has(handle));
}

buildPostFilters();
renderPosts();
buildTrendingTopics();
buildSuggestedUsers();

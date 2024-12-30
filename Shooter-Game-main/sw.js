//PWA GAME STEP 2
const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [ //PWA GAME STEP 3
  '/Shooter-Game-main/',
  '/Shooter-Game-main/index.html',
  '/Shooter-Game-main/Game.js',
  '/Shooter-Game-main/Entity.js',
  '/Shooter-Game-main/Shot.js',
  '/Shooter-Game-main/Character.js',
  '/Shooter-Game-main/Player.js',
  '/Shooter-Game-main/Opponent.js',
  '/Shooter-Game-main/Boss.js',
  '/Shooter-Game-main/main.js',
  '/Shooter-Game-main/game.css',
  '/Shooter-Game-main/assets/boss_dead.png',
  '/Shooter-Game-main/assets/boss.png',
  '/Shooter-Game-main/assets/class.png',
  '/Shooter-Game-main/assets/game_over.png',
  '/Shooter-Game-main/assets/game.png',
  '/Shooter-Game-main/assets/opponent_dead.png',
  '/Shooter-Game-main/assets/opponent.png',
  '/Shooter-Game-main/assets/player_dead.png',
  '/Shooter-Game-main/assets/player.png',
  '/Shooter-Game-main/assets/shot1.png',
  '/Shooter-Game-main/assets/shot2.png',
  '/Shooter-Game-main/assets/you_win.png',
];

 
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
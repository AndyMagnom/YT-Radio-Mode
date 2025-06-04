let player;
let isPlaying = false;
let isLooping = false;
let currentVideoId = null;
let playerReady = false;

// Translations
const translations = {
  en: {
    'error-message': 'There is an issue loading this video. Please try again later.',
    'welcome-1': 'To use YT Radio Mode as it was intended, add this bookmarklet to your bookmarks.',
    'welcome-2': 'Then click the bookmarklet when you are on a YouTube video.',
    'welcome-3': 'Or just try out some songs below:',
    'loop': 'Loop',
    'previous': 'Previous',
    'play-pause': 'Play/Pause',
    'next': 'Next'
  },
  ar: {
    'error-message': 'يبدو أن هناك مشكلة في تحميل هذا الفيديو. يرجى المحاولة مرة أخرى لاحقًا.',
    'welcome-1': 'لاستخدام وضع الراديو كما هو مصمم، أضف هذا المفتاح إلى علامات القراءة خاصتك.',
    'welcome-2': 'ثم انقر على المفتاح عندما تكون على فيديو يوتيوب.',
    'welcome-3': 'أو جرب بعض الأغاني أدناه:',
    'loop': 'تكرار',
    'previous': 'السابق',
    'play-pause': 'تشغيل/إيقاف مؤقت',
    'next': 'التالي'
  }
};

// Initialize settings from localStorage
let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply initial settings
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update active buttons
document.querySelector(`[data-lang="${currentLang}"]`).classList.add('active');
document.querySelector(`[data-theme="${currentTheme}"]`).classList.add('active');

// Language switch handler
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localStorage.setItem('language', lang);
    updateTranslations(lang);
  });
});

// Theme switch handler
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localStorage.setItem('theme', theme);
  });
});

function updateTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Initialize translations
updateTranslations(currentLang);

const thumb = document.querySelector('.thumbnail');
const title = document.querySelector('.title');

const controls = document.querySelector('.controls');
const play_btn = document.querySelector('.play');
const restart_btn = document.querySelector('.restart');
const welcome = document.querySelector('.welcome');
const errorNotice = document.querySelector('.error-notice');

play_btn.addEventListener('click', togglePlay);
restart_btn.addEventListener('click', restart);

loadVideo(idFromUrl());

setTimeout(() => {
  if (!playerReady) {
    errorNotice.classList.remove('hidden');
  }
}, 3000);

function loadVideo(id) {
  currentVideoId = id;

  // If no video id is provided in url
  if(currentVideoId == null){
    show(welcome);
    // Set default title
    var mTitle = document.createElement('title');
    mTitle.innerText = "YT Music Mode";
    document.head.appendChild(mTitle);
    return;
  }

  setThumbnail();

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function idFromUrl() {
  var match = window.location.search.match(/id=(.*)/);
  if(match == null || match.length != 2){
    return null;
  }
  return match[1];
}

function setThumbnail() {
  var thumb = document.querySelector('.thumbnail');
  thumb.style.backgroundImage = "url('https://img.youtube.com/vi/" + currentVideoId + "/maxresdefault.jpg')"
}

function showTitle() {
  // Setting title text
  var text = player.getVideoData().title;
  title.innerText = text;

  // Setting meta title
  var mTitle = document.createElement('title');
  mTitle.innerText = text;
  document.head.appendChild(mTitle);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: currentVideoId,
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'disablekb': 1,
      'enablejsapi': 1,
      'fs': 0,
      'rel': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  playerReady = true;
  updateThumbnail();
  updateTitle();
  document.querySelector('.welcome').classList.add('hidden');
  document.querySelector('.controls').style.opacity = '1';
  document.querySelector('.title').style.opacity = '1';
  document.querySelector('.thumbnail').style.opacity = '1';
  
  // Set up progress bar updates
  setInterval(updateProgress, 1000);
  
  // Set up volume slider
  const volumeSlider = document.querySelector('.volume-slider');
  volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    player.setVolume(volume);
    updateVolumeIcon(volume);
  });

  // Update control button titles
  document.querySelector('.loop-button').title = translations[currentLang]['loop'];
  document.querySelector('.restart.button').title = translations[currentLang]['previous'];
  document.querySelector('.play.button').title = translations[currentLang]['play-pause'];
  document.querySelector('.next-button').title = translations[currentLang]['next'];

  // Add click handlers for controls
  document.querySelector('.play.button').addEventListener('click', togglePlay);
  document.querySelector('.restart.button').addEventListener('click', restart);
  document.querySelector('.loop-button').addEventListener('click', toggleLoop);
  document.querySelector('.next-button').addEventListener('click', nextVideo);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    document.querySelector('.play.button').innerHTML = '<span class="material-icons">pause</span>';
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    document.querySelector('.play.button').innerHTML = '<span class="material-icons">play_arrow</span>';
  } else if (event.data === YT.PlayerState.ENDED) {
    if (isLooping) {
      player.seekTo(0);
      player.playVideo();
    } else {
      isPlaying = false;
      document.querySelector('.play.button').innerHTML = '<span class="material-icons">play_arrow</span>';
    }
  }
}

function onPlayerError(event) {
  document.querySelector('.error-notice').classList.remove('hidden');
}

function updateProgress() {
  if (!player || !playerReady) return;
  
  const currentTime = player.getCurrentTime();
  const duration = player.getDuration();
  
  if (duration) {
    const progress = (currentTime / duration) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
    
    // Update time display
    document.querySelector('.current-time').textContent = formatTime(currentTime);
    document.querySelector('.duration').textContent = formatTime(duration);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function updateVolumeIcon(volume) {
  const volumeIcon = document.querySelector('.volume-icon');
  if (volume === 0) {
    volumeIcon.textContent = 'volume_off';
  } else if (volume < 50) {
    volumeIcon.textContent = 'volume_down';
  } else {
    volumeIcon.textContent = 'volume_up';
  }
}

function togglePlay() {
  if (!player || !playerReady) return;
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function toggleLoop() {
  if (!player || !playerReady) return;
  isLooping = !isLooping;
  document.querySelector('.loop-button').classList.toggle('active');
}

function restart() {
  if (!player || !playerReady) return;
  player.seekTo(0);
  player.playVideo();
}

function nextVideo() {
  if (!player || !playerReady) return;
  // For now, just restart the current video
  // In the future, this could be implemented to play the next video in a playlist
  player.seekTo(0);
  player.playVideo();
}

function updateThumbnail() {
  const videoId = currentVideoId;
  if (videoId) {
    document.querySelector('.thumbnail').style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`;
  }
}

function updateTitle() {
  if (player && player.getVideoData) {
    const title = player.getVideoData().title;
    document.querySelector('.title').textContent = title;
  }
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function fadeIn(element) {
  element.classList.add('fade-in');
}

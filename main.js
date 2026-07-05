const CONFIG = {
  liveDomain: 'andymagnom.github.io',
  defaultThumb: 'https://img.youtube.com/vi/{id}/hqdefault.jpg',
  demoTracks: [
    { id: '8GW6sLrK40k', title: 'HOME - Resonance' },
    { id: 'wtq6FnM3c8U', title: "Nicopatty - Nico's Nextbots OST" },
    { id: 'duPJqfKiA78', title: 'Hatsune Miku - Triple Baka' },
    { id: 'rXLS7boKQxM', title: '𝘙𝘢ยด - ريمكس دمتي امي' },
    { id: 'svEtOP-s7H4', title: 'Birmo Salva - حكاية أبطال - اغنية فلسطين' }
  ]
};

const TRANSLATIONS = {
  en: {
    err_load: "Playback issue. This video might have restrictions. Skipping...",
    err_invalid: "Invalid YouTube link or ID.",
    welc_1: "To use <b>YT Radio Mode</b> seamlessly, install the <a href='https://gist.github.com/dotspencer/9d7eebe3a2140dbeace9d3ece5671bf1/raw/'>Userscript</a>.",
    btn_demo: "⚡ Play Sample Songs",
    queue_title: "Play Queue",
    clear: "Clear All",
    search_place: "Paste YouTube link here...",
    notice_head: "Why do some videos fail?",
    notice_body: "YouTube blocks embedding/playback on external domains for specific music videos, regional licenses, or content explicitly marked age-restricted. If a video refuses to load or errors out, it is caused directly by these API system restrictions.",
    resume_text: "Resume from where you left off?",
    resume_yes: "Continue",
    resume_no: "Start Over"
  },
  ar: {
    err_load: "مشكلة في التشغيل. قد يحتوي هذا الفيديو على قيود. يتم التخطي...",
    err_invalid: "رابط أو معرف يوتيوب غير صالح.",
    welc_1: "لإستخدام <b>وضع راديو يوتيوب</b> بسلاسة، قم بتثبيت هذا <a href='https://gist.github.com/dotspencer/9d7eebe3a2140dbeace9d3ece5671bf1/raw/'>السكربت</a>.",
    btn_demo: "⚡ تشغيل الأغاني التجريبية",
    queue_title: "قائمة التشغيل",
    clear: "مسح الكل",
    search_place: "إلصق رابط اليوتيوب هنا...",
    notice_head: "لماذا تفشل بعض الفيديوهات؟",
    notice_body: "يقوم يوتيوب بحظر تشغيل أو تضمين مقاطع معينة على المواقع الخارجية لأسباب تتعلق بحقوق النشر، التراخيص الإقليمية، أو تصنيف المحتوى للبالغين. حدوث خطأ أو توقف الأغنية فجأة يعود لهذه القيود البرمجية المفروضة من السيرفر الرئيسي.",
    resume_text: "هل تريد المتابعة من حيث توقفت؟",
    resume_yes: "متابعة",
    resume_no: "البدء من جديد"
  }
};

const App = {
  player: null,
  queue: [],
  currentIndex: -1,
  loopMode: 'off', 
  autoPlay: true,
  isPlaying: false,
  isMuted: false,
  savedVolume: 100,
  currentSpeed: 1,
  currentLanguage: 'en',
  currentTheme: 'dark',
  updateLoop: null,
  restartClickTimer: null,
  awesomeSequence: '',
  isAwesomeMode: false,
  errorTimer: null,
  lastSavedSec: 0,
  pendingResumeTime: 0,

  init() {
    this.loadSettings();
    this.bindDOMEvents();
    this.bindGlobalShortcuts();
    this.bindEasterEgg();
    this.checkUrlParam();
    this.loadYouTubeAPI();
  },

  isTextRtl(text) {
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
  },  

  setPlayerTitle(text) {
    const titleEl = document.getElementById('player-title');
    const containerEl = titleEl ? titleEl.parentElement : null;
    if (!titleEl || !containerEl) return;

    const isRtl = this.isTextRtl(text);

    titleEl.classList.remove('scrolling-text', 'ltr-text', 'rtl-text');
    containerEl.classList.remove('rtl-container');

    titleEl.style.direction = isRtl ? 'rtl' : 'ltr';
    titleEl.style.textAlign = 'center';
    
    titleEl.innerHTML = `<span>${text}</span>`;

    requestAnimationFrame(() => {
      const singleSpanWidth = titleEl.querySelector('span').scrollWidth;
      const overflow = singleSpanWidth - containerEl.clientWidth;
      
      if (overflow > 0) {
        titleEl.innerHTML = `<span>${text}</span><span>${text}</span>`;
        titleEl.style.textAlign = isRtl ? 'right' : 'left';
        
        if (isRtl) {
          containerEl.classList.add('rtl-container');
          titleEl.classList.add('rtl-text');
        } else {
          titleEl.classList.add('ltr-text');
        }
        titleEl.classList.add('scrolling-text');
      }
    });
  },

  setTheme(themeName) {
    this.currentTheme = themeName;
    localStorage.setItem('ytrm_theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    
    const themeIcon = document.getElementById('icon-theme');
    if (themeIcon) themeIcon.textContent = themeName === 'dark' ? 'light_mode' : 'dark_mode';
    
    const logoEl = document.getElementById('app-logo');
    const faviconEl = document.getElementById('app-favicon');
    if (logoEl && faviconEl) {
      logoEl.src = themeName === 'light' ? 'img/logo-dark.png' : 'img/logo.png';
      faviconEl.href = themeName === 'light' ? 'img/favicon-dark.png' : 'img/favicon.png';
    }
  },

  setLanguage(langCode) {
    this.currentLanguage = langCode;
    localStorage.setItem('ytrm_lang', langCode);
    document.documentElement.lang = langCode;
    
    const langToggle = document.getElementById('toggle-lang');
    if (langToggle) langToggle.textContent = langCode === 'en' ? 'AR' : 'EN';
    
    document.querySelectorAll('.lang-target').forEach(el => {
      langCode === 'ar' ? el.classList.add('rtl-text') : el.classList.remove('rtl-text');
    });
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[langCode][key]) el.innerHTML = TRANSLATIONS[langCode][key];
    });
    
    document.querySelectorAll('[data-i18n-holder]').forEach(el => {
      const key = el.getAttribute('data-i18n-holder');
      if (TRANSLATIONS[langCode][key]) el.placeholder = TRANSLATIONS[langCode][key];
    });
  },

  updateVolumeUI(vol) {
    const volIcon = document.getElementById('icon-volume');
    const volSlider = document.getElementById('slider-volume');
    
    if (volSlider && volSlider.value != vol) volSlider.value = vol;
    
    if (volIcon) {
      if (vol === 0) volIcon.textContent = "volume_off";
      else if (vol < 50) volIcon.textContent = "volume_down";
      else volIcon.textContent = "volume_up";
    }
  },

  saveQueueState() {
    localStorage.setItem('ytrm_queue', JSON.stringify(this.queue));
    localStorage.setItem('ytrm_currentIndex', this.currentIndex);
  },

  loadSettings() {
    if (localStorage.getItem('ytrm_notice_closed') === 'true') {
      const noticeEl = document.getElementById('playback-notice');
      if (noticeEl) noticeEl.classList.add('hidden');
    }
    
    const savedTheme = localStorage.getItem('ytrm_theme') || 'dark';
    this.setTheme(savedTheme);

    const savedLang = localStorage.getItem('ytrm_lang') || 'en';
    this.setLanguage(savedLang);

    const savedVol = parseInt(localStorage.getItem('ytrm_vol'), 10);
    this.savedVolume = (isNaN(savedVol) || savedVol === 0) ? 100 : savedVol;
    this.isMuted = localStorage.getItem('ytrm_muted') === 'true';
    this.updateVolumeUI(this.isMuted ? 0 : this.savedVolume);

    const savedAutoplay = localStorage.getItem('ytrm_autoplay');
    if (savedAutoplay !== null) {
      this.autoPlay = savedAutoplay === 'true';
      const autoPlayBtn = document.getElementById('ctrl-autoplay');
      if (autoPlayBtn) autoPlayBtn.classList.toggle('active', this.autoPlay);
    }

    const savedSpeed = parseFloat(localStorage.getItem('ytrm_speed'));
    if (!isNaN(savedSpeed)) {
      this.currentSpeed = savedSpeed;
      const speedSlider = document.getElementById('slider-speed');
      const speedLabel = document.getElementById('label-speed');
      if (speedSlider) speedSlider.value = savedSpeed;
      if (speedLabel) speedLabel.textContent = `${savedSpeed}x`;
    }

    const savedQueue = localStorage.getItem('ytrm_queue');
    const savedIndex = parseInt(localStorage.getItem('ytrm_currentIndex'), 10);
    const savedTime = parseFloat(localStorage.getItem('ytrm_currentTime'));

    if (savedQueue) {
      try {
        this.queue = JSON.parse(savedQueue);
        this.renderQueue();

        if (this.queue.length > 0 && !isNaN(savedIndex) && savedIndex >= 0) {
          this.currentIndex = savedIndex;
          if (savedTime > 0) {
            this.pendingResumeTime = savedTime;
          }
        }
      } catch (e) {
        console.error("Failed to parse saved queue");
      }
    }
  },

  loadYouTubeAPI() {
    window.onYouTubeIframeAPIReady = () => this.buildPlayer();
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  },

  buildPlayer() {
    const playerVars = {
      'playsinline': 1,
      'controls': 0,
      'disablekb': 1
    };

    if (window.location.protocol.startsWith('http')) {
      playerVars['origin'] = window.location.origin || `https://${CONFIG.liveDomain}`;
    }

    this.player = new YT.Player('yt-hidden-player', {
      playerVars: playerVars,
      events: {
        'onReady': () => this.onPlayerReady(),
        'onStateChange': (e) => this.onPlayerStateChange(e),
        'onError': () => this.onPlayerError()
      }
    });
  },

  onPlayerReady() {
    const defaultVol = this.isMuted ? 0 : this.savedVolume;
    if (this.player.setVolume) this.player.setVolume(defaultVol);
    
    if (this.queue.length > 0 && this.currentIndex !== -1) {
      document.getElementById('panel-welcome').classList.add('hidden');
      this.setPlayerTitle(this.queue[this.currentIndex].title);
      document.getElementById('player-thumbnail').style.backgroundImage = `url('${CONFIG.defaultThumb.replace('{id}', this.queue[this.currentIndex].id)}')`;

      if (this.pendingResumeTime > 0) {
        document.getElementById('notice-resume').classList.remove('hidden');
      } else {
        this.playAtIndex(this.currentIndex);
      }
    } else if (this.queue.length > 0) {
      this.playAtIndex(0);
    }
  },

  onPlayerStateChange(event) {
    const playIcon = document.getElementById('icon-play-state');

    switch(event.data) {
      case YT.PlayerState.PLAYING:
        this.isPlaying = true;
        playIcon.textContent = "pause";
        document.getElementById('notice-error').classList.add('hidden');
        if(this.player && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(this.currentSpeed);
        }
        this.startProgressTracker();
        break;
      case YT.PlayerState.PAUSED:
        this.isPlaying = false;
        playIcon.textContent = "play_arrow";
        clearInterval(this.updateLoop);
        break;
      case YT.PlayerState.ENDED:
        this.isPlaying = false;
        playIcon.textContent = "play_arrow";
        clearInterval(this.updateLoop);
        
        if (this.loopMode === 'one') {
          this.player.seekTo(0);
          this.player.playVideo();
        } else if (this.loopMode === 'all' && this.currentIndex === this.queue.length - 1) {
          this.playAtIndex(0);
        } else if (this.autoPlay) {
          this.next();
        }
        break;
    }
  },

  onPlayerReady() {
    const defaultVol = this.isMuted ? 0 : this.savedVolume;
    if (this.player.setVolume) this.player.setVolume(defaultVol);
    
    if (this.queue.length > 0 && this.currentIndex !== -1) {
      document.getElementById('panel-welcome').classList.add('hidden');
      this.setPlayerTitle(this.queue[this.currentIndex].title);
      document.getElementById('player-thumbnail').style.backgroundImage = `url('${CONFIG.defaultThumb.replace('{id}', this.queue[this.currentIndex].id)}')`;

      if (this.pendingResumeTime > 0) {
        if (this.player && this.player.cueVideoById) {
          this.player.cueVideoById({
            videoId: this.queue[this.currentIndex].id,
            startSeconds: this.pendingResumeTime,
            suggestedQuality: 'default'
          });
        }
        document.getElementById('notice-resume').classList.remove('hidden');
      } else {
        this.playAtIndex(this.currentIndex);
      }
    } else if (this.queue.length > 0) {
      this.playAtIndex(0);
    }
  },

  addToQueue(id, title = "Loading Track...") {
    if (!id) return;
    if (this.queue.some(item => item.id === id)) return;

    const newItem = { id, title, isErrored: false };
    this.queue.push(newItem);
    this.saveQueueState();
    this.renderQueue();

    this.fetchTrackMetadata(newItem);

    if (this.currentIndex === -1) {
      this.playAtIndex(this.queue.length - 1);
    }
  },

  fetchTrackMetadata(item) {
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${item.id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.title) {
          item.title = data.title;
          this.saveQueueState(); 
          this.renderQueue();
          if (this.currentIndex !== -1 && this.queue[this.currentIndex].id === item.id) {
            this.setPlayerTitle(data.title);
          }
        }
      })
      .catch(() => {});
  },

  playAtIndex(index, startTime = 0) {
    if (index < 0 || index >= this.queue.length) return;
    if (this.queue[index].isErrored) return;

    document.getElementById('notice-resume').classList.add('hidden');

    this.currentIndex = index;
    this.saveQueueState(); 
    
    localStorage.removeItem('ytrm_currentTime');
    this.lastSavedSec = 0;
    
    this.renderQueue();
    document.getElementById('panel-welcome').classList.add('hidden');

    if (this.player && this.player.loadVideoById) {
      this.player.loadVideoById({
        videoId: this.queue[index].id,
        startSeconds: startTime, 
        suggestedQuality: 'default'
      });
    }

    this.setPlayerTitle(this.queue[index].title);
    document.getElementById('player-thumbnail').style.backgroundImage = `url('${CONFIG.defaultThumb.replace('{id}', this.queue[index].id)}')`;
  },

  next() {
    let targetIndex = this.currentIndex + 1;
    while (targetIndex < this.queue.length && this.queue[targetIndex].isErrored) {
      targetIndex++;
    }

    if (targetIndex < this.queue.length) {
      this.playAtIndex(targetIndex);
    } else if (this.loopMode === 'all') {
      this.playAtIndex(0);
    }
  },

  previous() {
    let targetIndex = this.currentIndex - 1;
    while (targetIndex >= 0 && this.queue[targetIndex].isErrored) {
      targetIndex--;
    }

    if (targetIndex >= 0) {
      this.playAtIndex(targetIndex);
    }
  },

  renderQueue() {
    const list = document.getElementById('queue-list');
    if(!list) return;
    list.innerHTML = '';

    this.queue.forEach((item, index) => {
      const row = document.createElement('div');
      let classes = ['queue-item'];
      if (index === this.currentIndex) classes.push('active');
      if (item.isErrored) classes.push('errored');
      row.className = classes.join(' ');

      row.innerHTML = `
        <div class="qi-thumb" style="background-image: url('${CONFIG.defaultThumb.replace('{id}', item.id)}')"></div>
        <div class="qi-info">
          <div class="qi-title-wrapper">
            <div class="qi-title">${item.title}</div>
          </div>
        </div>
        <button class="btn-link" title="Open original video" data-id="${item.id}">
          <span class="material-icons">open_in_new</span>
        </button>
        <button class="btn-remove" data-index="${index}"><span class="material-icons">close</span></button>
      `;

      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove') || e.target.closest('.btn-link')) return;
        this.playAtIndex(index);
      });

      row.querySelector('.btn-link').addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://www.youtube.com/watch?v=${e.currentTarget.getAttribute('data-id')}`, '_blank');
      });

      row.querySelector('.btn-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        this.removeFromQueue(index);
      });

      list.appendChild(row);

      requestAnimationFrame(() => {
        const titleEl = row.querySelector('.qi-title');
        const wrapperEl = row.querySelector('.qi-title-wrapper');
        if (titleEl && wrapperEl) {
          const isRtl = this.isTextRtl(item.title);
          
          titleEl.classList.remove('scrolling-text', 'ltr-text', 'rtl-text');
          wrapperEl.classList.remove('rtl-container');
          
          titleEl.style.direction = isRtl ? 'rtl' : 'ltr';
          titleEl.style.textAlign = 'center';
          titleEl.innerHTML = `<span>${item.title}</span>`;
          
          const singleSpanWidth = titleEl.querySelector('span').scrollWidth;
          const overflow = singleSpanWidth - wrapperEl.clientWidth;
          
          if (overflow > 0) {
            titleEl.innerHTML = `<span>${item.title}</span><span>${item.title}</span>`;
            titleEl.style.textAlign = isRtl ? 'right' : 'left';
            
            if (isRtl) {
              wrapperEl.classList.add('rtl-container');
              titleEl.classList.add('rtl-text');
            } else {
              titleEl.classList.add('ltr-text');
            }
            titleEl.classList.add('scrolling-text');
          }
        }
      });
    });
  },

  removeFromQueue(index) {
    this.queue.splice(index, 1);
    if (this.currentIndex === index) {
      if (this.queue.length === 0) {
        this.currentIndex = -1;
        if (this.player) this.player.stopVideo();
        this.setPlayerTitle('No track playing');
        document.getElementById('player-thumbnail').style.backgroundImage = 'none';
        document.getElementById('panel-welcome').classList.remove('hidden');
      } else {
        this.playAtIndex(Math.min(index, this.queue.length - 1));
      }
    } else if (this.currentIndex > index) {
      this.currentIndex--;
    }
    this.renderQueue();
    this.saveQueueState(); 
  },

  extractVideoId(input) {
    const cleanInput = input.trim();
    
    if (/^[a-zA-Z0-9_-]{11}$/.test(cleanInput)) {
      return cleanInput;
    }

    if (cleanInput.includes('/shorts/')) {
      const shortsMatch = cleanInput.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
      if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
    }
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = cleanInput.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  },

  startProgressTracker() {
    clearInterval(this.updateLoop);
    const fill = document.getElementById('progress-fill');
    const curEl = document.getElementById('time-current');
    const totEl = document.getElementById('time-total');

    this.updateLoop = setInterval(() => {
      if (!this.player || !this.player.getCurrentTime) return;
      const current = this.player.getCurrentTime();
      const duration = this.player.getDuration();

      if (duration > 0) {
        const pct = (current / duration) * 100;
        fill.style.width = `${pct}%`;
        curEl.textContent = this.formatTime(current);
        totEl.textContent = this.formatTime(duration);
        
        const currentSec = Math.floor(current);
        if (currentSec > 0 && currentSec % 5 === 0 && this.lastSavedSec !== currentSec) {
          localStorage.setItem('ytrm_currentTime', currentSec);
          this.lastSavedSec = currentSec;
        }
      }
    }, 350);
  },

  formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}` : `${m}:${s < 10 ? '0' : ''}${s}`;
  },

  changeSpeed(val) {
    let speed = parseFloat(val);
    if (isNaN(speed)) return;
    if (speed < 0.25) speed = 0.25;
    if (speed > 4.0) speed = 4.0;
    
    this.currentSpeed = speed;
    document.getElementById('slider-speed').value = speed;
    document.getElementById('label-speed').textContent = `${speed}x`;

    localStorage.setItem('ytrm_speed', speed);

    if (this.player && this.player.setPlaybackRate) {
      this.player.setPlaybackRate(speed);
    }
  },

  toggleMute() {
    if (!this.player) return;
    
    this.isMuted = !this.isMuted;
    this.player.setVolume(this.isMuted ? 0 : this.savedVolume);
    this.updateVolumeUI(this.isMuted ? 0 : this.savedVolume);
    
    localStorage.setItem('ytrm_muted', this.isMuted); 
  },

  cycleLoopMode() {
    const loopBtn = document.getElementById('ctrl-loop');
    const loopIcon = document.getElementById('icon-loop');
    if (this.loopMode === 'off') {
      this.loopMode = 'all';
      loopBtn.className = 'btn-icon active-all';
      loopIcon.textContent = 'repeat';
      loopBtn.title = 'Repeat Queue (Shift+L)';
    } else if (this.loopMode === 'all') {
      this.loopMode = 'one';
      loopBtn.className = 'btn-icon active-one';
      loopIcon.textContent = 'repeat_one';
      loopBtn.title = 'Repeat Current Song (Shift+L)';
    } else {
      this.loopMode = 'off';
      loopBtn.className = 'btn-icon';
      loopIcon.textContent = 'repeat';
      loopBtn.title = 'Loop Modes Off (Shift+L)';
    }
  },

  togglePlayPause() {
    if (!this.player) return;
    this.isPlaying ? this.player.pauseVideo() : this.player.playVideo();
  },

  bindDOMEvents() {
    document.getElementById('ctrl-play').addEventListener('click', () => this.togglePlayPause());
    document.getElementById('ctrl-loop').addEventListener('click', () => this.cycleLoopMode());
    
    document.getElementById('ctrl-autoplay').addEventListener('click', () => {
      this.autoPlay = !this.autoPlay;
      document.getElementById('ctrl-autoplay').classList.toggle('active', this.autoPlay);
      localStorage.setItem('ytrm_autoplay', this.autoPlay); 
    });

    document.getElementById('ctrl-restart').addEventListener('click', () => {
      if (!this.player) return;
      if (this.restartClickTimer) {
        clearTimeout(this.restartClickTimer);
        this.restartClickTimer = null;
        this.previous();
      } else {
        this.restartClickTimer = setTimeout(() => {
          this.restartClickTimer = null;
          this.player.seekTo(0);
        }, 300);
      }
    });
    
    document.getElementById('ctrl-next').addEventListener('click', () => this.next());

    document.getElementById('progress-timeline').addEventListener('click', (e) => {
      if (!this.player || !this.player.getDuration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      this.player.seekTo(pct * this.player.getDuration());
    });

    const btnCloseNotice = document.getElementById('btn-close-notice');
    if (btnCloseNotice) {
      btnCloseNotice.addEventListener('click', () => {
        document.getElementById('playback-notice').classList.add('hidden');
        localStorage.setItem('ytrm_notice_closed', 'true'); 
      });
    }

    const toggleNotice = document.getElementById('toggle-notice');
    if (toggleNotice) {
      toggleNotice.addEventListener('click', () => {
        const noticeEl = document.getElementById('playback-notice');
        if (noticeEl) {
          const isHidden = noticeEl.classList.toggle('hidden');
          localStorage.setItem('ytrm_notice_closed', isHidden);
        }
      });
    }

    const btnResumeYes = document.getElementById('btn-resume-yes');
    if(btnResumeYes) {
      btnResumeYes.addEventListener('click', () => {
        document.getElementById('notice-resume').classList.add('hidden');
        this.playAtIndex(this.currentIndex, this.pendingResumeTime);
        this.pendingResumeTime = 0;
      });
    }

    const btnResumeNo = document.getElementById('btn-resume-no');
    if(btnResumeNo) {
      btnResumeNo.addEventListener('click', () => {
        document.getElementById('notice-resume').classList.add('hidden');
        this.playAtIndex(this.currentIndex, 0); 
        this.pendingResumeTime = 0;
      });
    }

    document.getElementById('btn-clear-queue').addEventListener('click', () => {
      this.queue = []; 
      this.currentIndex = -1;
      this.saveQueueState();
      localStorage.removeItem('ytrm_currentTime');
      
      if (this.player) this.player.stopVideo();
      this.setPlayerTitle('No track playing');
      document.getElementById('player-thumbnail').style.backgroundImage = 'none';
      this.renderQueue();
      document.getElementById('panel-welcome').classList.remove('hidden');
    });

    document.getElementById('ctrl-mute').addEventListener('click', () => this.toggleMute());
    document.getElementById('slider-volume').addEventListener('input', (e) => {
      if (!this.player) return;
      const vol = parseInt(e.target.value);
      this.player.setVolume(vol);
      this.isMuted = (vol === 0);
      
      if (vol > 0) this.savedVolume = vol;
      localStorage.setItem('ytrm_vol', vol);
      localStorage.setItem('ytrm_muted', this.isMuted);
      this.updateVolumeUI(vol);
    });

    document.getElementById('slider-speed').addEventListener('input', (e) => {
      this.changeSpeed(e.target.value);
    });
    document.getElementById('ctrl-speed').addEventListener('click', () => {
      let target = this.currentSpeed + 0.25;
      if (target > 4) target = 0.25;
      this.changeSpeed(target);
    });

    document.getElementById('toggle-lang').addEventListener('click', () => {
      const targetLang = this.currentLanguage === 'en' ? 'ar' : 'en';
      this.setLanguage(targetLang);
    });

    document.getElementById('toggle-theme').addEventListener('click', () => {
      const targetTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(targetTheme);
    });

    const triggerSearch = () => {
      const input = document.getElementById('input-search');
      const query = input.value.trim();
      if (!query) return;
      const parsedId = this.extractVideoId(query);
      if (parsedId) {
        this.addToQueue(parsedId, "Custom Track Link");
      } else {
        const toast = document.getElementById('notice-error');
        toast.querySelector('[data-i18n]').innerHTML = TRANSLATIONS[this.currentLanguage].err_invalid;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
      }
      input.value = '';
    };

    document.getElementById('btn-search').addEventListener('click', triggerSearch);
    document.getElementById('input-search').addEventListener('keydown', (e) => { 
      if (e.key === 'Enter') triggerSearch(); 
    });

    document.querySelectorAll('.hover-flyout-container').forEach(container => {
      container.addEventListener('mouseleave', () => {
        const input = container.querySelector('input[type="range"]');
        if (input && document.activeElement === input) {
          input.blur();
        }
      });
    });

    document.getElementById('btn-load-demo').addEventListener('click', () => {
      CONFIG.demoTracks.forEach(track => this.addToQueue(track.id, track.title));
    });
  },

  bindGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      const activeTag = e.target.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

      const key = e.key.toLowerCase();

      if (e.key === ' ' || key === 'k') {
        e.preventDefault();
        this.togglePlayPause();
      }
      else if (key === 'm') {
        this.toggleMute();
      }
      else if (key === 'a') {
        this.autoPlay = !this.autoPlay;
        document.getElementById('ctrl-autoplay').classList.toggle('active', this.autoPlay);
        localStorage.setItem('ytrm_autoplay', this.autoPlay);
      }
      else if (e.shiftKey && key === 'n') {
        this.next();
      }
      else if (e.shiftKey && key === 'p') {
        this.previous();
      }
      else if (e.shiftKey && key === 'l') {
        this.cycleLoopMode();
      }
      else if (e.key === '>' || e.key === '.') {
        this.changeSpeed(this.currentSpeed + 0.25);
      }
      else if (e.key === '<' || e.key === ',') {
        this.changeSpeed(this.currentSpeed - 0.25);
      }
      else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const slider = document.getElementById('slider-volume');
        slider.value = Math.min(100, parseInt(slider.value) + 5);
        slider.dispatchEvent(new Event('input'));
      }
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const slider = document.getElementById('slider-volume');
        slider.value = Math.max(0, parseInt(slider.value) - 5);
        slider.dispatchEvent(new Event('input'));
      }
      else if (e.key === 'ArrowRight') {
        if (!this.player || !this.player.getCurrentTime) return;
        this.player.seekTo(this.player.getCurrentTime() + 5, true);
      }
      else if (e.key === 'ArrowLeft') {
        if (!this.player || !this.player.getCurrentTime) return;
        this.player.seekTo(Math.max(0, this.player.getCurrentTime() - 5), true);
      }
    });
  },

  bindEasterEgg() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      this.awesomeSequence += e.key.toLowerCase();
      
      if (this.awesomeSequence.length > 7) {
        this.awesomeSequence = this.awesomeSequence.slice(-7);
      }

      if (this.awesomeSequence === 'awesome') {
        this.isAwesomeMode = !this.isAwesomeMode;
        const progressFill = document.getElementById('progress-fill');
        
        if (this.isAwesomeMode) {
          progressFill.classList.add('awesome-mode');
        } else {
          progressFill.classList.remove('awesome-mode');
        }
        this.awesomeSequence = '';
      }
    });
  },

  checkUrlParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const redirPath = urlParams.get('redir_path');
    const redirSearch = urlParams.get('redir_search');

    const addAndPlayImmediately = (id, fallbackTitle) => {
      const existingIndex = this.queue.findIndex(item => item.id === id);
      
      if (existingIndex !== -1) {
        this.playAtIndex(existingIndex);
      } else {
        const newItem = { id, title: fallbackTitle, isErrored: false };
        this.queue.push(newItem);
        this.saveQueueState();
        this.renderQueue();
        this.fetchTrackMetadata(newItem);
        
        this.playAtIndex(this.queue.length - 1);
      }
    };

    if (idParam) {
      addAndPlayImmediately(idParam, "Shared Audio Link");
      return;
    }

    if (window.location.pathname.includes('/watch') || window.location.pathname.includes('/shorts')) {
      const parsedId = this.extractVideoId(window.location.href);
      if (parsedId) {
        window.history.replaceState({}, document.title, '/');
        addAndPlayImmediately(parsedId, "Direct Link Track");
        return;
      }
    }

    if (redirPath) {
      const decodedPath = decodeURIComponent(redirPath);
      const decodedSearch = redirSearch ? decodeURIComponent(redirSearch) : '';
      const fakeFullUrl = `https://youtube.com${decodedPath}${decodedSearch}`;
      const parsedId = this.extractVideoId(fakeFullUrl);
      
      if (parsedId) {
        window.history.replaceState({}, document.title, '/');
        addAndPlayImmediately(parsedId, "Redirected Track");
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
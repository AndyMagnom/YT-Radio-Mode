const CONFIG = {
  liveDomain: 'andymagnom.github.io',
  defaultThumb: 'https://img.youtube.com/vi/{id}/hqdefault.jpg',
  proxyTiers: [
    {
      type: 'piped',
      instances: [
        'https://pipedapi.kavin.rocks',
        'https://pipedapi-libre.kavin.rocks',
        'https://pipedapi.adminforge.de',
        'https://api.piped.yt',
        'https://pipedapi.r4fo.com',
        'https://pipedapi.owo.si',
      ],
    },
    {
      type: 'invidious',
      instances: [
        'https://inv.nadeko.net',
        'https://invidious.nerdvpn.de',
        'https://invidious.f5.si',
        'https://invidious.tiekoetter.com',
      ],
    },
  ],
  maxPlaylistTracks: 300,
  demoTracks: [
    { id: '8GW6sLrK40k', title: 'HOME - Resonance' },
    { id: 'wtq6FnM3c8U', title: "Nicopatty - Nico's Nextbots OST" },
    { id: 'duPJqfKiA78', title: 'Hatsune Miku - Triple Baka' },
    { id: 'BHu5JM1v7dY', title: 'Joji - Die For You' },
    { id: 'svEtOP-s7H4', title: 'Birmo Salva - حكاية أبطال - اغنية فلسطين' }
  ]
};

const TRANSLATIONS = {
  en: {
    no_track: " No track playing",
    err_load: "Playback issue. This video might have restrictions. Skipping...",
    err_restricted: "YouTube blocks this video here. Try the alt-server fallback player.",
    err_try_invidious: "Try Alt Server",
    err_invalid: "Invalid YouTube link or ID.",
    iv_playing: "Switched to alt server — YouTube blocks this video here",
    iv_badge: "Alt Server",
    iv_back: "Back to YouTube player",
    iv_label: "Custom alt-server URL (Piped or Invidious)",
    iv_save: "Save",
    iv_note: "Public instances change often — if playback fails, try a different one.",
    err_iv_allfailed: "None of the alt servers could play this. Try again later, or set a custom instance via the swap-icon settings.",
    iv_trying: "Trying another alt server ({n}/{total})…",
    pl_loading: "Loading playlist…",
    pl_added: "Added {n} tracks from the playlist",
    pl_added_none: "Every track in that playlist is already in your queue",
    err_playlist_failed: "Couldn't load that playlist from any alt server. Try a different instance in settings, or add individual video links instead.",
    welc_1: "To use <b>YT Radio Mode</b> seamlessly, install the <a href='https://github.com/AndyMagnom/YT-Radio-Mode#-companion-userscript'>Userscript</a>.",
    btn_demo: "Play Sample Tracks",
    queue_title: "Play Queue",
    clear: "Clear All",
    search_place: "YouTube link or playlist here...",
    notice_head: "Why do some videos fail?",
    notice_body: "YouTube may block embedding certain videos on external websites due to copyright restrictions, regional limitations, or age-restricted content. When this happens, the app automatically tries to play the video through an alternative server (Piped, then Invidious) and displays a brief message letting you know it has switched. If playback also fails on all available servers, the song is skipped automatically.",
    resume_text: "Resume from where you left off?",
    resume_yes: "Continue",
    resume_no: "Start Over",
    sc_title: "Keyboard shortcuts",
    sc_play: "Play / Pause",
    sc_mute: "Mute / Unmute",
    sc_autoplay: "Toggle Autoplay",
    sc_next: "Next Track",
    sc_prev: "Previous Track",
    sc_loop: "Cycle Loop Mode",
    sc_seekback: "Seek Back 5s",
    sc_seekfwd: "Seek Forward 5s",
    sc_volup: "Volume Up",
    sc_voldown: "Volume Down",
    sc_slower: "Slower Playback",
    sc_faster: "Faster Playback",
    sc_toggle: "Toggle This Menu",
    layout_title: "Queue &amp; Player Size",
    layout_fixed: "Fixed size",
    layout_fixed_desc: "Player and queue box never resize",
    layout_expanded: "Expands with queue",
    layout_expanded_desc: "Player and queue grow as you add tracks"
  },
  ar: {
    no_track: "لا يوجد مقطع مشغّل",
    err_load: "مشكلة في التشغيل. قد يحتوي هذا الفيديو على قيود. يتم التخطي...",
    err_restricted: "يوتيوب يمنع تشغيل هذا الفيديو هنا. جرّب المشغّل البديل.",
    err_try_invidious: "جرّب السيرفر البديل",
    err_invalid: "رابط أو معرف يوتيوب غير صالح.",
    iv_playing: "تم التحويل إلى سيرفر بديل — يوتيوب يمنع تشغيل هذا الفيديو هنا",
    iv_badge: "سيرفر بديل",
    iv_back: "الرجوع لمشغّل يوتيوب",
    iv_label: "رابط سيرفر بديل مخصص (Piped أو Invidious)",
    iv_save: "حفظ",
    iv_note: "السيرفرات العامة تتغير كثيرًا — إذا فشل التشغيل، جرّب سيرفر آخر.",
    err_iv_allfailed: "لم يستطع أي سيرفر بديل تشغيل هذا الفيديو. حاول لاحقًا، أو حدد سيرفرًا مخصصًا من إعدادات أيقونة التبديل.",
    iv_trying: "جارِ تجربة سيرفر بديل آخر ({n}/{total})…",
    pl_loading: "جارِ تحميل قائمة التشغيل...",
    pl_added: "تمت إضافة {n} أغنية من القائمة",
    pl_added_none: "كل أغاني هذه القائمة موجودة بالفعل في قائمة التشغيل لديك",
    err_playlist_failed: "تعذّر تحميل هذه القائمة من أي سيرفر بديل. جرّب سيرفرًا آخر من الإعدادات، أو أضف روابط الفيديوهات كل على حدة.",
    welc_1: "لإستخدام <b>وضع راديو يوتيوب</b> بسلاسة، قم بتثبيت هذا <a href='https://github.com/AndyMagnom/YT-Radio-Mode#-companion-userscript'>السكربت</a>.",
    btn_demo: "تشغيل مقاطع تجريبية",
    queue_title: "قائمة التشغيل",
    clear: "مسح الكل",
    search_place: "...رابط مقطع أو قائمة تشغيل من يوتيوب هنا",
    notice_head: "لماذا تفشل بعض الفيديوهات؟",
    notice_body: "قد يمنع يوتيوب تضمين بعض الفيديوهات في المواقع الخارجية بسبب حقوق النشر، أو القيود الإقليمية، أو تصنيف المحتوى للبالغين. عند حدوث ذلك، يحاول التطبيق تشغيل الفيديو تلقائيًا عبر أحد الخوادم البديلة (Piped ثم Invidious)، مع عرض رسالة قصيرة تُعلمك بأنه تم التحويل. وإذا تعذّر التشغيل عبر جميع الخوادم المتاحة أيضًا، فسيتم تخطي الأغنية تلقائيًا.",
    resume_text: "هل تريد المتابعة من حيث توقفت؟",
    resume_yes: "متابعة",
    resume_no: "البدء من جديد",
    sc_title: "اختصارات لوحة المفاتيح",
    sc_play: "تشغيل / إيقاف مؤقت",
    sc_mute: "كتم / إلغاء الكتم",
    sc_autoplay: "تبديل التشغيل التلقائي",
    sc_next: "المقطع التالي",
    sc_prev: "المقطع السابق",
    sc_loop: "تبديل وضع التكرار",
    sc_seekback: "رجوع 5 ثوانٍ",
    sc_seekfwd: "تقديم 5 ثوانٍ",
    sc_volup: "رفع الصوت",
    sc_voldown: "خفض الصوت",
    sc_slower: "تشغيل أبطأ",
    sc_faster: "تشغيل أسرع",
    sc_toggle: "تبديل هذه القائمة",
    layout_title: "حجم قائمة التشغيل والمشغل",
    layout_fixed: "حجم ثابت",
    layout_fixed_desc: "قائمة التشغيل والمشغل لا يتغير حجمهما",
    layout_expanded: "تمديد مع القائمة",
    layout_expanded_desc: "تكبر قائمة التشغيل والمشغل مع إضافة مقاطع"
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
  awesomeTimer: null,
  pendingShortcutEvents: [],
  errorTimer: null,
  autoIvNoticeTimer: null,
  lastSavedSec: 0,
  pendingResumeTime: 0,
  customProxyInstance: '',
  activePlaybackMode: 'youtube',
  ivAttempt: 0,
  ivReason: 'restricted',
  ivDuration: 0,
  ivActiveBase: '',

  init() {
    this.loadSettings();
    this.bindDOMEvents();
    this.bindGlobalShortcuts();
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

    const logoEl = document.getElementById('app-logo');
    const faviconEl = document.getElementById('app-favicon');
    if (logoEl && faviconEl) {
      logoEl.src = themeName === 'light' ? 'img/logo-dark.png' : 'img/logo.png';
      faviconEl.href = themeName === 'light' ? 'img/favicon-dark.png' : 'img/favicon.png';
    }
  },

  setLayout(layoutName) {
    this.currentLayout = layoutName;
    localStorage.setItem('ytrm_layout', layoutName);
    document.documentElement.setAttribute('data-layout', layoutName);

    document.querySelectorAll('.layout-swatch').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-layout-value') === layoutName);
    });
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

    const savedLayout = localStorage.getItem('ytrm_layout') || 'fixed';
    this.setLayout(savedLayout);

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

    const savedInstance = localStorage.getItem('ytrm_proxy_instance') || localStorage.getItem('ytrm_invidious_instance');
    this.customProxyInstance = (savedInstance && savedInstance.trim()) || '';
    const ivInput = document.getElementById('input-iv-instance');
    if (ivInput) ivInput.value = this.customProxyInstance;

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
      width: '100%',
      height: '100%',
      playerVars: playerVars,
      events: {
        'onReady': () => this.onPlayerReady(),
        'onStateChange': (e) => this.onPlayerStateChange(e),
        'onError': (e) => this.onPlayerError(e)
      }
    });
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

  onPlayerError(event) {
    const code = event && event.data;
    const item = this.queue[this.currentIndex];
    const isRestricted = (code === 101 || code === 150 || code === 100);

    this.isPlaying = false;
    const playIcon = document.getElementById('icon-play-state');
    if (playIcon) playIcon.textContent = 'play_arrow';
    clearInterval(this.updateLoop);

    if (isRestricted) {
      this.playViaProxy(this.currentIndex);
      this.showAutoInvidiousNotice();
      return;
    }

    if (item) item.isErrored = true;
    this.renderQueue();

    this.showToast(TRANSLATIONS[this.currentLanguage].err_load, 6000, () => {
      if (this.autoPlay) this.next();
    });
  },

  showToast(message, duration = 4000, onHide = null) {
    const toast = document.getElementById('notice-error');
    const textEl = document.getElementById('error-toast-text');
    const ivBtn = document.getElementById('btn-error-invidious');
    if (ivBtn) ivBtn.style.display = 'none';
    if (textEl) textEl.innerHTML = message;
    if (toast) toast.classList.remove('hidden');
    clearTimeout(this.errorTimer);
    this.errorTimer = setTimeout(() => {
      if (toast) toast.classList.add('hidden');
      if (onHide) onHide();
    }, duration);
  },

  showAutoInvidiousNotice() {
    const el = document.getElementById('notice-auto-invidious');
    if (!el) return;
    el.classList.remove('hidden');
    clearTimeout(this.autoIvNoticeTimer);
    this.autoIvNoticeTimer = setTimeout(() => el.classList.add('hidden'), 4000);
  },

  setCustomProxyInstance(url) {
    const clean = (url || '').trim().replace(/\/+$/, '');
    this.customProxyInstance = clean;
    if (clean) {
      localStorage.setItem('ytrm_proxy_instance', clean);
    } else {
      localStorage.removeItem('ytrm_proxy_instance');
    }
    localStorage.removeItem('ytrm_invidious_instance');
  },

  getProxyTierList() {
    const list = [];
    if (this.customProxyInstance) {
      list.push({ type: 'auto', base: this.customProxyInstance });
    }
    CONFIG.proxyTiers.forEach(tier => {
      tier.instances.forEach(base => {
        if (!list.some(e => e.base === base)) list.push({ type: tier.type, base });
      });
    });
    return list;
  },

  async fetchJson(url, ms = 7000) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error('bad status ' + res.status);
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  },

  pickInvidiousStreamUrl(base, data) {
    const abs = (u) => (u && u.startsWith('http')) ? u : `${base}${u}`;
    const audioOnly = (data.adaptiveFormats || []).filter(f => (f.type || '').startsWith('audio/') && f.url);
    if (audioOnly.length) {
      audioOnly.sort((a, b) => (parseInt(b.bitrate, 10) || 0) - (parseInt(a.bitrate, 10) || 0));
      return abs(audioOnly[0].url);
    }
    const muxed = (data.formatStreams || []).filter(f => f.url);
    if (muxed.length) {
      const preferred = muxed.find(f => String(f.itag) === '18') || muxed[0];
      return abs(preferred.url);
    }
    return null;
  },

  pickPipedStreamUrl(data) {
    const audioOnly = (data.audioStreams || []).filter(f => f.url);
    if (!audioOnly.length) return null;
    audioOnly.sort((a, b) => (parseInt(b.bitrate, 10) || 0) - (parseInt(a.bitrate, 10) || 0));
    return audioOnly[0].url;
  },

  async resolveProxyStream(tier, videoId) {
    const base = tier.base;

    const tryPiped = async () => {
      const data = await this.fetchJson(`${base}/streams/${videoId}`, 7000);
      const streamUrl = this.pickPipedStreamUrl(data);
      if (!streamUrl) throw new Error('no piped stream');
      return { streamUrl, durationSeconds: data.duration || 0 };
    };

    const tryInvidious = async () => {
      const data = await this.fetchJson(`${base}/api/v1/videos/${videoId}?fields=adaptiveFormats,formatStreams,lengthSeconds`, 7000);
      const streamUrl = this.pickInvidiousStreamUrl(base, data);
      if (!streamUrl) throw new Error('no invidious stream');
      return { streamUrl, durationSeconds: data.lengthSeconds || 0 };
    };

    if (tier.type === 'piped') return tryPiped();
    if (tier.type === 'invidious') return tryInvidious();

    try {
      return await tryPiped();
    } catch (e) {
      return await tryInvidious();
    }
  },

  async playViaProxy(index, attempt = 0, reason = 'restricted') {
    if (index < 0 || index >= this.queue.length) return;
    const tiers = this.getProxyTierList();
    if (attempt === 0) this.ivReason = reason;

    if (attempt >= tiers.length) {
      this.activePlaybackMode = 'youtube';
      document.getElementById('invidious-badge').classList.add('hidden');
      clearInterval(this.updateLoop);

      if (this.ivReason === 'manual') {
        this.showToast(TRANSLATIONS[this.currentLanguage].err_iv_allfailed, 5000);
        this.playAtIndex(index);
        return;
      }

      const deadItem = this.queue[index];
      if (deadItem) deadItem.isErrored = true;
      this.renderQueue();

      this.showToast(TRANSLATIONS[this.currentLanguage].err_iv_allfailed, 6000, () => {
        if (this.autoPlay) this.next();
      });
      return;
    }

    if (attempt > 0) {
      const msg = TRANSLATIONS[this.currentLanguage].iv_trying
        .replace('{n}', attempt + 1).replace('{total}', tiers.length);
      this.showToast(msg, 2500);
    }

    const item = this.queue[index];
    this.currentIndex = index;
    this.saveQueueState();
    this.renderQueue();

    if (this.player && this.player.stopVideo) {
      try { this.player.stopVideo(); } catch (e) {}
    }
    clearInterval(this.updateLoop);
    clearTimeout(this.errorTimer);

    document.getElementById('notice-error').classList.add('hidden');
    document.getElementById('notice-resume').classList.add('hidden');
    document.getElementById('panel-welcome').classList.add('hidden');

    this.activePlaybackMode = 'proxy';
    this.ivAttempt = attempt;
    this.bindProxyAudioEvents();

    document.getElementById('invidious-badge').classList.remove('hidden');
    this.setPlayerTitle(item.title);
    document.getElementById('player-thumbnail').style.backgroundImage = `url('${CONFIG.defaultThumb.replace('{id}', item.id)}')`;

    this.isPlaying = true;
    document.getElementById('icon-play-state').textContent = 'pause';
    document.getElementById('time-current').textContent = '0:00';
    document.getElementById('time-total').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';

    const tier = tiers[attempt];
    const audio = document.getElementById('invidious-audio');

    let resolved;
    try {
      resolved = await this.resolveProxyStream(tier, item.id);
    } catch (e) {
      this.playViaProxy(index, attempt + 1);
      return;
    }

    if (this.activePlaybackMode !== 'proxy' || this.currentIndex !== index) return;

    this.ivActiveBase = tier.base;
    this.ivDuration = resolved.durationSeconds;

    const vol = this.isMuted ? 0 : this.savedVolume;
    audio.volume = Math.min(1, Math.max(0, vol / 100));
    audio.playbackRate = this.currentSpeed;
    audio.src = resolved.streamUrl;

    audio.play().catch(() => {
      if (this.activePlaybackMode === 'proxy' && this.currentIndex === index) {
        this.playViaProxy(index, attempt + 1);
      }
    });

    this.startProgressTracker();
  },

  stopInvidious() {
    if (this.activePlaybackMode !== 'proxy') return;
    this.activePlaybackMode = 'youtube';
    const audio = document.getElementById('invidious-audio');
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    }
    clearInterval(this.updateLoop);
    document.getElementById('invidious-badge').classList.add('hidden');
  },

  bindProxyAudioEvents() {
    const a = document.getElementById('invidious-audio');
    if (!a || a.dataset.bound) return;
    a.dataset.bound = 'true';

    a.addEventListener('error', () => {
      if (this.activePlaybackMode !== 'proxy') return;
      this.playViaProxy(this.currentIndex, (this.ivAttempt || 0) + 1);
    });

    a.addEventListener('ended', () => {
      if (this.activePlaybackMode !== 'proxy') return;
      this.handleProxyEnded();
    });
  },

  handleProxyEnded() {
    clearInterval(this.updateLoop);

    if (this.loopMode === 'one') {
      const audio = document.getElementById('invidious-audio');
      audio.currentTime = 0;
      audio.play();
    } else if (this.loopMode === 'all' && this.currentIndex === this.queue.length - 1) {
      this.playAtIndex(0);
    } else if (this.autoPlay) {
      this.next();
    } else {
      this.isPlaying = false;
      document.getElementById('icon-play-state').textContent = 'play_arrow';
    }
  },

  mediaGetCurrentTime() {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      return (a && !isNaN(a.currentTime)) ? a.currentTime : 0;
    }
    return (this.player && this.player.getCurrentTime) ? this.player.getCurrentTime() : 0;
  },

  mediaGetDuration() {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a && a.duration && isFinite(a.duration)) return a.duration;
      return this.ivDuration || 0;
    }
    return (this.player && this.player.getDuration) ? this.player.getDuration() : 0;
  },

  mediaSeekTo(seconds) {
    const target = Math.max(0, seconds);
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a) a.currentTime = target;
      return;
    }
    if (this.player && this.player.seekTo) this.player.seekTo(target, true);
  },

  mediaPlay() {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a) {
        a.play();
        this.isPlaying = true;
        document.getElementById('icon-play-state').textContent = 'pause';
        this.startProgressTracker();
      }
      return;
    }
    if (this.player && this.player.playVideo) this.player.playVideo();
  },

  mediaPause() {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a) {
        a.pause();
        this.isPlaying = false;
        document.getElementById('icon-play-state').textContent = 'play_arrow';
        clearInterval(this.updateLoop);
      }
      return;
    }
    if (this.player && this.player.pauseVideo) this.player.pauseVideo();
  },

  mediaSetVolume(vol) {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a) a.volume = Math.min(1, Math.max(0, vol / 100));
      return;
    }
    if (this.player && this.player.setVolume) this.player.setVolume(vol);
  },

  mediaSetPlaybackRate(rate) {
    if (this.activePlaybackMode === 'proxy') {
      const a = document.getElementById('invidious-audio');
      if (a) a.playbackRate = rate;
      return;
    }
    if (this.player && this.player.setPlaybackRate) this.player.setPlaybackRate(rate);
  },

  addToQueue(id, title = "Loading Track...", playNow = true) {
    if (!id) return;
    if (this.queue.some(item => item.id === id)) return;

    const newItem = { id, title, isErrored: false };
    this.queue.push(newItem);
    this.saveQueueState();
    this.renderQueue();

    this.fetchTrackMetadata(newItem);

    if (playNow || this.currentIndex === -1) {
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

    this.stopInvidious();
    document.getElementById('notice-resume').classList.add('hidden');
    this.pendingResumeTime = 0;

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
        <button class="btn-link btn-invidious" title="Play via alt server (works around YouTube restrictions)" data-index="${index}">
          <span class="material-icons">swap_horiz</span>
        </button>
        <button class="btn-link" title="Open original video" data-id="${item.id}">
          <span class="material-icons">open_in_new</span>
        </button>
        <button class="btn-remove" data-index="${index}"><span class="material-icons">close</span></button>
      `;

      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove') || e.target.closest('.btn-link')) return;
        this.playAtIndex(index);
      });

      row.querySelector('.btn-invidious').addEventListener('click', (e) => {
        e.stopPropagation();
        this.playViaProxy(index, 0, 'manual');
      });

      row.querySelector('[data-id]').addEventListener('click', (e) => {
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
        this.stopInvidious();
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

  extractPlaylistId(input) {
    const match = input.trim().match(/[?&]list=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  },

  async addFromInput(rawInput) {
    const clean = (rawInput || '').trim();
    if (!clean) return;

    const playlistId = this.extractPlaylistId(clean);
    if (playlistId) {
      await this.addPlaylistById(playlistId);
      return;
    }

    const videoId = this.extractVideoId(clean);
    if (videoId) {
      this.addToQueue(videoId, "Custom Track Link");
    } else {
      this.showToast(TRANSLATIONS[this.currentLanguage].err_invalid);
    }
  },

  async addPlaylistById(playlistId) {
    this.showToast(TRANSLATIONS[this.currentLanguage].pl_loading, 8000);
    const tiers = this.getProxyTierList();

    for (let i = 0; i < tiers.length; i++) {
      try {
        const videos = await this.fetchProxyPlaylistVideos(tiers[i], playlistId);
        if (!videos || videos.length === 0) continue;

        const capped = videos.slice(0, CONFIG.maxPlaylistTracks);
        const firstNewIndex = this.queue.length;
        let added = 0;

        capped.forEach(v => {
          if (!v.videoId || this.queue.some(item => item.id === v.videoId)) return;
          const newItem = { id: v.videoId, title: v.title || "Loading Track...", isErrored: false };
          this.queue.push(newItem);
          added++;
          if (!v.title) this.fetchTrackMetadata(newItem);
        });

        this.saveQueueState();
        this.renderQueue();

        if (added > 0) {
          const msg = TRANSLATIONS[this.currentLanguage].pl_added.replace('{n}', added);
          this.showToast(msg, 4000);
          if (this.currentIndex === -1) this.playAtIndex(firstNewIndex);
        } else {
          this.showToast(TRANSLATIONS[this.currentLanguage].pl_added_none, 4000);
        }
        return;
      } catch (e) {
      }
    }

    this.showToast(TRANSLATIONS[this.currentLanguage].err_playlist_failed, 6000);
  },

  async fetchProxyPlaylistVideos(tier, playlistId) {
    if (tier.type === 'piped') return this.fetchPipedPlaylistVideos(tier.base, playlistId);
    if (tier.type === 'invidious') return this.fetchInvidiousPlaylistVideos(tier.base, playlistId);
    try {
      return await this.fetchPipedPlaylistVideos(tier.base, playlistId);
    } catch (e) {
      return this.fetchInvidiousPlaylistVideos(tier.base, playlistId);
    }
  },

  async fetchInvidiousPlaylistVideos(base, playlistId) {
    const collected = [];
    const maxPages = 10;
    let expectedTotal = null;

    for (let page = 1; page <= maxPages; page++) {
      let data;
      try {
        data = await this.fetchJson(`${base}/api/v1/playlists/${encodeURIComponent(playlistId)}?page=${page}`, 7000);
      } catch (e) {
        if (page === 1) throw e;
        break;
      }

      if (!data || !Array.isArray(data.videos)) {
        if (page === 1) throw new Error('bad playlist payload');
        break;
      }

      if (page === 1 && typeof data.videoCount === 'number') expectedTotal = data.videoCount;
      if (data.videos.length === 0) break;

      collected.push(...data.videos);

      if (expectedTotal !== null && collected.length >= expectedTotal) break;
      if (data.videos.length < 20) break;
    }

    if (collected.length === 0) throw new Error('empty playlist result');
    return collected;
  },

  async fetchPipedPlaylistVideos(base, playlistId) {
    const collected = [];
    const maxPages = 10;
    let nextpage = null;

    for (let page = 1; page <= maxPages; page++) {
      let data;
      try {
        const url = page === 1
          ? `${base}/playlists/${encodeURIComponent(playlistId)}`
          : `${base}/nextpage/playlist?playlistId=${encodeURIComponent(playlistId)}&nextpage=${encodeURIComponent(nextpage)}`;
        data = await this.fetchJson(url, 7000);
      } catch (e) {
        if (page === 1) throw e;
        break;
      }

      if (!data || !Array.isArray(data.relatedStreams)) {
        if (page === 1) throw new Error('bad playlist payload');
        break;
      }
      if (data.relatedStreams.length === 0) break;

      data.relatedStreams.forEach(s => {
        const match = (s.url || '').match(/[?&]v=([a-zA-Z0-9_-]{11})/);
        if (match) collected.push({ videoId: match[1], title: s.title || '' });
      });

      nextpage = data.nextpage || null;
      if (!nextpage) break;
    }

    if (collected.length === 0) throw new Error('empty playlist result');
    return collected;
  },

  startProgressTracker() {
    clearInterval(this.updateLoop);
    const fill = document.getElementById('progress-fill');
    const curEl = document.getElementById('time-current');
    const totEl = document.getElementById('time-total');

    this.updateLoop = setInterval(() => {
      const current = this.mediaGetCurrentTime();
      const duration = this.mediaGetDuration();

      if (duration > 0) {
        const pct = Math.min(100, (current / duration) * 100);
        fill.style.width = `${pct}%`;
        curEl.textContent = this.formatTime(Math.min(current, duration));
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

    this.mediaSetPlaybackRate(speed);
  },

  resetSpeed() {
    this.changeSpeed(1);
  },

  resetVolume() {
    this.isMuted = false;
    this.savedVolume = 100;
    this.mediaSetVolume(100);
    this.updateVolumeUI(100);
    localStorage.setItem('ytrm_vol', 100);
    localStorage.setItem('ytrm_muted', 'false');
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.mediaSetVolume(this.isMuted ? 0 : this.savedVolume);
    this.updateVolumeUI(this.isMuted ? 0 : this.savedVolume);
    
    localStorage.setItem('ytrm_muted', this.isMuted); 
  },

  setLoopMode(mode) {
    const loopBtn = document.getElementById('ctrl-loop');
    const loopIcon = document.getElementById('icon-loop');
    this.loopMode = mode;

    if (mode === 'all') {
      loopBtn.className = 'btn-icon active-all';
      loopIcon.textContent = 'repeat';
      loopBtn.title = 'Repeat Queue (Shift+L)';
    } else if (mode === 'one') {
      loopBtn.className = 'btn-icon active-one';
      loopIcon.textContent = 'repeat_one';
      loopBtn.title = 'Repeat Current Song (Shift+L)';
    } else {
      loopBtn.className = 'btn-icon';
      loopIcon.textContent = 'repeat';
      loopBtn.title = 'Loop Modes Off (Shift+L)';
    }
  },

  cycleLoopMode() {
    if (this.loopMode === 'off') this.setLoopMode('all');
    else if (this.loopMode === 'all') this.setLoopMode('one');
    else this.setLoopMode('off');
  },

  togglePlayPause() {
    if (this.activePlaybackMode === 'youtube' && !this.player) return;
    this.isPlaying ? this.mediaPause() : this.mediaPlay();
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
      if (this.activePlaybackMode === 'youtube' && !this.player) return;
      if (this.restartClickTimer) {
        clearTimeout(this.restartClickTimer);
        this.restartClickTimer = null;
        this.previous();
      } else {
        this.restartClickTimer = setTimeout(() => {
          this.restartClickTimer = null;
          this.mediaSeekTo(0);
        }, 300);
      }
    });
    
    document.getElementById('ctrl-next').addEventListener('click', () => this.next());

    document.getElementById('progress-timeline').addEventListener('click', (e) => {
      const duration = this.mediaGetDuration();
      if (!duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      this.mediaSeekTo(pct * duration);
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
      
      this.stopInvidious();
      if (this.player) this.player.stopVideo();
      this.setPlayerTitle('No track playing');
      document.getElementById('player-thumbnail').style.backgroundImage = 'none';
      this.renderQueue();
      document.getElementById('panel-welcome').classList.remove('hidden');
    });

    document.getElementById('ctrl-mute').addEventListener('click', () => this.toggleMute());
    document.getElementById('ctrl-mute').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.resetVolume();
    });

    document.getElementById('slider-volume').addEventListener('input', (e) => {
      const vol = parseInt(e.target.value);
      this.mediaSetVolume(vol);
      this.isMuted = (vol === 0);
      
      if (vol > 0) this.savedVolume = vol;
      localStorage.setItem('ytrm_vol', vol);
      localStorage.setItem('ytrm_muted', this.isMuted);
      this.updateVolumeUI(vol);
    });
    document.getElementById('slider-volume').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.resetVolume();
    });

    document.getElementById('slider-speed').addEventListener('input', (e) => {
      this.changeSpeed(e.target.value);
    });
    document.getElementById('slider-speed').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.resetSpeed();
    });
    document.getElementById('ctrl-speed').addEventListener('click', () => {
      let target = this.currentSpeed + 0.25;
      if (target > 4) target = 0.25;
      this.changeSpeed(target);
    });
    document.getElementById('ctrl-speed').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.resetSpeed();
    });

    document.getElementById('ctrl-loop').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.setLoopMode('off');
    });

    document.getElementById('toggle-lang').addEventListener('click', () => {
      const targetLang = this.currentLanguage === 'en' ? 'ar' : 'en';
      this.setLanguage(targetLang);
    });

    document.getElementById('toggle-theme-picker').addEventListener('click', () => {
      document.getElementById('panel-theme-picker').classList.toggle('hidden');
    });

    document.getElementById('panel-theme-picker').addEventListener('click', (e) => {
      const themeBtn = e.target.closest('.theme-swatch');
      if (themeBtn) {
        this.setTheme(themeBtn.getAttribute('data-theme-value'));
        document.getElementById('panel-theme-picker').classList.add('hidden');
        return;
      }

      const layoutBtn = e.target.closest('.layout-swatch');
      if (layoutBtn) this.setLayout(layoutBtn.getAttribute('data-layout-value'));
    });

    document.getElementById('toggle-iv-settings').addEventListener('click', () => {
      document.getElementById('panel-iv-settings').classList.toggle('hidden');
    });

    document.getElementById('toggle-shortcuts').addEventListener('click', () => {
      this.toggleShortcutsPopup();
    });

    document.getElementById('btn-close-shortcuts').addEventListener('click', () => {
      document.getElementById('panel-shortcuts').classList.add('hidden');
    });

    document.getElementById('panel-shortcuts').addEventListener('click', (e) => {
      if (e.target.id === 'panel-shortcuts') {
        document.getElementById('panel-shortcuts').classList.add('hidden');
      }
    });

    document.getElementById('btn-iv-save').addEventListener('click', () => {
      this.setCustomProxyInstance(document.getElementById('input-iv-instance').value);
      document.getElementById('panel-iv-settings').classList.add('hidden');
    });

    document.getElementById('invidious-badge').addEventListener('click', () => {
      this.stopInvidious();
      this.playAtIndex(this.currentIndex);
    });

    const triggerSearch = () => {
      const input = document.getElementById('input-search');
      const query = input.value.trim();
      if (!query) return;
      input.value = '';
      this.addFromInput(query);
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

    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) {
      document.querySelectorAll('.hover-flyout-container').forEach(container => {
        const trigger = container.querySelector('.btn-icon-small');
        if (!trigger) return;
        trigger.addEventListener('click', (e) => {
          const wasOpen = container.classList.contains('flyout-open');
          document.querySelectorAll('.hover-flyout-container.flyout-open').forEach(c => c.classList.remove('flyout-open'));
          if (!wasOpen) {
            container.classList.add('flyout-open');
            e.stopPropagation();
          }
        });
      });
      document.addEventListener('click', (e) => {
        document.querySelectorAll('.hover-flyout-container.flyout-open').forEach(c => {
          if (!c.contains(e.target)) c.classList.remove('flyout-open');
        });
      });
    }

    document.getElementById('btn-load-demo').addEventListener('click', () => {
      CONFIG.demoTracks.forEach(track => this.addToQueue(track.id, track.title, false));
    });

    const makeSheetDraggable = (panelEl) => {
      const handle = panelEl.querySelector('.sheet-handle');
      if (!handle) return;
      let dragging = false, startY = 0, dragY = 0, panelHeight = 0;

      handle.addEventListener('pointerdown', (e) => {
        if (window.matchMedia('(min-width: 601px)').matches) return;
        dragging = true;
        startY = e.clientY;
        dragY = 0;
        panelHeight = panelEl.getBoundingClientRect().height;
        panelEl.style.transition = 'none';
        handle.setPointerCapture(e.pointerId);
      });

      handle.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        dragY = Math.max(0, e.clientY - startY);
        panelEl.style.transform = `translateY(${dragY}px)`;
      });

      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        panelEl.style.transition = '';
        panelEl.style.transform = '';
        if (dragY > panelHeight * 0.22) {
          panelEl.classList.add('hidden');
        }
        dragY = 0;
      };
      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
    };
    makeSheetDraggable(document.getElementById('panel-iv-settings'));
    makeSheetDraggable(document.getElementById('panel-theme-picker'));

    document.addEventListener('click', (e) => {
      const ivPanel = document.getElementById('panel-iv-settings');
      const ivToggle = document.getElementById('toggle-iv-settings');
      if (ivPanel && !ivPanel.classList.contains('hidden') && !ivPanel.contains(e.target) && !ivToggle.contains(e.target)) {
        ivPanel.classList.add('hidden');
      }
      const themePanel = document.getElementById('panel-theme-picker');
      const themeToggle = document.getElementById('toggle-theme-picker');
      if (themePanel && !themePanel.classList.contains('hidden') && !themePanel.contains(e.target) && !themeToggle.contains(e.target)) {
        themePanel.classList.add('hidden');
      }
    });
  },

  bindGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      const activeTag = e.target.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

      const key = e.key.toLowerCase();

      if (e.key === 'Escape' && !document.getElementById('panel-shortcuts').classList.contains('hidden')) {
        document.getElementById('panel-shortcuts').classList.add('hidden');
        return;
      }

      if (key === '?') {
        e.preventDefault();
        this.toggleShortcutsPopup();
        return;
      }

      const oldSeq = this.awesomeSequence;
      let seq = oldSeq + key;
      if (!'awesome'.startsWith(seq)) {
        seq = 'awesome'.startsWith(key) ? key : '';
      }
      const extended = seq.length > oldSeq.length;
      this.awesomeSequence = seq;

      if (!extended) {
        this.flushPendingShortcuts();
      }

      if (seq === 'awesome') {
        clearTimeout(this.awesomeTimer);
        this.pendingShortcutEvents = [];
        this.awesomeSequence = '';
        this.toggleAwesomeMode();
        return;
      }

      if (seq.length > 0) {
        this.pendingShortcutEvents.push(e);
        clearTimeout(this.awesomeTimer);
        this.awesomeTimer = setTimeout(() => {
          this.awesomeSequence = '';
          this.flushPendingShortcuts();
        }, 500);
        return;
      }

      this.runShortcut(e, key);
    });
  },

  flushPendingShortcuts() {
    const events = this.pendingShortcutEvents;
    this.pendingShortcutEvents = [];
    events.forEach((evt) => this.runShortcut(evt, evt.key.toLowerCase()));
  },

  toggleAwesomeMode() {
    this.isAwesomeMode = !this.isAwesomeMode;
    const progressFill = document.getElementById('progress-fill');
    progressFill.classList.toggle('awesome-mode', this.isAwesomeMode);
  },

  runShortcut(e, key) {
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
      e.preventDefault();
      this.mediaSeekTo(this.mediaGetCurrentTime() + 5);
    }
    else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.mediaSeekTo(this.mediaGetCurrentTime() - 5);
    }
  },

  toggleShortcutsPopup() {
    document.getElementById('panel-shortcuts').classList.toggle('hidden');
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
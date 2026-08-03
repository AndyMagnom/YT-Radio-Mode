# 📻 YT Radio Mode

> A lightweight, static YouTube "Radio Mode" web player with automatic alt-server fallback, keyboard controls, and full i18n support.

[![GreasyFork Userscript](https://img.shields.io/badge/GreasyFork-YT_Radio_Mode_Redirect-880000?style=for-the-badge&logo=greasyfork)](https://greasyfork.org/en/scripts/589754-yt-radio-mode-redirect)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Stack](https://img.shields.io/badge/Stack-HTML_%7C_CSS_%7C_JS-yellow?style=for-the-badge)](https://developer.mozilla.org/)

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## Overview

**YT Radio Mode** lets you paste any YouTube video or playlist link, queue tracks up, and enjoy seamless background playback through a persistent mini-player card. 

If a video refuses to embed (age-restricted, region-locked, or owner-disabled embedding), the app automatically retries the audio stream through public **Piped** or **Invidious** instances instead of skipping the track.

- Built with pure HTML, CSS, and JavaScript.
- Deployed on GitHub Pages.
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

# 🧩 Companion Userscript

Quick open with the **YT Radio Mode Redirect** script!

You need a script manager: [Violentmonkey](https://violentmonkey.github.io/) - [Tampermonkey](https://www.tampermonkey.net/)

- [![Install from GitHub Gist](https://img.shields.io/badge/GitHub_Gist-Install_Userscript-%23121011?style=for-the-badge&logo=github)](https://gist.github.com/AndyMagnom/badf8449ffaaed5286c3a8d805b3198a)

- [![Install from GreasyFork](https://img.shields.io/badge/GreasyFork-Install_Userscript-880000?style=for-the-badge&logo=greasyfork)](https://greasyfork.org/en/scripts/589754-yt-radio-mode-redirect)



### What it does:
Automatically intercepts and redirects YouTube video and playlist URLs into your YT Radio Mode web player instance, giving you a seamless radio listening experience directly while browsing.

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## Key Features

- 🔗 **Queue from Links:** Paste any YouTube video or playlist URL into the search box.
- 🎵 **Persistent Mini-Player:** Driven by the YouTube IFrame API, featuring album artwork, marquee scrolling titles, and a scrubbable progress bar.
- 🔄 **Alt-Server Fallback:** Automatically switches to audio streams from Piped or Invidious public instances if YouTube blocks embedding.
- ⏯️ **Resume Playback:** Pick up right where you left off when reopening the app.
- 🎨 **12 Built-in Themes:** Switch between Dark, Light, One Dark Pro, Catppuccin, Tokyo Night, Dracula, Material, Night Owl, Gruvbox, Rosé Pine, Kanagawa, and Poimandres.
- 🌐 **Bilingual UI:** Full English and Arabic support.
- ⚙️ **Custom Alt-Server Override:** Save your preferred self-hosted or custom Piped/Invidious instance URL in `localStorage`.

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## Keyboard Shortcuts

Press <kbd>?</kbd> anywhere in the app to bring up the interactive shortcut sheet.

| Key / Combination | Action |
| :--- | :--- |
| <kbd>Space</kbd> / <kbd>K</kbd> | Play / Pause |
| <kbd>M</kbd> | Toggle Mute |
| <kbd>A</kbd> | Toggle Autoplay |
| <kbd>Shift</kbd> + <kbd>N</kbd> | Next Track |
| <kbd>Shift</kbd> + <kbd>P</kbd> | Previous Track |
| <kbd>Shift</kbd> + <kbd>L</kbd> | Toggle Loop Mode |
| <kbd>←</kbd> / <kbd>→</kbd> | Seek Backward / Forward |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Volume Up / Down |
| <kbd>,</kbd> / <kbd>.</kbd> | Decrease / Increase Playback Speed |

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## How Playback Works

```text
[ Paste URL ] ──► [ Try YouTube IFrame API ] ──► ( Success? Play Video Audio )
                               │
                       ( Embedding Blocked? )
                               │
                               ▼
               [ Iterate Piped / Invidious APIs ]
                               │
                               ▼
                 ( Stream via HTML5 <audio> )
```

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## Known limitations

- Public instance reliability: Piped and Invidious public instances are run by volunteers and are frequently rate-limited or blocked by YouTube; the built-in list may need periodic updates. Self-hosting your own instance is more reliable long-term.

- Region/age-restricted content: Some videos can't be played through any method due to YouTube's own licensing restrictions, independent of this app.

- No official API key used: This app relies on the public YouTube embed player and third-party community projects rather than the official YouTube Data API, so behavior can change if YouTube alters its embed or anti-scraping measures.

![Line](https://camo.githubusercontent.com/10f8fa99428441e9c807e0ea470e74c543a9b4d547e80f087b4be414c768e3bb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f617765736f6d652d736372697074732f617765736f6d652d75736572736372697074732f6173736574732f696d616765732f736570617261746f72732f7261696e626f772d626c75652d746f2d7265642e706e67)

## Disclaimer

This is a personal-use front-end/player. It does not download, redistribute, or monetize any content. [Piped](https://github.com/TeamPiped/Piped) and [Invidious](https://github.com/iv-org/invidious) are independent open-source projects; this app merely calls their public APIs as an optional fallback. Use in accordance with YouTube's Terms of Service and the terms of any third-party instance you configure.

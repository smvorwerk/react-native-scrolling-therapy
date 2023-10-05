import { Dimensions } from "react-native";

const toleranceHeight = Math.ceil(Dimensions.get("window").height / 3);
const deviceWidth = Dimensions.get("window").width;

export const DOM_HELPER_FB = `
  window.FacebookDOMHelper = {
    getArticles: () => Array.from(document.getElementsByTagName('article')),
    like: (item) => {
      const footer = item.getElementsByTagName('footer');
      const buttons = footer ? footer[0].children[0].children[1].getElementsByTagName('a') : null;
      const likeBtn = buttons ? buttons[0] : null;
      if (likeBtn) { likeBtn.click(); }
    },
    next: (item) => {  },
    scrollTo: (pos) => window.scrollTo({ top: pos + 1, left: 0, behavior: 'smooth' }),
    getElementPosition: (item) => item.getBoundingClientRect().top + window.pageYOffset - item.ownerDocument.documentElement.clientTop,
    getElementHeight: (item) => item.getBoundingClientRect().height,
    activeElement: (item) => item.style.border = '2px solid #e122cf',
    unactiveAllElements: (articles) => articles.forEach(el => (el.style.border = '2px solid transparent')),
  };

  window.FacebookDOMHelper.unactiveAllElements(window.FacebookDOMHelper.getArticles());

  document.addEventListener('scroll', event => {
    const articles = window.FacebookDOMHelper.getArticles();
    window.FacebookDOMHelper.unactiveAllElements(articles);
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        window.FacebookDOMHelper.activeElement(item);
        break;
      }
    }
  });

  true;
`;

export const RUN_ON_START_FB = `
  (() => {
    document.body.style.maxWidth='${deviceWidth}px';
    document.body.style.overflowX='hidden';
  })();
  true;
`;

export const SCROLL_FB = `
  (() => {
    const articles = window.FacebookDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (window.pageYOffset <= pos) {
        if (pos - ${toleranceHeight} <= window.pageYOffset) {
          const height = window.FacebookDOMHelper.getElementHeight(item);
          window.FacebookDOMHelper.scrollTo(pos + height);
        }
        else {
          window.FacebookDOMHelper.scrollTo(pos);
        }
        break;
      }
    }
    true;
  })()
`;

export const LIKE_FB = `
  (() => {
    const articles = window.FacebookDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        window.FacebookDOMHelper.like(item);
        break;
      }
    }
    true;
  })()
`;

export const NEXT_FB = `
  (() => {
    const articles = window.FacebookDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        const swipeElement = item.getElementsByClassName('scrollAreaBody');
        if (swipeElement) {
          const swipeArea = swipeElement[0];
          if (swipeArea) {
            const style = window.getComputedStyle(swipeArea);
            const matrix = new WebKitCSSMatrix(style.transform);
            const left = matrix.m41 - 236

            if (left * - 1 < swipeArea.children.length * 236) {
              swipeArea.style.transform = "translate(" + left + "px, 0px)";
            }
          }
        }
        break;
      }
    }
    true;
  })()
`;

export const SCROLL_UP_FB = `
  (() => {
    let i = 0;
    const articles = window.FacebookDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        if (i <= 0) { i = 0; }
        else { i--; }
        const backPos = window.FacebookDOMHelper.getElementPosition(articles[i]);
        window.FacebookDOMHelper.scrollTo(backPos);
        break;
      }
      i++;
    }
    true;
  })()
`;

export const PLAY_FB = `
  (() => {
    const articles = window.FacebookDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.FacebookDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        const videoElement = item.getElementsByTagName('video');
        if (videoElement.length > 0) {
          const video = videoElement[0];

          const onClickVideo = () => {
            const isVideoPlaying = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
            if (!isVideoPlaying) { video.play(); }
            else { video.pause(); }
          }

          video.addEventListener("click", onClickVideo);
          video.click();
          video.removeEventListener("click", onClickVideo);
        }
        else {
          const video = item.querySelector('[data-sigil="playInlineVideo"]');
          if (video) video.click();
        }
        break;
      }
    }
    true;
  })()
`;

export const IS_USER_LOGGED_IN_FB = `
  (() => {
    const allCookies = document.cookie;
    if (allCookies.includes('c_user=')) {
      const articles = window.FacebookDOMHelper.getArticles();

      if (articles.length > 1) {
        ReactNativeWebView.postMessage('{"action": "login", "is_user_logged_in": "true"}');
      }
      else {
        ReactNativeWebView.postMessage('{"action": "login", "is_user_logged_in": "false"}');
      }
    }
    else {
      ReactNativeWebView.postMessage('{"action": "login", "is_user_logged_in": "false"}');
    }
    true;
  })()
`;
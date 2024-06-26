/** @module misc */

/** @private */
const match = (window || global).navigator.userAgent.match;

type MatcherFn = () => boolean;

type IsMobile = {
  isAndroid: MatcherFn;
  isBlackBerry: MatcherFn;
  isiOS: MatcherFn;
  isOpera: MatcherFn;
  isWindows: MatcherFn;
  any: MatcherFn;
};

export const isMobile: IsMobile = {
  isAndroid() {
    return !!match(/Android/i);
  },
  isBlackBerry() {
    return !!match(/BlackBerry/i);
  },
  isiOS() {
    return !!match(/iPhone|iPad|iPod/i);
  },
  isOpera() {
    return !!match(/Opera Mini/i);
  },
  isWindows() {
    return !!match(/IEMobile/i) || !!match(/WPDesktop/i);
  },
  any() {
    return (
      this.isAndroid() || this.isBlackBerry() || this.isiOS() || this.isOpera() || this.isWindows()
    );
  }
};

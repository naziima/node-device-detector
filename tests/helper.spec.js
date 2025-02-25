const detector = new (require('../index'))();
const DeviceHelper = require('../helper');
const { should, assert, expect } = require('chai');

/*

 */

const fixtures = [
  {
    ua: 'Mozilla/5.0 (Linux; Android 5.0.2; DMC-CM1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.92 Mobile Safari/537.36',
    checks: {
      isCamera: true,
      isCar: false,
      isConsole: false,
      isDesktop: false,
      isFeaturePhone: false,
      isMobile: false,
      isPeripheral: false,
      isPhablet: false,
      isPortableMediaPlayer: false,
      isSmartDisplay: false,
      isSmartSpeaker: false,
      isSmartphone: false,
      isTablet: false,
      isTv: false,
      isWearable: false,
      isAndroid: true,
      isIOS: false,
    },
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/605.1 NAVER(inapp; search; 700; 10.20.0; 11PROMAX)',
    checks: {
      isCamera: false,
      isCar: false,
      isConsole: false,
      isDesktop: false,
      isFeaturePhone: false,
      isMobile: true,
      isPeripheral: false,
      isPhablet: true,
      isPortableMediaPlayer: false,
      isSmartDisplay: false,
      isSmartSpeaker: false,
      isSmartphone: false,
      isTablet: false,
      isTv: false,
      isWearable: false,
      isAndroid: false,
      isIOS: true,
      isBrowser: true,
      isApp: false,
      isDesktopApp: false,
      isMobileApp: false,
    },
  },
  {
    ua: 'Mozilla/5.0 (Linux; Android 4.2.2; RCT6077W2 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Safari/537.36',
    checks: {
      isCamera: false,
      isCar: false,
      isConsole: false,
      isDesktop: false,
      isFeaturePhone: false,
      isMobile: false,
      isPeripheral: false,
      isPhablet: false,
      isPortableMediaPlayer: false,
      isSmartDisplay: false,
      isSmartSpeaker: false,
      isSmartphone: false,
      isTablet: true,
      isTv: false,
      isWearable: false,
      isAndroid: true,
      isIOS: false,
      isBrowser: true,
      isApp: false,
      isDesktopApp: false,
      isMobileApp: false,
    },
  },
  {
    ua: 'Fly_DS123/Q03C_MAUI_Browser/MIDP2.0 Configuration/CLDC-1.1',
    checks: {
      isCamera: false,
      isCar: false,
      isConsole: false,
      isDesktop: false,
      isFeaturePhone: true,
      isMobile: true,
      isPeripheral: false,
      isPhablet: false,
      isPortableMediaPlayer: false,
      isSmartDisplay: false,
      isSmartSpeaker: false,
      isSmartphone: false,
      isTablet: false,
      isTv: false,
      isWearable: false,
      isAndroid: false,
      isIOS: false,
      isBrowser: false,
      isApp: false,
      isDesktopApp: false,
      isMobileApp: false,
    },
  },
  {
    ua: 'Mozilla/5.0 Linux; Android 7.1.1; LG Watch Urbane Build/NWD1.180306.004 AppleWebKit/537.36 KHTML, like Gecko Chrome/19.77.34.5 Mobile Safari/537.36',
    checks: {
      isCamera: false,
      isCar: false,
      isConsole: false,
      isDesktop: false,
      isFeaturePhone: false,
      isMobile: false,
      isPeripheral: false,
      isPhablet: false,
      isPortableMediaPlayer: false,
      isSmartDisplay: false,
      isSmartSpeaker: false,
      isSmartphone: false,
      isTablet: false,
      isTv: false,
      isWearable: true,
      isAndroid: true,
      isIOS: false,
      isBrowser: true,
      isApp: false,
      isDesktopApp: false,
      isMobileApp: false,
    },
  },
];

describe('test helpers', function () {
  fixtures.forEach((fixture, i) => {
    describe(`fixture ${i}`, () => {
      let result = detector.detect(fixture.ua);
      for (let key in fixture.checks) {
        it('test ' + key, () => {
          expect(
            DeviceHelper[key](result),
            `fixture ${i} method ${key} for UA ${fixture.ua}`
          ).to.equal(fixture.checks[key]);
        });
      }
    });
  });
});

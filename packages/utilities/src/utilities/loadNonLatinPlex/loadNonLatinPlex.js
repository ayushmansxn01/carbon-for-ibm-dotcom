/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * CDN host for plex fonts
 *
 * @type {string}
 * @private
 */
const _host = 'https://1.www.s81c.com/common/carbon/plex';

/**
 * Non-Latin font keys and corresponding entry file/font-family
 *
 * @type {{ar: {entry: string, family: string}, jp: {entry: string, family: string}, kr: {entry: string, family: string}}}
 * @private
 */
const _fonts = {
  ar: {
    entry: 'sans-arabic',
    family: 'IBM Plex Sans Arabic',
  },
  ja: {
    entry: 'sans-jp',
    family: 'IBM Plex Sans JP',
  },
  ko: {
    entry: 'sans-kr',
    family: 'IBM Plex Sans KR',
  },
};

/**
 * Injects the corresponding CSS entry point to the page
 *
 * @param {string} language two-character language code
 * @private
 */
function _injectCSS(language) {
  const link = document.createElement('link');
  link.href = `${_host}/${_fonts[language].entry}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';

  document.getElementsByTagName('head')[0].appendChild(link);
}

/**
 * Sets the language's font-family to the page
 *
 * @param {string} language two-character language code
 * @private
 */
function _setFontFamily(language) {
  document.body.style.fontFamily = `${_fonts[language].family},IBM Plex Sans,Helvetica Neue,Arial,sans-serif`;
}

/**
 * Utility to load in the corresponding non-Latin Plex font if necessary
 *
 * @example
 * import { loadNonLatinPlex } from '@carbon/ibmdotcom-utilities';
 *
 * loadNonLatinPlex('ar');
 *
 * @param {string} language two-character language code
 */
function loadNonLatinPlex(language) {
  if (_fonts[language]) {
    _injectCSS(language);
    _setFontFamily(language);
  }
}

export default loadNonLatinPlex;

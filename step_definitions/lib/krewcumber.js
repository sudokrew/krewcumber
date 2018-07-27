const { clickElement } = require("./interaction");
const { assertAtLocation } = require("./navigation/location");

/**
 *
 * @param {WebdriverIO} browser
 */
module.exports = function krewcumber(browser) {
  return {
    /**
     * Clicks an element on the page based on text
     * @param {String} text
     */
    click(text) {
      const textSelector = `//*[text()='${text}']`;
      return clickElement(browser, textSelector);
    },
    /**
     * Asserts that the browser is at the specified URI
     * Resolves absolute paths to wdio BASE_URL
     * @param {String} uri
     */
    assertAtLocation(uri) {
      return assertAtLocation(browser, uri);
    }
  };
};

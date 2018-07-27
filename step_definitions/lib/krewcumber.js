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
    assertAtLocation(uri) {
      return assertAtLocation(uri);
    }
  };
};

krewcumber(browser).assertAtLocation();

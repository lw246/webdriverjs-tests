// @flow
import webdriver from 'selenium-webdriver'

export default class DriverBuilder {
  driver: WebDriverClass

  constructor (browser: string) {
    const builder = new webdriver.Builder().forBrowser(browser)
    // $FlowIssue getting chrome capabilities as method is a-ok
    this.driver = builder.build()
  }

  async quit (): Promise<void> {
    return this.driver.quit()
  }

}

import { By, Key } from 'selenium-webdriver'
import BasePage from './BasePage'

const SEARCH_BUTTON = By.name('btnK')
const SEARCH_BOX = By.name('q')
const SEARCH_SUGGESTIONS = By.id('sbtc')
const SEACH_BOX_BUTTON = By.css('[value="Google Search"]')

export default class HomePage extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(SEARCH_BOX)
    await this.waitForDisplayed(SEARCH_BUTTON)
  }

  async search (searchTerm: string) {
    await this.waitForDisplayed(SEARCH_BOX)
    await this.sendKeys(SEARCH_BOX, searchTerm)
    const suggestions = await this.waitForDisplayed(SEARCH_SUGGESTIONS)
    await suggestions.findElement(SEACH_BOX_BUTTON).click()
  }
}

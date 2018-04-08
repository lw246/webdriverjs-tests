import { By, Key } from 'selenium-webdriver'
import BasePage from './BasePage'

const RESULT_STATS = By.id('resultStats')
const SEARCH_BOX = By.id('lst-ib')

export default class SearchResultsPage extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(RESULT_STATS)
  }

  async search(searchTerm : string) {
    await this.sendKeys(SEARCH_BOX, searchTerm)
    await this.sendKeys(SEARCH_BOX, Key.ENTER)
  }

}

// @flow
import { assert } from 'chai'

import HomePage from './../src/pageobjects/HomePage'
import SearchResultsPage from './../src/pageobjects/SearchResultsPage'

import DriverBuilder from './../src/lib/DriverBuilder'
import driverutils from './../src/lib/driver-utils'

describe('Acceptance Tests', function () {
  let driverBuilder
  let driver

  before(async function () {
    driverBuilder = new DriverBuilder('firefox')
    driver = driverBuilder.driver
  })

  beforeEach(async function() {
    await driverutils.goToHome(driver)
  })

  it('Loads the home page', async function () {
    const homePage = new HomePage(driver)
    await homePage.isLoaded()
    const title = await homePage.getPageTitle()
    assert.strictEqual(title, 'Google', 'Page tile match expected title')
  })

  it('Searches for a term', async function () {
    const homePage = new HomePage(driver)
    await homePage.isLoaded()
    await homePage.search('Test')

    const searchResultsPage = new SearchResultsPage(driver)
    await searchResultsPage.isLoaded()
    const title = await searchResultsPage.getPageTitle()
    assert.strictEqual(title, 'Test - Google Search', 'Title should reference search term')
  })

  after(async function () {
    await driverBuilder.quit()
  })
})

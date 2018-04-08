const baseUrl = 'https://google.com/ncr'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  }
}

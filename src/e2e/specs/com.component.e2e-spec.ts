import { browser, element, by } from 'protractor';

describe('COM', () => {

  beforeEach(async () => {
    return await browser.get('/com');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-com h2')).getText()).toEqual('Com subsystem page');
  });

});

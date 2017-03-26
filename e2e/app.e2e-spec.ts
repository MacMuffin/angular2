import { Angular2TestprojectPage } from './app.po';

describe('angular2-testproject App', function() {
  let page: Angular2TestprojectPage;

  beforeEach(() => {
    page = new Angular2TestprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

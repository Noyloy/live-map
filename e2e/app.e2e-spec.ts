import { LiveMapPage } from './app.po';

describe('live-map App', () => {
  let page: LiveMapPage;

  beforeEach(() => {
    page = new LiveMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

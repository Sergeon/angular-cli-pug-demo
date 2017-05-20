import { PugDemoPage } from './app.po';

describe('pug-demo App', () => {
  let page: PugDemoPage;

  beforeEach(() => {
    page = new PugDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

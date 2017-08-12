import { BinaryHowPage } from './app.po';

describe('binary-how App', () => {
  let page: BinaryHowPage;

  beforeEach(() => {
    page = new BinaryHowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

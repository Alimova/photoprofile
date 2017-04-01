import { PhotoprofilePage } from './app.po';

describe('photoprofile App', () => {
  let page: PhotoprofilePage;

  beforeEach(() => {
    page = new PhotoprofilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

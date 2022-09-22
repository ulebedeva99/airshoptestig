export class LoginModal {
  get pageWrapper() {
    return $('//*[@id="modal-login"]');
  }

  public async isOpened() {
    return await this.pageWrapper.isExisting();
  }
}

export const loginModal = new LoginModal();

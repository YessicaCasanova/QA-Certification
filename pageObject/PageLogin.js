import {Selector} from 'testcafe'

export default class PageLogin{
    constructor(){
       this.txtUser = Selector('#user-name');
       this.txtPassword = Selector('#password');
       this.btnLogin = Selector('#login-button');
       this.lblWelcomeText = Selector('div.product_label');
       this.btnError = Selector('h3>button.error-button');
       this.btnMenu = Selector('#react-burger-menu-btn');
       this.aLogOut = Selector('#logout_sidebar_link');
    }
}
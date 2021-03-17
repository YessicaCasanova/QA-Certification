import PageLogin from '../pageObject/PageLogin'
import PageActionsShopping from '../pageObject/PageActionsShopping'

const page = new PageLogin();
const actions = new PageActionsShopping();
const DATA =require('../data/data');

fixture`Test Login`
    .page`https://www.saucedemo.com/`;


test('Login with a valid user', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .expect(page.lblWelcomeText.innerText).contains(DATA.MESSAGE.PRODUCTS)
});

test('Login with an invalid user', async t => {
    await t 
        .typeText(page.txtUser, DATA.USER.INVALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .expect(page.btnError.exists).ok
});

test('Logout from products page', async t => {
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(page.btnMenu)
        .click(page.aLogOut)
        .expect(page.txtUser.exists).ok()
});


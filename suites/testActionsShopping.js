import PageLogin from '../pageObject/PageLogin'
import PageActionsShopping from '../pageObject/PageActionsShopping'

const page = new PageLogin();
const actions = new PageActionsShopping();
const DATA =require('../data/data');

fixture`Test Shopping Actions`
    .page`https://www.saucedemo.com/`;

test('Navigate to the shopping cart', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(actions.aCart)
        .expect(actions.lblCart.innerText).contains(DATA.MESSAGE.CART)
});


test('Add a single item to the shopping cart', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin) 
        .click(actions.btnsItems.nth(0))
        .expect(actions.lblBagde.innerText).contains(DATA.COUNTITEMS.SINGLE)
});

test('Add multiple items to the shopping cart', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)      
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .expect(actions.lblBagde.innerText).contains(DATA.COUNTITEMS.ALL)
});

test('Continue with missing mail information', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.PROBLEM)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(actions.btnsItems.nth(0))
        .click(actions.aCart)
        .click(actions.btnCheckOut)
        .typeText(actions.txtFirstName, DATA.FIRSTNAME)
        .typeText(actions.txtLastName, DATA.LASTNAME)
        .typeText(actions.txtPostalCode, DATA.ZIP)
        .click(actions.btnContinue)
        .expect(actions.lblErrorInfo.innerText).contains(DATA.MESSAGE.ERROR)
});

test('Fill users information', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(actions.btnsItems.nth(0))
        .click(actions.aCart)
        .click(actions.btnCheckOut)
        .typeText(actions.txtFirstName, DATA.FIRSTNAME)
        .typeText(actions.txtLastName, DATA.LASTNAME)
        .typeText(actions.txtPostalCode, DATA.ZIP)
        .click(actions.btnContinue)
        .expect(actions.lblIndicator.innerText).contains(DATA.MESSAGE.OVERVIEW)
});


test('Final order items', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID )
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.aCart)
        .click(actions.btnCheckOut)
        .typeText(actions.txtFirstName, DATA.FIRSTNAME)
        .typeText(actions.txtLastName, DATA.LASTNAME)
        .typeText(actions.txtPostalCode, DATA.ZIP)
        .click(actions.btnContinue)
        .expect(actions.lblIndicator.innerText).contains(DATA.MESSAGE.OVERVIEW)       
        .expect(actions.itemsOrder.count.value).eql(actions.lblBagde.innerText.value)
});


test('Complete a purchase', async t =>
{
    await t 
        .typeText(page.txtUser, DATA.USER.VALID)
        .typeText(page.txtPassword, DATA.PASSWORD)
        .click(page.btnLogin)
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.btnsItems.nth(0))
        .click(actions.aCart)
        .click(actions.btnCheckOut)
        .typeText(actions.txtFirstName, DATA.FIRSTNAME)
        .typeText(actions.txtLastName, DATA.LASTNAME)
        .typeText(actions.txtPostalCode, DATA.ZIP)
        .click(actions.btnContinue)
        .expect(actions.lblIndicator.innerText).contains(DATA.MESSAGE.OVERVIEW)
        .expect(actions.itemsOrder.count.value).eql(actions.lblBagde.innerText.value)
        .click(actions.btnFinish)
        .expect(actions.lblIndicator.innerText).contains(DATA.MESSAGE.FINISH)
});
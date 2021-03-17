import {Selector} from 'testcafe'

export default class PageActionsShopping{
    constructor(){
       this.aCart = Selector('#shopping_cart_container>a');
       this.lblCart = Selector('div.subheader');
       this.btnItem0 = Selector('#inventory_container>div>div:nth-child(1)>div.pricebar>button');     
       this.lblBagde = Selector('#shopping_cart_container>a>span');      
       this.btnsItems = Selector('#inventory_container>div>div>div.pricebar>button.btn_primary.btn_inventory');
       this.btnCheckOut = Selector('#cart_contents_container>div>div.cart_footer>a.btn_action.checkout_button');
       this.txtFirstName = Selector('#first-name');
       this.txtLastName = Selector('#last-name');
       this.txtPostalCode = Selector('#postal-code');
       this.btnContinue = Selector('#checkout_info_container>div>form>div.checkout_buttons>input');
       this.lblErrorInfo = Selector('#checkout_info_container>div>form>h3');
       this.lblIndicator= Selector('#contents_wrapper>div.subheader');
       this.itemsOrder = Selector('#checkout_summary_container>div>div.cart_list>div.cart_item');
       this.btnFinish = Selector('#checkout_summary_container>div>div.summary_info>div.cart_footer>a.btn_action.cart_button');
    }
}
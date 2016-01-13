import angular from 'angular';
/*import the directives*/
import cart from './cart/cart.js';
import cartHeader from './cartHeader/cartHeader.js';
import cartFooter from './cartFooter/cartFooter.js';
import cartItem from './cartItem/cartItem.js';
import cartTotals from './cartTotals/cartTotals.js';
import cartCoupons from './cartCoupons/cartCoupons.js';
/*Intialize the components module*/
let ngModule = angular.module('sapient.cart.components', []);
/*initialize the directives*/
ngModule.directive('cart', cart);
ngModule.directive('cartHeader', cartHeader);
ngModule.directive('cartFooter', cartFooter);
ngModule.directive('cartItem', cartItem);
ngModule.directive('cartTotals', cartTotals);
ngModule.directive('cartCoupons', cartCoupons);

export default ngModule.name;

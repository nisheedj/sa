export default ['$templateCache', ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cart/cart.html'),
    controller: ['$scope', '$timeout', 'cartUpdateService', ($scope, $timeout, cartUpdateService) => {
      $scope.count = 0;
      $scope.cartData = [];
      $scope.wishlist = [];
      $scope.cartError = false;
      $scope.cartLoading = true;
      let loadingMsg = 'Cart is currently loading. Please wait...';
      let errorMsg = 'Could not retrieve cart data. Please contact administrator.';
      let noItemsMsg = 'No items in cart.';
      $scope.infoText = loadingMsg;
      $scope.promo = null;
      $scope.couponCode = '';

      //List of valid promos, this would have been 
      //a call to api to verify the promo code
      $scope.promos = [{
        code: 'JF10',
        price: 10
      }, {
        code: 'JF20',
        price: 20
      }];

      //Remove item function
      $scope.removeItem = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        $scope.cartData.splice(index, 1);
        $scope.infoText = $scope.cartData.length ? false : noItemsMsg;
      };

      //Add to wishlist
      $scope.addToWishlist = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        $scope.wishlist.push(angular.copy($scope.cartData[index]));
        $scope.removeItem(e, index);
        console.info('Wishlist-->', $scope.wishlist);
      };

      //Update cart subtotal function
      $scope.cartSubTotal = () => {
        let total = 0;
        angular.forEach($scope.cartData, function(item) {
          total += item.c_price;
        });
        return total;
      };

      //Update estimates total before taxes
      $scope.cartEstimatedTotal = () => {
        let subTotal = $scope.cartSubTotal();
        let shippingTotal = $scope.cartShippingTotal();
        let promoTotal = $scope.cartPromoTotal()
        return (subTotal + shippingTotal) - promoTotal;
      };

      $scope.cartShippingTotal = () => {
        let subTotal = $scope.cartSubTotal();
        let promoTotal = $scope.cartPromoTotal();
        //Ideally this would come from the back end via a service
        return (subTotal - promoTotal) > 50 ? 0 : 5;
      };

      $scope.cartPromoTotal = () => {
        return $scope.promo ? $scope.promo.price : 0;
      };

      //Apply coupons
      $scope.applyCoupon = ($event) => {
        $event.preventDefault();
        $event.stopPropagation();
        angular.forEach($scope.promos, (item) => {
          if (item.code === $scope.couponCode) {
            $scope.$evalAsync(() => {
              $scope.promo = item;
              $scope.couponCode = '';
            });
          }
        });
      };

      //Prevent manipulation of original quantity
      $scope.parseQuantity = () => {
        angular.forEach($scope.cartData, (item) => {
          item.c_quantity = item.p_quantity;
        });
      };

      //Retrive the cart on initialize of controller
      //Added delay to mock production delays
      $timeout(() => {
        cartUpdateService.getCartData().then((response) => {
          if (response.status !== 200) {
            $scope.cartError = true;
            $scope.infoText = errorMsg;
          } else {
            $scope.cartData = response.data.productsInCart;
            $scope.parseQuantity();
            $scope.infoText = $scope.cartData.length ? false : noItemsMsg;
          }
        }, (response) => {
          $scope.cartError = true;
          $scope.infoText = errorMsg;
        });
      }, 3000);
    }]
  };
}];

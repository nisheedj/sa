export default ['$templateCache', 'ModalService', function($templateCache, ModalService) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cartItem/cartItem.html'),
    controller: ['$scope', function($scope) {
      $scope.cartItem = $scope.cartData[$scope.$index];

      $scope.originalPrice = () => {
        return $scope.cartItem.p_originalprice * $scope.cartItem.c_quantity;
      }

      $scope.currentPrice = () => {
        $scope.cartItem.c_price = $scope.cartItem.p_price * $scope.cartItem.c_quantity;
        return $scope.cartItem.c_price;
      }

      $scope.$watch('cartItem.c_quantity', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          if (typeof newValue === 'undefined') {
            if (typeof oldValue !== 'undefined') {
              $scope.cartItem.c_quantity = oldValue;
            } else {
              $scope.cartItem.c_quantity = null;
            }
          }
        }
      });

      $scope.editCartItem = () => {
        ModalService.showModal({
          template: $templateCache.get('scripts/components/cartItemModal/cartItemModal.html'),
          controller: "cartItemModalController",
          inputs: {
            cartItem: $scope.cartItem
          }
        }).then((modal) => {
          modal.element.modal();
          modal.close.then((result) => {
            $scope.yesNoResult = result ? "You said Yes" : "You said No";
          });
        });
      };

    }]
  };
}];

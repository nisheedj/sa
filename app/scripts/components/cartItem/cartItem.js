export default ['$templateCache', function($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cartItem/cartItem.html'),
    controller: ['$scope', function($scope) {
      $scope.cartItem = $scope.cartData[$scope.$index];
      $scope.originalPrice = () => {
        return $scope.cartItem.p_originalprice * $scope.cartItem.p_quantity;
      }
      $scope.currentPrice = () => {
        $scope.cartItem.c_price = $scope.cartItem.p_price * $scope.cartItem.p_quantity;
        return $scope.cartItem.c_price;
      }
    }]
  };
}];

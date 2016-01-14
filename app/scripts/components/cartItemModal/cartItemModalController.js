export default ['$scope', 'close', 'cartItem', function($scope, close, cartItem) {
  $scope.cartItem = cartItem;


  $scope.selectedColor = angular.copy($scope.cartItem.p_selected_color);
  $scope.cartItemColors = [$scope.selectedColor];
  
  angular.forEach($scope.cartItem.p_available_options.colors, (item) => {
    if($scope.selectedColor.name !== item.name){
      $scope.cartItemColors.push(item);
    }
  });

  $scope.validQuantities = [1,2,3,4,5,6,7,8,9,10];
  $scope.selectedQty = $scope.cartItem.p_quantity;
  $scope.selectedSize = $scope.cartItem.p_selected_size;

  $scope.getSelectedColor = () => {
    return $scope.selectedColor;
  };

  $scope.setSelectedColor = (color) => {
    $scope.selectedColor = color;
    return;
  };

  $scope.isSelectedColor = (color) => {
    return $scope.selectedColor.name === color.name;
  };

  $scope.close = (result) => {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

}];

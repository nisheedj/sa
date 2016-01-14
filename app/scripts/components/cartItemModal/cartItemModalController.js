export default ['$scope', '$element', 'close', 'cartItem', ($scope, $element, close, cartItem) => {
  $scope.cartItem = cartItem;


  $scope.selectedColor = angular.copy($scope.cartItem.p_selected_color);
  $scope.cartItemColors = [$scope.selectedColor];

  angular.forEach($scope.cartItem.p_available_options.colors, (item) => {
    if ($scope.selectedColor.name !== item.name) {
      $scope.cartItemColors.push(item);
    }
  });

  $scope.validQuantities = [];

  //Need to put it in a usable format like the sizes
  for (var i = 0; i < 10; i++) {
    $scope.validQuantities.push({
      value: i + 1
    });
  };

  $scope.selectedQty = {
    value: $scope.cartItem.p_quantity
  };

  $scope.selectedSize = $scope.cartItem.p_selected_size


  $scope.getSelectedColor = () => {
    return $scope.selectedColor;
  };

  $scope.setSelectedColor = (e,color) => {
    e.preventDefault();
    e.stopPropagation();
    $scope.selectedColor = color;
    return;
  };

  $scope.isSelectedColor = (color) => {
    return $scope.selectedColor.name === color.name;
  };

  $scope.cancel = () => {
    close(null, 500);
  };

  $scope.updateItem = () => {
    $element.modal('hide');
    let payload = {
      selectedColor: $scope.selectedColor,
      selectedSize: $scope.selectedSize,
      selectedQty: $scope.selectedQty.value
    }
    close(payload, 500); // close, but give 500ms for bootstrap to animate
  };

}];

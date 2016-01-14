export default ['$templateCache', ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cartHeader/cartHeader.html'),
    controller: ['$scope', function($scope) {
      $scope.cartItemsPlural = {
        0: 'NO ITEMS',
        one: '{} ITEM',
        'other': '{} ITEMS'
      };
    }]
  };
}];

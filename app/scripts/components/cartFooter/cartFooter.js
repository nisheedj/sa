export default ['$templateCache', function($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      cartItems: '='
    },
    template: $templateCache.get('scripts/components/cartFooter/cartFooter.html')
  };
}];

export default ['$templateCache', function($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cartCoupons/cartCoupons.html')
  };
}];

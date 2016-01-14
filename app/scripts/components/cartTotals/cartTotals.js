export default ['$templateCache', ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('scripts/components/cartTotals/cartTotals.html')
  };
}];

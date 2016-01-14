export default ['$templateCache', ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      label: '@',
      modelProp: '@',
      mainModel: '=',
      updateModel:'=',
      labelValue: '='
    },
    template: $templateCache.get('scripts/components/cartSelect/cartSelect.html'),
    link: (scope, element, attrs) => {
      scope.dropdownOpen = false;
      scope.toggleDropDown = () =>{
        scope.dropdownOpen = !scope.dropdownOpen;
      };
      scope.selectItem = (e,option) => {
        e.preventDefault();
        e.stopPropagation();
        scope.dropdownOpen = false;
        scope.updateModel = option;
      }
    }
  };
}];

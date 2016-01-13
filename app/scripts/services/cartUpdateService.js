export default ['$http', function($http) {
  var _getCartData = function(){
    return $http.get('assets/cart.json');
  }
  return {
    getCartData: _getCartData
  }
}]

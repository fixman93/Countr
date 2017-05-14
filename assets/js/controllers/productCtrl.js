
      app.controller('myCtrl', function($scope, $http) {

        $scope.data = {};
        var config = {
          headers:  {
            "content-type": "application/json",
            "authorization": "Bearer 4ee5dafad115fa5689fd1dbceeca124c3bdeccfe"
          }
        };
        $http.get("https://countr-monolith-staging.herokuapp.com/v2/products", config)
          .then(function(response) {
              $scope.details = response.data;
          });
          $scope.updateProduct = function (){ 
          $http.patch("https://countr-monolith-staging.herokuapp.com/v2" + '/products/' + "5915f3a55239e10004853737" ,{ name: $scope.data.name }, config).success(function(res) {
            console.log(res);

          })
          .error(function(err) {
            console.log(err);
          });
        }
      });

      
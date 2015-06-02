app.factory('shows', function ($http) {
  return $http.get('shows.json')
          .success(function (data) {
              return data;
          }).error(function (err) {
              alert('unexpected error');
              return err;
          });
});

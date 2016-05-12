(function() {
  "use strict"

  angular.module('reddit')
  .factory('newPostService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      new: newPost
    }

    function newPost() {
      return $http.post('http://localhost:3000/api/v1/posts', newObj)
      .then(function(res) {
        return res;
      })
    }
  }
})();

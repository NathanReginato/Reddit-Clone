(function() {
  "use strict"

  angular.module('reddit')
  .factory('newPostService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      new: newPost
    }

    function newPost(post) {
      
      return $http.post('http://localhost:3000/api/v1/post', post)
      .then(function(res) {
        console.log(res.data[0]);
      })
    }
  }
})();

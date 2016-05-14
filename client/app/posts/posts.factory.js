(function() {
  "use strict"

  angular.module('reddit')
  .factory('postsService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      get: getPosts,
      deleteComment: deleteComment
    }

    function getPosts() {
      return $http.get('http://localhost:3000/api/v1/posts')
      .then(function(res) {
        return res;
      })
    }

    function deleteComment(id) {
      console.log('delete');
    }
  }
})();

(function() {
  "use strict"

  angular.module('reddit')
  .factory('postsService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      get: getPosts,
      deleteComment: deleteComment,
      deletePost: deletePost
    }

    function getPosts() {
      return $http.get('http://localhost:3000/api/v1/posts')
      .then(function(res) {
        return res;
      })
    }

    function deleteComment(id) {
      var idObj = {id: id}
      return $http.post('http://localhost:3000/api/v1/comment/delete', idObj)
      .then(function(res){
        console.log(res);
        return res;
      })
    }

    function deletePost(id) {
      var idObj = {id: id}
      return $http.post('http://localhost:3000/api/v1/post/delete', idObj)
      .then(function(res){
        console.log(res);
        return res;
      })
    }
  }
})();

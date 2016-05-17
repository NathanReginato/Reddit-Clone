(function() {
  "use strict"

  angular.module('reddit')
  .factory('postsService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    var _posts = [];

    return {
      get: getPosts,
      deleteComment: deleteComment,
      deletePost: deletePost,
      setPosts: setPosts
    }

    function getPosts() {
      return $http.get('http://localhost:3000/api/v1/posts')
      .then(function(res) {
        _posts = res.data
        return _posts
      })
    }

    function setPosts(post) {
      var postObj = {
        post: post,
        comment: []
      }
      _posts.push(postObj)
    }

    function deleteComment(id) {
      var idObj = {id: id}
      return $http.post('http://localhost:3000/api/v1/comment/delete', idObj)
      .then(function(res){
        return res;
      })
    }

    function deletePost(id) {
      var idObj = {id: id}
      return $http.post('http://localhost:3000/api/v1/post/delete', idObj)
      .then(function(res){
        return res;
      })
    }
  }
})();

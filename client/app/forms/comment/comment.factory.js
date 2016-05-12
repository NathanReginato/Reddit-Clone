(function() {
  "use strict"

  angular.module('reddit')
  .factory('newCommentService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      new: newComment
    }

    function newComment(formValues, postId) {
      var commentObject = formValues;
      commentObject.post_id = postId;
      return $http.post('http://localhost:3000/api/v1/comment', commentObject)
      .then(function(res) {
      })
    }
  }
})();

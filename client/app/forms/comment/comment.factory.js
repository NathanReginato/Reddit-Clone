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
      var commentObject = {id: postId, values: formValues};
      console.log(commentObject);
      return $http.post('http://localhost:3000/api/v1/comment', commentObject)
      .then(function(res) {
        console.log(res.data[0]);
      })
    }
  }
})();

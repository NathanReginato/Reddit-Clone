(function() {
  "use strict"

  angular.module('reddit')
  .factory('newPostService', factory)

  factory.$inject= ['$http', 'postsService'];

  function factory ($http, postsService) {
    return {
      new: newPost
    }

    function newPost(formValues) {
      var postObject = formValues;
      postObject.date_time = new Date();
      postObject.votes = 0;
      return $http.post('http://localhost:3000/api/v1/post', postObject)
      .then(function(res) {
        postsService.setPosts(res.data)
      })
    }
  }
})();

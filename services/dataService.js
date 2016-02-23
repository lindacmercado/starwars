angular.module('starwars').service('dataService', ['$http', '$q', function($http, $q) {

    var baseUrl = 'http://swapi.co/api/';

    this.getCharData = function(){
      var defer = $q.defer();
      $http({
        method: 'JSONP',
        url: baseUrl + 'people/1'
      })
      .then(function(data){
        var characters = [];
        console.log(data);
        var charData = data.data.results;

        for(var i = 0; i < characters.length; i++) {
          var char = {};
          char.name = charData[i].name;
          char.description = {
            hair: charData[i].hair_color,
            eye: charData[i].eye_color,
            gender: charData[i].gender
          };
          characters.push(char);
          console.log('characters array', characters)
        }
        defer.resolve(characters);
      });
      return defer.promise;
    };
}]);

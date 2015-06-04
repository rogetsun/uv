/**
 * Created by uv2sun on 15/6/4.
 */
angular.module('user.resource', ['ngResource'])
    .service('userResource', ['$http', '$resource', '$q', function ($http, $resource, $q) {
        return {
            list: function () {
                return $http.get('/user').then(function (res) {
                    console.log(res.data);
                    return res.data;
                });
            },
            save: function (user) {
                return $http.post('/user', user).then(function (res) {
                    console.log(res);
                    return res;
                })
            }
        }
    }]);
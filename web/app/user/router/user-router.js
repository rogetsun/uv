/**
 * Created by uv2sun on 15/6/4.
 */

angular.module('user.router', ['ui.router', 'user.resource'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user-list', {
                parent:'index',
                url:'/user',
                data:{
                    title:'用户列表'
                },
                templateUrl:'app/user/tpls/user-list.html',
                controller:['$scope', '$state', 'userResource', function ($scope, $state, userResource) {
                    userResource.list().then(function (data) {
                        $scope.user_list = data;
                    });
                    $scope.title = $state.current.data.title;
                }]
            })
            .state('user-add', {
                parent:'index',
                url:'/user',
                data:{
                    title:'用户添加'
                },
                templateUrl:'app/user/tpls/user-add.html',
                controller:['$scope', '$state', 'userResource', function ($scope, $state, userResource) {
                    console.log(JSON.stringify($scope.conf, null, 4));
                    $scope.conf.title = $state.current.data.title;
                    $scope.save = function () {
                        userResource.save($scope.user).then(function (data) {});
                    }

                }]
            })
    }]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
])


    .controller('LoadScripts', ['$scope', function ($scope) {
        // Catch the keydown for the entire document
        angular.element(document).ready(function () {
            $('body').on('keydown', 'input, select', function (e) {
                var self = $(this)
                    , form = self.parents('form:eq(0)')
                    , focusable
                    , next
                    ;
                if (e.keyCode == 13) {
                    focusable = form.find('input,a,select,button,textarea').filter(':visible');
                    next = focusable.eq(focusable.index(this) + 1);
                    if (next.length) {
                        next.focus();
                        next.select();
                    } else {
                        form.submit();
                    }
                    return false;
                }
            });

        });

    }]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]
);

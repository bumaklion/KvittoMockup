'use strict';

angular.module('myApp.view1', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'KvittoListController'
        });
    }])

    /*kontroller för listan*/
    .controller('KvittoListController', ['$scope', 'Kvitto', function ($scope, Kvitto) {
        $scope.Kvitto = Kvitto;
    }])

    /*factory som innehåller delad funtionalitet*/
    .factory("Kvitto", function KvittoFactory() {
        var allaKvitton = reciepts;
        var kvittoToEdit;
        return {
            all: function
                () {
                return allaKvitton;
            }
            ,

            remove: function (kvittoToRemove) {
                allaKvitton.splice(allaKvitton.indexOf(kvittoToRemove), 1);
            }
            ,

            getKvittoToEdit: function () {
                return kvittoToEdit;
            }
            ,

            editThis: function (newKvittoToEdit) {
                if (newKvittoToEdit) {
                    if (!newKvittoToEdit.rader)
                        newKvittoToEdit.rader = {};
                    if (newKvittoToEdit.rader.length == 0)
                        newKvittoToEdit.rader.push({});
                }
                kvittoToEdit = newKvittoToEdit;
            }
        }
            ;
    })

    /*directive för recipe box*/
    .
    directive('recipeBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'view1/recipe-box.html'
        };
    })

    /*directive för edit, eget scope och kontroller!*/
    .directive('editRecipe', function () {
        return {
            restrict: 'E',
            templateUrl: 'view1/edit-recipe.html',
            controller: ['$scope', 'Kvitto', function ($scope, Kvitto) {
                $scope.Kvitto = Kvitto;

                $scope.newRow = function () {
                    Kvitto.getKvittoToEdit().rader.push({});
                }

                $scope.formSubmit = function () {
                    Kvitto.editThis(null);
                }

            }],
            controllerAs: 'EditController',
            scope: {}
        };
    })

var reciepts = [
    {
        datum: "2015-06-14",
        anteckning: "Representationsmiddag med säljarna på företaget som vi ska köpa.",
        bild: "view1/k1.jpg",
        totalBelopp: 8000,
        rader: [
            {
                belopp: 600.37,
                konto: "4010",
                kostnadstyp: "kontorsmaterial",
                dim1: null
            },
            {
                belopp: 7399.63,
                konto: "5020",
                kostnadstyp: null,
                dim1: null
            }
        ]
    },
    {
        datum: "2015-10-14",
        anteckning: "Maja, Simon, Pelle.",
        bild: "view1/k2.jpg",
        totalBelopp: null,
        rader: []
    },
    {
        datum: "2015-06-14",
        anteckning: "Grejer till mässan..",
        bild: "view1/k3.jpg",
        totalBelopp: null,
        rader: []
    },
    {
        datum: "2015-06-14",
        anteckning: "Avskedsfika till Börje",
        bild: "view1/k4.jpg",
        totalBelopp: null,
        rader: []
    },
    {
        datum: "2015-06-14",
        anteckning: "",
        bild: "view1/k5.jpg",
        totalBelopp: null,
        rader: []
    }
];
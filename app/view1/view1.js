'use strict';

angular.module('myApp.view1', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'mittAlias'
        });
    }])


    .directive('recipeBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'view1/recipe-box.html'
        };
    })

    .directive('editRecipe', function(){
        return {
            restrict: 'E',
            templateUrl: 'view1/edit-recipe.html'
        };
    })


    .controller('View1Ctrl', [function () {
        this.kvitton = reciepts;
        this.currentKvittoToEdit;

        var controller = this;

        this.taBort = function (kvittoAttTaBort) {
            controller.kvitton.splice(controller.kvitton.indexOf(kvittoAttTaBort), 1);
        };

        this.editThis = function (kvittoToEdit) {
            controller.currentKvittoToEdit = kvittoToEdit;
        };

    }])

var reciepts = [
    {
        datum: "2015-06-14",
        anteckning: "Representationsmiddag med säljarna på företaget som vi ska köpa.",
        bild: "view1/k1.jpg"
    },
    {
        datum: "2015-10-14",
        anteckning: "Maja, Simon, Pelle.",
        bild: "view1/k2.jpg"
    },
    {
        datum: "2015-06-14",
        anteckning: "Grejer till mässan..",
        bild: "view1/k3.jpg"
    },
    {
        datum: "2015-06-14",
        anteckning: "Avskedsfika till Börje",
        bild: "view1/k4.jpg"
    },

    {
        datum: "2015-06-14",
        anteckning: "",
        bild: "view1/k5.jpg"
    }
];
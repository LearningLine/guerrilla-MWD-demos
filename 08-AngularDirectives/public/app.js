angular
    .module('myApp', [])
    .controller('myController', function($http, $scope) {
        $scope.message = 'hi';
        $scope.toggleLinkText = 'hide/show';
        setData();

        $scope.newData = setData;

        function setData() {
            console.log('i work!!');
            $scope.myData = [];
            for (var i = 0; i < 7; i++) {
                $scope.myData.push(Math.random() * 100);
            }
        }

        $scope.myClick = function() {
            console.log('controller got the click!!');
        };
    })
    .directive('myTogglePanel', function() {
        // Directive Definition Object - DDO
        return {
            restrict: 'E', // EACM
            // template: '<div>hi!</div>',
            templateUrl: 'my-toggle-panel.html',
            // replace: true,
            transclude: true,
            scope: {
                toggleText: '='
            },
            link: function(scope, element, attrs) {
                // console.log(element.length);
                // console.log(attrs);

                scope.$watch('toggleText', function() {
                    toggleLink.textContent = scope.toggleText;
                });

                var toggleLink = element[0].querySelector('.toggle');

                // toggleLink.textContent = scope.toggleText;

                angular.element(toggleLink).on('click', function() {
                    angular.element(element[0].querySelector('.content')).toggleClass('ng-hide');
                });
            }
        };
    })
    .directive('myLineChart', function() {
        return {
            restrict: 'E',
            template: '<canvas></canvas>',
            scope: {
                chartData: '=',
                myClick: '&'
            },
            link: function(scope, element, attrs) {
                var ctx = element.find('canvas')[0].getContext('2d');

                element.on('click', function(e) {
                    console.log(e);

                    console.log(e.offsetX, e.offsetY);

                    console.log('clicked!!');

                    scope.myClick();
                });

                scope.$watch('chartData', function() {
                    var data = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My Second dataset",
                                fillColor: "rgba(151,187,205,0.2)",
                                strokeColor: "rgba(151,187,205,1)",
                                pointColor: "rgba(151,187,205,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(151,187,205,1)",
                                data: scope.chartData
                            }
                        ]
                    };

                    var options = {};

                    var myLineChart = new Chart(ctx).Line(data, options);
                });
            }
        };
    })














;

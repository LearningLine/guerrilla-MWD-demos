angular
    .module('myDirectives', [])
    .directive('myOneClickButton', function() {
        // DDO - Directive Definition Object
        return {
            // E = element
            // A = attribute
            // C = class
            // M = comment
            restrict: 'A',

            link: function(scope, element, attrs) {
                element.one('click', function() {
                    element.prop('disabled', true);
                });
            }
        };
    })
    .directive('myNClickButton', function() {
        return {
            restrict: 'E',
            templateUrl: 'myNClickButton.html',
            replace: true,
            transclude: true,
            link: function(scope, element, attrs) {
                var count = 0;

                var maxClicks = +attrs.maxClicks;

                element.on('click', function() {
                    count++;

                    if (count >= maxClicks) {
                        element.prop('disabled', true);
                    }
                });
            }
        }
    })
    .directive('myDatePicker', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                $(element).datepicker({
                    onSelect: function(e, ui) {
                        ngModel.$setViewValue(new Date(
                            ui.selectedYear,
                            ui.selectedMonth,
                            ui.selectedDay
                        ));
                    }
                });

                ngModel.$render = function() {};

                setTimeout(function() {
                    $(element).datepicker('setDate', ngModel.$modelValue);
                });
            }
        };
    })
    .directive('myPasswordStrength', function() {
        return {
            restrict: 'A',
            // isolate scope
            scope: {
                password: '=myPasswordStrength',
                notifyBad: '&myNotifyBadPassword'
            },
            link: function(scope, element, attrs) {
                // console.log(attrs.myPasswordStrength);
                // console.log(scope.$eval(attrs.myPasswordStrength));

                scope.$watch('password', function(value) {
                    console.log(value);

                    if (!value || value.length < 4) {
                        element.text('BAD');

                        scope.notifyBad();
                    } else {
                        element.text('GOOD');
                    }
                });
            }
        }
    })
;

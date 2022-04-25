(function rangeSlider( $ ){

    if ( $('.js-rangeSlider').length == 0 ) {
        return false;
    }

    $(function() {

        $('.js-rangeSlider').each(function () {
            // Grab our DOM elements
            var $range = $(this);
            var $itemsInGroup = $( '[data-slider-group="' + $range.data('slider-group') + '"]' );
            var $fromInput = $itemsInGroup.filter(".js-rangeSlider-from");
            var $toInput = $itemsInGroup.filter(".js-rangeSlider-to");

            // Initialize some global variables
            var range, min, max, from, to;

            // Update the input fields with the correct to and from values
            var updateValues = function () {
                $fromInput.prop("value", from);
                $toInput.prop("value", to);
            };

            

        });

    });

})( jQuery );

// Search Results //

$(document).ready(function() {
    $("#search").on("keyup", function() {
        //Target input element and pass event listener "keyup"
        let value = $(this) //case sensitive
            .val()
            .toLowerCase();
        $("a").each(function() {
            //loop through all link elements on page
            let str = $(this) //targeting the data-title attribute
                .attr("data-title")
                .toLowerCase();
            if (str.indexOf(value) > -1) {
                //if the data title attribute contains a letter in value/input
                $(this).show(); //show all possible options
            } else {
                $(this).hide(); //hide all possible options
            }
        });
    });
});

// Search Results //

$(document).ready(function() {
    $("#search").on("keyup", function() {
        //Target input element and pass event listener "keyup"
        let value = $(this).val().toLowerCase(); //case sensitive  
        $("a").each(function() {
            //loop through all link elements on page
            let str = $(this).attr("data-title"); //targeting the data-title attribute
            if (str.indexOf(value) > -1) {
                //if the data title attribute contains a letter in value/input
                $(this).show(); //show all possible options
            } else {
                $(this).hide(); //hide all possible options
            }
        });
    });
});
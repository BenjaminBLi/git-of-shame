(function($){
    $(document).ready(function(){
        $("#test-info").mouseenter(function(){
            var test = "";
            $("#test-info").html=("");
            $.ajax({
                url : "https://api.github.com/users/BenjaminBLi/followers",
                dataType : "jsonp",
                
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
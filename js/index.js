(function($){
    $(document).ready(function(){
        $("#submit").on('click', function(e){
            e.preventDefault();

            $('#usernames').html("loading...");

            let user = $("#userid").val();
            console.log(user);

            let usernames = [];
            $.ajax({
                url : "https://api.github.com/users/" + user + "/followers",
                dataType : "jsonp",
                
            }).done(function(json){
                //if username is queried successfully, find
                //console.log( json.data);
                for(let i = 0; i < json.data.length; i++) {
                    usernames.push(json.data[i].login);
                }
                console.log(usernames);
                $("#usernames").html("<code>" + usernames + "</code>")
            });

            //let's avoid the pyramid of doom shall we
            //after getting the usernames, I want to sum up the amount of code contributed in the past week by username

            for(let i = 0; i < usernames.length; i++){
                //get list of repos

                //get code freq per repo and sum together
            }


        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
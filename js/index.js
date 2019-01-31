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
                //console.log(usernames);

                for(let i = 0; i < usernames.length; i++){
                    //get list of repos
                    let curr_user = usernames[i];
                    let repos = [];

                    $.getJSON("https://api.github.com/users/"+curr_user+"/repos", function(data){
                        $.each(data, function(key, val){
                            repos.push(val.name);
                        });
                    });
                    console.log(curr_user);
                    console.log(repos);
                    //get code freq per repo and sum together
                    let user_sum = 0;
                    /*
                    for (let i = 0; i < repos.length; i++){
                        $.getJSON("https://api.github.com/repos/"+curr_user+"/"+repos[i]+"/stats/code_frequency",
                            function(data){
                                console.log(data);
                            });
                    }*/
                    console.log(user_sum);
                }

                $("#usernames").html(usernames_as_html(usernames));
            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

function usernames_as_html(usernames){
    let ret = "<ul>\n";
    for(let i = 0; i < usernames.length; i++){
        ret += "<li> ";
        ret += usernames[i];
        ret += "</li>\n";
    }
    ret += "</ul>\n";
    return ret;
}
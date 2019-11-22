//  Author:  Andrew Clos
//  Date:  11/20/2019
//  Title: EntryScript.js
//  Description: This program takes input from a text box and, sends that input to HTTPBin
//               via a POST, and then parses the JSON that is returned and adds that data to
//               the HTML.

document.addEventListener('DOMContentLoaded', makePost);


function makePost()
{
    document.getElementById("sub").addEventListener("click", function(event)
    {
        var newPost = new XMLHttpRequest();
        var forPosting = "***default***";
        var fromUser = document.getElementById("entry1").value;
        
        newPost.open("POST", "https://httpbin.org/post", true);
        newPost.setRequestHeader('Content-Type', 'application/json');

        newPost.addEventListener("load", function()
        {
            if(newPost.status < 400 && newPost.status >= 200)
            {
                forPosting = JSON.parse(JSON.parse(newPost.responseText).data);
                document.getElementById("rec").textContent += forPosting;
                
            }
            else
            {
                alert("Error: status not between 200 and 300");
            }
        });
        newPost.send(JSON.stringify(fromUser));
        event.preventDefault();

    });
}
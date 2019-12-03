

function showReplys(event){
    let content = event.target.parentNode.parentNode;
    let replys = content.querySelector('.replys');
    if(replys.style.display == 'block'){
        replys.style.display = 'none';
    }else{
        replys.style.display = 'block';
    }
}

function searchLastestDiscussionByTopic(){
    let select = document.getElementsByClassName("searchLastestDiscussionByTopic");
    clearUpDisplayNone();
    let content = document.getElementsByClassName('questionContent');
    for(let i=0;i<content.length;i++){
        let span = content[i].querySelector('span');
        // console.log(span.textContent);
        console.log('testing span')
        if(select[0].value != span.textContent){
            content[i].parentNode.style.display = 'none';
        }
    }
}

function clearUpDisplayNone(){
    let content = document.getElementsByClassName('questionContent');
    for(let i=0;i<content.length;i++){
        content[i].parentNode.style.display = 'flex';
    }
}


$(".repliesBox").click(function(){
    let spanReply = document.getElementsByClassName('repliesBox');
    
    let divBox = document.createElement("div");
    
    //add a for loop here , and put the code below inside the for loop.
    // (for let i = 0; ;i < replies.length; i ++){

    //}

    let pic = document.createElement("img");
    pic.setAttribute("src", "https://randomuser.me/api/portraits/med/women/81.jpg");
    
    pic.classList.add("pic");

    let reply = document.createElement("span");
    reply.classList.add("reply");
    
    reply.innerHTML = "ayyyyyyyyy lmaooooooooo";

    $(divBox).append(pic);
    $(divBox).append(reply);
    $(this).append(divBox);
});

// $('.formSearch').submit(function(event){
//     event.preventDefault();
    
//     searchTopic = document.getElementById("searchValue").value;

//     let url = $(this).attr('action');

//     console.log('bethch');

//     $.ajax({
//         url: ,
//         data : searchTopic,
//         success: function(data){
//             alert('success');
//         }
//     });
// })

// $('#search').submit(function(event){
//     $.post('/search', (req,res)=>{
//         searchTopic = document.getElementById("searchValue").value;
//         //res.send(searchTopic);
//         console.log("hallo");
//     });
// });
/////////////////////////////////////////
/////////////////////////////////////////
//STILL WORKING ON THE SEARCH FUNCTION . HALPPPPPPP
function test(){
    console.log("hallofirst");
    searchTopic = document.getElementById("searchValue").value;
    $.post('/searchByTopic', {data:searchTopic});
}

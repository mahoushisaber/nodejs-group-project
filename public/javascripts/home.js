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


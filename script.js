function displayEducation(){
    document.getElementsByClassName('work-table')[0].style.display = 'none';
    document.getElementsByClassName('education-table')[0].style.display = 'table';
    document.getElementsByClassName('prize-table')[0].style.display = 'none';
}

function displayWork(){
    document.getElementsByClassName('work-table')[0].style.display = 'table';
    document.getElementsByClassName('education-table')[0].style.display = 'none';
    document.getElementsByClassName('prize-table')[0].style.display = 'none';
}

function displayPrize(){
    document.getElementsByClassName('work-table')[0].style.display = 'none';
    document.getElementsByClassName('education-table')[0].style.display = 'none';
    document.getElementsByClassName('prize-table')[0].style.display = 'table';
}

var i = 0;
function process(){
    i += 1;
    if(i%2 == 1){
        var img_content = document.getElementsByClassName('img-content')[0].getElementsByClassName('odd')[0].cloneNode(true);
    }
    else{
        var img_content = document.getElementsByClassName('img-content')[0].getElementsByClassName('even')[0].cloneNode(true);
    }
    var message = document.getElementById('message').value;
    var name = document.getElementById('guestname').value;
    img_content.getElementsByClassName('name')[0].innerHTML = name;
    img_content.getElementsByClassName('content')[0].innerHTML = message;
    img_content.style.display = 'block';
    document.getElementsByClassName('img-content')[0].appendChild(img_content);
    document.getElementById('message').value = null;
    document.getElementById('guestname').value = null;
}
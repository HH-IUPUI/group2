function show() {
    document.getElementById('text1').style.display='block';
    document.getElementById('hide1').style.display='inline';
    document.getElementById('show1').style.display='none'; 
    return false;
}

function hide() {
    document.getElementById('text1').style.display='none';
    document.getElementById('hide1').style.display='none';
    document.getElementById('show1').style.display='inline'; 
    return false;
}
function clickbackbtn() {
    // alert("クリック");
    location.href = '../index/index.html';
}

const btn = document.getElementById("back-btn");
btn.addEventListener('click',clickbackbtn,false);

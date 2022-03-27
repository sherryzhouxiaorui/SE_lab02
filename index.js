window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }
    window.addEventListener('keydown', function(e) {
        if(e.keyCode === 13)
            to();
    });
    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });
}

function jumpPage(searchValue) {
    window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
}

function to(){
    var searchValue = document.getElementById("search-inputContent").value;

    //window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
    jumpPage(searchValue);
    //alert(searchValue);
}

function search() {
    // TODO: 搜索触发后的行为
    const inputContent = document.getElementById('search-inputContent').value;
    if(inputContent!=="")
        alert(inputContent);
    else alert("请输入搜索内容");
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = (Kernal.getUserName()).split("*")[0];

    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + username + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}
const html = document.querySelector('html');
// 主题切换函数
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    html.dataset.theme = themeName;
}

// 设置按钮切换主题
function toggleTheme() {
    if (localStorage.getItem('theme') === 'Dark') {
        console.log(localStorage);
        setTheme('Light');
    } 
    else {
        console.log(localStorage);
        setTheme('Dark');
    }
}

// 加载上次的主题颜色
(function() {
    if (localStorage.getItem('theme') === 'Dark') {
        setTheme('Dark');
        document.getElementById('myCheckbox').checked = false;     
    } else {
        setTheme('Light');
        document.getElementById('myCheckbox').checked = true;
    }
})();

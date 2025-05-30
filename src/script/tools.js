const toggleClass = (selector, className) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

const pop = (imageURL) => {
    let tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

let tc = document.getElementsByClassName('tc');
let tc_main = document.getElementsByClassName('tc-main');
let isAnimating = false; // 添加一个标志变量，用于判断动画是否正在进行

tc[0].addEventListener('click', function (event) {
    // 获取当前元素的opacity值
    let opacity = window.getComputedStyle(this).getPropertyValue('opacity');
    // 如果当前元素的opacity不为0，并且没有正在进行的动画，则执行渐隐效果
    if (opacity != '0' && !isAnimating) {
        isAnimating = true; // 设置标志为true，表示动画正在进行
        // 修改元素的opacity为0，触发CSS过渡，实现渐隐效果
        this.style.opacity = '0';
        // 渐隐效果完成后，调用pop()函数
        setTimeout(function() {
            pop();
            // 渐隐完成后，重新显示元素，为下一次点击做准备
            setTimeout(function() {
                this.style.opacity = '1'; // 重新显示元素
                isAnimating = false; // 设置标志为false，表示动画已完成
            }.bind(this), 500); // 500ms是过渡时间
        }.bind(this), 500); // 500ms是过渡时间
    }
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});
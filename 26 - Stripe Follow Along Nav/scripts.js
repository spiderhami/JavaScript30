const elemBg = document.querySelector('.dropdownBackground'); // Highlight
const liList = document.querySelectorAll('.cool > li'); // Trigger
const elemNav = document.querySelector('nav.top'); // Parent element for locating

function showDropdown() {
    elemBg.classList.add('open');
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 200);

    // getBoundingClientRect返回的top/left是元素之于当前视窗的（受滚动影响）
    const dropdownInfo = this.querySelector('.dropdown').getBoundingClientRect();
    const parentInfo = elemNav.getBoundingClientRect();
    const bgInfo = {
        width: dropdownInfo.width,
        height: dropdownInfo.height,
        top: dropdownInfo.top - parentInfo.top,
        left: dropdownInfo.left - parentInfo.left
    };
    elemBg.style.width = `${bgInfo.width}px`;
    elemBg.style.height = `${bgInfo.height}px`;
    elemBg.style.transform = `translate(${bgInfo.left}px, ${bgInfo.top}px)`;
}

function hideDropdown() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    elemBg.classList.remove('open');
}


liList.forEach(li => {
    li.addEventListener('mouseenter', showDropdown);
    li.addEventListener('mouseleave', hideDropdown);
});

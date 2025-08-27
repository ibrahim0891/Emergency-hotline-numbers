

let attachBouncyCursor = () => {
    let cursor = `<div class=" fixed transition-transform origin-top pointer-events-none flex items-center justify-center flex-col "
                id="pointer-follower">
                <img src='https://cursor.in/assets/pointinghand.svg' class='w-12' alt="cursor faild to laod">
            </div>`
    const style = document.createElement('style');
    style.innerHTML = `
    * { 
        cursor: none;
        }
    `;
    document.head.appendChild(style);

    let container = document.createElement('div')
    container.innerHTML = cursor;
    document.body.appendChild(container.firstElementChild)


    let follower = document.getElementById('pointer-follower')

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        follower.style.left = x - 10 + 'px'
        follower.style.top = y - 10 + 'px'
    })

    document.addEventListener('mousedown', (e) => {
        follower.style.transform = `scale(0.8)`
    })
    document.addEventListener('mouseup', (e) => {
        follower.style.transform = `scale(1)`
    })

    document.addEventListener('mouseleave', (e) => {
        follower.style.display = 'none'
    })
    document.addEventListener('mouseenter', (e) => {
        follower.style.display = 'block'
    })

    document.addEventListener('touchmove', (e) => {
        let touch = e.touches[0];
        if (touch) {
            let x = touch.clientX;
            let y = touch.clientY;
            follower.style.left = x - 10 + 'px'
            follower.style.top = y - 10 + 'px'
        }
    })
    document.addEventListener('touchstart', (e) => {
        follower.style.transform = `scale(0.8)`
        let touch = e.touches[0];
        if (touch) {
            let x = touch.clientX;
            let y = touch.clientY;
            follower.style.left = x - 10 + 'px'
            follower.style.top = y - 10 + 'px'
        }
    })
    document.addEventListener('touchend', (e) => {
        follower.style.transform = `scale(1)`
    })
}

export { attachBouncyCursor } 
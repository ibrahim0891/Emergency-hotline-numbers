import { emptyHistory } from "./dataStore.js"

let getElement = (id) => {
    return document.getElementById(id)
}

let copyToCLipboart = async (data) => {
    try {
        await navigator.clipboard.writeText(data)
        alert(`'${data}' ক্লিপবোর্ডে কপি করা হয়েছে! ✅`)
        showToast(`'${data}' ক্লিপবোর্ডে কপি করা হয়েছে! ✅`, 10000);
    } catch (error) {
        alert('Clipboard error!')
    }
}

let renderHistory = function (historyData) {
    let historyContainer = getElement('history-container')

    if (historyData.length == 0) {
        historyContainer.innerHTML = emptyHistory;
        // historyContainer.innerHTML = `<div></div>`
    } else {
        historyContainer.innerHTML = ''
        historyData.forEach((data) => {
            historyContainer.innerHTML += data
        })
    }
}


let toast = getElement('toast')

function showToast(message, timeout) {
    toast.innerText = message
    toast.classList.remove('-bottom-full')
    toast.classList.add('bottom-0')
    setTimeout(() => {
        toast.classList.add('-bottom-full')
        toast.classList.remove('bottom-0')
    }, timeout)
}

export {
    getElement,
    copyToCLipboart,
    renderHistory,
    showToast,
}
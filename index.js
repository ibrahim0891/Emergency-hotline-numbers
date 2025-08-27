import { attachBouncyCursor } from "./boucy-cursor.js";
import { cardData, cardTemplate, iconMap, historyTemplate, emptyHistory } from "./dataStore.js";

attachBouncyCursor()

let getElement = (id) => {
    return document.getElementById(id)
}

//Get all target elements 

let copyCount = getElement('copy-count')
let coinCount = getElement('coin-count')
let heartCount = getElement('heart-count')
let cardContainer = getElement('card-container')

let historyContainer = getElement('history-container')
let historyClear = getElement('history-clear')

let toast = getElement('toast')

let historyData = []


let renderHistory = function (historyData) {
    if (historyData.length == 0) {
        // historyContainer.innerHTML = emptyHistory;
        historyContainer.innerHTML = `<div></div>`
    } else {
        historyContainer.innerHTML = ''
        historyData.forEach((data) => {
            historyContainer.innerHTML += data
        })
    }
}

let copyToCLipboart = async (data) => {
    try {
        await navigator.clipboard.writeText(data)
        alert(`'${data}' ক্লিপবোর্ডে কপি করা হয়েছে! ✅`)
        showToast(`'${data}' ক্লিপবোর্ডে কপি করা হয়েছে! ✅`, 10000);
    } catch (error) {

    }
}

function createCardObject(title, subTitle, phone, badge, icon) {
    return {
        title,
        subTitle,
        phone,
        badge,
        icon: iconMap[icon],
        increaseHeartCount() {
            let heartCountValue = Number(heartCount.innerText)
            heartCountValue++
            heartCount.innerText = heartCountValue;
            showToast('হার্ট কাউন্টের মান ১ বাড়ানো হয়েছে । ❤️', 2000)
        },
        copy() {
            let copyCountValue = Number(copyCount.innerText)
            copyCountValue++
            copyToCLipboart(this.phone)
            copyCount.innerText = copyCountValue
        },
        call() {
            let coinCountValue = Number(coinCount.innerText);
            if (coinCountValue < 20) {
                showToast('আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই । অনুগ্রহ করে রিচার্জ করুন 🧝‍♂️', 10000)
                alert(`You don't have enought coin`);
                return;
            }

            //unshift use kochi, jate latest call upore thake 
            historyData.unshift(historyTemplate(this.title, this.phone))

            renderHistory(historyData)
            coinCountValue -= 20;
            coinCount.innerText = coinCountValue;
            alert(`${this.title}-এর ${this.phone}-এ কল করা হচ্ছে । `)
            showToast(`${this.title}-এ কল করার জন্য ২০ কয়েন কেটে নেওয়া হয়েছে। 🙂`, 10000)
        }
    };
}

//cardMap e method shoho object store hocche. 
//CardMap amader data gula + sob data-r common method gula hold kore and cardData only static data hold kore
let cardMap = [];
for (let i = 0; i < cardData.length; i++) {
    const data = cardData[i];
    cardMap.push(createCardObject(data.title, data.subTitle, data.phone, data.badge, data.icon));
}


window.addEventListener('load', () => {
    cardContainer.innerHTML = '' //eta loading... text remove kore dibe

    //cadMap er object gula diye templete ke hydrate kore static html string array return hocche
    let cards = cardMap.map((card) => {
        return cardTemplate(card)
    })
    //cardMap theke pawya data bosano html gulake container e add kore dichhi.
    cards.forEach((card) => {
        cardContainer.innerHTML += card
    })


    document.querySelectorAll('.heart-button').forEach((button, index) => {
        button.addEventListener('click', (e) => {
            cardMap[index].increaseHeartCount()
        })
    })
    document.querySelectorAll('.copy-button').forEach((button, index) => {
        button.addEventListener('click', (e) => {
            cardMap[index].copy()
        })
    })
    document.querySelectorAll('.call-button').forEach((button, index) => {
        button.addEventListener('click', (e) => {
            cardMap[index].call()
        })
    })

    historyClear.addEventListener('click', () => {
        historyData = []
        renderHistory(historyData)
        showToast('হিস্টোরি ক্লিয়ার করা হয়েছে।', 3000)
    })

    //Page load howyer sathe sathe fallback dekhanor jonno call kora hocche.
    renderHistory(historyData)

})



function showToast(message, timeout) {
    toast.innerText = message
    toast.classList.remove('-bottom-full')
    toast.classList.add('bottom-0')
    setTimeout(() => {
        toast.classList.add('-bottom-full')
        toast.classList.remove('bottom-0')
    }, timeout)
}


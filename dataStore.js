const cardTemplate = (card) => `
<div class="p-8 rounded-2xl shadow-lg bg-white">
    <div class="flex items-center justify-between pb-4">
        <div class="p-4 bg-red-100 rounded-2xl">
            <img class="w-6" src="${card.icon}" alt="Emergency Icon">
        </div>
        <span class='heart-button button-bounce text-2xl ph-fill ph-heart p-4 rounded-md'> </span>

    </div>
    <div class="space-y-4">
        <div>
            <h3 class="text-2xl font-bold">${card.title}</h3>
            <p class="text-lg text-neutral">${card.subTitle}</p>
        </div>
        <div class="space-y-4">
            <h2 class="text-2xl font-extrabold">${card.phone}</h2>
            <span class="badge badge-ghost">${card.badge}</span>
        </div>
        <div class="flex gap-4 action-button-group">
            <button class="button-bounce action-button-copy copy-button" >
                <i class="ph-copy"></i> Copy
            </button>
            <button class="button-bounce bg-accent-primary action-button-call call-button" >
                <i class="ph-phone"></i> Call
            </button>
        </div>
    </div>
</div>
`;



let iconMap = {
    siren: './assets/emergency.png',
    railway: './assets/Bangladesh-Railway.png',
    ngo: './assets/brac.png',
    ambulance: './assets/ambulance.png',
    fire: './assets/ambulance.png',
    police: './assets/police.png',
}

let historyTemplate = (title, phone,) => `
<div class="call-history-card">
    <div>
        <h3 class="font-semibold text-lg text-gray-800">${title}</h3>
        <span class="text-sm text-gray-500">${phone} </span>
    </div>
    <div class="text-sm text-gray-600 font-medium ">${new Date().toLocaleTimeString()}</div>
</div>
`
let emptyHistory = `
    <div class="aspect-square sm:aspect-auto py-4 text-center bg-blue-50/70 text-blue-900 flex flex-col gap-4 items-center justify-center rounded-2xl">
        <img src="https://cdn1.iconfinder.com/data/icons/akura-empty-state-illustration/512/Need_Help-512.png" class="w-32" alt="" srcset="">
        আপনি এখনো কোনো কল করেননি
    </div>
`

const cardData = [
    {
        title: 'জাতীয় জরুরি সেবা',
        subTitle: 'National Emergency',
        phone: '999',
        badge: 'সার্বজনীন',
        icon: 'siren'
    },
    {
        title: 'পুলিশ',
        subTitle: 'Police',
        phone: '01320-999999',
        badge: 'পুলিশ',
        icon: 'police'
    },
    {
        title: 'ফায়ার সার্ভিস',
        subTitle: 'Fire Service',
        phone: '01711-123456',
        badge: 'ফায়ার',
        icon: 'fire'
    },
    {
        title: 'অ্যাম্বুলেন্স',
        subTitle: 'Ambulance',
        phone: '01999-888777',
        badge: 'স্বাস্থ্য',
        icon: 'ambulance'
    },
    {
        title: 'নারী ও শিশু সহায়তা',
        subTitle: 'Women & Child Helpline',
        phone: '109',
        badge: 'সামাজিক',
        icon: 'siren'
    },
    {
        title: 'দুদক',
        subTitle: 'Anti-Corruption',
        phone: '106',
        badge: 'সরকারি',
        icon: 'siren'
    },
    {
        title: 'বিদ্যুৎ বিঘ্ন',
        subTitle: 'Electricity Outage',
        phone: '16216',
        badge: 'বিদ্যুৎ',
        icon: 'siren'
    },
    {
        title: 'ব্র্যাক',
        subTitle: 'Brac',
        phone: '16445',
        badge: 'এনজিও',
        icon: 'ngo'
    },
    {
        title: 'বাংলাদেশ রেলওয়ে',
        subTitle: 'Bangladesh Railway',
        phone: '163',
        badge: 'পরিবহন',
        icon: 'railway'
    }
];




export {
    cardTemplate,
    iconMap,
    cardData,
    historyTemplate,
    emptyHistory
}
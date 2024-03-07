"use strict";

let inputSearch = $('#search-input')
let contentWrapper = $('.content-wrapper')

let baseURL = 'https://api.dictionaryapi.dev/api/v2'

// render

async function render(word) {
    try {
        let response = await fetch(`${baseURL}/entries/en/${word}`)
        let result = await response.json()
        searchLeksika(result)
    } catch (err) {
        console.log(err);
        contentWrapper.innerHTML = `
        <div class="flex items-center gap-x-[45px] text-center">
                    <div class="left">
                        <img src="./assets/images/sheksper.png" alt="image">
                    </div>

                    <div class="right text-center">
                        <p class="text-[24px] mb-[20px] font-semibold text-[#000]">Oops, no such word found!</p>
                        <p class="text-[18px] z-10 relative w-[530px]">If you believe there is such a word in the language of
                            Shakespeare, please take a few seconds
                            to report it via <a href = "https://t.me/orifjon_yolchiyev"
                                class=" hover:cursor-pointer text-[#01756C] font-semibold text-[18px]">Telegram</a>
                            or <span class=" hover:cursor-pointer text-[#01756C] font-semibold text-[18px]">Gmail</span>
                            and we will add it asap!</p>
                        <img class="absolute top-[440px]" src="./assets/images/chiziq.png" alt="line">
                    </div>
                </div>
        `
    }
}

// search

inputSearch.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {

        if (e.target.value.length) {
            contentWrapper.innerHTML = "<span class='mt-[100px] loader'></span>"
            setTimeout(() => {
                render(e.target.value.toLowerCase())
            }, 1500)
        }
    }
})


function searchLeksika(el) {

    let title = el[0].word;
    let italic = el[0].phonetics[1].text;

    contentWrapper.innerHTML = `<div class="card w-[846px] h-[225px] py-[18px] px-[32px] bg-[#ffff] rounded-[18px]">
    <h2 class="text-[32px] text-[#000] font-semibold">${title}</h2>
    <p class="mb-[12px] text-[#8C8B8B]"><i>${italic}</i></p>
    <div class="flex items-center gap-x-[8px] mb-[12px]">
        <img src="./assets/images/Volume.svg" alt="icon">
        <span>/həˈloʊ/</span>
    </div>
    <div class="text-[18px]">
        <p>salom!</p>
        <p><span class="font-extrabold">hello girl</span> esk telefonistchi qiz</p>
    </div>
</div>`

}
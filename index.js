let number = 5.5
let str = 'i dee'
let y = Number('16')
let x = String(y)
let booleen = true
console.log(number + x) //นำเลขมาต่อ string


x = 5
x++ // x++ is mean x = x+1 ,x-- is mean x=x-1
x+=5 // x=x+5
console.log(x) //5+1+5=11 is Answer


let score = 69;
if(score >= 80){
    console.log('Grade A')
}
else if (score >= 75){
    console.log('Grade B')
}
else{
    console.log('Grade F')
}


for(let i = 1; i <= 12; i+=1){
    if(i % 2 === 0){
        continue //ข้าม loop นั้นไป คือ 2 4 6 8 ... ข้าม(ไม่ทำ)
    }
    let answer = i ** 2
    console.log(answer)
}


for(let i = 1; i <= 12; i+=1){
    if(i % 10 === 0){
        break // ออก loop
    }
    let answer = i ** 2
    console.log(answer)
}


function getPyramidArea(l,w,h){
    let PyramidArea = 1/3 * (w*l) * h
    return PyramidArea
}
let area1=getPyramidArea(2,2,3);
let area2=getPyramidArea(4,4,3);
console.log('Area 1 = '+ area1+', Area 2 = '+area2)


//HTML
let content2 = document.getElementById('content-2')
let textHtml = '<b>Su su na</b>'
textHtml += '<i>ตัวเอียง</i>'
content2.innerHTML = textHtml

let discountButton = document.getElementById('discount-button')
let message = document.getElementById('message')

function showmessage(){
    message.innerHTML = 'Too late'
}

discountButton.addEventListener('click',showmessage)

let numberInput = document.getElementById('number-input')
let runButton = document.getElementById('run-button')
let output =document.getElementById('output')

function printMultiply(){
    let number = Number(numberInput.value)
    let outputHtml = ''

    if(number === 0){
        output.innerHTML = 'หลอน'
        return
    }

    for(let i=1;i<=12;i++){
        outputHtml += '<p>'
        outputHtml += number + 'x' + i + '=' + (number*i)
        outputHtml += '</p>'
    }

    output.innerHTML = outputHtml
}

runButton.addEventListener('click',printMultiply)

let sayWord = document.getElementById('say-na')
let sayButton = document.getElementById('say-button')
let counter = 1
sayButton.addEventListener('click',()=>{
    sayWord.innerHTML = 'ไกปู'+counter
    counter++
})

let lyricArray = [
    'เรากำลังกอดกันอยู่หรือเปล่า',
'เพราะฉันไม่รู้สึกถึงเธออีกแล้ว',
'ถ้าหากฉันพูดออกมาจะฟังดูใจร้ายหรือเปล่า',
'ภาพของเธอกำลังเลือนลางจากความทรงจำฉัน',
'และมันไม่ได้ผิดที่เธอ ที่ยังรู้สึก',
'เป็นเพราะฉันเองที่ หมดใจไปง่าย ๆ',
'ฉันไม่ได้ รักเธอเหมือนก่อน',
'และเธอไม่ควรต้องเจอแบบนี้',
'จะไม่ขอให้เธอเข้าใจ',
'ไม่ได้ขอให้เธออภัยกัน',
'แค่อยากให้รู้ว่าฉันเสียใจ',
'ที่ทั้งหมดนี้มันคือเรื่องจริง',
'ไม่ได้ขอความเห็นใจ',
'ก็รู้ว่าที่ฉันทำมันก็ยากจะให้อภัย',
'และถ้าจะเกลียดกันในวันสุดท้ายก็ไม่เป็นไร',
'แต่ขอให้รู้ว่ามีสิ่งดี ๆ ที่เธอนั้นสมควรจะได้',
'แต่มันคงจะไม่ใช่ฉันหรอก',
'เธอไม่ควรจะรั้งต่อ',
'ฉันเองก็เเค่เหงา',
'ในทุก ๆ ครั้งที่เข้าไปพลั้งกอด',
'จำเอาไว้แค่นั้นพอ',
'จำไว้เพียงเท่านั้นพอ',
'ให้มันจบลงตรงนี้',
'แต่มันไม่ได้ผิดที่เธอ ที่ยังรู้สึก',
'เป็นเพราะฉันเองที่ หมดใจไปง่าย ๆ',
'ฉันไม่ได้ รักเธอเหมือนก่อน',
'และเธอไม่ควรต้องเจอแบบนี้',
'จะไม่ขอให้เธอเข้าใจ',
'ไม่ได้ขอให้เธออภัยกัน',
'แค่อยากให้รู้ว่าฉันเสียใจ',
'ที่ทั้งหมดนี้มันคือเรื่องจริง',
'ไม่ได้ขอความเห็นใจ',
'มันก็คงจะจริงที่ฉันมันไม่มีหัวใจ',
'เธอเคยเป็นคนนั้น คนที่เป็นเหมือนกับเส้นชัย',
'แต่มาในวันนี้ทุก ๆ อย่างกลับเปลี่ยนไป',
'และมันไม่ได้ผิดที่เธอ ที่ยังรู้สึก',
'เป็นเพราะฉันเองที่ หมดใจไปง่าย ๆ',
'ฉันไม่ได้ รักเธอเหมือนก่อน',
'และเธอไม่ควรต้องเจอแบบนี้',
'จะไม่ขอให้เธอเข้าใจ',
'ไม่ได้ขอให้เธออภัยกัน',
'แค่อยากให้รู้ว่าฉันเสียใจ',
'ที่ทั้งหมดนี้มันคือเรื่องจริง',
'ทั้งหมดนี้มันคือเรื่องจริง',
]

let lyricArrays = [
    'She likes chocolate-covered strawberries and wine',
'She likes notes that say "I love you" all the time',
'Roses at your feet',
'Baby girl, be mine',
'Baby girl, be mine',
'Yeah, ayy, look',
'Pick up your phone, I need your attention',
'My girl so bad, we call her detention',
'I am so glad we moved beyond friendship',
'I am so glad your mama like me',
'Sweared away Cupid, told him "fight me"',
'I store your love, he shot my heart',
'Im losin breath, its gettin dark',
'I think I might need CPR',
'Tell me, do you love me like I do?',
'Tell me what you willin to prove',
'Cause I aint got nothin to lose',
'Its true',
'You mean the world to me',
'Drive around the globe, but I know that you the only girl for me',
'And I gotta let you know',
'She likes chocolate-covered strawberries and wine',
'She likes notes that say "I love you" all the time',
'Roses at your feet',
'Baby girl, be mine',
'Baby girl, be mine',
'Look',
'You know you the baddest in the game',
'Show you how to love like Lil Wayne',
'Baby, I aint hard to please',
'Girl, tell me what you need',
'Year-round valentine',
'Im just tryna get some time with you',
'Would you spend a night with me?',
'Maybe spend your life with me?',
'Check me if Im triflin',
'Let me be your bestie',
'Money aint clout when we flexin',
'Baby, we can stand the test of time',
'And you aint even gotta second guess that',
'You mean the world to me',
'I drive around the globe, but I know that you the only girl for me',
'And I gotta let you know',
'She likes chocolate covered strawberries and wine',
'She likes notes that say "I love you" all the time',
'Roses at your feet',
'Baby girl, be mine',
'Baby girl, be mine'

]

let randomButtom = document.getElementById('random')
let stopButtom = document.getElementById('stop')
let outputs = document.getElementById('outputs')

let timeoutId = 0

// randomButtom.addEventListener('click', () => {
//     setTimeout(() => {
//         let n = lyricArrays.length
//         let index = Math.floor(Math.random() * n)
//         let lyric = lyricArrays[index]
//         outputs.innerHTML = lyric
//     },3000)
// })  //setTimeout ทำรอบเดียว

randomButtom.addEventListener('click', () => {
    timeoutId = setInterval(() => {
        let n = lyricArrays.length
        let index = Math.floor(Math.random() * n)
        let lyric = lyricArrays[index]
        outputs.innerHTML = lyric
    },3000)
}) //setInterval ทำลูปไปเรื่อยๆ

stopButtom.addEventListener('click',() => {
    clearInterval(timeoutId)
})


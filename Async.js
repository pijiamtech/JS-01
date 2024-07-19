//Promise

function inputPromise(title, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberInput = Number(prompt(title))
            if (isNaN(numberInput)){
                reject(new Error('ไม่ได้กินผมหรอก'))
                return
            }
            resolve(numberInput)
        },delay)
    })
}

let width = 0
let length = 0
let height = 0

inputPromise("ความกว้าง", 1000)
.then((result) => {
    width = result
    return inputPromise('ความยาว', 1500)
})
.then((result) => {
    length = result
    return inputPromise('ความสูง', 2000)
})
.then((result) => {
    height = result
    setTimeout(() => {
        const brownieSize = width*length*height
        alert('ปริมาตรบราวนี่ = ' + brownieSize)
    },3000)
})
.catch((error) => {
    alert(error.message)
})


//อีก 1 Promise

const lyricBox = document.querySelector('.lyric-box')

function lyricPromise(lyric){
    return new Promise((resolve) => {
        setTimeout(() => {
            const lyricElement = document.createElement('h3')
            lyricElement.innerHTML = lyric
            lyricBox.append(lyricElement)
            resolve()
        },3000)
    })
}

lyricPromise('ก็กลัวทุกครั้ง')
.then(() => {
    return lyricPromise('จะพลั้งพูดไปให้เธอรู้')
})
.then(() => {
    return lyricPromise('ชอบเธออยู่')
})
.then(() => {
    return lyricPromise('แต่ต้องปิดบังความลับไว้')
})
.then(() => {
    return lyricPromise('อึดอัดทุกครั้ง')
})
.then(() => {
    return lyricPromise('เพราะฉันก็กลัวจะเสียเธอไป')
})
.then(() => {
    return lyricPromise('ต้องบังคับใจไม่ให้หวั่นไหวเมื่อใกล้เธอ')
})
.then(() => {
    lyricPromise('...')
})

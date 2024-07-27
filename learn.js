
let fruits = ['Apple','Banana','Carrot']
console.log(fruits)
console.log(fruits[1])
fruits[1] = 'Watermalon'
console.log(fruits)
console.log(fruits[1])

fruits.push('Watermalon')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.splice(1,1,'Banana') //(ตำแหน่ง,ลบกี่ตัว,เพิ่มค่าไร)
console.log(fruits)

console.log('มีผลไม้อยู่ '+fruits.length+' ชนิด')

console.log("")

let score = [82,75,48,64,36,57,99,13,50,62]
let passedCount = 0;

// for (let i = 0;score.length;i++){
//     if(score[i] >= 50){
//         passedCount++
//     }
// }

score.forEach((score)=>{
    if(score>=50){
        passedCount++
    }
})
console.log('สอบผ่านจำนวน : '+passedCount+' จากทั้งหมด : ' +score.length)

console.log("")

let scores = [82,75,48,64,36]
let passFailScores = scores.map((scores) => {
    if (scores >= 50){;
        return 'passed'
    }
    return 'failed'
})

console.log(scores)
console.log(passFailScores)

let passScores = score.filter((scores) => {
    return scores >= 50;
})

console.log(scores)
console.log(passScores)

let sumScores = scores.reduce((sum,scores) => {
    return sum+scores;
})

console.log(scores)
console.log(sumScores)

console.log("")

// let scores1 = [82,75,48,64,36]
// let failedScore = scores1.find((scores1) => {
//     return scores1 < 50
// })
// console.log(failedScore)

// let failedScoreI = scores1.findIndex((scores1) => {
//     return scores1 < 50
// })
// console.log(failedScoreI)

// let everyonePassed = scores1.every((scores1) => {
//     return scores1 >= 50
// })
// console.log(everyonePassed)

// let someonePassed = scores1.some((scores1) => {
//     return scores1 >= 50
// })
// console.log(someonePassed)

// console.log("")

/*
let rabbits = [
    {
        name:'Mimi',
        breed:'Lion Head',
        color:'White',
        weight:1.2
    },
    {
        name:'Momo',
        breed:'Netherland Dwarf',
        color:'White',
        weight:1.2
    },
    {
    name:'Mumu',
    breed:'Mimi lop',
    color:'White',
    weight:1.2
    }
]

rabbits.forEach((rabbit) => {
    console.log(rabbit.name + ' , ' + rabbit.breed)
})
*/
/*
let rabbit = {
    name:'Mimi',
    breed:'Royal',
    coloe:'White',
    weight:1.2,
    talk(){
        console.log(this.name + ', Oung Oung')
    },
    weightDetail(){
        if (this.weight < 1){
            return 'too few'
        }
        else if (this.weight > 2){
            return 'too much'
        }
        return 'Normal'
    }
}
rabbit.talk()
console.log(rabbit.weightDetail())
*/
// /*
function Rabbit(name,breed,color,weight) {
    this.name = name
    this.breed = breed
    this.color = color
    this.weight = weight
    this.talk = function(){
        console.log(this.name + ', Oung Oung')
    }
}

let rabbit1 = new Rabbit('Mimi','Lion Head','White',1.2)
let rabbit2 = new Rabbit('Momo','Netherland Dwarf','Brown',1.5)

rabbit1.talk()
rabbit2.talk()
// */

// var การสร้างตัวแปรสมัยเก่าที่ไม่สน Global , local
// const การสร้างตัวแปรแบบค่าคงที่เปลี่ยนค่าไม่ได้
// let การสร้างตัวแปร และสามารถเปลี่ยนค่าได้ ถ้ากำหนดให้ let อยู่ใน { let } จะไม่สามารถเรียกใช้ใน Global ได้



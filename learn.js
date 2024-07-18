/*
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

fruits.splice(1,1,'Banana') //(ตำแหน่ง,ลบกี่ตัวม,เพิ่มค่าไร)
console.log(fruits)

console.log('มีผลไม้อยู่ '+fruits.length+' ชนิด')
*/

/*
let score = [82,75,48,64,36,57]
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
console.log(passedCount)
*/

/*
let score = [82,75,48,64,36]
let passFailScores = score.map((score) => {
    if (score >= 50){;
        return 'passed'
    }
    return 'failed'
})

console.log(score)
console.log(passFailScores)

let passScores = score.filter((score) => {
    return score >= 50;
})

console.log(score)
console.log(passScores)

let sumScores = score.reduce((sum,score) => {
    return sum+score;
})

console.log(score)
console.log(sumScores)
*/

/*
let scores = [82,75,48,64,36]
let failedScore = scores.find((scores) => {
    return scores < 50
})
console.log(failedScore)

let failedScoreI = scores.findIndex((scores) => {
    return scores < 50
})
console.log(failedScoreI)

let everyonePassed = scores.every((scores) => {
    return scores >= 50
})
console.log(everyonePassed)

let someonePassed = scores.some((scores) => {
    return scores >= 50
})
console.log(someonePassed)
*/

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
/*
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
*/

// var การสร้างตัวแปรสมัยเก่าที่ไม่สน Global , local
// const การสร้างตัวแปรแบบค่าคงที่เปลี่ยนค่าไม่ได้
// let การสร้างตัวแปร และสามารถเปลี่ยนค่าได้ ถ้ากำหนดให้ let อยู่ใน { let } จะไม่สามารถเรียกใช้ใน Global ได้



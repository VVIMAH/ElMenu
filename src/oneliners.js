const createDummyArray = (i)=>{
    if(isNaN(i)) throw new Error("The provided index is not a number")
    if(i < 0) throw new Error("The index i must be a positive number")

    let arr = []
    for(i = i+0; i > 0; i--){
        arr.push(i)
    }
    return arr
}

const wait = (duration)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{resolve()}, duration)
    })
}

module.exports.createDummyArray = createDummyArray
module.exports.wait = wait
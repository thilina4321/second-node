const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 
'data', 'product.json')

module.exports = class Product{

    constructor(title){
        this.title = title
    }

    save(){
        fs.readFile(p, (err, fileContent)=>{
            let product = []
            if(!err){
                product = JSON.parse(fileContent)
            }
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), (err)=>{
                console.log(err)
            })
        })
        //product.push(this)
    }

    static fetchAll(cb){
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                return cb([])
            }
            cb(JSON.parse(fileContent))
        })
        //return product
    }
}
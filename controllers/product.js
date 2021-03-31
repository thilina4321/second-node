const Product = require('../model/product')


exports.getAddProduct = (req,res,next)=>{
    res.render('product',{
        title:'Book Name',
        path:'/admin/product'
    })

}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.product = (req,res,next)=>{
    Product.fetchAll((result)=>{
        res.render('shop', {
        prods:result,
        msg:'This is the List'
    })
    }) 
    
}
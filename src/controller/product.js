import joi from "joi";
import Product from "../model/product";


const productSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    desc:joi.string(),
    status:joi.string(),
    quality:joi.string()
})

export const getAll = async (req, res) => {
    try {
        const data = await Product.find();
        if(!data){
            return res.status(400).json({
             message:"Không có sản phẩm"
            })
        }
        return res.status(200).json({
            message:"Thành công",
            data
        })
    } catch (error) {
        return res.status(404).json({
            message:error,
       
        })
    }
}

export const create = async (req, res) => {
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message:error.details[0].message
            })
        }
        const data = await Product.create(req.body);

        if(!data){
            return res.status(400).json({
                message:"không thành công"
            })
        }
        return res.status(200).json({
            message:"thêm thành công",
            data
        })
    } catch (error) {
        return res.status(404).json({
            message:error,
           
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(400).json({
                message:"không thể xóa"
            })
        }
        return res.status(200).json({
            message:"xóa thành công",
            data
        })
    } catch (error) {
        return res.status(404).json({
            message:error
        })
    }
}

export const Update = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!data){
            return res.status(400).json({
                message:"Không thể update"
            })
        }
        return res.status(200).json({
            message:" update",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}

export const get = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        if(!data){
            return res.status(400).json({
                message:"không có sản phẩm"
            })
        }
        return res.status(200).json({
           data
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}

const { json } = require('body-parser')
const nestedCategories = require('../common/getSub_Cat-data')
const categoryModel = require('../model/categoryModel')
exports.createCategory = async (req, res) => {
    try {
        const { name, slug, description, parent_id } = req.body
        let category = await categoryModel.findOne({ name: name })
        if (category) {
            return res.status(400).json({ error: "category already exists" })
        }
        category = await categoryModel.create({
            name,
            slug,
            description,
            parent_id,
        })
        console.log(category)
        return res.status(200).json({ message: 'success', data: category })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


exports.updateCategory = async (req, res) => {
    try {
        const { _id, name } = req.body
        let category = await categoryModel.findOne({ _id: _id })
        if (category) {
            return res.status(400).json({ error: error.message })
        }
        category.name = name
        await category.save()
    } catch {
        return res.status(500).json({ error: error.message })
    }

}
exports.deleteCategory = (req, res) => {
    try {
        const { _id } = req.body
        const category = categoryModel.findOneAndDelete({ _id: _id })
        if (!category) {
            return res.status(400).json({ error: 'category not found' })
        }
        return res.status(200).json({ message: 'successful deleted' })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
exports.getAllCategory = async (req, res) => {
    const { keyword } = req.query
    let query = {}
    if (keyword) {
        query.$or = [{
            name: {
                $regex: keyword,
                $options: 'i'
            }
        }]

    }
    const categories = await categoryModel.find(query)
    if (!categories) {
        return res.status(400).json({ error: 'data not fetch', data: [] })
    }
    let category = await nestedCategories(categories)
    return res.status(200).json({ data: category })

}
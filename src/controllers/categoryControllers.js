const Category = require("../models/category")

async function getCategories() {
    const categories = await Category.find()
    return categories
}

async function getCategory(categoryId) {
    const category = await Category.findById(categoryId)
    return category
}

async function createCategory(category) {
    const newCategory = await Category.create(category)
    return newCategory
}

async function updateCategory(categoryId, category) {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, category, { new: true })
    return updatedCategory
}

async function deleteCategory(categoryId) {
    const deletedCategory = await Category.findByIdAndDelete(categoryId)
    return deletedCategory
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
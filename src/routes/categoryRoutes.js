const express = require("express")

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryControllers")

const categoryRouter = express.Router()

categoryRouter.get("/", async (req, res) => {
    const categories = await getCategories()
    res.json(categories)
})

categoryRouter.get("/:categoryId", async (req, res) => {
    const category = await getCategory(req.params.categoryId)
    if (category) {
        res.json(category)
    } else {
        res.status(404).json({ error: `Category with id ${req.params.categoryId} not found` })
    }
})

categoryRouter.post("/", async (req, res) => {
    const bodyData = {
        title: req.body.title,
        description: req.body.description
    }
    const newCategory = await createCategory(bodyData)
    res.status(201).json(newCategory)
})

categoryRouter.patch("/:categoryId", async (req, res) => {
    const bodyData = {
        title: req.body.title,
        description: req.body.description
    }
    const updatedCategory = await updateCategory(req.params.categoryId, bodyData)
    if (updatedCategory) {
        res.json(updatedCategory)
    } else {
        res.status(404).json({ error: `Category with id ${req.params.categoryId} not found` })
    }
})

categoryRouter.delete("/:categoryId", async (req, res) => {
    const deletedCategory = await deleteCategory(req.params.categoryId)
    if (deletedCategory) {
        res.json(deletedCategory)
    } else {
        res.status(404).json({ error: `Category with id ${req.params.categoryId} not found` })
    }
})

module.exports = categoryRouter
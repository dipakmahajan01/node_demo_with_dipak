async function nestedCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parent_id == null);
        console.log(category)
    } else {
        category = categories.filter(cat => String(cat.parent_id) == String(parentId));
        console.log(category)

    }
    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: await nestedCategories(categories, cate._id)
        })
    }
    return categoryList;
}
module.exports = nestedCategories
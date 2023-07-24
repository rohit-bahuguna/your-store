export const carouselImages = [
    'essentials.jpg', 'Back-to-school_Banner_1500x300.gif', 'healtly.jpg', "mangomadness.jpg", 'supersaver.jpg'
]

export const categoryImages = ['Staples.avif', 'Beverages.avif', 'Dairy & Bakery.avif', 'Fruits & Vegetables.avif']


export const getCategoryImage = (currentCategory) => {

    if (!currentCategory) {
        return "groceries.avif"
    } else {
        return categoryImages.find(image => image.includes(currentCategory))
    }

}


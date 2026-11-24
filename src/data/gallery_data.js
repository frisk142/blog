const galleryimages = import.meta.glob('@/assets/gallery_images/*.{jpg,png,jpeg}',{
    eager: true,
    import: 'default'
});

const allLocalImages = Object.values(galleryimages)

export const galleryAlbums = [
    {
        id: 'nanchang',
        title: '青春是一场梦',
        desc: '我们还有很长的一段路无法游向新的地平线，直到你有勇气告别海岸。 -威廉·福克纳-',
        coverImages: [
            allLocalImages[0] || '',
            allLocalImages[1] || allLocalImages[0] || '',
            allLocalImages[2] || allLocalImages[0] || '',
        ],
        allImages: allLocalImages
    },

    {
        id: 'shanhai',
        title: 'xxxxx',
        desc: 'xxxxx',
        coverImages: [
            allLocalImages[0] || '',
            allLocalImages[1] || allLocalImages[0] || '',
            allLocalImages[2] || allLocalImages[0] || '',
        ],
        allImages: allLocalImages
    },
]

export const getAlbumDetail = (id) => {
    return galleryAlbums.find(album => album.id === id) || null
}

// const galleryimglist = Object.values(galleryimages)
// const Fan_count = 3
// const fanImages = galleryimglist.slice(0, Fan_count)
// export default fanImages
// console.log(fanImages)
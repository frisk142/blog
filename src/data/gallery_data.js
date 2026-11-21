const galleryimages = import.meta.glob('@/assets/gallery_images/*.{jpg,png,jpeg}');
const galleryimglist = Object.values(galleryimages)
const Fan_count = 3
const fanImages = galleryimglist.slice(0, Fan_count)
export default fanImages
console.log(fanImages)
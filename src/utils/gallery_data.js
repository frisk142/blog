const galleryimages = import.meta.globEager('../assets/gallery/*.{jpg,png,jpeg}');
const galleryimglist = Object.values(galleryimages)
const Fan_count = 3
const fanImages = galleryimglist.slice(0, Fan_count)
console.log(fanImages)
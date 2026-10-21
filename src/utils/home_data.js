
const BlogImagesModules = import.meta.glob("@/assets/blog_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const BlogImagesOneModules = import.meta.glob("@/assets/blog_imagesone/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImagesModules = import.meta.glob("@/assets/show_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const MdFileModules = import.meta.glob('@/content/posts/*.md', { eager:true , query: '?raw', import: 'default'})

const getImages = (modules) => Object.values(modules).map(m => m.default)
const getMds = (modules) => Object.entries(modules).map(([path, content]) => ({
  slug: path.split('/').pop().replace(".md", ""),
  content
}))
   
export const ShowImgList = getImages(ShowImagesModules)
export const BlogImgList = getImages(BlogImagesModules)
export const BlogImgOneList = getImages(BlogImagesOneModules)
export const MdList = getMds(MdFileModules)

const maxLen = Math.max(ShowImgList.length, BlogImgList.length, BlogImgOneList.length, MdList.length)

export const CombinedList = Array.from({ length: maxLen }).map((_, index) => ({
  showImg: ShowImgList[index % ShowImgList.length] || '',
  blogImg: BlogImgList[index % BlogImgList.length] || '',
  blogImgOne: BlogImgOneList[index % BlogImgOneList.length] || '',
  md: MdList[index % MdList.length] || null
}))

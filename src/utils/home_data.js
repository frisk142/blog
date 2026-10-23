
const BlogImagesModules = import.meta.glob("@/assets/blog_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const BlogImagesOneModules = import.meta.glob("@/assets/blog_imagesone/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImagesModules = import.meta.glob("@/assets/show_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImgMdFileModules = import.meta.glob('@/content/posts/*.md', { eager:true , query: '?raw', import: 'default'})
const BlogImgoneMdFileModules = import.meta.glob('@/content/posts-2/*.md',{ eager:true , query: '?raw', import: 'default'})

const getImages = (modules) => Object.values(modules).map(m => m.default)
const getMds = (modules) => Object.entries(modules).map(([path, content]) => ({
  slug: path.split('/').pop().replace(".md", ""),
  content
}))
   
export const ShowImgList = getImages(ShowImagesModules)
export const BlogImgList = getImages(BlogImagesModules)
export const BlogImgOneList = getImages(BlogImagesOneModules)
export const ShowImgMdList = getMds(ShowImgMdFileModules)
export const BlogImgOneMdList = getMds(BlogImgoneMdFileModules)

const ShowmaxLen = Math.max(ShowImgList.length, ShowImgMdList.length)
const BlogmaxLen = Math .max(BlogImgOneList.length, BlogImgOneMdList.length)
const BlogImgmaxLen = Math.max(BlogImgList.length)

export const Blog_Img_List = Array.from({ length: BlogImgmaxLen }).map((_, index) => ({
  BlogImg: BlogImgList[index % BlogImgList.length] || '',
}))

export const ShowImg_MdFile_List = Array.from({ length: ShowmaxLen }).map((_, index) => ({
  showImg: ShowImgList[index % ShowImgList.length] || '',
  md: ShowImgMdList[index % ShowImgMdList.length] || null
}))

export const BlogImgOne_MdFile_List = Array.from({ length: BlogmaxLen }).map((_, index) => ({
  BlogImgone: BlogImgOneList[index % BlogImgOneList.length] || '',
  md: BlogImgOneMdList[index % BlogImgOneMdList.length] || null,
}))



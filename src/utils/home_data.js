
const BlogImagesModules = import.meta.glob("@/assets/blog_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const BlogImagesOneModules = import.meta.glob("@/assets/blog_imagesone/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImagesModules = import.meta.glob("@/assets/show_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImgMdFileModules = import.meta.glob('@/content/posts/*.md', { eager:true , query: '?raw', import: 'default'})
const BlogImgoneMdFileModules = import.meta.glob('@/content/posts-2/*.md',{ eager:true , query: '?raw', import: 'default'})

const getImages = (modules) => Object.values(modules).map(m => m.default)
const getMds = (modules, imgList, type) => Object.entries(modules).map(([path, content], index) => ({
  slug: path.split('/').pop().replace(".md", ""),
  type: type,
  content: content,
  cover: imgList[index % imgList.length] || ''
}))
   
export const ShowImgList = getImages(ShowImagesModules)
export const BlogImgList = getImages(BlogImagesModules)
export const BlogImgOneList = getImages(BlogImagesOneModules)
export const ShowImgMdList = getMds(ShowImgMdFileModules, ShowImgList, 'posts')
export const BlogImgOneMdList = getMds(BlogImgoneMdFileModules, BlogImgOneList, 'posts-2')

const ShowmaxLen = Math.max(ShowImgList.length, ShowImgMdList.length)
const BlogmaxLen = Math .max(BlogImgOneList.length, BlogImgOneMdList.length)
const BlogImgmaxLen = Math.max(BlogImgList.length)

export const getArticleData = (type, slug) => {
  const list = type ==='posts'? ShowImgMdList: BlogImgOneMdList
  return list.find(item => item.slug === slug) || null
}

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



import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, SetImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const getImage = async () => {
      const threeFirtsWords = fact.split(' ', 3).join(' ')
      const res = await fetch(`https://cataas.com/cat/says/${threeFirtsWords}?size=50&color=red&json=true`)
      const data = await res.json()
      const { url } = data
      SetImageUrl(url)
    }
    getImage()
  }, [fact])
  console.log(imageUrl)
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}

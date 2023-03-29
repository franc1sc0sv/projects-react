import { useCatImage } from '../hooks/useCatImage'

export const Testing = () => {
  const { imageUrl } = useCatImage({ fact: 'random' })
  return (<><img src={imageUrl} alt='yesCat' /></>)
}

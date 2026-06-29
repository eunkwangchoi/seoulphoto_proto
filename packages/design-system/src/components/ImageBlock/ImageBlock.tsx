import { ReactNode } from 'react'
import styles from './ImageBlock.module.css'

interface ImageBlockProps {
  src: string
  alt: string
  caption?: ReactNode
  aspectRatio?: string
  fullBleed?: boolean
}

export function ImageBlock({ src, alt, caption, aspectRatio, fullBleed = false }: ImageBlockProps) {
  return (
    <figure
      className={[styles.figure, fullBleed ? styles.fullBleed : ''].filter(Boolean).join(' ')}
    >
      <div
        className={styles.imageWrap}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <img src={src} alt={alt} className={styles.image} loading="lazy" />
      </div>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  )
}

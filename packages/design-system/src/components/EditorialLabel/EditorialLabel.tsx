import { ReactNode } from 'react'
import styles from './EditorialLabel.module.css'

interface EditorialLabelProps {
  children: ReactNode
  variant?: 'olive' | 'terracotta'
}

export function EditorialLabel({ children, variant = 'olive' }: EditorialLabelProps) {
  return (
    <span className={`${styles.label} ${styles[variant]}`}>
      {children}
    </span>
  )
}

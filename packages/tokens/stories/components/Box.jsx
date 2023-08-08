import React, { Children } from 'react'

export const Box = ({ elevation, borderRadius }) => {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: borderRadius || 'var(--border-radius-medium)',
        boxShadow: elevation,
        border: elevation ? '' : '1px solid var(--color-neutral-light-2)',
        display: 'flex',
        height: '100px',
        padding: 'var(--spacing-base)',
        width: '100px',
        font: 'var(--text-badge)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {elevation || borderRadius}
    </div>
  )
}

export const BoxList = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        maxWidth: '100vw',
        gap: 'var(--spacing-base)',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        marginBottom: 'var(--spacing-xxxxlarge)',
      }}
    >
      {Children.map(children, (child) => (
        <div className="Row">{child}</div>
      ))}
    </div>
  )
}

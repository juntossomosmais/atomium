import React, { Children } from 'react'

export const Box = ({ elevation, borderRadius }) => {
  return (
    <>
      <div
        style={{
          borderRadius: borderRadius || 'var(--border-radius-medium)',
          boxShadow: `var(${elevation})`,
          border: elevation ? '' : '1px solid var(--color-neutral-light-4)',
          display: 'flex',
          height: 'var(--spacing-xgiant)',
          padding: 'var(--spacing-base)',
          width: 'var(--spacing-xgiant)',
          font: 'var(--text-badge)',
          fontWeight: 'var(--font-weight-regular)	',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {elevation || borderRadius}
      </div>
    </>
  )
}

export const BoxList = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-xxlarge)',
        flexWrap: 'wrap',
      }}
    >
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  )
}

import React from 'react'

const SectionHeading = ({ title, subtitle }) => (
  <div className="my-7">
    <h2 className="text-2xl font-bold text-primary">{title}</h2>
    {subtitle && <p className="text-secondary">{subtitle}</p>}
  </div>
)

export default SectionHeading

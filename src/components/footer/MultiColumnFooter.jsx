import { EarthIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

const socialLinks = [
  { name: 'LinkedIn', link: '/', icon: <LinkedinIcon /> },
  { name: 'X', link: '/', icon: <TwitterIcon /> },
  { name: 'Facebook', link: '/', icon: <FacebookIcon /> },
  { name: 'Website', link: '/', icon: <EarthIcon /> },
]

const footerSections = [
  {
    title: 'Support',
    items: ['Contact', 'FAQs', 'Pricing Plans', 'Sitemap'].map((label) => ({ label, href: '' })),
  },
  {
    title: 'Quick Links',
    items: ['Jobs', 'Courses', 'Paid Training', 'Blog'].map((label) => ({ label, href: '' })),
  },
  {
    title: 'Category',
    items: ['Graphics', 'Programming', 'eCommerce', 'Freelancing'].map((label) => ({
      label,
      href: '',
    })),
  },
]

const contact = {
  address: 'Kabul, Afganistan',
  phone: 'Phone: +93 785 032 858',
  email: 'ibrahimkhail237@gmail.com',
}

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 py-16 sm:grid-cols-[40fr_30fr_30fr] md:grid-cols-[40fr_30fr_30fr_30fr]">
          <div>
            <a href="/" className="mb-8 flex items-center gap-5 text-white">
              <img
                src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                className="h-8"
                alt="Logo"
              />
              <h6 className="text-3xl font-semibold tracking-wider">Flexy UI</h6>
            </a>
            <address className="mt-3 text-base font-normal text-[#767E94]">
              <p className="mt-3 max-w-64">{contact.address}</p>
              <p className="mt-3">{contact.phone}</p>
              <p className="mt-3">Mail: {contact.email}</p>
            </address>
          </div>

          {footerSections.map(({ title, items }) => (
            <div key={title}>
              <h6 className="mb-7 text-xl text-white">{title}</h6>
              <ul>
                {items.map(({ label, href }) => (
                  <li
                    key={label}
                    className="mt-3 text-base font-normal text-[#767E94] hover:text-white">
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-mid">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 md:flex-row md:justify-between">
          <p className="text-center text-[#767E94]">
            Learning Online © 2025. Developed by <span className="text-white">Murtaza Ibrahimkhail</span>
          </p>
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-[#767E94] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

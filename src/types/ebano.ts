export interface NavLink {
  href: string
  label: string
}

export interface HeroStat {
  value: string
  label: string
  highlight?: string
}

export interface ProposalFeature {
  number: string
  title: string
  description: string
  iconName?: string
}

export interface ServiceItem {
  number: string
  title: string
  description: string
  label: string
  iconName: string
  features: string[]
  image?: string
  tagsText?: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  duration: string
  deliverable: string
  iconName: string
}

export interface TechItem {
  code: string
  title: string
  description: string
  category?: string
}

export interface ProjectItem {
  id: string
  category: 'todos' | 'corporativo' | 'landing' | 'ecommerce'
  badge: string
  image: string
  alt: string
  tag: string
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  isSmall?: boolean
}

export interface TestimonialItem {
  id: string
  author: string
  role: string
  company: string
  rating: number
  quote: string
  avatarUrl: string
}

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export interface SocialLink {
  label: string
  code: string
  url: string
  iconName: 'Instagram' | 'Linkedin' | 'Github' | 'Twitter'
}

export interface ContactData {
  email: string
  phone: string
  location: string
  socials: SocialLink[]
}

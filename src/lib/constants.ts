export const APP_URL = 'https://app.revenify.co'
export const DOCS_URL = 'https://revenify.co/docs'
export const COMMUNITY_URL = 'https://community.revenify.co'
export const BLOG_URL = 'https://revenify.co/blog'

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/revenify',
  github: 'https://github.com/revenify',
  linkedin: 'https://linkedin.com/company/revenify',
} as const

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for testing and small projects',
    features: [
      '1,000 events/month',
      '1 project',
      '7-day data retention',
      'Basic analytics dashboard',
      'Community support',
    ],
    cta: 'Start Free',
    ctaUrl: `${APP_URL}/signup`,
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: 49, yearly: 470 },
    description: 'For growing businesses',
    features: [
      '10,000 events/month',
      '3 projects',
      '90-day data retention',
      'Advanced analytics',
      'Email support',
      'Custom domains',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaUrl: `${APP_URL}/signup?plan=starter`,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 99, yearly: 950 },
    description: 'For scaling companies',
    features: [
      '50,000 events/month',
      '10 projects',
      '1-year data retention',
      'Multi-touch attribution',
      'Priority support',
      'Advanced API access',
      'Webhooks',
      'Custom integrations',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    ctaUrl: `${APP_URL}/signup?plan=pro`,
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: { monthly: 249, yearly: 2390 },
    description: 'For enterprises',
    features: [
      '200,000 events/month',
      'Unlimited projects',
      'Unlimited data retention',
      'White-label options',
      'Dedicated support',
      'SLA guarantee',
      'Custom contracts',
      'SSO (SAML)',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    ctaUrl: '/contact',
    highlighted: false,
  },
] as const

export const FEATURES = [
  {
    icon: 'Activity',
    title: 'Real-time Tracking',
    description: 'Capture every visitor interaction instantly with our lightweight pixel tracker.',
    color: 'text-blue-500',
  },
  {
    icon: 'GitBranch',
    title: 'Multi-touch Attribution',
    description: 'Understand the complete customer journey with first-touch, last-touch, and linear models.',
    color: 'text-cyan-500',
  },
  {
    icon: 'DollarSign',
    title: 'Revenue Analytics',
    description: 'Track conversions to actual revenue and calculate ROI by marketing source.',
    color: 'text-blue-600',
  },
  {
    icon: 'Tag',
    title: 'UTM Management',
    description: 'Automatic UTM parameter tracking and campaign performance analysis.',
    color: 'text-cyan-600',
  },
  {
    icon: 'Target',
    title: 'Lead Scoring',
    description: 'Qualify leads by behavior and predict conversion probability.',
    color: 'text-blue-500',
  },
  {
    icon: 'Puzzle',
    title: 'Integrations',
    description: 'Connect with Stripe, Shopify, HubSpot, Salesforce, and more.',
    color: 'text-cyan-500',
  },
] as const

export const STATS = [
  { label: 'Companies', value: '1,000+' },
  { label: 'Events tracked', value: '10M+' },
  { label: 'Revenue attributed', value: '$50M+' },
  { label: 'Uptime', value: '99.9%' },
] as const

export const NAVIGATION = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'API', href: '/docs/api' },
    { name: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: COMMUNITY_URL },
    { name: 'Help Center', href: '/help' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
} as const

export const FAQS = [
  {
    question: 'How does the free trial work?',
    answer: 'We offer a 14-day free trial on all paid plans. No credit card required to start.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! You can cancel your subscription at any time without any fees or penalties.',
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes, we offer 50% discount for nonprofit organizations and educational institutions.',
  },
  {
    question: 'How does support work?',
    answer: 'Starter plans have email support. Pro and Business plans have priority support via chat and email.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use end-to-end encryption and are compliant with GDPR, CCPA, and SOC 2.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Of course! You can upgrade or downgrade your plan at any time.',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart',
    content: 'Revenify completely transformed how we make decisions. The real-time insights are incredible.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Marketing',
    company: 'GrowthCo',
    content: 'The best analytics platform I\'ve ever used. Simple, powerful, and exceptional support.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'DataDriven',
    content: 'The integrations are seamless and the API is very well documented. Highly recommend.',
  },
] as const

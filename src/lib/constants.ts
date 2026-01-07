export const APP_URL = 'https://app.revenify.co'
export const DOCS_URL = '/docs'
export const COMMUNITY_URL = 'https://revenify.slack.com'
export const BLOG_URL = '/blog'

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/KleoveY',
  linkedin: 'https://linkedin.com/in/kleove-yaguaracuto-295403399',
  facebook: 'https://facebook.com/KleoveEY',
  instagram: 'https://instagram.com/kleoveyaguaracuto',
  youtube: 'https://youtube.com/@KleoveY',
} as const

export const CONTACT_EMAIL = 'revenify.co@gmail.com'

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for testing and small projects',
    features: [
      '1,000 events/month',
      '1 project',
      '25 short links',
      '7-day data retention',
      '10 AI messages/day',
      'Password Protection',
      'Link Expiration',
      'QR Codes (no logo)',
    ],
    cta: 'Start Free',
    ctaUrl: `${APP_URL}/auth?mode=signup`,
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: 8, yearly: 72 },
    description: 'For growing businesses',
    features: [
      '5,000 events/month',
      '3 projects',
      '100 short links',
      '30-day data retention',
      '50 AI messages/day',
      '1 custom domain',
      'A/B Testing (3 tests)',
      'Geo Targeting (5 rules)',
      'Device Targeting',
      'Deep Links',
      'API Access',
      'Revenue Attribution',
    ],
    cta: 'Start Free Trial',
    ctaUrl: `${APP_URL}/auth?mode=signup&plan=starter`,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 20, yearly: 192 },
    description: 'For scaling companies',
    features: [
      '200,000 events/month',
      '10 projects',
      '1,000 short links',
      '1-year data retention',
      '200 AI messages/day',
      '3 custom domains',
      'A/B Testing (unlimited)',
      'Geo Targeting (unlimited)',
      'Link Cloaking',
      'Webhooks',
      'Multi-touch Attribution',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaUrl: `${APP_URL}/auth?mode=signup&plan=pro`,
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: { monthly: 50, yearly: 480 },
    description: 'For enterprises',
    features: [
      '500,000 events/month',
      'Unlimited projects',
      'Unlimited short links',
      '3-year data retention',
      '1,000 AI messages/day',
      'Unlimited domains',
      'SSO/SAML',
      'White-label',
      'Dedicated support',
      'SLA guarantee',
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
    title: 'A/B Testing',
    description: 'Split test your URLs and discover which one converts better. Define split percentage and track results in real-time.',
    color: 'text-cyan-500',
  },
  {
    icon: 'Globe',
    title: 'Geo Targeting',
    description: 'Redirect visitors to different URLs based on their country. Perfect for international campaigns.',
    color: 'text-blue-600',
  },
  {
    icon: 'Smartphone',
    title: 'Device Targeting',
    description: 'Send desktop, mobile, and tablet users to specific URLs. Ensure the best experience on every platform.',
    color: 'text-cyan-600',
  },
  {
    icon: 'Link2',
    title: 'Deep Links',
    description: 'Open your iOS or Android app directly, with smart fallback to App Store or web.',
    color: 'text-blue-500',
  },
  {
    icon: 'Eye',
    title: 'Link Cloaking',
    description: 'Customize how your links appear when shared. Set custom title, description, and image for social previews.',
    color: 'text-cyan-500',
  },
] as const

export const ADVANCED_FEATURES = [
  {
    icon: 'GitBranch',
    title: 'A/B Testing',
    subtitle: 'Optimize your campaigns',
    description: 'Split traffic between two URLs and see which performs better. Define split percentage and track results in real-time.',
    plans: ['Starter', 'Pro', 'Business'],
  },
  {
    icon: 'Globe',
    title: 'Geo Targeting',
    subtitle: 'Personalize by location',
    description: 'Redirect visitors to different URLs based on their country of origin. Perfect for international campaigns and localized content.',
    plans: ['Starter', 'Pro', 'Business'],
  },
  {
    icon: 'Smartphone',
    title: 'Device Targeting',
    subtitle: 'Optimized experience by device',
    description: 'Send desktop, mobile, and tablet users to specific URLs. Ensure the best experience on every platform.',
    plans: ['Starter', 'Pro', 'Business'],
  },
  {
    icon: 'Link2',
    title: 'Deep Links',
    subtitle: 'Open your app directly',
    description: 'Links that open your iOS or Android app directly, with smart fallback to App Store or web when app is not installed.',
    plans: ['Starter', 'Pro', 'Business'],
  },
  {
    icon: 'Eye',
    title: 'Link Cloaking',
    subtitle: 'Control your previews',
    description: 'Customize how your link appears when shared. Set custom title, description, and image for social networks and messengers.',
    plans: ['Pro', 'Business'],
  },
  {
    icon: 'Shield',
    title: 'SSO/SAML Enterprise',
    subtitle: 'Secure corporate login',
    description: 'Integrate with your identity provider (Okta, Azure AD, Google Workspace) for centralized and secure authentication.',
    plans: ['Business'],
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
    { name: 'Integrations', href: '/integrations' },
    { name: 'API', href: '/docs' },
    { name: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: COMMUNITY_URL, external: true },
    { name: 'Help Center', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/about' },
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
    answer: 'We offer a 14-day free trial on all paid plans with access to Pro features. No credit card required to start.',
  },
  {
    question: 'What is A/B Testing?',
    answer: 'A/B Testing lets you split traffic between two URLs to see which performs better. Available on Starter (3 tests), Pro and Business (unlimited).',
  },
  {
    question: 'What is Geo Targeting?',
    answer: 'Geo Targeting redirects visitors to different URLs based on their country. Perfect for international campaigns and localized content.',
  },
  {
    question: 'What are Deep Links?',
    answer: 'Deep Links open your iOS or Android app directly when clicked, with smart fallback to App Store or web when the app is not installed.',
  },
  {
    question: 'What is Link Cloaking?',
    answer: 'Link Cloaking lets you customize how your links appear when shared on social media. Set custom title, description, and image for previews.',
  },
  {
    question: 'Do you offer SSO/SAML?',
    answer: 'Yes! SSO/SAML is available on Business plans. Integrate with Okta, Azure AD, Google Workspace for secure corporate login.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! You can cancel your subscription at any time without any fees or penalties.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use end-to-end encryption and are compliant with GDPR, CCPA, and SOC 2.',
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

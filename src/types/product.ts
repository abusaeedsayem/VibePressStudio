export type Category = "wordpress-plugin" | "desktop-app" | "saas-tool";

export interface KeyFeature {
  title: string;
  description: string;
  iconName: string;
  isPro: boolean;
}

export interface PricingTier {
  planName: string;
  priceMonthly?: number | null;
  priceYearly?: number | null;
  priceLifetime?: number | null;
  features: string[];
  checkoutUrl: string;
  isFeatured: boolean;
}

export interface DistributionChannels {
  preLaunchUrl?: string;
  directDownloadUrl?: string;
}

export interface DocumentationSection {
  title: string;
  content: string;
  steps?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  categoryLabel?: string;
  icon: string;
  logoImage: string;
  screenshotGallery: string[];
  version: string;
  changelogUrl: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  targetAudience: string[];
  pricingTiers: PricingTier[];
  distributionChannels: DistributionChannels;
  documentationSections: DocumentationSection[];
}

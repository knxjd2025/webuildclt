/**
 * WordPress GraphQL Type Definitions
 */

export interface WPImage {
  sourceUrl: string;
  altText?: string;
}

export interface WPSeo {
  title: string;
  metaDesc: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

export interface WPMenuItem {
  id: string;
  label: string;
  uri: string;
  parentId?: string;
  childItems?: {
    nodes: WPMenuItem[];
  };
}

export interface WPPage {
  id: string;
  title: string;
  content: string;
  featuredImage?: {
    node: WPImage;
  };
  seo?: WPSeo;
}

export interface WPCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface WPPortfolioItem {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featuredImage?: {
    node: WPImage;
  };
  portfolioCategories?: {
    nodes: WPCategory[];
  };
  portfolioGallery?: {
    images: WPImage[];
  };
}

export interface WPAuthor {
  name: string;
  avatar?: {
    url: string;
  };
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  date: string;
  featuredImage?: {
    node: WPImage;
  };
  categories?: {
    nodes: WPCategory[];
  };
  author?: {
    node: WPAuthor;
  };
  seo?: WPSeo;
}

export interface WPService {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featuredImage?: {
    node: WPImage;
  };
  serviceIcon?: {
    icon: string;
  };
}

export interface WPTestimonial {
  id: string;
  title: string;
  content: string;
  testimonialDetails?: {
    clientName: string;
    clientTitle?: string;
    clientCompany?: string;
    clientImage?: {
      sourceUrl: string;
    };
    videoUrl?: string;
  };
}

export interface WPCertification {
  id: string;
  title: string;
  certificationDetails?: {
    logo?: {
      sourceUrl: string;
      altText?: string;
    };
    url?: string;
  };
}

export interface WPSiteSettings {
  generalSettings: {
    title: string;
    description: string;
  };
  themeSettings?: {
    logo?: {
      sourceUrl: string;
    };
    phone?: string;
    email?: string;
    address?: string;
    socialLinks?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
}

export interface WPPageInfo {
  hasNextPage: boolean;
  endCursor?: string;
}

export interface WPConnection<T> {
  pageInfo: WPPageInfo;
  nodes: T[];
}

/**
 * WordPress GraphQL Queries
 * Requires WPGraphQL plugin installed on WordPress
 */

// Menu query
export const GET_MENU = `
  query GetMenu($location: MenuLocationEnum!) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        label
        uri
        parentId
        childItems {
          nodes {
            id
            label
            uri
          }
        }
      }
    }
  }
`;

// Pages
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Portfolio/Projects
export const GET_PORTFOLIO_ITEMS = `
  query GetPortfolioItems($first: Int = 100, $after: String) {
    portfolioItems(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_PORTFOLIO_CATEGORIES = `
  query GetPortfolioCategories {
    portfolioCategories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export const GET_PORTFOLIO_ITEM_BY_SLUG = `
  query GetPortfolioItemBySlug($slug: ID!) {
    portfolioItem(id: $slug, idType: SLUG) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      portfolioCategories {
        nodes {
          id
          name
          slug
        }
      }
      portfolioGallery {
        images {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Blog/News
export const GET_POSTS = `
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Site settings (requires ACF or custom options)
export const GET_SITE_SETTINGS = `
  query GetSiteSettings {
    generalSettings {
      title
      description
    }
    themeSettings {
      logo {
        sourceUrl
      }
      phone
      email
      address
      socialLinks {
        facebook
        instagram
        linkedin
      }
    }
  }
`;

// Services
export const GET_SERVICES = `
  query GetServices {
    services(first: 20) {
      nodes {
        id
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        serviceIcon {
          icon
        }
      }
    }
  }
`;

// Testimonials
export const GET_TESTIMONIALS = `
  query GetTestimonials {
    testimonials(first: 10) {
      nodes {
        id
        title
        content
        testimonialDetails {
          clientName
          clientTitle
          clientCompany
          clientImage {
            sourceUrl
          }
          videoUrl
        }
      }
    }
  }
`;

// Certifications/Badges
export const GET_CERTIFICATIONS = `
  query GetCertifications {
    certifications(first: 20) {
      nodes {
        id
        title
        certificationDetails {
          logo {
            sourceUrl
            altText
          }
          url
        }
      }
    }
  }
`;

// Contact form submission (if using WPGraphQL with Gravity Forms or similar)
export const SUBMIT_CONTACT_FORM = `
  mutation SubmitContactForm($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      confirmation {
        message
      }
      errors {
        message
      }
    }
  }
`;

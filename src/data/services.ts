/**
 * Centralized service data — used by nav, footer, services hub, sitemap,
 * and cross-linking components across the site.
 */

export interface ServiceLink {
  name: string;
  href: string;
  description: string;
  category: 'commercial' | 'specialty';
}

export const allServices: ServiceLink[] = [
  // — Commercial —
  { name: 'Commercial Construction', href: '/services/commercial-construction', description: 'Ground-up commercial buildings, office parks, and mixed-use developments.', category: 'commercial' },
  { name: 'Commercial Upfits', href: '/services/commercial-upfits', description: 'Interior renovations and build-outs for existing commercial spaces.', category: 'commercial' },
  { name: 'Commercial Renovation', href: '/services/commercial-renovation', description: 'Modernize and refresh aging commercial properties.', category: 'commercial' },
  { name: 'Office Build-Outs', href: '/services/office-buildouts', description: 'Custom office space design and construction for businesses.', category: 'commercial' },
  { name: 'Retail Construction', href: '/services/retail-construction', description: 'Storefronts, shopping centers, and retail tenant improvements.', category: 'commercial' },
  { name: 'Restaurant Construction', href: '/services/restaurant-construction', description: 'Full restaurant build-outs, kitchens, and dining spaces.', category: 'commercial' },
  { name: 'Medical Construction', href: '/services/medical-construction', description: 'Healthcare facilities, clinics, and medical office construction.', category: 'commercial' },
  { name: 'Industrial Construction', href: '/services/industrial-construction', description: 'Warehouses, distribution centers, and manufacturing facilities.', category: 'commercial' },
  { name: 'Warehouse Construction', href: '/services/warehouse-construction', description: 'Distribution centers, cold storage, flex space, and logistics facilities.', category: 'commercial' },
  { name: 'Tenant Improvements', href: '/services/tenant-improvements', description: 'Lease space customization and tenant fit-out projects.', category: 'commercial' },
  { name: 'Brewery Construction', href: '/services/brewery-construction', description: 'Craft brewery, taproom, brewpub, and cidery construction.', category: 'commercial' },
  // — Specialty —
  { name: 'Design-Build', href: '/services/design-build', description: 'Integrated design and construction under one roof.', category: 'specialty' },
  { name: 'General Contractor', href: '/services/general-contractor', description: 'Full-service general contracting for any project type.', category: 'specialty' },
  { name: 'Construction Management', href: '/services/construction-management', description: 'Professional project oversight and construction management.', category: 'specialty' },
  { name: 'Pre-Construction', href: '/services/pre-construction', description: 'Budgeting, planning, and feasibility before breaking ground.', category: 'specialty' },
  { name: 'Roof Coating', href: '/services/roof-coating', description: 'Commercial roof coating, restoration, and waterproofing.', category: 'specialty' },
  { name: 'Green Building', href: '/services/green-building', description: 'Sustainable construction and USGBC-aligned building practices.', category: 'specialty' },
  { name: 'ADA Compliance', href: '/services/ada-compliance', description: 'ADA-compliant renovations and accessibility upgrades.', category: 'specialty' },
  { name: 'Drone Inspections', href: '/services/drone-inspections', description: 'FAA-certified thermal drone roof inspections and aerial surveys.', category: 'specialty' },
  { name: 'Site Development', href: '/services/site-development', description: 'Land clearing, grading, stormwater management, and site preparation.', category: 'specialty' },
  { name: 'Value Engineering', href: '/services/value-engineering', description: 'Construction cost optimization and budget management.', category: 'specialty' },
  { name: "Owner's Representative", href: '/services/owners-representative', description: 'Construction project advocacy, oversight, and owner representation.', category: 'specialty' },
  { name: 'Adaptive Reuse', href: '/services/adaptive-reuse', description: 'Historic renovation and building conversion projects.', category: 'specialty' },
];

export const servicesByCategory = {
  commercial: allServices.filter((s) => s.category === 'commercial'),
  specialty: allServices.filter((s) => s.category === 'specialty'),
};

export const areaLinks = [
  // Charlotte Metro — NC
  { name: 'South Charlotte', href: '/areas/south-charlotte', description: 'Serving Ballantyne, Pineville, and South Charlotte communities.' },
  { name: 'Lake Norman', href: '/areas/lake-norman', description: 'Construction services in Cornelius, Davidson, Huntersville, and Mooresville.' },
  { name: 'Huntersville', href: '/areas/huntersville', description: 'General contractor serving Huntersville, Birkdale Village, and Northlake.' },
  { name: 'Matthews', href: '/areas/matthews', description: 'Construction in Matthews, Mint Hill, Indian Trail, and Stallings.' },
  { name: 'Mooresville', href: '/areas/mooresville', description: 'Serving Race City, Lake Norman west shore, and Iredell County.' },
  // South Carolina
  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc', description: 'Licensed in South Carolina — serving Fort Mill, Tega Cay, and Indian Land.' },
  { name: 'Rock Hill, SC', href: '/areas/rock-hill-sc', description: 'Commercial construction in Rock Hill and York County.' },
];

/** Map service_type slugs (from Supabase projects) to service page hrefs */
export const serviceTypeToHref: Record<string, string> = Object.fromEntries(
  allServices.map((s) => [s.href.replace('/services/', ''), s.href])
);

/** Map service slugs to related guide slugs for cross-linking */
export const serviceToGuides: Record<string, string[]> = {
  'commercial-construction': ['commercial-construction-costs-charlotte', 'charlotte-building-permit-guide', 'commercial-construction-timeline-guide-charlotte', 'commercial-construction-financing-guide-charlotte'],
  'commercial-upfits': ['tenant-improvement-allowance-guide-charlotte', 'office-build-out-guide-charlotte', 'commercial-flooring-guide-business-type', 'ada-compliance-guide-charlotte-businesses'],
  'commercial-renovation': ['commercial-building-maintenance-checklist', 'commercial-flooring-guide-business-type', 'energy-efficiency-guide-charlotte-homes'],
  'office-buildouts': ['tenant-improvement-allowance-guide-charlotte', 'office-build-out-guide-charlotte', 'commercial-flooring-guide-business-type', 'lighting-design-guide-charlotte-homes'],
  'retail-construction': ['retail-space-build-out-guide-charlotte', 'commercial-flooring-guide-business-type', 'ada-compliance-guide-charlotte-businesses'],
  'restaurant-construction': ['restaurant-opening-guide-charlotte', 'charlotte-building-permit-guide', 'commercial-flooring-guide-business-type'],
  'medical-construction': ['medical-office-setup-guide-charlotte', 'ada-compliance-guide-charlotte-businesses', 'commercial-flooring-guide-business-type'],
  'industrial-construction': ['commercial-building-maintenance-checklist', 'energy-efficiency-guide-charlotte-homes', 'commercial-roof-inspection-checklist-charlotte'],
  'tenant-improvements': ['tenant-improvement-allowance-guide-charlotte', 'commercial-construction-financing-guide-charlotte', 'office-build-out-guide-charlotte', 'commercial-flooring-guide-business-type'],
  'design-build': ['commercial-construction-timeline-guide-charlotte', 'charlotte-building-permit-guide', 'choosing-right-contractor-charlotte-guide'],
  'general-contractor': ['commercial-construction-costs-charlotte', 'charlotte-building-permit-guide', 'commercial-construction-timeline-guide-charlotte', 'choosing-right-contractor-charlotte-guide'],
  'construction-management': ['commercial-construction-timeline-guide-charlotte', 'commercial-construction-costs-charlotte', 'commercial-building-maintenance-checklist'],
  'pre-construction': ['commercial-construction-costs-charlotte', 'commercial-construction-timeline-guide-charlotte', 'commercial-construction-financing-guide-charlotte', 'charlotte-building-permit-guide'],
  'roof-coating': ['roof-maintenance-guide-extend-life', 'commercial-roof-inspection-checklist-charlotte', 'energy-efficiency-guide-charlotte-homes'],
  'green-building': ['green-building-guide-sustainable-charlotte', 'energy-efficiency-guide-charlotte-homes', 'commercial-building-maintenance-checklist'],
  'ada-compliance': ['ada-compliance-guide-charlotte-businesses', 'commercial-building-maintenance-checklist', 'office-build-out-guide-charlotte'],
  'drone-inspections': ['commercial-roof-inspection-checklist-charlotte', 'roof-maintenance-guide-extend-life', 'commercial-building-maintenance-checklist'],
  'brewery-construction': ['restaurant-opening-guide-charlotte', 'charlotte-building-permit-guide', 'commercial-flooring-guide-business-type'],
  'warehouse-construction': ['commercial-building-maintenance-checklist', 'energy-efficiency-guide-charlotte-homes', 'commercial-roof-inspection-checklist-charlotte'],
  'site-development': ['charlotte-building-permit-guide', 'commercial-building-maintenance-checklist', 'choosing-right-contractor-charlotte-guide'],
  'value-engineering': ['commercial-construction-costs-charlotte', 'choosing-right-contractor-charlotte-guide', 'commercial-building-maintenance-checklist'],
  'owners-representative': ['commercial-construction-financing-guide-charlotte', 'commercial-construction-costs-charlotte', 'choosing-right-contractor-charlotte-guide'],
  'adaptive-reuse': ['charlotte-building-permit-guide', 'green-building-guide-sustainable-charlotte', 'commercial-building-maintenance-checklist'],
};

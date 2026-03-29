import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Thermometer,
  Camera,
  HardHat,
  CloudLightning,
  Building2,
  Factory,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  Zap,
  FileCheck,
  MapPin,
  BadgeCheck,
  Eye,
  Plane,
  ClipboardCheck,
  BarChart3,
  FileText,
  HeartHandshake,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Drone Roof Inspection Charlotte NC | Thermal Imaging & Commercial Drone Inspection Services',
  description:
    'FAA-certified commercial drone roof inspection in Charlotte NC and Detroit Metro. Thermal imaging detects hidden leaks, moisture, and insulation failures without roof access. Veteran-owned, USGBC member. Same-day emergency inspections available. (704) 574-8124.',
  keywords: [
    'drone roof inspection Charlotte NC',
    'drone roof inspection near me',
    'drone inspection services near me',
    'thermal roof inspection near me',
    'commercial drone inspection services',
    'infrared roof inspection Charlotte',
    'drone building inspection cost',
    'FAA certified drone pilot Charlotte',
    'aerial roof inspection near me',
    'drone roof survey commercial',
    'thermal imaging roof inspection Detroit',
    'commercial drone inspection Michigan',
    'drone inspection Charlotte NC',
    'drone inspection contractor',
    'drone inspection Detroit MI',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/drone-inspections',
  },
  openGraph: {
    title: 'Drone Roof Inspection Charlotte NC | Thermal Imaging & Commercial Drone Inspection Services',
    description:
      'FAA-certified commercial drone pilots offering thermal imaging roof inspections in Charlotte NC and Detroit Metro. Detect hidden leaks, moisture intrusion, and insulation failures without scaffolding or roof access. Veteran-owned.',
    url: 'https://webuildclt.com/services/drone-inspections',
    type: 'website',
  },
};

const serviceTypes = [
  {
    icon: Thermometer,
    title: 'Thermal Roof Inspection',
    slug: 'thermal-roof-inspection',
    desc: 'Infrared imaging detects moisture intrusion, hidden leaks, and insulation failures beneath the roof surface without anyone setting foot on the roof.',
    details:
      'Thermal drone roof inspection uses radiometric infrared cameras mounted on commercial-grade drones to detect temperature differentials across the entire roof surface. Wet insulation retains heat differently than dry insulation, creating visible thermal signatures that pinpoint exactly where moisture has infiltrated the roofing membrane. Our FAA Part 107 certified pilots fly the drone at optimal altitude, typically 50 to 100 feet, capturing high-resolution thermal imagery that reveals moisture pockets, failed insulation zones, ponding water paths, and membrane separations invisible to the naked eye. Thermal inspections are most effective when performed in the evening after the roof has absorbed solar heat throughout the day, as wet areas cool at a different rate than dry areas. Each inspection includes a calibrated thermal map overlaid on a visual aerial photograph so you can see exactly where problems exist relative to roof features like HVAC units, drains, and parapet walls. This data allows targeted repairs rather than costly full roof replacements, saving building owners thousands of dollars.',
    cost: '$600-$1,500',
  },
  {
    icon: Camera,
    title: 'Commercial Roof Survey',
    slug: 'commercial-roof-survey',
    desc: 'Full roof condition assessment with high-resolution aerial photography documenting membrane condition, flashing integrity, drainage, and equipment mounting.',
    details:
      'Commercial roof surveys combine ultra-high-resolution aerial photography with systematic documentation of every roof component. Our drones capture images at resolutions exceeding 1 centimeter per pixel, revealing details like cracked caulking, lifted flashing, ponding water, membrane blistering, gravel displacement, and deteriorated sealant around penetrations. The survey covers the entire roof area including hard-to-reach sections behind HVAC equipment, around rooftop mechanical units, and along parapet walls where manual inspection is dangerous or impossible. We document the condition of every roof penetration, drain, scupper, expansion joint, and edge detail. The deliverable is a comprehensive roof condition report with annotated photographs, a deficiency map, severity ratings for each issue found, and prioritized repair recommendations with estimated costs. Commercial property managers, facility directors, and building owners use these reports for capital planning, lease negotiations, insurance documentation, and maintenance budgeting. Most commercial roof surveys take 1 to 3 hours of flight time depending on roof area and complexity.',
    cost: '$300-$600',
  },
  {
    icon: HardHat,
    title: 'Construction Progress Monitoring',
    slug: 'construction-progress-monitoring',
    desc: 'Aerial documentation of construction sites providing owners, architects, and stakeholders with visual progress tracking from a perspective impossible at ground level.',
    details:
      'Construction progress monitoring uses scheduled drone flights to create a visual timeline of your project from groundbreaking through completion. Each visit produces high-resolution aerial photographs and video from multiple angles and altitudes, capturing site conditions, material staging, structural progress, equipment placement, and workforce activity. These images become invaluable documentation for owner progress reports, lender draw requests, schedule verification, and dispute resolution. We can create orthomosaic maps that stitch together hundreds of individual images into a single, georeferenced overhead view of the entire site, accurate to within inches. For large commercial projects, we provide volumetric analysis of earthwork, stockpile measurements, and grading verification using photogrammetry software. Weekly or biweekly monitoring visits give project stakeholders a clear, objective view of construction progress that supplements on-the-ground reporting. Many of our clients in Charlotte and Detroit use these reports to keep remote investors, corporate ownership groups, and insurance carriers informed without requiring site visits.',
    cost: '$400-$800 per visit',
  },
  {
    icon: CloudLightning,
    title: 'Storm Damage Assessment',
    slug: 'storm-damage-assessment',
    desc: 'Post-storm aerial inspection for insurance documentation, capturing hail damage, wind uplift, debris impact, and water intrusion evidence from above.',
    details:
      'After severe weather events including hailstorms, hurricanes, tornadoes, and high-wind events, drone inspection provides fast, safe, and comprehensive damage documentation for insurance claims. Our pilots can be on-site within 24 hours of a storm event in the Charlotte or Detroit metro areas, capturing high-resolution imagery of roof damage before temporary repairs alter the evidence. We document hail impact patterns across the entire roof surface, wind uplift damage to membrane edges and flashing, debris strikes, punctures, torn or missing roofing materials, and damaged rooftop equipment. Thermal imaging during storm damage assessment reveals moisture intrusion that may not be visible in standard photographs, proving that water has penetrated the roof system even when surface damage appears minor. The deliverable includes a detailed damage report formatted specifically for insurance adjusters, with annotated photographs, measurements, damage location maps, and material identification. Insurance companies increasingly accept and prefer drone inspection documentation because it provides objective, comprehensive coverage of the entire roof rather than the limited sampling area a human inspector can safely access. Same-day emergency inspections are available for critical situations.',
    cost: '$500-$1,200',
  },
  {
    icon: Building2,
    title: 'Building Envelope Inspection',
    slug: 'building-envelope-inspection',
    desc: 'Thermal scan of walls, windows, doors, and the full building exterior to identify air leakage, missing insulation, and energy loss points.',
    details:
      'Building envelope inspection extends thermal imaging beyond the roof to assess the entire exterior skin of a building. Using infrared cameras mounted on drones, we scan walls, windows, doors, soffits, and foundation interfaces to identify thermal bridging, air infiltration, missing or compressed insulation, moisture intrusion through wall assemblies, and failed window seals. These inspections are particularly valuable for commercial buildings, warehouses, multi-story structures, and industrial facilities where interior comfort complaints, unexplained energy costs, or visible moisture damage suggest envelope failures. The drone captures thermal imagery of exterior surfaces that would be inaccessible without scaffolding or boom lifts, including upper stories, parapets, and areas above awnings or canopies. For USGBC members and green building projects, envelope inspection data supports energy audit documentation, LEED certification requirements, and sustainability reporting. Our reports include side-by-side thermal and visual images of each deficiency, severity ratings, and recommended remediation approaches. Building envelope inspections are typically performed during heating season when the temperature differential between interior and exterior spaces maximizes the visibility of thermal anomalies.',
    cost: '$800-$2,000',
  },
  {
    icon: Factory,
    title: 'Industrial Facility Inspection',
    slug: 'industrial-facility-inspection',
    desc: 'Drone inspection of warehouses, factories, tall structures, and facilities where manual inspection is unsafe, impractical, or requires expensive equipment access.',
    details:
      'Industrial facilities present unique inspection challenges due to height, structural complexity, hazardous environments, and the operational disruption caused by traditional inspection methods. Warehouses with 30 to 60 foot clear heights, manufacturing plants with complex rooflines, distribution centers spanning hundreds of thousands of square feet, and multi-story industrial structures all benefit from drone inspection that eliminates the need for scaffolding, boom lifts, rope access teams, or production shutdowns. Our drones inspect industrial roof systems including standing seam metal, single-ply membrane, built-up roofing, and metal panel systems, documenting fastener condition, seam integrity, coating deterioration, flashing failures, and structural deflection. For interior inspections of tall warehouse spaces, we use drones to assess overhead crane rails, structural steel connections, roof deck condition, skylight integrity, and fire suppression system components without shutting down operations. Industrial thermal inspections detect insulation voids in metal building wall panels, failed vapor barriers, and moisture infiltration paths that drive corrosion and structural deterioration. The cost savings versus traditional access methods like scaffolding or boom lifts often exceeds 70 percent while delivering more comprehensive coverage.',
    cost: '$2,000-$5,000+',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Scope Definition',
    desc: 'We discuss your inspection needs, building type, roof area, specific concerns, and timeline requirements. Whether you need a routine condition assessment, thermal moisture survey, storm damage documentation, or construction monitoring, we define the scope, select the appropriate camera and sensor configuration, and provide a fixed-price quote. Most consultations take 15 to 20 minutes by phone.',
  },
  {
    step: '02',
    title: 'Site Assessment & Flight Planning',
    desc: 'Before every flight, our FAA Part 107 certified pilot conducts a site assessment including airspace classification check, NOTAMs review, obstacle identification, electromagnetic interference evaluation, and weather forecast analysis. We verify that the site is clear for drone operations and plan the flight path to ensure complete coverage of every square foot of roof or building surface. For facilities near airports, heliports, or restricted airspace, we obtain any required FAA authorizations in advance.',
  },
  {
    step: '03',
    title: 'Pre-Flight Safety Briefing',
    desc: 'On inspection day, our pilot conducts a pre-flight safety briefing covering the flight plan, emergency procedures, and ground safety protocols. We brief on-site personnel about the drone operation, establish a safe landing zone, and verify that weather conditions including wind speed, temperature, and precipitation meet our safety thresholds. All equipment undergoes a pre-flight checklist including battery status, sensor calibration, GPS lock, and control link verification.',
  },
  {
    step: '04',
    title: 'Drone Flight & Data Capture',
    desc: 'The drone flies a systematic grid pattern over the inspection area at the optimal altitude for the sensor being used, typically 40 to 100 feet for thermal imaging and 30 to 60 feet for high-resolution visual photography. Flight time ranges from 20 minutes for a small commercial roof to 2 hours or more for large industrial facilities requiring multiple battery swaps. Thermal inspections capture radiometric infrared data at every point on the roof surface. Visual inspections capture overlapping photographs for detailed analysis and orthomosaic map generation.',
  },
  {
    step: '05',
    title: 'Data Processing & Analysis',
    desc: 'Raw thermal and visual data is processed using professional inspection software. Thermal images are calibrated for ambient temperature, humidity, and emissivity to ensure accurate temperature readings. High-resolution photographs are stitched into orthomosaic maps for complete roof coverage. Our analysts identify and classify every deficiency, anomaly, and area of concern found in the data, cross-referencing thermal signatures with visual imagery to confirm findings and eliminate false positives.',
  },
  {
    step: '06',
    title: 'Report Delivery & Consultation',
    desc: 'You receive a comprehensive inspection report within 3 to 5 business days, typically in PDF format with interactive annotations. The report includes an executive summary, annotated thermal and visual images, a deficiency map showing all findings by location and severity, repair recommendations with estimated costs, and a prioritized action plan. We schedule a follow-up call to walk you through the findings and answer questions. For storm damage claims, reports are formatted specifically for insurance adjuster review.',
  },
];

const whyChooseUs = [
  {
    icon: Plane,
    title: 'FAA Part 107 Certified Pilots',
    desc: 'Every drone inspection is conducted by FAA Part 107 certified commercial drone pilots who maintain current certifications, carry aviation liability insurance, and follow strict safety protocols. Our pilots have logged hundreds of commercial flight hours across both Charlotte and Detroit metro areas, giving them the experience to handle complex airspace, challenging weather conditions, and multi-building industrial sites safely and efficiently.',
  },
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company. Our military background instills discipline, precision, and accountability in every inspection we perform. When we schedule an inspection, we show up on time, complete the work thoroughly, and deliver your report by the date we promise. Military precision translates directly into inspection quality.',
  },
  {
    icon: Thermometer,
    title: 'Professional Thermal Camera Technology',
    desc: 'We use radiometric thermal cameras capable of detecting temperature differentials as small as 0.05 degrees Celsius. Unlike consumer-grade thermal cameras, our sensors capture calibrated temperature data at every pixel, enabling precise moisture mapping and quantitative analysis. This level of accuracy distinguishes actionable inspection data from the blurry thermal snapshots offered by budget inspection services.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Documentation Experience',
    desc: 'We produce inspection reports specifically formatted for insurance adjusters, public adjusters, and claims managers. Our documentation includes the level of detail, measurement precision, and photographic evidence that insurance companies require to process roof damage claims efficiently. We have supported hundreds of storm damage claims and understand exactly what adjusters need to approve repairs or replacement.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainability principles into our inspection services. Thermal inspections identify energy waste through insulation failures, air leakage, and envelope deficiencies. Our reports help building owners reduce energy consumption, lower operating costs, and support green building certification requirements including LEED and ENERGY STAR benchmarking.',
  },
  {
    icon: Zap,
    title: 'Same-Day Emergency Inspections',
    desc: 'When a major storm hits Charlotte or Detroit, you cannot wait weeks for an inspection. We offer same-day and next-day emergency drone inspections for storm damage assessment, providing rapid documentation before temporary repairs alter the evidence. Fast turnaround protects your insurance claim and gets the repair process started immediately.',
  },
  {
    icon: MapPin,
    title: 'Charlotte & Detroit Metro Coverage',
    desc: 'We provide drone inspection services across two major metro areas: Charlotte NC, including South Charlotte, Lake Norman, Fort Mill, and the surrounding region, plus the Detroit Michigan metro area. Dual-market coverage means we understand the roofing systems, weather patterns, and building codes specific to both the Southeast and the Midwest.',
  },
  {
    icon: DollarSign,
    title: '70%+ Cost Savings vs. Traditional Methods',
    desc: 'Traditional roof inspections of commercial and industrial buildings require scaffolding, boom lifts, or rope access teams that cost thousands of dollars in equipment rental and setup time. Drone inspection eliminates these access costs entirely while delivering more comprehensive coverage. A drone surveys an entire 100,000 square foot warehouse roof in under two hours, a task that would take a manual inspection crew multiple days with equipment.',
  },
];

const costTiers = [
  {
    type: 'Basic Visual Inspection',
    range: '$300-$600',
    desc: 'High-resolution aerial photography of the roof surface documenting visible conditions including membrane integrity, flashing, drainage, equipment mounting, and general wear. Ideal for routine condition assessments, pre-purchase evaluations, and annual maintenance documentation on small to mid-size commercial roofs up to 20,000 square feet.',
  },
  {
    type: 'Thermal Imaging Survey',
    range: '$600-$1,500',
    desc: 'Full radiometric thermal scan of the roof surface detecting moisture intrusion, insulation failures, and hidden leaks beneath the roofing membrane. Includes calibrated thermal map, visual overlay, moisture location report, and repair recommendations. Price depends on roof area, complexity, and number of thermal anomalies requiring detailed analysis.',
  },
  {
    type: 'Full Roof Assessment (Visual + Thermal)',
    range: '$1,000-$2,500',
    desc: 'Comprehensive inspection combining high-resolution visual photography with thermal infrared imaging for the most complete roof condition picture available. Includes deficiency map, thermal moisture map, severity ratings, prioritized repair schedule, and estimated repair costs. Recommended for roofs over 10 years old, pre-purchase due diligence, and warranty claim documentation.',
  },
  {
    type: 'Construction Progress Monitoring (per visit)',
    range: '$400-$800',
    desc: 'Scheduled aerial documentation of construction site progress with high-resolution photography, video, and optional orthomosaic mapping. Ideal for owner progress reports, lender draw verification, and stakeholder updates. Discounted rates available for weekly or biweekly monitoring packages over the project duration.',
  },
  {
    type: 'Storm Damage Documentation',
    range: '$500-$1,200',
    desc: 'Rapid-response aerial inspection following hail, wind, tornado, or hurricane events. Includes complete roof damage documentation formatted for insurance claims, annotated damage photographs, thermal moisture mapping, measurement data, and a damage summary report suitable for adjuster review. Same-day emergency service available.',
  },
  {
    type: 'Large Commercial / Industrial',
    range: '$2,000-$5,000+',
    desc: 'Full inspection of large-footprint commercial and industrial facilities including warehouses, manufacturing plants, distribution centers, and multi-building campuses. Includes multiple drone flights, comprehensive thermal and visual coverage, interior overhead inspections where applicable, and detailed reporting with CAD-compatible deficiency mapping. Price scales with total roof area and building complexity.',
  },
];

const faqs = [
  {
    question: 'How much does a drone roof inspection cost in Charlotte NC?',
    answer:
      'A drone roof inspection in Charlotte typically costs between $300 and $2,500 depending on the type of inspection and the size of your roof. A basic visual inspection of a small commercial roof starts around $300 to $600. A thermal imaging survey that detects hidden moisture and insulation failures runs $600 to $1,500. A full assessment combining visual and thermal inspection costs $1,000 to $2,500. Large industrial facilities over 50,000 square feet may cost $2,000 to $5,000 or more. We provide fixed-price quotes after understanding your specific building and inspection needs, so there are no surprises on your invoice.',
  },
  {
    question: 'What can a thermal drone inspection detect?',
    answer:
      'A thermal drone inspection detects problems that are completely invisible to the naked eye. The infrared camera measures temperature differences across the roof surface, revealing moisture trapped beneath the roofing membrane, wet or compressed insulation, active leaks and their entry paths, ponding water damage, failed seams and membrane separations, air infiltration points, HVAC duct leaks above the ceiling, and thermal bridging through structural members. Wet insulation holds heat differently than dry insulation, so thermal imaging creates a clear map showing exactly where moisture problems exist. This allows targeted repairs to only the affected areas rather than tearing off and replacing an entire roof to find the leak.',
  },
  {
    question: 'Is drone roof inspection covered by insurance?',
    answer:
      'Drone roof inspection itself is not typically covered by insurance as a standalone service. However, the inspection cost is often included as part of your overall roof damage claim when documenting storm damage, wind damage, or hail damage for an insurance claim. Many insurance adjusters now prefer drone inspection reports because they provide complete, objective documentation of the entire roof rather than the limited view from a ladder. The inspection cost of $500 to $1,200 for storm damage documentation is a small investment compared to the tens of thousands of dollars in roof repairs or replacement that the documentation helps you recover through your claim.',
  },
  {
    question: 'How long does a drone roof inspection take?',
    answer:
      'Most drone roof inspections take between 1 and 3 hours on-site, depending on the roof size and type of inspection. A basic visual inspection of a standard commercial roof under 20,000 square feet typically takes about 1 hour including setup, flight, and teardown. Thermal inspections may take 1.5 to 2.5 hours because the drone flies a tighter grid pattern to capture detailed infrared data. Large industrial facilities over 100,000 square feet may require 3 to 4 hours with multiple battery changes. After the on-site visit, data processing and report preparation typically takes 3 to 5 business days. Rush delivery is available for storm damage claims.',
  },
  {
    question: 'Do I need to be present for a drone inspection?',
    answer:
      'You do not need to be present for the drone inspection itself, but we do need access to the property and any locked gates, rooftop hatches, or restricted areas. Many of our commercial clients simply provide a site contact or security code and we handle everything independently. If you want to observe the flight or discuss findings on-site, you are always welcome to be present. For storm damage inspections where insurance documentation is the goal, some clients prefer to have their insurance adjuster or public adjuster present during the flight so they can see the damage being documented in real time.',
  },
  {
    question: 'What is the difference between visual and thermal drone inspection?',
    answer:
      'A visual drone inspection uses a high-resolution camera to photograph the roof surface, documenting visible conditions like cracked membranes, lifted flashing, ponding water, debris, and deteriorated sealant. It shows you what the roof looks like from above. A thermal inspection uses an infrared camera to measure temperature variations across the roof, revealing hidden problems beneath the surface like trapped moisture, wet insulation, and air leaks that you cannot see in a regular photograph. Visual inspection tells you what is wrong on the surface. Thermal inspection tells you what is wrong underneath. For the most complete picture, we recommend combining both in a full roof assessment.',
  },
  {
    question: 'Can drones inspect a roof in the rain?',
    answer:
      'We do not fly drone inspections in rain, snow, or heavy fog for both safety and data quality reasons. Rain interferes with thermal imaging accuracy because water on the roof surface masks the temperature signatures we need to detect subsurface moisture. High winds above 25 miles per hour also ground our operations because they affect flight stability and image sharpness. We monitor weather forecasts closely and will reschedule if conditions are not suitable. For thermal inspections specifically, the best conditions are clear skies with the flight conducted in the evening after the roof has absorbed solar heat throughout the day, which maximizes the thermal contrast between wet and dry areas.',
  },
  {
    question: 'How often should I get a drone roof inspection?',
    answer:
      'We recommend a drone roof inspection at least once per year for commercial and industrial buildings, ideally in the fall before winter weather stresses the roof system. Buildings with flat roofs, older roofing systems over 15 years, known leak history, or heavy rooftop equipment should consider inspections twice per year, in spring and fall. After any major storm event with hail, high winds, or heavy debris, an immediate inspection is advisable to document damage before temporary repairs or weathering alter the evidence. Annual thermal inspections are especially valuable because they create a year-over-year baseline that shows whether moisture problems are growing, stable, or resolved after repairs.',
  },
  {
    question: 'Are drone inspections safe for my building?',
    answer:
      'Yes, drone inspections are completely safe for your building. The drone never touches the roof surface, so there is zero risk of damage to the roofing membrane, flashing, or any rooftop equipment. In fact, drone inspection is safer for the roof than traditional manual inspection because foot traffic is a leading cause of membrane damage on commercial flat roofs, especially TPO and EPDM systems. Drone inspection also eliminates the safety risks to human inspectors who would otherwise need to walk on potentially damaged or unstable roof surfaces, climb ladders, or work at height near unprotected edges. Our pilots maintain safe distances from all structures and follow strict FAA operating procedures.',
  },
  {
    question: 'What qualifications does your drone pilot have?',
    answer:
      'Our drone pilots hold FAA Part 107 Remote Pilot Certificates, the federal certification required for all commercial drone operations in the United States. This certification requires passing an FAA knowledge exam covering airspace regulations, weather, flight operations, and safety procedures, with recurrent testing every 24 months. Beyond the FAA certification, our pilots carry aviation liability insurance, maintain proficiency through regular flight hours, and have specific training in thermal imaging interpretation and roof inspection methodology. As a veteran-owned company, our team brings military-grade discipline and attention to detail to every flight operation.',
  },
  {
    question: 'Do you provide drone inspections in Detroit Michigan?',
    answer:
      'Yes, we provide full drone inspection services across the Detroit Michigan metro area including Detroit, Dearborn, Warren, Sterling Heights, Troy, Southfield, Livonia, Ann Arbor, and surrounding communities. Our Detroit operations offer the same thermal imaging, visual inspection, storm damage assessment, and construction monitoring services available in Charlotte. Michigan commercial and industrial buildings face unique challenges from freeze-thaw cycles, heavy snow loads, and ice damming that make regular drone inspection especially valuable for detecting moisture intrusion and insulation failures before they cause structural damage.',
  },
  {
    question: 'Can a drone inspection replace a physical roof inspection?',
    answer:
      'For most purposes, a drone inspection provides equal or better data than a traditional physical roof inspection. Drones capture the entire roof surface with consistent detail, while a human inspector can only walk a sampling path and may miss deficiencies in areas they do not visit. Thermal imaging detects subsurface moisture that no physical inspection method can identify without destructive core sampling. However, there are specific situations where a physical inspection complements drone data: evaluating membrane adhesion by pulling on seams, taking core samples to measure remaining roof life, and inspecting the underside of the roof deck from inside the building. For warranty claims, some roofing manufacturers still require a physical inspection by a certified inspector. We recommend drone inspection as your primary assessment tool, supplemented by targeted physical inspection of specific areas identified in the drone data when needed.',
  },
  {
    question: 'How does a drone inspection compare to hiring a roofing company for an inspection in Charlotte?',
    answer:
      'A roofing company inspection and a drone inspection serve different purposes. Roofing companies typically provide free inspections as a sales tool, and their reports often recommend roof replacement because that generates revenue. A drone inspection from We Build is an independent, objective assessment with no incentive to sell you a new roof. Our thermal imaging reveals the actual extent of moisture damage so you know whether you need a targeted repair, a roof coating, or a full replacement. Charlotte building owners who get a drone inspection first are better equipped to evaluate roofing company proposals and avoid paying for work they do not need.',
  },
  {
    question: 'How much money can a drone inspection save on roof maintenance in Mecklenburg County?',
    answer:
      'A drone inspection typically saves Charlotte and Mecklenburg County building owners 40 to 70 percent on roof repair costs by enabling targeted repairs instead of broad-area replacements. A $1,000 thermal survey that identifies a 500 square foot moisture problem can save $30,000 to $50,000 compared to replacing an entire 10,000 square foot roof because the contractor could not pinpoint the damage. Over a 20-year roof lifecycle, annual drone inspections costing $500 to $1,500 per year consistently prevent small problems from becoming catastrophic failures, delivering cumulative savings of $50,000 to $200,000 depending on facility size.',
  },
  {
    question: 'Can drone inspections be used for construction progress monitoring in Charlotte?',
    answer:
      'Yes, construction progress monitoring is one of the fastest-growing applications of commercial drone services. We fly scheduled drone surveys over active construction sites in Charlotte to capture aerial photography, orthomosaic site maps, and volumetric measurements of earthwork and material stockpiles. These surveys provide building owners, construction managers, and lenders with objective documentation of work completed versus the construction schedule. Progress flights are typically conducted weekly or biweekly and cost $300 to $800 per visit depending on site size. The resulting data integrates with construction management software and is especially valuable for owner representatives monitoring contractor performance on large commercial projects.',
  },
];

export default function DroneInspectionsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Drone Roof Inspection & Thermal Imaging Charlotte NC',
            'FAA-certified commercial drone roof inspection services in Charlotte NC and Detroit Metro. Thermal imaging detects hidden leaks, moisture intrusion, and insulation failures without roof access. Storm damage assessment, construction monitoring, and building envelope inspection. Veteran-owned, USGBC member.',
            'https://webuildclt.com/services/drone-inspections'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Drone Inspections' },
          ]),
        ]}
      />

      <PageHero
        title="Drone Roof Inspection & Thermal Imaging Services"
        subtitle="FAA-certified commercial drone pilots serving Charlotte NC and Detroit Metro"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Drone Inspections' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Is a Drone Roof Inspection?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A drone roof inspection uses FAA-certified commercial drones equipped with high-resolution
                visual cameras and thermal infrared sensors to assess roof condition, detect hidden moisture,
                and document damage without anyone climbing onto the roof. It is faster, safer, and more
                comprehensive than traditional manual roof inspection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Commercial and industrial buildings in Charlotte NC and the Detroit Metro area face constant
                threats from severe weather, UV degradation, thermal cycling, and age-related deterioration.
                Traditional roof inspections require scaffolding, boom lifts, or rope access teams that cost
                thousands of dollars, take days to set up, and still only cover a fraction of the roof surface.
                Drone inspection eliminates these access costs entirely while capturing data from every square
                foot of roof area in a fraction of the time. Thermal imaging goes even further, revealing
                moisture trapped beneath the roofing membrane, failed insulation, and active leak paths that
                are completely invisible during a visual-only inspection. For building owners and facility
                managers, drone inspection means earlier problem detection, targeted repairs instead of costly
                full replacements, and stronger insurance claim documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> and
                FAA Part 107 certified drone inspection provider. Our inspection services pair directly with our{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">roof coating</Link> and{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> capabilities,
                meaning we do not just find the problems, we fix them. As a{' '}
                <Link href="https://www.usgbc.org" className="text-primary hover:underline">USGBC member</Link>,
                we use inspection data to help building owners reduce energy waste, extend roof life, and
                support sustainable building operations. We serve Charlotte, South Charlotte, Lake Norman,
                Fort Mill, and the greater Detroit Michigan metro area.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule an Inspection
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Thermometer, title: 'Thermal Imaging', desc: 'Infrared cameras detect hidden moisture, insulation failures, and leak paths invisible to the naked eye. Pinpoint problems without destructive testing.' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Most inspections complete in 1 to 3 hours on-site with reports delivered in 3 to 5 business days. Same-day emergency service available for storm damage.' },
                { icon: Shield, title: 'FAA Certified & Insured', desc: 'Every flight is conducted by FAA Part 107 certified pilots carrying aviation liability insurance with strict safety protocols.' },
                { icon: DollarSign, title: '70%+ Cost Savings', desc: 'Eliminate scaffolding, boom lifts, and rope access costs. A drone surveys 100,000 square feet in under 2 hours versus days with traditional methods.' },
              ].map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Inspection Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What Does a Drone Roof Inspection Include?
            </h2>
            <p className="text-muted-foreground">
              From thermal moisture surveys to storm damage documentation, we offer a full range of
              commercial drone inspection services tailored to your building type, budget, and objectives.
            </p>
          </div>
          <div className="space-y-8">
            {serviceTypes.map((type) => (
              <Card key={type.title} id={type.slug}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold">{type.title}</h3>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          {type.cost}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{type.desc}</p>
                      <p className="text-muted-foreground">{type.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              How Does a Drone Roof Inspection Work? Our 6-Step Process
            </h2>
            <p className="text-muted-foreground">
              Every drone inspection follows a structured process from initial consultation through
              report delivery, ensuring consistent quality, safety compliance, and actionable results
              for every client.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for Drone Roof Inspection?
            </h2>
            <p className="text-muted-foreground">
              Anyone can buy a drone. What sets We Build apart is the combination of FAA-certified
              pilots, professional thermal imaging equipment, construction industry expertise, and the
              ability to not only find problems but fix them. We are inspectors and builders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Drone Roof Inspection Costs in Charlotte NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Drone inspection costs depend on roof size, inspection type, sensor requirements, and
                report complexity. Below are typical price ranges for our Charlotte and Detroit metro
                service areas. Every project receives a fixed-price quote before we fly.
              </p>
            </div>
            <div className="space-y-4">
              {costTiers.map((item) => (
                <div key={item.type} className="p-6 bg-muted rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{item.type}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">Factors That Affect Your Drone Inspection Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Roof area:</strong> Larger roofs require longer flight times and more data processing. A 10,000 square foot commercial roof costs less than a 200,000 square foot industrial facility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Inspection type:</strong> Visual-only inspections cost less than thermal imaging because thermal requires specialized sensors, calibrated flight patterns, and more intensive data analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Roof complexity:</strong> Roofs with multiple levels, extensive rooftop equipment, skylights, and complex geometry require more flight time and careful navigation than simple flat roofs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Report detail:</strong> Standard reports with annotated images cost less than reports requiring orthomosaic mapping, CAD-compatible deficiency overlays, or volumetric calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Urgency:</strong> Standard turnaround is 3 to 5 business days. Rush delivery for storm damage claims and emergency inspections may carry an expedite fee.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Drone Roof Inspection Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions building owners, facility managers, and property
                managers ask about drone roof inspections, thermal imaging, costs, and what to expect.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Related Services & Resources</h2>
            <p className="text-muted-foreground mt-2">
              Drone inspection is often the first step toward roof repair, coating, or replacement. Explore
              our related construction services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Roof Coating Charlotte NC', href: '/services/roof-coating', type: 'Service', desc: 'After drone inspection identifies problem areas, our silicone and acrylic roof coatings extend roof life by 10 to 20 years at a fraction of replacement cost.' },
              { title: 'Pre-Construction Services', href: '/services/pre-construction', type: 'Service', desc: 'Drone surveys and thermal imaging inform pre-construction site analysis, feasibility studies, and cost estimating.' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service', desc: 'Drone progress monitoring integrates with our CM services for real-time project oversight and owner reporting.' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction with integrated drone monitoring throughout the build process for owner reporting and quality assurance.' },
              { title: 'Industrial Construction Charlotte NC', href: '/services/industrial-construction', type: 'Service', desc: 'Warehouses, manufacturing plants, and industrial facilities benefit from regular drone inspection to maintain roof integrity and avoid costly shutdowns.' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{resource.type}</span>
                  <h3 className="font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Drone Roof Inspection Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need a thermal moisture survey, storm damage documentation, construction
            progress monitoring, or a routine roof condition assessment, our FAA-certified pilots
            and professional thermal imaging equipment deliver the data you need to make informed
            decisions about your building.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and fixed-price quote. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and the Detroit Michigan metro area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule an Inspection</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+17045748124">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TreePine,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  Mountain,
  Droplets,
  Shovel,
  MapPin,
  HardHat,
  FileCheck,
  Lightbulb,
  BadgeCheck,
  HeartHandshake,
  Target,
  Layers,
  Ruler,
  Construction,
  Leaf,
  Truck,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Site Development Charlotte NC | Land Clearing, Grading & Site Preparation Contractor',
  description:
    'Professional site development services in Charlotte, NC. Land clearing, grading, earthwork, stormwater management, utility infrastructure & erosion control. Veteran-owned, licensed in NC & SC. 60+ years combined experience. (704) 574-8124.',
  keywords: [
    'site development Charlotte NC',
    'site development near me',
    'site development contractor',
    'land clearing contractor Charlotte',
    'land clearing contractor near me',
    'grading contractor Charlotte NC',
    'grading contractor near me',
    'site preparation near me',
    'commercial site development',
    'earthwork contractor Charlotte',
    'stormwater management Charlotte NC',
    'site work contractor',
    'site development contractor near me',
    'land clearing and grading Charlotte',
    'commercial grading Charlotte NC',
    'erosion control Charlotte NC',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/site-development',
  },
  openGraph: {
    title: 'Site Development Charlotte NC | We Build',
    description:
      'Expert site development services in Charlotte. Land clearing, grading, stormwater management, utility infrastructure & erosion control. Veteran-owned, licensed NC & SC.',
    url: 'https://webuildclt.com/services/site-development',
    type: 'website',
  },
};

const serviceTypes = [
  {
    icon: TreePine,
    title: 'Land Clearing & Grubbing',
    desc: 'Complete removal of trees, stumps, brush, and organic material to prepare your site for construction, with selective clearing options to preserve mature trees and natural buffers.',
    details:
      'Land clearing is the first physical step in any site development project. Our clearing crews remove all vegetation, trees, stumps, root systems, and organic material from the designated construction footprint. For Charlotte-area commercial sites, we offer both full clearing and selective clearing approaches. Selective clearing preserves specimen trees, buffers along property lines, and stands that provide screening or aesthetic value, which is often required by Mecklenburg County tree preservation ordinances. Our grubbing process removes root systems and organic material below grade to prevent settlement under future building pads, parking areas, and utility corridors. All cleared material is processed on-site when possible, with merchantable timber sold and brush converted to mulch, reducing disposal costs and environmental impact. We coordinate tree surveys with certified arborists when Charlotte tree preservation requirements apply, ensuring compliance with the City of Charlotte Tree Ordinance and Mecklenburg County land development regulations.',
    fee: '$3,000-$15,000 per acre',
  },
  {
    icon: Mountain,
    title: 'Grading & Earthwork',
    desc: 'Precision grading and earthwork to establish proper site elevations, drainage patterns, and building pad preparation for foundations and parking areas.',
    details:
      'Grading and earthwork establish the foundation for everything that follows on a construction site. Our grading operations include rough grading to establish subgrade elevations for building foundations, parking areas, and roadways; fine grading to achieve the precise tolerances required for building slabs, curb and gutter installations, and pavement sections; and finish grading for landscaped areas, detention ponds, and drainage swales. We use GPS-guided equipment including bulldozers, excavators, and motor graders that achieve accuracy within one-tenth of a foot, reducing material waste and rework. For Charlotte commercial sites, earthwork often involves significant cut-and-fill operations to balance the site and minimize the need for imported or exported material. Our estimating team calculates earthwork quantities from survey data and civil engineering plans to provide accurate cost projections. Soil conditions in the Charlotte region vary from firm residual soils in the Piedmont to expansive clays near creek bottoms, and our experienced operators know how to handle each condition. We perform compaction testing throughout the grading process and coordinate with geotechnical engineers to verify that fill areas meet the required density specifications before foundation work begins.',
    fee: '$5,000-$30,000',
  },
  {
    icon: Droplets,
    title: 'Stormwater Management',
    desc: 'Design and construction of stormwater management systems including detention ponds, bioretention areas, underground storage, and compliance with Charlotte-Mecklenburg NPDES requirements.',
    details:
      'Stormwater management is one of the most regulated and critical aspects of site development in the Charlotte-Mecklenburg area. Charlotte-Mecklenburg Storm Water Services requires all development projects disturbing more than one acre to implement post-construction stormwater controls that manage both the quality and quantity of runoff leaving the site. Our stormwater construction services include wet and dry detention ponds sized to attenuate peak discharge rates, bioretention cells and rain gardens that filter pollutants through engineered soil media, underground detention chambers for sites where surface area is limited, level spreaders and vegetated buffers that reduce runoff velocity and promote infiltration, and sand filter systems for high-pollutant commercial applications. We work closely with civil engineers to ensure that all stormwater facilities are constructed to the exact grades, dimensions, and specifications required for regulatory approval. Our crews understand the critical tolerances for weir elevations, outlet structures, and emergency spillways that determine whether a stormwater facility will function as designed. We also handle all NPDES construction stormwater permit requirements, including installation and maintenance of erosion control measures during the construction phase.',
    fee: '$20,000-$100,000',
  },
  {
    icon: Construction,
    title: 'Utility Infrastructure',
    desc: 'Installation of underground utilities including water, sanitary sewer, storm drainage, electrical conduit, gas lines, and telecommunications infrastructure.',
    details:
      'Utility infrastructure installation connects your site to the municipal systems that make the building functional. Our utility work includes water main extensions and on-site distribution piping to serve fire hydrants, building connections, and irrigation systems; sanitary sewer installation including gravity mains, manholes, and lateral connections to serve the building and future expansion areas; storm drainage systems including catch basins, junction boxes, reinforced concrete pipe, and outfall structures; electrical conduit and duct bank installation for primary and secondary power distribution; natural gas line installation in coordination with Piedmont Natural Gas; and telecommunications conduit for fiber optic and copper cabling. In the Charlotte area, utility connections require coordination with Charlotte Water for water and sewer, Duke Energy for electrical, Piedmont Natural Gas for gas, and various telecommunications providers. Each utility has its own permitting timeline, inspection requirements, and construction standards. Our project managers handle all utility coordination, permit applications, and inspections to keep your project moving without delays from utility connection issues. We perform all utility installations with proper bedding, backfill, and compaction to prevent settlement and ensure long-term performance.',
    fee: '$30,000-$200,000+',
  },
  {
    icon: Leaf,
    title: 'Erosion Control',
    desc: 'Comprehensive erosion and sediment control implementation, monitoring, and maintenance throughout the construction phase to maintain NPDES permit compliance.',
    details:
      'Erosion and sediment control is a regulatory requirement and an environmental responsibility on every construction site in Mecklenburg County. Charlotte-Mecklenburg Storm Water Services actively enforces the City of Charlotte Erosion Control Ordinance, conducting regular inspections of active construction sites and issuing notices of violation with significant fines for non-compliance. Our erosion control services begin before the first tree is cut and continue until the site is fully stabilized with permanent vegetation. We install silt fences, construction entrances, sediment traps, sediment basins, check dams, temporary diversions, and inlet protection devices in accordance with the approved erosion control plan. Our crews perform weekly inspections as required by the NPDES construction general permit, documenting conditions and corrective actions in inspection reports that maintain your compliance record. When rainfall events exceed the design capacity of installed measures, we mobilize emergency repair crews to restore controls before the next rain event. We also install temporary seeding and matting on disturbed areas that will remain inactive for extended periods, reducing the erosion potential and the risk of enforcement action. Our thorough approach to erosion control has helped Charlotte developers avoid the costly fines and project shutdowns that result from non-compliance.',
    fee: '$5,000-$25,000',
  },
  {
    icon: Shovel,
    title: 'Site Preparation for Commercial Buildings',
    desc: 'Complete site preparation including demolition of existing structures, environmental remediation, soil stabilization, and preparation for new commercial construction.',
    details:
      'Site preparation for commercial buildings encompasses all the work required to transform a raw or previously developed parcel into a construction-ready building site. For undeveloped land, this includes clearing, grubbing, topsoil stripping, rough grading, and installation of temporary erosion controls and construction access roads. For previously developed sites, preparation may include demolition of existing structures, removal of underground storage tanks, environmental remediation of contaminated soils, and removal of abandoned utilities and foundations. Soil conditions are a critical factor in Charlotte-area site preparation. The Piedmont region features residual soils that can vary significantly across a single site, from competent bearing soils to soft, compressible materials that require stabilization. Our team works with geotechnical engineers to develop appropriate soil stabilization strategies, which may include over-excavation and replacement, chemical stabilization with lime or cement, geosynthetic reinforcement, or deep foundation preparation when bearing conditions are inadequate for spread footings. We handle all aspects of site preparation, from initial environmental assessments through final building pad certification, providing a single point of responsibility for the most critical early phase of your commercial construction project.',
    fee: '$50,000-$500,000+',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Environmental Assessment & Due Diligence',
    desc: 'Before any ground is disturbed, we conduct or coordinate environmental assessments to identify wetlands, stream buffers, endangered species habitat, contaminated soils, and other environmental constraints that affect site development feasibility and design. For Charlotte-area sites, this includes review of Mecklenburg County floodplain maps, stream buffer requirements, and tree preservation ordinances.',
  },
  {
    step: '02',
    title: 'Survey & Engineering Coordination',
    desc: 'We coordinate with licensed surveyors to establish property boundaries, topographic conditions, and existing utility locations. This survey data feeds into the civil engineering design that establishes building pad elevations, grading plans, utility layouts, stormwater management systems, and erosion control plans. We review all engineering drawings for constructability and identify potential conflicts before construction begins.',
  },
  {
    step: '03',
    title: 'Permitting & Regulatory Approvals',
    desc: 'Charlotte-Mecklenburg land development requires multiple permits before site work begins. We manage applications for land disturbance permits, NPDES construction stormwater permits, tree removal permits, driveway permits from NCDOT or Charlotte DOT, and utility connection permits from Charlotte Water, Duke Energy, and Piedmont Natural Gas. Our familiarity with local permitting timelines helps avoid delays that can push your project back weeks or months.',
  },
  {
    step: '04',
    title: 'Erosion Control Installation & Clearing',
    desc: 'The first on-site activity is installation of the erosion control perimeter, including silt fences, construction entrances, and sediment basins. Only after erosion controls are in place and inspected do we begin clearing and grubbing operations. Selective clearing preserves designated trees and buffers in accordance with the approved tree preservation plan and Mecklenburg County requirements.',
  },
  {
    step: '05',
    title: 'Mass Grading & Earthwork',
    desc: 'Mass grading operations establish the major site elevations using GPS-guided heavy equipment. We balance cut and fill quantities to minimize material import or export, reducing cost and truck traffic. Compaction testing is performed continuously throughout the grading process, with density tests documented at intervals specified by the geotechnical engineer. Building pads, parking areas, and road subgrades are all brought to specified grades and verified before the next phase begins.',
  },
  {
    step: '06',
    title: 'Underground Utility Installation',
    desc: 'With mass grading complete, we install underground utilities including water mains, sanitary sewer, storm drainage, electrical conduit, gas lines, and telecommunications infrastructure. All utility trenches are bedded, backfilled, and compacted in accordance with the serving utility company specifications and engineering requirements. We coordinate inspections with each utility provider and the City of Charlotte to maintain project schedule.',
  },
  {
    step: '07',
    title: 'Stormwater Facility Construction',
    desc: 'Stormwater management facilities including detention ponds, bioretention cells, underground chambers, and outfall structures are constructed to exact design specifications. Critical elevations for weirs, outlet structures, and emergency spillways are surveyed and verified. We coordinate final inspections with Charlotte-Mecklenburg Storm Water Services to obtain approval before the facilities are put into service.',
  },
  {
    step: '08',
    title: 'Final Grading, Paving & Stabilization',
    desc: 'Fine grading brings all surfaces to their final design elevations. Paving operations include stone base installation, proof rolling, and asphalt or concrete placement for parking areas, access drives, and sidewalks. All disturbed areas not covered by impervious surfaces receive permanent stabilization through topsoil placement, seeding, sodding, or landscaping. The site is fully stabilized, erosion controls are removed, and the site is ready for vertical construction to begin.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company whose military background drives our commitment to mission accomplishment. When we commit to a site development schedule, we treat that commitment with the same discipline and accountability that defined our military service. Our clients benefit from a company culture built on integrity, reliability, and doing the job right the first time.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience, including extensive site development work throughout the Charlotte metro area. We have cleared, graded, and developed sites for commercial buildings, healthcare facilities, retail centers, industrial parks, and residential subdivisions across Mecklenburg, Union, Cabarrus, and York counties. This depth of experience means we understand the soils, the regulations, and the subcontractor market.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, enabling us to provide site development services throughout the greater Charlotte metro area without jurisdictional complications. Whether your site is in Charlotte, Fort Mill, Rock Hill, Concord, or the Lake Norman communities, our dual-state licensing ensures full regulatory compliance.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable site development practices including tree preservation beyond minimum requirements, bioretention and low-impact development stormwater strategies, soil conservation practices that preserve topsoil for reuse, and construction waste recycling. Sustainable site development is not just about compliance, it is about responsible stewardship of the land.',
  },
  {
    icon: Target,
    title: 'GPS-Guided Precision',
    desc: 'Our earthwork equipment is equipped with GPS machine control systems that achieve grading accuracy within one-tenth of a foot. This technology reduces material waste, eliminates rework, shortens grading timelines, and delivers the precise tolerances that building foundations and pavement sections require. GPS-guided grading is particularly valuable on complex commercial sites with tight elevation requirements.',
  },
  {
    icon: MapPin,
    title: 'Deep Charlotte Market Knowledge',
    desc: 'We understand Charlotte-Mecklenburg permitting processes, soil conditions, environmental regulations, and utility connection procedures at a level that only comes from years of working in this market. Our relationships with Charlotte Water, Duke Energy, Piedmont Natural Gas, Charlotte-Mecklenburg Storm Water Services, and local inspection authorities help us navigate regulatory requirements efficiently.',
  },
  {
    icon: Lightbulb,
    title: 'Turnkey Site-to-Structure Capability',
    desc: 'Unlike site development firms that hand off to a separate general contractor, We Build provides turnkey delivery from raw land through completed building. This eliminates the coordination gaps, finger-pointing, and schedule disruptions that occur at the handoff between site contractor and building contractor. One team, one contract, one point of responsibility from the first tree cut to the certificate of occupancy.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every site development client receives regular progress updates, daily logs, compaction test results, and photographic documentation. Our project managers are accessible and responsive, providing immediate notification of any conditions that could affect your project timeline or budget. Site development often uncovers unexpected conditions, and our transparent communication approach ensures you are informed and involved in every decision.',
  },
];

const costFactors = [
  {
    type: 'Land Clearing & Grubbing',
    range: '$3,000-$15,000 per acre',
    desc: 'Clearing costs depend on vegetation density, tree size and count, selective versus full clearing requirements, stump removal depth, and disposal or salvage options. Heavily wooded sites with large hardwoods cost more to clear than sites with light brush and small trees. Sites subject to Charlotte tree preservation ordinances may require certified arborist assessments and tree protection measures that add to the cost.',
  },
  {
    type: 'Grading & Earthwork',
    range: '$5,000-$30,000',
    desc: 'Grading costs are driven by the volume of earth that must be moved, measured in cubic yards of cut and fill. A site that balances, meaning the cut volume equals the fill volume with no material import or export, costs less than a site that requires trucking material in or hauling excess material off site. Rock excavation, if encountered, significantly increases costs. Charlotte-area sites in the Piedmont can encounter partially weathered rock at varying depths.',
  },
  {
    type: 'Full Site Development',
    range: '$50,000-$500,000+',
    desc: 'Full site development encompasses clearing, grading, utilities, stormwater, erosion control, paving, and stabilization. Total cost depends on site acreage, topographic complexity, utility connection distances, stormwater management requirements, and soil conditions. A one-acre commercial pad site with short utility runs may cost $50,000 to $150,000 for site development. A ten-acre commercial campus with extensive infrastructure can exceed $500,000.',
  },
  {
    type: 'Stormwater Management',
    range: '$20,000-$100,000',
    desc: 'Stormwater facility costs depend on the type of facility required by Charlotte-Mecklenburg Storm Water Services, the volume of runoff that must be managed, and the available space on site. Surface detention ponds are generally the most cost-effective option when land is available. Underground detention chambers cost more per cubic foot of storage but preserve buildable area. Bioretention cells fall between ponds and underground systems in cost.',
  },
  {
    type: 'Utility Infrastructure',
    range: '$30,000-$200,000+',
    desc: 'Utility costs depend on connection distances, pipe sizes, trench depths, and the number of utility providers involved. Sites near existing municipal infrastructure cost less than sites that require long main extensions. Charlotte Water connection fees, Duke Energy transformer and switchgear costs, and gas line extension costs are separate from the installation contractor costs and must be factored into the total budget.',
  },
];

const faqs = [
  {
    question: 'How much does site development cost in Charlotte, NC?',
    answer:
      'Site development costs in Charlotte vary widely based on site size, topography, soil conditions, utility connection distances, and stormwater management requirements. Land clearing typically runs $3,000 to $15,000 per acre. Grading and earthwork range from $5,000 to $30,000 depending on cut-and-fill volumes. Full site development for a commercial project, including clearing, grading, utilities, stormwater, and paving, typically ranges from $50,000 for a small pad site to over $500,000 for larger commercial campuses. We provide detailed cost estimates after reviewing your survey, civil engineering plans, and geotechnical report.',
  },
  {
    question: 'How long does site development take in Charlotte?',
    answer:
      'Site development timelines in Charlotte depend on site size, complexity, weather, and permitting. A straightforward one-acre commercial pad site with minimal grading and short utility runs typically takes 4 to 8 weeks from the start of clearing to a construction-ready building pad. Larger sites with significant earthwork, extensive utility infrastructure, and stormwater facility construction can take 3 to 6 months. Permitting adds 4 to 12 weeks before site work begins, depending on the permits required and the current workload at Charlotte-Mecklenburg Engineering and Property Management.',
  },
  {
    question: 'What permits are needed for site development in Charlotte?',
    answer:
      'Charlotte-Mecklenburg site development typically requires a land disturbance permit from Charlotte-Mecklenburg Engineering and Property Management, an NPDES construction stormwater permit from the North Carolina Department of Environmental Quality for sites disturbing more than one acre, a tree removal permit if the site is subject to the City of Charlotte Tree Ordinance, driveway permits from NCDOT or Charlotte DOT depending on the road classification, utility connection permits from Charlotte Water for water and sewer, and encroachment permits if any work occurs within public right-of-way. Additional permits may be required for floodplain development, stream buffer impacts, or sites near protected watersheds.',
  },
  {
    question: 'What are Charlotte-Mecklenburg stormwater requirements for new development?',
    answer:
      'Charlotte-Mecklenburg Storm Water Services requires post-construction stormwater controls on all development projects that disturb more than one acre or add more than 5,000 square feet of impervious surface. Requirements include water quality treatment, typically through bioretention cells, sand filters, or constructed wetlands, and peak flow attenuation to limit post-development discharge rates to pre-development levels for the 1-year and 10-year storm events. Some areas within water supply watersheds have more stringent impervious surface limitations and buffer requirements. The specific requirements depend on your site location, watershed classification, and the amount of new impervious surface.',
  },
  {
    question: 'Can you preserve trees during site development?',
    answer:
      'Yes, selective clearing and tree preservation are common practices on Charlotte-area site development projects. The City of Charlotte Tree Ordinance requires preservation of a percentage of existing tree canopy or mitigation through replanting when preservation is not feasible. We work with certified arborists to identify specimen trees and high-value tree stands that can be preserved within the development plan. Tree protection measures include root zone fencing, grade restrictions within the drip line, and construction traffic routing to avoid soil compaction in preservation areas. Preserved trees add significant aesthetic and property value to the finished development.',
  },
  {
    question: 'What soil conditions should I expect in the Charlotte area?',
    answer:
      'Charlotte sits in the Piedmont geologic region, which features residual soils derived from the weathering of underlying igneous and metamorphic bedrock. Typical soil conditions include red and brown sandy clays and silty clays at the surface, transitioning to partially weathered rock and then competent bedrock at varying depths. Soil bearing capacity generally ranges from 2,000 to 4,000 pounds per square foot for spread footings, though soft zones, organic deposits near streams, and fill from previous development can require special foundation treatment. A geotechnical investigation is essential before site development begins to identify soil conditions, groundwater levels, and any environmental concerns that could affect grading, foundation design, and utility installation.',
  },
  {
    question: 'Do you handle erosion control compliance during construction?',
    answer:
      'Yes, erosion and sediment control compliance is a core part of our site development services. We install all required erosion control measures before any land disturbance begins, perform weekly inspections as required by the NPDES construction general permit, maintain inspection logs, and make timely repairs after storm events. Mecklenburg County actively inspects construction sites and issues notices of violation with fines up to $5,000 per day for non-compliance. Our thorough erosion control management protects you from these fines and from the environmental liability that comes with sediment discharge into Charlotte-area streams and waterways.',
  },
  {
    question: 'What is the difference between site development and site preparation?',
    answer:
      'Site preparation is a subset of site development. Site preparation typically refers to the activities needed to make a specific building pad ready for construction, including clearing, rough grading, and potentially soil stabilization. Site development is the broader scope of work that transforms raw land into a fully improved and permitted development, including all infrastructure such as roads, utilities, stormwater management facilities, and final grading. When we provide full site development, you receive a construction-ready site with all utilities stubbed, stormwater facilities operational, access roads paved, and regulatory approvals in hand.',
  },
  {
    question: 'Can you develop sites in both North Carolina and South Carolina?',
    answer:
      'Yes. We Build holds general contractor licenses in both North Carolina and South Carolina, and we regularly perform site development work on both sides of the state line. Our Charlotte-area service territory includes all of Mecklenburg County, Union County, Cabarrus County, Iredell County, and Gaston County in North Carolina, as well as York County, Lancaster County, and Chester County in South Carolina. Our familiarity with the different permitting requirements, inspection processes, and utility providers in each jurisdiction ensures a smooth project regardless of which side of the state line your site is located.',
  },
  {
    question: 'How do I get started with site development for my commercial project?',
    answer:
      'The first step is to contact us for a free site assessment. We will review your property survey, zoning entitlements, and any existing civil engineering or geotechnical studies. If those studies do not exist yet, we can recommend qualified engineers and coordinate the due diligence process. Once we understand your site conditions, development plans, and timeline, we prepare a detailed proposal with scope, schedule, and cost for the complete site development scope. Call us at (704) 574-8124 or submit a request through our contact page to get started.',
  },
  {
    question: 'How much does grading and earthwork cost per acre in the Charlotte area?',
    answer:
      'Grading and earthwork costs in Charlotte range from $5,000 to $30,000 per acre depending on cut-and-fill volumes, soil type, slope, and haul distances. Sites that require significant fill import can add $8 to $15 per cubic yard for material and trucking. Rocky sites in western Mecklenburg County or parts of Iredell County may need rock hammering or blasting, which adds $15 to $40 per cubic yard. Relatively flat sites with balanced cut-and-fill operations are the most economical because soil is moved on-site rather than imported or exported. We provide detailed earthwork quantity takeoffs from the civil engineering plans so you know exactly what your grading costs will be before work begins.',
  },
  {
    question: 'How does Charlotte site development compare to Fort Mill or Rock Hill in South Carolina?',
    answer:
      'The construction work itself is similar, but permitting and regulatory requirements differ. Charlotte-Mecklenburg has its own Post-Construction Stormwater Ordinance, Tree Ordinance, and engineering review process through Charlotte-Mecklenburg Engineering and Property Management. Fort Mill and Rock Hill fall under York County and SCDHEC permitting, which have different stormwater design standards, erosion control requirements, and plan review timelines. South Carolina sites may also have different utility providers and connection procedures. We Build holds contractor licenses in both states and regularly performs site development on both sides of the state line, giving us direct experience with the different regulatory frameworks and inspection processes in each jurisdiction.',
  },
  {
    question: 'What is the difference between a detention pond and a bioretention cell for stormwater in Charlotte?',
    answer:
      'A detention pond temporarily holds stormwater runoff and releases it slowly to reduce peak discharge rates downstream. A bioretention cell, sometimes called a rain garden, filters stormwater through engineered soil media to remove pollutants before the water infiltrates into the ground or drains to the storm sewer. Charlotte-Mecklenburg Storm Water Services requires both peak flow attenuation and water quality treatment on most commercial development projects. Bioretention cells satisfy both requirements in a smaller footprint than a detention pond, but they require ongoing maintenance to prevent clogging. Detention ponds are simpler to maintain but consume more land. We work with your civil engineer to select the most cost-effective stormwater approach based on your site constraints and budget.',
  },
];

export default function SiteDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Site Development Charlotte NC',
            'Professional site development services in Charlotte, NC. Land clearing, grading, earthwork, stormwater management, utility infrastructure, and erosion control. Veteran-owned, licensed in NC & SC. 60+ years combined experience.',
            'https://webuildclt.com/services/site-development'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Site Development' },
          ]),
        ]}
      />

      <PageHero
        title="Site Development Charlotte NC"
        subtitle="Land clearing, grading, stormwater management & utility infrastructure from Charlotte's veteran-owned contractor"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Site Development' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Site Development Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Site development is the process of transforming raw or previously developed land into
                a construction-ready building site through land clearing, grading, utility installation,
                stormwater management, and erosion control. It is the critical first phase of any
                commercial construction project, and the quality of site development directly determines
                the success of everything that follows, from foundation performance to drainage function
                to long-term pavement durability. In Charlotte&apos;s active commercial construction
                market, where land values and development timelines demand efficiency, professional site
                development is not optional. It is the foundation that every successful project is built upon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte-Mecklenburg&apos;s regulatory environment for land development is among the most
                comprehensive in the Southeast. Between the City of Charlotte Tree Ordinance, Charlotte-Mecklenburg
                Storm Water Services post-construction requirements, NPDES construction stormwater permits,
                floodplain regulations, and stream buffer protections, navigating the permitting and compliance
                requirements for site development requires deep local knowledge. A site development contractor
                who does not understand these requirements can cost you months of delays, tens of thousands of
                dollars in fines, and redesign expenses that blow your budget before vertical construction
                even begins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. We provide complete site development
                services from initial environmental assessment through final stabilization, including land
                clearing, grading, earthwork, underground utilities, stormwater management, and erosion
                control. Our turnkey approach means one contractor handles both site development and{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>,
                eliminating the coordination gaps and schedule disruptions that occur when separate firms
                handle site work and building construction. Licensed in both North Carolina and South Carolina,
                we serve the entire Charlotte metropolitan area including{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and
                surrounding communities. As a USGBC member, we integrate sustainable site practices into
                every project.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Site Assessment
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
                { icon: Mountain, title: 'GPS-Guided Grading', desc: 'Precision earthwork within one-tenth of a foot using GPS machine control, reducing waste and rework on every site.' },
                { icon: Droplets, title: 'Stormwater Compliance', desc: 'Full compliance with Charlotte-Mecklenburg stormwater regulations, from NPDES permits through post-construction facility certification.' },
                { icon: Truck, title: 'Turnkey Delivery', desc: 'One contractor from clearing through building construction eliminates handoff gaps, finger-pointing, and schedule disruptions.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline and accountability drive our commitment to schedule, budget, and quality on every site development project.' },
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
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Site Development Services We Provide in Charlotte
            </h2>
            <p className="text-muted-foreground">
              From the first tree cut to the final coat of asphalt, we handle every phase of site
              development with the precision and accountability that Charlotte property owners and
              developers demand.
            </p>
          </div>
          <div className="space-y-8">
            {serviceTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold">{type.title}</h3>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          {type.fee}
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Site Development Process: 8 Steps from Assessment to Stabilization
            </h2>
            <p className="text-muted-foreground">
              A systematic, regulation-compliant process that transforms raw land into a
              construction-ready site while protecting the environment and your investment.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for Site Development
            </h2>
            <p className="text-muted-foreground">
              Site development sets the stage for everything that follows. Choosing the right
              contractor for this critical phase means the difference between a smooth construction
              project and months of costly problems.
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

      {/* Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Site Development Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Site development costs depend on acreage, topography, soil conditions, utility distances,
                and stormwater requirements. Below are typical cost ranges for the Charlotte metro area.
                We provide detailed estimates after reviewing your site-specific conditions.
              </p>
            </div>
            <div className="space-y-4">
              {costFactors.map((item) => (
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
              <h3 className="font-semibold mb-3">Factors That Affect Site Development Costs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Topography:</strong> Steep sites require more cut-and-fill earthwork, retaining walls, and erosion control measures, significantly increasing costs compared to flat or gently sloping sites.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Soil conditions:</strong> Rock excavation, soft soils requiring stabilization, and high groundwater all increase site development costs. A geotechnical investigation before design begins helps avoid surprises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Utility distances:</strong> Sites far from existing water mains, sewer lines, and electrical infrastructure require longer extensions that add significant cost to the utility budget.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Environmental constraints:</strong> Wetlands, stream buffers, floodplain restrictions, and contaminated soils all limit developable area and increase the complexity and cost of site development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Stormwater requirements:</strong> Sites in water supply watersheds or with high impervious surface ratios may require more expensive stormwater management solutions such as underground detention or proprietary treatment devices.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Site Development Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte property owners and developers
                ask about site development costs, timelines, permits, and requirements.
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
            <h2 className="text-3xl font-bold">Related Services</h2>
            <p className="text-muted-foreground mt-2">
              Site development is the first step. Explore our related construction services
              that take your project from cleared land to completed building.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Construction', href: '/services/commercial-construction', type: 'Service' },
              { title: 'Pre-Construction Services', href: '/services/pre-construction', type: 'Service' },
              { title: 'Warehouse Construction', href: '/services/warehouse-construction', type: 'Service' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service' },
              { title: 'Industrial Construction', href: '/services/industrial-construction', type: 'Service' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {resource.type}
                  </span>
                  <h3 className="font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
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
            Ready to Start Your Site Development Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need land clearing for a new commercial development, grading and utilities
            for a building pad, or complete site development from raw land to construction-ready
            site, We Build has the experience, equipment, and Charlotte market knowledge to deliver.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site assessment. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities throughout the Carolinas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Site Assessment</Link>
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

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Droplets,
  Sun,
  Shield,
  Leaf,
  DollarSign,
  Paintbrush,
  Zap,
  ArrowRight,
  Phone,
  Award,
  Clock,
  Layers,
  Building2,
  Wrench,
  ThermometerSun,
  CloudRain,
  Factory,
  Church,
  Stethoscope,
  Store,
  Warehouse,
  UtensilsCrossed,
  TrendingUp,
  Thermometer,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'We Coat | Commercial Roof Coating Charlotte NC & Michigan | Save Up to 50%',
  description:
    'We Coat is We Build\u2019s dedicated commercial roof coating division serving the Carolinas and Michigan. Silicone, acrylic, polyurethane & elastomeric coatings. Save up to 50% vs replacement. IIBEC certified. USGBC member. Free assessments. (704) 574-8124.',
  keywords: [
    'roof coating charlotte nc',
    'commercial roof coating charlotte',
    'roof restoration charlotte nc',
    'roof coating contractor charlotte',
    'commercial roof restoration',
    'silicone roof coating charlotte',
    'acrylic roof coating charlotte nc',
    'polyurethane roof coating charlotte',
    'elastomeric roof coating charlotte nc',
    'we coat roof restoration',
    'commercial roof coating near me',
    'flat roof coating charlotte nc',
    'metal roof coating charlotte',
    'cool roof charlotte nc',
    'roof coating michigan',
    'commercial roof coating detroit',
    'roof coating contractor michigan',
  ],
};

const coatingTypes = [
  {
    title: 'Silicone Roof Coating',
    description:
      'Silicone roof coating is the premium choice for flat and low-slope commercial roofs in the Charlotte area. Silicone excels at waterproofing and handles ponding water without degradation, which is a critical advantage for flat commercial roofs where drainage can be imperfect. Silicone delivers the longest lifespan of any coating type at 15 to 20 years, and its superior UV resistance makes it the ideal choice for Charlotte\u2019s intense summers where roof surface temperatures regularly exceed 160 degrees Fahrenheit. Silicone coatings maintain their flexibility and reflectivity over their full lifespan without becoming brittle or chalking, which is a common failure mode in lower-grade coatings. Our team applies silicone coatings at a dry film thickness of 20 to 25 mils to ensure maximum waterproofing performance and longevity.',
    cost: '$9\u2013$12/sq ft',
    lifespan: '15\u201320 years',
    bestFor: 'Flat roofs, roofs with ponding water, maximum longevity',
  },
  {
    title: 'Acrylic Roof Coating',
    description:
      'Acrylic roof coating is the most affordable professional coating option and offers excellent reflective properties that reduce cooling costs significantly. Acrylic works best on sloped metal roofs where water drains quickly rather than ponding, as prolonged water exposure can degrade acrylic coatings over time. The high solar reflectance of white acrylic coatings bounces up to 85 percent of solar radiation away from the building, making it one of the most effective options for reducing energy costs in Charlotte\u2019s hot climate. Acrylic coatings are also the easiest to apply and maintain, accepting topcoats and touch-ups readily. For building owners looking for a cost-effective entry into roof coating with a solid return on investment, acrylic is often the right starting point.',
    cost: '$8\u2013$10/sq ft',
    lifespan: '10\u201315 years',
    bestFor: 'Sloped metal roofs, budget-conscious projects, good drainage',
  },
  {
    title: 'Polyurethane Roof Coating',
    description:
      'Polyurethane roof coating provides the highest impact resistance and abrasion resistance of any coating type, making it the preferred choice for roofs that experience heavy foot traffic from maintenance personnel, HVAC technicians, or rooftop equipment servicing. Polyurethane coatings are available in both aromatic and aliphatic formulations. Aromatic polyurethane serves as a durable, adhesion-promoting base coat, while aliphatic polyurethane functions as a UV-stable topcoat that resists color fading and chalking. Many of our Charlotte commercial projects use a two-coat polyurethane system that combines the impact resistance of aromatic with the weathering resistance of aliphatic for maximum performance. This system is particularly effective on high-traffic commercial roofs where durability matters more than anything else.',
    cost: '$9\u2013$12/sq ft',
    lifespan: '10\u201320 years',
    bestFor: 'High-traffic roofs, rooftop equipment areas, maximum durability',
  },
  {
    title: 'Elastomeric Roof Coating',
    description:
      'Elastomeric roof coating is known for its exceptional flexibility, stretching up to 300 percent without cracking even under extreme temperature swings. This elasticity makes elastomeric coatings the ideal solution for metal roofs that experience significant thermal cycling between Charlotte\u2019s hot summers and cool winters. Metal roof panels expand and contract with temperature changes, and rigid coatings will crack at those stress points. Elastomeric coatings move with the metal, maintaining a seamless waterproof barrier regardless of temperature. Elastomeric systems also bridge existing cracks and gaps in the substrate, which makes them an effective repair-and-coat solution for aging metal and modified bitumen roofs that have developed minor cracking over the years.',
    cost: '$8.50\u2013$11/sq ft',
    lifespan: '10\u201315 years',
    bestFor: 'Metal roofs, thermal cycling, modified bitumen substrates',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Free Roof Assessment',
    description:
      'Our IIBEC-certified team conducts a thorough inspection of your existing roof, evaluating structural integrity, current condition, drainage patterns, insulation status, and any existing damage. We document everything with photos, measurements, and a detailed condition report. This assessment is completely free and carries no obligation.',
  },
  {
    step: '02',
    title: 'Core Sampling & Testing',
    description:
      'For roofs where substrate condition is uncertain, we extract core samples to evaluate the layers beneath the surface. Core sampling reveals hidden moisture, delamination, or insulation degradation that cannot be detected by visual inspection alone. This data ensures we recommend the correct coating system for your specific conditions.',
  },
  {
    step: '03',
    title: 'Detailed Proposal & Coating Selection',
    description:
      'Based on our assessment and any core sample results, we recommend the best coating system for your roof and provide a detailed, transparent proposal with specific products, application methods, dry film thickness specifications, warranty terms, and pricing. We explain why we recommend a specific coating and what alternatives exist.',
  },
  {
    step: '04',
    title: 'Surface Preparation & Cleaning',
    description:
      'Proper preparation is the single most critical factor in coating adhesion and longevity. We pressure wash the entire roof surface at 3,000 to 4,000 PSI to remove dirt, debris, mildew, and oxidation. For metal roofs, we address rust spots with rust-inhibitive primer. For membrane roofs, we clean and prime according to manufacturer specifications.',
  },
  {
    step: '05',
    title: 'Repair & Reinforcement',
    description:
      'Before any coating is applied, we repair all identified damage. This includes sealing penetrations around HVAC units, pipes, and vents; reinforcing seams with polyester fabric embedded in the base coat; patching any substrate damage; and addressing flashing details at roof edges and transitions. These repairs prevent future leak points.',
  },
  {
    step: '06',
    title: 'Primer Application',
    description:
      'We apply a manufacturer-specified primer that promotes adhesion between your existing roof surface and the new coating system. Primer selection depends on the substrate type. Metal roofs, TPO, EPDM, and built-up roofs each require different primer chemistry for optimal bonding. Skipping primer or using the wrong primer is a common shortcut that leads to coating failure.',
  },
  {
    step: '07',
    title: 'Base Coat Application',
    description:
      'Our trained crews apply the base coat using professional airless spray equipment calibrated to deliver the specified wet film thickness. Spray application ensures uniform coverage across the entire roof surface, including complex geometry around rooftop equipment and penetrations. We verify wet film thickness with gauges during application to ensure specification compliance.',
  },
  {
    step: '08',
    title: 'Topcoat Application',
    description:
      'After the base coat cures, we apply the finish topcoat to achieve the total specified dry film thickness. The topcoat provides the UV protection, reflectivity, and weather resistance that define the coating\u2019s long-term performance. Multi-coat application ensures consistent coverage and eliminates thin spots that could become failure points.',
  },
  {
    step: '09',
    title: 'Quality Inspection & Documentation',
    description:
      'After application, we conduct a thorough quality inspection checking coverage uniformity, dry film thickness at multiple points, edge details, penetration seals, and drainage paths. We photograph the completed work and provide full documentation including warranty certificates, maintenance guidelines, and a recommended recoating schedule.',
  },
  {
    step: '10',
    title: 'Warranty Registration & Maintenance Plan',
    description:
      'We register your manufacturer warranty, which typically ranges from 10 to 20 years depending on the product and system. You receive a detailed maintenance plan with recommended inspection intervals and simple upkeep tasks that help your coating system achieve maximum lifespan. We also schedule a complimentary 12-month follow-up inspection.',
  },
];

const roofTypesServiced = [
  {
    title: 'TPO Roofing (Thermoplastic Polyolefin)',
    description:
      'TPO is one of the most common single-ply commercial roofing membranes installed in Charlotte over the past 15 years. While TPO is durable, seam failures and UV degradation can occur after 10 to 15 years. A silicone coating applied over properly prepared TPO creates a seamless, monolithic membrane that eliminates seam leak potential and extends the roof\u2019s service life by another 15 to 20 years. We prepare TPO surfaces with specialized cleaning and priming to ensure maximum adhesion.',
  },
  {
    title: 'EPDM Roofing (Rubber Membrane)',
    description:
      'EPDM rubber roofing is widely used on flat commercial buildings throughout the Charlotte metro. EPDM membranes shrink over time, pulling seams apart and separating from flashings. These are the most common leak sources on EPDM roofs. A properly applied coating system seals over the existing membrane, reinforces seams with embedded fabric, and adds a reflective layer that significantly reduces the roof\u2019s surface temperature. EPDM roofs require specific primer chemistry for proper coating adhesion.',
  },
  {
    title: 'Metal Roofing (Standing Seam, Corrugated, R-Panel)',
    description:
      'Metal roofs on commercial buildings in Charlotte face thermal cycling, fastener back-out, and rust at cut edges and penetrations. Elastomeric and polyurethane coatings are ideal for metal because they flex with the metal as it expands and contracts. Our process includes treating rust spots with inhibitive primer, reinforcing seams and fasteners, and applying a flexible coating system that moves with the metal. Metal roof coatings also reduce the characteristic noise of rain on metal.',
  },
  {
    title: 'Modified Bitumen Roofing',
    description:
      'Modified bitumen is a common flat roof system on older commercial buildings in Charlotte. As modified bitumen ages, the granule surface erodes, exposing the asphalt layer to UV degradation. A reflective coating applied over properly prepared modified bitumen seals the surface, reflects solar heat, and adds 10 to 15 years of protection. We ensure all lap seams and flashings are reinforced before coating to prevent future failures at these critical transition points.',
  },
  {
    title: 'Built-Up Roofing (BUR / Tar & Gravel)',
    description:
      'Built-up roofing systems have been used on Charlotte commercial buildings for decades. As BUR systems age, the gravel surface loosens and the underlying asphalt oxidizes and cracks. Restoring a BUR roof requires removing loose gravel, repairing blistered areas, and applying a multi-coat system that creates a new waterproof surface. A silicone or acrylic coating over BUR dramatically improves reflectivity and waterproofing without the massive cost and disruption of a full tear-off and replacement.',
  },
  {
    title: 'Spray Polyurethane Foam (SPF) Roofing',
    description:
      'SPF roof systems require periodic topcoat maintenance to maintain their waterproofing and UV protection. The foam itself can last 30 or more years, but the protective topcoat needs reapplication every 10 to 15 years. We apply silicone topcoats over existing SPF systems to restore their UV protection and waterproofing. This maintenance topcoat is far less expensive than replacing the entire SPF system and keeps the foam performing at its best for decades.',
  },
];

const benefits = [
  {
    icon: Droplets,
    title: '100% Seamless Waterproofing',
    description:
      'Roof coatings create a seamless, monolithic membrane across the entire roof surface, eliminating the leak points that exist at every seam, fastener, and penetration in traditional roofing systems. Unlike sheet membranes that rely on adhesive or heat-welded seams, a sprayed coating has zero seams. Our reinforced coating systems achieve 100 percent waterproofing by combining liquid-applied coatings with polyester fabric reinforcement at all critical transition points.',
  },
  {
    icon: Sun,
    title: 'UV Protection & Solar Reflectance',
    description:
      'Reflective roof coatings bounce up to 85 percent of solar radiation away from the building rather than absorbing it as heat. In Charlotte\u2019s summers, where roof surface temperatures on dark roofs exceed 160 degrees Fahrenheit, a reflective coating can reduce surface temperature by 50 to 60 degrees. This directly translates to cooling cost reductions of 15 to 25 percent and reduces strain on HVAC equipment, extending its service life.',
  },
  {
    icon: Shield,
    title: 'Storm & Impact Resistance',
    description:
      'Charlotte experiences severe thunderstorms, occasional hailstorms, and high winds. Professional roof coatings add a layer of impact resistance that protects the underlying membrane from hail damage and wind-driven debris. Polyurethane coatings in particular offer the highest impact resistance ratings, passing FM 4470 hail impact tests. After severe weather events, coated roofs consistently show less damage than uncoated roofs of the same age.',
  },
  {
    icon: Zap,
    title: 'Flexibility Across Temperature Extremes',
    description:
      'Charlotte\u2019s climate cycles between summer highs above 95 degrees and winter lows below 20 degrees. This thermal cycling causes roof materials to expand and contract continuously, stressing seams and connections. Elastomeric and silicone coatings maintain their flexibility across this full temperature range, stretching up to 300 percent without cracking. Rigid roofing materials cannot match this adaptability.',
  },
  {
    icon: DollarSign,
    title: 'Save 50\u201370% vs. Full Replacement',
    description:
      'A professional roof coating costs $8 to $12 per square foot installed compared to $12 to $20 or more per square foot for a full roof replacement. For a 10,000 square foot commercial roof, that represents $40,000 to $80,000 in savings. When you factor in avoided business disruption, zero landfill disposal fees, and reduced energy costs from reflective coatings, the total return on investment makes roof coating one of the smartest capital expenditure decisions a building owner can make.',
  },
  {
    icon: Leaf,
    title: 'Sustainable & Environmentally Responsible',
    description:
      'Every roof replacement sends 5 to 10 tons of material to a landfill. Roof coating eliminates that waste entirely because the existing roof stays in place. Our coatings are non-toxic, low-VOC, and odor-free during application. As USGBC members, sustainability is not a marketing claim for us but a core business value. Reflective coatings also reduce the urban heat island effect, which benefits the broader Charlotte community.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description:
      'Roof coating is applied externally with no interior work required. There is no tear-off, no debris falling into the building, and no need to relocate equipment or inventory. Our coatings are non-toxic and odor-free, so your employees, customers, and operations continue without interruption. Most commercial roof coating projects complete in 2 to 5 days depending on roof size, compared to 2 to 6 weeks for a full replacement.',
  },
  {
    icon: TrendingUp,
    title: 'Renewable & Recoatable',
    description:
      'When a roof coating reaches the end of its service life, it can be cleaned, prepared, and recoated to start a new protection cycle. This renewable quality means your roof can potentially be maintained with coatings indefinitely, as long as the underlying structure remains sound. Each recoat costs less than the original application because the substrate preparation is simpler. This lifecycle approach eliminates the need for full tear-off and replacement for decades.',
  },
];

const industries = [
  {
    icon: Building2,
    title: 'Office Buildings & Corporate Campuses',
    description:
      'Multi-story office buildings and corporate campuses with flat or low-slope roofs are ideal candidates for roof coating. Coating eliminates leak risks that damage interior finishes, electronics, and tenant improvements. The energy savings from reflective coatings are particularly significant on large-footprint office buildings.',
  },
  {
    icon: Store,
    title: 'Retail Centers & Shopping Plazas',
    description:
      'Retail buildings cannot afford roof leaks that damage merchandise and create slip hazards for customers. Roof coating provides seamless waterproofing without the extended closure time that a full replacement demands. Strip malls and shopping centers across South Charlotte and Fort Mill benefit from our coating systems.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food Service',
    description:
      'Restaurant roofs face unique challenges from kitchen exhaust grease and the heat generated by commercial cooking equipment. Our coating systems are resistant to grease and oils, and they provide a cleanable surface around rooftop kitchen exhaust units. Restaurants in the Charlotte area rely on our coatings to protect against both weather and operational contamination.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Distribution Centers',
    description:
      'Large warehouse roofs represent the highest ROI opportunity for roof coating because the cost savings scale directly with square footage. A 50,000 square foot warehouse coating project can save $150,000 or more versus replacement. The energy savings from reflective coatings on warehouses are also substantial given the large roof area.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Facilities & Healthcare',
    description:
      'Medical facilities cannot tolerate roof leaks that compromise sterile environments or damage sensitive medical equipment. Our coating systems provide reliable, long-term waterproofing with zero interior disruption during application. Clinics, dental offices, and urgent care facilities across Charlotte trust We Coat for their roof restoration needs.',
  },
  {
    icon: Church,
    title: 'Churches & Houses of Worship',
    description:
      'Churches and houses of worship often operate on tight budgets and cannot afford a full roof replacement. Roof coating provides an affordable alternative that extends roof life by 10 to 20 years at a fraction of the cost. We have coated church roofs across the Charlotte metro area, helping congregations protect their buildings without diverting funds from their mission.',
  },
];

const weCoatFaqs = [
  {
    question: 'How much does commercial roof coating cost in Charlotte?',
    answer:
      'Commercial roof coating in Charlotte typically costs $8 to $12 per square foot installed, depending on coating type, roof condition, and accessibility. Silicone coatings run $9 to $12 per square foot, acrylic $8 to $10 per square foot, polyurethane $9 to $12 per square foot, and elastomeric $8.50 to $11 per square foot. For a 10,000 square foot commercial roof, expect $80,000 to $120,000 compared to $120,000 to $200,000 or more for full replacement. We provide detailed, line-item proposals so you know exactly where your money is going.',
  },
  {
    question: 'How long does a commercial roof coating last?',
    answer:
      'Roof coating lifespan depends on the coating type and the quality of application. Silicone coatings last 15 to 20 years, acrylic and elastomeric coatings last 10 to 15 years, and polyurethane systems last 10 to 20 years depending on formulation. Proper surface preparation and professional application at the correct dry film thickness are critical to achieving maximum lifespan. When a coating reaches end of life, it can be cleaned and recoated to start a new protection cycle without tearing off the existing roof.',
  },
  {
    question: 'Is roof coating better than roof replacement?',
    answer:
      'Roof coating is an excellent alternative when your existing roof structure is sound and the insulation is dry. It costs 50 to 70 percent less than replacement, generates zero tear-off waste, adds 10 to 20 years of life, and can be applied in 2 to 5 days with no business disruption. However, roofs with widespread structural damage, saturated insulation, or multiple existing coating layers may require full replacement. Our free assessment determines which option is right for your building.',
  },
  {
    question: 'What types of commercial roofs can be coated?',
    answer:
      'We coat virtually all commercial roof types including metal roofs (standing seam, corrugated, R-panel), single-ply membranes (TPO, EPDM, PVC), modified bitumen, built-up roofing (tar and gravel), spray polyurethane foam, and concrete roofs. Each substrate requires a specific coating system and preparation method. Our IIBEC-certified team assesses your roof and recommends the optimal coating for your specific substrate and conditions.',
  },
  {
    question: 'Can my business stay open during roof coating?',
    answer:
      'Yes, absolutely. Roof coating is applied externally with no interior work required. Our coatings are non-toxic, low-VOC, and odor-free, particularly silicone and acrylic formulations. Your employees, customers, and operations continue without interruption throughout the application process. There is no loud tear-off noise, no debris, and no need to relocate inventory or equipment. Most projects complete in 2 to 5 days depending on roof size.',
  },
  {
    question: 'Does roof coating reduce energy costs in Charlotte?',
    answer:
      'Yes, significantly. Reflective roof coatings, especially white silicone and acrylic formulations, reduce cooling costs by 15 to 25 percent by reflecting up to 85 percent of solar radiation away from the building. In Charlotte\u2019s hot summers where dark roofs reach surface temperatures exceeding 160 degrees Fahrenheit, a reflective coating can reduce surface temperature by 50 to 60 degrees. For large commercial buildings, the annual energy savings alone can represent thousands of dollars.',
  },
  {
    question: 'What is the difference between roof coating and roof paint?',
    answer:
      'Roof coating and roof paint are fundamentally different products serving different purposes. Professional roof coatings are engineered waterproofing systems applied at 20 to 25 mils dry film thickness that provide complete waterproofing, UV protection, and structural reinforcement. Roof paint is a thin decorative coating applied at 2 to 3 mils thickness that provides color but no waterproofing, no structural reinforcement, and no meaningful UV protection. Only professional-grade coating systems extend roof life.',
  },
  {
    question: 'Do you offer warranties on roof coating?',
    answer:
      'Yes. We provide manufacturer-backed warranties on all our coating systems, typically ranging from 10 to 20 years depending on the product and system specification. These warranties cover material defects and, in many cases, include labor for warranty repairs. Our workmanship warranty covers the quality of our application. Specific warranty terms, exclusions, and requirements are detailed in every proposal so you know exactly what is covered before work begins.',
  },
  {
    question: 'What areas do you serve for roof coating?',
    answer:
      'We Coat serves two major markets. In the Carolinas, we cover the entire Charlotte metropolitan area including Mecklenburg County, Union County, Iredell County, Cabarrus County, and York County in South Carolina. Specific communities include South Charlotte, Ballantyne, Uptown Charlotte, South End, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Indian Land, Rock Hill, Matthews, Mint Hill, Pineville, and Waxhaw. We also serve the Detroit Metro area in Michigan, including Detroit, Dearborn, Troy, Southfield, Royal Oak, Warren, Sterling Heights, and Ann Arbor. We hold contractor licenses in North Carolina, South Carolina, and Michigan. Visit wecoatcommercialroofing.com for more about our Michigan operations.',
  },
  {
    question: 'How do I know if my roof qualifies for coating instead of replacement?',
    answer:
      'The key factors are structural integrity and insulation condition. If your roof structure is sound and the insulation is dry, coating is almost always the better option. During our free assessment, we inspect for structural damage, check insulation moisture content with infrared scanning or core sampling, evaluate drainage, and assess the existing surface condition. We then provide an honest recommendation. If your roof needs replacement, we will tell you that rather than selling you a coating that will not perform.',
  },
  {
    question: 'What is the We Coat division and how is it related to We Build?',
    answer:
      'We Coat is the dedicated commercial roof coating division of We Build, our veteran and family-owned construction company. While We Build handles full-service commercial construction in the Carolinas, We Coat focuses exclusively on commercial roof coating and restoration across both the Carolinas and Michigan. This specialization means our coating crews apply coatings every day — not as a side service — which results in better application quality and faster project completion. We Coat clients receive the same transparent pricing, dedicated project management, and warranty support that all We Build clients enjoy. Visit wecoatcommercialroofing.com for details about our Michigan roof coating services.',
  },
  {
    question: 'How does We Coat use drone technology for roof assessments?',
    answer:
      'Before recommending a coating system, our FAA-certified commercial drone pilot conducts a thermal aerial inspection of your roof. Thermal imaging cameras mounted on the drone detect moisture trapped beneath the roof membrane — something a visual walk-through cannot reveal. The drone captures high-resolution photographs and thermal maps that pinpoint problem areas with precision. This data allows us to determine whether your roof qualifies for coating or needs localized repairs before coating. The entire drone assessment takes about one hour for most commercial buildings in the Charlotte area, with no ladders or scaffolding required.',
  },
  {
    question: 'What maintenance does a coated commercial roof require after application?',
    answer:
      'Coated commercial roofs require minimal maintenance compared to traditional roofing systems. We recommend a professional inspection once per year to check for debris accumulation, ponding water, and any mechanical damage from HVAC service work or foot traffic. Minor touch-ups can be applied quickly and inexpensively if any areas show wear. Keeping drains and scuppers clear is the single most important maintenance task. When the coating reaches end of life — typically ten to twenty years depending on the system — the roof can be cleaned and recoated without a costly tear-off, starting a new protection cycle.',
  },
];

const galleryImages = [
  { src: '/images/we-coat/mics-aerial-1.jpg', alt: 'Aerial view of completed commercial roof coating Charlotte NC' },
  { src: '/images/we-coat/mics-aerial-2.jpg', alt: 'Roof coating aerial perspective showing uniform coverage' },
  { src: '/images/we-coat/mics-aerial-3.jpg', alt: 'Charter school roof coating complete Charlotte' },
  { src: '/images/we-coat/mics-aerial-4.jpg', alt: 'Finished commercial roof coating project Charlotte NC' },
  { src: '/images/we-coat/applying-primer.jpg', alt: 'Crew applying primer for commercial roof coating Charlotte NC' },
  { src: '/images/we-coat/fabric-embedded.jpg', alt: 'Polyester fabric reinforcement embedded in roof coating' },
  { src: '/images/we-coat/power-washing.jpg', alt: 'Power washing roof surface preparation before coating' },
  { src: '/images/we-coat/mics-detail-1.jpg', alt: 'Roof coating detail work around HVAC penetrations' },
];

const heroImages = [
  { src: '/images/we-coat/mics-aerial-1.jpg', alt: 'Mountain Island Charter School roof coating aerial view', label: 'School Roof' },
  { src: '/images/we-coat/applying-primer.jpg', alt: 'Applying primer for commercial roof coating Charlotte NC', label: 'Primer Application' },
  { src: '/images/we-coat/power-washing.jpg', alt: 'Power washing roof surface preparation', label: 'Surface Prep' },
  { src: '/images/we-coat/mics-aerial-2.jpg', alt: 'Completed commercial roof coating aerial view', label: 'Completed Coating' },
];

export default function WeCoatPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'We Coat \u2014 Commercial Roof Coating & Restoration',
            'Professional commercial roof coating in the Carolinas and Michigan. Silicone, acrylic, polyurethane, and elastomeric coatings. Save up to 50% vs roof replacement. IIBEC certified. USGBC member.',
            'https://webuildclt.com/we-coat'
          ),
          faqSchema(weCoatFaqs),
        ]}
      />

      <PageHero
        title="We Coat | Commercial Roof Coating Charlotte NC"
        subtitle="Commercial roof coating in the Carolinas & Michigan. Save up to 50% vs replacement. IIBEC certified. Free assessments."
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Breadcrumbs + Intro with Sidebar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Roof Coating', href: '/services/roof-coating' },
              { label: 'We Coat' },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 mt-8">
            {/* Main Content */}
            <div className="article-prose">
              <h2 id="overview">What Is We Coat? Charlotte&rsquo;s Commercial Roof Coating Experts</h2>

              <p>
                When a commercial roof starts showing its age, most building owners assume the only option is a full tear-off and replacement costing $120,000 to $200,000 or more. That assumption is wrong for the majority of commercial roofs in Charlotte. If the structure is sound and the insulation is dry, a professionally applied roof coating can restore waterproofing, add 10 to 20 years of service life, and save 50 to 70 percent compared to replacement. That is exactly the service We Coat delivers.
              </p>

              <p>
                We Coat is the dedicated roof coating and restoration division of <Link href="/about">We Build</Link>, a veteran and family-owned <Link href="/services/commercial-construction">commercial construction company</Link> based in South Charlotte. While We Build handles ground-up construction, <Link href="/services/commercial-upfits">commercial upfits</Link>, and <Link href="/services/general-contractor">general contracting</Link>, We Coat focuses exclusively on commercial roof coating and restoration. This specialization matters because roof coating is not a generic painting job. It requires specific product knowledge, precise surface preparation, and application expertise that only comes from dedicated focus on roof restoration.
              </p>

              <p>
                Our team holds IIBEC certification from the International Institute of Building Enclosure Consultants, which is the highest professional standard in the roof restoration industry. We are also members of the U.S. Green Building Council, reflecting our commitment to sustainable building practices. Every coating project we complete eliminates 5 to 10 tons of tear-off waste that would otherwise go to a landfill, while simultaneously reducing the building&rsquo;s energy consumption through reflective coatings.
              </p>

              <p>
                Charlotte&rsquo;s commercial roofing needs are driven by the city&rsquo;s rapid growth and its challenging climate. The metro area has over 190 million square feet of commercial roof space, much of it installed 10 to 20 years ago and now approaching the point where maintenance decisions must be made. Hot summers with temperatures regularly exceeding 95 degrees, intense UV exposure, occasional severe thunderstorms with hail, and high humidity create an environment that accelerates roof aging. We Coat exists to give Charlotte building owners a smarter alternative to the expensive, disruptive, and wasteful process of full roof replacement.
              </p>

              <div className="mini-story">
                <p>
                  Mountain Island Charter School in Charlotte needed a roof solution that would protect their 22,000-square-foot facility without disrupting classes. A full replacement would have required closing sections of the school for weeks and cost significantly more. We Coat applied a multi-layer silicone coating system with polyester fabric reinforcement at all seams and penetrations. The project completed in 5 working days with zero disruption to school operations, at approximately 40 percent of the replacement cost. The school received a 20-year NDL (No Dollar Limit) manufacturer warranty on the completed coating system.
                </p>
                <div className="story-attribution">Mountain Island Charter School, Charlotte NC</div>
              </div>

              <h2 id="about-we-coat">About the We Coat Division</h2>

              <p>
                We Coat was established as a dedicated division of We Build because we recognized that commercial roof restoration requires specialized expertise that is different from general construction. While our parent company brings over 60 years of combined construction experience across <Link href="/services/commercial-construction">commercial construction</Link>, <Link href="/services/commercial-upfits">tenant upfits</Link>, and <Link href="/services/design-build">design-build</Link>, roof coating demands its own set of skills, certifications, and product knowledge.
              </p>

              <p>
                Our roof coating team has specific training in surface preparation techniques for every commercial roof substrate, product chemistry for silicone, acrylic, polyurethane, and elastomeric coatings, application equipment calibration and wet film thickness measurement, infrared moisture detection for identifying hidden insulation damage, and manufacturer warranty requirements that must be met during application. This specialization is why we created a dedicated division rather than offering roof coating as an add-on to our general construction services.
              </p>

              <p>
                We Coat operates from We Build&rsquo;s headquarters at 14330 S Lakes Drive in South Charlotte, giving us efficient access to commercial properties across the entire Charlotte metro area. We serve building owners directly, work with property management companies that oversee commercial portfolios, and partner with real estate investors who need cost-effective roof maintenance strategies across multiple properties. Whether you own a single commercial building or manage a portfolio of 50, We Coat provides the same level of expertise and attention to every project.
              </p>

              <div className="callout">
                <div className="callout-title">Why a Dedicated Division Matters</div>
                <p>
                  Roof coating contractors who also do general roofing, siding, and painting often treat coating as a secondary service. They may lack the specialized training, equipment, and product relationships that ensure optimal results. We Coat&rsquo;s exclusive focus on roof coating means every project benefits from dedicated expertise, manufacturer-direct product access, and crews who coat roofs every day rather than occasionally.
                </p>
              </div>

              <div className="callout callout-tip">
                <div className="callout-title">We Coat Service Areas: Carolinas &amp; Michigan</div>
                <p>
                  While We Build&rsquo;s construction services are focused in the Carolinas, <strong>We Coat serves both the Carolinas and Michigan</strong>. Our roof coating division is licensed and operates in North Carolina, South Carolina, and Michigan, serving the Charlotte metro area and the Detroit Metro area. For Michigan roof coating inquiries, visit{' '}
                  <a href="https://wecoatcommercialroofing.com" target="_blank" rel="noopener noreferrer">wecoatcommercialroofing.com</a>{' '}
                  or call us at <a href="tel:+17045748124">(704) 574-8124</a>.
                </p>
              </div>

              <h2 id="coating-types">Commercial Roof Coating Services</h2>

              <p>
                We offer four professional-grade coating systems, each engineered for specific roof types, conditions, and performance requirements. Our IIBEC-certified team evaluates your building and recommends the optimal system based on your roof substrate, current condition, drainage characteristics, budget, and performance goals. Here is a detailed look at each coating type we apply across the Charlotte metro area.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Quick Stats */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">We Coat Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">IIBEC Certified Team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Licensed in NC, SC &amp; MI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">60+ years combined experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">USGBC member</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Save 50\u201370% vs replacement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Serving Carolinas &amp; Michigan</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Free Roof Assessment</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Our IIBEC-certified team will inspect your roof, assess its condition, and recommend the best coating system. No obligation.
                  </p>
                  <Button variant="secondary" className="w-full mb-3" asChild>
                    <Link href="/contact">Schedule Assessment</Link>
                  </Button>
                  <a
                    href="tel:+17045748124"
                    className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    (704) 574-8124
                  </a>
                </div>

                {/* TOC */}
                <nav className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">On This Page</h3>
                  <div className="toc-sidebar">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'about-we-coat', label: 'About We Coat' },
                      { id: 'coating-types', label: 'Coating Services' },
                      { id: 'process', label: 'Our Process' },
                      { id: 'roof-types', label: 'Roof Types' },
                      { id: 'benefits', label: 'Benefits' },
                      { id: 'cost-savings', label: 'Cost Savings & ROI' },
                      { id: 'charlotte-challenges', label: 'Charlotte Challenges' },
                      { id: 'industries', label: 'Industries We Serve' },
                      { id: 'sustainability', label: 'Sustainability & USGBC' },
                      { id: 'faq', label: 'FAQ' },
                    ].map((item) => (
                      <a key={item.id} href={`#${item.id}`}>{item.label}</a>
                    ))}
                  </div>
                </nav>

                {/* Certification */}
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <Image
                      src="/images/certifications/iibec.png"
                      alt="IIBEC Certified"
                      width={60}
                      height={60}
                      className="h-14 w-auto"
                    />
                    <div>
                      <h3 className="font-semibold text-sm">IIBEC Certified</h3>
                      <p className="text-xs text-muted-foreground">
                        International Institute of Building Enclosure Consultants
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Coating Types Grid */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {coatingTypes.map((type) => (
              <Card key={type.title} className="card-hover">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr_200px] gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Best for:</strong> {type.bestFor}
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 space-y-3">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Cost</div>
                        <div className="font-semibold text-primary">{type.cost}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Lifespan</div>
                        <div className="font-semibold">{type.lifespan}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="container mx-auto px-4">
        <div className="inline-cta my-0 rounded-none md:rounded-lg md:my-8">
          <p>Not sure which coating system is right for your building? Our free assessment includes a coating recommendation tailored to your roof type, condition, and budget.</p>
          <Link href="/contact">Schedule Free Assessment <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-muted" id="process-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="process">The We Coat Process: 10 Steps to a Restored Roof</h2>

            <p>
              A professional roof coating is only as good as the process behind it. Shortcuts in preparation lead to coating failure, and failure to follow manufacturer specifications voids warranties. Our 10-step process ensures every application delivers maximum performance, maximum longevity, and a valid manufacturer warranty. Here is exactly what happens from first contact through project completion.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="process-steps">
              {processSteps.map((step) => (
                <div key={step.step} className="process-step">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roof Types We Service */}
      <section className="py-16 bg-background" id="roof-types-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="roof-types">Roof Types We Service in Charlotte</h2>

            <p>
              We Coat applies professional coating systems to virtually every type of commercial roof found in the Charlotte market. Each roof substrate has different characteristics that require specific preparation techniques and coating chemistry. Our IIBEC-certified team knows exactly how to prepare and coat each substrate for optimal adhesion and long-term performance. Here is a detailed look at the roof types we service.
            </p>

            {roofTypesServiced.map((roofType) => (
              <div key={roofType.title}>
                <h3>{roofType.title}</h3>
                <p>{roofType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted" id="benefits-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label">Why Roof Coating</span>
            <h2 id="benefits" className="mt-2 mb-4">
              Benefits of Commercial Roof Coating
            </h2>
            <p className="text-muted-foreground">
              When it comes time to address an aging commercial roof, building owners face a choice between expensive full replacement and cost-effective roof coating. For the majority of commercial roofs in Charlotte, coating is the smarter investment. Here are the eight key benefits that make roof coating the preferred choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings & ROI */}
      <section className="py-16 bg-background" id="cost-savings-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="cost-savings">Cost Savings &amp; ROI: Roof Coating vs. Full Replacement</h2>

            <p>
              The financial case for roof coating over full replacement is compelling and straightforward. A commercial roof coating costs $8 to $12 per square foot installed, while a full roof replacement costs $12 to $20 or more per square foot. For a typical 10,000 square foot commercial roof in Charlotte, that is $80,000 to $120,000 for coating versus $120,000 to $200,000 for replacement. The savings range from $40,000 to $80,000 or more on a single building.
            </p>

            <p>
              But the initial cost savings are only part of the equation. A proper ROI analysis considers the full lifecycle cost of each option. Roof coating delivers additional financial benefits that full replacement does not.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Roof Coating</h3>
                <div className="text-4xl font-bold text-primary mb-4">$80K\u2013$120K</div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />2\u20135 day application</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />Zero business disruption</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />10\u201320 year lifespan</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />Zero landfill waste</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />15\u201325% cooling cost reduction</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />Can be recoated at end of life</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />No tear-off disposal fees</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Full Replacement</h3>
                <div className="text-4xl font-bold text-muted-foreground mb-4">$120K\u2013$200K+</div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />2\u20136 week installation</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />Significant business disruption</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />20\u201330 year lifespan</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />5\u201310 tons landfill waste</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />Minimal energy improvement</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />Full tear-off required at end of life</li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />$3,000\u2013$8,000 disposal fees</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto article-prose mt-8">
            <h3>Energy Savings Over the Coating Lifecycle</h3>

            <p>
              Reflective roof coatings reduce cooling costs by 15 to 25 percent by bouncing solar heat away from the building. For a 10,000 square foot commercial building in Charlotte spending $2,000 per month on cooling during summer months, a 20 percent reduction saves $400 per month or approximately $2,400 per year during the cooling season. Over a 15-year coating lifespan, that is $36,000 in cumulative energy savings on top of the initial cost savings versus replacement.
            </p>

            <h3>Lifecycle Cost Analysis: 30-Year Comparison</h3>

            <p>
              Consider a 30-year comparison for a 10,000 square foot commercial roof. Option A is a full replacement at $80,000 with a 25-year lifespan and minimal energy savings. Option B is a roof coating at $35,000 with a 15-year lifespan, recoated once at $25,000 at year 15, plus $36,000 in cumulative energy savings per 15-year cycle. The total 30-year cost for Option A is approximately $80,000. The total 30-year cost for Option B is approximately $60,000 minus $72,000 in energy savings, resulting in a net cost of negative $12,000, meaning the coating pays for itself and generates a positive return. This is why commercial property investors increasingly prefer coating over replacement for roofs with sound structure.
            </p>

            <div className="callout callout-cost">
              <div className="callout-title">ROI Tip for Property Investors</div>
              <p>
                For commercial real estate investors managing multiple properties, a portfolio-wide coating strategy can generate significant returns. Coating 10 buildings instead of replacing them can free up $300,000 to $700,000 in capital that can be deployed elsewhere while still extending roof life by 15 to 20 years across the portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Challenges */}
      <section className="py-16 gradient-steel text-secondary-foreground" id="charlotte-challenges-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="charlotte-challenges" className="text-center mb-4">
              Charlotte Commercial Roofing Challenges
            </h2>
            <p className="text-center text-secondary-foreground/80 mb-12 max-w-2xl mx-auto">
              Charlotte&rsquo;s climate and weather patterns create specific challenges for commercial roofs that make professional coating especially valuable.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Intense UV Exposure</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Charlotte receives over 2,700 hours of sunshine annually. This intense UV exposure degrades roofing membranes, causes oxidation on metal surfaces, and accelerates the aging of asphalt-based roof systems. Reflective coatings shield the existing membrane from UV damage, essentially resetting the aging clock. Without UV protection, most commercial roofing materials degrade 30 to 50 percent faster than their rated lifespan suggests.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ThermometerSun className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Extreme Heat & Thermal Cycling</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Charlotte summer temperatures regularly exceed 95 degrees Fahrenheit, pushing dark commercial roof surfaces above 160 degrees. In winter, temperatures drop below freezing. This continuous thermal cycling causes expansion and contraction that stresses seams, fasteners, and membrane joints. Elastomeric and silicone coatings accommodate this movement without cracking, while rigid materials fail at these stress points over time.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CloudRain className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Severe Storms & Hail</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Charlotte&rsquo;s position in the Piedmont region makes it susceptible to severe thunderstorms, particularly during spring and summer. These storms bring heavy rain, high winds, and occasional hail that test the waterproofing integrity of every commercial roof. Professional roof coatings add an additional layer of impact resistance and provide a seamless surface that handles heavy rain volume without the leak points that exist at seams in traditional roofing systems.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Humidity & Ponding Water</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Charlotte&rsquo;s average humidity exceeds 70 percent for much of the year, promoting mold, mildew, and algae growth on commercial roofs. Flat roofs are particularly vulnerable to ponding water from imperfect drainage. Silicone coatings are specifically engineered to withstand permanent ponding water without degradation, making them the ideal choice for Charlotte&rsquo;s flat commercial roofs where drainage issues are common.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Urban Heat Island Effect</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Charlotte&rsquo;s urban core and commercial corridors experience temperatures 5 to 10 degrees higher than surrounding rural areas due to the heat island effect. Millions of square feet of dark commercial roofing absorb and re-radiate solar heat, raising ambient temperatures. Reflective roof coatings directly combat this effect by reflecting solar energy rather than absorbing it, benefiting both the individual building and the broader community.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Aging Roof Stock</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                  Much of Charlotte&rsquo;s commercial building boom occurred in the 2000s and 2010s, meaning a large portion of the city&rsquo;s commercial roofs are now 10 to 20 years old and approaching critical maintenance decision points. Building owners across <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>, <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link> are discovering that coating is the most cost-effective way to extend the life of these aging roofs without the expense and disruption of replacement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background" id="industries-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label">Who We Serve</span>
            <h2 id="industries" className="mt-2 mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">
              We Coat provides commercial roof coating for buildings across every industry sector in the Charlotte metro area. Each industry has specific requirements, and our team understands the unique considerations for each building type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <Card key={industry.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & USGBC */}
      <section className="py-16 bg-muted" id="sustainability-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="sustainability">Sustainability &amp; USGBC Membership</h2>

            <p>
              As a member of the U.S. Green Building Council, We Build and We Coat are committed to sustainable construction practices that benefit our clients, our community, and the environment. Commercial roof coating is one of the most impactful sustainable building decisions a property owner can make, and here is why.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-8 not-prose my-8">
              <Image
                src="/images/certifications/usgbc-member-light.png"
                alt="USGBC Member"
                width={100}
                height={100}
                className="h-20 w-auto flex-shrink-0"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Zero Waste Roof Restoration</h3>
                <p className="text-muted-foreground">
                  Every full roof replacement generates 5 to 10 tons of tear-off material that goes directly to a landfill. Nationally, roofing waste accounts for approximately 10 percent of all construction and demolition debris. Roof coating eliminates this waste entirely because the existing roof membrane stays in place and serves as the substrate for the new coating system. Over the life of our business, the coatings we have applied have diverted hundreds of tons of roofing waste from Charlotte-area landfills.
                </p>
              </div>
            </div>

            <h3>Cool Roof Technology &amp; Energy Star</h3>

            <p>
              Reflective roof coatings, often called cool roofs, meet Energy Star criteria for solar reflectance and thermal emittance. Cool roofs reflect solar energy rather than absorbing it, reducing roof surface temperatures by 50 to 60 degrees Fahrenheit compared to dark conventional roofing. This reduces the building&rsquo;s cooling load, lowers HVAC energy consumption, and extends the life of rooftop air conditioning equipment. In Charlotte&rsquo;s climate where cooling represents the largest portion of commercial energy costs, cool roof coatings deliver measurable return on investment every summer.
            </p>

            <h3>Reduced Carbon Footprint</h3>

            <p>
              Roof coating reduces a building&rsquo;s carbon footprint in three ways. First, it eliminates the embodied energy in manufacturing, transporting, and installing new roofing materials. Second, it eliminates the carbon emissions associated with landfilling tear-off waste. Third, the energy savings from reflective coatings reduce the electricity consumed for cooling, which in turn reduces the carbon emissions from the power plants generating that electricity. For building owners pursuing LEED certification or corporate sustainability goals, roof coating contributes directly to multiple green building credits.
            </p>

            <div className="callout callout-tip">
              <div className="callout-title">LEED Credit Opportunity</div>
              <p>
                Reflective roof coatings can contribute to LEED credits under SS Credit 7.2 (Heat Island Reduction, Roof) and EA Credit 1 (Optimize Energy Performance). If your building is pursuing LEED certification or you want to improve its sustainability rating, a reflective roof coating is one of the most cost-effective ways to earn credits. Our team can provide documentation to support your LEED submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/we-coat/mics-aerial-1.jpg"
                >
                  <source src="/videos/we-coat-charlotte.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">Watch: We Coat commercial roof coating in Charlotte, NC</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                See Our Work in Action
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Watch our IIBEC-certified team apply professional roof coatings on real Charlotte-area commercial projects. From surface preparation and primer application to the final topcoat and inspection, our videos show exactly what a professional roof coating project looks like from start to finish. The quality of our process is visible in every frame.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We document every project with photos and video because we stand behind our work. When you see the precision of our surface preparation, the uniform coverage of our spray application, and the clean detail work around every penetration and edge, you will understand why We Coat is Charlotte&rsquo;s preferred commercial roof coating contractor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/portfolio">
                    View Our Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="http://www.wecoatus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WeCoatUS.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Videos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">See the Process</span>
            <h2 className="mt-2 mb-4">Roof Coating in Action</h2>
            <p className="text-muted-foreground">
              Watch our team apply professional roof coatings on real Charlotte-area projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { src: '/videos/mics-final-inspection.mp4', poster: '/images/we-coat/mics-aerial-3.jpg', title: 'Final Inspection \u2014 20-Year NDL Warranty' },
              { src: '/videos/mics-coating-layers.mp4', poster: '/images/we-coat/mics-detail-1.jpg', title: 'Layers of Coating Around AC Units' },
              { src: '/videos/mics-reroof-vs-coat.mp4', poster: '/images/we-coat/fabric-embedded.jpg', title: 'Reroof vs. Coat \u2014 Keeping Operations Open' },
            ].map((video) => (
              <div key={video.src} className="space-y-3">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Project Gallery</span>
            <h2 className="mt-2 mb-4">
              Mountain Island Charter School &mdash; Roof Coating
            </h2>
            <p className="text-muted-foreground">
              A completed commercial roof coating project for Mountain Island Charter School in Charlotte, NC.
              This project included power washing, primer application, polyester fabric reinforcement at all seams and penetrations, and multi-layer
              silicone coating with a 20-year NDL manufacturer warranty.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden image-hover">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Roof Coating Resources</h2>
            <p className="text-muted-foreground mt-4">
              Learn more about commercial roof coating from our expert guides and articles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Commercial Roof Coating: The Complete Guide', slug: 'commercial-roof-coating-complete-guide', category: 'Guide' },
              { title: 'Roof Coating vs. Replacement: Cost Comparison', slug: 'roof-coating-vs-roof-replacement', category: 'Blog' },
              { title: 'Silicone Roof Coating: Pros, Cons, and Applications', slug: 'silicone-roof-coating-pros-cons', category: 'Blog' },
            ].map((post) => (
              <Card key={post.slug} className="card-hover">
                <CardContent className="p-6">
                  <span className="section-label">{post.category}</span>
                  <h3 className="text-base font-semibold mt-2 mb-4">{post.title}</h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background" id="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq" className="text-center mb-4">
              Roof Coating FAQ
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Answers to the most common questions Charlotte building owners ask about commercial roof coating, costs, timelines, and the We Coat process.
            </p>
            <div className="space-y-4">
              {weCoatFaqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">
            Ready to Restore Your Commercial Roof?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free roof assessment with our IIBEC-certified team. We will evaluate your roof, recommend the best coating system, and provide a detailed, transparent proposal with no obligation. Charlotte&rsquo;s commercial buildings deserve better than a full tear-off when coating can deliver the same protection at half the cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="btn-shimmer">
              <Link href="/contact">
                Schedule Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
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

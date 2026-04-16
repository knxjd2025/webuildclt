import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Droplets,
  Sun,
  Shield,
  Leaf,
  DollarSign,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Thermometer,
  Clock,
  Layers,
  ClipboardCheck,
  Paintbrush,
  Eye,
  Wrench,
  CloudRain,
  Building2,
  Factory,
  Warehouse,
  HardHat,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Coating Charlotte NC | Commercial Roof Restoration',
  description:
    'Commercial roofing contractor near me in Charlotte, NC. Silicone, acrylic, polyurethane & elastomeric roof coatings. Save up to 50% vs roof replacement. Commercial roofing contractors near me serving Charlotte and the Carolinas. USGBC member. Veteran-owned. Free roof assessments. (980) 471-1745.',
  keywords: [
    'roof coating charlotte nc',
    'commercial roof coating charlotte',
    'commercial roofing contractor',
    'commercial roofing contractor near me',
    'commercial roofing contractors near me',
    'roof coating contractor near me',
    'commercial roof restoration charlotte nc',
    'silicone roof coating charlotte',
    'acrylic roof coating charlotte nc',
    'elastomeric roof coating charlotte',
    'polyurethane roof coating',
    'reflective roof coating charlotte',
    'flat roof coating charlotte nc',
    'metal roof coating charlotte',
    'roof sealing companies charlotte',
    'cool roof coating north carolina',
    'commercial roof repair charlotte',
    'roof coating cost charlotte nc',
    'commercial roofing Charlotte NC',
    'commercial roof coating near me',
    'commercial roofing contractor near me Charlotte NC',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/roof-coating',
  },
};

const coatingTypes = [
  {
    title: 'Silicone Roof Coating',
    icon: Droplets,
    pros: [
      'Superior ponding water resistance',
      'Excellent UV stability',
      'Long lifespan (15-20 years)',
      'Maintains reflectivity over time',
    ],
    cons: [
      'Higher upfront cost',
      'Can attract dirt buildup',
      'Requires specific primers on some substrates',
    ],
    description:
      'Silicone roof coatings are the gold standard for commercial flat roofs in Charlotte. Unlike other coatings, silicone does not break down when exposed to ponding water, making it the ideal choice for low-slope commercial buildings where drainage is imperfect. Silicone coatings maintain their reflective properties throughout their lifespan, which is critical in Charlotte where summer temperatures regularly exceed 95 degrees Fahrenheit. These coatings cure by reacting with atmospheric moisture, forming a seamless, monolithic membrane that eliminates the seams and joints where leaks typically originate. For building owners managing large commercial roofs, silicone coatings offer the best long-term value because they resist degradation from UV exposure, extreme heat, and the heavy rain events common across the Carolinas.',
  },
  {
    title: 'Acrylic Roof Coating',
    icon: Sun,
    pros: [
      'Most cost-effective option',
      'Excellent reflectivity',
      'Easy to apply and recoat',
      'Available in multiple colors',
    ],
    cons: [
      'Not suitable for ponding water',
      'Requires dry application conditions',
      'Shorter lifespan in humid climates',
    ],
    description:
      'Acrylic roof coatings provide excellent reflectivity at a lower price point than silicone, making them a popular choice for budget-conscious commercial property owners in Charlotte. These water-based coatings are easy to apply, dry quickly, and can be tinted to match building aesthetics. Acrylic coatings perform best on sloped metal roofs where water drains completely, as standing water can degrade the coating over time. In the Charlotte metro area, acrylic coatings are frequently used on metal-roofed warehouses, retail buildings, and light industrial facilities. They offer strong UV reflectivity that reduces cooling costs during Charlotte\'s long, hot summers, and they can be recoated when they reach the end of their service life without the need for a full removal.',
  },
  {
    title: 'Polyurethane Roof Coating',
    icon: Shield,
    pros: [
      'Exceptional impact resistance',
      'Handles foot traffic well',
      'Strong adhesion to most substrates',
      'Good for high-traffic rooftops',
    ],
    cons: [
      'Less UV resistant than silicone',
      'Often requires a topcoat',
      'Higher application complexity',
    ],
    description:
      'Polyurethane roof coatings are the toughest option available for commercial roofs that experience regular foot traffic, rooftop equipment maintenance, or hail exposure. Charlotte experiences an average of two to three significant hailstorms per year, and polyurethane coatings absorb impact energy without cracking or splitting. These coatings come in two formulations: aromatic polyurethane for the base coat, which provides impact resistance and adhesion, and aliphatic polyurethane for the topcoat, which provides UV stability and color retention. For commercial buildings in Charlotte with rooftop HVAC units, satellite equipment, or regular maintenance access, polyurethane coatings provide the durability needed to withstand the physical demands placed on the roof surface.',
  },
  {
    title: 'Elastomeric Roof Coating',
    icon: Thermometer,
    pros: [
      'Extreme flexibility',
      'Expands and contracts with temperature',
      'Excellent crack bridging',
      'Works well on metal roofs',
    ],
    cons: [
      'Moderate ponding water resistance',
      'May require more frequent recoating',
      'Performance varies by formulation',
    ],
    description:
      'Elastomeric roof coatings are engineered to stretch and recover, making them the best choice for metal roofs and substrates that experience significant thermal expansion and contraction. Charlotte\'s climate swings from below-freezing winter nights to 100-degree summer days, creating thermal cycling that causes rigid coatings to crack at seams and fasteners. Elastomeric coatings stretch up to 300 percent without losing adhesion, bridging gaps and cracks that develop as metal panels expand and contract. For commercial metal buildings, standing seam roofs, and older metal structures throughout the Charlotte area, elastomeric coatings seal fastener penetrations, lap seams, and flashing details that are the primary sources of leaks.',
  },
  {
    title: 'Reflective Cool Roof Coating',
    icon: BarChart3,
    pros: [
      'Maximum energy savings',
      'Reduces roof surface temperature by 50-60°F',
      'May qualify for energy rebates',
      'Meets ENERGY STAR requirements',
    ],
    cons: [
      'Reflectivity decreases over time',
      'May not be ideal for all climates',
      'Performance depends on proper application thickness',
    ],
    description:
      'Reflective cool roof coatings are specifically formulated to maximize solar reflectance and thermal emittance, dramatically reducing the amount of heat absorbed by your commercial roof. In Charlotte, where cooling costs represent the largest portion of commercial energy expenses from May through September, a cool roof coating can reduce rooftop surface temperatures by 50 to 60 degrees Fahrenheit. This translates directly to lower HVAC energy consumption, with many Charlotte building owners reporting cooling cost reductions of 15 to 25 percent after coating installation. Cool roof coatings also reduce the urban heat island effect in Charlotte\'s dense commercial corridors, contributing to the sustainability goals that many businesses and municipalities are pursuing. As a USGBC member, We Build recommends cool roof coatings as one of the most cost-effective green building upgrades available.',
  },
];

const processSteps = [
  {
    icon: Eye,
    title: 'Initial Roof Inspection',
    description:
      'Our certified team conducts a comprehensive roof inspection, documenting the condition of every section including membranes, flashings, penetrations, drains, and seams. We use moisture detection equipment to identify any trapped moisture beneath the existing roof surface that could compromise a new coating.',
  },
  {
    icon: ClipboardCheck,
    title: 'Condition Assessment & Recommendation',
    description:
      'We compile our findings into a detailed assessment report that includes photographs, moisture scan results, and a clear recommendation. If your roof is a candidate for coating, we specify the optimal coating system for your substrate type and building use. If the roof requires structural repair before coating, we identify those areas.',
  },
  {
    icon: Wrench,
    title: 'Substrate Repair',
    description:
      'Before any coating is applied, we repair all identified issues: patching membrane tears, resealing flashing details, replacing damaged insulation, fixing ponding water areas, and addressing any structural concerns. Coating over unrepaired damage is the leading cause of premature coating failure.',
  },
  {
    icon: Droplets,
    title: 'Power Washing & Surface Preparation',
    description:
      'We power wash the entire roof surface to remove dirt, debris, algae, mold, and oxidation that prevent proper coating adhesion. For metal roofs, we address rust spots and apply rust-inhibiting treatment. Surface preparation is the single most important factor in coating longevity.',
  },
  {
    icon: Layers,
    title: 'Primer Application',
    description:
      'We apply the manufacturer-specified primer to ensure optimal adhesion between your existing roof substrate and the new coating system. Different substrates require different primers, and our team selects the correct primer for your specific roof material whether it is TPO, EPDM, metal, modified bitumen, or built-up roofing.',
  },
  {
    icon: Paintbrush,
    title: 'Detail Work & Flashing',
    description:
      'Before the field coating is applied, we reinforce all critical detail areas with fabric-reinforced coating or flashing-grade sealant. This includes pipe penetrations, HVAC curbs, drains, scuppers, parapet walls, and all transitions where the roof meets vertical surfaces.',
  },
  {
    icon: HardHat,
    title: 'Coating Application',
    description:
      'We apply the roof coating in multiple passes to achieve the manufacturer-specified mil thickness across the entire roof surface. Our team uses calibrated wet-film thickness gauges to verify proper coverage. We monitor weather conditions throughout application to ensure the coating cures properly.',
  },
  {
    icon: Clock,
    title: 'Curing & Monitoring',
    description:
      'After application, we monitor the curing process to ensure the coating achieves full adhesion and membrane integrity. Charlotte\'s humidity levels can affect cure times, and our team schedules applications around weather windows to ensure optimal curing conditions.',
  },
  {
    icon: CheckCircle,
    title: 'Final Inspection & Documentation',
    description:
      'We conduct a thorough final inspection, verifying coating thickness, adhesion quality, and detail work integrity. You receive a complete project file including before-and-after photographs, coating thickness readings, material data sheets, and warranty documentation.',
  },
  {
    icon: Shield,
    title: 'Warranty & Maintenance Plan',
    description:
      'Every roof coating project includes a manufacturer-backed warranty and a customized maintenance schedule. We provide annual inspection recommendations and a maintenance plan that helps you maximize the lifespan of your new coating system. Our team remains available for warranty service throughout the life of the coating.',
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Save 50-70% vs. Roof Replacement',
    description:
      'A full commercial roof replacement in Charlotte typically costs $12 to $20 per square foot, while a professional roof coating costs $8 to $12 per square foot installed. For a 20,000-square-foot commercial roof, that is a savings of $80,000 to $160,000. Coating also avoids the hidden costs of replacement: dumpster fees, tear-off labor, disposal charges, and potential damage to interior spaces during removal. The savings compound further when you factor in the tax treatment, as roof coatings are typically classified as a maintenance expense rather than a capital expenditure.',
  },
  {
    icon: Zap,
    title: 'Reduce Energy Costs 15-25%',
    description:
      'Reflective roof coatings reduce rooftop surface temperatures by 50 to 60 degrees Fahrenheit, which directly reduces the workload on your HVAC system. In Charlotte, where cooling season runs from May through September, commercial buildings with dark, uncoated roofs absorb enormous amounts of solar energy. A reflective coating bounces that energy back into the atmosphere instead of transferring it into your building. Our clients in the Charlotte metro area consistently report cooling cost reductions of 15 to 25 percent in the first summer after coating installation.',
  },
  {
    icon: Droplets,
    title: 'Eliminate Leaks & Water Damage',
    description:
      'Roof coatings create a seamless, monolithic membrane over your entire roof surface, eliminating the seams, joints, and fastener penetrations where leaks originate. Charlotte receives an average of 43 inches of rain per year, with severe thunderstorms capable of dumping several inches in a single event. A properly applied roof coating prevents water intrusion that leads to mold growth, insulation damage, structural deterioration, and costly interior repairs to your commercial space.',
  },
  {
    icon: Clock,
    title: 'Extend Roof Life 10-20 Years',
    description:
      'A commercial roof coating adds 10 to 20 years of service life to your existing roof system, depending on the coating type and application quality. When the coating reaches the end of its service life, it can often be recoated again, further extending the roof life without ever requiring a full tear-off and replacement. This means a commercial roof that would have needed replacement in 5 years can potentially serve your building for 25 or more years with strategic coating applications.',
  },
  {
    icon: Leaf,
    title: 'Sustainable & USGBC Aligned',
    description:
      'Roof coatings eliminate the need to tear off and landfill your existing roof, preventing thousands of pounds of roofing waste per building. As a U.S. Green Building Council member, We Build prioritizes sustainable construction practices, and roof coating is one of the most impactful green building strategies available. Reflective coatings also reduce the urban heat island effect in Charlotte\'s commercial districts and lower the overall carbon footprint of your building operations through reduced energy consumption.',
  },
  {
    icon: Building2,
    title: 'Zero Business Disruption',
    description:
      'Unlike a full roof replacement that involves loud tear-off operations, debris, dust, and potential interior exposure, roof coating is applied directly over your existing roof with minimal noise and no interior disruption. Your business operates normally throughout the entire project. Our coatings are non-toxic and low-odor, so employees, customers, and tenants are unaffected. Most commercial coating projects are completed in 2 to 3 weeks depending on roof size and weather conditions.',
  },
];

const roofTypes = [
  {
    title: 'Flat & Low-Slope Roofs',
    description:
      'Flat roofs are the most common commercial roof type in Charlotte and the most frequent candidates for coating. Silicone coatings are typically the best choice for flat roofs because they resist ponding water and maintain their properties under constant moisture exposure. We coat flat roofs on office buildings, retail centers, warehouses, and industrial facilities across the Charlotte metro area.',
  },
  {
    title: 'TPO Membrane Roofs',
    description:
      'TPO (thermoplastic polyolefin) roofs are popular on newer commercial buildings in Charlotte. Over time, TPO membranes can become brittle, develop seam failures, and lose reflectivity. A silicone or acrylic coating restores the roof surface, reseals seams, and extends the membrane life by 10 to 15 years without the cost of a full TPO replacement.',
  },
  {
    title: 'EPDM Rubber Roofs',
    description:
      'EPDM (ethylene propylene diene monomer) rubber roofs are durable but develop issues at seams and flashings as adhesives age. Charlotte\'s temperature swings accelerate adhesive failure on EPDM roofs. We apply specifically formulated EPDM-compatible coatings that adhere to the rubber surface, seal failing seams, and add a reflective layer that the original black EPDM membrane lacks.',
  },
  {
    title: 'Metal Roofs',
    description:
      'Metal roofs on commercial and industrial buildings in Charlotte develop rust, fastener loosening, and seam separation over time. Elastomeric and polyurethane coatings are ideal for metal substrates because they flex with the metal as it expands and contracts through Charlotte\'s temperature cycles. Our metal roof coating system includes rust inhibitor, fabric reinforcement at seams, and a reflective topcoat.',
  },
  {
    title: 'Modified Bitumen Roofs',
    description:
      'Modified bitumen roofs are common on older commercial buildings throughout Charlotte. These multi-layered asphalt systems develop cracks and blisters as they age, particularly under Charlotte\'s intense UV exposure. A silicone or acrylic coating over modified bitumen seals surface cracks, prevents further UV degradation, and adds the reflective properties the original dark surface lacks.',
  },
  {
    title: 'Built-Up Roofs (BUR)',
    description:
      'Built-up roofs, also known as tar-and-gravel roofs, are found on many older commercial buildings in Charlotte. These roofs are excellent candidates for coating because the alternative is an expensive and messy tear-off. We clean the gravel surface, repair any blistering or delamination, and apply a coating system that seals and protects the existing BUR assembly for another 10 to 15 years.',
  },
];

const faqs = [
  {
    question: 'How much does commercial roof coating cost in Charlotte, NC?',
    answer:
      'Commercial roof coating in Charlotte typically costs $8 to $12 per square foot installed, depending on the coating type, roof condition, and accessibility. For comparison, a full commercial roof replacement runs $12 to $20 per square foot. A standard 15,000-square-foot commercial roof coating project in Charlotte ranges from $120,000 to $180,000, compared to $180,000 to $300,000 for replacement. We provide free roof assessments with detailed, itemized cost estimates so you know exactly what to expect before any work begins.',
  },
  {
    question: 'How long does a commercial roof coating last?',
    answer:
      'The lifespan of a commercial roof coating depends on the coating type, application quality, and maintenance. Silicone coatings typically last 15 to 20 years. Acrylic coatings last 8 to 12 years. Polyurethane systems last 10 to 15 years. Elastomeric coatings last 10 to 15 years. All of these coatings can be recoated at the end of their service life without removing the existing coating, which means your roof can be maintained indefinitely through periodic recoating.',
  },
  {
    question: 'Is roof coating better than roof replacement?',
    answer:
      'Roof coating is a better option when your existing roof structure and insulation are sound. Coating costs 50 to 70 percent less than replacement, generates zero tear-off waste, requires no business disruption, and can be completed in days instead of weeks. However, if your roof has extensive structural damage, saturated insulation, or has already been coated multiple times, replacement may be the more appropriate solution. Our free assessment determines which approach is right for your building.',
  },
  {
    question: 'What types of commercial roofs can be coated?',
    answer:
      'We coat virtually every type of commercial roof: flat roofs, TPO membranes, EPDM rubber roofs, metal roofs (standing seam, corrugated, R-panel), modified bitumen, built-up (tar and gravel), PVC membranes, concrete roofs, and spray polyurethane foam. Each substrate requires a specific coating system and primer for proper adhesion. Our team assesses your specific roof type and recommends the optimal coating system for your substrate.',
  },
  {
    question: 'Can you apply roof coating while my business stays open?',
    answer:
      'Yes, and this is one of the biggest advantages of roof coating over replacement. All work is performed on the exterior of your building with no interior disruption. Our coatings are non-toxic and low-odor, so employees, customers, and tenants are unaffected. There is no loud tear-off process, no debris falling around your building, and no risk of interior exposure to weather during the project. Your business operates normally from start to finish.',
  },
  {
    question: 'How long does a roof coating project take?',
    answer:
      'Most commercial roof coating projects in Charlotte take 2 to 3 weeks, depending on roof size, condition, and weather. A standard 15,000-square-foot roof typically takes about 2 weeks: several days for cleaning and prep, time for repairs and detail work, and the remaining time for coating application and proper curing. Larger roofs or those requiring extensive repairs may take longer. We schedule around Charlotte weather patterns to avoid rain during application and curing.',
  },
  {
    question: 'Does roof coating stop leaks?',
    answer:
      'Yes, a properly applied roof coating creates a seamless, waterproof membrane that eliminates the seams, joints, and penetrations where leaks originate. We also repair all existing damage before coating, ensuring that the underlying issues causing leaks are addressed. However, roof coating is not a patch for active structural damage. If your roof has collapsed insulation or structural failure, those issues must be repaired before coating. Our inspection identifies all issues so nothing is overlooked.',
  },
  {
    question: 'What is the best roof coating for Charlotte, NC weather?',
    answer:
      'For most flat commercial roofs in Charlotte, silicone coating is the best option because it handles ponding water, resists UV degradation, and performs well in high-humidity environments. For metal roofs, elastomeric or polyurethane coatings are preferred because they flex with thermal expansion. For buildings where energy savings are the primary goal, reflective cool roof coatings offer the best thermal performance. Our team recommends the optimal coating based on your specific roof type, building use, and goals.',
  },
  {
    question: 'Does roof coating qualify for tax deductions or energy rebates?',
    answer:
      'Roof coating is typically classified as a maintenance expense rather than a capital improvement, which means it can often be fully deducted in the year it is applied rather than depreciated over 39 years like a roof replacement. This provides a significant tax advantage for commercial property owners. Additionally, reflective cool roof coatings may qualify for energy efficiency incentives through Duke Energy and local utility programs. We recommend consulting your tax advisor for guidance specific to your situation.',
  },
  {
    question: 'What warranty do you provide on roof coating?',
    answer:
      'Every roof coating project includes a manufacturer-backed material warranty and our workmanship warranty. Material warranties range from 10 to 20 years depending on the coating system. Our workmanship warranty covers the quality of surface preparation, repairs, and application. We also provide a detailed maintenance plan with annual inspection recommendations to help you maximize the coating lifespan and maintain warranty compliance.',
  },
  {
    question: 'How much can roof coating reduce energy costs for my Charlotte building?',
    answer:
      'Reflective cool roof coatings can reduce rooftop surface temperatures by 50 to 80 degrees Fahrenheit on a typical Charlotte summer day, which translates to measurable HVAC savings. Studies by the Department of Energy show that cool roof coatings reduce cooling energy consumption by 10 to 30 percent depending on building insulation, HVAC efficiency, and roof size relative to building volume. For a 20,000-square-foot commercial building in Charlotte running older HVAC equipment, that can represent $3,000 to $8,000 in annual energy savings. As a USGBC member, We Build recommends cool roof coatings as one of the most cost-effective sustainability upgrades for commercial buildings in the Charlotte climate.',
  },
  {
    question: 'How does roof coating compare to a TPO or EPDM roof replacement in Charlotte?',
    answer:
      'A full TPO or EPDM roof replacement in Charlotte costs $12 to $20 per square foot and requires 2 to 4 weeks of disruptive tear-off, disposal, and installation. Roof coating costs $8 to $12 per square foot installed and takes 2 to 3 weeks with zero interior disruption. Replacement generates significant landfill waste from the old membrane, while coating creates no tear-off waste at all. The trade-off is that coating requires a structurally sound existing roof and substrate in reasonable condition. If your existing membrane is severely deteriorated or insulation is saturated, replacement is the better long-term investment. Our free roof assessment determines which option is right for your specific building.',
  },
  {
    question: 'Can you coat a metal roof on a warehouse or industrial building in the Charlotte area?',
    answer:
      'Yes, metal roofs are one of the most common substrates we coat in Charlotte industrial areas like the Airport-West corridor, the I-85 North corridor, and the I-77 corridor toward Mooresville. Metal roofs develop rust, fastener-back-out leaks, and seam failures over time, but the underlying metal panels and structure typically remain sound for decades. We apply rust-inhibiting primer to any corroded areas, seal all seams and fasteners, and then apply an elastomeric or silicone coating system that waterproofs the entire roof surface. Metal roof coatings also reduce thermal expansion noise and significantly lower interior temperatures in non-climate-controlled buildings. The total cost is typically 40 to 60 percent less than a metal roof replacement.',
  },
];

export default function RoofCoatingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Roof Coating Charlotte NC',
            'Professional commercial roof coating and restoration in Charlotte, NC. Silicone, acrylic, polyurethane, and elastomeric coatings. Save up to 50% vs replacement. USGBC member. Free roof assessments.',
            'https://webuildclt.com/services/roof-coating'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Roof Coating' },
          ]),
        ]}
      />

      <PageHero
        title="Roof Coating Charlotte NC"
        subtitle="Commercial roof restoration that saves up to 50% vs replacement — backed by 60+ years of combined construction experience"
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Roof Coating' },
            ]}
          />

          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Roof Coating & Restoration in Charlotte, NC
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When your commercial roof starts showing signs of wear — ponding water, membrane
              cracking, seam separation, rust, or recurring leaks — your first instinct might be
              to budget for a full roof replacement. But in many cases, a professionally applied
              roof coating can restore your roof to like-new condition at a fraction of the cost.
              <Link href="/we-coat" className="text-primary hover:underline font-medium"> We Coat</Link>,
              the dedicated roof coating division of{' '}
              <Link href="/about" className="text-primary hover:underline font-medium">We Build</Link>,
              provides commercial roof coating services across Charlotte, NC and the surrounding
              region, including{' '}
              <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill, SC</Link>,{' '}
              <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and{' '}
              <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Charlotte&apos;s climate presents unique challenges for commercial roofs. Summer
              temperatures regularly push past 95 degrees, driving rooftop surface temperatures
              above 160 degrees on dark, uncoated membranes. The humidity hovers around 70 to 80
              percent from June through September, creating conditions where moisture gets trapped
              beneath aging membranes and accelerates deterioration. Charlotte averages 43 inches
              of rain per year, and severe thunderstorms can dump several inches in a single
              afternoon, testing every seam and flashing detail on your roof. Winter brings
              freeze-thaw cycles that crack rigid materials and loosen fasteners. A commercial
              roof coating addresses all of these threats by creating a seamless, reflective,
              waterproof barrier that protects your existing roof system and dramatically extends
              its service life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a veteran and family-owned{' '}
              <Link href="/services/general-contractor" className="text-primary hover:underline font-medium">
                general contractor
              </Link>{' '}
              with over 60 years of combined construction experience, We Build brings a level of
              construction knowledge to roof coating that dedicated coating companies cannot match.
              We understand building structures, drainage systems, and the full range of commercial
              roofing substrates because we build and renovate the buildings they sit on. Our team
              is licensed in both North Carolina and South Carolina, and as a{' '}
              <span className="font-medium">U.S. Green Building Council (USGBC) member</span>, we
              are committed to sustainable building practices that reduce waste and energy
              consumption. Every roof we coat is one less roof that ends up in a landfill.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Save 50-70% vs. Full Roof Replacement
              </h3>
              <p className="text-muted-foreground">
                A commercial roof coating costs $8 to $12 per square foot installed, compared to $12 to $20
                per square foot for full replacement. For a 20,000-square-foot commercial roof,
                that is a potential savings of $80,000 to $160,000 — plus reduced energy costs
                from reflective coatings and favorable tax treatment as a maintenance expense.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Free Roof Assessment
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/we-coat">
                  Learn About We Coat
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Commercial Roof Coating */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Is Commercial Roof Coating?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Commercial roof coating is a liquid-applied roofing membrane that is sprayed, rolled,
              or brushed directly onto your existing roof surface. Once cured, the coating forms a
              seamless, monolithic barrier that waterproofs, reflects solar energy, and protects the
              underlying roof system from UV degradation, weather damage, and thermal stress.
              Unlike traditional roofing, which requires tearing off the old roof and installing
              new materials, coating is applied over the existing substrate — preserving your
              current roof investment and avoiding the cost and waste of a full tear-off.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The concept is straightforward, but the execution requires expertise. The coating must
              be applied at the correct mil thickness, over a properly prepared surface, with the
              right primer for the specific substrate. Detail areas — pipe penetrations, HVAC curbs,
              drains, scuppers, and parapet transitions — require reinforced treatment because they
              are the points where roof failures originate. A coating is only as good as the surface
              preparation and detail work beneath it. This is where experience matters, and it is
              why We Build&apos;s construction background gives us an advantage over companies that
              only do coatings. We understand the structures, flashings, and drainage systems that
              determine whether a coating will perform for 15 years or fail in 3.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Roof coating has become one of the fastest-growing segments of the commercial roofing
              industry because it solves a fundamental problem for building owners: aging roofs are
              expensive to replace, and every dollar spent on replacement is a dollar that cannot be
              invested in the business. Coating provides a way to restore roof performance at a
              fraction of replacement cost, while also adding energy efficiency, sustainability
              benefits, and favorable tax treatment that replacement does not offer.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Roof Coatings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Commercial Roof Coatings
            </h2>
            <p className="text-muted-foreground">
              Choosing the right coating system is critical to long-term performance. Each type
              has specific strengths that make it the best choice for certain roof substrates and
              building conditions. Our team recommends the optimal coating based on your specific
              roof type, drainage characteristics, and performance goals.
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {coatingTypes.map((coating) => (
              <Card key={coating.title}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <coating.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{coating.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {coating.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-700 dark:text-green-400">
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {coating.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-400">
                        Considerations
                      </h4>
                      <ul className="space-y-1">
                        {coating.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Roof Coating Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our 10-Step Roof Coating Process
            </h2>
            <p className="text-muted-foreground">
              A roof coating is only as good as the preparation and process behind it. Our
              10-step process ensures every project is completed to the highest standard, with
              thorough documentation at every phase. This process is what separates a coating
              that lasts 15 years from one that fails in 3.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm md:text-base shrink-0">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Commercial Roof Coating
            </h2>
            <p className="text-muted-foreground">
              Roof coating is one of the smartest investments a commercial building owner in
              Charlotte can make. Here is why property managers, building owners, and facility
              directors choose coating over replacement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{benefit.title}</h3>
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

      {/* Roof Coating vs. Roof Replacement */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Roof Coating vs. Roof Replacement: Making the Right Decision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The decision between coating and replacement comes down to the condition of your
              existing roof structure and insulation. If the structural deck is sound and the
              insulation is dry, coating is almost always the better financial decision. If the
              deck is compromised or the insulation is saturated with moisture, replacement
              becomes necessary because coating over a failed substrate will not solve the
              underlying problem.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-primary">Roof Coating</h3>
                  <ul className="space-y-3">
                    {[
                      'Cost: $8-$12 per square foot installed',
                      'Timeline: 2-3 weeks',
                      'Business disruption: None',
                      'Waste generated: Near zero',
                      'Tax treatment: Maintenance expense (deductible)',
                      'Roof life extension: 10-20 years',
                      'Energy savings: 15-25% cooling reduction',
                      'Recoatable at end of life',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Roof Replacement</h3>
                  <ul className="space-y-3">
                    {[
                      'Cost: $12-$20 per square foot',
                      'Timeline: 2-6 weeks',
                      'Business disruption: Significant noise and debris',
                      'Waste generated: Thousands of pounds to landfill',
                      'Tax treatment: Capital expenditure (39-year depreciation)',
                      'Roof life: 20-30 years',
                      'Energy savings: Depends on materials chosen',
                      'Full tear-off required at end of life',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-muted-foreground mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our free roof assessment determines which approach is right for your building. We use
              moisture detection equipment to scan for trapped moisture beneath the membrane, and we
              inspect the structural deck, flashings, and insulation condition. If your roof is a
              candidate for coating, we will tell you. If it needs replacement, we will tell you
              that too — as a full-service{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline font-medium">
                commercial construction company
              </Link>, we handle both.
            </p>
          </div>
        </div>
      </section>

      {/* Charlotte Climate & Your Roof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Charlotte Climate & Your Commercial Roof
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Charlotte sits in the humid subtropical climate zone, which means commercial roofs
              here face a combination of heat, humidity, UV exposure, heavy rain, and occasional
              severe weather that is more demanding than most regions of the country. Understanding
              how Charlotte&apos;s climate affects your roof is the first step toward making a smart
              maintenance and protection decision.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-bold">Extreme UV Exposure</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Charlotte receives an average of 218 sunny days per year, and UV radiation is
                    the primary cause of roof membrane degradation. Uncoated roofs absorb UV energy
                    that breaks down molecular bonds in roofing materials, causing cracking,
                    chalking, and brittleness. Reflective roof coatings block up to 85 percent of
                    UV radiation, dramatically slowing the degradation process and keeping your roof
                    functional years longer than it would last unprotected.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CloudRain className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-bold">Heavy Rainfall & Storms</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Charlotte averages 43 inches of annual rainfall, with severe thunderstorms
                    capable of producing torrential downpours, hail, and high winds. These weather
                    events test every seam, flashing, and penetration on your roof. A seamless roof
                    coating eliminates the joints and seams where water intrusion occurs, and
                    silicone coatings maintain their waterproofing properties even under prolonged
                    ponding conditions that follow heavy storms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Thermometer className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-bold">Temperature Extremes & Thermal Cycling</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Charlotte temperatures range from the low 20s in winter to over 100 degrees in
                    summer. This 80-degree swing causes roofing materials to expand and contract
                    repeatedly, loosening fasteners, opening seams, and cracking rigid materials.
                    Metal roofs are particularly vulnerable to thermal cycling. Elastomeric and
                    polyurethane coatings absorb this movement without cracking, maintaining a
                    continuous seal through every temperature cycle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-bold">Humidity & Moisture</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Charlotte&apos;s average humidity of 70 to 80 percent during summer months
                    creates conditions where moisture gets trapped beneath aging roof membranes,
                    promoting mold growth and accelerating insulation degradation. High humidity
                    also encourages algae and biological growth on roof surfaces, which retains
                    moisture and further deteriorates roofing materials. A roof coating seals out
                    moisture from above while allowing trapped moisture to escape through breathable
                    formulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Roof Types We Coat */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Roof Types We Coat
            </h2>
            <p className="text-muted-foreground">
              Our team has experience coating every common commercial roof type in the Charlotte
              area. Each substrate requires specific preparation, primers, and coating systems for
              optimal adhesion and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roofTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Coating Costs in Charlotte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Roof Coating Costs in Charlotte, NC
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Commercial roof coating costs in Charlotte depend on several factors: the size of your
              roof, the condition of the existing substrate, the type of coating system recommended,
              accessibility, and the amount of repair work needed before coating. Here is a
              realistic breakdown of what Charlotte building owners can expect to invest.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Typical Cost Ranges</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Acrylic coating:</span>
                      <span className="font-medium">$8.00 - $10.00/sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Silicone coating:</span>
                      <span className="font-medium">$9.00 - $12.00/sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Polyurethane system:</span>
                      <span className="font-medium">$9.00 - $12.00/sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Elastomeric coating:</span>
                      <span className="font-medium">$8.50 - $11.00/sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cool roof coating:</span>
                      <span className="font-medium">$8.00 - $10.00/sq ft</span>
                    </li>
                    <li className="border-t pt-2 flex justify-between font-semibold text-foreground">
                      <span>Full replacement:</span>
                      <span>$12.00 - $20.00/sq ft</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">ROI Analysis: 20,000 sq ft Roof</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Coating cost (silicone):</span>
                      <span className="font-medium">$60,000 - $100,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Replacement cost:</span>
                      <span className="font-medium">$140,000 - $240,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Savings:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">$80,000 - $140,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual energy savings:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">$3,000 - $8,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tax deduction benefit:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">Year 1 write-off</span>
                    </li>
                    <li className="border-t pt-2 flex justify-between font-semibold text-foreground">
                      <span>Total 10-year savings:</span>
                      <span className="text-green-600 dark:text-green-400">$110,000 - $220,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              These numbers illustrate why roof coating has become the preferred maintenance
              strategy for commercial building owners in Charlotte. The upfront savings are
              substantial, and the ongoing energy savings compound year after year. When you add
              the tax advantage of deducting the full cost as a maintenance expense versus
              depreciating a replacement over 39 years, the financial case for coating is
              compelling. We provide free, detailed consultations for every project so you can make
              an informed decision based on your specific building and budget. Contact our team to
              schedule a{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                free roof assessment
              </Link>{' '}
              and get a customized cost analysis for your commercial property.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Roof coating is one part of We Build&apos;s full-service{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline font-medium">
                commercial construction
              </Link>{' '}
              capabilities. Whether you need a{' '}
              <Link href="/services/commercial-upfits" className="text-primary hover:underline font-medium">
                commercial upfit
              </Link>{' '}
              to renovate your interior while we coat your roof, or a{' '}
              <Link href="/services/general-contractor" className="text-primary hover:underline font-medium">
                general contractor
              </Link>{' '}
              for a ground-up commercial build, our team handles it all under one roof. Visit
              our{' '}
              <Link href="/portfolio" className="text-primary hover:underline font-medium">
                project portfolio
              </Link>{' '}
              to see completed commercial projects across Charlotte, Fort Mill, Lake Norman, and
              the surrounding region.
            </p>
          </div>
        </div>
      </section>

      {/* Related Service Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Construction Services</h2>
            <p className="text-muted-foreground mt-2">
              Roof coating pairs well with our broader construction and inspection services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Green Building & Sustainability', href: '/services/green-building', type: 'Service', desc: 'USGBC member contractor offering LEED-certified construction and energy-efficient building strategies that complement reflective roof coatings.' },
              { title: 'Drone Roof Inspections', href: '/services/drone-inspections', type: 'Service', desc: 'FAA-certified thermal imaging drone inspections that identify moisture, leaks, and insulation failures before coating application.' },
              { title: 'Commercial Renovation', href: '/services/commercial-renovation', type: 'Service', desc: 'Complete commercial building renovation services that can include roof coating as part of a comprehensive facility upgrade.' },
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

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Roof Coating FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Answers to the most common questions Charlotte building owners ask about commercial
              roof coating. If you have a question not covered here, call us at{' '}
              <a href="tel:+19804711745" className="text-primary hover:underline font-medium">
                (980) 471-1745
              </a>{' '}
              or{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                request a free assessment
              </Link>.
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Commercial Roof?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free roof assessment with We Build&apos;s{' '}
            <span className="font-medium text-primary-foreground">We Coat</span> team.
            We will inspect your roof, recommend the right coating system, and provide a
            detailed proposal — all at no cost and no obligation. Serving Charlotte, NC,{' '}
            Fort Mill, SC, Lake Norman, and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+19804711745">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (980) 471-1745
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

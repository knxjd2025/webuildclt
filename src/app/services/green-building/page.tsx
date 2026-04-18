import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Leaf,
  Building2,
  Droplets,
  Wind,
  Sun,
  Recycle,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Zap,
  FileCheck,
  HardHat,
  MapPin,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  DollarSign,
  TrendingUp,
  Award,
  BarChart3,
  Gauge,
  ThermometerSun,
  Calculator,
  Scale,
  Users,
  Clock,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Green Building & Sustainable Construction Charlotte NC | USGBC Contractor',
  description:
    'USGBC member green building contractor in Charlotte, NC. LEED construction, energy-efficient building, sustainable materials, water conservation, indoor air quality, and solar-ready construction. Veteran-owned, licensed in NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'green building contractor Charlotte NC',
    'green building contractor near me',
    'LEED construction Charlotte NC',
    'sustainable construction Charlotte',
    'sustainable construction near me',
    'energy efficient building Charlotte NC',
    'USGBC contractor Charlotte',
    'USGBC member contractor Charlotte NC',
    'LEED certified contractor Charlotte',
    'green commercial construction',
    'LEED certification Charlotte',
    'sustainable building materials Charlotte NC',
    'energy star construction Charlotte',
    'green building design Charlotte NC',
    'eco friendly construction Charlotte',
    'net zero building Charlotte NC',
    'green building Charlotte North Carolina',
    'sustainable construction Charlotte NC',
    'energy efficient commercial construction Charlotte',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/green-building',
  },
  openGraph: {
    title: 'Green Building & Sustainable Construction Charlotte NC | We Build',
    description:
      'USGBC member green building contractor serving Charlotte, Fort Mill & Lake Norman. LEED construction, energy-efficient design, sustainable materials, and solar-ready buildings.',
    url: 'https://webuildclt.com/services/green-building',
    type: 'website',
  },
};

const greenServices = [
  {
    icon: Award,
    title: 'LEED Certification Support',
    slug: 'leed-certification-support',
    desc: 'Full-service LEED project management from registration through final certification, helping your commercial building earn Certified, Silver, Gold, or Platinum status.',
    details:
      'Achieving LEED certification requires meticulous documentation, strategic credit targeting, and a construction team that understands how every material choice, installation method, and building system contributes to your certification score. As a USGBC member, We Build brings firsthand knowledge of the LEED rating system to every green building project. We work with your design team from pre-design through construction to identify the most cost-effective credit strategies, manage the documentation trail that GBCI reviewers require, and coordinate specialty subcontractors who understand sustainable construction methods. Our team tracks credit compliance throughout the construction phase, conducts commissioning coordination, and ensures that the as-built conditions match the design intent documents submitted for review. We have supported LEED projects across Charlotte in the New Construction, Commercial Interiors, and Core and Shell rating systems.',
  },
  {
    icon: ThermometerSun,
    title: 'Energy-Efficient Building Envelope',
    slug: 'energy-efficient-building-envelope',
    desc: 'High-performance wall assemblies, roofing systems, windows, and insulation that dramatically reduce heating and cooling loads while improving occupant comfort.',
    details:
      'The building envelope is the single most impactful system for long-term energy performance. In Charlotte\'s humid subtropical climate, where cooling loads dominate energy consumption for seven months of the year, an optimized building envelope can reduce HVAC energy use by 30 to 50 percent compared to code-minimum construction. We Build installs continuous insulation systems that eliminate thermal bridging through steel studs, high-performance window assemblies with low-E coatings and thermally broken frames, cool roofing membranes that reflect solar radiation instead of absorbing it, and advanced air barrier systems that prevent conditioned air from leaking through the building shell. Every envelope decision is modeled against Charlotte climate data to ensure the investment delivers measurable energy savings. We coordinate with mechanical engineers to right-size HVAC equipment based on the reduced loads, which lowers both equipment cost and operating cost over the life of the building.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Material Selection',
    slug: 'sustainable-material-selection',
    desc: 'Locally sourced, recycled content, rapidly renewable, and low-impact materials that reduce embodied carbon while meeting durability and performance requirements.',
    details:
      'Material selection in green building goes far beyond choosing recycled content. It requires evaluating the entire lifecycle of every product, from raw material extraction and manufacturing energy through transportation distance, installation emissions, service life durability, and end-of-life recyclability. We Build maintains relationships with regional suppliers and manufacturers within 500 miles of Charlotte to maximize local sourcing credits for LEED projects and reduce transportation carbon. We specify Forest Stewardship Council certified wood products for framing and millwork, recycled steel for structural and metal stud framing, fly ash concrete that diverts coal combustion byproducts from landfills while improving concrete durability, and recycled content gypsum board and ceiling tiles. For interior finishes, we prioritize materials with Environmental Product Declarations and Health Product Declarations so that every product in your building has been transparently evaluated for both environmental impact and occupant health.',
  },
  {
    icon: Droplets,
    title: 'Water Conservation Systems',
    slug: 'water-conservation-systems',
    desc: 'Low-flow fixtures, rainwater harvesting, greywater recycling, and efficient irrigation systems that can reduce building water consumption by 40 percent or more.',
    details:
      'Water conservation in commercial buildings addresses both indoor consumption and outdoor irrigation. For indoor systems, We Build installs ultra-low-flow fixtures including dual-flush toilets that use 1.1 gallons per flush or less, sensor-activated lavatory faucets rated at 0.35 gallons per minute, and high-efficiency urinals. We design domestic hot water systems with recirculation loops and point-of-use heaters that minimize the water wasted while waiting for hot water to reach the fixture. For outdoor water management, we install rainwater collection systems that capture roof runoff for irrigation reuse, reducing municipal water demand and stormwater runoff simultaneously. Landscape design incorporates native and adaptive plant species that thrive in Charlotte\'s Piedmont climate without supplemental irrigation after establishment. For larger commercial properties, we design bioretention areas and permeable paving systems that manage stormwater on-site, which can also contribute to LEED Sustainable Sites credits and help meet Mecklenburg County post-construction stormwater requirements.',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality Optimization',
    slug: 'indoor-air-quality-optimization',
    desc: 'Low-VOC materials, enhanced ventilation strategies, MERV-13 filtration, and construction IAQ management plans that create healthier indoor environments.',
    details:
      'Indoor air quality directly affects occupant health, productivity, and satisfaction. Studies consistently show that workers in green buildings with optimized IAQ report fewer sick days and higher cognitive performance scores. We Build implements comprehensive IAQ strategies that begin during construction and extend through building occupancy. During construction, we execute an IAQ management plan that protects ductwork and absorptive materials from moisture and contamination, uses MERV-8 filtration on HVAC equipment during construction, and schedules a building flush-out period before occupancy to purge construction-related pollutants. For permanent building systems, we specify MERV-13 or higher filtration, demand-controlled ventilation with CO2 sensors that increase fresh air delivery when occupancy increases, energy recovery ventilators that pre-condition outdoor air using exhaust air energy, and displacement ventilation strategies that deliver fresh air at floor level and exhaust contaminants at ceiling level. All interior materials including paints, sealants, adhesives, composite wood products, carpet systems, and furniture meet CDPH v1.2 or GREENGUARD Gold emission standards to ensure the finished space does not off-gas harmful volatile organic compounds.',
  },
  {
    icon: Sun,
    title: 'Solar-Ready Construction',
    slug: 'solar-ready-construction',
    desc: 'Structural reinforcement, electrical pre-wiring, conduit routing, and inverter space planning that prepare your building for rooftop or ground-mounted solar installation.',
    details:
      'Even if solar panels are not in your immediate budget, designing your building as solar-ready costs a fraction of retrofitting later and positions your property for future energy independence. We Build designs roof structures with the additional dead load capacity to support photovoltaic arrays without requiring structural reinforcement after the fact. We install conduit pathways from the roof to the electrical room, reserve panel board space for solar circuit breakers, provide a designated area for inverter equipment with adequate ventilation, and orient the roof or designate ground-mount areas for optimal solar exposure based on Charlotte\'s latitude and sun path. Solar-ready construction also qualifies for LEED Renewable Energy credits and positions your building to take advantage of North Carolina\'s renewable energy tax incentives and Duke Energy\'s net metering program. As solar panel costs continue to decline and Duke Energy\'s carbon reduction goals create favorable utility programs, solar-ready buildings in Charlotte are increasingly attractive to tenants, investors, and buyers who understand that energy independence is a competitive advantage in the commercial real estate market.',
  },
  {
    icon: Gauge,
    title: 'Building Commissioning & Performance Verification',
    slug: 'building-commissioning',
    desc: 'Systematic testing of all building systems to verify they operate as designed, ensuring your green building actually delivers the energy and comfort performance it was engineered to achieve.',
    details:
      'A green building is only as sustainable as its systems perform in practice. Building commissioning is the quality assurance process that verifies every mechanical, electrical, plumbing, and controls system operates according to the design intent. Without commissioning, studies show that buildings routinely consume 15 to 30 percent more energy than their design models predict due to improperly configured controls, incorrectly balanced air systems, and equipment that was installed correctly but never calibrated for the specific building conditions. We Build coordinates the commissioning process from design review through seasonal performance verification, working with third-party commissioning agents who test and document every system. This includes HVAC functional performance testing, lighting controls verification, building envelope air leakage testing, domestic hot water system balancing, and building automation system point-to-point verification. Commissioning is a prerequisite for all LEED certification levels and is the single most effective strategy for ensuring your investment in green building technology delivers the energy savings, occupant comfort, and operational cost reductions that justified the project.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Green Building Consultation & Goal Setting',
    desc: 'We meet to discuss your sustainability goals, budget parameters, certification targets, and operational priorities. Whether you are pursuing LEED certification, targeting specific energy reduction benchmarks, or responding to corporate sustainability mandates, this initial conversation establishes the green building framework that will guide every decision throughout the project. We review your timeline, discuss Duke Energy incentive programs, and identify any site-specific environmental considerations.',
  },
  {
    step: '02',
    title: 'Green Specification & Material Procurement',
    desc: 'We source and procure materials that meet the project sustainability requirements, verifying certifications such as FSC chain-of-custody for wood products, recycled content documentation for steel and concrete, EPDs for major materials, and emission test reports for interior finishes. Long-lead sustainable products are identified and ordered early to prevent schedule impacts.',
  },
  {
    step: '03',
    title: 'Permitting',
    desc: 'We prepare and submit all building permits to Mecklenburg County. Where clients are pursuing Duke Energy rebate programs, federal energy efficiency tax deductions, or NC green-building incentives, we coordinate with the client&rsquo;s own team to supply construction information required for those applications.',
  },
  {
    step: '04',
    title: 'Green Construction Execution',
    desc: 'Construction begins with an IAQ management plan, construction waste management plan, and erosion and sedimentation control measures in place from day one. Our field team is trained in green construction practices including ductwork protection, moisture management, material storage requirements, and recycling protocols. Weekly sustainability compliance checks ensure that green building requirements are maintained throughout construction, not just at punch list.',
  },
  {
    step: '05',
    title: 'Construction Waste Diversion',
    desc: 'We implement a comprehensive construction waste management plan targeting 75 percent or greater diversion from landfill. Materials are separated on-site into dedicated dumpsters for metals, wood, cardboard, concrete, and mixed recyclables.',
  },
  {
    step: '06',
    title: 'Commissioning & Performance Testing',
    desc: 'Before occupancy, all building systems undergo functional performance testing to verify they operate as designed. HVAC systems are balanced and calibrated, lighting controls are programmed and tested, building envelope air leakage testing is performed, and the building automation system is verified point-by-point. A building flush-out removes construction-phase air contaminants before your team moves in.',
  },
];

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'We Build is a proud member of the U.S. Green Building Council, the organization behind the LEED rating system. Our USGBC membership demonstrates our commitment to sustainable construction and gives us direct access to the latest green building standards, educational resources, and industry best practices. When you choose a USGBC member contractor, you are working with a team that has invested in understanding green building at the deepest level, not one that treats sustainability as a marketing buzzword.',
  },
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Our military background instills discipline, accountability, and a mission-first mentality that drives every green building project from the first consultation through final certification. When we commit to a sustainability target, a certification level, or a performance benchmark, we treat that commitment with the same seriousness as any mission objective.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to green building projects. We understand both conventional and sustainable construction methods, which means we can identify where green building upgrades deliver real value and where conventional approaches already meet the performance target. This experience prevents over-engineering and ensures every sustainability dollar is invested where it matters most.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, enabling us to serve green building clients throughout the Charlotte metro area and beyond. Our dual-state licensing is especially valuable for companies with facilities on both sides of the state line who want consistent green building standards across their entire portfolio.',
  },
  {
    icon: Leaf,
    title: 'Whole-Building Sustainability Approach',
    desc: 'We do not treat green building as a checklist of individual upgrades. We evaluate each project as an integrated system where envelope performance affects HVAC sizing, which affects electrical load, which affects solar readiness, which affects operating cost. This whole-building approach ensures that sustainability investments are coordinated and synergistic, delivering greater total performance than isolated measures ever could.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Green Building Market Expertise',
    desc: 'We know the Charlotte green building landscape intimately, from Mecklenburg County stormwater requirements and North Carolina energy code to Duke Energy incentive programs and the local USGBC chapter community. This regional expertise means we can navigate the specific regulatory, utility, and market conditions that affect green building projects in the Charlotte metro area with confidence and efficiency.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Documentation & Reporting',
    desc: 'Green building projects require significantly more documentation than conventional construction. We provide detailed tracking of energy model compliance, material certifications, waste diversion rates, IAQ test results, and commissioning reports throughout the project. Every sustainability claim is backed by verifiable data, which is essential for LEED certification and equally valuable for corporate sustainability reporting.',
  },
];

const certificationLevels = [
  {
    level: 'LEED Certified',
    points: '40-49 points',
    color: 'bg-green-600',
    desc: 'The entry level of LEED certification demonstrates that a building meets baseline green building standards across all credit categories. Achieving LEED Certified typically requires energy performance at least 10 percent better than ASHRAE 90.1 baseline, basic water efficiency measures, construction waste diversion, and the use of low-emitting interior materials. For many Charlotte building owners, LEED Certified is an achievable first step that establishes green building credentials without a significant cost premium. The additional construction cost for Certified level is typically 1 to 3 percent above conventional construction, and this premium is often offset by Duke Energy incentives and reduced operating costs within the first two to three years.',
  },
  {
    level: 'LEED Silver',
    points: '50-59 points',
    color: 'bg-gray-400',
    desc: 'LEED Silver requires a more integrated approach to sustainability, typically achieving 15 to 25 percent energy savings beyond code baseline, enhanced water efficiency, and stronger commitments to sustainable materials and indoor environmental quality. Silver is the most commonly targeted level for Charlotte commercial projects because it delivers meaningful sustainability improvements at a cost premium of 3 to 5 percent. Many corporate tenants and government agencies specify LEED Silver as their minimum requirement for leased or owned facilities, making Silver certification a competitive advantage in the Charlotte commercial real estate market.',
  },
  {
    level: 'LEED Gold',
    points: '60-79 points',
    color: 'bg-yellow-500',
    desc: 'LEED Gold represents a significant commitment to high-performance building design and construction. Gold-level projects typically achieve 30 to 40 percent energy savings, incorporate on-site renewable energy or renewable energy credits, implement advanced water conservation systems including rainwater harvesting, and prioritize occupant health through enhanced ventilation and material transparency. The cost premium for Gold certification ranges from 5 to 8 percent above conventional construction, but the long-term operating cost savings, tenant attraction benefits, and property value increase make Gold one of the strongest return-on-investment levels in the LEED system. Charlotte has seen growing demand for Gold-level office and mixed-use projects, particularly in Uptown and South End.',
  },
  {
    level: 'LEED Platinum',
    points: '80+ points',
    color: 'bg-blue-300',
    desc: 'LEED Platinum is the highest level of LEED certification, reserved for buildings that achieve exceptional performance across all sustainability categories. Platinum projects typically achieve 40 to 60 percent energy savings, incorporate significant on-site renewable energy generation, implement greywater recycling or rainwater systems for non-potable uses, specify materials with full lifecycle transparency, and create exemplary indoor environments. The cost premium for Platinum ranges from 8 to 15 percent above conventional construction. While Platinum requires the largest upfront investment, these buildings command the highest rental premiums, attract the most sustainability-conscious tenants, and demonstrate the strongest long-term asset value in the commercial real estate market.',
  },
];

const roiFactors = [
  {
    icon: Zap,
    title: 'Energy Cost Savings',
    stat: '25-50%',
    statLabel: 'reduction in energy costs',
    desc: 'Green buildings in Charlotte typically achieve 25 to 50 percent lower energy costs compared to conventionally constructed buildings. High-performance building envelopes reduce heating and cooling loads, efficient HVAC systems use less energy to condition the building, LED lighting with daylight harvesting minimizes electrical consumption, and building automation systems optimize equipment operation based on actual occupancy and weather conditions. For a 20,000 square foot commercial building in Charlotte paying $2.50 per square foot annually in energy costs, a 35 percent reduction saves approximately $17,500 per year, which compounds over the entire life of the building.',
  },
  {
    icon: DollarSign,
    title: 'Tax Incentives & Rebates',
    stat: '$1.88/sq ft',
    statLabel: 'Section 179D deduction (up to)',
    desc: 'The federal Energy Efficient Commercial Buildings Deduction under Section 179D allows building owners to claim a tax deduction of up to $5.00 per square foot for buildings that achieve significant energy savings beyond ASHRAE 90.1 baseline. The Inflation Reduction Act expanded and extended this incentive through 2032, with higher deductions available for projects that meet prevailing wage and apprenticeship requirements. Duke Energy also offers commercial rebates for energy-efficient equipment including high-efficiency HVAC systems, LED lighting retrofits, variable frequency drives, building automation systems, and cool roofing. These incentive programs can offset 15 to 25 percent of the green building premium, significantly accelerating the return on your sustainability investment.',
  },
  {
    icon: TrendingUp,
    title: 'Property Value Increase',
    stat: '10-30%',
    statLabel: 'higher property value',
    desc: 'Multiple studies confirm that LEED-certified buildings command rental rate premiums of 5 to 20 percent and sale price premiums of 10 to 30 percent compared to comparable conventional buildings. In Charlotte\'s competitive commercial real estate market, LEED certification is an increasingly important differentiator that attracts quality tenants willing to pay more for healthier, more efficient spaces. Institutional investors and real estate investment trusts actively seek certified green buildings for their portfolios because these assets demonstrate lower operating costs, higher occupancy rates, and stronger long-term value retention. The premium is most pronounced for LEED Gold and Platinum buildings in Class A markets.',
  },
  {
    icon: Users,
    title: 'Tenant Demand & Retention',
    stat: '4.1%',
    statLabel: 'higher occupancy rates',
    desc: 'Green buildings consistently outperform conventional buildings in occupancy rates, tenant retention, and lease renewal probability. Corporate tenants increasingly require LEED-certified or Energy Star-rated buildings to meet their own sustainability commitments and ESG reporting obligations. In Charlotte, major employers including Bank of America, Honeywell, Lowe\'s, and Duke Energy have publicly stated sustainability goals that influence their real estate decisions. By building green, you position your property to attract and retain these high-quality tenants who value sustainability, commit to longer lease terms, and are willing to pay premium rents for buildings that align with their corporate values.',
  },
];

const faqs = [
  {
    question: 'How much does LEED certification add to construction costs in Charlotte?',
    answer:
      'The cost premium for LEED certification in Charlotte depends on the certification level and the specific strategies employed. LEED Certified typically adds 1 to 3 percent above conventional construction costs, which for a $150 per square foot project translates to $1.50 to $4.50 per square foot. LEED Silver adds 3 to 5 percent, Gold adds 5 to 8 percent, and Platinum adds 8 to 15 percent. However, these premiums are often partially or fully offset by Duke Energy rebates, Section 179D federal tax deductions, lower operating costs, and the rental rate premiums that certified buildings command. The key is early integration of sustainability goals into the design process, because late-stage additions of green building features always cost more than incorporating them from the beginning.',
  },
  {
    question: 'How long does the LEED certification process take?',
    answer:
      'The LEED certification timeline runs parallel to the design and construction schedule, not after it. Registration with GBCI typically happens during the design phase. Credit documentation is compiled throughout design and construction. After construction is complete and the commissioning process is finished, the final documentation package is submitted to GBCI for review, which takes 20 to 25 business days for the preliminary review. If the review team has comments or questions, the project team has 25 business days to respond. The complete process from design start to certification award typically takes 12 to 18 months for new construction projects and 8 to 12 months for commercial interiors.',
  },
  {
    question: 'What is the ROI on green building compared to conventional construction?',
    answer:
      'Green buildings deliver return on investment through multiple channels. Energy cost savings of 25 to 50 percent reduce operating expenses every year for the life of the building. Water savings of 30 to 50 percent further reduce utility costs. Maintenance costs are typically 10 to 15 percent lower due to higher-quality systems and commissioning. Rental rate premiums of 5 to 20 percent increase revenue. Property value premiums of 10 to 30 percent improve the asset on your balance sheet. Federal tax deductions under Section 179D provide immediate financial benefit. When all of these factors are combined, the typical payback period for the green building premium in Charlotte is 3 to 7 years, after which the building generates superior financial returns compared to conventional construction for the remainder of its operational life.',
  },
  {
    question: 'What Duke Energy rebates and incentives are available for green building in Charlotte?',
    answer:
      'Duke Energy Carolinas offers several commercial rebate programs that directly benefit green building projects. The Smart Saver Prescriptive program provides fixed rebates for specific equipment upgrades including high-efficiency HVAC units, LED lighting, variable frequency drives, and energy management systems. The Smart Saver Custom program offers rebates based on calculated energy savings for projects that do not fit the prescriptive categories, which often applies to comprehensive green building projects. Rebate amounts vary by measure but can total $20,000 to $100,000 or more for commercial projects depending on scope. Duke Energy also offers free energy assessments for qualifying commercial properties.',
  },
  {
    question: 'Does Charlotte have green building code requirements?',
    answer:
      'Charlotte and Mecklenburg County enforce the North Carolina State Building Code, which adopts the International Energy Conservation Code with North Carolina amendments. While there is no mandatory green building ordinance in Charlotte, the energy code establishes minimum insulation, HVAC efficiency, lighting power density, and building envelope air leakage requirements that every commercial project must meet. These code minimums have become increasingly stringent with each adoption cycle, moving closer to green building performance levels. Additionally, Mecklenburg County has aggressive stormwater management requirements that align with many LEED Sustainable Sites credits. For projects seeking city or county incentives, economic development agreements sometimes include sustainability provisions. Building green in Charlotte is a strategic advantage rather than a regulatory burden, and the market rewards projects that exceed code minimums.',
  },
  {
    question: 'What is the difference between LEED and Energy Star for commercial buildings?',
    answer:
      'LEED and Energy Star are complementary but different programs. LEED is a comprehensive green building rating system that evaluates sustainability across seven credit categories: Integrative Process, Location and Transportation, Sustainable Sites, Water Efficiency, Energy and Atmosphere, Materials and Resources, and Indoor Environmental Quality. LEED addresses the entire building lifecycle from design through construction and operations. Energy Star, administered by the EPA, focuses specifically on energy performance and benchmarks a building against similar buildings nationwide using the 1 to 100 Energy Star score. A building scoring 75 or higher earns the Energy Star label. Many LEED-certified buildings also earn Energy Star certification because the energy performance requirements align. We Build can help you pursue either or both certifications depending on your goals.',
  },
  {
    question: 'Can existing buildings in Charlotte be retrofitted for green building certification?',
    answer:
      'Yes, existing buildings can pursue green building certification through LEED for Existing Buildings: Operations and Maintenance, also known as LEED O+M. This rating system evaluates the ongoing performance of an existing building rather than the original design and construction. Credits are available for energy efficiency improvements, water conservation upgrades, sustainable purchasing policies, green cleaning programs, and indoor environmental quality enhancements. For Charlotte building owners who want to improve sustainability without a full renovation, LEED O+M provides a structured framework with third-party verification. Separately, our commercial upfit and renovation services can incorporate green building strategies into tenant build-outs and interior renovations using the LEED for Commercial Interiors rating system.',
  },
  {
    question: 'How do green buildings improve employee health and productivity?',
    answer:
      'Research from Harvard\'s Center for Climate, Health, and the Global Environment and multiple peer-reviewed studies consistently demonstrates that green buildings improve occupant health and cognitive function. Workers in green-certified buildings score 26 percent higher on cognitive function tests, report 30 percent fewer sick building syndrome symptoms, and have 6 percent higher sleep quality scores compared to workers in conventional buildings. The key building features driving these improvements include enhanced ventilation rates that deliver more fresh outdoor air per person, MERV-13 or higher filtration that removes particulates and allergens, low-emitting materials that minimize exposure to volatile organic compounds, daylighting strategies that support circadian rhythms, and thermal comfort systems that maintain consistent temperatures without hot and cold spots. For Charlotte employers competing for talent, a green building is a tangible recruitment and retention tool.',
  },
  {
    question: 'What sustainable materials do you recommend for commercial construction in Charlotte?',
    answer:
      'Our sustainable material recommendations for Charlotte commercial projects prioritize regional availability, durability in the Piedmont climate, and verified environmental performance. For structural systems, we specify recycled content steel and fly ash concrete that reduce embodied carbon. For framing, we use FSC-certified wood products sourced from managed Southeastern forests. Interior finishes include recycled content drywall, mineral wool insulation manufactured regionally, recycled content ceiling tiles, and porcelain tile with recycled content for high-traffic areas. Flooring options include polished concrete with penetrating sealers, recycled content carpet tile with manufacturer take-back programs, and bamboo or cork for areas where warmth is desired. All adhesives, sealants, paints, and coatings meet CDPH v1.2 emission standards. We provide material submittals with environmental certifications for every product so you have full transparency into what goes into your building.',
  },
  {
    question: 'Is solar power practical for commercial buildings in Charlotte?',
    answer:
      'Charlotte receives an average of 4.7 peak sun hours per day, which makes rooftop and ground-mounted solar arrays financially viable for many commercial properties. A typical commercial rooftop installation of 100 kilowatts can generate approximately 130,000 to 140,000 kilowatt-hours annually, offsetting $15,000 to $20,000 in electricity costs at current Duke Energy commercial rates. The federal Investment Tax Credit covers 30 percent of installation costs through 2032, with bonus credits available for domestic content and energy community eligibility. North Carolina eliminated its state solar tax credit in 2016 but Duke Energy\'s net metering program allows commercial customers to receive credit for excess generation. The typical payback period for commercial solar in Charlotte is 6 to 9 years, after which the system generates essentially free electricity for its remaining 20 to 25 year lifespan. We Build constructs solar-ready buildings that make future installation straightforward and cost-effective.',
  },
  {
    question: 'How does green building affect commercial property insurance rates?',
    answer:
      'Green buildings can qualify for reduced insurance premiums and specialized green building coverage. Several insurance carriers now offer green building endorsements that cover the cost of rebuilding to green standards after a covered loss, rather than simply replacing with conventional materials. Some carriers offer premium discounts of 5 to 15 percent for LEED-certified buildings because these properties typically have superior fire protection systems, better quality construction, and more resilient building envelopes that reduce the frequency and severity of claims. Additionally, green buildings with continuous insulation and advanced moisture management systems are less susceptible to mold-related claims, which is particularly relevant in Charlotte\'s humid climate. We recommend discussing green building insurance options with your carrier during the design phase so the policy is in place at certificate of occupancy.',
  },
  {
    question: 'What areas do you serve for green building construction?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for green building and sustainable construction projects. Our primary service area includes Charlotte, South Charlotte, University City, NoDa, South End, Uptown, and surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman communities of Cornelius, Davidson, Huntersville, and Mooresville. Our NC and SC general contractor licenses allow us to work across both states, which is particularly valuable for companies with facilities on both sides of the state line that want consistent green building standards. As a USGBC member based in Charlotte, we are deeply connected to the regional green building community and understand the specific climate, regulatory, and market conditions that affect sustainable construction in the Carolina Piedmont.',
  },
  {
    question: 'How much does a net-zero energy commercial building cost in Charlotte compared to a conventional building?',
    answer:
      'A net-zero energy commercial building in Charlotte typically costs 15 to 25 percent more than conventional construction, adding $30 to $60 per square foot to a standard commercial project. The premium covers high-performance building envelope insulation, triple-pane glazing, rooftop solar arrays sized to offset annual energy consumption, energy recovery ventilation, and advanced building automation systems. However, net-zero buildings eliminate utility costs entirely, saving $2 to $4 per square foot annually. Combined with the 30 percent federal solar Investment Tax Credit and Section 179D deductions, most net-zero commercial buildings in the Charlotte market achieve full payback on the additional investment within 8 to 12 years.',
  },
  {
    question: 'What is the difference between LEED and WELL certification for Charlotte commercial buildings?',
    answer:
      'LEED focuses primarily on building sustainability including energy efficiency, water conservation, materials, and site impact. WELL focuses specifically on how the building affects occupant health and wellness, evaluating air quality, water quality, nourishment, light, fitness, thermal comfort, sound, materials, and mental wellbeing. LEED certifies the building as environmentally responsible, while WELL certifies that the building actively supports the health of the people inside it. Many Charlotte corporate tenants are now pursuing both certifications simultaneously because they address complementary goals. We Build can design and construct buildings that satisfy the requirements of both rating systems, and our USGBC membership keeps us current on both standards.',
  },
  {
    question: 'Does Charlotte have any green building tax incentives for commercial property owners?',
    answer:
      'Charlotte commercial property owners can access several tax incentives for green building. The federal Section 179D Energy Efficient Commercial Building Deduction allows deductions of up to $5.00 per square foot for buildings that achieve 25 to 50 percent energy savings above ASHRAE 90.1 baseline. The 30 percent federal Investment Tax Credit applies to commercial solar installations through 2032, with bonus adders for domestic content and energy communities. North Carolina offers a property tax exclusion for solar energy systems, meaning the added value of rooftop solar does not increase your property tax assessment. Duke Energy commercial rebates can offset $20,000 to $100,000 or more in equipment costs.',
  },
];

export default function GreenBuildingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Green Building & Sustainable Construction Charlotte NC',
            'USGBC member green building contractor in Charlotte, NC. LEED certification support, energy-efficient building envelopes, sustainable material selection, water conservation systems, indoor air quality optimization, solar-ready construction, and building commissioning. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/green-building'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Green Building' },
          ]),
        ]}
      />

      <PageHero
        title="Green Building & Sustainable Construction Charlotte NC"
        subtitle="USGBC member contractor delivering LEED-certified, energy-efficient, and sustainable buildings across the Charlotte metro area"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Green Building & Sustainable Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Green Building Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Green building is no longer a niche market in Charlotte. It is the direction the
                entire commercial construction industry is moving, and the businesses that build
                sustainably today are positioning themselves for lower operating costs, higher
                property values, healthier workplaces, and stronger competitive advantage for decades
                to come. We Build is a proud member of the{' '}
                <strong>U.S. Green Building Council (USGBC)</strong>, the organization that created
                and administers the LEED rating system, the most widely used green building
                certification program in the world. Our USGBC membership is not just a logo on our
                website. It represents our investment in understanding sustainable construction at the
                deepest level, our commitment to staying current with evolving green building
                standards, and our ability to deliver buildings that perform as efficiently as they
                were designed to.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s green building market has grown significantly in recent years, driven
                by corporate sustainability mandates from major employers like Bank of America,
                Honeywell, and Duke Energy, rising energy costs that make efficiency a financial
                imperative, and a growing body of research confirming that green buildings improve
                occupant health and productivity. The city&apos;s rapid growth, with thousands of new
                commercial square feet delivered every year, creates an enormous opportunity to build
                sustainably rather than conventionally. Mecklenburg County&apos;s stormwater
                management requirements already align with many LEED Sustainable Sites credits, and
                Duke Energy&apos;s commercial rebate programs provide financial incentives that reduce
                the cost premium of energy-efficient construction. Charlotte is, in many ways, an
                ideal market for green building because the regulatory environment, utility incentive
                structure, and tenant demand all support the business case for sustainability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contractor
                </Link>{' '}
                with over 60 years of combined construction experience. We deliver green building
                services across the Charlotte metro area for commercial offices, retail spaces,
                medical facilities, restaurants, warehouses, and mixed-use developments. We integrate
                sustainability into every project phase, from initial energy modeling and LEED credit
                strategy through construction, commissioning, and certification. We work closely with
                your architect and design team to ensure green building goals are achieved.
                Licensed in both North Carolina and South Carolina, we serve
                Charlotte and the surrounding communities including{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>
                ,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>
                , and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center gap-6 mb-6">
                <Image
                  src="/USGBC Member.png"
                  alt="USGBC Member badge - white on teal"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
                <Image
                  src="/USGBC Member 1.png"
                  alt="USGBC Member badge - teal on white"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              {[
                { icon: BadgeCheck, title: 'USGBC Member', desc: 'We are a member of the U.S. Green Building Council, demonstrating our commitment to sustainable construction and the LEED rating system.' },
                { icon: Leaf, title: 'Sustainable by Design', desc: 'Every green building project integrates sustainability from the earliest design decisions, not bolted on as an afterthought during construction.' },
                { icon: DollarSign, title: 'Proven ROI', desc: 'Green buildings deliver 25-50% lower energy costs, 10-30% higher property values, and attract premium tenants willing to pay higher rents.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and sustainability targets. When we set a green building goal, we achieve it.' },
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

      {/* USGBC Membership Callout */}
      <section className="py-16 bg-[#005F73] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex gap-6 flex-shrink-0">
                <Image
                  src="/USGBC Member.png"
                  alt="USGBC Member — We Build Charlotte"
                  width={120}
                  height={120}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Official USGBC Member
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  We Build Is a U.S. Green Building Council Member
                </h2>
                <p className="text-white/85 leading-relaxed mb-6">
                  The U.S. Green Building Council (USGBC) is the nonprofit organization that
                  created and administers the LEED rating system — the most widely recognized
                  green building certification standard in the world. USGBC membership is not
                  automatically granted to any contractor; it reflects a genuine commitment to
                  sustainable building principles and ongoing investment in green building
                  education and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEED Credit Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                How LEED Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                LEED Credit Point Categories Explained
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                LEED certification points are earned across seven credit categories. As your
                USGBC member contractor, We Build helps you identify which categories offer the
                greatest return for your specific building type, budget, and location in
                Charlotte.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Location & Transportation',
                  abbr: 'LT',
                  points: 'Up to 16 pts',
                  desc: 'Credits for proximity to transit, bicycle infrastructure, and reduced parking that encourage alternatives to single-occupancy vehicles. Charlotte projects in Uptown or South End score well here.',
                },
                {
                  category: 'Sustainable Sites',
                  abbr: 'SS',
                  points: 'Up to 10 pts',
                  desc: 'Site protection, rainwater management, heat island reduction, and light pollution controls. Mecklenburg County stormwater requirements align with several Sustainable Sites credits.',
                },
                {
                  category: 'Water Efficiency',
                  abbr: 'WE',
                  points: 'Up to 11 pts',
                  desc: 'Indoor plumbing fixture efficiency, outdoor irrigation reduction, and water metering. Low-flow fixtures and native landscaping are the primary strategies for Charlotte commercial projects.',
                },
                {
                  category: 'Energy & Atmosphere',
                  abbr: 'EA',
                  points: 'Up to 33 pts',
                  desc: "The largest credit category. Points are earned for energy performance above ASHRAE 90.1 baseline, commissioning, advanced energy metering, renewable energy, and demand response. Duke Energy's rebate programs complement many EA strategies.",
                },
                {
                  category: 'Materials & Resources',
                  abbr: 'MR',
                  points: 'Up to 13 pts',
                  desc: 'Construction waste diversion, life cycle assessment, building product disclosure, and sourcing materials with recycled content or regional origin within 500 miles of Charlotte.',
                },
                {
                  category: 'Indoor Environmental Quality',
                  abbr: 'EQ',
                  points: 'Up to 16 pts',
                  desc: 'Minimum ventilation, low-emitting materials, daylighting, quality views, and acoustic performance. IAQ credits directly improve occupant health, productivity, and tenant satisfaction.',
                },
                {
                  category: 'Innovation',
                  abbr: 'IN',
                  points: 'Up to 6 pts',
                  desc: 'Bonus points for exceptional performance, pilot credits for innovative strategies, and LEED Accredited Professional project involvement.',
                },
              ].map((cat) => (
                <div key={cat.abbr} className="border border-border rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mr-2">
                        {cat.abbr}
                      </span>
                      <span className="font-semibold">{cat.category}</span>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                      {cat.points}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Green Building Market */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Charlotte Market
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Charlotte&apos;s Green Building Market & Local Incentives
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Charlotte is one of the Southeast&apos;s fastest-growing cities, and its
                sustainability infrastructure makes it an increasingly strong market for green
                building investment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: MapPin,
                  title: "Charlotte 2040 Comprehensive Plan",
                  desc: "Charlotte's 2040 Plan establishes sustainability as a core pillar of the city's growth strategy. The plan includes goals for compact, mixed-use development near transit, expanded tree canopy, stormwater resilience, and reduced per-capita carbon footprint. Buildings constructed to green standards today are already aligned with where Charlotte's regulatory environment is heading.",
                },
                {
                  icon: Zap,
                  title: 'Duke Energy Commercial Rebates',
                  desc: "Duke Energy Carolinas' Smart Saver program provides prescriptive rebates for high-efficiency HVAC systems, LED lighting, variable frequency drives, building automation systems, and cool roofing — all strategies that also contribute to LEED Energy & Atmosphere credits. Commercial projects in Charlotte can qualify for $20,000 to $100,000+ in Duke Energy rebates depending on project scope.",
                },
                {
                  icon: Droplets,
                  title: 'Mecklenburg County Stormwater Credits',
                  desc: "Mecklenburg County's post-construction stormwater program requires development projects to manage runoff on-site. Green infrastructure strategies such as bioretention areas, permeable paving, and vegetated roofs that meet LEED Sustainable Sites credits frequently satisfy or reduce Mecklenburg stormwater requirements simultaneously — a double financial benefit.",
                },
                {
                  icon: BarChart3,
                  title: 'Corporate Sustainability Demand',
                  desc: "Charlotte's largest employers — Bank of America, Duke Energy, Honeywell, Lowe's, Truist, and Wells Fargo — have all published ESG commitments that include real estate sustainability goals. This corporate demand creates a large, growing tenant market that specifically prefers or requires LEED-certified buildings, supporting higher rents and stronger occupancy for green building owners.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Green Building Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Green Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Green Building Services We Deliver in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Comprehensive sustainable construction services from LEED certification management
              to high-performance building systems. Every service is backed by our USGBC
              membership and delivered with the precision and accountability of a veteran-owned
              construction company.
            </p>
          </div>
          <div className="space-y-8">
            {greenServices.map((service) => (
              <Card key={service.title} id={service.slug}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-3">{service.desc}</p>
                      <p className="text-muted-foreground">{service.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Green Building Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Green Building Process
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent process that integrates sustainability into every
              construction phase. Green building is not something we add at the end. It is built
              into the project from day one, with clear documentation and communication at every
              step.
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for Green Building in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Green building requires a contractor who understands both sustainable construction
              methods and the LEED certification process. Choosing a USGBC member contractor ensures
              your sustainability investment is managed by a team with proven expertise and genuine
              commitment to green building, not just a marketing claim.
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

      {/* ROI Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Return on Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The Business Case for Green Building in Charlotte
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Green building is not just an environmental decision. It is a financial strategy that
                delivers measurable returns through reduced operating costs, increased property value,
                tax incentives, and stronger tenant demand. Here is how the numbers work in the
                Charlotte market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {roiFactors.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">{item.stat}</span>
                      <span className="text-sm text-muted-foreground ml-2">{item.statLabel}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">Additional Green Building Financial Benefits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Lower maintenance costs:</strong> High-quality green building systems require less maintenance and have longer service lives than code-minimum equipment, reducing ongoing facility management expenses by 10 to 15 percent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Reduced absenteeism:</strong> Employees in green buildings report fewer sick days and higher productivity, which translates directly to bottom-line value for building occupants and tenants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Insurance benefits:</strong> Several carriers offer premium discounts of 5 to 15 percent for LEED-certified buildings due to superior construction quality and reduced claim frequency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Future-proofing:</strong> As energy codes become more stringent and carbon regulations expand, buildings constructed to green standards today will require fewer costly retrofits to maintain compliance tomorrow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>ESG reporting:</strong> For corporate tenants and institutional owners, LEED-certified buildings provide third-party verified data for Environmental, Social, and Governance reporting requirements.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Green Building Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte business owners ask about green
                building, LEED certification, sustainable construction costs, energy incentives,
                and return on investment.
              </p>
            </div>
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

      {/* Related Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Green Building Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our related services and guides for more information on sustainable
              construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Construction', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction with integrated green building strategies for new facilities.' },
              { title: 'Roof Coating Charlotte NC', href: '/services/roof-coating', type: 'Service', desc: 'Reflective roof coatings that reduce cooling costs by up to 30% and contribute to LEED credits and energy efficiency.' },
              { title: 'Commercial Upfits', href: '/services/commercial-upfits', type: 'Service', desc: 'Sustainable interior renovations and tenant build-outs with LEED Commercial Interiors support.' },
              { title: 'Green Building Guide: Sustainable Construction in Charlotte', href: '/guides/green-building-guide-sustainable-charlotte', type: 'Guide', desc: 'Learn about sustainable building practices, LEED certification, and energy-efficient construction strategies for Charlotte projects.' },
              { title: 'Energy Efficiency Guide for Charlotte Homes', href: '/guides/energy-efficiency-guide-charlotte-homes', type: 'Guide', desc: 'Practical tips for improving energy efficiency in new construction and renovations throughout Charlotte.' },
              { title: 'Why USGBC Membership Matters for Your Charlotte Construction Project', href: '/blog/usgbc-membership-charlotte-construction-project', type: 'Blog', desc: "How We Build's USGBC membership benefits clients pursuing LEED certification and sustainable construction in the Charlotte market." },
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
                    {resource.type === 'Guide' ? 'Read Guide' : resource.type === 'Blog' ? 'Read Post' : 'Learn More'} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Build Green in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are pursuing LEED certification, targeting energy efficiency benchmarks,
            or building a sustainable facility that reduces operating costs and attracts premium
            tenants, We Build has the USGBC membership, construction expertise, and local market
            knowledge to deliver your green building project on time and within budget.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and green building assessment. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
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

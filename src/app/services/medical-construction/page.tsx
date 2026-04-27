import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Stethoscope,
  Building2,
  Heart,
  Bone,
  Dog,
  Scissors,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  Zap,
  FileCheck,
  HardHat,
  MapPin,
  HeartHandshake,
  Lightbulb,
  BadgeCheck,
  Wind,
  ShieldCheck,
  Accessibility,
  Flame,
  Pipette,
  ThermometerSun,
  Activity,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Medical Construction Charlotte NC | Clinic & Dental',
  description:
    'Medical and healthcare construction in Charlotte NC, Raleigh, Durham, RTP. Medical offices, dental, urgent care, surgical, veterinary, PT. HIPAA-compliant.',
  keywords: [
    'medical office construction Charlotte NC',
    'medical construction near me',
    'medical construction contractor Charlotte NC',
    'healthcare construction Charlotte',
    'healthcare construction near me',
    'dental office construction Charlotte NC',
    'dental office construction near me',
    'clinic construction Charlotte NC',
    'medical facility renovation Charlotte',
    'urgent care construction Charlotte NC',
    'surgical center construction Charlotte',
    'veterinary clinic construction Charlotte NC',
    'physical therapy clinic build out Charlotte',
    'medical office build out Charlotte NC',
    'healthcare facility renovation Charlotte NC',
    'HIPAA compliant construction Charlotte',
    'medical construction Charlotte North Carolina',
    'medical construction fort mill sc',
    'medical construction lake norman nc',
    'medical office contractor near me',
    'medical office construction raleigh nc',
    'healthcare construction raleigh',
    'dental office construction raleigh nc',
    'urgent care construction raleigh',
    'medical office build out raleigh nc',
    'medical facility renovation raleigh',
    'medical construction research triangle',
    'medical construction north hills raleigh',
    'medical construction cary nc',
    'wake county medical construction',
    'medical office construction durham nc',
    'healthcare construction durham',
    'dental office construction durham nc',
    'medical office build out durham nc',
    'duke university area medical construction',
    'medical construction duke medical center',
    'life sciences construction durham',
    'lab construction durham nc',
    'rtp life sciences construction',
    'durham county medical construction',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/medical-construction',
  },
  openGraph: {
    title: 'Medical & Healthcare Construction Charlotte NC | We Build',
    description:
      'Build or renovate your medical facility with our veteran-owned healthcare construction team. Medical offices, dental practices, urgent care clinics, surgical centers, life-sciences labs & more across Charlotte, Fort Mill, Lake Norman, Raleigh, Durham, and the Research Triangle.',
    url: 'https://webuildclt.com/services/medical-construction',
    type: 'website',
  },
};

const facilityTypes = [
  {
    icon: Building2,
    title: 'Medical Office Buildings',
    slug: 'medical-office-buildings',
    desc: 'Ground-up and renovation construction for multi-tenant and single-provider medical office buildings with exam rooms, labs, imaging suites, and administrative areas.',
    details:
      'Medical office buildings are the backbone of outpatient healthcare delivery in Charlotte, and constructing them demands a contractor who understands the intricate requirements that separate medical space from standard commercial offices. Our medical office builds include specialized HVAC systems with dedicated air handling units for each clinical zone, ensuring proper temperature control, humidity management, and air pressure differentials between clean and soiled utility rooms. We install medical gas piping systems for oxygen, nitrous oxide, vacuum, and compressed air distribution throughout examination and procedure rooms. Plumbing infrastructure includes backflow prevention devices, clinical sinks with hands-free operation, and dedicated waste lines for laboratory drainage. Electrical systems are designed with emergency power circuits for critical medical equipment, isolated ground receptacles for sensitive diagnostic machines, and generator backup integration. Our team coordinates closely with medical equipment vendors to ensure that structural reinforcement, electrical capacity, and plumbing rough-ins are precisely positioned before walls are closed, eliminating costly change orders during the finish phase. We have built medical office facilities across the Charlotte metro area ranging from 3,000 square foot solo practices to 40,000 square foot multi-specialty complexes.',
    cost: '$200-$400/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Dental Practice Construction',
    slug: 'dental-practice-construction',
    desc: 'Complete dental office build-outs including operatory rooms, sterilization areas, digital imaging suites, and patient-friendly reception areas.',
    details:
      'Dental office construction requires precise coordination of specialized infrastructure that most general contractors are not equipped to handle. Each operatory room needs dedicated plumbing for dental chairs including water supply, suction lines, compressed air, and nitrous oxide delivery. We install dental vacuum systems, air compressors, and amalgam separators in dedicated mechanical rooms with proper vibration isolation and sound attenuation so equipment noise does not disturb patients in treatment areas. Lead-lined walls and door frames are required for panoramic X-ray rooms and cone beam CT scanner suites, and our team installs the lead shielding with precision overlaps at seams and penetrations to meet radiation safety requirements set by the North Carolina Department of Health and Human Services. Sterilization rooms are designed with a one-directional workflow from dirty to clean, with dedicated ventilation to remove heat and moisture from autoclaves. We work with dental equipment suppliers including Patterson Dental, Henry Schein, and Benco Dental to ensure that cabinetry cutouts, utility connections, and mounting hardware are installed to manufacturer specifications. Our dental builds in the Charlotte area typically complete in 10 to 16 weeks from permit issuance, and we handle all Mecklenburg County permitting and inspections.',
    cost: '$175-$350/sq ft',
  },
  {
    icon: Heart,
    title: 'Urgent Care & Walk-In Clinics',
    slug: 'urgent-care-walk-in-clinics',
    desc: 'Fast-track urgent care facility construction designed for high patient volume, efficient workflow, and compliance with clinical care standards.',
    details:
      'Urgent care clinics are one of the fastest-growing healthcare facility types in the Charlotte market, driven by patient demand for convenient, accessible medical care outside of traditional hospital emergency departments. Building an urgent care clinic requires a design that prioritizes patient throughput while maintaining clinical standards for infection control, privacy, and equipment access. Our urgent care builds include triage areas with direct sight lines from the nursing station, multiple examination rooms sized for stretcher access, procedure rooms equipped for laceration repair and minor surgical interventions, on-site digital X-ray suites with lead-lined walls, and point-of-care laboratory areas with proper ventilation and chemical storage. Waiting rooms are designed with separate well and sick patient zones where possible, and HVAC systems maintain negative pressure in isolation rooms for airborne infection control. We understand the fast-track timeline requirements of urgent care operators who need to open locations quickly to capture market share. Our team has delivered urgent care build-outs in Charlotte within 12 to 16 weeks from lease execution by overlapping design, permitting, and early procurement phases. We coordinate with franchise and corporate urgent care operators on their prototype specifications while adapting each location to the unique conditions of the building shell.',
    cost: '$180-$325/sq ft',
  },
  {
    icon: Bone,
    title: 'Physical Therapy & Rehabilitation Centers',
    slug: 'physical-therapy-rehabilitation',
    desc: 'Therapeutic facility construction with open treatment areas, private treatment rooms, hydrotherapy pools, and specialized equipment foundations.',
    details:
      'Physical therapy and rehabilitation facilities present unique construction challenges that differ significantly from standard medical offices. The primary treatment area is typically a large, open gymnasium-style space requiring reinforced flooring to support heavy exercise equipment, parallel bars, and treatment tables. We install recessed floor drains and waterproof membrane systems for hydrotherapy areas and aquatic therapy pools, with dedicated water heating, filtration, and chemical treatment systems. Ceiling heights of 12 feet or more are often required to accommodate overhead pulley systems, suspension training equipment, and functional movement screening setups. Electrical infrastructure includes dedicated circuits for electrotherapy modalities such as ultrasound machines, electrical stimulation units, and laser therapy devices, with isolated ground circuits to prevent electromagnetic interference between sensitive diagnostic equipment. Flooring selection is critical in rehabilitation facilities. We install impact-absorbing rubber flooring in gym areas, slip-resistant tile in wet areas, and antimicrobial sheet vinyl in treatment rooms, all meeting ADA accessibility requirements for wheelchair and walker maneuverability. Private treatment rooms are constructed with enhanced sound insulation for patient privacy during manual therapy sessions. Our rehabilitation facility builds in Charlotte typically range from 2,500 to 15,000 square feet and complete in 10 to 14 weeks.',
    cost: '$150-$275/sq ft',
  },
  {
    icon: Dog,
    title: 'Veterinary Clinic Construction',
    slug: 'veterinary-clinic-construction',
    desc: 'Veterinary hospital and clinic builds with surgical suites, kennel areas, isolation rooms, and specialized drainage and ventilation systems.',
    details:
      'Veterinary clinic construction shares many of the technical requirements of human healthcare facilities while introducing unique challenges related to animal housing, containment, and specialized surgical environments. Our veterinary builds include surgical suites with dedicated air handling units providing HEPA-filtered laminar airflow, anesthesia gas scavenging systems to protect staff from waste gas exposure, and medical gas piping for oxygen delivery during surgical procedures. Kennel and boarding areas require specialized ventilation systems that maintain 15 to 20 air changes per hour to control odor and airborne pathogens, with separate exhaust systems for isolation kennels housing contagious animals. Flooring throughout the facility must be seamless, non-porous, and resistant to chemical disinfectants. We install epoxy-coated concrete with integral cove bases in kennel areas, surgical suites, and treatment rooms. Drainage systems include trench drains with removable grates in bathing and kennel areas, with all drain lines routed to prevent cross-contamination between the animal areas and public waiting spaces. We build dedicated radiology rooms with lead shielding for digital X-ray and dental radiograph equipment. Our veterinary clinic projects in the Charlotte area range from small companion-animal practices to large multi-doctor emergency and specialty hospitals, with construction timelines of 12 to 20 weeks depending on surgical suite complexity and whether overnight boarding is included.',
    cost: '$175-$350/sq ft',
  },
  {
    icon: Scissors,
    title: 'Specialty Surgical Centers (ASC)',
    slug: 'specialty-surgical-centers',
    desc: 'Ambulatory surgical center construction meeting stringent state licensing, Medicare certification, and AAAHC or Joint Commission accreditation requirements.',
    details:
      'Ambulatory surgical centers are among the most technically demanding healthcare construction projects, requiring compliance with North Carolina Department of Health and Human Services licensing standards, CMS Conditions for Coverage for Medicare certification, and accreditation standards from organizations such as AAAHC or The Joint Commission. Our ASC construction includes operating rooms built to Class C or higher surgical environment standards with HEPA-filtered laminar airflow ceilings, positive air pressure relative to adjacent corridors, minimum 20 air changes per hour, and temperature and humidity monitoring systems. Pre-operative and post-anesthesia care units are designed with nurse station sight lines to every patient bay, medical gas headwalls with oxygen, vacuum, and compressed air outlets, and emergency power on dedicated circuits with automatic transfer switches. Sterile processing departments follow a strict dirty-to-clean workflow with pass-through autoclaves, dedicated ventilation for chemical sterilants, and air pressure cascading from clean to dirty zones. We install backup generator systems with capacity to support full surgical operations during utility outages, including HVAC, lighting, medical gas alarms, and monitoring equipment. All construction materials in surgical suites are selected for cleanability, durability, and infection control. We use seamless sheet vinyl flooring with heat-welded seams, fiberglass-reinforced plastic wall panels, and monolithic ceiling systems that eliminate joints where bacteria can harbor. Our surgical center projects in the Charlotte region typically require 16 to 28 weeks of construction following an extended design and permitting phase.',
    cost: '$300-$600/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Healthcare Needs Assessment & Site Evaluation',
    desc: 'We begin with a comprehensive assessment of your clinical operations, patient volume projections, staffing requirements, and equipment needs. During the site visit, we evaluate the existing structure for suitability, examining floor load capacity for heavy medical equipment, ceiling heights for overhead surgical lights, electrical service capacity for imaging machines, and plumbing infrastructure for medical gas and clinical waste systems. If you are selecting between potential sites, we provide feasibility assessments for each location to help you make an informed real estate decision.',
  },
  {
    step: '02',
    title: 'Regulatory Research & Compliance Planning',
    desc: 'Healthcare construction is governed by a complex web of regulations that vary by facility type. We research the specific requirements for your project including North Carolina building code requirements for healthcare occupancies, ADA accessibility standards, HIPAA physical safeguard requirements for patient privacy, infection control construction guidelines, and any state licensing or accreditation standards that dictate construction specifications. This regulatory roadmap becomes the foundation of the design and informs every construction decision throughout the project.',
  },
  {
    step: '03',
    title: 'Medical Space Planning & Workflow Design',
    desc: 'Healthcare space planning is fundamentally different from commercial office planning because clinical workflow, infection control pathways, and patient experience must all be optimized simultaneously. We work with your architect and design team to create floor plans that separate clean and soiled utility paths, minimize patient travel distances between check-in and treatment areas, provide direct sight lines from nursing stations to patient areas, and comply with ADA clearance requirements in examination and procedure rooms.',
  },
  {
    step: '04',
    title: 'Medical Equipment Coordination',
    desc: 'Medical equipment drives the infrastructure requirements of every healthcare facility. Before finalizing construction drawings, we coordinate with your equipment vendors to obtain exact specifications for every major piece of medical equipment including imaging machines, surgical lights, dental chairs, sterilization units, and laboratory instruments. We document power requirements, data connections, plumbing needs, structural reinforcement, vibration isolation, and radiation shielding so that infrastructure is built precisely to support each piece of equipment on day one.',
  },
  {
    step: '05',
    title: 'Detailed Cost Estimate & Value Engineering',
    desc: 'We deliver a comprehensive, line-item estimate that accounts for every element of your medical facility build. Healthcare projects include cost categories that standard commercial projects do not, such as medical gas piping, lead shielding, infection control materials, specialized HVAC controls, emergency power systems, and regulatory compliance testing. If the initial estimate exceeds budget, we identify value engineering opportunities that reduce cost without compromising clinical functionality, patient safety, or regulatory compliance.',
  },
  {
    step: '06',
    title: 'Permitting & Regulatory Approvals',
    desc: 'We prepare and submit all permit applications to Mecklenburg County or the relevant jurisdiction, including building, mechanical, electrical, plumbing, and fire alarm permits. For facilities that require state licensing such as ambulatory surgical centers, we coordinate with the North Carolina Division of Health Service Regulation on construction plan reviews. We manage all plan review comments and corrections to keep the permitting timeline on track, and we schedule pre-construction meetings with inspectors when the project involves specialized systems such as medical gas or radiation shielding.',
  },
  {
    step: '07',
    title: 'Infection Control Risk Assessment (ICRA)',
    desc: 'Before construction begins in or adjacent to any occupied healthcare facility, we develop and implement an Infection Control Risk Assessment. The ICRA classifies the construction area by risk level and prescribes containment measures including negative air pressure barriers, HEPA-filtered air scrubbers, sealed dust containment walls, dedicated construction entrances separate from patient areas, and debris removal protocols that prevent contamination of clinical spaces. Our team is trained in ICRA Class IV containment procedures required when construction occurs adjacent to operating rooms, sterile processing areas, or immunocompromised patient zones.',
  },
  {
    step: '08',
    title: 'Construction Phase with Healthcare Protocols',
    desc: 'Construction proceeds with heightened protocols specific to healthcare environments. Medical gas piping is installed using cleaned-for-oxygen-service copper tubing with nitrogen-purged brazing to prevent interior oxidation. Lead shielding is installed with documented overlap dimensions at every seam and penetration. HVAC ductwork is sealed and capped during construction to prevent contamination. Electrical rough-in includes isolated ground circuits, emergency power circuits, and nurse call system wiring. We provide weekly progress reports and coordinate all work to minimize disruption to any adjacent occupied clinical areas.',
  },
  {
    step: '09',
    title: 'Systems Testing & Commissioning',
    desc: 'Healthcare facilities require extensive systems testing beyond standard commercial construction inspections. We coordinate medical gas certification testing by a qualified third-party testing agency, verifying purity, flow rates, and alarm functionality at every outlet. HVAC commissioning confirms air pressure relationships, temperature and humidity ranges, and air change rates in every clinical zone. Emergency power systems are tested under full load conditions. Fire alarm and suppression systems are tested and certified. Radiation shielding in X-ray and CT rooms is surveyed by a qualified medical physicist before the facility can receive imaging equipment.',
  },
  {
    step: '10',
    title: 'Final Inspection, Handoff & Warranty',
    desc: 'We coordinate final building inspections with Mecklenburg County code officials and any required state or accreditation agency inspections. Your completed facility is delivered with comprehensive close-out documentation including as-built drawings, medical gas certification reports, HVAC commissioning reports, equipment warranties, radiation survey reports, and maintenance manuals for all building systems. Our one-year workmanship warranty covers all construction. We remain available for any post-construction adjustments as you begin clinical operations and identify fine-tuning needs during the first weeks of patient care.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Our military background instills discipline, accountability, and an unwavering commitment to delivering on every promise. In healthcare construction, where patient safety depends on precise execution, military discipline is not just a value statement but a competitive advantage that translates directly into higher quality construction and fewer errors on the job site.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience, with deep specialization in healthcare facilities that demand precision engineering and strict regulatory compliance. We have encountered every type of medical construction challenge, from unexpected structural conditions that affect imaging equipment placement to complex medical gas routing through existing buildings, and we know how to solve problems before they become costly delays.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve healthcare providers throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, and the Lake Norman corridor. Our dual-state licensing is particularly valuable for healthcare systems with facilities on both sides of the state line, providing a single trusted contractor relationship across all locations.',
  },
  {
    icon: Zap,
    title: 'Minimal Patient Care Disruption',
    desc: 'Healthcare facilities cannot simply close for renovations. Patients need care, and clinical operations must continue. We specialize in phased construction with ICRA-compliant containment that allows your facility to remain operational during renovation and expansion projects. Our team plans construction sequences to isolate work zones from patient areas, schedules the most disruptive work during off-hours, and maintains strict infection control barriers throughout the entire construction period.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our healthcare projects. Healthcare facilities consume more energy per square foot than almost any other building type due to intensive HVAC requirements, 24-hour operations, and energy-hungry medical equipment. We specify energy-efficient mechanical systems, LED surgical and examination lighting, low-VOC materials that support indoor air quality in clinical environments, and water-conserving fixtures that reduce operating costs over the life of your facility.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Healthcare Market Knowledge',
    desc: 'Charlotte is one of the fastest-growing healthcare markets in the Southeast, and we understand the local landscape. We know which Mecklenburg County inspectors specialize in healthcare facility reviews, typical permitting timelines for medical projects, local subcontractor capabilities for specialized systems like medical gas and radiation shielding, and the material lead times that affect healthcare construction schedules in this region. This local knowledge helps us give you accurate estimates and realistic schedules from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build healthcare client receives weekly progress reports, a dedicated project manager as their single point of contact, and immediate notification of any issues that could affect timeline, budget, or regulatory compliance. We understand that healthcare construction decisions often involve clinical staff, administrators, equipment vendors, and regulatory consultants, and we keep all stakeholders informed so that decisions are made quickly and the project stays on track.',
  },
];

const costTiers = [
  {
    type: 'Basic Medical Office Renovation',
    range: '$150-$225/sq ft',
    desc: 'Cosmetic refresh of an existing medical office including new flooring, paint, updated lighting, reception desk replacement, and minor layout modifications. Suitable for practices updating their patient-facing spaces without changing clinical infrastructure.',
  },
  {
    type: 'Standard Medical Office Build-Out',
    range: '$200-$325/sq ft',
    desc: 'Full medical office construction from shell condition including exam rooms, nursing stations, reception area, lab space, standard HVAC with clinical air handling, medical gas rough-ins for oxygen and suction, and ADA-compliant restrooms. The most common scope for Charlotte-area physician practices.',
  },
  {
    type: 'Dental Practice Build-Out',
    range: '$175-$350/sq ft',
    desc: 'Complete dental office construction including operatory rooms with chair utilities, sterilization suite, panoramic X-ray room with lead shielding, dental vacuum and compressor systems, nitrous oxide delivery, and patient-friendly reception and waiting areas.',
  },
  {
    type: 'Urgent Care / Walk-In Clinic',
    range: '$180-$325/sq ft',
    desc: 'Urgent care facility build-out including triage area, multiple exam rooms sized for stretcher access, digital X-ray suite with lead-lined walls, point-of-care lab area, isolation room with negative pressure HVAC, and high-volume waiting room design.',
  },
  {
    type: 'Physical Therapy / Rehabilitation',
    range: '$150-$275/sq ft',
    desc: 'Rehabilitation facility construction including open gymnasium treatment area with reinforced flooring, private treatment rooms, hydrotherapy area with waterproofing, specialized electrical for therapeutic equipment, and ADA-accessible layout throughout.',
  },
  {
    type: 'Veterinary Clinic',
    range: '$175-$350/sq ft',
    desc: 'Veterinary hospital construction including surgical suite with anesthesia gas scavenging, kennel areas with high air-change ventilation, isolation rooms, bathing stations with trench drains, radiology room with lead shielding, and seamless epoxy flooring throughout clinical areas.',
  },
  {
    type: 'Ambulatory Surgical Center (ASC)',
    range: '$300-$600/sq ft',
    desc: 'Full ambulatory surgical center construction meeting state licensing and accreditation standards. Includes HEPA-filtered operating rooms with laminar airflow, sterile processing department, pre-op and PACU bays, medical gas systems, emergency generator, and all infection control construction requirements.',
  },
];

const faqs = [
  {
    question: 'Does We Build provide medical construction in Raleigh NC and the Research Triangle?',
    answer:
      'Yes. We Build delivers medical office construction, dental practice build-outs, urgent care construction, and healthcare facility renovations throughout Raleigh, Cary, Morrisville, North Hills, Brier Creek, Research Triangle Park, and greater Wake County. Raleigh medical projects leverage our experience with HIPAA-compliant design, infection control, medical gas systems, and Wake County permitting — including medical and dental suite fit-outs in the Rex Healthcare corridor, Cameron Village / Village District, North Hills, and the Raleigh medical-campus-adjacent markets. Call (980) 471-1745 for a free Raleigh medical construction consultation.',
  },
  {
    question: 'Does We Build handle medical and life-sciences construction in Durham NC?',
    answer:
      'Yes. Durham is one of the most active medical and life-sciences construction markets in the Southeast, anchored by Duke University Medical Center and the life-sciences economy in Research Triangle Park. We Build provides medical office build-outs and renovations near Duke Medical Center and along the Ninth Street / Erwin Road corridor, dental practice construction throughout Durham, urgent care and specialty clinic construction, and life-sciences / lab build-outs for biotech and pharmaceutical tenants on the Durham County side of RTP. Life-sciences work involves specialized electrical capacity, redundant HVAC for lab and clean-room environments, chemical-resistant finishes, biosafety coordination, and tight commissioning timelines — and we coordinate directly with corporate facilities teams and third-party commissioning agents to pass qualification the first time.',
  },
  {
    question: 'What healthcare construction regulations apply in Charlotte, NC?',
    answer:
      'Healthcare construction in Charlotte is governed by multiple overlapping regulatory frameworks. The North Carolina State Building Code adopts the International Building Code with state amendments that include specific requirements for healthcare occupancies including Group I-2 (hospitals, surgical centers with overnight stays) and Group B (medical offices, outpatient clinics). Mecklenburg County Code Enforcement administers local permitting and inspections. Facilities that require state licensing, such as ambulatory surgical centers, must also comply with construction standards set by the North Carolina Division of Health Service Regulation, which conducts plan reviews and pre-occupancy inspections. Medicare-certified facilities must meet CMS Conditions for Coverage. Additionally, the ADA establishes accessibility requirements, and OSHA regulates workplace safety including radiation protection and chemical exposure limits. Our team navigates all of these regulatory layers as part of every healthcare project, ensuring your facility meets every applicable requirement before opening for patient care.',
  },
  {
    question: 'How does HIPAA affect medical office construction and layout design?',
    answer:
      'HIPAA requires covered entities to implement physical safeguards that protect patient health information. In construction, this translates to specific design decisions integrated from the earliest planning stages. Examination rooms and consultation areas require sound-attenuating wall assemblies, typically STC 50 or higher, to prevent conversations from being overheard in adjacent rooms or corridors. Check-in and registration counters need privacy barriers and spatial separation so that one patient cannot overhear another patient providing personal health information. Medical records storage areas, whether physical or electronic server rooms, require restricted access with lockable doors and access control systems. Computer monitor positioning must be planned so that patient information displayed on screens is not visible to unauthorized individuals in waiting rooms or corridors.',
  },
  {
    question: 'What infection control requirements apply to medical construction projects?',
    answer:
      'Infection control in healthcare construction operates on two levels. First, the Infection Control Risk Assessment or ICRA governs construction activity that occurs in or adjacent to occupied healthcare facilities. The ICRA classifies construction zones by risk level from Class I through Class IV and prescribes containment measures ranging from basic dust control to full negative-pressure sealed barriers with HEPA filtration and dedicated construction entrances. Second, the finished facility itself must incorporate infection control design principles. These include antimicrobial surface materials in clinical areas, hands-free plumbing fixtures to reduce touch transmission, HVAC systems that maintain appropriate air pressure relationships between clean and soiled areas, minimum air change rates in procedure rooms and isolation areas, and seamless flooring with integral cove bases that eliminate joints where microorganisms can harbor. Sterilization and clean supply rooms must maintain positive air pressure relative to corridors, while soiled utility rooms and isolation rooms require negative pressure. We implement both levels of infection control on every healthcare project.',
  },
  {
    question: 'How do you coordinate medical equipment installation with construction?',
    answer:
      'Medical equipment coordination is one of the most critical elements of healthcare construction and a common source of costly change orders when handled incorrectly. Our approach begins during the design phase when we obtain detailed specification sheets from every medical equipment vendor, documenting power requirements including voltage, amperage, and phase configuration, plumbing connections, data and network requirements, structural floor loading, vibration sensitivity, heat output affecting HVAC design, and physical dimensions including clearance zones for operation and maintenance access. We create an equipment coordination matrix that maps every piece of equipment to its infrastructure requirements and tracks procurement lead times, delivery dates, and installation sequences. Heavy equipment like MRI machines, CT scanners, and dental CBCT units often require structural reinforcement, vibration isolation pads, and dedicated electrical circuits that must be installed during the rough-in phase long before the equipment arrives. We schedule equipment vendor installation visits in the construction timeline so that vendors arrive to find their connections ready, tested, and clearly labeled.',
  },
  {
    question: 'What is the timeline for building a medical office in Charlotte?',
    answer:
      'Medical office construction timelines in Charlotte depend on facility type, size, and complexity. A standard medical office build-out of 3,000 to 6,000 square feet from shell condition typically takes 14 to 20 weeks from permit issuance. Dental offices of similar size take 10 to 16 weeks. Urgent care clinics require 12 to 16 weeks. Physical therapy facilities take 10 to 14 weeks. Ambulatory surgical centers are the most complex at 16 to 28 weeks of construction. Add 4 to 8 weeks before construction for design development, equipment coordination, and Mecklenburg County permitting. Total project duration from initial consultation to opening is typically 6 to 10 months for standard medical offices and 10 to 16 months for surgical centers. We provide a detailed schedule during the planning phase that accounts for long-lead equipment procurement, specialized subcontractor availability, and inspection milestones. Our team updates the schedule weekly during construction and notifies you immediately of any change that could affect your projected opening date.',
  },
  {
    question: 'Do medical facilities require special HVAC systems?',
    answer:
      'Yes, healthcare facilities require HVAC systems that are significantly more sophisticated than standard commercial systems. Medical facility HVAC must maintain specific air pressure relationships between rooms, with positive pressure in clean areas like operating rooms, sterile supply, and clean utility, and negative pressure in contaminated areas like isolation rooms, soiled utility, and decontamination. Minimum air change rates are mandated by code: operating rooms require 20 air changes per hour with 4 from outside air, examination rooms require 6 air changes per hour, and isolation rooms require 12 air changes per hour with full exhaust to the exterior. Temperature and humidity must be controlled within tight ranges, particularly in surgical suites where relative humidity between 30 and 60 percent is required to reduce electrostatic discharge risk and inhibit microbial growth. HEPA filtration is required in operating rooms and may be required in other high-risk areas depending on facility type and accreditation standards. All medical HVAC systems require a building automation system with monitoring and alarm capabilities so that pressure relationships and environmental conditions can be verified continuously.',
  },
  {
    question: 'What are medical gas systems and does my facility need them?',
    answer:
      'Medical gas systems deliver piped gases including oxygen, nitrous oxide, medical air, vacuum, and waste anesthetic gas evacuation to clinical areas through a network of copper piping, zone valves, alarm panels, and outlet stations. Any facility that administers supplemental oxygen, provides sedation or anesthesia, or operates suction equipment during clinical procedures benefits from a piped medical gas system rather than relying on portable cylinders. Dental offices typically require compressed air, vacuum, and nitrous oxide delivery to each operatory. Medical offices with procedure rooms need oxygen and vacuum outlets. Urgent care clinics require oxygen, vacuum, and medical air in treatment and procedure areas. Surgical centers require the full complement of medical gases in operating rooms, pre-op areas, and recovery areas. Medical gas piping must be installed by certified medical gas installers using cleaned-for-oxygen-service copper tubing, brazed with nitrogen purge to prevent interior oxidation. Every medical gas system must be tested and certified by a qualified third-party verifier before the facility can use the system for patient care. We coordinate medical gas design, installation, and certification as a standard element of our healthcare construction services.',
  },
  {
    question: 'How much does it cost to build a medical office in Charlotte, NC?',
    answer:
      'Medical office construction costs in Charlotte vary significantly by facility type, clinical complexity, and finish level. Basic medical office renovations that refresh an existing clinical space with cosmetic updates start around $150 per square foot. Standard medical office build-outs from shell condition, including exam rooms, clinical infrastructure, and professional-grade finishes, range from $200 to $325 per square foot. Dental practices with full operatory infrastructure cost $175 to $350 per square foot depending on the number of operatories and imaging equipment. Urgent care clinics range from $180 to $325 per square foot. The most expensive healthcare facilities are ambulatory surgical centers at $300 to $600 per square foot due to stringent regulatory requirements, advanced HVAC systems, medical gas infrastructure, emergency power systems, and premium infection-control materials. We provide detailed, line-item estimates after an initial site visit and equipment needs assessment. Our estimates break down every cost category so you can see exactly where your investment goes and make informed decisions about scope and finish level.',
  },
  {
    question: 'Can you renovate an existing medical facility while it remains open for patient care?',
    answer:
      'Yes, renovating occupied healthcare facilities is one of our core competencies. We develop a phased construction plan that isolates work zones from active patient care areas using sealed containment barriers, negative air pressure differential, HEPA-filtered air scrubbers, and dedicated construction entrances that are completely separate from patient and staff circulation paths. The Infection Control Risk Assessment or ICRA protocol governs the level of containment required based on the type of construction activity and the vulnerability of patients in adjacent areas. Class IV ICRA containment, the highest level, is required when construction occurs adjacent to operating rooms, sterile processing, immunocompromised patient areas, or other high-risk zones. We schedule the most disruptive work, including demolition, concrete cutting, and core drilling, during off-hours, weekends, or scheduled facility downtime. All construction workers entering the building follow infection control protocols including designated pathways, clean footwear, and hand hygiene.',
  },
  {
    question: 'What ADA requirements apply to healthcare facilities in Charlotte?',
    answer:
      'Healthcare facilities are subject to strict ADA accessibility requirements that exceed those for standard commercial spaces. The 2010 ADA Standards for Accessible Design require accessible entrances with automatic door operators, accessible routes throughout the facility with no steps or barriers, examination rooms that accommodate wheelchair transfers with clear floor space of at least 30 by 48 inches adjacent to the exam table, accessible diagnostic equipment, accessible restrooms with proper clearances and grab bar configurations, accessible reception counters with a lowered section at 36 inches maximum height, and compliant signage including tactile and Braille room identification. Parking lots must provide the required number of accessible spaces including van-accessible spaces with 8-foot access aisles. New construction must be fully compliant, and renovations that exceed a certain cost threshold trigger a path-of-travel obligation that requires accessibility improvements up to 20 percent of the renovation cost.',
  },
  {
    question: 'Do you build lead-lined rooms for X-ray and imaging equipment?',
    answer:
      'Yes, we construct lead-lined rooms for all types of medical and dental imaging equipment including conventional X-ray, panoramic dental X-ray, cone beam CT, fluoroscopy, and C-arm imaging. The amount of lead shielding required depends on the type and energy level of the imaging equipment, the occupancy of adjacent spaces, and the workload of the imaging room. A qualified medical physicist performs a shielding calculation that specifies the lead thickness required for each wall, floor, ceiling, door, and observation window based on these factors. We install lead sheet in continuous layers with minimum 2-inch overlaps at all seams and wrap lead around the perimeter of every penetration including electrical outlets, plumbing pipes, HVAC ducts, and door frames. Lead-lined doors with lead-glass observation windows are hung on heavy-duty frames and hinges rated for the additional weight. After construction, the medical physicist conducts a radiation survey to verify that shielding meets the design specifications before imaging equipment is installed and energized. We maintain detailed documentation of lead installation including thickness, overlap dimensions, and penetration protection details for your regulatory compliance files.',
  },
  {
    question: 'How does building a dental office differ from building a medical office in Charlotte?',
    answer:
      'Dental offices and medical offices share some construction requirements but differ in several important ways. Dental offices require compressed air and vacuum plumbing to each operatory, nitrous oxide delivery systems, specialized dental cabinetry with integrated plumbing and electrical connections, panoramic X-ray or CBCT imaging rooms with lead shielding, and heavy-duty floor drains for sterilization areas. Medical offices typically require more examination rooms, HIPAA-compliant acoustic separation, and potentially medical gas systems for oxygen delivery. Dental offices in Charlotte generally cost $175 to $350 per square foot compared to $200 to $325 for standard medical offices, though surgical dental suites approach the higher end of that range.',
  },
  {
    question: 'What Mecklenburg County permits are needed specifically for medical facility construction?',
    answer:
      'Medical facility construction in Mecklenburg County requires standard commercial building permits from Code Enforcement covering structural, mechanical, electrical, plumbing, and fire alarm work. Beyond standard permits, medical facilities often trigger additional reviews including fire marshal plan review for medical gas storage and piped systems, health department review for facilities with sterilization or laboratory functions, and NCDOT driveway permits for facilities on state-maintained roads. Ambulatory surgical centers require plan review by the NC Division of Health Service Regulation before construction begins and a pre-occupancy inspection before the facility can accept patients. We manage the complete permitting process and build all review timelines into the project schedule so there are no surprises.',
  },
  {
    question: 'How does medical construction cost in Charlotte compare to Raleigh or Atlanta?',
    answer:
      'Medical construction costs in Charlotte are generally 5 to 10 percent lower than Raleigh-Durham and 10 to 15 percent lower than Atlanta for comparable facility types. A standard medical office build-out costs $200 to $325 per square foot in Charlotte, compared to $220 to $350 in Raleigh and $235 to $375 in Atlanta. Charlotte benefits from a competitive subcontractor market, lower commercial lease rates that reduce total occupancy cost, and a growing healthcare workforce that supports strong patient volume from day one. These cost advantages make Charlotte an attractive market for physician groups and healthcare systems expanding their outpatient footprint across the Southeast.',
  },
];

export default function MedicalConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Medical & Healthcare Construction Charlotte NC',
            'Expert medical and healthcare construction in Charlotte, NC. Medical office buildings, dental practices, urgent care clinics, surgical centers, veterinary clinics, and physical therapy facilities. Veteran-owned, HIPAA-compliant layouts, infection control, medical gas systems. Licensed in NC & SC.',
            'https://webuildclt.com/services/medical-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Medical Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Medical & Healthcare Construction Charlotte NC"
        subtitle="Build your healthcare facility with Charlotte's veteran-owned construction team — specializing in medical offices, dental practices, surgical centers, and clinical environments"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Medical & Healthcare Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Medical & Healthcare Construction Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte has emerged as one of the Southeast&apos;s most dynamic healthcare markets, driven by
                the expansion of major health systems including Atrium Health, Novant Health, and the growing
                network of independent physician practices, dental groups, and specialty clinics that serve
                the region&apos;s rapidly growing population. The Charlotte metropolitan area adds tens of
                thousands of new residents each year, and every new household needs access to primary care
                physicians, dentists, urgent care clinics, and specialty providers. This growth has fueled
                unprecedented demand for new medical facility construction, healthcare office renovations, and
                clinical space expansions across Mecklenburg County, Union County, and the South Carolina
                border communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Building a healthcare facility is fundamentally different from standard{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>.
                Medical and dental facilities require specialized mechanical systems for infection control, air
                pressure management, and medical gas delivery. They demand strict compliance with healthcare
                building codes, ADA accessibility standards, HIPAA physical safeguard requirements, and
                potentially state licensing regulations for surgical and procedural environments. The materials
                selected for floors, walls, and ceilings must resist microbial growth, withstand aggressive
                chemical disinfection protocols, and maintain cleanability throughout decades of clinical use.
                Equipment coordination alone, ensuring that the infrastructure for imaging machines, surgical
                lights, dental chairs, and laboratory instruments is precisely positioned before walls close,
                requires a level of planning that most general contractors are not equipped to provide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience, including deep expertise in healthcare facility
                construction across the Charlotte metro area. We work closely with your architect and design
                team to integrate clinical workflow planning, regulatory compliance, and construction execution
                seamlessly. From medical office buildings and dental practices to urgent care clinics
                and ambulatory surgical centers, we build healthcare environments that support excellent patient
                care, meet every regulatory requirement, and stand up to the demanding operational conditions of
                clinical use. Licensed in both North Carolina and South Carolina, we
                serve healthcare providers in Charlotte,{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and
                surrounding communities.
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
              {[
                { icon: Activity, title: 'Healthcare Specialized', desc: 'We build medical facilities with the specialized infrastructure that clinical environments demand — medical gas, infection control HVAC, lead shielding, and HIPAA-compliant layouts.' },
                { icon: Clock, title: 'On-Time Openings', desc: 'Every week your facility is not open costs revenue and delays patient access. We deliver healthcare projects on schedule with detailed milestone tracking and proactive risk management.' },
                { icon: ShieldCheck, title: 'Regulatory Compliance', desc: 'We navigate the complex regulatory landscape of healthcare construction including building codes, ADA, HIPAA physical safeguards, infection control standards, and state licensing requirements.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to precision, safety, and accountability. In healthcare construction, where patient safety depends on exact execution, that discipline is a critical advantage.' },
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

      {/* Types of Healthcare Facilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Facility Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Medical & Healthcare Facilities We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every healthcare facility has unique clinical, regulatory, and operational requirements. We
              bring specialized experience to each facility type, from physician offices and dental practices
              to complex surgical centers that demand precision engineering and strict regulatory compliance.
            </p>
          </div>
          <div className="space-y-8">
            {facilityTypes.map((type) => (
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

      {/* Our Healthcare Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Healthcare Construction Process: 10 Steps from Assessment to Opening
            </h2>
            <p className="text-muted-foreground">
              Healthcare construction demands a structured, compliance-driven process that accounts for
              regulatory requirements, infection control protocols, medical equipment coordination, and
              clinical workflow optimization at every stage. Our 10-step process ensures nothing is
              overlooked and your facility opens on time, on budget, and fully compliant.
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
              Why Choose We Build for Your Healthcare Construction Project
            </h2>
            <p className="text-muted-foreground">
              Healthcare construction is not standard commercial construction. The wrong contractor can
              result in failed inspections, delayed openings, regulatory non-compliance, and facilities
              that do not support efficient clinical operations. Here is what sets We Build apart for
              medical and healthcare projects.
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

      {/* Healthcare Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Compliance & Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Healthcare Construction Compliance: Standards We Build To
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Healthcare facilities are among the most heavily regulated building types. We integrate
                compliance into every phase of design and construction so your facility passes inspections
                and meets accreditation standards without costly rework.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: 'HIPAA Physical Safeguards',
                  desc: 'We design layouts that protect patient health information through acoustic privacy in exam rooms and consultation areas with STC 50+ wall assemblies, visual privacy at check-in counters and computer workstations, restricted access to medical records storage with lockable doors and access control, and spatial separation that prevents patients from overhearing one another during registration. HIPAA compliance is built into the floor plan from day one, not added as an afterthought.',
                },
                {
                  icon: Accessibility,
                  title: 'ADA Accessibility',
                  desc: 'Healthcare facilities must exceed standard commercial ADA requirements. We construct accessible entrances with automatic operators, examination rooms with wheelchair transfer space, accessible diagnostic equipment clearances, restrooms with compliant clearances and grab bars, lowered reception counters, accessible parking with van-accessible spaces, and compliant wayfinding signage including tactile and Braille identification at every room. New construction is fully compliant, and renovations trigger path-of-travel improvements.',
                },
                {
                  icon: Wind,
                  title: 'Infection Control Materials & Finishes',
                  desc: 'Every material selected for a healthcare facility must support infection control. We specify seamless sheet vinyl flooring with heat-welded seams in clinical areas, antimicrobial paint and wall coverings, fiberglass-reinforced plastic wall panels in high-impact areas, monolithic ceiling systems in surgical environments, hands-free plumbing fixtures, and solid surface countertops with integral backsplashes that eliminate joints where microorganisms harbor. All materials are rated for resistance to hospital-grade chemical disinfectants.',
                },
                {
                  icon: ThermometerSun,
                  title: 'Air Pressure & HVAC Controls',
                  desc: 'Healthcare HVAC systems maintain critical air pressure relationships between clinical zones. Operating rooms and sterile supply areas maintain positive pressure to prevent contaminated air from entering. Isolation rooms, soiled utility rooms, and decontamination areas maintain negative pressure with exhaust to the exterior. We install building automation systems that monitor and alarm on pressure differentials, temperature ranges, humidity levels, and air change rates in every clinical zone, ensuring continuous compliance with ventilation standards.',
                },
                {
                  icon: Pipette,
                  title: 'Medical Gas Systems',
                  desc: 'We install piped medical gas systems including oxygen, nitrous oxide, medical air, vacuum, and waste anesthetic gas evacuation. All medical gas piping is installed by certified medical gas installers using cleaned-for-oxygen-service copper tubing with nitrogen-purged brazing. Zone valve boxes, alarm panels, and outlet stations are installed per NFPA 99 requirements. Every system is tested and certified by a qualified third-party verifier before the facility can use the system for patient care.',
                },
                {
                  icon: Flame,
                  title: 'Lead Shielding & Radiation Protection',
                  desc: 'We construct lead-lined rooms for all types of medical and dental imaging equipment. Lead sheet is installed in continuous layers with documented 2-inch minimum overlaps at seams and complete wrapping around every wall, floor, and ceiling penetration. Lead-lined doors with lead-glass observation windows are hung on heavy-duty rated hardware. A qualified medical physicist performs pre-construction shielding calculations and post-construction radiation surveys to verify compliance before imaging equipment is energized.',
                },
              ].map((item) => (
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
        </div>
      </section>

      {/* Healthcare Construction Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Medical & Healthcare Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Healthcare construction costs in Charlotte are higher than standard commercial construction
                due to specialized mechanical systems, infection control materials, regulatory compliance
                requirements, and medical equipment infrastructure. Below are typical cost ranges based on
                our recent healthcare projects in the Charlotte metro area. Every project is different, and
                we provide detailed, line-item estimates after an initial site visit and equipment needs
                assessment.
              </p>
            </div>
            <div className="space-y-4">
              {costTiers.map((item) => (
                <div key={item.type} className="p-6 bg-background rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{item.type}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">Factors That Affect Healthcare Construction Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Clinical complexity:</strong> Facilities with surgical suites, imaging rooms, or laboratory spaces require significantly more infrastructure than standard examination-room-based practices, increasing cost per square foot substantially.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Medical equipment requirements:</strong> Heavy imaging equipment requires structural reinforcement, vibration isolation, dedicated electrical circuits, and specialized cooling that add to the base construction cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Regulatory requirements:</strong> State-licensed facilities such as ambulatory surgical centers must meet additional construction standards that increase material specifications, testing requirements, and inspection timelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Infection control materials:</strong> Healthcare-grade flooring, antimicrobial wall finishes, seamless surfaces, and hands-free fixtures cost more than standard commercial materials but are essential for clinical environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Existing conditions:</strong> Renovating an older building for medical use may require asbestos abatement, electrical service upgrades, plumbing replacement, or structural reinforcement that adds to the project cost.</span>
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
                Medical & Healthcare Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte healthcare providers ask about medical
                facility construction, costs, timelines, compliance, infection control, and equipment
                coordination.
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
            <h2 className="text-3xl font-bold">Healthcare Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides, service pages, and articles for more information on medical and healthcare
              construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Including Medical Build-Outs', href: '/services/commercial-upfits', type: 'Service' },
              { title: 'Office Buildouts Charlotte NC', href: '/services/office-buildouts', type: 'Service' },
              { title: 'Tenant Improvements Charlotte NC', href: '/services/tenant-improvements', type: 'Service' },
              { title: 'Commercial Construction Services', href: '/services/commercial-construction', type: 'Service' },
              { title: 'ADA Compliance', href: '/services/ada-compliance', type: 'Service' },
              { title: 'Medical Office Setup Guide: Design, Compliance & Construction', href: '/guides/medical-office-setup-guide-charlotte', type: 'Guide' },
              { title: 'ADA Compliance Guide for Charlotte Business Owners', href: '/guides/ada-compliance-guide-charlotte-businesses', type: 'Guide' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{resource.type}</span>
                  <h3 className="font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    {resource.type === 'Guide' ? 'Read Guide' : 'Learn More'} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Build Your Healthcare Facility?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a new medical office, dental practice, urgent care clinic, surgical
            center, or veterinary hospital in Charlotte, We Build has the healthcare construction expertise,
            licenses, and local knowledge to deliver your project on time, within budget, and fully compliant
            with every regulatory requirement.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site visit and consultation. We serve healthcare providers in Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities across NC and SC.
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

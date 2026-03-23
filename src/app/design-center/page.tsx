import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Calendar,
  Palette,
  Users,
  Layers,
  Monitor,
  Building,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  HardHat,
  MapPin,
  Lightbulb,
  Ruler,
  Sparkles,
  Eye,
  DollarSign,
  ClipboardList,
  Home,
  Warehouse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design Center Charlotte NC | Construction Showroom & Material Selection',
  description:
    'Visit the We Build Design Center in Charlotte, NC. Browse flooring, countertops, cabinetry, tile, fixtures & lighting. Hands-on material selection for commercial & residential construction. By appointment. (562) 708-6616.',
  keywords: [
    'design center charlotte nc',
    'construction showroom charlotte',
    'material selection charlotte nc',
    'design build showroom charlotte',
    'flooring showroom charlotte nc',
    'countertop selection charlotte',
    'cabinet showroom charlotte nc',
    'tile showroom charlotte nc',
    'construction design center south charlotte',
    'builder showroom charlotte',
  ],
};

const showroomImages = [
  { src: '/images/showroom/lobby.jpg', alt: 'We Build Design Center lobby in Charlotte NC' },
  { src: '/images/showroom/lobby2.jpg', alt: 'Design Center lobby with material displays' },
  { src: '/images/showroom/bedroom.jpg', alt: 'Bedroom material selections and finishes' },
  { src: '/images/showroom/kitchen.jpg', alt: 'Kitchen countertop and cabinet displays' },
  { src: '/images/showroom/kitchen2.jpg', alt: 'Kitchen design materials and fixtures' },
  { src: '/images/showroom/lobby3.jpg', alt: 'Design Center showroom material wall' },
];

const materialCategories = [
  {
    icon: Layers,
    title: 'Flooring',
    description:
      'Our flooring display features hardwood, engineered wood, luxury vinyl plank (LVP), porcelain tile, natural stone, polished concrete samples, and commercial-grade carpet tile. You can see full-size samples side by side, compare colors under our calibrated lighting, and feel the textures underfoot. We carry options from leading manufacturers including Shaw, Mohawk, DalTile, and MSI, with price points ranging from budget-friendly LVP at $3 per square foot to premium wide-plank hardwood at $15 or more per square foot. Our design team will help you select flooring that matches your project type, traffic level, and maintenance expectations.',
  },
  {
    icon: Sparkles,
    title: 'Countertops',
    description:
      'Our countertop gallery includes quartz, granite, marble, quartzite, butcher block, solid surface, and laminate samples. You will find full slabs and large-format samples so you can see veining patterns and color variations as they appear at scale, not just on a two-inch chip. We partner with fabricators who serve the Charlotte market and can provide installed pricing during your selection appointment. Popular choices for Charlotte kitchens and bathrooms in 2025 and 2026 include white quartz with subtle veining, leathered granite for a matte finish, and quartzite for clients who want the look of marble with greater durability.',
  },
  {
    icon: Building,
    title: 'Cabinetry',
    description:
      'Our cabinet displays showcase door styles, wood species, finish options, and hardware pairings across multiple price tiers. You will see shaker, flat-panel, raised-panel, and beaded inset doors in maple, oak, cherry, and painted MDF. We display both framed and frameless cabinet construction so you understand the structural and aesthetic differences. Our cabinet partners include both semi-custom lines with four to six week lead times and fully custom shops that can match any specification. For commercial projects, we carry durable laminate casework built to withstand high-traffic environments like medical offices and break rooms.',
  },
  {
    icon: Palette,
    title: 'Tile & Backsplash',
    description:
      'Our tile selection covers ceramic, porcelain, glass, natural stone, cement, and metal mosaic options for backsplashes, shower surrounds, accent walls, and flooring. We display tiles in full pattern layouts so you can see how a herringbone, subway, stacked, or basketweave pattern actually looks before committing. Our collection includes everything from classic white subway tile to large-format porcelain slabs that mimic natural stone with minimal grout lines. For commercial projects, we carry slip-rated porcelain tiles that meet ADA and building code requirements for wet areas, lobbies, and restrooms.',
  },
  {
    icon: Monitor,
    title: 'Fixtures & Plumbing',
    description:
      'Our fixture display includes faucets, sinks, shower systems, bathtubs, and toilets from brands like Kohler, Moen, Delta, and Brizo. You can operate the faucets to feel the handle action, see the spray patterns, and compare chrome, brushed nickel, matte black, brushed gold, and oil-rubbed bronze finishes in person. For commercial projects, we display ADA-compliant fixtures, touchless faucets, and commercial-grade hardware rated for high-use environments. Seeing fixtures in person prevents the disappointment that comes from ordering based on online photos alone.',
  },
  {
    icon: Ruler,
    title: 'Hardware & Accessories',
    description:
      'Cabinet hardware, door handles, hinges, drawer slides, and decorative accessories are displayed on functional boards so you can feel the weight, test the action, and see how each piece looks against different cabinet door styles and finishes. We carry hardware in every popular finish including satin brass, polished chrome, matte black, brushed nickel, and antique bronze. Small details like hardware can define the character of a room, and choosing in person ensures the look and feel matches your vision. We also display functional accessories like pull-out organizers, lazy Susans, and soft-close hinges.',
  },
  {
    icon: Lightbulb,
    title: 'Paint & Wall Finishes',
    description:
      'Our paint station features large-format color samples from Benjamin Moore and Sherwin-Williams displayed under both natural and artificial lighting conditions. You can see how a paint color shifts between daylight, warm LED, and cool fluorescent light, which is essential for making confident selections. We also display wallpaper, accent wall materials, textured finishes, and wainscoting options. For commercial spaces, we carry high-durability paint lines rated for washability and scuff resistance, along with commercial wallcovering that meets fire code requirements for Type I and Type II rated applications.',
  },
  {
    icon: Eye,
    title: 'Lighting',
    description:
      'Our lighting area displays pendant lights, recessed fixtures, under-cabinet LED strips, chandeliers, sconces, and track lighting systems. You can see how different fixtures cast light, compare color temperatures from warm 2700K to cool 4000K, and evaluate how fixture style pairs with your overall design direction. Lighting is one of the most impactful design decisions in any space, and seeing fixtures illuminated in person is completely different from browsing product photos online. For commercial projects, we display energy-efficient LED panels, emergency lighting, and code-compliant exit fixtures.',
  },
];

const selectionSteps = [
  {
    step: 1,
    title: 'Schedule Your Appointment',
    description:
      'Contact us by phone at (562) 708-6616 or through our website to book your Design Center appointment. We schedule appointments Monday through Friday during business hours and can accommodate evening or weekend visits for clients with scheduling constraints. Each appointment is private, meaning you will have the full attention of our design team without competing for space with other clients.',
  },
  {
    step: 2,
    title: 'Initial Consultation',
    description:
      'Your first visit begins with a conversation about your project. We review your floor plans, discuss your style preferences, establish a material budget, and identify any code or performance requirements specific to your project type. This conversation ensures that every material recommendation we make is appropriate for your space, use case, and budget.',
  },
  {
    step: 3,
    title: 'Guided Showroom Tour',
    description:
      'Your design consultant walks you through the showroom, introducing you to materials organized by category. You will see flooring, countertops, cabinetry, tile, fixtures, hardware, paint, and lighting. Rather than overwhelming you with every option, we curate a focused selection based on the style direction and budget discussed during your consultation.',
  },
  {
    step: 4,
    title: 'Material Sampling',
    description:
      'For materials you are considering, we pull full-size samples so you can see them together. We place flooring samples next to countertop samples next to cabinet doors so you can evaluate how the combination works as a complete palette. This step prevents the common mistake of selecting materials individually that clash when installed together.',
  },
  {
    step: 5,
    title: 'Pricing & Budget Review',
    description:
      'As you narrow your selections, we provide installed pricing for each material so you can make informed decisions. If your selections exceed your material budget, we identify alternatives that achieve a similar look at a lower price point. Transparency in pricing at this stage prevents budget surprises during construction.',
  },
  {
    step: 6,
    title: '3D Visualization',
    description:
      'For clients who want to see their selections in context before committing, we offer 3D rendering services. Our team can create photorealistic renderings of your kitchen, bathroom, office, or commercial space showing your exact material selections installed in your actual floor plan. This service is especially valuable for large-scale projects where material decisions represent a significant investment.',
  },
  {
    step: 7,
    title: 'Final Selections & Ordering',
    description:
      'Once you have finalized your material selections, we document every choice with product numbers, colors, finishes, and quantities. We place orders with our vendor partners, coordinate delivery timelines with your construction schedule, and ensure materials arrive on site when they are needed, not weeks before or after.',
  },
  {
    step: 8,
    title: 'Installation Coordination',
    description:
      'Material selection does not end at the showroom. Our construction team installs your selected materials as part of your overall project, ensuring seamless coordination between the design decisions made in our showroom and the craftsmanship on your job site. If any material issues arise during installation, your design consultant and project manager work together to resolve them quickly.',
  },
];

const benefits = [
  {
    icon: Eye,
    title: 'See Before You Buy',
    description:
      'Online photos and small swatches do not tell the full story. In our Design Center, you see full-size samples under calibrated lighting. You touch the texture of a quartz countertop, feel the grain of a hardwood floor, and see how a cabinet door finish looks next to your tile selection. This hands-on experience prevents the disappointment that comes from making material decisions based on screen colors and two-inch samples.',
  },
  {
    icon: DollarSign,
    title: 'Avoid Costly Change Orders',
    description:
      'Change orders are one of the biggest sources of construction cost overruns. When clients select materials during construction rather than before, delays and price increases are inevitable. Our Design Center lets you make every material decision before the first nail is driven, which means fewer surprises, fewer delays, and a final cost that matches your approved budget.',
  },
  {
    icon: Clock,
    title: 'Streamlined Decision Making',
    description:
      'Without a Design Center, material selection means visiting multiple showrooms across Charlotte, collecting individual samples, and trying to compare them at home under different lighting. Our showroom consolidates everything in one location. You can compare flooring, countertops, cabinets, tile, and fixtures side by side in a single appointment, cutting weeks off the decision-making timeline.',
  },
  {
    icon: Users,
    title: 'Expert Design Guidance',
    description:
      'Our design consultants have years of experience helping clients make material selections for both commercial and residential construction projects in Charlotte. They understand which materials perform best in specific applications, which combinations create cohesive designs, and which options deliver the best value at each price point. Their guidance prevents expensive mistakes and helps you achieve a result that looks intentional and professional.',
  },
  {
    icon: Palette,
    title: 'Real Material Samples',
    description:
      'We maintain full-size samples of every material we recommend, not miniature chips or digital images. You can lay a 12-by-24-inch tile sample on a countertop slab, place a cabinet door against a flooring plank, and hold a faucet next to a sink basin. These real-world comparisons reveal details that no website or catalog can replicate, including how materials reflect light, how colors shift in different environments, and how textures feel to the touch.',
  },
  {
    icon: DollarSign,
    title: 'Budget Alignment',
    description:
      'Every material in our Design Center includes transparent pricing. As you make selections, you see the installed cost in real time. This means you can make trade-off decisions with full information, choosing to invest more in a statement countertop while selecting a value-tier flooring option, for example. Budget alignment during the selection phase prevents the painful realization mid-construction that your material choices have exceeded your total project budget.',
  },
  {
    icon: ClipboardList,
    title: 'Complete Documentation',
    description:
      'When your selections are finalized, we provide a detailed specification sheet listing every product, color, finish, model number, and quantity. This document serves as the definitive reference for your construction team and eliminates the ambiguity that causes installation errors. If a material needs to be reordered or matched in the future, the specification sheet makes it straightforward.',
  },
  {
    icon: Shield,
    title: 'Warranty & Performance Confidence',
    description:
      'Our design team only recommends materials backed by manufacturer warranties and proven performance in real-world applications. We know which products hold up in Charlotte humidity, which flooring options resist the red clay that gets tracked into Carolina homes, and which commercial-grade materials meet the durability requirements for high-traffic business environments. Every recommendation is grounded in practical experience, not just catalog descriptions.',
  },
];

const designTrends = [
  {
    title: 'Warm Minimalism',
    description:
      'Clean lines paired with warm wood tones and natural textures. Think white oak cabinetry, warm beige quartz countertops, matte brass hardware, and plaster-finish walls. This style replaces the cool gray trend that dominated Charlotte homes for the past decade with an approachable warmth that feels both modern and inviting.',
  },
  {
    title: 'Large-Format Porcelain',
    description:
      'Porcelain slabs and large-format tiles (24-by-48 inches and larger) are replacing traditional tile sizes in both residential and commercial projects. Fewer grout lines create a cleaner, more expansive look. Book-matched porcelain slabs that mimic marble are especially popular for bathroom feature walls and commercial lobby surfaces.',
  },
  {
    title: 'Matte & Leathered Finishes',
    description:
      'Polished surfaces are giving way to matte, leathered, and honed finishes on countertops, fixtures, and hardware. Leathered granite hides fingerprints and water spots better than polished surfaces while adding tactile depth. Matte black and brushed brass fixtures continue to dominate Charlotte design selections.',
  },
  {
    title: 'Statement Lighting',
    description:
      'Oversized pendants, sculptural chandeliers, and integrated LED architectural lighting are replacing basic recessed can layouts. Charlotte homeowners and business owners are investing in lighting as a design element rather than just a functional necessity. Layered lighting with dimmers gives spaces flexibility for different uses throughout the day.',
  },
  {
    title: 'Performance Materials',
    description:
      'Durability is no longer sacrificed for aesthetics. Porcelain tile that looks like marble but resists staining, quartz that mimics natural stone without the maintenance, and luxury vinyl plank that is waterproof and scratch-resistant are all standard selections in Charlotte construction projects. Performance materials are especially important in the Carolina climate where humidity, red clay, and seasonal temperature swings challenge traditional materials.',
  },
  {
    title: 'Biophilic Design Elements',
    description:
      'Incorporating natural materials, live-edge wood, stone accent walls, and organic textures into interior spaces is a growing trend across both residential and commercial projects in Charlotte. Green walls, natural wood ceiling treatments, and stone water features create connections to nature that improve occupant comfort and well-being, an approach backed by research and increasingly expected in modern commercial environments.',
  },
];

const faqs = [
  {
    question: 'Where is the We Build Design Center located?',
    answer:
      'Our Design Center is located at 14330 S Lakes Drive, Charlotte, NC 28273, in the South Charlotte area. We are easily accessible from I-77 and I-485 and serve clients throughout the Charlotte metro area including Fort Mill, Lake Norman, and surrounding communities in North and South Carolina.',
  },
  {
    question: 'Do I need an appointment to visit the Design Center?',
    answer:
      'Yes, all Design Center visits are by appointment only. This ensures you receive private access to the showroom and the undivided attention of our design consultant during your visit. We schedule appointments Monday through Friday during business hours and can accommodate evening or weekend visits for clients with scheduling needs. Call (562) 708-6616 or use our online contact form to book your appointment.',
  },
  {
    question: 'How long does a typical Design Center appointment take?',
    answer:
      'A first-time Design Center visit typically takes 1.5 to 2.5 hours depending on the scope of your project. Smaller projects like a bathroom renovation may require only one appointment. Larger projects like a full custom home or commercial build-out may require two or three visits to finalize all material selections. We never rush the process because confident selections prevent costly changes during construction.',
  },
  {
    question: 'Is the Design Center only for We Build construction clients?',
    answer:
      'Our Design Center is primarily for clients who are building with We Build, as our design-build process integrates material selection with construction planning and scheduling. However, interior designers, architects, and builders are welcome to visit by appointment to explore our product offerings and discuss partnership opportunities. Contact us to learn more about professional access.',
  },
  {
    question: 'What materials can I see in the Design Center?',
    answer:
      'Our Design Center features full-size samples of flooring (hardwood, LVP, tile, carpet), countertops (quartz, granite, marble, quartzite, solid surface), cabinetry (multiple door styles, wood species, and finishes), tile and backsplash options, plumbing fixtures and faucets, cabinet hardware, paint colors, lighting fixtures, and decorative accessories. We carry products from leading manufacturers and update our displays regularly to reflect current availability and trends.',
  },
  {
    question: 'Can I take material samples home from the Design Center?',
    answer:
      'Yes, we provide take-home samples for many of our materials so you can see them in your own space under your own lighting conditions. For larger samples like full flooring planks or countertop sections, we can arrange temporary loans with a refundable deposit. Seeing materials in your actual environment is one of the best ways to confirm your selections before placing orders.',
  },
  {
    question: 'Do you offer virtual tours of the Design Center?',
    answer:
      'Yes, we offer a full Matterport 3D virtual tour of our Design Center that you can access from any device with an internet connection. The virtual tour lets you explore the showroom remotely, navigate through different display areas, and get a sense of our material offerings before scheduling an in-person visit. While the virtual tour is a great starting point, we recommend an in-person visit for final material selections since digital screens cannot fully replicate color, texture, and finish characteristics.',
  },
  {
    question: 'How does the Design Center fit into the construction process?',
    answer:
      'Material selection at our Design Center happens during the pre-construction and design phase of your project, before construction begins. This timing is intentional. When all materials are selected and ordered before construction starts, your project team can plan installation sequences, coordinate delivery schedules, and avoid the delays that occur when material decisions are made mid-construction. Our design-build approach means your design consultant and project manager work together to ensure selections, budgets, and timelines are aligned.',
  },
  {
    question: 'Do you offer 3D renderings of my material selections?',
    answer:
      'Yes, we offer 3D rendering services that show your material selections applied to your actual floor plan. These photorealistic renderings let you see exactly how your countertops, flooring, cabinetry, tile, and fixtures will look together in your space before any materials are ordered or installed. This service is especially valuable for kitchens, bathrooms, and commercial spaces where multiple materials intersect and the visual impact of your selections matters.',
  },
  {
    question: 'What is the cost to visit the Design Center?',
    answer:
      'There is no charge to visit our Design Center when you are a We Build construction client. The design consultation and material selection process is included as part of our design-build service. For clients who are exploring whether We Build is the right fit for their project, an initial consultation visit is complimentary. Our goal is to help you make confident material decisions that result in a finished space you love.',
  },
];

export default function DesignCenterPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Design Center Charlotte NC"
        subtitle="Construction showroom and material selection for commercial and residential projects. See, touch, and choose your finishes before construction begins."
        backgroundImage="/images/design-center-hero.jpg"
      />

      {/* Breadcrumbs + Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Design Center' },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 mt-8">
            {/* Main Content */}
            <div className="article-prose">
              <h2 id="overview">Construction Showroom & Material Selection in Charlotte, NC</h2>

              <p>
                Choosing materials for a construction project is one of the most important decisions you will make, and it is one of the most difficult to get right without seeing and touching the real thing. Online photos distort colors. Small swatches do not tell you how a material looks at scale. Catalog descriptions cannot convey texture, weight, or the way light plays across a surface. That is why We Build operates a dedicated Design Center in South Charlotte where our clients make every material selection in person, with expert guidance, before construction begins.
              </p>

              <p>
                The We Build Design Center is located at our office at 14330 S Lakes Drive, Charlotte, NC 28273. It is a private showroom, open by appointment, where you can browse curated collections of flooring, countertops, cabinetry, tile, fixtures, hardware, paint, and lighting from leading manufacturers. Whether you are building a <Link href="/services/custom-home-builder">custom home in South Charlotte</Link>, planning a <Link href="/services/commercial-construction">commercial construction project</Link>, designing a <Link href="/services/commercial-upfits">commercial upfit for a new tenant</Link>, or adding a <Link href="/services/residential-additions">residential addition to your existing home</Link>, our Design Center is where your vision takes shape.
              </p>

              <p>
                What makes our Design Center different from a typical retail showroom is the integration with our construction process. We are not selling materials off the shelf. We are helping you select the exact materials that our construction team will install in your project. Your design consultant and your project manager work together, which means material selections are always aligned with your construction budget, timeline, and technical requirements. This <Link href="/services/design-build">design-build approach</Link> eliminates the disconnect that happens when clients buy materials independently and hope they work with their contractor&rsquo;s installation methods and schedule.
              </p>

              <p>
                We Build is a veteran and family-owned construction company with over 60 years of combined experience and active general contractor licenses in both North Carolina and South Carolina. We are proud members of the U.S. Green Building Council (USGBC), and sustainable material options are part of every design conversation. Our Design Center serves clients throughout the Charlotte metro area, including <Link href="/areas/south-charlotte">South Charlotte</Link>, <Link href="/areas/fort-mill-sc">Fort Mill, SC</Link>, <Link href="/areas/lake-norman">Lake Norman</Link>, Ballantyne, Indian Land, and surrounding communities.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Quick Stats */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Design Center Info</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">14330 S Lakes Dr, Charlotte NC 28273</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">By appointment only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Mon-Fri business hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Licensed in NC &amp; SC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardHat className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Veteran &amp; family-owned</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Monitor className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">3D rendering available</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Book a Visit</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Schedule your private Design Center appointment and start selecting materials for your project.
                  </p>
                  <Button variant="secondary" className="w-full mb-3" asChild>
                    <Link href="/contact">Schedule Appointment</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href="tel:5627086616">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      (562) 708-6616
                    </a>
                  </Button>
                </div>

                {/* Virtual Tour Link */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Virtual Tour</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our Design Center from anywhere with our Matterport 3D virtual tour.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="mr-2 h-4 w-4" aria-hidden="true" />
                      Launch Virtual Tour
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* About Our Design Center */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="about">About Our Design Center</h2>

            <p>
              The We Build Design Center occupies a dedicated space within our South Charlotte office, designed specifically for client material selection appointments. When you walk in, you enter a professional showroom environment with materials organized by category and displayed at a scale that lets you evaluate them realistically. This is not a warehouse with boxes stacked on shelves. It is a curated design environment where every product is presented the way it deserves to be seen.
            </p>

            <p>
              The showroom features vignettes, which are fully styled room setups, that show how materials work together in real living and working spaces. You will see complete kitchen displays with countertops installed on cabinetry, backsplash tile in place, fixtures mounted, and hardware attached. You will see bathroom layouts with shower tile, vanity countertops, and plumbing fixtures coordinated. These vignettes help you visualize combinations in context rather than imagining how separate samples might look when installed together.
            </p>

            <p>
              We also maintain a conference room within the Design Center for project planning meetings. This is where your design consultant, project manager, and any other team members such as architects or interior designers can sit down with you to review floor plans, discuss material options, and make decisions as a coordinated group. Having a dedicated meeting space adjacent to the showroom means you can walk from the conference table to the material displays and back, making the planning process efficient and collaborative.
            </p>

            <p>
              Every appointment at the We Build Design Center is private. We do not double-book clients or operate on a walk-in basis. When you are in the showroom, you have the full attention of your design consultant and the freedom to spend as much time as you need with the materials. This private access is especially important for clients making high-value decisions on custom homes, large-scale commercial projects, or renovations where the material budget represents a significant investment.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Our Showroom</span>
            <h2 className="mt-2 mb-4">Explore the We Build Design Center</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our curated showroom displays featuring materials from leading manufacturers, styled vignettes, and full-size samples you can see and touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden image-hover shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-16 bg-muted" id="materials-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Material Categories</span>
            <h2 className="mt-2 mb-4">What You&rsquo;ll Find in Our Design Center</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our showroom features curated selections across every material category you need for your construction project, from flooring and countertops to lighting and hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {materialCategories.map((category) => (
              <Card key={category.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection Process */}
      <section className="py-16 bg-background" id="process-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="selection-process">The Material Selection Process</h2>

            <p>
              Material selection at the We Build Design Center follows a structured process designed to make the experience efficient, enjoyable, and aligned with your construction timeline and budget. Here is what each step involves, from your first phone call through final installation.
            </p>

            <div className="process-steps">
              {selectionSteps.map((item) => (
                <div key={item.step} className="process-step">
                  <h3>
                    <span className="text-primary font-bold mr-2">Step {item.step}:</span>
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <p>
              This end-to-end process is one of the key advantages of working with a <Link href="/services/design-build">design-build contractor</Link>. When the team that helps you select materials is the same team that installs them, the result is a seamless experience from showroom to finished space.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16 bg-muted" id="virtual-tour-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-label">Explore Remotely</span>
            <h2 className="mt-2 mb-4">Virtual Tour of Our Design Center</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cannot visit in person? Our Matterport 3D virtual tour lets you walk through our Design Center from any device. Navigate through our showroom displays, explore material collections, and get a feel for the space before booking your appointment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                title="We Build Design Center Virtual Tour — Matterport 3D Walkthrough"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-4">
                The Matterport virtual tour provides a fully navigable 3D model of our Design Center. You can move through the space, look in any direction, zoom in on material displays, and explore at your own pace. The tour works on desktop computers, tablets, and smartphones. While the virtual tour is an excellent way to preview our showroom and plan your visit, we recommend an in-person appointment for final material selections. Digital screens cannot fully replicate the colors, textures, and finishes that you will experience when you see materials in person under our calibrated showroom lighting.
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Monitor className="mr-2 h-5 w-5" aria-hidden="true" />
                  Open Full Virtual Tour
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Design Center Matters */}
      <section className="py-16 bg-background" id="benefits-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">The Advantage</span>
            <h2 className="mt-2 mb-4">Why a Design Center Matters for Your Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated construction showroom is not a luxury. It is a practical tool that saves money, prevents mistakes, and produces better results for both commercial and residential projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" aria-hidden="true" />
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

      {/* Inline CTA */}
      <div className="container mx-auto px-4">
        <div className="inline-cta my-0 rounded-none md:rounded-lg md:my-8">
          <p>Ready to explore materials for your next construction project? Book your private Design Center appointment today.</p>
          <Link href="/contact">Schedule Your Visit <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>

      {/* Design Trends */}
      <section className="py-16 bg-muted" id="trends-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="design-trends">Design Trends in Charlotte for 2025&ndash;2026</h2>

            <p>
              Charlotte&rsquo;s construction and design market reflects both national trends and regional preferences shaped by our Southern climate, lifestyle, and building traditions. At the We Build Design Center, we update our material displays regularly to ensure our clients have access to the styles and products that are defining Charlotte construction in 2025 and 2026. Here are the trends we are seeing across both residential and commercial projects.
            </p>

            <div className="space-y-6 mt-8">
              {designTrends.map((trend) => (
                <div key={trend.title}>
                  <h3>{trend.title}</h3>
                  <p>{trend.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8">
              Our design consultants stay current with these trends and can help you distinguish between enduring design directions and short-lived fads. When you visit the Design Center, we will show you how these trends translate into specific material selections for your project type and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Design Selections */}
      <section className="py-16 bg-background" id="commercial-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="commercial-selections">Commercial Design Selections</h2>

            <p>
              Commercial construction projects have material requirements that differ significantly from residential work. Durability, code compliance, ADA accessibility, maintenance requirements, and lifecycle cost all factor into commercial material selection decisions. Our Design Center is equipped to handle these specialized needs for every type of <Link href="/services/commercial-construction">commercial construction</Link> project.
            </p>

            <p>
              For <strong>office spaces</strong>, we carry commercial-grade carpet tile rated for 100,000+ double rubs, luxury vinyl tile with 28-mil wear layers, and porcelain tile with slip ratings that meet building code requirements for commercial lobbies and restrooms. Office cabinetry in our showroom features high-pressure laminate and thermofoil surfaces that resist the daily wear of break rooms, mailrooms, and reception areas.
            </p>

            <p>
              For <strong>medical and dental facilities</strong>, material selections must meet strict infection control and maintenance standards. We display seamless flooring options including sheet vinyl and poured epoxy that eliminate grout lines where bacteria can harbor. Our countertop selections for medical applications include solid surface materials with integrated sinks, antimicrobial laminates, and chemical-resistant surfaces that withstand the harsh cleaning agents used in healthcare environments.
            </p>

            <p>
              For <strong>restaurants and food service</strong>, we carry commercial kitchen-rated flooring with quarry tile and anti-slip coatings, FRP (fiberglass-reinforced plastic) wall panels for kitchen areas, and durable dining room finishes that balance aesthetics with the ability to withstand heavy foot traffic, spills, and frequent cleaning. Our design team understands the health department requirements that affect material choices in food service construction throughout Mecklenburg County.
            </p>

            <p>
              For <strong>retail spaces</strong> and <Link href="/services/commercial-upfits">commercial upfits</Link>, we help business owners select materials that reinforce their brand identity while meeting the practical demands of a customer-facing environment. Polished concrete, luxury vinyl plank, and large-format porcelain tile are popular choices for Charlotte retail floors. Our display walls help you evaluate how different wall finishes and lighting options create the atmosphere your customers expect.
            </p>

            <p>
              Every commercial material in our Design Center includes technical specifications including fire ratings, slip resistance classifications, ADA compliance data, and warranty terms. Our design consultants understand commercial building codes in Charlotte and Mecklenburg County and will guide you toward materials that meet both your design vision and your regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Design Selections */}
      <section className="py-16 bg-muted" id="residential-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="residential-selections">Residential Design Selections</h2>

            <p>
              For <Link href="/services/custom-home-builder">custom home</Link> and residential renovation clients, our Design Center offers the opportunity to build a cohesive material palette for your entire home in one location. Rather than visiting a flooring store, then a countertop fabricator, then a cabinet dealer, then a plumbing showroom, and then a paint store, you can see everything together and make coordinated decisions that create a unified design throughout your home.
            </p>

            <p>
              <strong>Kitchen selections</strong> are often the most involved part of a residential Design Center visit. Your kitchen is the most material-intensive room in the house, with cabinetry, countertops, backsplash tile, flooring, hardware, plumbing fixtures, and lighting all coming together in a single space. Our kitchen vignettes show how these elements interact, and our design consultants help you navigate the hundreds of possible combinations to find the one that matches your style, budget, and lifestyle.
            </p>

            <p>
              <strong>Bathroom selections</strong> cover tile for floors and shower surrounds, vanity countertops and cabinetry, plumbing fixtures including shower systems and freestanding tubs, mirrors, lighting, and hardware. Our bathroom displays include both primary bathroom and secondary bathroom options at different price points, so you can invest strategically across the multiple bathrooms in your home.
            </p>

            <p>
              <strong>Flooring selections</strong> for residential projects typically involve choosing a primary flooring material for the main living areas and then selecting complementary options for bedrooms, bathrooms, laundry rooms, and specialty spaces. Our design consultants help you create a flooring plan that flows cohesively through your home while using the right material type for each room&rsquo;s specific requirements, such as waterproof options for bathrooms and moisture-resistant options for laundry areas.
            </p>

            <p>
              For clients building <Link href="/services/residential-additions">residential additions</Link>, matching existing materials is a common challenge. Bring a sample of your current flooring, countertop, or cabinet finish to the Design Center and our team will help you find the closest match or a complementary option that makes the transition between existing and new spaces feel intentional rather than mismatched.
            </p>

            <p>
              We also carry luxury and upgrade options for clients who want to elevate specific areas of their home. Book-matched quartzite slabs, custom-painted cabinetry, imported porcelain tile, designer plumbing fixtures, and statement lighting pieces are all available to view and compare in our showroom. Seeing these premium materials in person helps you decide where to invest and where a standard option achieves the look you want at a lower cost.
            </p>
          </div>
        </div>
      </section>

      {/* Working with Our Design Team */}
      <section className="py-16 bg-background" id="team-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="design-team">Working with Our Design Team</h2>

            <p>
              The We Build design team includes experienced consultants who specialize in material selection for construction projects. Unlike retail salespeople who work on commission and are focused on selling products, our design consultants are part of your construction team. Their goal is to help you make selections that result in a finished space you love, at a cost you can afford, on a timeline that works with your construction schedule.
            </p>

            <p>
              Each client is assigned a primary design consultant who manages your material selections from the first showroom visit through final installation. Your consultant learns your style preferences, understands your budget constraints, and tracks the specific requirements of your project type. This continuity means you are not repeating yourself at every appointment or explaining your project to a different person each time.
            </p>

            <p>
              Our design consultants work closely with your project manager throughout the construction process. When you make a material selection in the showroom, your project manager is informed immediately so they can update the construction schedule, place orders with the appropriate lead times, and plan installation sequences. This coordination is a direct benefit of our <Link href="/services/design-build">design-build model</Link>, where design and construction operate as a single integrated team rather than separate entities.
            </p>

            <p>
              For clients who are working with their own interior designer or architect, our Design Center is open to collaborative appointments. Your designer is welcome to join you at the showroom, review materials alongside our consultant, and ensure that design intent is maintained throughout the material selection and construction process. We view outside design professionals as partners, not competitors, and we welcome the expertise they bring to the project.
            </p>

            <p>
              The consultation timeline varies by project scope. A bathroom renovation may require a single two-hour appointment. A full custom home typically requires two to three appointments over a period of several weeks, allowing time between visits for you to review samples at home and consider your options. A large <Link href="/services/commercial-construction">commercial project</Link> may involve multiple appointments with different stakeholders, including the business owner, architect, and facility manager. We accommodate whatever timeline and number of visits your project requires.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted" id="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq" className="text-center mb-8">
              Design Center FAQ
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Answers to common questions about visiting the We Build Design Center, the material selection process, and how our showroom fits into your construction project.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Related Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Design-Build Construction', href: '/services/design-build', icon: Layers, description: 'Integrated design and construction under one team for seamless project delivery.' },
              { title: 'Custom Home Builder', href: '/services/custom-home-builder', icon: Home, description: 'Build your dream home in Charlotte with our full-service custom home construction.' },
              { title: 'Commercial Construction', href: '/services/commercial-construction', icon: Building, description: 'Office, retail, restaurant, and medical construction throughout the Charlotte metro.' },
              { title: 'Commercial Upfits', href: '/services/commercial-upfits', icon: Warehouse, description: 'Tenant improvements and commercial renovations for Charlotte businesses.' },
              { title: 'Residential Additions', href: '/services/residential-additions', icon: Home, description: 'Expand your existing home with room additions, second stories, and more.' },
              { title: 'General Contractor', href: '/services/general-contractor', icon: HardHat, description: 'Full-service general contracting licensed in North Carolina and South Carolina.' },
            ].map((service) => (
              <Card key={service.href} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">
            Ready to Visit the We Build Design Center?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule your private appointment to explore our Charlotte showroom. See materials in person, get expert design guidance, and make confident selections for your commercial or residential construction project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="btn-shimmer">
              <Link href="/contact">
                Schedule Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:5627086616">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (562) 708-6616
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

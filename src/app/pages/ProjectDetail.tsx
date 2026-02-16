import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectsData: Record<string, any> = {
    "restaurant-branding": {
      title: "Mountain View Restaurant",
      category: "Branding & Identity",
      date: "January 2024",
      client: "Mountain View Restaurant",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop",
      tags: ["Branding", "Print Design", "Menu Design"],
      overview: "Mountain View Restaurant needed a complete brand refresh to reflect their commitment to locally-sourced ingredients and mountain-inspired cuisine. The project encompassed logo design, brand guidelines, menu design, and various marketing materials.",
      challenge: "The existing brand didn't communicate the restaurant's unique positioning as a premium dining establishment with a strong connection to local ingredients and mountain heritage. They needed a cohesive visual identity that would appeal to both locals and tourists.",
      solution: "Developed a sophisticated brand identity featuring a custom logo that combines mountain imagery with elegant typography. Created comprehensive brand guidelines ensuring consistency across all touchpoints. Designed menus, business cards, and promotional materials that reflect the restaurant's premium positioning.",
      role: "Lead Designer",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      deliverables: [
        "Custom logo design with multiple variations",
        "Comprehensive brand style guide",
        "Menu design (dinner, lunch, drinks)",
        "Business cards and stationery",
        "Signage and environmental graphics",
        "Marketing collateral (flyers, posters)",
      ],
      results: [
        "40% increase in customer recognition",
        "Positive feedback from 95% of surveyed customers",
        "Successful launch of new brand across all locations",
        "Featured in local design publications",
      ],
    },
    "ecommerce-website": {
      title: "Fashion E-commerce Platform",
      category: "Web Design & Development",
      date: "November 2023",
      client: "Style Avenue Boutique",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      tags: ["Web Design", "WordPress", "E-commerce", "WooCommerce"],
      overview: "Style Avenue Boutique wanted to expand their physical store presence with a modern e-commerce platform. The project required a custom WordPress theme with WooCommerce integration, featuring advanced filtering, wishlist functionality, and seamless checkout experience.",
      challenge: "Creating an online shopping experience that matches the boutique's in-store luxury feel while ensuring easy navigation and fast performance. The site needed to handle a large inventory with multiple product variations and integrate with their existing inventory system.",
      solution: "Built a custom WordPress theme optimized for e-commerce with intuitive navigation, advanced product filtering, and a streamlined checkout process. Implemented WooCommerce with custom extensions for inventory management and integrated with their shipping partners for real-time shipping rates.",
      role: "Lead Developer & Designer",
      tools: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Figma"],
      deliverables: [
        "Custom WordPress theme",
        "WooCommerce store setup",
        "Product catalog with filtering",
        "User account management",
        "Wishlist and cart functionality",
        "Payment gateway integration",
        "Shipping integration",
        "Mobile-responsive design",
      ],
      results: [
        "500+ products sold in first month",
        "4.8/5 average customer satisfaction",
        "35% increase in overall revenue",
        "50% of traffic from mobile devices",
      ],
    },
    "tech-startup-branding": {
      title: "Tech Startup Brand Identity",
      category: "Branding & Identity",
      date: "September 2023",
      client: "InnovateTech Solutions",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
      tags: ["Branding", "Logo Design", "Brand Strategy"],
      overview: "InnovateTech Solutions, a new tech startup, needed a complete brand identity from scratch. The project included brand strategy, logo design, visual identity, and brand guidelines to establish their presence in the competitive tech industry.",
      challenge: "Creating a brand that communicates innovation and professionalism while standing out in a crowded market. The brand needed to appeal to both technical audiences and business decision-makers.",
      solution: "Developed a modern, tech-forward brand identity with a distinctive logo that represents connectivity and innovation. Created a comprehensive brand system with defined color palettes, typography, and visual elements that work across digital and print applications.",
      role: "Brand Strategist & Designer",
      tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
      deliverables: [
        "Brand strategy and positioning",
        "Logo design and variations",
        "Brand guidelines (60+ pages)",
        "Color palette and typography system",
        "Icon set and visual elements",
        "Business card and stationery",
        "Presentation templates",
        "Social media templates",
      ],
      results: [
        "Successfully launched brand to positive reception",
        "Increased investor interest by 60%",
        "Strong brand recognition in first quarter",
        "Featured in tech startup publications",
      ],
    },
    "social-media-campaign": {
      title: "Fitness Brand Social Campaign",
      category: "Social Media Marketing",
      date: "March 2024",
      client: "FitLife Studio",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
      tags: ["Social Media", "Content Strategy", "Digital Marketing"],
      overview: "FitLife Studio wanted to increase their social media presence and engagement to attract new members. The 3-month campaign included content strategy, custom graphics, video content, and community management across Instagram, Facebook, and TikTok.",
      challenge: "Breaking through the noise in the crowded fitness industry and creating content that resonates with their target audience while maintaining consistent posting and engagement.",
      solution: "Developed a comprehensive content strategy with themed days, behind-the-scenes content, member success stories, and workout tips. Created a library of custom graphics and templates for quick content creation. Implemented an engagement strategy with daily community interaction.",
      role: "Social Media Manager & Designer",
      tools: ["Canva", "Adobe Creative Suite", "Hootsuite", "Instagram", "TikTok"],
      deliverables: [
        "3-month content calendar",
        "120+ custom graphics",
        "20+ video content pieces",
        "Daily community management",
        "Influencer collaboration coordination",
        "Weekly performance reports",
        "Social media templates",
      ],
      results: [
        "200% increase in engagement rate",
        "150% growth in follower count",
        "45 new memberships directly from social media",
        "Viral TikTok video with 500K+ views",
      ],
    },
    "real-estate-website": {
      title: "Luxury Real Estate Website",
      category: "Web Design & Development",
      date: "July 2023",
      client: "Premier Properties Group",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
      tags: ["Web Design", "UI/UX", "Real Estate"],
      overview: "Premier Properties Group needed a sophisticated website to showcase their luxury property portfolio. The project required advanced search functionality, property filtering, virtual tour integration, and a CRM system for lead management.",
      challenge: "Creating an elegant user experience that showcases high-end properties effectively while providing powerful search and filtering capabilities. The site needed to load quickly despite high-resolution images and virtual tour integrations.",
      solution: "Designed and developed a custom website with advanced property search, interactive maps, and seamless virtual tour integration. Implemented lazy loading and image optimization for performance. Created a custom CRM dashboard for the team to manage listings and leads.",
      role: "Lead Designer & Developer",
      tools: ["React", "Node.js", "Figma", "Google Maps API"],
      deliverables: [
        "Custom website design",
        "Advanced property search",
        "Interactive map integration",
        "Virtual tour embedding",
        "Lead capture forms",
        "Agent profiles and contact",
        "Blog and resources section",
        "Admin dashboard for property management",
      ],
      results: [
        "70% increase in property inquiries",
        "Average session duration of 4+ minutes",
        "95% positive feedback from agents",
        "20% increase in property viewings",
      ],
    },
    "coffee-shop-print": {
      title: "Artisan Coffee Shop Materials",
      category: "Print Design",
      date: "December 2023",
      client: "Bean & Brew Coffee House",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
      tags: ["Print Design", "Branding", "Packaging"],
      overview: "Bean & Brew Coffee House needed print materials that reflected their artisan approach to coffee. The project included packaging design, loyalty cards, menu boards, and promotional posters.",
      challenge: "Creating print materials that communicate the artisan quality of their coffee while maintaining a cohesive brand experience across all touchpoints. The packaging needed to be both attractive and functional.",
      solution: "Designed a cohesive system of print materials with hand-drawn illustrations and warm, inviting colors. Created custom packaging that's eco-friendly and visually distinctive. Developed a loyalty card program with collectible designs.",
      role: "Print Designer",
      tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
      deliverables: [
        "Coffee bag packaging (3 sizes)",
        "Loyalty card design (4 variations)",
        "Menu board designs",
        "Promotional posters",
        "Take-out cup sleeves",
        "Business cards",
        "Gift card designs",
      ],
      results: [
        "30% increase in loyalty program sign-ups",
        "Packaging featured on customer social media",
        "Positive feedback from 98% of customers",
        "15% increase in retail coffee sales",
      ],
    },
    "wellness-app": {
      title: "Wellness App UI Design",
      category: "UI/UX Design",
      date: "April 2024",
      client: "Mindful Moments App",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
      tags: ["UI/UX", "Mobile Design", "App Design"],
      overview: "Mindful Moments needed a complete UI design for their meditation and wellness mobile application. The project focused on creating a calming, intuitive interface that encourages daily use and habit formation.",
      challenge: "Designing an interface that promotes calm and mindfulness while being functional and easy to navigate. The app needed to work for both beginners and experienced meditation practitioners.",
      solution: "Created a serene, minimalist design with gentle colors and intuitive navigation. Implemented progressive disclosure to avoid overwhelming users. Designed custom illustrations and animations that enhance the meditative experience.",
      role: "UI/UX Designer",
      tools: ["Figma", "Adobe Illustrator", "Principle"],
      deliverables: [
        "Complete UI design (40+ screens)",
        "User flow diagrams",
        "Interactive prototypes",
        "Custom icon set",
        "Meditation timer interface",
        "Progress tracking dashboard",
        "Onboarding experience",
        "Design system and components",
      ],
      results: [
        "4.7/5 app store rating",
        "80% user retention after 30 days",
        "Featured in App Store wellness category",
        "Average session time of 15 minutes",
      ],
    },
    "nonprofit-website": {
      title: "Nonprofit Organization Website",
      category: "Web Design & Development",
      date: "August 2023",
      client: "Hope & Hearts Foundation",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop",
      tags: ["Web Design", "WordPress", "Nonprofit"],
      overview: "Hope & Hearts Foundation needed a website that effectively communicates their mission and makes it easy for supporters to donate and get involved. The project included donation system integration, volunteer management, and impact reporting.",
      challenge: "Creating an emotional connection with visitors while providing clear paths to action (donate, volunteer, learn more). The site needed to handle high traffic during fundraising campaigns and process donations securely.",
      solution: "Developed a WordPress site with compelling storytelling through images and impact stories. Integrated a secure donation system with recurring donation options. Created a volunteer portal for easy sign-up and management.",
      role: "Lead Developer & Designer",
      tools: ["WordPress", "PHP", "Stripe API", "Figma"],
      deliverables: [
        "Custom WordPress theme",
        "Donation system integration",
        "Volunteer management portal",
        "Impact reporting dashboard",
        "Event calendar and registration",
        "Blog and news section",
        "Email newsletter integration",
        "Social media integration",
      ],
      results: [
        "300% increase in online donations",
        "500+ new volunteer registrations",
        "50% reduction in administrative time",
        "Featured in nonprofit tech publications",
      ],
    },
    "product-launch": {
      title: "Product Launch Social Strategy",
      category: "Social Media Marketing",
      date: "February 2024",
      client: "EcoFlow Products",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
      tags: ["Social Media", "Marketing", "Product Launch"],
      overview: "EcoFlow Products needed a comprehensive social media strategy for launching their new sustainable product line. The campaign included teaser content, launch day activities, influencer partnerships, and ongoing engagement strategy.",
      challenge: "Building anticipation and excitement for a new product in a competitive market while educating consumers about sustainability benefits. The campaign needed to reach a wide audience and drive early sales.",
      solution: "Developed a multi-phase campaign with teaser content, behind-the-scenes looks at product development, influencer collaborations, and launch day activities. Created engaging content across multiple platforms with consistent messaging and strong calls-to-action.",
      role: "Social Media Strategist & Content Creator",
      tools: ["Canva", "Adobe Creative Suite", "Social Media Platforms", "Analytics Tools"],
      deliverables: [
        "6-week campaign strategy",
        "Content calendar (pre-launch, launch, post-launch)",
        "50+ custom graphics",
        "15+ video content pieces",
        "Influencer collaboration kit",
        "User-generated content campaign",
        "Launch day live stream plan",
        "Performance analytics reports",
      ],
      results: [
        "1M+ impressions in first week",
        "5,000+ pre-orders before launch",
        "85% sell-through in first month",
        "20+ influencer partnerships",
      ],
    },
  };

  const project = projectsData[projectId || ""];

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-white/90">{project.category}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar size={18} />
                <span className="text-sm">Date</span>
              </div>
              <p className="font-medium">{project.date}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Tag size={18} />
                <span className="text-sm">Client</span>
              </div>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <ExternalLink size={18} />
                <span className="text-sm">Role</span>
              </div>
              <p className="font-medium">{project.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-muted rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Deliverables</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.deliverables.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-semibold mb-6">Results & Impact</h2>
              <ul className="space-y-4">
                {project.results.map((result: string) => (
                  <li key={result} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create something amazing for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

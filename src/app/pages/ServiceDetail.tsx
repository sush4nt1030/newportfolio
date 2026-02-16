import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import {
  Palette,
  Code,
  Share2,
  Globe,
  PenTool,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    "graphic-design": {
      title: "Graphic Design",
      subtitle: "Visual storytelling that captivates and converts",
      description: "Transform your brand vision into stunning visual communications that leave a lasting impression. From logos to complete brand identities, every design is crafted with purpose and creativity.",
      icon: Palette,
      process: [
        {
          title: "Brief & Research",
          description: "Understanding your brand, target audience, and design requirements through detailed consultation and market research.",
        },
        {
          title: "Concept Development",
          description: "Creating initial design concepts and mood boards that explore different creative directions aligned with your brand.",
        },
        {
          title: "Design & Refinement",
          description: "Developing the chosen concept with attention to detail, incorporating feedback and making refinements.",
        },
        {
          title: "Final Delivery",
          description: "Providing all final files in various formats, along with brand guidelines and ongoing support.",
        },
      ],
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
      deliverables: [
        "Logo design in multiple formats (AI, EPS, PNG, SVG)",
        "Brand style guide and usage guidelines",
        "Business card and stationery designs",
        "Social media templates and graphics",
        "Marketing collateral (brochures, flyers, posters)",
        "Source files and unlimited revisions",
      ],
      benefits: [
        "Stand out from competitors with unique visual identity",
        "Build brand recognition and credibility",
        "Communicate professionalism and quality",
        "Engage your audience with compelling visuals",
        "Maintain consistency across all touchpoints",
      ],
    },
    "web-design": {
      title: "Web Design & Development",
      subtitle: "Beautiful, functional websites that drive results",
      description: "Create a powerful online presence with modern, responsive websites designed to engage visitors and convert them into customers. Every site is optimized for performance and user experience.",
      icon: Code,
      process: [
        {
          title: "Planning & Strategy",
          description: "Defining site structure, user flows, and technical requirements based on your business goals and user needs.",
        },
        {
          title: "Design Phase",
          description: "Creating wireframes and high-fidelity designs that balance aesthetics with usability and brand identity.",
        },
        {
          title: "Development",
          description: "Building the website with clean code, ensuring responsiveness, speed, and cross-browser compatibility.",
        },
        {
          title: "Testing & Launch",
          description: "Thorough testing, final optimizations, deployment, and post-launch support to ensure everything works perfectly.",
        },
      ],
      tools: ["React", "HTML/CSS", "JavaScript", "Figma", "Tailwind CSS"],
      deliverables: [
        "Fully responsive website design",
        "Mobile-optimized layouts",
        "SEO-friendly structure",
        "Fast loading speeds",
        "Cross-browser compatibility",
        "Analytics integration",
        "Documentation and training",
      ],
      benefits: [
        "Professional online presence that builds trust",
        "Improved user experience and engagement",
        "Higher conversion rates and sales",
        "Mobile-friendly design for all devices",
        "Better search engine visibility",
      ],
    },
    "wordpress": {
      title: "WordPress Development",
      subtitle: "Powerful CMS solutions with full content control",
      description: "Build dynamic websites with WordPress, giving you complete control over your content. Custom themes, plugins, and e-commerce solutions tailored to your specific needs.",
      icon: Globe,
      process: [
        {
          title: "Requirements Analysis",
          description: "Understanding your content needs, functionality requirements, and desired features for the WordPress site.",
        },
        {
          title: "Custom Development",
          description: "Creating custom themes or customizing existing ones, developing plugins, and setting up all necessary features.",
        },
        {
          title: "Content Setup",
          description: "Configuring the CMS, creating page templates, and setting up content types for easy management.",
        },
        {
          title: "Training & Handover",
          description: "Comprehensive training on managing your WordPress site, ongoing support, and maintenance options.",
        },
      ],
      tools: ["WordPress", "PHP", "MySQL", "WooCommerce", "Advanced Custom Fields"],
      deliverables: [
        "Custom WordPress theme",
        "Plugin development and integration",
        "E-commerce setup (WooCommerce)",
        "Custom post types and fields",
        "User role management",
        "SEO optimization",
        "Training documentation",
        "Maintenance plan options",
      ],
      benefits: [
        "Easy content management without coding",
        "Scalable platform that grows with your business",
        "Extensive plugin ecosystem",
        "SEO-friendly architecture",
        "Full ownership and control",
      ],
    },
    "social-media": {
      title: "Social Media Management",
      subtitle: "Engaging content that builds community and drives growth",
      description: "Develop and execute strategic social media campaigns that increase brand awareness, engage your audience, and drive meaningful results across all major platforms.",
      icon: Share2,
      process: [
        {
          title: "Strategy Development",
          description: "Analyzing your audience, competitors, and goals to create a comprehensive social media strategy.",
        },
        {
          title: "Content Creation",
          description: "Designing engaging posts, graphics, and content calendars tailored to each platform and audience.",
        },
        {
          title: "Community Management",
          description: "Engaging with your audience, responding to comments, and building relationships with followers.",
        },
        {
          title: "Analytics & Optimization",
          description: "Tracking performance metrics, analyzing results, and continuously optimizing strategy for better results.",
        },
      ],
      tools: ["Canva", "Adobe Creative Suite", "Hootsuite", "Buffer", "Analytics Tools"],
      deliverables: [
        "Social media strategy and content calendar",
        "Custom graphics and visual content",
        "Engaging post copy and captions",
        "Hashtag research and strategy",
        "Community engagement and management",
        "Monthly performance reports",
        "Continuous optimization",
      ],
      benefits: [
        "Increased brand awareness and reach",
        "Stronger community and customer relationships",
        "Consistent brand presence across platforms",
        "Higher engagement and interaction rates",
        "Data-driven insights for better decisions",
      ],
    },
    "creative-strategy": {
      title: "Creative Strategy",
      subtitle: "Strategic thinking that drives creative excellence",
      description: "Develop comprehensive creative strategies that align with business objectives, resonate with target audiences, and deliver measurable results through thoughtful planning and execution.",
      icon: PenTool,
      process: [
        {
          title: "Discovery & Research",
          description: "Deep dive into your business, market, competitors, and audience to identify opportunities and insights.",
        },
        {
          title: "Strategy Formulation",
          description: "Developing creative direction, messaging frameworks, and campaign concepts based on research findings.",
        },
        {
          title: "Campaign Planning",
          description: "Creating detailed campaign plans with timelines, deliverables, and success metrics.",
        },
        {
          title: "Execution Support",
          description: "Guiding implementation, providing creative direction, and ensuring consistency across all touchpoints.",
        },
      ],
      tools: ["Strategic Frameworks", "Research Tools", "Analytics Platforms", "Presentation Tools"],
      deliverables: [
        "Brand positioning and messaging",
        "Creative campaign concepts",
        "Content strategy and guidelines",
        "Marketing roadmap and calendar",
        "Audience personas and insights",
        "Performance metrics and KPIs",
        "Implementation guidelines",
      ],
      benefits: [
        "Clear direction for all creative efforts",
        "Consistent brand messaging",
        "More effective marketing campaigns",
        "Better resource allocation",
        "Measurable results and ROI",
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      subtitle: "Intuitive experiences that delight users",
      description: "Design user-centered digital experiences that are both beautiful and functional. From research to prototyping, create interfaces that users love and that drive business results.",
      icon: PenTool,
      process: [
        {
          title: "User Research",
          description: "Understanding user needs, behaviors, and pain points through research, interviews, and data analysis.",
        },
        {
          title: "Wireframing & Prototyping",
          description: "Creating low and high-fidelity prototypes to test concepts and gather feedback before development.",
        },
        {
          title: "Visual Design",
          description: "Designing polished interfaces with attention to typography, color, spacing, and interactive elements.",
        },
        {
          title: "Testing & Iteration",
          description: "Conducting usability testing, gathering feedback, and refining designs for optimal user experience.",
        },
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "UsabilityHub"],
      deliverables: [
        "User research and personas",
        "Information architecture",
        "Wireframes and user flows",
        "Interactive prototypes",
        "High-fidelity UI designs",
        "Design system and components",
        "Usability test reports",
        "Developer handoff documentation",
      ],
      benefits: [
        "Improved user satisfaction and retention",
        "Reduced development costs through early testing",
        "Higher conversion rates",
        "Consistent user experience",
        "Competitive advantage through better design",
      ],
    },
  };

  const service = servicesData[serviceId || ""];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <ServiceIcon className="text-primary" size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-4">{service.subtitle}</p>
            <p className="text-lg text-muted-foreground">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4">My Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality and successful delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="text-2xl font-bold text-primary/30 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Tools & Technologies</h2>
              <p className="text-muted-foreground">
                Industry-standard tools to deliver professional results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {service.tools.map((tool: string) => (
                <div
                  key={tool}
                  className="px-6 py-3 bg-card border border-border rounded-lg font-medium"
                >
                  {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">What You'll Receive</h2>
              <p className="text-muted-foreground">
                Comprehensive deliverables tailored to your project needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {service.deliverables.map((item: string) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-primary" size={14} />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Client Benefits</h2>
              <p className="text-muted-foreground">
                The value this service brings to your business
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {service.benefits.map((benefit: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card border border-border rounded-lg p-6"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary" size={18} />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to get started? Let's discuss your project and how I can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

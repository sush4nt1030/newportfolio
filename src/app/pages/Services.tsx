import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Palette,
  Code,
  Share2,
  Globe,
  PenTool,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Create stunning visual identities, logos, branding materials, and marketing collateral that capture attention and communicate your message effectively.",
      icon: Palette,
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Build modern, responsive websites that look great on all devices and provide exceptional user experiences that drive conversions.",
      icon: Code,
      features: ["Responsive Design", "UI/UX Design", "Modern Frameworks", "Performance Optimization"],
    },
    {
      id: "wordpress",
      title: "WordPress Development",
      description: "Develop custom WordPress websites with intuitive content management, perfect for businesses that want full control over their content.",
      icon: Globe,
      features: ["Custom Themes", "Plugin Development", "E-commerce Solutions", "CMS Training"],
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Strategically plan, create, and manage engaging social media content that builds community and drives engagement with your brand.",
      icon: Share2,
      features: ["Content Strategy", "Content Creation", "Community Management", "Analytics & Reporting"],
    },
    {
      id: "creative-strategy",
      title: "Creative Strategy",
      description: "Develop comprehensive creative strategies that align with your business goals and resonate with your target audience.",
      icon: PenTool,
      features: ["Brand Strategy", "Content Planning", "Market Research", "Campaign Development"],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Design intuitive and engaging user interfaces that provide seamless experiences and keep users coming back.",
      icon: PenTool,
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-primary" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4">How I Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven process that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, audience, and requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Planning the approach, timeline, and deliverables aligned with your objectives.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Creating and developing your project with regular updates and feedback loops.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final review, revisions, launch, and ongoing support as needed.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how I can help bring your vision to life with creative solutions
              tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

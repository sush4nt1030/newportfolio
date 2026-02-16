import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Filter } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Web Design" },
    { id: "social", label: "Social Media" },
    { id: "print", label: "Print Design" },
  ];

  const projects = [
    {
      id: "restaurant-branding",
      title: "Mountain View Restaurant",
      category: "branding",
      description: "Complete brand identity including logo, menu design, and marketing materials for a premium restaurant.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      tags: ["Branding", "Print Design"],
    },
    {
      id: "ecommerce-website",
      title: "Fashion E-commerce Platform",
      category: "web",
      description: "Modern e-commerce website with custom WordPress theme and WooCommerce integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Web Design", "WordPress", "E-commerce"],
    },
    {
      id: "tech-startup-branding",
      title: "Tech Startup Brand Identity",
      category: "branding",
      description: "Full brand development for an innovative tech startup, from logo to brand guidelines.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      tags: ["Branding", "Logo Design"],
    },
    {
      id: "social-media-campaign",
      title: "Fitness Brand Social Campaign",
      category: "social",
      description: "3-month social media campaign with custom graphics and content strategy that increased engagement by 200%.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Social Media", "Content Strategy"],
    },
    {
      id: "real-estate-website",
      title: "Luxury Real Estate Website",
      category: "web",
      description: "Elegant property showcase website with advanced search functionality and virtual tour integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tags: ["Web Design", "UI/UX"],
    },
    {
      id: "coffee-shop-print",
      title: "Artisan Coffee Shop Materials",
      category: "print",
      description: "Print collateral including packaging design, loyalty cards, and promotional posters.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
      tags: ["Print Design", "Branding"],
    },
    {
      id: "wellness-app",
      title: "Wellness App UI Design",
      category: "web",
      description: "User-friendly mobile app interface for a meditation and wellness application.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      tags: ["UI/UX", "Mobile Design"],
    },
    {
      id: "nonprofit-website",
      title: "Nonprofit Organization Website",
      category: "web",
      description: "Impactful website for a nonprofit with donation integration and volunteer management system.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      tags: ["Web Design", "WordPress"],
    },
    {
      id: "product-launch",
      title: "Product Launch Social Strategy",
      category: "social",
      description: "Comprehensive social media strategy and content for a successful product launch campaign.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      tags: ["Social Media", "Marketing"],
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of creative projects and successful collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={18} />
              <span>Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

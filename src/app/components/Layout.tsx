import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      
      {/* Skip Navigation Link - Already in index.html but reinforced here */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Header />
      
      {/* Main Content Area with Semantic HTML */}
      <main id="main-content" className="flex-1" role="main" aria-label="Main content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
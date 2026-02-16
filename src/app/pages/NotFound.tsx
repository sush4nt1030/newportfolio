import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-9xl font-bold text-muted-foreground/20">404</div>
        <h1 className="text-3xl md:text-4xl font-bold">Page Not Found</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              PC Bottleneck Calculator helps users identify performance bottlenecks in their computer systems, 
              ensuring optimal component matching for the best gaming and productivity experience.
            </p>
          </div>

          {/* Legal Pages Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-foreground hover:text-primary">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground hover:text-primary">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
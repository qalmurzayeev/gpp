import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/products', label: t.products },
    { path: '/solutions', label: t.solutions },
    { path: '/news', label: t.news },
    { path: '/contact', label: t.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+8613722777731" className="flex items-center gap-1 hover:text-blue-200">
                <Phone className="size-3" />
                <span>+86 137 2277 7731</span>
              </a>
              <a href="mailto:info@bestopsupply.com" className="flex items-center gap-1 hover:text-blue-200">
                <Mail className="size-3" />
                <span>info@bestopsupply.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="size-3" />
              <button
                onClick={() => setLanguage('kk')}
                className={`px-2 py-1 rounded ${language === 'kk' ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
              >
                ҚАЗ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
              >
                РУС
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="size-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">B</span>
            </div>
            <div className="hidden md:block">
              <div className="text-blue-900 tracking-tight leading-tight">HEBEI BESTOP</div>
              <div className="text-xs text-gray-600">INDUSTRY SUPPLY CO., LTD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Get Quote Button (Desktop) */}
          <Link
            to="/contact"
            className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
          >
            {t.getQuote}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
            >
              {t.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

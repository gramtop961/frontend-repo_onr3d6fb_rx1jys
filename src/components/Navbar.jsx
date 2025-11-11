import { Link, NavLink } from 'react-router-dom';
import { Building2, Scale, UserCircle2, FileCheck2, Home, PlusSquare } from 'lucide-react';

export default function Navbar() {
  const navItem = ({ to, label, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) => (
        `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ` +
        (isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100')
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="text-blue-600" />
            <span className="font-semibold text-slate-800">EstatePro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItem({ to: '/', label: 'Home', icon: Home })}
            {navItem({ to: '/listings', label: 'Browse', icon: Building2 })}
            {navItem({ to: '/list-property', label: 'List Property', icon: PlusSquare })}
            {navItem({ to: '/lawyer', label: 'Lawyers', icon: Scale })}
            {navItem({ to: '/agent', label: 'Agent', icon: FileCheck2 })}
            {navItem({ to: '/buyer', label: 'Buyer', icon: UserCircle2 })}
            {navItem({ to: '/admin', label: 'Admin', icon: FileCheck2 })}
          </nav>
          <div className="md:hidden">
            <span className="text-sm text-slate-600">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}

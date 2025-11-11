import { Bed, Bath, MapPin, Home, ShieldCheck, FileCheck2 } from 'lucide-react';

export default function PropertyCard({ property, onView, onRequestValidation }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={property.thumbnail || 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop'} alt={property.title}
             className="w-full h-full object-cover group-hover:scale-105 transition"/>
        {property.status && (
          <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-white/90 border border-slate-200 text-slate-700">{property.status}</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
          <span className="text-blue-600 font-semibold">{property.price}</span>
        </div>
        <div className="mt-2 flex items-center gap-4 text-slate-600 text-sm">
          <span className="inline-flex items-center gap-1"><Bed size={16}/> {property.bedrooms} bd</span>
          <span className="inline-flex items-center gap-1"><Bath size={16}/> {property.bathrooms} ba</span>
          <span className="inline-flex items-center gap-1"><Home size={16}/> {property.area} sqft</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-slate-500 text-sm">
          <MapPin size={16}/><span>{property.location}</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button onClick={() => onView(property)} className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm">View Details</button>
          <button onClick={() => onRequestValidation(property)} className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm inline-flex items-center gap-2">
            <ShieldCheck size={16}/> Request Lawyer Validation
          </button>
        </div>
      </div>
    </div>
  );
}

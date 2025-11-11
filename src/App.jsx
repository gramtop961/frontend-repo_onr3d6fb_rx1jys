import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import ValidationModal from './components/ValidationModal';

const demoProperties = [
  {
    id: 'p1',
    title: 'Modern Apartment with Skyline View',
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    location: 'Downtown, Cityville',
    price: '$2,400/mo',
    status: 'Active',
    thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'p2',
    title: 'Cozy Independent House',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: 'Green Park, Cityville',
    price: '$180,000',
    status: 'Active',
    thumbnail: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c841?q=80&w=1600&auto=format&fit=crop'
  },
];

function HomePage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onRequest = (property) => {
    setSelected(property);
    setOpen(true);
  };

  return (
    <div>
      <Hero onSearch={() => {}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Featured Properties</h2>
          <a href="/listings" className="text-blue-600 hover:underline text-sm">View all</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProperties.map(p => (
            <PropertyCard key={p.id} property={p} onView={() => {}} onRequestValidation={onRequest} />
          ))}
        </div>
      </div>
      <ValidationModal open={open} onClose={() => setOpen(false)} property={selected} onConfirm={() => setOpen(false)} />
    </div>
  );
}

function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Browse Properties</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProperties.concat(demoProperties).map(p => (
          <PropertyCard key={p.id + 'list'} property={p} onView={() => {}} onRequestValidation={() => {}} />
        ))}
      </div>
    </div>
  );
}

function ListPropertyPage() {
  const [form, setForm] = useState({
    title: '', bedrooms: 1, bathrooms: 1, area: '', balcony: 'No', type: 'Apartment',
    amenities: { parking: false, gym: false, pool: false }, description: '',
    address: '', city: '', pincode: '', price: '', availability: 'Active'
  });

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">List Your Property</h1>
      <p className="text-slate-600 mt-1">Add details about your property for rent or sale.</p>

      <form className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">Property Title</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.title} onChange={e=>update('title', e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Property Type</label>
            <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.type} onChange={e=>update('type', e.target.value)}>
              <option>Independent House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-600">Bedrooms</label>
            <input type="number" className="mt-1 w-full border rounded-lg px-3 py-2" value={form.bedrooms} onChange={e=>update('bedrooms', Number(e.target.value))} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Bathrooms</label>
            <input type="number" className="mt-1 w-full border rounded-lg px-3 py-2" value={form.bathrooms} onChange={e=>update('bathrooms', Number(e.target.value))} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Living Room Size (sq. ft.)</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.area} onChange={e=>update('area', e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Balcony</label>
            <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.balcony} onChange={e=>update('balcony', e.target.value)}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Amenities</label>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {['parking','gym','swimming pool','security','power backup','play area'].map(key => (
                <label key={key} className="flex items-center gap-2">
                  <input type="checkbox" onChange={()=>update('amenities', { ...form.amenities, [key]: !(form.amenities[key]) })} />
                  {key}
                </label>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Property Description</label>
            <textarea className="mt-1 w-full border rounded-lg px-3 py-2" rows={4} value={form.description} onChange={e=>update('description', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-slate-600">Address</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.address} onChange={e=>update('address', e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-slate-600">City</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.city} onChange={e=>update('city', e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Pin Code</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.pincode} onChange={e=>update('pincode', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">Property Photos</label>
            <input type="file" multiple className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Property Video (optional)</label>
            <input type="file" accept="video/*" className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-slate-600">Price</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.price} onChange={e=>update('price', e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-slate-600">Availability Status</label>
            <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.availability} onChange={e=>update('availability', e.target.value)}>
              <option>Active</option>
              <option>Sold</option>
              <option>Rented</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-600">Legal Documents (optional)</label>
            <input type="file" accept=".pdf,.png,.jpg,.jpeg" multiple className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
        </div>

        <div className="pt-2">
          <button type="button" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Submit Listing</button>
        </div>
      </form>
    </div>
  );
}

function Placeholder({ title }){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-slate-600">This section will include role-specific dashboards and workflows.</p>
    </div>
  );
}

function Shell(){
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/list-property" element={<ListPropertyPage />} />
        <Route path="/lawyer" element={<Placeholder title="Lawyer Dashboard" />} />
        <Route path="/agent" element={<Placeholder title="Agent Dashboard" />} />
        <Route path="/buyer" element={<Placeholder title="Buyer Area" />} />
        <Route path="/admin" element={<Placeholder title="Admin Panel" />} />
      </Routes>
    </div>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

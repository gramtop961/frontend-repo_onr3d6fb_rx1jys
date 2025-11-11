import { useState } from 'react';
import { X, Scale } from 'lucide-react';

const LAWYERS = [
  { id: 'l1', name: 'Lex & Partners', rating: 4.9, price: 149 },
  { id: 'l2', name: 'Urban Legal Associates', rating: 4.8, price: 139 },
  { id: 'l3', name: 'BlueShield Law', rating: 4.7, price: 129 },
  { id: 'l4', name: 'Crescent Chambers', rating: 4.6, price: 119 },
  { id: 'l5', name: 'Alpha Law Group', rating: 4.5, price: 109 }
];

export default function ValidationModal({ open, onClose, property, onConfirm }) {
  const [lawyerId, setLawyerId] = useState(LAWYERS[0].id);

  if (!open) return null;

  const selected = LAWYERS.find(l => l.id === lawyerId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl p-6">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-md hover:bg-slate-100">
          <X size={18} />
        </button>
        <div className="flex items-center gap-2">
          <Scale className="text-blue-600" />
          <h3 className="text-xl font-semibold text-slate-900">Request Lawyer Validation</h3>
        </div>
        <p className="mt-2 text-slate-600 text-sm">Select a law firm to validate documents for <span className="font-medium">{property?.title}</span>.</p>

        <div className="mt-4 space-y-2">
          {LAWYERS.map(l => (
            <label key={l.id} className="flex items-center justify-between border rounded-lg p-3 cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <input type="radio" name="lawyer" checked={lawyerId===l.id} onChange={() => setLawyerId(l.id)} />
                <div>
                  <div className="font-medium text-slate-800">{l.name}</div>
                  <div className="text-xs text-slate-500">Rating {l.rating} • Fixed fee ${l.price}</div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-slate-600 text-sm">Subtotal</div>
          <div className="text-slate-900 font-semibold">${selected.price.toFixed(2)}</div>
        </div>

        <button onClick={() => onConfirm({ lawyerId })} className="mt-4 w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

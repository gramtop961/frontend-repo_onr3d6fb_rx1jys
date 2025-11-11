import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Hero({ onSearch }) {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight"
          >
            Find your next home with confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl"
          >
            Browse verified properties, request professional legal validation, and make smarter decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8"
          >
            <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-2 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-2">
                <input placeholder="City or locality" className="flex-1 px-4 py-3 rounded-lg bg-white outline-none border border-slate-200 focus:border-blue-500" />
                <select className="px-4 py-3 rounded-lg bg-white outline-none border border-slate-200 focus:border-blue-500">
                  <option>Any type</option>
                  <option>Apartment</option>
                  <option>Independent House</option>
                  <option>Villa</option>
                  <option>Plot</option>
                </select>
                <button onClick={onSearch} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

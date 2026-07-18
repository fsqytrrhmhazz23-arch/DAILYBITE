import { useState } from 'react';
import { Calculator, Flame, Heart, Sparkles, Scale, Info, Check, MessageCircle } from 'lucide-react';
import { MEAL_PLANS, MENUS } from '../data/companyData';
import { MenuItem } from '../types';

export default function NutritionPlanner() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [weight, setWeight] = useState<number>(68);
  const [height, setHeight] = useState<number>(172);
  const [activity, setActivity] = useState<string>('moderate');
  const [goal, setGoal] = useState<string>('balanced');
  
  const [result, setResult] = useState<any | null>(null);

  const calculateNutrition = () => {
    // Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity Multipliers
    const multipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725
    };

    const tdee = Math.round(bmr * multipliers[activity]);

    // Goal adjustments & Macro splits
    let targetCalories = tdee;
    let pPct = 0.25; // Protein %
    let cPct = 0.45; // Carbs %
    let fPct = 0.30; // Fat %
    let recommendedPlanId = 'plan-balanced';

    if (goal === 'loss') {
      targetCalories = tdee - 450;
      pPct = 0.35; // Higher protein to preserve muscle
      cPct = 0.35; // Lower carb
      fPct = 0.30;
      recommendedPlanId = 'plan-weight-loss';
    } else if (goal === 'gain') {
      targetCalories = tdee + 350;
      pPct = 0.30;
      cPct = 0.50; // Extra clean carbs for bulk
      fPct = 0.20;
      recommendedPlanId = 'plan-muscle-gain';
    }

    // Calculate grams (Protein = 4cal/g, Carbs = 4cal/g, Fat = 9cal/g)
    const proteinNeeded = Math.round((targetCalories * pPct) / 4);
    const carbsNeeded = Math.round((targetCalories * cPct) / 4);
    const fatNeeded = Math.round((targetCalories * fPct) / 9);

    const recommendedPlan = MEAL_PLANS.find(p => p.id === recommendedPlanId) || MEAL_PLANS[1];

    // Find 2 recommended menus that fit this profile well
    let recommendedMenus: MenuItem[] = [];
    if (goal === 'loss') {
      recommendedMenus = MENUS.filter(m => m.calories <= 450).slice(0, 2);
    } else if (goal === 'gain') {
      recommendedMenus = MENUS.filter(m => m.calories >= 450).slice(0, 2);
    } else {
      recommendedMenus = MENUS.filter(m => m.calories >= 400 && m.calories <= 550).slice(0, 2);
    }

    setResult({
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      protein: proteinNeeded,
      carbs: carbsNeeded,
      fat: fatNeeded,
      plan: recommendedPlan,
      menus: recommendedMenus
    });
  };

  const getWhatsAppReportLink = () => {
    if (!result) return '';
    const goalLabel = goal === 'loss' ? 'Menurunkan Berat Badan' : goal === 'gain' ? 'Membangun Otot' : 'Menjaga Kebugaran';
    const text = `Halo Dokter Gizi PT. Dailybite, saya telah mengisi Kalkulator Gizi Mandiri:\n\n*Profil saya:*\n- Jenis Kelamin: ${gender === 'male' ? 'Pria' : 'Wanita'}\n- Umur: ${age} tahun\n- Berat: ${weight} kg / Tinggi: ${height} cm\n- Target Goal: ${goalLabel}\n\n*Hasil Kalkulator:*\n- Kalori Harian (TDEE): ${result.tdee} kkal\n- Target Kalori Diet: ${result.targetCalories} kkal\n- Kebutuhan Nutrisi: P ${result.protein}g, C ${result.carbs}g, F ${result.fat}g\n- Program Direkomendasikan: *${result.plan.name}*\n\nMohon bantu saya menyusun jadwal pengiriman menu katering sehat ini. Terima kasih!`;
    return `https://wa.me/6285819343733?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planner" className="py-24 bg-editorial-cream border-b border-editorial-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-left border-b border-editorial-black pb-12 mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 border border-editorial-black px-3 py-1 bg-editorial-tan/40 text-editorial-black text-[10px] font-bold tracking-widest uppercase">
            <Calculator className="h-3.5 w-3.5 text-editorial-terracotta" />
            <span>METRIC VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-editorial-black leading-tight">
            Kalkulator & Rekomendasi <span className="font-bold text-editorial-terracotta italic block sm:inline">Nutrisi Presisi</span>
          </h2>
          <p className="text-editorial-black/70 font-serif italic text-base sm:text-lg max-w-2xl leading-relaxed">
            Dapatkan taksiran kebutuhan metabolisme harian Anda secara instan dan temukan paket nutrisi harian yang diformulasi klinis berdasar sains pangan.
          </p>
        </div>

        {/* Dynamic Calculator Bento Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form Column (5 cols) */}
          <div className="lg:col-span-5 bg-editorial-cream border border-editorial-black p-6 sm:p-8 rounded-none text-left space-y-6">
            <h3 className="font-serif italic text-xl text-editorial-black flex items-center gap-2 border-b border-editorial-black pb-3">
              <Scale className="h-5 w-5 text-editorial-terracotta" />
              <span>Parameter Fisik & Metabolisme</span>
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Jenis Kelamin</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3 rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                    gender === 'male'
                      ? 'bg-editorial-black text-white border-editorial-black shadow-sm'
                      : 'bg-editorial-cream text-editorial-black/60 border-editorial-black/30 hover:border-editorial-black hover:text-editorial-black'
                  }`}
                >
                  Pria
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3 rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                    gender === 'female'
                      ? 'bg-editorial-black text-white border-editorial-black shadow-sm'
                      : 'bg-editorial-cream text-editorial-black/60 border-editorial-black/30 hover:border-editorial-black hover:text-editorial-black'
                  }`}
                >
                  Wanita
                </button>
              </div>
            </div>

            {/* Age, Weight, Height Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Umur (Thn)</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-editorial-cream border border-editorial-black rounded-none px-3 py-2.5 text-xs font-bold text-editorial-black focus:outline-none focus:bg-white focus:border-editorial-terracotta"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Berat (Kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-editorial-cream border border-editorial-black rounded-none px-3 py-2.5 text-xs font-bold text-editorial-black focus:outline-none focus:bg-white focus:border-editorial-terracotta"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Tinggi (Cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-editorial-cream border border-editorial-black rounded-none px-3 py-2.5 text-xs font-bold text-editorial-black focus:outline-none focus:bg-white focus:border-editorial-terracotta"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Tingkat Aktivitas Harian</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-3 text-xs font-bold text-editorial-black uppercase tracking-wider focus:outline-none focus:bg-white focus:border-editorial-terracotta"
              >
                <option value="sedentary">MINIMAL OLAHRAGA (SEDENTARY)</option>
                <option value="light">OLAHRAGA RINGAN (1-3 HARI/MINGGU)</option>
                <option value="moderate">OLAHRAGA SEDANG (3-5 HARI/MINGGU)</option>
                <option value="active">OLAHRAGA BERAT (6-7 HARI/MINGGU)</option>
              </select>
            </div>

            {/* Target Goal */}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Sasaran Pribadi / Goal</label>
              <div className="space-y-2">
                {[
                  { id: 'loss', title: 'Fat Loss (Bakar Lemak)', desc: 'Pengurangan kalori terukur untuk melangsingkan tubuh.' },
                  { id: 'balanced', title: 'Balanced Life (Kebugaran)', desc: 'Asupan seimbang untuk stamina harian konsisten.' },
                  { id: 'gain', title: 'Gain Muscle (Massa Otot)', desc: 'Kelebihan nutrisi protein untuk pembentukan otot.' }
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start p-3 rounded-none border cursor-pointer transition-all duration-300 ${
                      goal === item.id
                        ? 'bg-editorial-tan/40 border-editorial-black'
                        : 'bg-editorial-cream border-editorial-black/20 hover:border-editorial-black'
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={item.id}
                      checked={goal === item.id}
                      onChange={() => setGoal(item.id)}
                      className="mt-1 text-editorial-terracotta focus:ring-editorial-terracotta"
                    />
                    <div className="ml-3 text-left">
                      <p className="text-xs font-bold text-editorial-black uppercase tracking-wider">{item.title}</p>
                      <p className="text-[10px] text-editorial-black/60 leading-none mt-1">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="button"
              id="calc-submit-btn"
              onClick={calculateNutrition}
              className="w-full bg-editorial-terracotta hover:bg-editorial-black text-white text-xs font-bold tracking-[0.2em] uppercase py-4 rounded-none transition-all duration-300 border border-editorial-terracotta hover:border-editorial-black"
            >
              HITUNG KEBUTUHAN NUTRISI
            </button>
          </div>

          {/* Results Output Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            {result ? (
              <div className="bg-editorial-cream border-2 border-editorial-black p-6 sm:p-8 rounded-none text-left space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-editorial-black pb-4">
                  <div>
                    <span className="text-[9px] font-bold text-white bg-editorial-terracotta uppercase tracking-widest px-2.5 py-1">
                      HASIL DIAGNOSTIK PREVENTIF
                    </span>
                    <h3 className="font-serif italic text-2xl text-editorial-black mt-2 font-semibold">Laporan Nutrisi Rekomendasi</h3>
                  </div>
                  <Flame className="h-8 w-8 text-editorial-terracotta animate-pulse" />
                </div>

                {/* Calorie Readout Bento */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-editorial-cream border border-editorial-black/30 p-4 text-center">
                    <p className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-wider">Energi Harian (TDEE)</p>
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-editorial-black mt-1">{result.tdee}</p>
                    <p className="text-[10px] text-editorial-black/60 uppercase tracking-widest">kkal / hari</p>
                  </div>
                  <div className="bg-editorial-terracotta text-white p-4 text-center">
                    <p className="text-[9px] font-bold text-white/80 uppercase tracking-wider">Target Diet Anda</p>
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">{result.targetCalories}</p>
                    <p className="text-[10px] text-white/95 uppercase tracking-widest">kkal / hari</p>
                  </div>
                </div>

                {/* Macro Split Progress Indicators */}
                <div className="space-y-3.5">
                  <h4 className="font-serif italic text-base font-semibold text-editorial-black">Target Makronutrisi Harian:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-editorial-cream p-3 border border-editorial-black/40">
                      <span className="text-[8px] font-bold text-editorial-terracotta tracking-widest uppercase">PROTEIN</span>
                      <p className="text-lg font-serif font-bold text-editorial-black mt-1">{result.protein}g</p>
                      <p className="text-[8px] text-editorial-black/50 leading-none">Asupan pembangun sel</p>
                    </div>
                    <div className="bg-editorial-cream p-3 border border-editorial-black/40">
                      <span className="text-[8px] font-bold text-editorial-black/60 tracking-widest uppercase">KARBOHIDRAT</span>
                      <p className="text-lg font-serif font-bold text-editorial-black mt-1">{result.carbs}g</p>
                      <p className="text-[8px] text-editorial-black/50 leading-none">Serat kompleks lambat cerna</p>
                    </div>
                    <div className="bg-editorial-cream p-3 border border-editorial-black/40">
                      <span className="text-[8px] font-bold text-editorial-black/60 tracking-widest uppercase">LEMAK SEHAT</span>
                      <p className="text-lg font-serif font-bold text-editorial-black mt-1">{result.fat}g</p>
                      <p className="text-[8px] text-editorial-black/50 leading-none">Regulasi hormon vital</p>
                    </div>
                  </div>
                </div>

                {/* Recommended Meal Plan Card */}
                <div className="border border-editorial-black bg-editorial-tan/10 p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] font-bold text-white bg-editorial-black px-2 py-0.5 uppercase tracking-wider">PROGRAM TERBAIK</span>
                      <h4 className="font-serif italic text-xl font-semibold text-editorial-black mt-1.5">{result.plan.name}</h4>
                    </div>
                    <p className="text-xs font-serif font-bold text-editorial-terracotta">Rp {result.plan.pricePerDay.toLocaleString('id-ID')}/hari</p>
                  </div>
                  <p className="text-xs text-editorial-black/80 leading-relaxed">
                    {result.plan.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {result.plan.features.slice(0, 3).map((feat: string, fIdx: number) => (
                      <span key={fIdx} className="bg-editorial-cream border border-editorial-black/30 text-editorial-black text-[9px] font-bold tracking-wider uppercase px-2 py-0.5">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Referral Action Buttons */}
                <div className="pt-4 border-t border-editorial-black/20 flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href={getWhatsAppReportLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-editorial-terracotta hover:bg-editorial-black text-white text-center px-6 py-3.5 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-editorial-terracotta hover:border-editorial-black"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>KIRIM DATA KE AHLI GIZI</span>
                  </a>
                  <button
                    onClick={() => setResult(null)}
                    className="w-full sm:w-auto border border-editorial-black/40 hover:border-editorial-black text-editorial-black/80 hover:text-editorial-black px-5 py-3.5 rounded-none text-[10px] font-bold tracking-widest uppercase text-center transition-all duration-300"
                  >
                    ATUR ULANG DATA
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-editorial-cream border border-editorial-black/30 border-dashed rounded-none p-12 text-center max-w-md mx-auto space-y-4">
                <div className="bg-editorial-tan/40 text-editorial-terracotta p-4 rounded-none border border-editorial-black w-fit mx-auto shadow-sm">
                  <Calculator className="h-8 w-8" />
                </div>
                <h3 className="font-serif italic text-xl text-editorial-black">Siap Menganalisis Gizi Anda?</h3>
                <p className="text-xs text-editorial-black/60 uppercase tracking-wider leading-relaxed">
                  Isi formulir diagnostik di sebelah kiri secara akurat. Sistem cerdas kami akan merumuskan target asupan kalori dan makronutrisi optimal secara langsung berdasarkan standar klinis internasional.
                </p>
                <div className="flex items-center justify-center space-x-1.5 text-[9px] font-bold tracking-wider text-editorial-black/40 uppercase">
                  <Info className="h-3.5 w-3.5" />
                  <span>MIFFLIN-ST JEOR FORMULATION</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

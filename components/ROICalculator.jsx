import React, { useState } from 'react';
import Component_10 from './Component_10';

function ROICalculator() {
  const [dailyHours, setDailyHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [dailyPatients, setDailyPatients] = useState('');
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);

  const workingDays = 260;
  const successRate = 0.95;
  const costPerVerification = 2.0;

  const currentAnnualCost = (Number(dailyHours) || 0) * (Number(hourlyRate) || 0) * workingDays;
  const annualVerifications = (Number(dailyPatients) || 0) * workingDays * successRate;
  const azopsAnnualCost = annualVerifications * costPerVerification;
  const netSavings = currentAnnualCost - azopsAnnualCost;
  
  const dailyTimeSpentAzops = ((Number(dailyPatients) || 0) * 1) / 60;
  const dailyTimeSaved = (Number(dailyHours) || 0) - dailyTimeSpentAzops;
  const annualTimeSaved = dailyTimeSaved * workingDays;
  const monthlyTimeSaved = annualTimeSaved / 12;
  
  const monthlyMoneySaved = netSavings / 12;
  const monthlyVerifications = annualVerifications / 12;

  const handleShowResults = (e) => {
    e.preventDefault();
    if (email) {
      setShowResults(true);
    }
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <>
      {/* Green Section with Input Fields */}
      <section className="bg-[#c8d5d0] text-[#101920] pt-40 pb-4 px-[5%]">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-10">
              How much money could you save by implementing Natalie?
            </h1>
            <p className="text-lg lg:text-xl text-[#363d43] max-w-3xl mx-auto">
              Calculate how much you leave on the table every year.
            </p>
          </div>

          {/* Input Form */}
          <form className="max-w-[800px] mx-auto relative z-[2]" onSubmit={handleShowResults}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div>
                <label className="block text-[#101920] font-medium mb-3 text-sm">
                  Daily hours spent on insurance verification
                </label>
                <input
                  type="number"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-[#101920] focus:border-[#101920] focus:ring-2 focus:ring-[#101920]/20 outline-none transition-all"
                  min="0"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-[#101920] font-medium mb-3 text-sm">
                  Hourly rate of the staff members handling insurance verification
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">$</span>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-[#101920] focus:border-[#101920] focus:ring-2 focus:ring-[#101920]/20 outline-none transition-all"
                    min="0"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#101920] font-medium mb-3 text-sm">
                  Number of patients needing insurance verification each day
                </label>
                <input
                  type="number"
                  value={dailyPatients}
                  onChange={(e) => setDailyPatients(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-[#101920] focus:border-[#101920] focus:ring-2 focus:ring-[#101920]/20 outline-none transition-all"
                  min="0"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email Field - Shows when other fields are filled */}
            <div className={`transition-all duration-500 ease-in-out ${dailyHours && hourlyRate && dailyPatients ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <label className="block text-[#101920] font-medium mb-3 text-sm">
                Email address
              </label>
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-[#101920] placeholder:text-gray-500 focus:border-[#101920] focus:ring-2 focus:ring-[#101920]/20 outline-none transition-all"
                  required={!showResults}
                />
                {!showResults && (
                  <button
                    type="submit"
                    className="bg-[#101920] text-white px-8 py-3 rounded-lg hover:bg-[#2a3540] transition-colors whitespace-nowrap font-medium"
                  >
                    Show Results
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Wrapper that spans both color zones for the overlapping card effect */}
      <div className="relative">
        {/* Green background - top half */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#c8d5d0]"></div>
        {/* White background - bottom half */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white"></div>
        
        {/* Black Results Container - sits naturally centered on the boundary */}
        <div className="relative z-10 py-4 px-[5%]">
          <div className="bg-[#101920] w-full max-w-[1100px] mx-auto p-10 lg:p-12 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Title on the left */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white lg:flex-shrink-0 lg:pt-2">Results for your practice</h2>
              
              {/* Annual Savings Card on the right */}
              <div className="bg-[#DCCF8F] rounded-[24px] p-8 text-center flex-1">
                <div className="inline-block border border-[#101921]/20 rounded-full px-4 py-1 text-xs font-medium tracking-wider mb-3 uppercase bg-[#101921]/5">
                  <span className="text-[#101921]">Your Potential Annual Savings</span>
                </div>
                <div className="text-5xl lg:text-6xl font-bold mb-2 text-[#101921]">
                  {showResults ? formatCurrency(netSavings) : '$---'}
                </div>
                <div className="text-lg text-[#101921]">per year with Natalie</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section using Component_10 */}
      <Component_10 />
    </>
  );
}

export default ROICalculator;

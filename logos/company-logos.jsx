export default function CompanyLogos() {
  const logos = [
    {
      name: "IDFC First Bank",
      filename: "idfc-bank-logo.png",
      description: "Indian private sector bank based in Mumbai, formed from the 2018 merger of IDFC Bank and Capital First",
      colors: ["#ED1C24", "#FFFFFF"],
      website: "https://www.idfcfirstbank.com",
      downloadUrl: "https://seeklogo.com/vector-logo/356173/idfc-first-bank"
    },
    {
      name: "Barclays",
      filename: "barclays-logo.png",
      description: "British multinational universal bank, featuring the iconic blue eagle symbol dating back to 1728",
      colors: ["#00AEEF", "#FFFFFF"],
      website: "https://www.barclays.com",
      downloadUrl: "https://www.stickpng.com/img/icons-logos-emojis/iconic-brands/barclays-logo"
    },
    {
      name: "Teleperformance (TP)",
      filename: "teleperformance-logo.png",
      description: "Global leader in digitally integrated business services, founded in 1978 (now known as TP)",
      colors: ["#00B4E6", "#FFFFFF"],
      website: "https://www.tp.com",
      downloadUrl: "https://seeklogo.com/free-vector-logos/teleperformance"
    },
    {
      name: "Great Place To Work (GPTW)",
      filename: "gptw-logo.png",
      description: "Global authority on workplace culture, recognizing the best workplaces worldwide since 1992",
      colors: ["#00A9E0", "#FFFFFF"],
      website: "https://www.greatplacetowork.com",
      downloadUrl: "https://seeklogo.com/vector-logo/346136/great-place-to-work"
    },
    {
      name: "Intervue",
      filename: "intervue-logo.png",
      description: "Cloud-based platform for remote technical interviews with collaborative coding environment",
      colors: ["#4A90E2", "#FFFFFF"],
      website: "https://www.intervue.io",
      downloadUrl: "https://intervue.io"
    },
    {
      name: "AlmavivA",
      filename: "almaviva-logo.png",
      description: "Leading Italian ICT company providing digital innovation and technology services since 1972",
      colors: ["#E30613", "#FFFFFF"],
      website: "https://www.almaviva.it",
      downloadUrl: "https://seeklogo.com/vector-logo/303197/almaviva"
    },
    {
      name: "UN Sustainable Development Goals (SDG)",
      filename: "sdg-logo.png",
      description: "17 Goals adopted by UN Member States in 2015 for peace, prosperity, and planet by 2030",
      colors: ["Multiple colors", "Color wheel"],
      website: "https://sdgs.un.org",
      downloadUrl: "https://www.un.org/sustainabledevelopment/news/communications-material/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Company Logos Collection
          </h1>
          <p className="text-slate-600 text-lg">
            Professional logos for leading organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-slate-100 to-white p-8 flex items-center justify-center min-h-48">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-400 mb-2">
                    {logo.name.split(' ')[0]}
                  </div>
                  <div className="text-sm text-slate-500 font-mono bg-slate-100 px-3 py-1 rounded">
                    {logo.filename}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {logo.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {logo.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    Brand Colors:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {logo.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Visit Website
                  </a>
                  <a
                    href={logo.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-600 hover:bg-slate-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Download Logo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            📥 How to Download These Logos
          </h2>
          <div className="text-blue-800 space-y-2">
            <p className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              <span>Click the "Download Logo" button for any company above</span>
            </p>
            <p className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              <span>You'll find high-quality PNG, SVG, AI, and EPS formats available</span>
            </p>
            <p className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              <span>Most logos are free for editorial and non-commercial use</span>
            </p>
            <p className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              <span>Always check the specific usage guidelines for commercial purposes</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            All logos are property of their respective owners. Please respect trademark and copyright laws.
          </p>
        </div>
      </div>
    </div>
  );
}

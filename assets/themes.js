// April Fools' Upside Down 
document.addEventListener('DOMContentLoaded', function() {
  // Check if today is April 1st
  const today = new Date();
  const isAprilFools = today.getMonth() === 3 && today.getDate() === 1;
  
  if (isAprilFools) {
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Add CSS to flip the entire page upside down
    styleElement.textContent = `
      body {
        transform: rotate(180deg);
        transform-origin: center center;
        min-height: 100vh;
      }
      
      /* Optional: Also flip text to make it readable (uncomment if you want text to be readable) */
      /*
      p, h1, h2, h3, h4, h5, h6, span, a, li, div {
        transform: rotate(180deg);
      }
      */
      
      /* Add a message explaining the prank */
      body::before {
        content: "April Fools! Your screen isn't broken, we're just having some fun today!";
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 5px;
        z-index: 9999;
        font-weight: bold;
      }
    `;
    
    // Add the style element to the document
    document.head.appendChild(styleElement);
    
    // Optional: Add a cookie so the prank only happens once per session
    document.cookie = "aprilFoolsSeen=true; path=/; max-age=86400";
  }
});

// Holiday themes
document.addEventListener('DOMContentLoaded', function () {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed
  const date = today.getDate();
  
  console.log("Current date:", month, date); // Debug line to check date

  const specialThemes = [
    { name: 'independence', month: 6, date: 4 },    // July 4th
    { name: 'piday', month: 2, date: 14 },          // March 14th
    { name: 'bastille', month: 6, date: 25 },       // July 14
    { name: 'halloween', month: 9, date: 31 },      // Oct 31
    { name: 'christmas', month: 11, date: 25 },     // Dec 25
    { name: 'newyear', month: 11, date: 31 },       // Dec 31
    { name: 'newyear', month: 0, date: 1 },         // Jan 1
    { name: 'solstice', month: 4, date: 7 },        // June 7
    { name: 'easteregg', month: 3, date: 20 },      // April 20
  ];

  // Apply theme based on current date
  applyThemeForDate(month, date);
  
  // Function to apply the appropriate theme for a given date
  function applyThemeForDate(month, date) {
    // Clear any existing themes first
    clearAllThemes();
    
    // Check for GameStop week
    const isGMEweek = (month === 0 && date >= 26 && date <= 31);
    
    if (isGMEweek) {
      document.body.classList.add('gamestop');
      setupGameStop();
      console.log("Applied GameStop theme");
      return;
    }
    
    // Check for specific holiday dates
    for (const theme of specialThemes) {
      if (month === theme.month && date === theme.date) {
        document.body.classList.add(theme.name);
        console.log("Applied theme:", theme.name);
        
        // Call the appropriate setup function if needed
        if (theme.name === 'christmas') {
          setupChristmas();
        } else if (theme.name === 'halloween') {
          setupHalloween();
        } else if (theme.name === 'piday') {
        setupPiDay();
        }
        
        return;
      }
    }
    
    console.log("No special theme for today");
  }
  
  // Function to clear all themes
  function clearAllThemes() {
    // Remove theme classes
    document.body.className = document.body.className
      .replace(/bastille|halloween|christmas|newyear|solstice|easteregg|gamestop|independence|piday/g, '')
      .trim();
    
    // Remove special containers
    const containers = [
      'halloween-container',
      'snow',
      'gme-container'
    ];
    
    containers.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.remove();
    });
  }
  
  // Add test function for forcing themes
  window.forceTheme = function(themeName) {
    clearAllThemes();
    
    if (!themeName) {
      console.log("Theme cleared");
      return;
    }
    
    document.body.classList.add(themeName);
    
    if (themeName === 'christmas') {
      setupChristmas();
    } else if (themeName === 'gamestop') {
      setupGameStop();
    } else if (themeName === 'halloween') {
      setupHalloween();
    } else if (themeName === 'piday') {
    setupPiDay();
    }

    
    console.log("Forced theme:", themeName);
  };
  
  // Add styles directly
  const styleElement = document.createElement('style');
  styleElement.textContent = `
  /* Holiday-Themed CSS Styles */

  /* Independence Day (July 4th) - Proper American flag theme */
  body.independence {
    background-color: #ffffff !important;
    color: #001f5b !important;
    font-family: 'American Typewriter', 'Courier New', monospace !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  body.independence::before {
    content: "★★★" !important;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    font-size: 15vw !important;
    color: rgba(0, 41, 124, 0.03) !important;
    letter-spacing: 20px !important;
    z-index: -1 !important;
    pointer-events: none !important;
  }

  body.independence::after {
    content: "" !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background-image: 
      linear-gradient(0deg, rgba(187, 0, 34, 0.05) 10%, transparent 10%, transparent 20%, 
                      rgba(187, 0, 34, 0.05) 20%, rgba(187, 0, 34, 0.05) 30%, transparent 30%, transparent 40%, 
                      rgba(187, 0, 34, 0.05) 40%, rgba(187, 0, 34, 0.05) 50%, transparent 50%, transparent 60%, 
                      rgba(187, 0, 34, 0.05) 60%, rgba(187, 0, 34, 0.05) 70%, transparent 70%, transparent 80%, 
                      rgba(187, 0, 34, 0.05) 80%, rgba(187, 0, 34, 0.05) 90%, transparent 90%) !important;
    z-index: -1 !important;
    pointer-events: none !important;
  }

  body.independence h1, body.independence h2, body.independence h3 {
    color: #bf0a30 !important;
    border-bottom: 2px solid #002868 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
  }

  body.independence a {
    color: #002868 !important;
    text-decoration: none !important;
    font-weight: bold !important;
    position: relative !important;
    display: inline-block !important;
    padding: 0 5px !important;
    border-radius: 3px !important;
    transition: all 0.3s ease !important;
  }

  body.independence a:hover {
    background-color: #002868 !important;
    color: #ffffff !important;
  }

  /* Pi Day (March 14th) - Mathematical theme with pie icons */
  body.piday {
    background-color: #f5f5f5 !important;
    color: #333 !important;
    font-family: 'Courier New', monospace !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  body.piday::before {
    content: "π" !important;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    font-size: 40vw !important;
    color: rgba(62, 142, 222, 0.05) !important;
    font-family: 'Georgia', serif !important;
    z-index: -1 !important;
    pointer-events: none !important;
  }

  body.piday h1, body.piday h2, body.piday h3 {
    color: #e2703a !important; /* Pie crust color */
    font-family: 'Georgia', serif !important;
    border-bottom: 2px solid #3e8ede !important;
  }

  body.piday a {
    color: #3e8ede !important;
    text-decoration: none !important;
    border-bottom: 1px dashed #3e8ede !important;
    padding-bottom: 1px !important;
    transition: all 0.3s ease !important;
  }

  body.piday a:hover {
    color: #e2703a !important;
    border-bottom: 1px solid #e2703a !important;
  }  

  /* Bastille Day (July 14) */
  body.bastille {
    background: linear-gradient(90deg, #002395 10%, #FFFFFF 10%, #FFFFFF 90%, #ED2939 90%) !important;
    color: #000 !important;
    font-family: 'Libre Baskerville', serif !important;
  }
  
  body.bastille h1, body.bastille h2, body.bastille h3 {
    color: #002395 !important;
    text-shadow: 1px 1px 3px rgba(237, 41, 57, 0.5) !important;
    border-bottom: 2px solid #ED2939 !important;
  }
  
  body.bastille a {
    color: #ED2939 !important;
    text-decoration: underline !important;
  }
  
  body.bastille:after {
    content: "Liberté, Égalité, Fraternité" !important;
    position: fixed !important;
    bottom: 10px !important;
    right: 10px !important;
    font-style: italic !important;
    opacity: 0.7 !important;
    pointer-events: none !important;
  }
  
  /* Halloween (October 31) */
  body.halloween {
    background-color: #1E1E1E !important;
    color: #DDD !important;
    font-family: 'Creepster', cursive !important;
    text-shadow: 1px 1px 2px #000 !important;
    position: relative !important;
  }
  
  body.halloween h1, body.halloween h2, body.halloween h3 {
    color: #FF7700 !important;
    letter-spacing: 1px !important;
  }
  
  body.halloween a {
    color: #FF7700 !important;
    text-decoration: none !important;
    text-shadow: 0 0 5px #FF7700 !important;
    transition: all 0.3s ease !important;
  }
  
  body.halloween a:hover {
    color: #FFB700 !important;
    text-shadow: 0 0 8px #FFB700 !important;
  }
  
  .halloween-emoji {
    position: fixed !important;
    z-index: -1 !important;
    pointer-events: none !important;
  }
  
  /* Christmas (December 25) */
  body.christmas {
    background-color: #0C5142 !important;
    color: #FFFFFF !important;
    font-family: 'Mountains of Christmas', cursive !important;
    position: relative !important;
    overflow-x: hidden !important;
  }
  
  body.christmas::before {
    content: "" !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 10px !important;
    background: repeating-linear-gradient(
      90deg,
      #D41c1a,
      #D41c1a 20px,
      white 20px,
      white 40px
    ) !important;
    z-index: 1000 !important;
    pointer-events: none !important;
  }
  
  body.christmas::after {
    content: "" !important;
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 10px !important;
    background: repeating-linear-gradient(
      90deg,
      #D41c1a,
      #D41c1a 20px,
      white 20px,
      white 40px
    ) !important;
    z-index: 1000 !important;
    pointer-events: none !important;
  }
  
  body.christmas h1, body.christmas h2, body.christmas h3 {
    color: #D41c1a !important;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5) !important;
    border-bottom: 3px dotted #D41c1a !important;
  }
  
  body.christmas a {
    color: #E8B923 !important;
    text-decoration: none !important;
    font-weight: bold !important;
    text-shadow: 0 0 2px #000 !important;
  }
  
  /* Snowflakes */
  .snowflake {
    position: fixed !important;
    font-size: 20px !important;
    color: white !important;
    text-shadow: 0 0 3px rgba(0,0,0,0.3) !important;
    z-index: 9 !important;
    user-select: none !important;
    cursor: default !important;
    pointer-events: none !important;
  }
  
  @keyframes snowflake-fall {
    0% { top: -10%; }
    100% { top: 100%; }
  }
  
  @keyframes snowflake-shake {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(80px); }
  }
  
  /* New Year's Eve/Day (Dec 31/Jan 1) */
  body.newyear {
    background-color: #000B29 !important;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(249, 211, 66, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 70% 60%, rgba(112, 203, 255, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 40% 80%, rgba(255, 133, 203, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 90% 10%, rgba(178, 255, 165, 0.2) 0%, transparent 20%) !important;
    color: #FFFFFF !important;
    font-family: 'Montserrat', sans-serif !important;
    position: relative !important;
  }
  
  body.newyear h1, body.newyear h2, body.newyear h3 {
    background: linear-gradient(90deg, #FFD700, #FF8C00, #FF0080, #8A2BE2, #00BFFF) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
    animation: rainbow 6s linear infinite !important;
  }
  
  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  
  body.newyear a {
    color: #FFD700 !important;
    text-decoration: none !important;
    position: relative !important;
  }
  
  body.newyear a:after {
    content: '' !important;
    position: absolute !important;
    bottom: -2px !important;
    left: 0 !important;
    width: 100% !important;
    height: 1px !important;
    background: linear-gradient(90deg, #FFD700, #FF0080) !important;
    transform: scaleX(0) !important;
    transform-origin: right !important;
    transition: transform 0.3s ease !important;
  }
  
  body.newyear a:hover:after {
    transform: scaleX(1) !important;
    transform-origin: left !important;
  }
  
  /* June 7 */
  body.solstice {
    background-color: #F5F5F5 !important;
    background-image: linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px) !important;
    background-size: 20px 20px !important;
    color: #333333 !important;
    font-family: 'EB Garamond', serif !important;
    letter-spacing: 0.3px !important;
    line-height: 1.6 !important;
  }
  
  body.solstice h1, body.solstice h2, body.solstice h3 {
    color: #1A3A5C !important;
    font-weight: normal !important;
    font-style: italic !important;
    border-bottom: 1px solid rgba(26, 58, 92, 0.2) !important;
  }
  
  body.solstice a {
    color: #5C7A99 !important;
    text-decoration: none !important;
    border-bottom: 1px dotted #5C7A99 !important;
    transition: all 0.3s ease !important;
  }
  
  body.solstice a:hover {
    color: #1A3A5C !important;
    border-bottom: 1px solid #1A3A5C !important;
  }
  
  body.solstice p:first-of-type:first-letter {
    font-size: 1.5em !important;
    font-family: 'Baskerville', serif !important;
  }
  
  /* Easter Egg Day (April 20) */
  body.easteregg {
    background-color: #F9F7FE !important;
    background-image: 
      radial-gradient(circle at 30% 20%, rgba(255, 105, 180, 0.15) 20px, transparent 21px),
      radial-gradient(circle at 70% 45%, rgba(152, 251, 152, 0.15) 25px, transparent 26px),
      radial-gradient(circle at 40% 70%, rgba(135, 206, 250, 0.15) 18px, transparent 19px),
      radial-gradient(circle at 80% 80%, rgba(255, 223, 0, 0.15) 22px, transparent 23px) !important;
    color: #555 !important;
    font-family: 'Comic Neue', sans-serif !important;
  }
  
  body.easteregg h1, body.easteregg h2, body.easteregg h3 {
    color: #FF69B4 !important;
    font-family: 'Indie Flower', cursive !important;
  }
  
  body.easteregg a {
    color: #7B68EE !important;
    text-decoration: none !important;
    position: relative !important;
    transition: all 0.2s ease !important;
  }
  
  body.easteregg a:hover {
    color: #FF69B4 !important;
  }
  
  body.easteregg a:after {
    content: "🥚" !important;
    position: absolute !important;
    top: -15px !important;
    right: -15px !important;
    font-size: 12px !important;
    opacity: 0 !important;
    transition: all 0.3s ease !important;
    pointer-events: none !important;
  }
  
  body.easteregg a:hover:after {
    opacity: 1 !important;
    transform: rotate(20deg) !important;
  }
  
  /* GameStop Week (Jan 24-31) */
  body.gamestop {
    background-color: #0E0E0E !important;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E") !important;
    color: #EAEAEA !important;
    font-family: 'Courier New', monospace !important;
    position: relative !important;
    overflow-x: hidden !important;
  }
  
  body.gamestop::before {
    content: "WE'RE NOT LEAVING" !important;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    font-size: 6vw !important;
    font-weight: bold !important;
    color: rgba(255, 255, 255, 0.03) !important;
    white-space: nowrap !important;
    z-index: -1 !important;
    pointer-events: none !important;
  }
  
  body.gamestop h1::before, body.gamestop h2::before, body.gamestop h3::before {
    content: "🚀 " !important;
  }
  
  body.gamestop h1, body.gamestop h2, body.gamestop h3 {
    color: #FF4500 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
  }
  
  body.gamestop a {
    color: #9AFFCB !important;
    text-decoration: none !important;
    font-weight: bold !important;
    position: relative !important;
    display: inline-block !important;
  }
  
  body.gamestop a::after {
    content: "" !important;
    position: absolute !important;
    left: 0 !important;
    bottom: -2px !important;
    width: 100% !important;
    height: 1px !important;
    background-color: #9AFFCB !important;
    transform: scaleX(0) !important;
    transform-origin: left !important;
    transition: transform 0.3s ease !important;
  }
  
  body.gamestop a:hover::after {
    transform: scaleX(1) !important;
  }
  
  #gme-container {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    pointer-events: none !important;
    z-index: 0 !important;
    overflow: hidden !important;
  }
  
  .diamond-hands {
    position: absolute !important;
    bottom: -50px !important;
    font-size: 24px !important;
    opacity: 0.8 !important;
    z-index: 1 !important;
    animation: float-up 8s linear infinite !important;
    pointer-events: none !important;
  }
  
  @keyframes float-up {
    0% { 
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
    }
    100% { 
      transform: translateY(-100vh) rotate(20deg);
      opacity: 0;
    }
  }
  
  .gme-quote {
    position: absolute !important;
    color: #FF4500 !important;
    font-weight: bold !important;
    font-size: 20px !important;
    opacity: 0 !important;
    z-index: 1 !important;
    animation: fade-in-out 7s ease-in-out infinite !important;
    text-shadow: 0 0 5px #000 !important;
    pointer-events: none !important;
  }
  
  @keyframes fade-in-out {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
  }
  
  /* Font imports */
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Creepster&family=Mountains+of+Christmas&family=Montserrat&family=EB+Garamond&family=Comic+Neue&family=Indie+Flower&display=swap');
  `;
  document.head.appendChild(styleElement);
  
  function setupPiDay() {
    // Remove any existing pie icon container
    const existingContainer = document.getElementById('piday-container');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Create a container for pi day elements
    const pidayContainer = document.createElement('div');
    pidayContainer.id = 'piday-container';
    pidayContainer.style.position = 'fixed';
    pidayContainer.style.top = '0';
    pidayContainer.style.left = '0';
    pidayContainer.style.width = '100%';
    pidayContainer.style.height = '100%';
    pidayContainer.style.pointerEvents = 'none';
    pidayContainer.style.zIndex = '-1';
    document.body.appendChild(pidayContainer);
    
    // Pie emoji
    const pieEmoji = '🥧';
    
    // Get window width to avoid center 800px
    const windowWidth = window.innerWidth;
    const centerWidth = 800;
    const sideWidth = (windowWidth - centerWidth) / 2;
    
    // Large pie sizes (20x bigger) - now 320px to 560px instead of 16-28px
    const minSize = 320;
    const maxSize = 560;
    
    // Fewer pies since they're much larger
    const numPies = 4;
    
    // Track positions to prevent overlap
    const piePositions = [];
    
    for (let i = 0; i < numPies; i++) {
      const pie = document.createElement('div');
      pie.style.position = 'fixed';
      pie.textContent = pieEmoji;
      
      // Random size
      const size = Math.random() * (maxSize - minSize) + minSize;
      pie.style.fontSize = size + 'px';
      
      // Very low opacity for such large elements
      pie.style.opacity = (Math.random() * 0.05 + 0.02).toString(); // 0.02-0.07
      
      let overlap = true;
      let attempts = 0;
      let left, top;
      
      // Find non-overlapping position
      while (overlap && attempts < 20) {
        // Random position, avoiding center 800px
        top = Math.random() * (window.innerHeight - size);
        
        // Randomly place on left or right side
        if (Math.random() > 0.5 && sideWidth > size/2) {
          // Right side
          left = (windowWidth - sideWidth + Math.random() * (sideWidth - size));
        } else {
          // Left side
          left = Math.random() * (sideWidth - size);
        }
        
        // Check if this position overlaps with existing pies
        overlap = piePositions.some(pos => {
          const xOverlap = Math.abs(pos.left - left) < (size + pos.size) / 2;
          const yOverlap = Math.abs(pos.top - top) < (size + pos.size) / 2;
          return xOverlap && yOverlap;
        });
        
        attempts++;
      }
      
      // If we couldn't find a non-overlapping position after 20 attempts, skip this pie
      if (overlap) continue;
      
      // Store position
      piePositions.push({ left, top, size });
      
      // Set position
      pie.style.left = left + 'px';
      pie.style.top = top + 'px';
      
      // Random rotation
      pie.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      pidayContainer.appendChild(pie);
    }
  }

  function setupHalloween() {
    // Remove any existing Halloween emoji container
    const existingContainer = document.getElementById('halloween-container');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Create a container for Halloween emojis
    const halloweenContainer = document.createElement('div');
    halloweenContainer.id = 'halloween-container';
    halloweenContainer.style.position = 'fixed';
    halloweenContainer.style.top = '0';
    halloweenContainer.style.left = '0';
    halloweenContainer.style.width = '100%';
    halloweenContainer.style.height = '100%';
    halloweenContainer.style.pointerEvents = 'none';
    halloweenContainer.style.zIndex = '-1';
    document.body.appendChild(halloweenContainer);
    
    // Halloween emojis
    const emojis = ['🎃', '👻', '🕸️', '🕷️', '🦇', '🧙‍♀️', '🧟‍♂️', '🧛‍♀️', '💀'];
    
    // Create spaced emojis throughout the background
    for (let i = 0; i < 40; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'halloween-emoji';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Random position
      emoji.style.left = Math.random() * 100 + '%';
      emoji.style.top = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 16 + 16; // 16px to 32px
      emoji.style.fontSize = size + 'px';
      
      // Random opacity
      emoji.style.opacity = (Math.random() * 0.1 + 0.05).toString();
      
      // Add to container
      halloweenContainer.appendChild(emoji);
    }
    
    // Add floating pumpkin in the corner
    const floatingPumpkin = document.createElement('div');
    floatingPumpkin.textContent = '🎃';
    floatingPumpkin.style.position = 'fixed';
    floatingPumpkin.style.top = '10px';
    floatingPumpkin.style.right = '10px';
    floatingPumpkin.style.fontSize = '24px';
    floatingPumpkin.style.animation = 'float 3s ease-in-out infinite';
    floatingPumpkin.style.pointerEvents = 'none';
    halloweenContainer.appendChild(floatingPumpkin);
  }
  
  function setupChristmas() {
    // Remove any existing snow container
    const existingSnow = document.getElementById('snow');
    if (existingSnow) {
      existingSnow.remove();
    }
    
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '1';
    document.body.appendChild(snowContainer);
    
    for (let i = 0; i < 50; i++) {
      createSnowflake();
    }
    
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.opacity = Math.random() * 0.8 + 0.2; // 0.2-1.0
      snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snowflake.innerHTML = '❄';
      
      // Apply the animations directly to each snowflake
      const fallDuration = Math.random() * 5 + 8; // 8-13s
      const shakeDuration = Math.random() * 3 + 2; // 2-5s
      const fallDelay = Math.random() * 5; // 0-5s
      const shakeDelay = Math.random() * 5; // 0-5s
      
      snowflake.style.animation = 
        `snowflake-fall ${fallDuration}s linear ${fallDelay}s infinite, 
         snowflake-shake ${shakeDuration}s ease-in-out ${shakeDelay}s infinite`;
      
      snowflake.style.top = '-10px';
      snowContainer.appendChild(snowflake);
    }
  }
  
  function setupGameStop() {
    // Remove any existing GME container
    const existingContainer = document.getElementById('gme-container');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Create a container for all GameStop elements
    const gmeContainer = document.createElement('div');
    gmeContainer.id = 'gme-container';
    document.body.appendChild(gmeContainer);
    
    const quotes = [
      "I LIKE THE STOCK", 
      "DEEP FUCKING VALUE", 
      "DIAMOND HANDS", 
      "TO THE MOON", 
      "HODL", 
      "NOT A CAT",
      "APES TOGETHER STRONG",
      "POWER TO THE PLAYERS",
      "THIS IS THE WAY"
    ];
    
    // Create diamond hands floating up - keeping them away from center
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createDiamondHand();
      }, i * 500);
    }
    
    // Create random quotes - making sure they're visible
    for (let i = 0; i < quotes.length; i++) {
      setTimeout(() => {
        createQuote(quotes[i], i);
      }, i * 1000 + 500);
    }
    
    function createDiamondHand() {
      const diamond = document.createElement('div');
      diamond.className = 'diamond-hands';
      diamond.textContent = '💎🙌';
      
      // Calculate position to avoid center 800px
      const windowWidth = window.innerWidth;
      const centerWidth = 800;
      const sideWidth = (windowWidth - centerWidth) / 2;
      
      // Randomly place on left or right side
      if (Math.random() > 0.5 && sideWidth > 50) {
        // Place on right side
        diamond.style.left = (windowWidth - sideWidth + Math.random() * (sideWidth - 50)) + 'px';
      } else {
      // Place on left side
        diamond.style.left = Math.random() * (sideWidth - 50) + 'px';
      }
      
      diamond.style.animationDuration = (Math.random() * 5 + 5) + 's';
      gmeContainer.appendChild(diamond);
      
      setTimeout(() => {
        if (gmeContainer.contains(diamond)) {
          gmeContainer.removeChild(diamond);
          createDiamondHand();
        }
      }, 8000);
    }
    
    function createQuote(quoteText, index) {
      const quote = document.createElement('div');
      quote.className = 'gme-quote';
      quote.textContent = quoteText;
      
      // Position quotes in different parts of the screen
      // but avoid the center 800px
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const centerWidth = 800;
      const sideWidth = (windowWidth - centerWidth) / 2;
      
      // Alternate sides
      if (index % 2 === 0 && sideWidth > 50) {
        // Right side
        quote.style.left = (windowWidth - sideWidth + Math.random() * (sideWidth - 150)) + 'px';
      } else {
        // Left side
        quote.style.left = Math.random() * (sideWidth - 150) + 'px';
      }
      
      quote.style.top = (Math.random() * (windowHeight - 100) + 50) + 'px';
      quote.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
      gmeContainer.appendChild(quote);
      
      // Set definite ending time for animation
      setTimeout(() => {
        if (gmeContainer.contains(quote)) {
          gmeContainer.removeChild(quote);
          // Create a new quote with the same text but different position
          setTimeout(() => createQuote(quoteText, index), 500);
        }
      }, 7000);
    }
  }
});

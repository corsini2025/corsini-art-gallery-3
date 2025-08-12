// app/page.tsx — Nahuel Huapi (ondulation renforcée, milieu→haut)
const IMAGE_URL = "/nahuel-huapi-lac.png"; // mets l’image dans /public (tu peux aussi la dupliquer en /lac.png)

export default function Page() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Ondulation : un peu plus intense */}
          <filter id="ripple" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.004 0.009"
              numOctaves={2}
              seed={8}
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="11s"
                values="0.004 0.009; 0.006 0.012; 0.004 0.009"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={11} xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" dur="11s" values="9;16;9" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          {/* Vignette douce pour le contraste */}
          <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopOpacity="0.10" />
            <stop offset="100%" stopOpacity="0.55" />
          </linearGradient>

          {/* MASK : le haut/milieu bougent, le bas reste calme */}
          <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="60%" stopColor="#fff" />
            <stop offset="80%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
          <mask id="topMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#maskGradient)" />
          </mask>
        </defs>

        {/* Image de base, sans filtre (plein cadre) */}
        <image href={IMAGE_URL} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />

        {/* Copie avec filtre, masquée pour agir surtout du milieu vers le haut */}
        <g mask="url(#topMask)">
          <image
            href={IMAGE_URL}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            filter="url(#ripple)"
          />
        </g>

        {/* Vignette délicate */}
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </svg>

      {/* Label discret (tu peux le supprimer) */}
      <div
        style={{
          position: "absolute",
          right: "4vw",
          bottom: "5vh",
          fontFamily: 'ui-serif, "Didot", "Playfair Display", "Cormorant Garamond", serif',
          fontSize: "clamp(14px, 1.4vw, 20px)",
          letterSpacing: "0.12em",
          textTransform: "lowercase",
          padding: "0.35em 0.8em",
          borderRadius: 999,
          background: "rgba(10,10,10,0.35)",
          WebkitBackdropFilter: "blur(2px)",
          backdropFilter: "blur(2px)",
          color: "transparent",
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,0.35), rgba(10,10,10,0.35)),linear-gradient(90deg, #f5e6b1 0%, #d9b24c 30%, #b08d2a 50%, #e7cf7a 70%, #a37e1c 100%)",
          WebkitBackgroundClip: "padding-box, text",
          backgroundClip: "padding-box, text",
          textShadow: "0 0 8px rgba(255,224,140,0.15)",
          border: "1px solid rgba(221,191,105,0.35)",
          boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
        }}
      >
        to be continued
      </div>
    </main>
  );
}

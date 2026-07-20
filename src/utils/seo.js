export function injectSEOMeta() {
  document.title = "EcoChain — AI + Blockchain Recycling | Uzbekistan";

  const setMeta = (name, content, prop = false) => {
    const el = document.querySelector(`${prop ? '[property' : '[name'}="${name}"]`) || document.createElement("meta");
    prop ? el.setAttribute("property", name) : el.setAttribute("name", name);
    el.setAttribute("content", content);
    if (!el.parentNode) document.head.appendChild(el);
  };

  setMeta("description", "EcoChain — AI-powered reverse vending machines with blockchain NFT certificates and stablecoin rewards. Launching in Tashkent, Uzbekistan 2025. EPR compliance solutions for corporations.");
  setMeta("keywords", "EcoChain, recycling Uzbekistan, blockchain recycling, NFT certificates, EPR law Uzbekistan, reverse vending machine, plastic recycling Tashkent, NAPP stablecoin, UEC token");
  setMeta("robots", "index, follow");
  setMeta("og:title", "EcoChain — Recycling that pays you back", true);
  setMeta("og:description", "AI recycling machines + blockchain NFT certificates + stablecoin rewards. Uzbekistan, 2025.", true);
  setMeta("og:type", "website", true);
  setMeta("og:url", "https://ecochain.uz", true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", "EcoChain — AI + Blockchain Recycling");
  setMeta("twitter:description", "EPR-compliant recycling infrastructure with NFT certificates and UEC stablecoin. Launching Uzbekistan 2025.");

  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", "https://ecochain.uz");
  if (!canonical.parentNode) document.head.appendChild(canonical);
}

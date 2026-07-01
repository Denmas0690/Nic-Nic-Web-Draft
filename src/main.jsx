import React from "react";
import { createRoot } from "react-dom/client";
import {
ArrowRight,
BadgePercent,
Clock3,
Instagram,
MessageCircle,
Music2,
PackageCheck,
ShoppingBag,
} from "lucide-react";
import "./styles.css";

const products = [
{
name: "Nic Nic 4L Jar",
note: "Dummy product detail",
price: "$4.50",
image: "/assets/products/nic-nic-4l.png",
},
{
name: "Lapchiong Madu",
note: "Dummy product detail",
price: "$5.00",
image: "/assets/products/nic-nic-lapchiong-madu.png",
},
{
name: "Rasa Mix Jar",
note: "Dummy product detail",
price: "$3.80",
image: "/assets/products/nic-nic-rasa.png",
},
{
name: "Samcan Premium",
note: "Dummy product detail",
price: "$4.20",
image: "/assets/products/nic-nic-samcan-premium.png",
},
{
name: "Nic Nic 2L Jar",
note: "Dummy product detail",
price: "$4.90",
image: "/assets/products/nicnic-2l.png",
},
{
name: "Nic Nic 250g Pack",
note: "Dummy product detail",
price: "$12.00",
image: "/assets/products/nicnic-250gram.png",
},
];

function ProductFrame({ product }) {
return (
<article className="product-card">
<div className="photo-frame">
<img src={product.image} alt={product.name} />
</div>
<div className="product-info">
<div>
<h3>{product.name}</h3>
<p>{product.note}</p>
</div>
<strong>{product.price}</strong>
</div>
</article>
);
}

function App() {
return (
<main>
<header className="site-header">
<a className="brand" href="#top" aria-label="Snack Pop home">
<ShoppingBag size={22} />
<span>Snack Pop</span>
</a>
<nav aria-label="Main navigation">
<a href="#menu">Menu</a>
<a href="#promo">Promo</a>
<a href="#order">Order</a>
</nav>
</header>

<section className="hero" id="top">
<div className="hero-copy">
<div className="promo-pill">
<BadgePercent size={18} />
<span>FREE mini snack for first order</span>
</div>
<h1>Crunchy snacks for sharing & quality time.</h1>
<p>
Dummy intro copy for the client preview. Replace this with a short
brand promise, favorite flavors, or a simple local delivery message.
</p>
<div className="hero-actions">
<a className="primary-button" href="#menu">
View menu <ArrowRight size={18} />
</a>
<a className="ghost-button" href="#order">
Chat to order <MessageCircle size={18} />
</a>
</div>
</div>

<div className="hero-board" aria-label="Featured snack preview">
<div className="hero-frame">
<img src="/assets/products/nic-nic-4l.png" alt="Nic Nic product display" />
</div>
</div>
</section>

<section className="trust-row" aria-label="Service highlights">
<div>
<Clock3 size={20} />
<span>Fresh daily</span>
</div>
<div>
<PackageCheck size={20} />
<span>Neat packaging</span>
</div>
<div>
<BadgePercent size={20} />
<span>Promo-ready</span>
</div>
</section>

<section className="menu-section" id="menu">
<div className="section-heading">
<h2>Six product slots ready for real photos.</h2>
</div>
<div className="product-grid">
{products.map((product) => (
<ProductFrame key={product.name} product={product} />
))}
</div>
</section>

<section className="promo-section" id="promo">
<div>
<p className="eyebrow">Client hook</p>
<h2>FREE promo area</h2>
<p>
Dummy promo detail: get a free mini pack for selected orders this
week. Use this area for rules, expiry date, or bundle conditions.
</p>
</div>
<a className="primary-button compact" href="#order">
Claim promo <ArrowRight size={18} />
</a>
</section>

<section className="order-section" id="order">
<div className="section-heading">
<h2>Make the next step obvious.</h2>
</div>
<div className="order-panel">
<div>
<h3>Order by chat</h3>
<p>
Dummy contact copy. Add WhatsApp, Instagram DM, delivery area,
pickup time, and payment notes here.
</p>
</div>
<div className="order-buttons">
<a href="https://wa.me/" className="ghost-button">
<MessageCircle size={18} /> WhatsApp
</a>
<a href="https://instagram.com/" className="ghost-button">
<Instagram size={18} /> Instagram
</a>
<a href="https://shopee.com/" className="ghost-button">
<ShoppingBag size={18} /> Shopee
</a>
<a href="https://www.tiktok.com/" className="ghost-button">
<Music2 size={18} /> TikTok
</a>
</div>
</div>
</section>
</main>
);
}

const rootElement = document.getElementById("root");
const root = window.__snackPopRoot ?? createRoot(rootElement);
window.__snackPopRoot = root;
root.render(<App />);

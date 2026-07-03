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
name: "Kerupuk Babi 4 Liter",
/* note: "Dummy product detail", */
/* price: "$4.50", */
image: "assets/products/nic-nic-4l.png",
},
{
name: "Lapchiong Madu 500 Gram",
/* note: "Dummy product detail", */
/* price: "$5.00", */
image: "assets/products/nic-nic-lapchiong-madu.png",
},
{
name: "Kerupuk Babi Aneka Rasa",
/* note: "Dummy product detail", */
/* price: "$3.80", */
image: "assets/products/nic-nic-rasa.png",
},
{
name: "Kerupuk Babi Samcan Premium",
/* note: "Dummy product detail", */
/* price: "$4.20", */
image: "assets/products/nic-nic-samcan-premium.png",
},
{
name: "Kerupuk Babi 2 Liter",
/* note: "Dummy product detail", */
/* price: "$4.90", */
image: "assets/products/nicnic-2l.png",
},
{
name: "Kerupuk Babi 250 Gram",
/* note: "Dummy product detail", */
/* price: "$12.00", */
image: "assets/products/nicnic-250gram.png",
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
<span>Kerupuk Babi Nic Nic</span>
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
<span>Free Ongkir & Diskon</span>
</div>
<h1>Snack crunchy untuk berbagi & quality time</h1>
<p>
Kriuk nikmat disetiap gigitan!
</p>
<div className="hero-actions">
<a className="primary-button" href="#menu">
View menu <ArrowRight size={18} />
</a>
</div>
</div>

<div className="hero-board" aria-label="Featured snack preview">
<div className="hero-frame">
<img src="assets/products/nic-nic-4l.png" alt="Nic Nic product display" />
</div>
</div>
</section>

<section className="trust-row" aria-label="Service highlights">
<div>
<Clock3 size={20} />
<span>Fresh setiap hari</span>
</div>
<div>
<PackageCheck size={20} />
<span>Packaging rapi</span>
</div>
<div>
<BadgePercent size={20} />
<span>Promo</span>
</div>
</section>

<section className="menu-section" id="menu">
<div className="section-heading">
<h2>Best Seller</h2>
</div>
<div className="product-grid">
{products.map((product) => (
<ProductFrame key={product.name} product={product} />
))}
</div>
</section>

<section className="promo-section" id="promo">
<div>
<p className="eyebrow">Hanya untuk kamu!</p>
<h2>Jangan lewatkan daily PROMO untuk anda!</h2>
{/*<p>
Dummy promo detail: get a free mini pack for selected orders this
week. Use this area for rules, expiry date, or bundle conditions.
</p>*/}
</div>
<a className="primary-button compact" href="#order">
Check it out! <ArrowRight size={18} />
</a>
</section>

<section className="order-section" id="order">
<div className="section-heading">
<h2>Check sekarang juga!</h2>
</div>
<div className="order-panel">
<h3>Order by chat</h3>
<p>
Online shop kami lengkap lho!
</p>
<div className="order-buttons">
<a href="https://wa.me/6281238175025?text=Halo Nic Nic, saya mau order dong!" aria-label="Order via WhatsApp">
<MessageCircle size={22} />
WhatsApp
</a>
<a href="https://www.instagram.com/kerupukbabinicnic?igsh=Y2Roa2M1d2UzNzQ2" aria-label="Order via Instagram">
<Instagram size={22} />
Instagram
</a>
<a href="https://id.shp.ee/hT5bh8tE" aria-label="Order via Shopee">
<ShoppingBag size={22} />
Shopee
</a>
<a href="https://tk.tokopedia.com/ZSCxLvqw1/" aria-label="Order via Tokopedia">
<ShoppingBag size={22} />
Tokopedia
</a>
<a href="https://www.tiktok.com/@meistore88?_r=1&_t=ZS-97h6l3F1Tkd" aria-label="View TikTok">
<Music2 size={22} />
TikTok
</a>
</div>
</div>
</section>

<section className="studio-credit" aria-label="Website credit">
<div className="studio-credit-inner">
<p><span>Website by </span>{""}
<a href="https://boldstudio.online/" target="_blank" rel="noreferrer">BOLD Studio Team</a></p>
</div>
</section>
</main>
);
}

const rootElement = document.getElementById("root");
const root = window.__snackPopRoot ?? createRoot(rootElement);
window.__snackPopRoot = root;
root.render(<App />);

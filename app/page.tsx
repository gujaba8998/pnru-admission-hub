"use client";

import { useState } from "react";

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Search = () => <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>;

const ServiceIcon = ({ name }: { name: string }) => {
  const paths: Record<string, React.ReactNode> = {
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    apply: <><path d="M6 3h9l4 4v14H6zM14 3v5h5"/><path d="m9 15 2 2 4-5"/></>,
    status: <><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.7-3 2.5-5 5.5-5 1.4 0 2.6.4 3.5 1.1M15 18l2 2 4-5"/></>,
    find: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5M8 8h4M8 11h3"/></>,
    announce: <><path d="m4 13 2 5h3l-1.5-5M5 9v4h4l8 4V5L9 9z"/><path d="M20 8v6"/></>,
    result: <><path d="M7 4h10v3c0 4-2 7-5 7s-5-3-5-7zM9 20h6M12 14v6M7 6H4v2c0 2 1 3 4 3M17 6h3v2c0 2-1 3-4 3"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h2M14 14h2M8 17h2"/></>,
    major: <><path d="M4 5c3-1 6 0 8 2v14c-2-2-5-3-8-2zM20 5c-3-1-6 0-8 2v14c2-2 5-3 8-2z"/></>,
    news: <><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></>,
    facebook: <path d="M14 22v-8h3l.5-4H14V8c0-1.2.4-2 2.1-2H18V2.4c-.7-.1-1.8-.4-3.1-.4C11.8 2 10 4 10 7.5V10H7v4h3v8z" fill="currentColor" stroke="none"/>,
    line: <><path d="M21 11c0 4.4-4 8-9 8-1 0-2-.1-2.9-.4L5 21l1.2-3.6C4.2 16 3 13.7 3 11c0-4.4 4-8 9-8s9 3.6 9 8z"/><path d="M7.5 10v3M10 10v3M10 13l-2.5-3M13 10v3M16.5 10H15v3h1.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <path d="M7 3 4 5c0 8 7 15 15 15l2-3-5-3-2 2c-3-1-5-3-6-6l2-2z"/>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
};

const services = [
  { icon:"web", title:"เว็บไซต์งานรับสมัคร", desc:"ข่าว บริการ และข้อมูลผู้สมัครจากหน่วยงานโดยตรง", category:"info", label:"เข้าเว็บไซต์", href:"https://aic.pnru.ac.th/", tone:"teal" },
  { icon:"apply", title:"สมัครเรียนออนไลน์", desc:"กรอกใบสมัครและเลือกสาขาวิชาที่ต้องการ", category:"apply", label:"เริ่มสมัคร", href:"https://admission.pnru.ac.th/apply/th", tone:"purple" },
  { icon:"status", title:"ตรวจสอบสถานะ", desc:"เข้าสู่ระบบเพื่อติดตามสถานะการสมัคร", category:"apply", label:"เข้าสู่ระบบ", href:"https://admission.pnru.ac.th/login", tone:"orange" },
  { icon:"find", title:"ค้นหารายชื่อ", desc:"ค้นหารายชื่อผู้สมัครและข้อมูลที่เกี่ยวข้อง", category:"apply", label:"ค้นหารายชื่อ", href:"https://admission.pnru.ac.th/info/findname", tone:"yellow" },
  { icon:"announce", title:"ประกาศรับสมัคร", desc:"อ่านประกาศ เกณฑ์ และรายละเอียดของแต่ละรอบ", category:"info", label:"ดูประกาศ", href:"https://admission.pnru.ac.th/info/announce/1", tone:"blue" },
  { icon:"result", title:"ประกาศผลการสอบ", desc:"ตรวจสอบรายชื่อและผลการคัดเลือก", category:"info", label:"ดูผลสอบ", href:"https://admission.pnru.ac.th/info/announceapply", tone:"green" },
  { icon:"calendar", title:"ปฏิทินรับสมัคร", desc:"ติดตามวันสมัคร สอบสัมภาษณ์ และยืนยันสิทธิ์", category:"info", label:"ดูกำหนดการ", href:"https://admission.pnru.ac.th/info/calendar/01", tone:"purple" },
  { icon:"major", title:"สาขาที่เปิดรับ", desc:"เช็กหลักสูตร คุณสมบัติ และจำนวนรับ", category:"info", label:"ดูสาขาวิชา", href:"https://admission.pnru.ac.th/info/open/03", tone:"orange" },
  { icon:"news", title:"ข่าวรับสมัคร", desc:"ข่าวสารล่าสุดจากงานรับสมัครนักศึกษา", category:"info", label:"อ่านข่าว", href:"https://aic.pnru.ac.th/new/97/all", tone:"blue" },
  { icon:"facebook", title:"Facebook", desc:"ติดตามข่าวและสอบถามผ่าน Pnru Admission", category:"contact", label:"เปิด Facebook", href:"https://www.facebook.com/PnruAdmission/", tone:"blue" },
  { icon:"line", title:"LINE @pnru", desc:"เพิ่มเพื่อนเพื่อรับข่าวสารและสอบถาม", category:"contact", label:"เปิด LINE", href:"https://line.me/R/ti/p/@pnru", tone:"green" },
  { icon:"mail", title:"อีเมลงานรับสมัคร", desc:"admission@pnru.ac.th", category:"contact", label:"ส่งอีเมล", href:"mailto:admission@pnru.ac.th", tone:"yellow" },
  { icon:"phone", title:"โทรสอบถาม", desc:"02 544 8046 ในวันและเวลาราชการ", category:"contact", label:"โทรตอนนี้", href:"tel:025448046", tone:"teal" },
];

const tabs = [
  { id:"all", label:"ทั้งหมด" }, { id:"apply", label:"การสมัคร" }, { id:"info", label:"ข้อมูลและประกาศ" }, { id:"contact", label:"ติดต่อเรา" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const visible = services.filter((item) => {
    const inCategory = filter === "all" || item.category === filter;
    const words = `${item.title} ${item.desc}`.toLowerCase();
    return inCategory && words.includes(query.trim().toLowerCase());
  });

  return (
    <main>
      <header className="site-header">
        <div className="logo-row" aria-label="หน่วยงาน PNRU Admission">
          <a href="https://www.pnru.ac.th/" target="_blank" rel="noreferrer" aria-label="มหาวิทยาลัยราชภัฏพระนคร"><img className="logo-seal" src="/pnru-seal.png" alt="ตรามหาวิทยาลัยราชภัฏพระนคร" /></a>
          <span className="logo-divider" />
          <a href="https://aic.pnru.ac.th/" target="_blank" rel="noreferrer" aria-label="สำนักส่งเสริมวิชาการและงานทะเบียน"><img className="logo-aic" src="/aic-logo.gif" alt="สำนักส่งเสริมวิชาการและงานทะเบียน" /></a>
          <span className="logo-divider" />
          <a href="#top" aria-label="PNRU Admission"><img className="logo-admission" src="/pnru-admission-logo.png" alt="PNRU Admission" /></a>
        </div>
        <div className="header-contact"><span>สอบถามข้อมูล</span><a href="tel:025448046">02 544 8046</a></div>
      </header>

      <nav className="main-nav" aria-label="เมนูหลัก">
        <div><a href="#top">หน้าแรก</a><a href="#services">รวมบริการ</a><a href="#steps">ขั้นตอนสมัคร</a><a href="#location">แผนที่</a><a href="#contact">ติดต่อเรา</a></div>
        <a className="nav-portal" href="https://aic.pnru.ac.th/" target="_blank" rel="noreferrer">เว็บไซต์งานรับสมัคร <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status-pill"><span /> ศูนย์รวมบริการสำหรับผู้สมัคร</div>
          <h1>เริ่มต้นเส้นทาง<br/>สู่รั้ว<em>พระนคร</em></h1>
          <p>สมัครเรียน ติดตามสถานะ ตรวจสอบประกาศ และเข้าถึงทุกบริการของ PNRU Admission ได้ง่ายจากจุดเดียว</p>
          <div className="hero-actions">
            <a className="button primary" href="https://admission.pnru.ac.th/apply/th" target="_blank" rel="noreferrer">สมัครเรียนออนไลน์ <Arrow /></a>
            <a className="button secondary" href="https://admission.pnru.ac.th/login" target="_blank" rel="noreferrer">ตรวจสอบสถานะ</a>
          </div>
          <div className="hero-trust"><b>✓</b> เชื่อมต่อบริการทางการของมหาวิทยาลัยราชภัฏพระนคร</div>
        </div>

        <aside className="quick-panel" aria-label="เมนูด่วน">
          <div className="panel-head"><div><small>QUICK ACCESS</small><strong>เมนูด่วน</strong></div><span>พร้อมใช้งาน</span></div>
          <a href="https://admission.pnru.ac.th/info/announce/1" target="_blank" rel="noreferrer"><i className="quick-icon purple"><ServiceIcon name="announce" /></i><span><strong>ประกาศรับสมัคร</strong><small>ดูรอบและเกณฑ์การรับสมัคร</small></span><Arrow /></a>
          <a href="https://admission.pnru.ac.th/info/calendar/01" target="_blank" rel="noreferrer"><i className="quick-icon teal"><ServiceIcon name="calendar" /></i><span><strong>ปฏิทินรับสมัคร</strong><small>ไม่พลาดทุกกำหนดการสำคัญ</small></span><Arrow /></a>
          <a href="https://admission.pnru.ac.th/info/findname" target="_blank" rel="noreferrer"><i className="quick-icon yellow"><ServiceIcon name="find" /></i><span><strong>ค้นหารายชื่อ</strong><small>ตรวจสอบข้อมูลผู้สมัคร</small></span><Arrow /></a>
          <div className="panel-tip"><b>แนะนำ</b><span>เตรียมเลขประจำตัวประชาชนหรือรหัสผู้สมัครก่อนเข้าใช้งาน</span></div>
        </aside>
      </section>

      <section className="official-card">
        <div className="official-mark"><img src="/aic-logo.gif" alt="สำนักส่งเสริมวิชาการและงานทะเบียน" /></div>
        <div><span className="overline">OFFICIAL PORTAL</span><h2>เว็บไซต์งานรับสมัครนักศึกษา</h2><p>ข่าวประชาสัมพันธ์ ข้อมูลผู้สมัคร และบริการจากสำนักส่งเสริมวิชาการและงานทะเบียน</p></div>
        <a href="https://aic.pnru.ac.th/" target="_blank" rel="noreferrer">เข้าสู่เว็บไซต์ <Arrow /></a>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading"><div><span className="overline">ALL SERVICES</span><h2>บริการทั้งหมด</h2></div><p>ค้นหาและเลือกบริการที่ต้องการได้ทันที</p></div>
        <div className="service-tools">
          <label className="search-box"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ค้นหาบริการ เช่น สมัครเรียน, ผลสอบ..." aria-label="ค้นหาบริการ" />{query && <button onClick={() => setQuery("")} aria-label="ล้างคำค้นหา">×</button>}</label>
          <div className="filter-tabs" role="group" aria-label="กรองบริการ">{tabs.map((tab) => <button key={tab.id} className={filter === tab.id ? "active" : ""} onClick={() => setFilter(tab.id)}>{tab.label}</button>)}</div>
        </div>
        <div className="result-count">พบ {visible.length} บริการ</div>
        {visible.length > 0 ? <div className="service-grid">{visible.map((item) => (
          <a className="service-card" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={item.title}>
            <div className={`service-icon ${item.tone}`}><ServiceIcon name={item.icon} /></div><div><h3>{item.title}</h3><p>{item.desc}</p></div><span className="service-action">{item.label} <Arrow /></span>
          </a>
        ))}</div> : <div className="empty-state"><Search /><h3>ไม่พบบริการที่ค้นหา</h3><p>ลองใช้คำค้นหาอื่นหรือเลือกหมวด “ทั้งหมด”</p><button onClick={() => { setQuery(""); setFilter("all"); }}>ล้างตัวกรอง</button></div>}
      </section>

      <section className="steps-section" id="steps">
        <div className="section-heading light"><div><span className="overline">HOW TO APPLY</span><h2>สมัครง่ายใน 4 ขั้นตอน</h2></div><p>ทำตามลำดับและติดตามสถานะได้ตลอดกระบวนการ</p></div>
        <ol className="steps"><li><b>01</b><span><strong>อ่านประกาศ</strong><small>ตรวจสอบคุณสมบัติและสาขาที่เปิดรับ</small></span></li><li><b>02</b><span><strong>กรอกใบสมัคร</strong><small>กรอกข้อมูลและแนบเอกสารให้ครบ</small></span></li><li><b>03</b><span><strong>ชำระและติดตาม</strong><small>ตรวจสอบการชำระเงินและสิทธิ์สอบ</small></span></li><li><b>04</b><span><strong>ตรวจสอบผล</strong><small>ดูประกาศและดำเนินการยืนยันสิทธิ์</small></span></li></ol>
      </section>

      <section className="location-section" id="location">
        <div className="map-visual" aria-hidden="true">
          <span className="road road-one" /><span className="road road-two" /><span className="road road-three" />
          <span className="map-block block-one" /><span className="map-block block-two" /><span className="map-block block-three" />
          <span className="map-pin"><ServiceIcon name="location" /></span>
          <small>มหาวิทยาลัยราชภัฏพระนคร</small>
        </div>
        <div className="location-copy">
          <span className="overline">LOCATION & DIRECTIONS</span>
          <h2>แผนที่และการเดินทาง</h2>
          <p className="location-name">งานรับสมัครนักศึกษา<br/>มหาวิทยาลัยราชภัฏพระนคร</p>
          <p className="location-address">อาคาร 4 เลขที่ 9 ถนนแจ้งวัฒนะ แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220</p>
          <div className="location-actions">
            <a className="map-button" href="https://maps.app.goo.gl/vYW8mvpqn5U5LMPx6" target="_blank" rel="noreferrer"><ServiceIcon name="location" /> เปิดใน Google Maps <Arrow /></a>
            <a className="map-phone" href="tel:025448046">โทรสอบถามเส้นทาง</a>
          </div>
          <small className="map-hint">กดปุ่มเพื่อเปิดตำแหน่งและเริ่มนำทางในแอป Google Maps</small>
        </div>
      </section>

      <section className="contact-section" id="contact"><div><span className="overline">NEED HELP?</span><h2>ต้องการความช่วยเหลือ?</h2><p>งานรับสมัครนักศึกษา สำนักส่งเสริมวิชาการและงานทะเบียน</p></div><div className="contact-actions"><a href="tel:025448046"><small>โทรสอบถาม</small><strong>02 544 8046</strong></a><a href="mailto:admission@pnru.ac.th"><small>ส่งอีเมล</small><strong>admission@pnru.ac.th</strong></a></div></section>

      <footer><div className="footer-brand"><img src="/pnru-seal.png" alt="ตรามหาวิทยาลัยราชภัฏพระนคร"/><div><strong>PNRU ADMISSION</strong><small>มหาวิทยาลัยราชภัฏพระนคร</small></div></div><p>อาคาร 4 เลขที่ 9 ถนนแจ้งวัฒนะ แขวงอนุสาวรีย์<br/>เขตบางเขน กรุงเทพมหานคร 10220</p><p className="disclaimer">เว็บไซต์รวมทางลัด โปรดตรวจสอบรายละเอียดล่าสุดจากหน้าปลายทางทุกครั้ง</p></footer>
    </main>
  );
}

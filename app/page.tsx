"use client";

import Navbar from "./components/Navbar";
import "./style.css";

export default function HomePage() {
  const topic = [
    { id: 1, title: "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape" },
    { id: 2, title: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%" },
    { id: 3, title: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement" },
    { id: 4, title: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025" },
  ];

  const test = [
    {
      title: "Pre-market Entry",
      desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
      active: true,
    },
    {
      title: "Market Entry",
      desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    },
    {
      title: "Operations",
      desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
    },
    {
      title: "Growth & Expansion",
      desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    },
  ];

  return (
    <div className="page">
      <Navbar />

      <section className="box">
        <div className="boxImage">
          <img src="/image3.jpg" alt="office" />
        </div>

        <div className="boxLeft">
          <p className="boxsub">ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS</p>
          <h1 className="boxtitle">EMPOWERED <br /> WORKPLACES</h1>
          <p className="boxdesc">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>
          <button className="boxbtn">→ LETS CONNECT</button>
          <p className="boxfooterrr">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
          </p>
        </div>

        <div className="boxsocial">
          <div className="avatarrow">
            <div className="singleava av1"><img src="/image7.png" alt="" /></div>
            <div className="singleava av2"><img src="/image5.png" alt="" /></div>
            <div className="singleava av3"><img src="/image6.png" alt="" /></div>
            <div className="singleava morebtn">MORE</div>
          </div>
          <div className="prooftext">
            <span className="proofcount">250 +</span>
            <span className="prooflabel">Enjoy Working<br />with us</span>
          </div>
        </div>
      </section>

      <section className="topicsection">
        <div className="topiccont">
          <div className="topiclabel">
            <span className="label1">HOT TOPICS</span>
            <div className="label2"></div>
          </div>
          <div className="topicsgrid">
            {topic.map((t) => (
              <div key={t.id} className="topicitem">
                <div className="topicline"></div>
                <p className="topictsxt">{t.title}</p>
                <div className="topicarrw">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="About">
        <div className="AboutWrapper">

          <div className="CompanyInfo">
            <div className="SectionLabel">
              <h2>ABOUT<br />FIRM</h2>
            </div>

            <div className="CompanyDescription">
              <div className="IntroText">
                <h3>HLS Global Group</h3>
                <p>
                  is an international accounting and business advisory firm with a focus on providing superior
                  services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990,
                  we pride ourselves in delivering the highest levels of quality and customer service while
                  remaining cost-effective. We have grown to more than 250 professionals serving clients in
                  the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business
                  requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany,
                  and UAE, we also provide comprehensive solutions to non-Japanese multinational companies
                  operating in Japan.
                </p>
              </div>

              <div className="LegacyStats">
                <div className="StatItem"><h4>250+</h4><p>Professional Staff<br />Members Globally</p></div>
                <div className="StatItem"><h4>1000+</h4><p>Clients in the HLS<br />Global Network</p></div>
                <div className="StatItemSeparator"></div>
                <div className="StatItem"><h4>35+</h4><p>Years of Experience<br />Connecting Japan<br />and the World</p></div>
                <div className="StatItem"><h4>15+</h4><p>Countries Covered<br />With Our Alliance<br />Network</p></div>
              </div>
            </div>
          </div>

          <div className="VisualHighlights">
            <div className="LocationBadge">
              <span>WE ARE LOCATED</span>
              <span>INDIA ▼</span>
            </div>
            <div className="OfficeImage">
              <img src="/image1.png" alt="Building" />
            </div>
          </div>

        </div>
      </section>

      <section className="inmsight">
        <div className="insightcontan">

          <div className="insighthead">
            <p>INSPIRATION &<br />INSIGHTS</p>
          </div>

          <div className="insightlist">
            {test.map((item, idx) => (
              <div key={idx} className={`iswnightitem ${item.active ? 'active' : ''}`}>
                <h3 className="iswnightitem-title">{item.title}</h3>
                <p className="iswnightitem-desc">{item.desc}</p>
                <div className="iswnightitem-line"></div>
              </div>
            ))}
          </div>

          <div className="insightright">
            <div className="cardmain">
              <img src="/image4.jpg" alt="Pre-market" />
              <div className="card1">
                <h4>Pre-Market</h4>
                <p>Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets</p>
              </div>
            </div>
            <div className="cardpart">
              <img src="/image3.jpg" alt="Operations" />
              <div className="strippp">Operations</div>
            </div>
            <div className="cardpart">
              <img src="/image2.jpg" alt="Growth" />
              <div className="strippp">Growth &<br />Expansion</div>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
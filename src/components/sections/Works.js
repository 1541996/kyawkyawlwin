import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  { id: 1, text: "remote works (currently working project)" },
  { id: 2, text: "developed at yammobots co. ltd." },
  { id: 3, text: "freelance works" },
];

const allData = [
  {
    id: 1,
    title: "CareMe Chat Bot",
    category: "messenger chat bot",
    desc: "Careme chatbot is primarily intended for making online booking to see the doctor with less waiting time and real-time knowledge of when your turn will be called.",
    image:
      "https://portalvhdslvb28rs1c3tmc.blob.core.windows.net/yammo/allstaricon/careme_log_new.svg",
    link: "https://m.me/caremebots",
    filter: "developed at yammobots co. ltd.",
    cname: "work-img",
  },
  {
    id: 2,
    title: "CareMe Website",
    category: "website",
    desc: "Careme website is primarily intended for making online booking to see the doctor with less waiting time and real-time knowledge of when your turn will be called.",
    image:
      "https://portalvhdslvb28rs1c3tmc.blob.core.windows.net/yammo/allstaricon/careme_log_new.svg",
    link: "https://caremebot.com/",
    filter: "developed at yammobots co. ltd.",
    cname: "work-img",
  },
  {
    id: 3,
    title: "CareMe Admin Portal",
    category: "web application",
    desc: "Careme website is primarily intended for making online booking to see the doctor with less waiting time and real-time knowledge of when your turn will be called.",
    image:
      "https://portalvhdslvb28rs1c3tmc.blob.core.windows.net/yammo/allstaricon/careme_log_new.svg",
    popupLink: [
      "images/dw/careme1.png",
      "images/dw/careme2.png",
      "images/dw/careme3.png",
      "images/dw/careme4.png",
      "images/dw/careme5.png",
      "images/dw/careme6.png",
    ],
    filter: "developed at yammobots co. ltd.",
    cname: "work-img",
  },
  {
    id: 4,
    title: "Pinlon Hospital Chat Bot",
    category: "messenger chat bot",
    desc: "Services and information about Pinlon Hospital.",
    image:
      "https://portalvhdslvb28rs1c3tmc.blob.core.windows.net/yammo/careme/hospital/7f3cbb71-6db2-4d57-bfd3-566adcbae4fd.png",
    link: "https://www.messenger.com/t/1708524899424600",
    filter: "developed at yammobots co. ltd.",
    cname: "work-img",
  },
  {
    id: 5,
    title: "Asia Royal Hospital Chat Bot",
    category: "messenger chat bot",
    desc: "Services and information about Asia Royal Hospital.",
    image: "/images/asiaroyalhospitals.jpg",
    link: "https://www.messenger.com/t/246812222184086",
    filter: "developed at yammobots co. ltd.",
    cname: "work-img",
  },
  {
    id: 6,
    title: "MTM Global Visa Services",
    category: "website",
    desc: "Provides Visa Services in Myanmar.",
    image: "https://mtmglobalvisa.com/Content/MTMAssets/MTMGSLogo_Transparent.png",
    link: "https://mtmglobalvisa.com/",
    filter: "freelance works",
    cname: "work-img",
  },
  {
    id: 8,
    title: "IG Eco Wash",
    category: "Android App",
    desc: "Car Waterless Service.",
    image: "/images/ecowash.jpg",
    popupLink: [
      "images/apk/eco_1.jpg",
      "images/apk/eco_2.jpg",
      "images/apk/eco_3.jpg",
      "images/apk/eco_4.jpg",
      "images/apk/eco_5.jpg",
      "images/apk/eco_6.jpg",
      "images/apk/eco_7.jpg",
      "images/apk/eco_8.jpg",
      "images/apk/eco_9.jpg",
      "images/apk/eco_10.jpg",
      "images/apk/eco_11.jpg",
      "images/apk/eco_12.jpg",
      "images/apk/eco_13.jpg",
    ],
    filter: "freelance works",
    cname: "work-img",
  },
  {
    id: 9,
    title: "Dental App",
    category: "Android App",
    desc: "Manage dental patients and treatments.",
    image: "images/apk/dental_logo.jpg",
    popupLink: [
      "images/apk/dental_3.jpg",
      "images/apk/dental_4.jpg",
      "images/apk/dental_5.jpg",
      "images/apk/dental_6.jpg",
      "images/apk/dental_7.jpg",
      "images/apk/dental_1.jpg",
      "images/apk/dental_2.jpg",
    ],
    filter: "freelance works",
    cname: "work-img",
  },
  {
    id: 10,
    title: "Content Management System",
    category: "web application",
    desc: "I developed customized CMS system for various customers.",
    image: "images/CMS.jpg",
    popupLink: ["images/CMS.jpg"],
    filter: "freelance works",
    cname: "work-img",
  },
  {
    id: 11,
    title: "MOE THEE Clinic and Hospital",
    category: "website",
    desc: "Developed a complete CMS-driven website for MOE THEE Clinic & Hospital, enabling easy content management and service updates.",
    image: "/images/moethee.png",
    link: "https://moethee.com/",
    filter: "freelance works",
    cname: "work-img",
  },
  {
    id: 7,
    title: "Attendance System",
    category: "website",
    desc: "A web-based attendance management system designed to track employee check-ins, absences, and working hours efficiently in real time.",
    image: "/images/mm.jpg",
    popupLink: [
      "images/login.png",
      "images/attendancelist.png",
      "images/attendancelist2.png",
      "images/list3.png",
    ],
    filter: "freelance works",
    cname: "work-img",
    height: "383px",
  },
];

function Works() {
  const [activeFilter, setActiveFilter] = useState("remote works (currently working project)");

  const handleChange = (filterText) => {
    setActiveFilter(filterText);
  };

  const isRemoteTab = activeFilter === "remote works (currently working project)";
  const visibleItems = isRemoteTab
    ? []
    : allData.filter((data) => data.filter === activeFilter);

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="All Works" />
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={() => handleChange(filter.text)}
                  className={
                    filter.text === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        {isRemoteTab ? (
          <div className="row rounded bg-white shadow-dark padding-30 align-items-center remote-work-card">
              <div className="col-md-6">
                <span className="text-uppercase text-muted mb-2 d-block" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
                  Web Application
                </span>
                <h3 className="mt-0 mb-3">DentalWare for General Practitioners</h3>
                <p>
                  I am currently working as a software developer in a remote full-time with{" "}
                  <a href="https://intica.com/" target="_blank" rel="noreferrer">INTICA Ltd.</a>,
                  where I contribute to the development of DentalWare — a comprehensive dental practice
                  management system designed for general practitioners. It offers key features such as
                  appointment scheduling, billing, electronic claims, patient recall, clinical
                  documentation, and practice analytics. Please click <a href="#/dentalware" className="text-danger">
                            View More
                  </a> button to see additional screenshots and examples of my work in DentalWare.
                </p>
                <a href="#/dentalware" className="btn btn-default mt-3 mb-4 mb-md-0">
                  View More
                </a>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/dw/dwappointment.png"
                  alt="DentalWare software interface"
                  className=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
        ) : (
          <div className="row portfolio-wrapper">
            {visibleItems.map((item) => (
              <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
                <Portfolio portfolio={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Works;

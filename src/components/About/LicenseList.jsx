import React from "react";
import LicenseItem from "./LicenseItem";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function LicenseList() {
  const [width, setwidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      id="licence-container"
      ref={carousel}
      className="relative cursor-grab overflow-hidden"
    >
      <motion.div
        id="license-inner-container"
        drag="x"
        dragConstraints={{ right: 0, left: -width - 30 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex"
      >
        <LicenseItem
          title={"Belajar Membuat Aplikasi Web dengan React"}
          organization={"Dicoding Indonesia"}
          issued={"Oct 2023"}
          expires={"Oct 2026"}
          credentialId={"0LZ0QROE0Z65"}
          imgLink={"https://avatars.githubusercontent.com/u/22091590?s=80&v=4"}
          credentialLink={"https://www.dicoding.com/certificates/0LZ0QROE0Z65"}
          key={1}
        />
        <LicenseItem
          title={"Belajar Dasar Pemrograman JavaScript"}
          organization={"Dicoding Indonesia"}
          issued={"Sept 2023"}
          expires={"Sept 2026"}
          credentialId={"2VX3664NJXYQ"}
          imgLink={"https://avatars.githubusercontent.com/u/22091590?s=80&v=4"}
          credentialLink={"https://www.dicoding.com/certificates/2VX3664NJXYQ"}
          key={2}
        />
        <LicenseItem
          title={"Belajar Dasar Pemrograman Web"}
          organization={"Dicoding Indonesia"}
          issued={"Sept 2023"}
          expires={"Sept 2026"}
          credentialId={"2VX36J3NQXYQ"}
          imgLink={"https://avatars.githubusercontent.com/u/22091590?s=80&v=4"}
          credentialLink={"https://www.dicoding.com/certificates/2VX36J3NQXYQ"}
          key={3}
        />
        <LicenseItem
          title={"Belajar Membuat Front-End Web untuk Pemula"}
          organization={"Dicoding Indonesia"}
          issued={"Sept 2023"}
          expires={"Sept 2026"}
          credentialId={"MRZML82RNXYQ"}
          imgLink={"https://avatars.githubusercontent.com/u/22091590?s=80&v=4"}
          credentialLink={"https://www.dicoding.com/certificates/MRZML82RNXYQ"}
          key={4}
        />
      </motion.div>
    </motion.div>
  );
}

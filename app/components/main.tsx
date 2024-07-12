"use client";
import React from "react";
import Image from "next/image";

export function Main({ selected }: any) {
  if (selected === "aboutUs") {
    return (
      <div className="lg:w-6/12 w-9/12 mx-auto my-10">
        <h1 className="font-bold text-lg">Kata Pengantar</h1>
        <p className="mt-3 text-justify">
          Alhamdulillahirobbil’alamin, puji dan syukur atas kehadirat Allah SWT
          yang senantiasa melimpahkan rahmat dan karunianya sehingga penulis
          dapat menyelesaikan pembuatan aAlat Uji Tarik Non Logam Dengan
          Penggerak Hidrolik dengan lancar. Sholawat dan salam semoga selalu
          tercurahkan kepada Nabi Muhammad SAW yang telah membawa kita kepada
          kehidupan yang lebih baik. Adapun tujuan pembuatan alat ini adalah
          sebagai salah satu persyaratan untuk menyelesaikan Pendidikan Diploma
          III Teknik Mesin Politeknik Negeri Sriwijaya Palembang. Besar harapan
          kami alat ini dapat membantu proses pembelajaran di Jurusan Teknik
          Mesin Politeknik Negeri Sriwijaya.
        </p>
        <br />
        <br />
        <p className="lg:text-left text-justify">
          Besar harapan kami alat ini dapat membantu proses pembelajaran di
          Jurusan Teknik Mesin Politeknik Negeri Sriwijaya. <br /> Pembimbing 1
          : Ahmad Junaedi S.T.,M.T <br /> Pembimbing 2 : Ali Medi S.T.,M.T
        </p>
        <br />
        <br />
        <p className="text-center"> Tim pembuat : </p>
        <br />
        <p>
          1. Andrea Louisa Pernanda <br /> 2. Bima Ar’rafi <br />
          3. Muhammad Meirizky Husada
        </p>
      </div>
    );
  } else if (selected === "about") {
    return (
      <>
        <h1 className="text-center font-bold lg:text-2xl text-lg text-white">
          Gambar Alat
        </h1>
        <Image
          src={"/assets/images/alat.png"}
          alt="Gambar Alat"
          width={400}
          height={600}
          className="mt-6 mb-16 lg:pb-24 pb-0 lg:w-[400px] lg:h-[600px] w-[250px] h-[300px] mx-auto"
        />
      </>
    );
  } else if (selected === "userGuide") {
    return (
      <div className="lg:w-6/12 w-9/12 mx-auto my-10">
        <h1 className="font-bold text-lg">Panduan Pengguna</h1>
        <p className="mt-3 text-justify">
          Ini adalah panduan pengguna untuk menggunakan alat uji tarik non logam
          dengan penggerak hidrolik. Panduan ini mencakup langkah-langkah untuk
          mengoperasikan alat dengan aman dan efisien.
        </p>
      </div>
    );
  } else {
    return null;
  }
}

import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import MyNavBar from '../MyNavBar';
import Slider from "react-slick";

import "./TimeTravel.css";
import Container from 'react-bootstrap/Container';

const img1 = "https://static.wixstatic.com/media/d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_533,h_419,al_c,q_90/d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.jpg";
const img2 = "https://static.wixstatic.com/media/d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_533,h_419,al_c,q_90/d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.jpg";
const img3 = "https://static.wixstatic.com/media/d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_533,h_419,al_c,q_90/d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.jpg";
const img4 = "https://static.wixstatic.com/media/d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.png";
const img5 = "https://static.wixstatic.com/media/d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.jpg/v1/fill/w_533,h_419,al_c,q_90/d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.jpg";
const img6 = "https://static.wixstatic.com/media/d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.png";
const img7 = "https://static.wixstatic.com/media/d01fe9_98d75fdd14fc4f91969982c8c2e7450a~mv2_d_2325_2836_s_2.jpg/v1/fill/w_344,h_419,al_c,q_90/d01fe9_98d75fdd14fc4f91969982c8c2e7450a~mv2_d_2325_2836_s_2.jpg";
const img8 = "https://static.wixstatic.com/media/d01fe9_4fccd3ac4de147faad2e232041c6cf55~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_4fccd3ac4de147faad2e232041c6cf55~mv2_d_4200_3300_s_4_2.png";
const img9 = "https://static.wixstatic.com/media/d01fe9_525a310ec7e948838f7293326ceab490~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_525a310ec7e948838f7293326ceab490~mv2_d_4200_3300_s_4_2.png";
const img10 = "https://static.wixstatic.com/media/d01fe9_20be3406bdc64d0caf1b2d2ee6f2a443~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_20be3406bdc64d0caf1b2d2ee6f2a443~mv2_d_4200_3300_s_4_2.png";
const img11 = "https://static.wixstatic.com/media/d01fe9_e635fbf91a2f4f1ba86dd1dd8556e094~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_e635fbf91a2f4f1ba86dd1dd8556e094~mv2_d_4200_3300_s_4_2.png";
const img12 = "https://static.wixstatic.com/media/d01fe9_d6b903c40bec4483b09908dc49262df7~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_d6b903c40bec4483b09908dc49262df7~mv2_d_4200_3300_s_4_2.png";
const img13 = "https://static.wixstatic.com/media/d01fe9_b2e61cbb959b4849adc546db1c4f8840~mv2_d_3449_2274_s_2.jpg/v1/fill/w_636,h_419,al_c,q_90/d01fe9_b2e61cbb959b4849adc546db1c4f8840~mv2_d_3449_2274_s_2.jpg";
const img14 = "https://static.wixstatic.com/media/d01fe9_b6fa8f9ca1da46ce9db3ab484ee8985a~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_b6fa8f9ca1da46ce9db3ab484ee8985a~mv2_d_4200_3300_s_4_2.png";
const img15 = "https://static.wixstatic.com/media/d01fe9_6559ec6439b74c4a9cdc5041152dcb52~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_6559ec6439b74c4a9cdc5041152dcb52~mv2_d_4200_3300_s_4_2.png";
const img16 = "https://static.wixstatic.com/media/d01fe9_28371b19b7604035a4194fda8f8338ff~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_28371b19b7604035a4194fda8f8338ff~mv2_d_4200_3300_s_4_2.png";
const img17 = "https://static.wixstatic.com/media/d01fe9_6ea278964d6f4189a8591c9610f3f365~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_6ea278964d6f4189a8591c9610f3f365~mv2_d_4200_3300_s_4_2.png";
const img18 = "https://static.wixstatic.com/media/d01fe9_c3a1bbdbea754c2f9cf1e7b6a27cac72~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_c3a1bbdbea754c2f9cf1e7b6a27cac72~mv2_d_4200_3300_s_4_2.png";
const img19 = "https://static.wixstatic.com/media/d01fe9_12e61680296d4748a8872dddca51df0f~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_12e61680296d4748a8872dddca51df0f~mv2_d_4200_3300_s_4_2.png";
const img20 = "https://static.wixstatic.com/media/d01fe9_285dbf251c1c44d7ae5f9421c5b7fbe9~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_285dbf251c1c44d7ae5f9421c5b7fbe9~mv2_d_4200_3300_s_4_2.png";
const img21 = "https://static.wixstatic.com/media/d01fe9_b8b811744ed040dfa6449fe3ef70ce03~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_b8b811744ed040dfa6449fe3ef70ce03~mv2_d_4200_3300_s_4_2.png";
const img22 = "https://static.wixstatic.com/media/d01fe9_a7f07b8de2944f3f95b8be1a27e1d7d1~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_a7f07b8de2944f3f95b8be1a27e1d7d1~mv2_d_4200_3300_s_4_2.png";
const img23 = "https://static.wixstatic.com/media/d01fe9_0f8631aa790f41d3988a10f5a9ab5f15~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_0f8631aa790f41d3988a10f5a9ab5f15~mv2_d_4200_3300_s_4_2.png";
const img24 = "https://static.wixstatic.com/media/d01fe9_0898aec32ac54e0f933e5ada0df9d63b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_0898aec32ac54e0f933e5ada0df9d63b~mv2_d_4200_3300_s_4_2.png";
const img25 = "https://static.wixstatic.com/media/d01fe9_6ca3b154ed4a49a3a6c4901dd717ed32~mv2_d_4200_3300_s_4_2.png/v1/fill/w_533,h_419,al_c/d01fe9_6ca3b154ed4a49a3a6c4901dd717ed32~mv2_d_4200_3300_s_4_2.png";
const img26 = "https://static.wixstatic.com/media/d01fe9_ed0730427b6347e595bb0da5628e8696~mv2_d_3508_2480_s_4_2.png/v1/fill/w_593,h_419,al_c/d01fe9_ed0730427b6347e595bb0da5628e8696~mv2_d_3508_2480_s_4_2.png";
const img27 = "https://static.wixstatic.com/media/d01fe9_f198a25df9dc42bb83e8465e9731d3c7~mv2_d_3508_2480_s_4_2.png/v1/fill/w_593,h_419,al_c/d01fe9_f198a25df9dc42bb83e8465e9731d3c7~mv2_d_3508_2480_s_4_2.png";

const img1Big = "https://static.wixstatic.com/media/d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_761,h_598,fp_0.50_0.50,q_90/d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.webp";
const img2Big = "https://static.wixstatic.com/media/d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_761,h_598,fp_0.50_0.50,q_90/d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.webp";
const img3Big = "https://static.wixstatic.com/media/d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_761,h_598,fp_0.50_0.50,q_90/d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.webp";
const img4Big = "https://static.wixstatic.com/media/d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.webp";
const img5Big = "https://static.wixstatic.com/media/d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.jpg/v1/fill/w_761,h_598,fp_0.50_0.50,q_90/d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.webp";
const img6Big = "https://static.wixstatic.com/media/d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.webp";
const img7Big = "https://static.wixstatic.com/media/d01fe9_98d75fdd14fc4f91969982c8c2e7450a~mv2_d_2325_2836_s_2.jpg/v1/fill/w_615,h_750,fp_0.50_0.50,q_90/d01fe9_98d75fdd14fc4f91969982c8c2e7450a~mv2_d_2325_2836_s_2.webp";
const img8Big = "https://static.wixstatic.com/media/d01fe9_4fccd3ac4de147faad2e232041c6cf55~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_4fccd3ac4de147faad2e232041c6cf55~mv2_d_4200_3300_s_4_2.webp";
const img9Big = "https://static.wixstatic.com/media/d01fe9_525a310ec7e948838f7293326ceab490~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_525a310ec7e948838f7293326ceab490~mv2_d_4200_3300_s_4_2.webp";
const img10Big = "https://static.wixstatic.com/media/d01fe9_20be3406bdc64d0caf1b2d2ee6f2a443~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_20be3406bdc64d0caf1b2d2ee6f2a443~mv2_d_4200_3300_s_4_2.webp";
const img11Big = "https://static.wixstatic.com/media/d01fe9_e635fbf91a2f4f1ba86dd1dd8556e094~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_e635fbf91a2f4f1ba86dd1dd8556e094~mv2_d_4200_3300_s_4_2.webp";
const img12Big = "https://static.wixstatic.com/media/d01fe9_d6b903c40bec4483b09908dc49262df7~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_d6b903c40bec4483b09908dc49262df7~mv2_d_4200_3300_s_4_2.webp";
const img13Big = "https://static.wixstatic.com/media/d01fe9_b2e61cbb959b4849adc546db1c4f8840~mv2_d_3449_2274_s_2.jpg/v1/fill/w_761,h_502,fp_0.50_0.50,q_90/d01fe9_b2e61cbb959b4849adc546db1c4f8840~mv2_d_3449_2274_s_2.webp";
const img14Big = "https://static.wixstatic.com/media/d01fe9_b6fa8f9ca1da46ce9db3ab484ee8985a~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_b6fa8f9ca1da46ce9db3ab484ee8985a~mv2_d_4200_3300_s_4_2.webp";
const img15Big = "https://static.wixstatic.com/media/d01fe9_6559ec6439b74c4a9cdc5041152dcb52~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_6559ec6439b74c4a9cdc5041152dcb52~mv2_d_4200_3300_s_4_2.webp";
const img16Big = "https://static.wixstatic.com/media/d01fe9_28371b19b7604035a4194fda8f8338ff~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_28371b19b7604035a4194fda8f8338ff~mv2_d_4200_3300_s_4_2.webp";
const img17Big = "https://static.wixstatic.com/media/d01fe9_6ea278964d6f4189a8591c9610f3f365~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_6ea278964d6f4189a8591c9610f3f365~mv2_d_4200_3300_s_4_2.webp";
const img18Big = "https://static.wixstatic.com/media/d01fe9_c3a1bbdbea754c2f9cf1e7b6a27cac72~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_c3a1bbdbea754c2f9cf1e7b6a27cac72~mv2_d_4200_3300_s_4_2.webp";
const img19Big = "https://static.wixstatic.com/media/d01fe9_12e61680296d4748a8872dddca51df0f~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_12e61680296d4748a8872dddca51df0f~mv2_d_4200_3300_s_4_2.webp";
const img20Big = "https://static.wixstatic.com/media/d01fe9_285dbf251c1c44d7ae5f9421c5b7fbe9~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_285dbf251c1c44d7ae5f9421c5b7fbe9~mv2_d_4200_3300_s_4_2.webp";
const img21Big = "https://static.wixstatic.com/media/d01fe9_b8b811744ed040dfa6449fe3ef70ce03~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_b8b811744ed040dfa6449fe3ef70ce03~mv2_d_4200_3300_s_4_2.webp";
const img22Big = "https://static.wixstatic.com/media/d01fe9_a7f07b8de2944f3f95b8be1a27e1d7d1~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_a7f07b8de2944f3f95b8be1a27e1d7d1~mv2_d_4200_3300_s_4_2.webp";
const img23Big = "https://static.wixstatic.com/media/d01fe9_0f8631aa790f41d3988a10f5a9ab5f15~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_0f8631aa790f41d3988a10f5a9ab5f15~mv2_d_4200_3300_s_4_2.webp";
const img24Big = "https://static.wixstatic.com/media/d01fe9_0898aec32ac54e0f933e5ada0df9d63b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_0898aec32ac54e0f933e5ada0df9d63b~mv2_d_4200_3300_s_4_2.webp";
const img25Big = "https://static.wixstatic.com/media/d01fe9_6ca3b154ed4a49a3a6c4901dd717ed32~mv2_d_4200_3300_s_4_2.png/v1/fill/w_761,h_598,fp_0.50_0.50,q_95/d01fe9_6ca3b154ed4a49a3a6c4901dd717ed32~mv2_d_4200_3300_s_4_2.webp";
const img26Big = "https://static.wixstatic.com/media/d01fe9_ed0730427b6347e595bb0da5628e8696~mv2_d_3508_2480_s_4_2.png/v1/fill/w_761,h_538,fp_0.50_0.50,q_95/d01fe9_ed0730427b6347e595bb0da5628e8696~mv2_d_3508_2480_s_4_2.webp";
const img27Big = "https://static.wixstatic.com/media/d01fe9_f198a25df9dc42bb83e8465e9731d3c7~mv2_d_3508_2480_s_4_2.png/v1/fill/w_761,h_538,fp_0.50_0.50,q_95/d01fe9_f198a25df9dc42bb83e8465e9731d3c7~mv2_d_3508_2480_s_4_2.webp";

const labels = [
  "01.jpg",
  "02.JPG",
  "03.JPG",
  "06.jpg",
  "PROCESS1.png",
  "Textile Manipulation01.jpg",
  "Look1.png",
  "Look2.png",
  "Look2 Details.png",
  "PROCESS2.png",
  "PROCESS3.png",
  "07.jpg",
  "PROCESS4.png",
  "Textile Manipulation02.png",
  "Look3.png",
  "08.png",
  "Look4.png",
  "Look5.png",
  "Look5 Details.png",
  "Look6.png",
  "Look7.png",
  "Look7 Details.png",
  "Look8.png",
  "Look8 Details.png",
  "Lineup01.PNG",
  "Lineup02.PNG",
];

const imgs = [{leImg: img1, leBigImg: img1Big, leLabel: labels[0]},
 {leImg: img2, leBigImg: img2Big, leLabel: labels[1]},
 {leImg: img3, leBigImg: img3Big, leLabel: labels[2]},
 {leImg: img4, leBigImg: img4Big, leLabel: labels[3]},
 {leImg: img5, leBigImg: img5Big, leLabel: labels[4]},
 {leImg: img6, leBigImg: img6Big, leLabel: labels[5]},
 {leImg: img7, leBigImg: img7Big, leLabel: labels[6]},
 {leImg: img8, leBigImg: img8Big, leLabel: labels[7]},
 {leImg: img9, leBigImg: img9Big, leLabel: labels[8]},
 {leImg: img10, leBigImg: img10Big, leLabel: labels[9]},
 {leImg: img11, leBigImg: img11Big, leLabel: labels[10]},
 {leImg: img12, leBigImg: img12Big, leLabel: labels[11]},
 {leImg: img13, leBigImg: img13Big, leLabel: labels[12]},
 {leImg: img14, leBigImg: img14Big, leLabel: labels[13]},
 {leImg: img15, leBigImg: img15Big, leLabel: labels[14]},
 {leImg: img16, leBigImg: img16Big, leLabel: labels[15]},
 {leImg: img17, leBigImg: img17Big, leLabel: labels[16]},
 {leImg: img18, leBigImg: img18Big, leLabel: labels[17]},
 {leImg: img19, leBigImg: img19Big, leLabel: labels[18]},
 {leImg: img20, leBigImg: img20Big, leLabel: labels[19]},
 {leImg: img21, leBigImg: img21Big, leLabel: labels[20]},
 {leImg: img22, leBigImg: img22Big, leLabel: labels[21]},
 {leImg: img23, leBigImg: img23Big, leLabel: labels[22]},
 {leImg: img24, leBigImg: img24Big, leLabel: labels[23]},
 {leImg: img25, leBigImg: img25Big, leLabel: labels[24]},
 {leImg: img26, leBigImg: img26Big, leLabel: labels[25]},
 {leImg: img27, leBigImg: img27Big, leLabel: labels[26]}];


const TimeTravel = () => {
  const [show, setShow] = useState(false);
  const [modalCarouselIndex, setModalCarouselIndex] = useState(0);
  const [carouselLabel, setCarouselLabel] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setCarouselLabel(labels[selectedIndex]);
    setModalCarouselIndex(selectedIndex);
  };

  return (<div className="timetravel-super-container">
    <MyNavBar activeNavLink="fashiondesign" />
    
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(0); setCarouselLabel(imgs[0].leLabel); } }><a href="#"><img src={imgs[0].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(1); setCarouselLabel(imgs[1].leLabel); } }><a href="#"><img src={imgs[1].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(2); setCarouselLabel(imgs[2].leLabel); } }><a href="#"><img src={imgs[2].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(3); setCarouselLabel(imgs[3].leLabel); } }><a href="#"><img src={imgs[3].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(4); setCarouselLabel(imgs[4].leLabel); } }><a href="#"><img src={imgs[4].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(5); setCarouselLabel(imgs[5].leLabel); } }><a href="#"><img src={imgs[5].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
      
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(6); setCarouselLabel(imgs[6].leLabel); } }><a href="#"><img src={imgs[6].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(7); setCarouselLabel(imgs[7].leLabel); } }><a href="#"><img src={imgs[7].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(8); setCarouselLabel(imgs[8].leLabel); } }><a href="#"><img src={imgs[8].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(9); setCarouselLabel(imgs[9].leLabel); } }><a href="#"><img src={imgs[9].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(10); setCarouselLabel(imgs[10].leLabel); } }><a href="#"><img src={imgs[10].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(11); setCarouselLabel(imgs[11].leLabel); } }><a href="#"><img src={imgs[11].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(12); setCarouselLabel(imgs[12].leLabel); } }><a href="#"><img src={imgs[12].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(13); setCarouselLabel(imgs[13].leLabel); } }><a href="#"><img src={imgs[13].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(14); setCarouselLabel(imgs[14].leLabel); } }><a href="#"><img src={imgs[14].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(15); setCarouselLabel(imgs[15].leLabel); } }><a href="#"><img src={imgs[15].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(16); setCarouselLabel(imgs[16].leLabel); } }><a href="#"><img src={imgs[16].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(17); setCarouselLabel(imgs[17].leLabel); } }><a href="#"><img src={imgs[17].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(18); setCarouselLabel(imgs[18].leLabel); } }><a href="#"><img src={imgs[18].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(19); setCarouselLabel(imgs[19].leLabel); } }><a href="#"><img src={imgs[19].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(20); setCarouselLabel(imgs[20].leLabel); } }><a href="#"><img src={imgs[20].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(21); setCarouselLabel(imgs[21].leLabel); } }><a href="#"><img src={imgs[21].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(22); setCarouselLabel(imgs[22].leLabel); } }><a href="#"><img src={imgs[22].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(23); setCarouselLabel(imgs[23].leLabel); } }><a href="#"><img src={imgs[23].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(24); setCarouselLabel(imgs[24].leLabel); } }><a href="#"><img src={imgs[24].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(25); setCarouselLabel(imgs[25].leLabel); } }><a href="#"><img src={imgs[25].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    <Row><Col className="timeTravelOuterImages" onClick={() => { setShow(true); setModalCarouselIndex(26); setCarouselLabel(imgs[26].leLabel); } }><a href="#"><img src={imgs[26].leBigImg} className="rounded mx-auto d-block" alt="..." /></a></Col></Row>
    
          
      
  

  <Modal
        show={show}
        onHide={() => {setShow(false); setModalCarouselIndex(0); }}
        dialogClassName="not-modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fashion Design | Time Travel | {carouselLabel}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={modalCarouselIndex} onSelect={handleSelect} indicators={false} interval={null}>
            <Carousel.Item>
              <img className="img-fluid" src={img1Big} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img2Big} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img3Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img4Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img5Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img6Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img7Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img8Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img9Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img10Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img11Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img12Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img13Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img14Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img15Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img16Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img17Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img18Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img19Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img20Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img21Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img22Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img23Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img24Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img25Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img26Big} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={img27Big} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
  </div>)
};

export default TimeTravel;
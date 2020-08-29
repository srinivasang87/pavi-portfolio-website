import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import MyNavBar from '../MyNavBar';
import Slider from "react-slick";

import "./BeauteD.css"

const outerImages = [
"https://static.wixstatic.com/media/d01fe9_8f07b9c1c4ce418c8a3fad41878a8d41~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_8f07b9c1c4ce418c8a3fad41878a8d41~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_d366af436e1a4a65a64fa2ce3f144e5e~mv2.png/v1/fill/w_507,h_285,fp_0.50_0.50,q_95/d01fe9_d366af436e1a4a65a64fa2ce3f144e5e~mv2.webp",
"https://static.wixstatic.com/media/d01fe9_f8a14b6f15f940aa8bdf1809c743a3eb~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_f8a14b6f15f940aa8bdf1809c743a3eb~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_c9df7beb2365477098a029a34e7b4a71~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_507,h_398,fp_0.50_0.50,q_90/d01fe9_c9df7beb2365477098a029a34e7b4a71~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_657625db209449649f36ebea6c00bf97~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_657625db209449649f36ebea6c00bf97~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_8e20a3b0cf164be2bcfcf86b4a3004fd~mv2_d_1584_1390_s_2.png/v1/fill/w_507,h_444,fp_0.50_0.50,q_95/d01fe9_8e20a3b0cf164be2bcfcf86b4a3004fd~mv2_d_1584_1390_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_a793cbf8c52e45278dbd6bae3bfa2014~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_a793cbf8c52e45278dbd6bae3bfa2014~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_174854da166d451e8a7801b63b30f583~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_174854da166d451e8a7801b63b30f583~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_f3c7c4585d50472796f3f0a6c21c08a4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_f3c7c4585d50472796f3f0a6c21c08a4~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_b19932a5a8c54d50a4b51fd4de0513d6~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_b19932a5a8c54d50a4b51fd4de0513d6~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_5201257f91354c7096ace177c10fa7a4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_5201257f91354c7096ace177c10fa7a4~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_016bc12e37a14bad9c568a8292eaa2ec~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_016bc12e37a14bad9c568a8292eaa2ec~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_a8e46eda56da41a49be3c983564c0fde~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_a8e46eda56da41a49be3c983564c0fde~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_9c8185ad83ee46179ad9c5b2af598c25~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_9c8185ad83ee46179ad9c5b2af598c25~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_0a70f11f1b154e5d94ac6141293a9b74~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_0a70f11f1b154e5d94ac6141293a9b74~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_644cb107210144fb88feb5f829a411d5~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_644cb107210144fb88feb5f829a411d5~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_e9c4afbe4f874df5b80bda34fc8e6216~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_e9c4afbe4f874df5b80bda34fc8e6216~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_ac97e767f38b43d680a67421f108711e~mv2_d_2100_1650_s_2.jpg/v1/fill/w_507,h_398,fp_0.50_0.50,q_90/d01fe9_ac97e767f38b43d680a67421f108711e~mv2_d_2100_1650_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_49e92543d09c4e9aa4b55c4c9f9ab0ca~mv2_d_2436_2835_s_4_2.png/v1/fill/w_507,h_589,fp_0.50_0.50,q_95/d01fe9_49e92543d09c4e9aa4b55c4c9f9ab0ca~mv2_d_2436_2835_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_1f80e67c41844bfe9d303b2ee7ab7d4b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_1f80e67c41844bfe9d303b2ee7ab7d4b~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_4135471dbfbb4e3c927d893a16c87880~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_4135471dbfbb4e3c927d893a16c87880~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_9be100c6cd174d4482613cf3a3aedf91~mv2_d_2454_1879_s_2.png/v1/fill/w_507,h_388,fp_0.50_0.50,q_95/d01fe9_9be100c6cd174d4482613cf3a3aedf91~mv2_d_2454_1879_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_2d682fdd4f1242e4ad9ba7027d82c28b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_2d682fdd4f1242e4ad9ba7027d82c28b~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_5b2ea5fc12484ea9a2ff4b52091c6b96~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_5b2ea5fc12484ea9a2ff4b52091c6b96~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_9490d48ea1be4943bfa4bad12fddfc84~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_9490d48ea1be4943bfa4bad12fddfc84~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_42ceafb146f1457c93ec082166467018~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_42ceafb146f1457c93ec082166467018~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_81303df731524bcd9d71a7b045afdac3~mv2_d_2481_3307_s_4_2.png/v1/fill/w_507,h_675,fp_0.50_0.50,q_95/d01fe9_81303df731524bcd9d71a7b045afdac3~mv2_d_2481_3307_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_bfd035df7dcb477ca4573814b49b641d~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_bfd035df7dcb477ca4573814b49b641d~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_1fcd9131e5874c98893628da47f9bc4a~mv2_d_2100_1650_s_2.jpg/v1/fill/w_507,h_398,fp_0.50_0.50,q_90/d01fe9_1fcd9131e5874c98893628da47f9bc4a~mv2_d_2100_1650_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_82de94c690f04e24bf0c1227e5f5b1d9~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_82de94c690f04e24bf0c1227e5f5b1d9~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_3b09ed0152de44619886b6828f0173df~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_3b09ed0152de44619886b6828f0173df~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_7c2a450ed06b4eb6ad0eed1219b13fc5~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_7c2a450ed06b4eb6ad0eed1219b13fc5~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_9fe3bc887a6340eeb94d42151965a622~mv2_d_2100_1650_s_2.jpg/v1/fill/w_507,h_398,fp_0.50_0.50,q_90/d01fe9_9fe3bc887a6340eeb94d42151965a622~mv2_d_2100_1650_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_188c7eade88b4eec88bfe0826200702d~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_188c7eade88b4eec88bfe0826200702d~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_9f46af506cbf4622bedbe4374560922d~mv2_d_1753_1415_s_2.png/v1/fill/w_507,h_409,fp_0.50_0.50,q_95/d01fe9_9f46af506cbf4622bedbe4374560922d~mv2_d_1753_1415_s_2.webp",
"https://static.wixstatic.com/media/d01fe9_b5d2d0f95255474880f894efdd84b495~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_b5d2d0f95255474880f894efdd84b495~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_1a8ca7aafdf544618c13f10e5051cad4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_1a8ca7aafdf544618c13f10e5051cad4~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_ea022bb4d5cf4c6f8eea35ca1640c038~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_ea022bb4d5cf4c6f8eea35ca1640c038~mv2_d_4200_3300_s_4_2.webp",
"https://static.wixstatic.com/media/d01fe9_79721fb9c9e84e7eb25b78914575d801~mv2_d_4200_3300_s_4_2.png/v1/fill/w_507,h_398,fp_0.50_0.50,q_95/d01fe9_79721fb9c9e84e7eb25b78914575d801~mv2_d_4200_3300_s_4_2.webp"
];

const innerImages = [
    "https://static.wixstatic.com/media/d01fe9_8f07b9c1c4ce418c8a3fad41878a8d41~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_8f07b9c1c4ce418c8a3fad41878a8d41~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_d366af436e1a4a65a64fa2ce3f144e5e~mv2.png/v1/fill/w_960,h_540,fp_0.50_0.50,q_95/d01fe9_d366af436e1a4a65a64fa2ce3f144e5e~mv2.webp",
    "https://static.wixstatic.com/media/d01fe9_f8a14b6f15f940aa8bdf1809c743a3eb~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_f8a14b6f15f940aa8bdf1809c743a3eb~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_c9df7beb2365477098a029a34e7b4a71~mv2_d_4200_3300_s_4_2.jpg/v1/fill/w_1057,h_830,fp_0.50_0.50,q_90/d01fe9_c9df7beb2365477098a029a34e7b4a71~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_657625db209449649f36ebea6c00bf97~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_657625db209449649f36ebea6c00bf97~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_8e20a3b0cf164be2bcfcf86b4a3004fd~mv2_d_1584_1390_s_2.png/v1/fill/w_1057,h_927,fp_0.50_0.50,q_95/d01fe9_8e20a3b0cf164be2bcfcf86b4a3004fd~mv2_d_1584_1390_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_a793cbf8c52e45278dbd6bae3bfa2014~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_a793cbf8c52e45278dbd6bae3bfa2014~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_174854da166d451e8a7801b63b30f583~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_174854da166d451e8a7801b63b30f583~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_f3c7c4585d50472796f3f0a6c21c08a4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_f3c7c4585d50472796f3f0a6c21c08a4~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_b19932a5a8c54d50a4b51fd4de0513d6~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_b19932a5a8c54d50a4b51fd4de0513d6~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_5201257f91354c7096ace177c10fa7a4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_5201257f91354c7096ace177c10fa7a4~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_016bc12e37a14bad9c568a8292eaa2ec~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_016bc12e37a14bad9c568a8292eaa2ec~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_a8e46eda56da41a49be3c983564c0fde~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_a8e46eda56da41a49be3c983564c0fde~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_9c8185ad83ee46179ad9c5b2af598c25~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_9c8185ad83ee46179ad9c5b2af598c25~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_0a70f11f1b154e5d94ac6141293a9b74~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_0a70f11f1b154e5d94ac6141293a9b74~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_644cb107210144fb88feb5f829a411d5~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_644cb107210144fb88feb5f829a411d5~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_e9c4afbe4f874df5b80bda34fc8e6216~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_e9c4afbe4f874df5b80bda34fc8e6216~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_ac97e767f38b43d680a67421f108711e~mv2_d_2100_1650_s_2.jpg/v1/fill/w_1057,h_830,fp_0.50_0.50,q_90/d01fe9_ac97e767f38b43d680a67421f108711e~mv2_d_2100_1650_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_49e92543d09c4e9aa4b55c4c9f9ab0ca~mv2_d_2436_2835_s_4_2.png/v1/fill/w_928,h_1080,fp_0.50_0.50,q_95/d01fe9_49e92543d09c4e9aa4b55c4c9f9ab0ca~mv2_d_2436_2835_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_1f80e67c41844bfe9d303b2ee7ab7d4b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_1f80e67c41844bfe9d303b2ee7ab7d4b~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_4135471dbfbb4e3c927d893a16c87880~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_4135471dbfbb4e3c927d893a16c87880~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_9be100c6cd174d4482613cf3a3aedf91~mv2_d_2454_1879_s_2.png/v1/fill/w_1057,h_809,fp_0.50_0.50,q_95/d01fe9_9be100c6cd174d4482613cf3a3aedf91~mv2_d_2454_1879_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_2d682fdd4f1242e4ad9ba7027d82c28b~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_2d682fdd4f1242e4ad9ba7027d82c28b~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_5b2ea5fc12484ea9a2ff4b52091c6b96~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_5b2ea5fc12484ea9a2ff4b52091c6b96~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_9490d48ea1be4943bfa4bad12fddfc84~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_9490d48ea1be4943bfa4bad12fddfc84~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_42ceafb146f1457c93ec082166467018~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_42ceafb146f1457c93ec082166467018~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_81303df731524bcd9d71a7b045afdac3~mv2_d_2481_3307_s_4_2.png/v1/fill/w_810,h_1080,fp_0.50_0.50,q_95/d01fe9_81303df731524bcd9d71a7b045afdac3~mv2_d_2481_3307_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_bfd035df7dcb477ca4573814b49b641d~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_bfd035df7dcb477ca4573814b49b641d~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_1fcd9131e5874c98893628da47f9bc4a~mv2_d_2100_1650_s_2.jpg/v1/fill/w_1057,h_830,fp_0.50_0.50,q_90/d01fe9_1fcd9131e5874c98893628da47f9bc4a~mv2_d_2100_1650_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_82de94c690f04e24bf0c1227e5f5b1d9~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_82de94c690f04e24bf0c1227e5f5b1d9~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_3b09ed0152de44619886b6828f0173df~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_3b09ed0152de44619886b6828f0173df~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_7c2a450ed06b4eb6ad0eed1219b13fc5~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_7c2a450ed06b4eb6ad0eed1219b13fc5~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_9fe3bc887a6340eeb94d42151965a622~mv2_d_2100_1650_s_2.jpg/v1/fill/w_1057,h_830,fp_0.50_0.50,q_90/d01fe9_9fe3bc887a6340eeb94d42151965a622~mv2_d_2100_1650_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_188c7eade88b4eec88bfe0826200702d~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_188c7eade88b4eec88bfe0826200702d~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_9f46af506cbf4622bedbe4374560922d~mv2_d_1753_1415_s_2.png/v1/fill/w_1057,h_853,fp_0.50_0.50,q_95/d01fe9_9f46af506cbf4622bedbe4374560922d~mv2_d_1753_1415_s_2.webp",
    "https://static.wixstatic.com/media/d01fe9_b5d2d0f95255474880f894efdd84b495~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_b5d2d0f95255474880f894efdd84b495~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_1a8ca7aafdf544618c13f10e5051cad4~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_1a8ca7aafdf544618c13f10e5051cad4~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_ea022bb4d5cf4c6f8eea35ca1640c038~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_ea022bb4d5cf4c6f8eea35ca1640c038~mv2_d_4200_3300_s_4_2.webp",
    "https://static.wixstatic.com/media/d01fe9_79721fb9c9e84e7eb25b78914575d801~mv2_d_4200_3300_s_4_2.png/v1/fill/w_1057,h_830,fp_0.50_0.50,q_95/d01fe9_79721fb9c9e84e7eb25b78914575d801~mv2_d_4200_3300_s_4_2.webp"
]

function getImagesArray() {
    const imagesArray = [];
    for(var i=0; i<outerImages.length; i++) {
        imagesArray.push(
            {leImg: outerImages[i], leBigImg: innerImages[i]}
        )
    }

    return imagesArray;
}

const images = getImagesArray();

const BeauteD = () => {
    const [show, setShow] = useState(false);
    const [modalCarouselIndex, setModalCarouselIndex] = useState(0);
    const [carouselLabel, setCarouselLabel] = useState("");

    const handleSelect = (selectedIndex, e) => {
        setModalCarouselIndex(selectedIndex);
    };

    return (
        <div className="beauted-super-container">
            <MyNavBar activeNavLink="fashiondesign" />
            {images.map((value, index) => {
                return <Row>
                    <Col className="outerImages" onClick={() => { setShow(true); setModalCarouselIndex(index); } }>
                        <a href="#"><img src={images[index].leBigImg} className="rounded mx-auto d-block makeItResponsive mw60pct" alt="..." /></a>
                    </Col>
                </Row>
            })}

            <Modal
                show={show}
                onHide={() => {setShow(false); setModalCarouselIndex(0); }}
                dialogClassName="modal-img-only"
                aria-labelledby="contained-modal-title-vcenter"
                size="xl"
                centered
                className="no-padding"
            >
                <Modal.Body className="no-padding">
                <Carousel activeIndex={modalCarouselIndex} onSelect={handleSelect} indicators={false} interval={null}>
                {images.map((value, index) => {
                return <Carousel.Item>
                        <img className="rounded mx-auto w-100 d-block" src={images[index].leBigImg} alt="..." />
                    </Carousel.Item>
                })}
                </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BeauteD;
export interface Apartment {
  id: number;
  photos: string[];
  price: number;
  pricePerSqm: string;
  description: string;
  street: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    photos: [
      "https://b20.img.avito.st/image/1/1.EmRZCra-vo1PqhyMcT4hL2yqvIvrvbqN69rfh-cJvy_sqbw.-lmP__0lfZ9qQruVsBv94-9EqnuJq_0YxZiX3IheySo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 149000,
    pricePerSqm: "4 853 ₽/м²",
    description: "1-к. квартира, 30,7 м², 2/5 эт.",
    street: "ул. Горького"
  },
  {
    id: 2,
    photos: [
      "https://80.img.avito.st/image/1/1.GcAR67a-tSkHSxcoL-N8jRJLty-jXLEpozvUI6_otIukSLc.tT4Ba_SFcQpqnXHIiMrkWNKSEiZ3hGB-M2N3wwXC4o4"
    ],
    price: 500000,
    pricePerSqm: "8 333 ₽/м²",
    description: "3-к. квартира, 60 м², 2/5 эт.",
    street: "ул. Куратова"
  },
  {
    id: 3,
    photos: [
      "https://c80.img.avito.st/image/1/1.DKa-w7a-oE-oYwJOqtsro7xjokkMdKRPDBPBRQDAoe0LYKI.bQP_4n5hCPUXtaqoLSJsa7brfeyH55XSirleCISXY3c"
    ],
    price: 250000,
    pricePerSqm: "5 144 ₽/м²",
    description: "2-к. квартира, 48,6 м², 8/9 эт.",
    street: "ул. Мира"
  },
  {
    id: 4,
    photos: [
      "https://30.img.avito.st/image/1/1.h5Kkjra-K3uyLol6pqjVp98sKX0WOS97Fl5KcRqNKtkRLSk.ZdFmR3csUZ2ZpwU1SadP2CZf3YyMMuC-9Lg2-htkQ7A?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 169000,
    pricePerSqm: "3 073 ₽/м²",
    description: "3-к. квартира, 55 м², 2/5 эт.",
    street: "Полярная ул."
  },
  {
    id: 5,
    photos: [
      "https://10.img.avito.st/image/1/1.y9JnqLa-ZztxCMU6fd_Y6kYIZT3VH2M71XgGMdmrZpnSC2U.kzEfWKX4iqBDgBAo5BL2_RdMkRPbRD4OGRM6ueP-Y_U?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 1000000,
    pricePerSqm: "21 882 ₽/м²",
    description: "2-к. квартира, 45,7 м², 2/3 эт.",
    street: "ул. Мира"
  },
  {
    id: 6,
    photos: [
      "https://b20.img.avito.st/image/1/1.TZKHm7a_4XuRO0N6kdZTxmk4530lPuF9QlvrcZE7Q3oxOA.98Ap3tlFjAwmP2l8bZkeFVvbChk-c5YWE-Ms96cUGqc?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 150000,
    pricePerSqm: "2 976 ₽/м²",
    description: "2-к. квартира, 50,4 м², 5/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 7,
    photos: [
      "https://b40.img.avito.st/image/1/1.ldkt_ba-OTA7XZsxC-fAwQpdOzafSj0wny1YOpP-OJKYXjs.XqrBKnnMhFcEzN3zEgi_caOfyNyVtg9VEkBsjnuGGCo"
    ],
    price: 250000,
    pricePerSqm: "10 163 ₽/м²",
    description: "1-к. квартира, 24,6 м², 5/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 8,
    photos: [
      "https://b40.img.avito.st/image/1/1.uzz4OLa-F9XumLXUghb6P8WYFdNKjxPVSuh230Y7FndNmxU.G1RiyQyF2VS_YIgauNeTEvM7MBFmCO9VoRUcBg-7u04"
    ],
    price: 1000000,
    pricePerSqm: "11 905 ₽/м²",
    description: "4-к. квартира, 84 м², 1/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 9,
    photos: [
      "https://b30.img.avito.st/image/1/1.Y-P3Ora-zwrhmm0LvWdGi9yazQxFjcsKRequAEk5zqhCmc0.QXnl_MFFN94eJzAh9NKHHyffIiJW-4HjSl8fsMqiyFU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 270000,
    pricePerSqm: "8 824 ₽/м²",
    description: "1-к. квартира, 30,6 м², 4/5 эт.",
    street: "ул. Горького"
  },
  {
    id: 10,
    photos: [
      "https://b50.img.avito.st/image/1/1.XiluHLa-8sB4vFDBXjV8IFy88Mbcq_bA3MyTytAf82Lbv_A.KWbyy6wMGSp3xRSWLm2f0xkHZjeM93RcUqqsbs0saCk"
    ],
    price: 450000,
    pricePerSqm: "8 824 ₽/м²",
    description: "2-к. квартира, 51 м², 5/5 эт.",
    street: "ул. Куратова"
  },
  {
    id: 11,
    photos: [
      "https://b50.img.avito.st/image/1/1.iylDrba-J8BVDYXBWafcClwNJcbxGiPA8X1Gyv2uJmL2DiU.DLlzoI1LCIudJuE0B2SxUbwPg08u_fIDQ9r2TzXUxCY"
    ],
    price: 100000,
    pricePerSqm: "1 471 ₽/м²",
    description: "3-к. квартира, 68 м², 4/5 эт.",
    street: "Интинская ул."
  },
  {
    id: 12,
    photos: [
      "https://00.img.avito.st/image/1/1.C-J1d7a-pwtj1wUKbyMZpxbWpQ3HwKMLx6fGAct0pqnA1KU.AEra3w-NjOyRsohr5u8jFqlb04FJI2r2szXxNXgYA5c?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 250000,
    pricePerSqm: "6 964 ₽/м²",
    description: "1-к. квартира, 35,9 м², 2/5 эт.",
    street: "ул. Куратова"
  },
  {
    id: 13,
    photos: [
      "https://00.img.avito.st/image/1/1.vKcBq7a_EE4XC7JPdbHL3-4IFkijDhBIxGsaRBcLsk-3CA.wG9Xc3MPSIPFghjn6GmtPdWAT-BbAM6cfz18G79hFy0?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 270000,
    pricePerSqm: "5 625 ₽/м²",
    description: "2-к. квартира, 48 м², 3/5 эт.",
    street: "ул. Бабушкина"
  },
  {
    id: 14,
    photos: [
      "https://c60.img.avito.st/image/1/1.jmxMbra-IoVazoCEXFDWEF_OIIP-2SaF_r5Dj_JtIyf5zSA.ILPjPP2_p5v9lZ8UYyvBoXqLHcXQvTYl00Lcd4JIRBc"
    ],
    price: 290000,
    pricePerSqm: "5 675 ₽/м²",
    description: "3-к. квартира, 51,1 м², 5/9 эт.",
    street: "ул. Горького"
  },
  {
    id: 15,
    photos: [
      "https://60.img.avito.st/image/1/1.5cNTGba-SSpFuesrFRLntlG4Syzhrk0q4ckoIO0aSIjmuks.Bxkd0g57o0oGajtycdMAHwYRPMW6jXlSkSCUztsV_jY"
    ],
    price: 350000,
    pricePerSqm: "8 772 ₽/м²",
    description: "2-к. квартира, 39,9 м², 5/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 16,
    photos: [
      "https://b30.img.avito.st/image/1/1.s4EIf7a-H2ge371pYnH7kD7fHW66yBtouq9-YrZ8Hsq93B0.-QNeYhawIvxX3n0FTNf6tGuNYgVnObWjuTBUwe_fGVU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 850000,
    pricePerSqm: "25 758 ₽/м²",
    description: "1-к. квартира, 33 м², 2/5 эт.",
    street: "ул. Куратова"
  },
  {
    id: 17,
    photos: [
      "https://b50.img.avito.st/image/1/1.AZB7v7a-rXltHw94dYNauzYer3_JCKl5yW_Mc8W8rNvOHK8.t23KlDHU2gC9n1s1vxJiRyIFForHyUEMcUBA3FIzcvs"
    ],
    price: 200000,
    pricePerSqm: "4 444 ₽/м²",
    description: "2-к. квартира, 45 м², 4/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 18,
    photos: [
      "https://c80.img.avito.st/image/1/1.qJZgRra-BH925qZ-PHz17XjmBnnS8QB_0pZldd5FBd3V5QY.SXLB047sehhqV88hkSGS7KPIqhSIQttzbQzaY_ek8R0"
    ],
    price: 880388,
    pricePerSqm: "17 263 ₽/м²",
    description: "2-к. квартира, 51 м², 3/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 19,
    photos: [
      "https://c70.img.avito.st/image/1/1.YvR65ba_zh1sRWwcMsAKluhGyBvYQM4bvyXEF2xFbBzMRg.exHUrQ6_Xgzhyl9MSgi6-yjuDMSdDj_emygqdV95tzY"
    ],
    price: 340000,
    pricePerSqm: "5 862 ₽/м²",
    description: "3-к. квартира, 58 м², 4/5 эт.",
    street: "ул. Куратова"
  },
  {
    id: 20,
    photos: [
      "https://b50.img.avito.st/image/1/1.NtRr07a-mj19czg8C_Mv809xmDvZZJ492QP7N9XQm5_ecJg.5npA-XzeyMWR8nzyj2e8A5BJgsEqRJC0L6ResrRstbI"
    ],
    price: 550000,
    pricePerSqm: "11 458 ₽/м²",
    description: "2-к. квартира, 48 м², 8/9 эт.",
    street: "ул. Горького"
  },
  {
    id: 21,
    photos: [
      "https://c80.img.avito.st/image/1/1.OvEOK7a-lhgYizQZdl8BzxSLlB68nJIYvPv3ErAol7q7iJQ.BbXBruVrqf807a_yPGULw6mn5CJcaHwXY_0lsd77alA"
    ],
    price: 400000,
    pricePerSqm: "9 412 ₽/м²",
    description: "2-к. квартира, 42,5 м², 3/5 эт.",
    street: "ул. Чайковского"
  },
  {
    id: 22,
    photos: [
      "https://00.img.avito.st/image/1/1.E32tTLa-v5S77B2Vh2gPVLHsvZIf-7uUH5zenhNPvjYY770.Uh-v4NIxtdcTGAhUSJnSf66U68BIClT314tbnTx2tD8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 349000,
    pricePerSqm: "7 022 ₽/м²",
    description: "2-к. квартира, 49,7 м², 4/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 23,
    photos: [
      "https://50.img.avito.st/image/1/1.BXqcYba-qZOKwQuSmlVIfLzBq5Uu1q2TLrHImSJiqDEpwqs.vcRLgr-acU4mIVadbLkvRHe-brkBRTXH-fSZi5MH-uU"
    ],
    price: 1250000,
    pricePerSqm: "19 623 ₽/м²",
    description: "3-к. квартира, 63,7 м², 3/9 эт.",
    street: "ул. Мира"
  },
  {
    id: 24,
    photos: [
      "https://30.img.avito.st/image/1/1.hn_EYra-KpbSwoiXxGTtd6DDKJB21S6WdrJLnHphKzRxwSg.boWRPUysR-XOKugSg-MjrAXsdUAPmI1g_-C0KxfPeOs?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 180000,
    pricePerSqm: "4 036 ₽/м²",
    description: "2-к. квартира, 44,6 м², 5/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 25,
    photos: [
      "https://20.img.avito.st/image/1/1.gEVbYLa-LKxNwI6tVw7fWkbALqrp1yis6bBNpuVjLQ7uwy4.NpN1We8xOx_0aqWIR9y5PjMW9yus1hA77fsoHg1VdX8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 400000,
    pricePerSqm: "5 764 ₽/м²",
    description: "3-к. квартира, 69,4 м², 3/5 эт.",
    street: "Северная ул."
  },
  {
    id: 26,
    photos: [
      "https://b20.img.avito.st/image/1/1.tPSARra-GB2W5roc5HS-rILmGhsy8RwdMpZ5Fz5FGb815Ro.IpP4iVgTwpHgEmIf_QvzuJwr_EPyXciNhkGmxQE-ZnY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 500000,
    pricePerSqm: "12 500 ₽/м²",
    description: "2-к. квартира, 40 м², 3/5 эт.",
    street: "ул. Бабушкина"
  },
  {
    id: 27,
    photos: [
      "https://00.img.avito.st/image/1/1.6v_nT7a-Rhbx7-QXvxz7iuXvRBBV-EIWVZ8nHFlMR7RS7EQ.ie7_WQRGLPn23BtwgLRwK1KI3Fs1plYfDJOCJzEpjsw?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 990000,
    pricePerSqm: "19 186 ₽/м²",
    description: "2-к. квартира, 51,6 м², 1/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 28,
    photos: [
      "https://b30.img.avito.st/image/1/1.RTfVPLa-6d7DnEvf0wU9VK6d69hni-3eZ-yI1Gs_6Hxgn-s.kUAfz-vThJ6V0mH0AlagqP8CeviDQYw52nWvvViNn08?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 650000,
    pricePerSqm: "9 286 ₽/м²",
    description: "3-к. квартира, 70 м², 3/3 эт.",
    street: "ул. Мира"
  },
  {
    id: 29,
    photos: [
      "https://30.img.avito.st/image/1/1.gMnFc7a-LCDT044hySWd8f7TLiZ3xCggd6NNKntwLYJw0C4.GhuS9pE6o6A5-T_O-xKX9KrHoBqCNZTD_CyvIpqoXNY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 1750000,
    pricePerSqm: "30 702 ₽/м²",
    description: "3-к. квартира, 57 м², 5/5 эт.",
    street: "Воркутинская ул."
  },
  {
    id: 30,
    photos: [
      "https://40.img.avito.st/image/1/1.Yfw-Cra-zRUoqm8UcGMXzRarzxOMvckVjNqsH4AJzLeLqc8.PG9NLTpQCavso5-zDh8ICEF2EpcWlUKh6xa0SV6h5tc"
    ],
    price: 120000,
    pricePerSqm: "3 834 ₽/м²",
    description: "1-к. квартира, 31,3 м², 4/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 31,
    photos: [
      "https://c70.img.avito.st/image/1/1.c4R6g7a_321sI31sENJnl7Ag2WvYJt9rv0PVZ2wjfWzMIA.bua6HAnKtGQsz3RjOIkci_EcomHSwtIXz6GOfO_3q8E"
    ],
    price: 700000,
    pricePerSqm: "14 768 ₽/м²",
    description: "2-к. квартира, 47,4 м², 4/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 32,
    photos: [
      "https://40.img.avito.st/image/1/1.Z5YEH7a-y38Sv2l-Ri520SW_yXm2qM9_ts-qdbocyt2xvMk.mFulqKWPhWMIMpwOJgHoU8B5FMPsDlm7KaNJ93M32Wo"
    ],
    price: 1100000,
    pricePerSqm: "17 857 ₽/м²",
    description: "3-к. квартира, 61,6 м², 3/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 33,
    photos: [
      "https://b00.img.avito.st/image/1/1.DJmGxba-oHCQZQJxkuEn_J1lonY0cqRwNBXBejjGodIzZqI.6SJhPjp7ysR68A7Flyff268ZqozncHVXI_cfD08QkNQ?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ],
    price: 350000,
    pricePerSqm: "6 604 ₽/м²",
    description: "3-к. квартира, 53 м², 5/5 эт.",
    street: "ул. Мира"
  },
  {
    id: 34,
    photos: [
      "https://60.img.avito.st/image/1/1.w_F0Hba_bxhivc0ZfhKiipy-aR7WuG8esd1lEmK9zRnCvg.ocCuCrXREf379jceaMiOioNErr8Su2htT4LU1Eny5P4"
    ],
    price: 150000,
    pricePerSqm: "2 600 ₽/м²",
    description: "2-к. квартира, 57,7 м², 5/5 эт.",
    street: "ул. Морозова"
  },
  {
    id: 35,
    photos: [
      "https://40.img.avito.st/image/1/1.IM_VBra-jCbDpi4nmQIz8-2njiBnsYgmZ9btLGsFjYRgpY4.3iWafpiZ_mgtr0roCcMTDH1TR-mTdARn9uy0g6xb5HY"
    ],
    price: 480000,
    pricePerSqm: "6 897 ₽/м²",
    description: "3-к. квартира, 69,6 м², 2/5 эт.",
    street: "Ленинградская ул."
  },
  {
    id: 36,
    photos: [
      "https://b40.img.avito.st/image/1/1.nZl4cba-MXBu0ZNxTk-02HvQM3bKxjVwyqFQesZyMNLN0jM._6inyr4RKP2lQpGybiNy49NwOFp191thDnFl7PSALRA"
    ],
    price: 800000,
    pricePerSqm: "9 512 ₽/м²",
    description: "4-к. квартира, 84,1 м², 4/5 эт.",
    street: "ул. Куратова"
  }
];

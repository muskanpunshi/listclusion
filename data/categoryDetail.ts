//category mobile
import architectsMob from "@public/template/architects-consultants.png";
import engineeringMob from "@public/template/engineering-consultants.png";
import buildersMob from "@public/template/builders-and-developers.png";
import interiorMob from "@public/template/interior-designers.png";
import mechanicalMob from "@public/template/mechanical-consultant.png";
import electricalMob from "@public/template/electrical-consultants.png";
import hvacMob from "@public/template/hvac-consultants.png";
import plumblingMob from "@public/template/plumbling-consultants.png";
import furnitureMob from "@public/template/furniture-manufactures.png";
import projectMob from "@public/template/project-managers.png";
import quanlityMob from "@public/template/quanlity-surveyors-consultants.png";
import metalMob from "@public/template/metal-works.png";
import furnitureSubMob from "@public/template/furniture-card.jpg"
import woodworkSubMob from "@public/template/wood-working-machine-card.jpg"
import chairsSubMob from "@public/template/chairs-card.jpg"
import outdoorSubMob from "@public/template/outdoor-furniture-card.jpg"

//category banner
import architectsBanner from "@public/template/architects-consultants-ban.jpg";
import engineeringBanner from "@public/template/engineering-consultants-ban.jpg";
import buildersBanner from "@public/template/builders-and-developers-ban.jpg";
import interiorBanner from "@public/template/interior-designers-ban.jpg";
import mechanicalBanner from "@public/template/mechanical-consultant-ban.jpg";
import electricalBanner from "@public/template/electrical-consultants-ban.jpg";
import hvacBanner from "@public/template/hvac-consultants-ban.jpg";
import plumblingBanner from "@public/template/plumbling-consultants-ban.jpg";
import furnitureBanner from "@public/template/furniture-manufactures-ban.jpg";
import projectBanner from "@public/template/project-managers-ban.jpg";
import quanlityBanner from "@public/template/quanlity-surveyors-consultants-ban.jpg";
import metalBanner from "@public/template/metal-works-ban.jpg";
import furnitureSubBanner from "@public/template/furniture.jpg"
import woodworkSubBanner from "@public/template/wood-working-machine.jpg"
import chairsSubBanner from "@public/template/chairs.jpg"
import outdoorSubBanner from "@public/template/outdoor-furniture.jpg"


import property2Thumb_11 from "@public/template/project-1.jpg";
import property2Thumb_22 from "@public/template/project-2.jpg";
import property2Thumb_33 from "@public/template/project-3.jpg";

export interface ListingThumb {
  img: any;
  active?: string;
}

export interface CategoryItem {
  name: string;
  tel: string;
  email: string;
  address?: string;
  workingHours: string;
  logo: string;
  listing_thumb: ListingThumb[];
}

export interface StructuredCategory {
  category: string;
  parentCategory?: string;
  categorySlug: string;
  categoryBannerImage: any;
  categoryImageMob: any;
  child: CategoryItem[];
}

export type StructuredCategories = StructuredCategory[];

export const categoryDetails: StructuredCategories = [
  {
    category: "Architects Consultants",
    categorySlug: "architects-consultants",
    categoryBannerImage: architectsBanner,
    categoryImageMob: architectsMob,
    child: [
      {
        name: "AHR ALI NAQVI",
        tel: "35823731832",
        email: "mail@aliarshada associates.com",
        address: "D9I/1, BLOCK -4 CLIFTON KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "AR",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "AHED ASSOCIATES",
        tel: "021-34311795-8",
        email: "mail@ahedassociates.com",
        address: "C-114 KDA SCHEME-1",
        workingHours: "09 AM TO 05 PM",
        logo: "Ahed Associates",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "ARCOP PVT LTD.",
        tel: "021-35895196",
        email: "arcop@arcopassociates.com",
        address: "ec.SUNSET COMM STREET # 4 PHASE IV DNA, KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "arcop",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "EBRAHIM & CHOUDHARY",
        tel: "021-34534792,3453616",
        email: "mail@eando.com.pk",
        address:
          "EBRAHIM STATE 3RD FLOOR.D1,UNION COMMERCIAL AREA BLOCK 7 /8 SHAHRAH-E-FAISAL KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "![ref1]",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "FIDA HUSSAIN & ASSOCIATES",
        tel: "021-34522096,34523759",
        email: "Fha-eng@cyber.net.pk",
        address:
          "IBRAHIM ESTATE 1ST FLOOR B-7&8 D1 CC AREA SHAHRAH-E-FAISAL KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "![ref1]",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "AL AMMAR",
        tel: "35884836",
        email: "alammar@cyber.net.pk",
        address: "18-C PHASE II EXT .SOUTH PARK AVENUE DNA KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "![ref1]",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "ABDUL AZIZ & ASSOCIATES",
        tel: "32733004",
        email: "aaaassoca.itespk@yahoo.com",
        address: "401 SABIR MANZIL MARSTON ROAD",
        workingHours: "09 AM TO 05 PM",
        logo: "![ref1]",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "GUL & THARIANI",
        tel: "32728287-9",
        email: "gul.thariani@gmail.com",
        address: "4TH FLOOR MUBARAK MANZIL 39 GARDEN ROAD KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "![ref1]",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "HABIB FIDA ALI",
        tel: "35661683-84",
        email: "habib@habibfida.ali.com",
        address: "HH 4,CH.KHALIQUZZAM AN ROAD CLIFTON KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "Habib Fida Ali Adikatsi",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
      {
        name: "KEYSTONE ARCHITECTURE",
        tel: "0333-3418797 ,0300-2287401",
        email: "keystone.a rchitecture@gmail.com",
        address:
          "SUIT # 4 & 5 GATE # 3 NISAR SHAHEED PARK PHASE IV DHA KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "KEYSTONE ARCHITECTS",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
      },
    ],
  },
  {
    category: "Engineering Consultants",
    categorySlug: "engineering-consultants",
    categoryBannerImage: engineeringBanner,
    categoryImageMob: engineeringMob,
    child: [
      {
        name: "ARIF & ASSOCIATES",
        tel: "021-34988461,34 980871",
        email: "arifkasamy@yahoo.com",
        address:
          "C-84 BLOCK 8, NEAR URDU SCIENCE COLLEGE GULSHAN-E-IGBAL KARACHI",
        workingHours: "09 AM TO 05 PM",
        logo: "Arif & Associates",
        listing_thumb: [
          { img: property2Thumb_11, active: "active" },
          { img: property2Thumb_22 },
          { img: property2Thumb_33 },
        ],
    },
]
},
    {
        parentCategory: "Importer",
        category: "Out Door Furniture",
        categorySlug: "outdoor",
        categoryBannerImage: outdoorSubBanner,
        categoryImageMob: outdoorSubMob,
        child: [
            {
                name: "KINGCOME",
                tel: "18257816777",
                email: "wayne.gu@jinjiangindustry.com",
                address: "County,Jinhua,Zhejiang,China Addz:NO.1 Wenchang Middle Road, Yangzhou, Jiangsu, China",
                workingHours: "09 AM TO 05 PM",
                logo: "Kingcome Im-Jiang Industry",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "VARMAX",
                tel: "504076141",
                email: "info@varmax.cn",
                address: "Wuxi, Jiangsu Province, and another in Beijing, China",
                workingHours: "09 AM TO 05 PM",
                logo: "Varmax",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "SUNRITE",
                tel: "86 150 6866 3001",
                email: "leona@sunrite.net",
                address: "398 Zhexi Road, Dayang, Linhai, Zhejiang, China",
                workingHours: "09 AM TO 05 PM",
                logo: "SUNRITE",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "NISCO",
                tel: "86-25-84671233",
                email: "Ecommerce@niscointl.cn",
                address: "99 Chencao Road, RD DINGYAN RUGAO JIANGSU PROVINCE CHINA",
                workingHours: "09 AM TO 05 PM",
                logo: "NISCO",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HIGOLD",
                tel: "86 159 1580 2561",
                email: "sales@higoldusa.net",
                address: "No. 38 Shunya East Road,Xingtan Town, Shunde District Foshan City, Guangdong Province China",
                workingHours: "09 AM TO 05 PM",
                logo: "HIGOLD",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            }
        ]
    },
    {
        parentCategory: "Importer",
        category: "Wood Working Machinery",
        categorySlug: "machinery",
        categoryBannerImage: woodworkSubBanner,
        categoryImageMob: woodworkSubMob,
        child: [
            {
                name: "WEILI MACHINERY INDUSTRIAL",
                tel: "0757-27330181",
                email: "www.wdimachine.com",
                address: "LUNJIAO LND ZONE SHUNDE DISTRICT FOSHAN CITY GUANGDONG PROVINCE CHINA",
                workingHours: "09 AM TO 05 PM",
                logo: "WOL 威德力",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "JIASHUNLONG MACHINERY CO.LTD",
                tel: "13902567009",
                email: "jsl8998@163.com",
                address: "NO.1 LONGWEI ROAD XICHONG, LUNJIAO SHUNDE DIST, FOSHAN CITY",
                workingHours: "09 AM TO 05 PM",
                logo: "WOL 威德力",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "FOSHAN DINGKOUZHONGYE MACHINERY MANUFACTURING CO.LTD",
                tel: "86-757-27337505",
                email: "cdingkouzhongyie@163.com",
                address: "NO.2 YUCHENG ROAD Z_JIYUE INDUSTRIAL ZONE, LUNJIAO SUBDISTRICT OFFICE LUNJIAO FOSHAN GUANGDONG CHINA",
                workingHours: "09 AM TO 05 PM",
                logo: "WOL 威德力",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "JINGYI MACHINERY",
                tel: "86-13615946593",
                email: "jjngyi@j-one.com.cn",
                address: "2105 NO 289 CANGJING ROAD SONGJIAN",
                workingHours: "09 AM TO 05 PM",
                logo: "Jone",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "SAGA MACHINERY CO.LTD",
                tel: "86-15632196963",
                email: "sagahf1@126.com",
                address: "7th of Guihua Road, Shijiazhuang Economic and Technology Development Zone, Shijiazhuang City, Heidi Province, China",
                workingHours: "09 AM TO 05 PM",
                logo: "SAGA",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            }
        ]
    },
    {
        parentCategory: "Importer",
        category: "Chairs",
        categorySlug: "chairs",
        categoryBannerImage: chairsSubBanner,
        categoryImageMob: chairsSubMob,
        child: [
            {
                name: "ANJI FUHE",
                tel: "8618367606964",
                email: "zjlianfeng@126.com",
                address: "China, Zhe Jiang Sheng, Hu Zhou Shi, An Ji Xian, 04省道邮政编码: 313399",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HUANG XIAO MIN",
                tel: "NILL",
                email: "2853279514@QQ.COM",
                address: "NO. 8 SOUTH FENGHUA RD, LONGJIANG TOWN, SHUNDE DISTRICT, FOSHAN CITY, GUANGDONG, CHINA",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ZHEJIANG ZHONGWEI SMART FURNITURE CO.,LTD(CHAIR ACCESSORIES)",
                tel: "86-577-62271388",
                email: "Shirley.hou@zhongwei.com",
                address: "#138, Wei 12 Road, Yangen Economic Development Zone, Yueqing City, Zhejiang Province, China",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "FOSHAN SUNKODA (HENG FA ) FURNITURE CO.,LTD",
                tel: "86-0757-86902701",
                email: "sales@hengfasunkoda.com",
                address: "No. 4 Development Road, Xiqing Industrial Park, Longjiang Town, Foshan, Guangdong, China",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "FOSHAN YIHAN OFFICE FURNITURE CO.,LTD",
                tel: "86-13924573232",
                email: "1147942350@qq.com",
                address: "No.7 Shijiang IndustryArea, Shakou Jiujiang town Nanhai district in Foshan",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            }
        ]
    },
    {
        parentCategory: "Importer",
        category: "Furniture",
        categorySlug: "furniture",
        categoryBannerImage: furnitureSubBanner,
        categoryImageMob: furnitureSubMob,
        child: [
            {
                name: "FOSHAN SHUNDE SHIMING FURNITURE CO.LTD",
                tel: "86-13360318488",
                email: "shiminghardwar@126.com",
                address: "35 Gongye Avenue, Beijing Town, Shunde District, Foshan, 528300 China",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "BOW VICTORY SDN",
                tel: "60-12-6181166",
                email: "bowvsb@gmail.com",
                address: "3999, Jalan Kelbin Sayur, Bukit Bakri, 84200 Kishu Bakri, Johor, Malaysia",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "OUTSTAR INTERNATIONAL CO LIMITED LUOYANG",
                tel: "0086-13623792447",
                email: "sales3@outstanl.com",
                address: "1002-C3, Aoli Building, Gucheng Road, Luolong Area, Luoyang City, Henan, China, 471000",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "CHANGZHOU MEINAISI",
                tel: "0519-88726076",
                email: "www.sdfurnei.com",
                address: "85 Weifu Road Henglin Town Wujin District Changzhou City Jiangsu Province China",
                workingHours: "09 AM TO 05 PM",
                logo: "",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HUABAO STEEL APPLIANCE CO LTD",
                tel: "86-8027662494",
                email: "sales.info@jmhuabao.com",
                address: "Qibao Bridge Development Zone,Xinhui District,Jiangmen City,Guangdong",
                workingHours: "09 AM TO 05 PM",
                logo: "Huabao",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            }
        ]
    },
];

export default categoryDetails;

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
                address: "EBRAHIM STATE 3RD FLOOR.D1,UNION COMMERCIAL AREA BLOCK 7 /8 SHAHRAH-E-FAISAL KARACHI",
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
                address: "IBRAHIM ESTATE 1ST FLOOR B-7&8 D1 CC AREA SHAHRAH-E-FAISAL KARACHI",
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
                address: "SUIT # 4 & 5 GATE # 3 NISAR SHAHEED PARK PHASE IV DHA KARACHI",
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
                address: "C-84 BLOCK 8, NEAR URDU SCIENCE COLLEGE GULSHAN-E-IGBAL KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "Arif & Associates",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "NESPAK",
                tel: "99090000",
                email: "nespak@wol.net.pk",
                address: "NESPAK HOUSE.1-C BLOCK-N, MODEL TOWN EXT, LAHORE",
                workingHours: "09 AM TO 05 PM",
                logo: "AA ASSOCIATES",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "AA ASSOCIATES",
                tel: "021-34539884",
                email: "info@aa-associates.com",
                address: "245-2-Y BLOCK .6 PEKHS OFF: SHAHRAH-E-FAISAL KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "AA ASSOCIATES",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "LOYAS ASSOCIATES",
                tel: "021-34535240-2",
                email: "info@loyasassociates.com",
                address: "189C, BLOCK 2-PECHS SHAHRAH-E-COLAIDEER: SHAHRAH-E-FAISAL KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "AA ASSOCIATES",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HK INTERNATIONAL",
                tel: "35893774-0313-2951879",
                email: "hkintl@khi.coms ats.net.pk",
                address: "C-17 THIRD FLOOR, SUNSET LANE 1, PHASE II EXT DHA KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "AK",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "MUGHAL'S CONSTRUCT OR'S LTD",
                tel: "35892027 , 35389706",
                email: "mcl.po@mughalsgroup.com",
                address: "142-17 EAST STREET PHASE I , DHA KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Shahzad Associates",
                tel: "34384591 , 0300-8232814",
                email: "shahzadas-sociates@outlook.com",
                address: "E/3 FARZANA BUILDING , 2ND FLOOR SHAHEED-E-MILLY ROAD KARACHI PAKISTAN",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Techno Consultants",
                tel: "34530630-2",
                email: "email@techno-consult.com",
                address: "37K BLOCK 6, PECHS KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Indus Associated Consultants",
                tel: "35210591-2",
                email: "iac@indus-consult.com.pk",
                address: "113 PROGRESSIVE PLAZA BEAMMONT ROAD",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Maccon",
                tel: "35892300 , 35728214",
                email: "macconex@hotmail.com",
                address: "2-B COMMERCIAL PHASE I , DHA LAHORE",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Civil Contractors",
        categorySlug: "civil-contractors",
        categoryBannerImage: buildersBanner,
        categoryImageMob: buildersMob,
        child: [
            {
                name: "AA BUILDERS & DEVELOPERS",
                tel: "34982724,349 85842 0333-1199743",
                email: "ahmedautomobileec@yahoo.com",
                address: "FIRST FLOOR, SHAPE GENRE,SB-25 BLOCK 13-C GUUSHAN-E-IGBAL MAIN UNIVERSITY ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ABASEEN CONSTRUCTION CO PVT.LTD",
                tel: "34931614,349 30853 0301-8254626",
                email: "acclltd@yahoo.com",
                address: "FLAT-7 SECOND FLOOR AFZAL APPARTAHTER STADIUM ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ABDULLAH BUILDERS & DEVELOPERS",
                tel: "021-35834591",
                email: "info@abdullahgroup.com",
                address: "HOUSE # D-3, CLIFTON BLOCK 9 KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "AL MISBAH BUILDERS",
                tel: "34963976 , 34978135",
                email: "al_misbah_assoclates@hotmail.com",
                address: "B-12, BLOCK-19 GUUSTAN-E-JOHAR KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "DOLMEN GROUP",
                tel: "34534453-4 34531246",
                email: "info@dolmengro up.com",
                address: "4TH FLOOR , DOLMEN MALL TARIQ ROAD 13/3 DOHS TARIQ ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**dolmen**",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Al Asr Associates",
                tel: "111-062-111 , 34817761-4",
                email: "info@al-asargroup.com.pk",
                address: "AL ASR HOUSE, SB-37, BLOCK-13-C GULSHAN-E-IGBAL MAIN UNIVERSITY ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**AL-ASR** GROUP OF COMPANTS",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Al-Jazirah Engineers @ consultants",
                tel: "0333-3503619 , 34810414",
                email: "arch@ajecpakistan.com",
                address: "GROUND FLOOR, B-8, BLOCK-9, GULSHAN-E-IGBAL KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**DAJEL**",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Al Tariq Constructors",
                tel: "32427800 , 32427803",
                email: "atl@atlpak.com",
                address: "SUIT 1301-1302,13 FLOOR UNI CENTRE II CHANDIGARN ROAD KARACHI.",
                workingHours: "09 AM TO 05 PM",
                logo: "**ATL** contractors - operators",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Bismillah Builders & Developers",
                tel: "34936655 , 34852399",
                email: "https/bismillahdevelopers.com",
                address: "M-3, NOOR SQUARE, UNIVERSITY ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**BISMILLAH** Builders & Developers",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "FALAKNAZ ASSOCIATED",
                tel: "34582047 , 34582070",
                email: "info@falaknazproperties.com",
                address: "SHOP 10, FALAKNAZ ARCADE 1 , OFF: AIRPORT POLICE STATION MAIN SHAHRAH-E-FAISAL KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**FALAKNAZ**",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Interior Contractors",
        categorySlug: "interior-contractors",
        categoryBannerImage: interiorBanner,
        categoryImageMob: interiorMob,
        child: [
            {
                name: "AL-SHAFI ENTERPRISES",
                tel: "021-34127957 , 35310364-66",
                email: "hr@alsharligroup.com",
                address: "7/C, SUNSET BOULEVARD, PHASE II , DHA PHASE 2 KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**S** al-Asr Contracts",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "DELUXE INTERIOR",
                tel: "021-35832678",
                email: "deluxeinterior.co.uk",
                address: "MASJID SHOP 5 MUBARAK UPPER GIZRI KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**DELUXE INTERIORS**",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "CONWOOD",
                tel: "0323-8226416",
                email: "farhansuriyan@hotmail.com",
                address: "MB-72 SECTOR 6-D MEHRAN TOWN KORANGI INDUSTRIAL AREA KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**Conwood** * a name of the department*",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "VERSANT INTERIOR",
                tel: "0333-3522144",
                email: "info@theversant.Com",
                address: "PLOT # 83_C GROUND FLOOR BUKHARI LANE 5, BUKHARI COMMERCIAL AREA PHASE 6 DEFENCE HOUSING AUTHORITY KARACHI 75500",
                workingHours: "09 AM TO 05 PM",
                logo: "**Versant** * FORGETFULER",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Ali's Interior",
                tel: "021-35068803",
                email: "https://alisinterior.com",
                address: "PLOT # 44 ROAD MEHRAN TOWN SECTOR 23 KORANGI INDUSTRIAL AREA KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**Ali's Interior** * 2019/2020",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Arif & Sons Wood Works",
                tel: "0333-2224921",
                email: "arifcontractor.com",
                address: "VZBF + JAM PREEDY QUARTERS KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**ARIF AND SONS** * CAREINECTOUR 65",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Bestow Furniture",
                tel: "0333-2107771",
                email: "https://www.bestow.com",
                address: "CITY TOWER SUITE 402-B 4TH FLOOR MAIN BOULEVARD GUIDEKG III, LANDER PUNJAB PAKISTAN",
                workingHours: "09 AM TO 05 PM",
                logo: "**BESTOW** * Classic Interior",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Classic Interiors",
                tel: "0307-0211916",
                email: "https://classicinterio.pk",
                address: "B-215 MEHRAN TOWN INDUSTRIAL AREA 6F KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**Classic Interior**",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Craftsman furniture",
                tel: "0321-2381848",
                email: "craftsmanfurniture@hotmail.com",
                address: "UNIVERSITY COMPOUND # 4, OLD SUBZIMANDI ROAD KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**Craftsman** * 2019/2020",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Creative wood SHAPERS",
                tel: "0333-0248898",
                email: "contact@creativeww.com",
                address: "SHOP # E38B E , MARKET KARACHI",
                workingHours: "09 AM TO 05 PM",
                logo: "**Creative wood** * WORKMAN 95",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Mechanical Consultants",
        categorySlug: "mechanical-consultants",
        categoryBannerImage: mechanicalBanner,
        categoryImageMob: mechanicalMob,
        child: [
            {
                name: "AZIZ ENTERPRISES",
                tel: "92117863050",
                email: "Azizenterprises @live.com",
                workingHours: "09 AM TO 05 PM",
                logo: "AZIZ ENTERPRISES",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "NADEEM ASSOCIATES",
                tel: "0300-2192656",
                email: "https:nadeemassociates.com.pk",
                workingHours: "09 AM TO 05 PM",
                logo: "NADEEM ANNUAL",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "NATIONAL ENGINEERING",
                tel: "0344-4850161",
                email: "https://www.nespak.com.pk",
                workingHours: "09 AM TO 05 PM",
                logo: "NADEEM ANNUAL",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Turk Enterprises",
                tel: "0345-3366668",
                email: "https://turkenterprises.com",
                workingHours: "09 AM TO 05 PM",
                logo: "TURK ENTERPRISE",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Electrical Consultants",
        categorySlug: "electrical-consultants",
        categoryBannerImage: electricalBanner,
        categoryImageMob: electricalMob,
        child: [
            {
                name: "CRESENT",
                tel: "021-35662783, 0323-2445816",
                email: "www.cresentelectric.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "CRESENT",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HUSSAINI ELECTRIC",
                tel: "0315-4977742",
                email: "https:hussainielectric.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "REHAN SALEEM ELECTRIC",
                tel: "021-34813342",
                email: "https:rehansalimelectric.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "NOOR ELECTRIC",
                tel: "0301-0081091",
                email: "https:noorelectric.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "NOOR ELECTRIC",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "EXCELLENT ASSOCIATES",
                tel: "021-34549508",
                email: "info@excellentassociates.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "Excellent Associates",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "M.R ENTERPRISES",
                tel: "021-36638310,03022577167",
                email: "info@mrepk.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Plumbing Consultants",
        categorySlug: "plumbing-consultants",
        categoryBannerImage: plumblingBanner,
        categoryImageMob: plumblingMob,
        child: [
            {
                name: "AL HASAN PLUMBING",
                tel: "0333-2361433,0343-83810-12",
                email: "farrukh@alhasana gencies.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "IRFAN PLUMBING",
                tel: "0321-2248975.",
                email: "irfanplumbingworks@gmail.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "JAMEEL PLUMBING",
                tel: "0312-9664177",
                email: "jamilplumbing@gmail.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Furniture Manufacturers",
        categorySlug: "furniture-manufacturers",
        categoryBannerImage: furnitureBanner,
        categoryImageMob: furnitureMob,
        child: [
            {
                name: "CONWOOD FURNITURE",
                tel: "0323-8226416",
                email: "farhansuriyan@hot mail.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "INTERWOOD FURNITURE",
                tel: "021-35242717,0308-2316026",
                email: "www.intenwood.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "DIMENSION FURNITURE",
                tel: "0322-2564648",
                email: "www.dimensions.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "MASTER FURNITURE",
                tel: "03045590017,03021122828.",
                email: "www.masteroffis.ys.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "DREAMZ FURNITURE MANUFACTURER",
                tel: "0325-2987978",
                email: "info@dreaminterior.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "Z MARIO FURNITURE MANUFACTURER",
                tel: "021-35241905,0300-8285946",
                email: "https://www.zmario.com.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ASHARYS FURNITURE MANUFACTURER",
                tel: "021-35860794",
                email: "https://asharys.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "A S H A R Y S",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "TWI FURNITURE MANUFACTURER",
                tel: "9221-4548693",
                email: "twi-furnish@cyber.net.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "TWI FURNISHINGS",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "DASTKAR FURNITURE MANUFACTURER",
                tel: "0306-9255145",
                email: "info@dastkar.org",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ANWAR FURNITURE MANUFACTURER",
                tel: "0334-3483140",
                email: "anwarfurniture@ outlook.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Project Managers",
        categorySlug: "project-managers",
        categoryBannerImage: projectBanner,
        categoryImageMob: projectMob,
        child: [
            {
                name: "AZAL PROJECT MANAGEMENT S",
                tel: "021-35387757",
                email: "www.azal.com. pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "MMP PROJECT MANAGEMENT S",
                tel: "0303-3330003",
                email: "https:mmppakis tan.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "AAA PROJECT MANAGEMENT S",
                tel: "92 21 37131326 - 30",
                email: "email@aaaproj ects.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "MAINHARDT PROJECT MANAGEMTN",
                tel: "0331-2055245",
                email: "https://meinhard t.com.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "EXPONENT PROJECT MANAGEMENT",
                tel: "92 21 34303165",
                email: "https://www.exponent.com.pk",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Quantity Surveyours Consultants",
        categorySlug: "quantity-surveyours-consultants",
        categoryBannerImage: quanlityBanner,
        categoryImageMob: quanlityMob,
        child: [
            {
                name: "COSTVEYOUR QS CONSULTANT",
                tel: "(021) 37131329",
                email: "www.costveyou r.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "SURVEY TECH",
                tel: "0335-7657765",
                email: "surveytech2@g mail.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "![ref1]",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "QS CONSULTANT",
                tel: "(021) 34935449",
                email: "https:qsconsulta nt.com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "QS CONSULTING",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
    },
    {
        category: "Metal Works",
        categorySlug: "metal-works",
        categoryBannerImage: metalBanner,
        categoryImageMob: metalMob,
        child: [
            {
                name: "CITY ALMUNIUM",
                tel: "0300-4020335 0312-4554400",
                email: "info@cityalumi nium.com.au",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "City Aluminium",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "HANEEF ALUMINIUM",
                tel: "0323-2056977",
                email: "sales@ausavina com",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "NINE GLASS The Aluminium",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
            {
                name: "ILYAS ALUMINIUM",
                tel: "0301-3980217",
                email: "adamabdullah9 027@gmail.co m",
                address: "",
                workingHours: "09 AM TO 05 PM",
                logo: "LYAS",
                listing_thumb: [
                    { img: property2Thumb_11, active: "active" },
                    { img: property2Thumb_22 },
                    { img: property2Thumb_33 },
                ],
            },
        ],
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
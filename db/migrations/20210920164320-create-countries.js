'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('countries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            code_3c: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            }
        });

        const countries = [
            {
                "code": "AF",
                "code_3c": "AFG",
                "name": "Afghanistan"
            },
            {
                "code": "AX",
                "code_3c": "ALA",
                "name": "Ã…land Islands"
            },
            {
                "code": "AL",
                "code_3c": "ALB",
                "name": "Albania"
            },
            {
                "code": "DZ",
                "code_3c": "DZA",
                "name": "Algeria"
            },
            {
                "code": "AS",
                "code_3c": "ASM",
                "name": "American Samoa"
            },
            {
                "code": "AD",
                "code_3c": "AND",
                "name": "Andorra"
            },
            {
                "code": "AO",
                "code_3c": "AGO",
                "name": "Angola"
            },
            {
                "code": "AI",
                "code_3c": "AIA",
                "name": "Anguilla"
            },
            {
                "code": "AQ",
                "code_3c": "ATA",
                "name": "Antarctica"
            },
            {
                "code": "AG",
                "code_3c": "ATG",
                "name": "Antigua and Barbuda"
            },
            {
                "code": "AR",
                "code_3c": "ARG",
                "name": "Argentina"
            },
            {
                "code": "AM",
                "code_3c": "ARM",
                "name": "Armenia"
            },
            {
                "code": "AW",
                "code_3c": "ABW",
                "name": "Aruba"
            },
            {
                "code": "AC",
                "code_3c": "ASC",
                "name": "Ascension Island"
            },
            {
                "code": "AU",
                "code_3c": "AUS",
                "name": "Australia"
            },
            {
                "code": "AT",
                "code_3c": "AUT",
                "name": "Austria"
            },
            {
                "code": "AZ",
                "code_3c": "AZE",
                "name": "Azerbaijan"
            },
            {
                "code": "BS",
                "code_3c": "BHS",
                "name": "Bahamas"
            },
            {
                "code": "BH",
                "code_3c": "BHR",
                "name": "Bahrain"
            },
            {
                "code": "BD",
                "code_3c": "BGD",
                "name": "Bangladesh"
            },
            {
                "code": "BB",
                "code_3c": "BRB",
                "name": "Barbados"
            },
            {
                "code": "BY",
                "code_3c": "BLR",
                "name": "Belarus"
            },
            {
                "code": "BE",
                "code_3c": "BEL",
                "name": "Belgium"
            },
            {
                "code": "BZ",
                "code_3c": "BLZ",
                "name": "Belize"
            },
            {
                "code": "BJ",
                "code_3c": "BEN",
                "name": "Benin"
            },
            {
                "code": "BM",
                "code_3c": "BMU",
                "name": "Bermuda"
            },
            {
                "code": "BT",
                "code_3c": "BTN",
                "name": "Bhutan"
            },
            {
                "code": "BO",
                "code_3c": "BOL",
                "name": "Bolivia"
            },
            {
                "code": "BQ",
                "code_3c": "BES",
                "name": "Bonaire, Sint Eustatius, and Saba"
            },
            {
                "code": "BA",
                "code_3c": "BIH",
                "name": "Bosnia and Herzegovina"
            },
            {
                "code": "BW",
                "code_3c": "BWA",
                "name": "Botswana"
            },
            {
                "code": "BV",
                "code_3c": "BVT",
                "name": "Bouvet Island"
            },
            {
                "code": "BR",
                "code_3c": "BRA",
                "name": "Brazil"
            },
            {
                "code": "IO",
                "code_3c": "IOT",
                "name": "British Indian Ocean Territory"
            },
            {
                "code": "VG",
                "code_3c": "VGB",
                "name": "British Virgin Islands"
            },
            {
                "code": "BN",
                "code_3c": "BRN",
                "name": "Brunei"
            },
            {
                "code": "BG",
                "code_3c": "BGR",
                "name": "Bulgaria"
            },
            {
                "code": "BF",
                "code_3c": "BFA",
                "name": "Burkina Faso"
            },
            {
                "code": "BI",
                "code_3c": "BDI",
                "name": "Burundi"
            },
            {
                "code": "KH",
                "code_3c": "KHM",
                "name": "Cambodia"
            },
            {
                "code": "CM",
                "code_3c": "CMR",
                "name": "Cameroon"
            },
            {
                "code": "CA",
                "code_3c": "CAN",
                "name": "Canada"
            },
            {
                "code": "IC",
                "code_3c": null,
                "name": "Canary Islands"
            },
            {
                "code": "CV",
                "code_3c": "CPV",
                "name": "Cape Verde"
            },
            {
                "code": "KY",
                "code_3c": "CYM",
                "name": "Cayman Islands"
            },
            {
                "code": "CF",
                "code_3c": "CAF",
                "name": "Central African Republic"
            },
            {
                "code": "EA",
                "code_3c": null,
                "name": "Ceuta and Melilla"
            },
            {
                "code": "TD",
                "code_3c": "TCD",
                "name": "Chad"
            },
            {
                "code": "CL",
                "code_3c": "CHL",
                "name": "Chile"
            },
            {
                "code": "CN",
                "code_3c": "CHN",
                "name": "China"
            },
            {
                "code": "CX",
                "code_3c": "CXR",
                "name": "Christmas Island"
            },
            {
                "code": "CP",
                "code_3c": "CPT",
                "name": "Clipperton Island"
            },
            {
                "code": "CC",
                "code_3c": "CCK",
                "name": "Cocos [Keeling] Islands"
            },
            {
                "code": "CO",
                "code_3c": "COL",
                "name": "Colombia"
            },
            {
                "code": "KM",
                "code_3c": "COM",
                "name": "Comoros"
            },
            {
                "code": "CG",
                "code_3c": "COG",
                "name": "Congo - Brazzaville"
            },
            {
                "code": "CD",
                "code_3c": "COD",
                "name": "Congo - Kinshasa"
            },
            {
                "code": "CK",
                "code_3c": "COK",
                "name": "Cook Islands"
            },
            {
                "code": "CR",
                "code_3c": "CRI",
                "name": "Costa Rica"
            },
            {
                "code": "CI",
                "code_3c": "CIV",
                "name": "CÃ´te dâ€™Ivoire"
            },
            {
                "code": "HR",
                "code_3c": "HRV",
                "name": "Croatia"
            },
            {
                "code": "CU",
                "code_3c": "CUB",
                "name": "Cuba"
            },
            {
                "code": "CW",
                "code_3c": "CUW",
                "name": "CuraÃ§ao"
            },
            {
                "code": "CY",
                "code_3c": "CYP",
                "name": "Cyprus"
            },
            {
                "code": "CZ",
                "code_3c": "CZE",
                "name": "Czech Republic"
            },
            {
                "code": "DK",
                "code_3c": "DNK",
                "name": "Denmark"
            },
            {
                "code": "DG",
                "code_3c": "DGA",
                "name": "Diego Garcia"
            },
            {
                "code": "DJ",
                "code_3c": "DJI",
                "name": "Djibouti"
            },
            {
                "code": "DM",
                "code_3c": "DMA",
                "name": "Dominica"
            },
            {
                "code": "DO",
                "code_3c": "DOM",
                "name": "Dominican Republic"
            },
            {
                "code": "EC",
                "code_3c": "ECU",
                "name": "Ecuador"
            },
            {
                "code": "EG",
                "code_3c": "EGY",
                "name": "Egypt"
            },
            {
                "code": "SV",
                "code_3c": "SLV",
                "name": "El Salvador"
            },
            {
                "code": "GQ",
                "code_3c": "GNQ",
                "name": "Equatorial Guinea"
            },
            {
                "code": "ER",
                "code_3c": "ERI",
                "name": "Eritrea"
            },
            {
                "code": "EE",
                "code_3c": "EST",
                "name": "Estonia"
            },
            {
                "code": "ET",
                "code_3c": "ETH",
                "name": "Ethiopia"
            },
            {
                "code": "EU",
                "code_3c": null,
                "name": "European Union"
            },
            {
                "code": "FK",
                "code_3c": "FLK",
                "name": "Falkland Islands"
            },
            {
                "code": "FO",
                "code_3c": "FRO",
                "name": "Faroe Islands"
            },
            {
                "code": "FJ",
                "code_3c": "FJI",
                "name": "Fiji"
            },
            {
                "code": "FI",
                "code_3c": "FIN",
                "name": "Finland"
            },
            {
                "code": "FR",
                "code_3c": "FRA",
                "name": "France"
            },
            {
                "code": "GF",
                "code_3c": "GUF",
                "name": "French Guiana"
            },
            {
                "code": "PF",
                "code_3c": "PYF",
                "name": "French Polynesia"
            },
            {
                "code": "TF",
                "code_3c": "ATF",
                "name": "French Southern Territories"
            },
            {
                "code": "GA",
                "code_3c": "GAB",
                "name": "Gabon"
            },
            {
                "code": "GM",
                "code_3c": "GMB",
                "name": "Gambia"
            },
            {
                "code": "GE",
                "code_3c": "GEO",
                "name": "Georgia"
            },
            {
                "code": "DE",
                "code_3c": "DEU",
                "name": "Germany"
            },
            {
                "code": "GH",
                "code_3c": "GHA",
                "name": "Ghana"
            },
            {
                "code": "GI",
                "code_3c": "GIB",
                "name": "Gibraltar"
            },
            {
                "code": "GR",
                "code_3c": "GRC",
                "name": "Greece"
            },
            {
                "code": "GL",
                "code_3c": "GRL",
                "name": "Greenland"
            },
            {
                "code": "GD",
                "code_3c": "GRD",
                "name": "Grenada"
            },
            {
                "code": "GP",
                "code_3c": "GLP",
                "name": "Guadeloupe"
            },
            {
                "code": "GU",
                "code_3c": "GUM",
                "name": "Guam"
            },
            {
                "code": "GT",
                "code_3c": "GTM",
                "name": "Guatemala"
            },
            {
                "code": "GG",
                "code_3c": "GGY",
                "name": "Guernsey"
            },
            {
                "code": "GN",
                "code_3c": "GIN",
                "name": "Guinea"
            },
            {
                "code": "GW",
                "code_3c": "GNB",
                "name": "Guinea-Bissau"
            },
            {
                "code": "GY",
                "code_3c": "GUY",
                "name": "Guyana"
            },
            {
                "code": "HT",
                "code_3c": "HTI",
                "name": "Haiti"
            },
            {
                "code": "HM",
                "code_3c": "HMD",
                "name": "Heard Island and McDonald Islands"
            },
            {
                "code": "HN",
                "code_3c": "HND",
                "name": "Honduras"
            },
            {
                "code": "HK",
                "code_3c": "HKG",
                "name": "Hong Kong SAR China"
            },
            {
                "code": "HU",
                "code_3c": "HUN",
                "name": "Hungary"
            },
            {
                "code": "IS",
                "code_3c": "ISL",
                "name": "Iceland"
            },
            {
                "code": "IN",
                "code_3c": "IND",
                "name": "India"
            },
            {
                "code": "ID",
                "code_3c": "IDN",
                "name": "Indonesia"
            },
            {
                "code": "IR",
                "code_3c": "IRN",
                "name": "Iran"
            },
            {
                "code": "IQ",
                "code_3c": "IRQ",
                "name": "Iraq"
            },
            {
                "code": "IE",
                "code_3c": "IRL",
                "name": "Ireland"
            },
            {
                "code": "IM",
                "code_3c": "IMN",
                "name": "Isle of Man"
            },
            {
                "code": "IL",
                "code_3c": "ISR",
                "name": "Israel"
            },
            {
                "code": "IT",
                "code_3c": "ITA",
                "name": "Italy"
            },
            {
                "code": "JM",
                "code_3c": "JAM",
                "name": "Jamaica"
            },
            {
                "code": "JP",
                "code_3c": "JPN",
                "name": "Japan"
            },
            {
                "code": "JE",
                "code_3c": "JEY",
                "name": "Jersey"
            },
            {
                "code": "JO",
                "code_3c": "JOR",
                "name": "Jordan"
            },
            {
                "code": "KZ",
                "code_3c": "KAZ",
                "name": "Kazakhstan"
            },
            {
                "code": "KE",
                "code_3c": "KEN",
                "name": "Kenya"
            },
            {
                "code": "KI",
                "code_3c": "KIR",
                "name": "Kiribati"
            },
            {
                "code": "KW",
                "code_3c": "KWT",
                "name": "Kuwait"
            },
            {
                "code": "KG",
                "code_3c": "KGZ",
                "name": "Kyrgyzstan"
            },
            {
                "code": "LA",
                "code_3c": "LAO",
                "name": "Laos"
            },
            {
                "code": "LV",
                "code_3c": "LVA",
                "name": "Latvia"
            },
            {
                "code": "LB",
                "code_3c": "LBN",
                "name": "Lebanon"
            },
            {
                "code": "LS",
                "code_3c": "LSO",
                "name": "Lesotho"
            },
            {
                "code": "LR",
                "code_3c": "LBR",
                "name": "Liberia"
            },
            {
                "code": "LY",
                "code_3c": "LBY",
                "name": "Libya"
            },
            {
                "code": "LI",
                "code_3c": "LIE",
                "name": "Liechtenstein"
            },
            {
                "code": "LT",
                "code_3c": "LTU",
                "name": "Lithuania"
            },
            {
                "code": "LU",
                "code_3c": "LUX",
                "name": "Luxembourg"
            },
            {
                "code": "MO",
                "code_3c": "MAC",
                "name": "Macau SAR China"
            },
            {
                "code": "MK",
                "code_3c": "MKD",
                "name": "Macedonia"
            },
            {
                "code": "MG",
                "code_3c": "MDG",
                "name": "Madagascar"
            },
            {
                "code": "MW",
                "code_3c": "MWI",
                "name": "Malawi"
            },
            {
                "code": "MY",
                "code_3c": "MYS",
                "name": "Malaysia"
            },
            {
                "code": "MV",
                "code_3c": "MDV",
                "name": "Maldives"
            },
            {
                "code": "ML",
                "code_3c": "MLI",
                "name": "Mali"
            },
            {
                "code": "MT",
                "code_3c": "MLT",
                "name": "Malta"
            },
            {
                "code": "MH",
                "code_3c": "MHL",
                "name": "Marshall Islands"
            },
            {
                "code": "MQ",
                "code_3c": "MTQ",
                "name": "Martinique"
            },
            {
                "code": "MR",
                "code_3c": "MRT",
                "name": "Mauritania"
            },
            {
                "code": "MU",
                "code_3c": "MUS",
                "name": "Mauritius"
            },
            {
                "code": "YT",
                "code_3c": "MYT",
                "name": "Mayotte"
            },
            {
                "code": "MX",
                "code_3c": "MEX",
                "name": "Mexico"
            },
            {
                "code": "FM",
                "code_3c": "FSM",
                "name": "Micronesia"
            },
            {
                "code": "MD",
                "code_3c": "MDA",
                "name": "Moldova"
            },
            {
                "code": "MC",
                "code_3c": "MCO",
                "name": "Monaco"
            },
            {
                "code": "MN",
                "code_3c": "MNG",
                "name": "Mongolia"
            },
            {
                "code": "ME",
                "code_3c": "MNE",
                "name": "Montenegro"
            },
            {
                "code": "MS",
                "code_3c": "MSR",
                "name": "Montserrat"
            },
            {
                "code": "MA",
                "code_3c": "MAR",
                "name": "Morocco"
            },
            {
                "code": "MZ",
                "code_3c": "MOZ",
                "name": "Mozambique"
            },
            {
                "code": "MM",
                "code_3c": "MMR",
                "name": "Myanmar [Burma]"
            },
            {
                "code": "NA",
                "code_3c": "NAM",
                "name": "Namibia"
            },
            {
                "code": "NR",
                "code_3c": "NRU",
                "name": "Nauru"
            },
            {
                "code": "NP",
                "code_3c": "NPL",
                "name": "Nepal"
            },
            {
                "code": "NL",
                "code_3c": "NLD",
                "name": "Netherlands"
            },
            {
                "code": "AN",
                "code_3c": "ANT",
                "name": "Netherlands Antilles"
            },
            {
                "code": "NC",
                "code_3c": "NCL",
                "name": "New Caledonia"
            },
            {
                "code": "NZ",
                "code_3c": "NZL",
                "name": "New Zealand"
            },
            {
                "code": "NI",
                "code_3c": "NIC",
                "name": "Nicaragua"
            },
            {
                "code": "NE",
                "code_3c": "NER",
                "name": "Niger"
            },
            {
                "code": "NG",
                "code_3c": "NGA",
                "name": "Nigeria"
            },
            {
                "code": "NU",
                "code_3c": "NIU",
                "name": "Niue"
            },
            {
                "code": "NF",
                "code_3c": "NFK",
                "name": "Norfolk Island"
            },
            {
                "code": "KP",
                "code_3c": "PRK",
                "name": "North Korea"
            },
            {
                "code": "MP",
                "code_3c": "MNP",
                "name": "Northern Mariana Islands"
            },
            {
                "code": "NO",
                "code_3c": "NOR",
                "name": "Norway"
            },
            {
                "code": "OM",
                "code_3c": "OMN",
                "name": "Oman"
            },
            {
                "code": "QO",
                "code_3c": null,
                "name": "Outlying Oceania"
            },
            {
                "code": "PK",
                "code_3c": "PAK",
                "name": "Pakistan"
            },
            {
                "code": "PW",
                "code_3c": "PLW",
                "name": "Palau"
            },
            {
                "code": "PS",
                "code_3c": "PSE",
                "name": "Palestinian Territories"
            },
            {
                "code": "PA",
                "code_3c": "PAN",
                "name": "Panama"
            },
            {
                "code": "PG",
                "code_3c": "PNG",
                "name": "Papua New Guinea"
            },
            {
                "code": "PY",
                "code_3c": "PRY",
                "name": "Paraguay"
            },
            {
                "code": "PE",
                "code_3c": "PER",
                "name": "Peru"
            },
            {
                "code": "PH",
                "code_3c": "PHL",
                "name": "Philippines"
            },
            {
                "code": "PN",
                "code_3c": "PCN",
                "name": "Pitcairn Islands"
            },
            {
                "code": "PL",
                "code_3c": "POL",
                "name": "Poland"
            },
            {
                "code": "PT",
                "code_3c": "PRT",
                "name": "Portugal"
            },
            {
                "code": "PR",
                "code_3c": "PRI",
                "name": "Puerto Rico"
            },
            {
                "code": "QA",
                "code_3c": "QAT",
                "name": "Qatar"
            },
            {
                "code": "RE",
                "code_3c": "REU",
                "name": "RÃ©union"
            },
            {
                "code": "RO",
                "code_3c": "ROU",
                "name": "Romania"
            },
            {
                "code": "RU",
                "code_3c": "RUS",
                "name": "Russia"
            },
            {
                "code": "RW",
                "code_3c": "RWA",
                "name": "Rwanda"
            },
            {
                "code": "BL",
                "code_3c": "BLM",
                "name": "Saint BarthÃ©lemy"
            },
            {
                "code": "SH",
                "code_3c": "SHN",
                "name": "Saint Helena"
            },
            {
                "code": "KN",
                "code_3c": "KNA",
                "name": "Saint Kitts and Nevis"
            },
            {
                "code": "LC",
                "code_3c": "LCA",
                "name": "Saint Lucia"
            },
            {
                "code": "MF",
                "code_3c": "MAF",
                "name": "Saint Martin"
            },
            {
                "code": "PM",
                "code_3c": "SPM",
                "name": "Saint Pierre and Miquelon"
            },
            {
                "code": "VC",
                "code_3c": "VCT",
                "name": "Saint Vincent and the Grenadines"
            },
            {
                "code": "WS",
                "code_3c": "WSM",
                "name": "Samoa"
            },
            {
                "code": "SM",
                "code_3c": "SMR",
                "name": "San Marino"
            },
            {
                "code": "ST",
                "code_3c": "STP",
                "name": "SÃ£o TomÃ© and PrÃ­ncipe"
            },
            {
                "code": "SA",
                "code_3c": "SAU",
                "name": "Saudi Arabia"
            },
            {
                "code": "SN",
                "code_3c": "SEN",
                "name": "Senegal"
            },
            {
                "code": "RS",
                "code_3c": "SRB",
                "name": "Serbia"
            },
            {
                "code": "CS",
                "code_3c": "SCG",
                "name": "Serbia and Montenegro"
            },
            {
                "code": "SC",
                "code_3c": "SYC",
                "name": "Seychelles"
            },
            {
                "code": "SL",
                "code_3c": "SLE",
                "name": "Sierra Leone"
            },
            {
                "code": "SG",
                "code_3c": "SGP",
                "name": "Singapore"
            },
            {
                "code": "SX",
                "code_3c": "SXM",
                "name": "Sint Maarten"
            },
            {
                "code": "SK",
                "code_3c": "SVK",
                "name": "Slovakia"
            },
            {
                "code": "SI",
                "code_3c": "SVN",
                "name": "Slovenia"
            },
            {
                "code": "SB",
                "code_3c": "SLB",
                "name": "Solomon Islands"
            },
            {
                "code": "SO",
                "code_3c": "SOM",
                "name": "Somalia"
            },
            {
                "code": "ZA",
                "code_3c": "ZAF",
                "name": "South Africa"
            },
            {
                "code": "GS",
                "code_3c": "SGS",
                "name": "South Georgia and the South Sandwich Islands"
            },
            {
                "code": "KR",
                "code_3c": "KOR",
                "name": "South Korea"
            },
            {
                "code": "SS",
                "code_3c": "SSD",
                "name": "South Sudan"
            },
            {
                "code": "ES",
                "code_3c": "ESP",
                "name": "Spain"
            },
            {
                "code": "LK",
                "code_3c": "LKA",
                "name": "Sri Lanka"
            },
            {
                "code": "SD",
                "code_3c": "SDN",
                "name": "Sudan"
            },
            {
                "code": "SR",
                "code_3c": "SUR",
                "name": "Suriname"
            },
            {
                "code": "SJ",
                "code_3c": "SJM",
                "name": "Svalbard and Jan Mayen"
            },
            {
                "code": "SZ",
                "code_3c": "SWZ",
                "name": "Swaziland"
            },
            {
                "code": "SE",
                "code_3c": "SWE",
                "name": "Sweden"
            },
            {
                "code": "CH",
                "code_3c": "CHE",
                "name": "Switzerland"
            },
            {
                "code": "SY",
                "code_3c": "SYR",
                "name": "Syria"
            },
            {
                "code": "TW",
                "code_3c": "TWN",
                "name": "Taiwan"
            },
            {
                "code": "TJ",
                "code_3c": "TJK",
                "name": "Tajikistan"
            },
            {
                "code": "TZ",
                "code_3c": "TZA",
                "name": "Tanzania"
            },
            {
                "code": "TH",
                "code_3c": "THA",
                "name": "Thailand"
            },
            {
                "code": "TL",
                "code_3c": "TLS",
                "name": "Timor-Leste"
            },
            {
                "code": "TG",
                "code_3c": "TGO",
                "name": "Togo"
            },
            {
                "code": "TK",
                "code_3c": "TKL",
                "name": "Tokelau"
            },
            {
                "code": "TO",
                "code_3c": "TON",
                "name": "Tonga"
            },
            {
                "code": "TT",
                "code_3c": "TTO",
                "name": "Trinidad and Tobago"
            },
            {
                "code": "TA",
                "code_3c": "TAA",
                "name": "Tristan da Cunha"
            },
            {
                "code": "TN",
                "code_3c": "TUN",
                "name": "Tunisia"
            },
            {
                "code": "TR",
                "code_3c": "TUR",
                "name": "Turkey"
            },
            {
                "code": "TM",
                "code_3c": "TKM",
                "name": "Turkmenistan"
            },
            {
                "code": "TC",
                "code_3c": "TCA",
                "name": "Turks and Caicos Islands"
            },
            {
                "code": "TV",
                "code_3c": "TUV",
                "name": "Tuvalu"
            },
            {
                "code": "UM",
                "code_3c": "UMI",
                "name": "U.S. Minor Outlying Islands"
            },
            {
                "code": "VI",
                "code_3c": "VIR",
                "name": "U.S. Virgin Islands"
            },
            {
                "code": "UG",
                "code_3c": "UGA",
                "name": "Uganda"
            },
            {
                "code": "UA",
                "code_3c": "UKR",
                "name": "Ukraine"
            },
            {
                "code": "AE",
                "code_3c": "ARE",
                "name": "United Arab Emirates"
            },
            {
                "code": "GB",
                "code_3c": "GBR",
                "name": "United Kingdom"
            },
            {
                "code": "US",
                "code_3c": "USA",
                "name": "United States"
            },
            {
                "code": "UY",
                "code_3c": "URY",
                "name": "Uruguay"
            },
            {
                "code": "UZ",
                "code_3c": "UZB",
                "name": "Uzbekistan"
            },
            {
                "code": "VU",
                "code_3c": "VUT",
                "name": "Vanuatu"
            },
            {
                "code": "VA",
                "code_3c": "VAT",
                "name": "Vatican City"
            },
            {
                "code": "VE",
                "code_3c": "VEN",
                "name": "Venezuela"
            },
            {
                "code": "VN",
                "code_3c": "VNM",
                "name": "Vietnam"
            },
            {
                "code": "WF",
                "code_3c": "WLF",
                "name": "Wallis and Futuna"
            },
            {
                "code": "EH",
                "code_3c": "ESH",
                "name": "Western Sahara"
            },
            {
                "code": "YE",
                "code_3c": "YEM",
                "name": "Yemen"
            },
            {
                "code": "ZM",
                "code_3c": "ZMB",
                "name": "Zambia"
            },
            {
                "code": "ZW",
                "code_3c": "ZWE",
                "name": "Zimbabwe"
            }
        ]

        queryInterface.bulkInsert('countries', countries)
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('countries');
    }
};

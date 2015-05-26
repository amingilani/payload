var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exRatesSchema = new Schema({
  /*
    The conversion rates from fiat to BTC are to be provided in the format
    currency_code : rate
  */
  'AED': Number, // UAE Dirham
  'AFN': Number, // Afghani
  'ALL': Number, // Lek
  'AMD': Number, // Armenian Dram
  'ANG': Number, // Netherlands Antillean Guilder
  'AOA': Number, // Kwanza
  'ARS': Number, // Argentine Peso
  'AUD': Number, // Australian Dollar
  'AWG': Number, // Aruban Florin
  'AZN': Number, // Azerbaijanian Manat
  'BAM': Number, // Convertible Mark
  'BBD': Number, // Barbados Dollar
  'BDT': Number, // Taka
  'BGN': Number, // Bulgarian Lev
  'BHD': Number, // Bahraini Dinar
  'BIF': Number, // Burundi Franc
  'BMD': Number, // Bermudian Dollar
  'BND': Number, // Brunei Dollar
  'BOB': Number, // Boliviano
  'BOV': Number, // [object Object]
  'BRL': Number, // Brazilian Real
  'BSD': Number, // Bahamian Dollar
  'BTN': Number, // Ngultrum
  'BWP': Number, // Pula
  'BYR': Number, // Belarussian Ruble
  'BZD': Number, // Belize Dollar
  'CAD': Number, // Canadian Dollar
  'CDF': Number, // Congolese Franc
  'CHE': Number, // [object Object]
  'CHF': Number, // Swiss Franc
  'CHW': Number, // [object Object]
  'CLF': Number, // [object Object]
  'CLP': Number, // Chilean Peso
  'CNY': Number, // Yuan Renminbi
  'COP': Number, // Colombian Peso
  'COU': Number, // [object Object]
  'CRC': Number, // Costa Rican Colon
  'CUC': Number, // Peso Convertible
  'CUP': Number, // Cuban Peso
  'CVE': Number, // Cabo Verde Escudo
  'CZK': Number, // Czech Koruna
  'DJF': Number, // Djibouti Franc
  'DKK': Number, // Danish Krone
  'DOP': Number, // Dominican Peso
  'DZD': Number, // Algerian Dinar
  'EGP': Number, // Egyptian Pound
  'ERN': Number, // Nakfa
  'ETB': Number, // Ethiopian Birr
  'EUR': Number, // Euro
  'FJD': Number, // Fiji Dollar
  'FKP': Number, // Falkland Islands Pound
  'GBP': Number, // Pound Sterling
  'GEL': Number, // Lari
  'GHS': Number, // Ghana Cedi
  'GIP': Number, // Gibraltar Pound
  'GMD': Number, // Dalasi
  'GNF': Number, // Guinea Franc
  'GTQ': Number, // Quetzal
  'GYD': Number, // Guyana Dollar
  'HKD': Number, // Hong Kong Dollar
  'HNL': Number, // Lempira
  'HRK': Number, // Croatian Kuna
  'HTG': Number, // Gourde
  'HUF': Number, // Forint
  'IDR': Number, // Rupiah
  'ILS': Number, // New Israeli Sheqel
  'INR': Number, // Indian Rupee
  'IQD': Number, // Iraqi Dinar
  'IRR': Number, // Iranian Rial
  'ISK': Number, // Iceland Krona
  'JMD': Number, // Jamaican Dollar
  'JOD': Number, // Jordanian Dinar
  'JPY': Number, // Yen
  'KES': Number, // Kenyan Shilling
  'KGS': Number, // Som
  'KHR': Number, // Riel
  'KMF': Number, // Comoro Franc
  'KPW': Number, // North Korean Won
  'KRW': Number, // Won
  'KWD': Number, // Kuwaiti Dinar
  'KYD': Number, // Cayman Islands Dollar
  'KZT': Number, // Tenge
  'LAK': Number, // Kip
  'LBP': Number, // Lebanese Pound
  'LKR': Number, // Sri Lanka Rupee
  'LRD': Number, // Liberian Dollar
  'LSL': Number, // Loti
  'LYD': Number, // Libyan Dinar
  'MAD': Number, // Moroccan Dirham
  'MDL': Number, // Moldovan Leu
  'MGA': Number, // Malagasy Ariary
  'MKD': Number, // Denar
  'MMK': Number, // Kyat
  'MNT': Number, // Tugrik
  'MOP': Number, // Pataca
  'MRO': Number, // Ouguiya
  'MUR': Number, // Mauritius Rupee
  'MVR': Number, // Rufiyaa
  'MWK': Number, // Kwacha
  'MXN': Number, // Mexican Peso
  'MXV': Number, // [object Object]
  'MYR': Number, // Malaysian Ringgit
  'MZN': Number, // Mozambique Metical
  'NAD': Number, // Namibia Dollar
  'NGN': Number, // Naira
  'NIO': Number, // Cordoba Oro
  'NOK': Number, // Norwegian Krone
  'NPR': Number, // Nepalese Rupee
  'NZD': Number, // New Zealand Dollar
  'OMR': Number, // Rial Omani
  'PAB': Number, // Balboa
  'PEN': Number, // Nuevo Sol
  'PGK': Number, // Kina
  'PHP': Number, // Philippine Peso
  'PKR': Number, // Pakistan Rupee
  'PLN': Number, // Zloty
  'PYG': Number, // Guarani
  'QAR': Number, // Qatari Rial
  'RON': Number, // New Romanian Leu
  'RSD': Number, // Serbian Dinar
  'RUB': Number, // Russian Ruble
  'RWF': Number, // Rwanda Franc
  'SAR': Number, // Saudi Riyal
  'SBD': Number, // Solomon Islands Dollar
  'SCR': Number, // Seychelles Rupee
  'SDG': Number, // Sudanese Pound
  'SEK': Number, // Swedish Krona
  'SGD': Number, // Singapore Dollar
  'SHP': Number, // Saint Helena Pound
  'SLL': Number, // Leone
  'SOS': Number, // Somali Shilling
  'SRD': Number, // Surinam Dollar
  'SSP': Number, // South Sudanese Pound
  'STD': Number, // Dobra
  'SVC': Number, // El Salvador Colon
  'SYP': Number, // Syrian Pound
  'SZL': Number, // Lilangeni
  'THB': Number, // Baht
  'TJS': Number, // Somoni
  'TMT': Number, // Turkmenistan New Manat
  'TND': Number, // Tunisian Dinar
  'TOP': Number, // Pa’anga
  'TRY': Number, // Turkish Lira
  'TTD': Number, // Trinidad and Tobago Dollar
  'TWD': Number, // New Taiwan Dollar
  'TZS': Number, // Tanzanian Shilling
  'UAH': Number, // Hryvnia
  'UGX': Number, // Uganda Shilling
  'USD': Number, // US Dollar
  'USN': Number, // [object Object]
  'UYI': Number, // [object Object]
  'UYU': Number, // Peso Uruguayo
  'UZS': Number, // Uzbekistan Sum
  'VEF': Number, // Bolivar
  'VND': Number, // Dong
  'VUV': Number, // Vatu
  'WST': Number, // Tala
  'XAF': Number, // CFA Franc BEAC
  'XAG': Number, // Silver
  'XAU': Number, // Gold
  'XBA': Number, // Bond Markets Unit European Composite Unit (EURCO)
  'XBB': Number, // Bond Markets Unit European Monetary Unit (E.M.U.-6)
  'XBC': Number, // Bond Markets Unit European Unit of Account 9 (E.U.A.-9)
  'XBD': Number, // Bond Markets Unit European Unit of Account 17 (E.U.A.-17)
  'XCD': Number, // East Caribbean Dollar
  'XDR': Number, // SDR (Special Drawing Right)
  'XOF': Number, // CFA Franc BCEAO
  'XPD': Number, // Palladium
  'XPF': Number, // CFP Franc
  'XPT': Number, // Platinum
  'XSU': Number, // Sucre
  'XTS': Number, // Codes specifically reserved for testing purposes
  'XUA': Number, // ADB Unit of Account
  'XXX': Number, // The codes assigned for transactions where no currency is involved
  'YER': Number, // Yemeni Rial
  'ZAR': Number, // Rand
  'ZMW': Number, // Zambian Kwacha
}, {
  _id: false
});

module.exports = exRatesSchema;

import { ICryptoById, ICryptoDescription } from "./CryptoById";
export interface ICrypto {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
    Internal: string;
    ImageUrl: string;
    Url: string;
    Algorithm: string;
    ProofType: string;
    NetHashesPerSecond: number;
    BlockNumber: number;
    BlockTime: number;
    BlockReward: number;
    AssetLaunchDate: string;
    MaxSupply: number;
    Type: number;
    DocumentType: string;
    Rating: {
      Rating: string;
    };
  };
  DISPLAY: {
    USD: {
      TYPE: string;
      MARKET: string;
      FROMSYMBOL: string;
      TOSYMBOL: string;
      FLAGS: string;
      PRICE: number;
      LASTUPDATE: number;
      MEDIAN: number;
      LASTVOLUME: number;
      LASTVOLUMETO: number;
      LASTTRADEID: string;
      VOLUMEDAY: number;
      VOLUMEDAYTO: number;
      VOLUME24HOUR: number;
      VOLUME24HOURTO: number;
      OPENDAY: number;
      HIGHDAY: number;
      LOWDAY: number;
      OPEN24HOUR: number;
      HIGH24HOUR: number;
      LOW24HOUR: number;
      LASTMARKET: string;
      VOLUMEHOUR: number;
      VOLUMEHOURTO: number;
      OPENHOUR: number;
      HIGHHOUR: number;
      LOWHOUR: number;
      TOPTIERVOLUME24HOUR: number;
      TOPTIERVOLUME24HOURTO: number;
      CHANGE24HOUR: number;
      CHANGEPCT24HOUR: number;
      CHANGEDAY: number;
      CHANGEPCTDAY: number;
      CHANGEHOUR: number;
      CHANGEPCTHOUR: number;
      CONVERSIONTYPE: string;
      CONVERSIONSYMBOL: string;
      SUPPLY: number;
      MKTCAP: number;
      MKTCAPPENALTY: number;
      CIRCULATINGSUPPLY: number;
      CIRCULATINGSUPPLYMKTCAP: number;
      TOTALVOLUME24H: number;
      TOTALVOLUME24HTO: number;
      TOTALTOPTIERVOLUME24H: number;
      TOTALTOPTIERVOLUME24HTO: number;
      IMAGEURL: string;
    };
  };
  RAW: {
    USD: {
      TYPE: string;
      MARKET: string;
      FROMSYMBOL: string;
      TOSYMBOL: string;
      FLAGS: string;
      PRICE: number;
      LASTUPDATE: number;
      MEDIAN: number;
      LASTVOLUME: number;
      LASTVOLUMETO: number;
      LASTTRADEID: string;
      VOLUMEDAY: number;
      VOLUMEDAYTO: number;
      VOLUME24HOUR: number;
      VOLUME24HOURTO: number;
      OPENDAY: number;
      HIGHDAY: number;
      LOWDAY: number;
      OPEN24HOUR: number;
      HIGH24HOUR: number;
      LOW24HOUR: number;
      LASTMARKET: string;
      VOLUMEHOUR: number;
      VOLUMEHOURTO: number;
      OPENHOUR: number;
      HIGHHOUR: number;
      LOWHOUR: number;
      TOPTIERVOLUME24HOUR: number;
      TOPTIERVOLUME24HOURTO: number;
      CHANGE24HOUR: number;
      CHANGEPCT24HOUR: number;
      CHANGEDAY: number;
      CHANGEPCTDAY: number;
      CHANGEHOUR: number;
      CHANGEPCTHOUR: number;
      CONVERSIONTYPE: string;
      CONVERSIONSYMBOL: string;
      SUPPLY: number;
      MKTCAP: number;
      MKTCAPPENALTY: number;
      CIRCULATINGSUPPLY: number;
      CIRCULATINGSUPPLYMKTCAP: number;
      TOTALVOLUME24H: number;
      TOTALVOLUME24HTO: number;
      TOTALTOPTIERVOLUME24H: number;
      TOTALTOPTIERVOLUME24HTO: number;
      IMAGEURL: string;
    };
  };
}
export interface ICoin {
  name: string;
  symbol: string;
  description: string;
  logo: string;
}

export type CryptoState = {
  crypto: ICrypto[] | null;
  topCrypto: ICrypto[] | null;
  cryptoById: ICryptoById | null;
  description: ICryptoDescription | null;
  isLoading: boolean;
  error: string | null;
};
export type RootState = {
  crypto: CryptoState;
};

export enum SelectedPage {
  Home = "home",
  Market = "market",
  ChooseUs = "chooseus",
  Join = "join",
}

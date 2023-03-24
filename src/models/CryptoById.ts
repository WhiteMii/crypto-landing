export interface ICryptoById {
  RAW: {
    [symbol: string]: {
      [currency: string]: {
        TYPE: string;
        MARKET: string;
        FROMSYMBOL: string;
        TOSYMBOL: string;
        FLAGS: string;
        PRICE: number;
        LASTUPDATE: number;
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
        CHANGE24HOUR: number;
        CHANGEPCT24HOUR: number;
        CHANGEDAY: number;
        CHANGEPCTDAY: number;
        SUPPLY: number;
        MKTCAP: number;
        TOTALVOLUME24H: number;
        TOTALVOLUME24HTO: number;
      };
    };
  };
  DISPLAY: {
    [symbol: string]: {
      [currency: string]: {
        FROMSYMBOL: string;
        TOSYMBOL: string;
        MARKET: string;
        PRICE: string;
        LASTUPDATE: string;
        LASTVOLUME: string;
        LASTVOLUMETO: string;
        LASTTRADEID: string;
        VOLUMEDAY: string;
        VOLUMEDAYTO: string;
        VOLUME24HOUR: string;
        VOLUME24HOURTO: string;
        OPENDAY: string;
        HIGHDAY: string;
        LOWDAY: string;
        OPEN24HOUR: string;
        HIGH24HOUR: string;
        LOW24HOUR: string;
        LASTMARKET: string;
        CHANGE24HOUR: string;
        CHANGEPCT24HOUR: string;
        CHANGEDAY: string;
        CHANGEPCTDAY: string;
        SUPPLY: string;
        MKTCAP: string;
        TOTALVOLUME24H: string;
        TOTALVOLUME24HTO: string;
      };
    };
  };
}
export interface ICryptoDescription {
  [symbol: string]: {
    Id: string;
    Url: string;
    ImageUrl: string;
    ContentCreatedOn: number;
    Description: string;
    Name: string;
    Symbol: string;
    CoinName: string;
    FullName: string;
    Algorithm: string;
    ProofType: string;
    SortOrder: string;
    Sponsored: boolean;
    Taxonomy: {
      Access: string;
      FCA: string;
    };
    Rating: {
      Weiss: {
        Rating: string;
      };
    };
  };
}

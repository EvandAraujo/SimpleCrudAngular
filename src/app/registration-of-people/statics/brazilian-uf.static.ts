export class BrazilianUfStatic {
  id: string;
  name: string;
  cityName: string;
  uf: string;
  ufCode: number;
  country: string;
  region: string;
  latitude: string;
  longitude: string;

  constructor(id: string, ufCode: number, name: string, cityName: string, uf: string, country: string, region: string, latitude: string, longitude: string) {
    this.id = id;
    this.name = name;
    this.cityName = cityName;
    this.uf = uf;
    this.ufCode = ufCode;
    this.country = country;
    this.region = region;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  //Norte
  public static Acre = new BrazilianUfStatic("9d9e728f-02bd-4260-95a5-8df655d434d0", 12, "Acre", "Rio Branco", "AC", "BR", "Norte", "-9.5829", "-6.74836");
  public static Amazonas = new BrazilianUfStatic("085f7465-387a-42d5-a4b5-82e5be81ca7c", 13, "Amazonas", "Manaus", "AM", "BR", "Norte", "-3.0607", "-6.00130");
  public static Amapa = new BrazilianUfStatic("790e3c57-596d-46db-98fc-0eb1fbd16516", 16, "Amapá", "Macapá", "AP", "BR", "Norte", "-0.1017", "-51.0359");
  public static Para = new BrazilianUfStatic("1207c116-bf8c-41b2-9cfa-b28c42371ff3", 15, "Pará", "Belém", "PA", "BR", "Norte", "-1.2721", "-4.83016");
  public static Rondonia = new BrazilianUfStatic("156c834a-7300-4c7b-8a45-a87df774f900", 11, "Rondônia", "Porto Velho", "RO", "BR", "Norte", "-8.4543", "-6.35414");
  public static Roraima = new BrazilianUfStatic("5192f341-c245-43ed-9567-1ef291d53485", 14, "Roraima", "Boa Vista", "RR", "BR", "Norte", "-2.4911", "-6.04024");
  public static Tocantins = new BrazilianUfStatic("e0ff5f07-eec9-4161-9657-5c38dd230dd3", 17, "Tocantins", "Palmas", "TO", "BR", "Norte", "-10.1246", "-48.2137");

  //Nordeste
  public static Alagoas = new BrazilianUfStatic("cd8c355e-992b-4d84-bbd9-87e388294772", 27, "Alagoas", "Maceió", "AL", "BR", "Nordeste", "-9.3957", "-35.4407");
  public static Bahia = new BrazilianUfStatic("217c3406-b20a-4224-a243-94549accfbe3", 29, "Bahia", "Salvador", "BA", "BR", "Nordeste", "-12.5816", "-38.3039");
  public static Ceara = new BrazilianUfStatic("4d46948c-c8d6-408b-847a-c98957a3df9f", 23, "Ceará", "Fortaleza", "CE", "BR", "Nordeste", "-3.4302", "-38.3235");
  public static Maranhao = new BrazilianUfStatic("425b7437-cf6b-44e3-b708-c0fc869998d6", 21, "Maranhão", "São Luis", "MA", "BR", "Nordeste", "-2.3147", "-44.1810");
  public static Piaui = new BrazilianUfStatic("02b4f971-6c52-4d7c-a438-9914c3c6a89b", 22, "Piauí", "Teresina", "PI", "BR", "Nordeste", "-5.0521", "-42.4807");
  public static Pernambuco = new BrazilianUfStatic("2a3c6bf7-4044-445f-8a24-8b938d66c437", 26, "Pernambuco", "Recife", "PE", "BR", "Nordeste", "-8.0314", "-34.5252");
  public static Paraiba = new BrazilianUfStatic("276ad231-4150-4bca-9c6d-ff1181746e85", 25, "Paraíba", "João Pessoa", "PB", "BR", "Nordeste", "-7.0654", "-34.5147");
  public static RioGrandeDoNorte = new BrazilianUfStatic("6657eaf7-78f1-4f74-85e1-0944594adb22", 24, "Rio Grande do Norte", "Natal", "RN", "BR", "Nordeste", "-5.4742", "-35.1234");
  public static Sergipe = new BrazilianUfStatic("e6dc1a76-56ff-4462-a5d5-6b8c5eac2d5c", 28, "Sergipe", "Aracaju", "SE", "BR", "Nordeste", "-10.5440", "-37.0418");

  //Sul
  public static Parana = new BrazilianUfStatic("5cdc9548-9638-4b10-ab85-4e0058920110", 41, "Paraná", "Curitiba", "PR", "BR", "Sul", "-25.33356", "-50.10398");
  public static RioGrandeDoSul = new BrazilianUfStatic("6c92b0ef-9567-4d54-b0cc-02b7e041d53c", 43, "Rio Grande do Sul", "Porto Alegre", "RS", "BR", "Sul", "-30.52137", "-52.66330");
  public static SantaCatarina = new BrazilianUfStatic("a073ffd3-36f0-410b-96de-c26e838e5249", 42, "Santa Catarina", "Florianópolis", "SC", "BR", "Sul", "-27.87302", "-51.13503");

  //Sudeste
  public static EspiritoSanto = new BrazilianUfStatic("e8eeba35-7581-4b54-9ee6-6fabd7a5dfb1", 32, "Espírito Santo", "Vitória", "ES", "BR", "Sudeste", "-19.20892", "-40.43558");
  public static MinasGerais = new BrazilianUfStatic("b53b6ae9-87d8-4d9f-94fc-a7e01ca1b6ae", 31, "Minas Gerais", "Belo Horizonte", "MG", "BR", "Sudeste", "-19.5515", "-43.5616");
  public static RioDeJaneiro = new BrazilianUfStatic("c69ed4b3-54c0-456c-a2e0-56b1300120c4", 33, "Rio de Janeiro", "Rio de Janeiro", "RJ", "BR", "Sudeste", "-22.74834", "-44.16505");
  public static SaoPaulo = new BrazilianUfStatic("52a9afdb-ee0f-4008-875a-45bdb99ca7b0", 35, "São Paulo", "São Paulo", "SP", "BR", "Sudeste", "-23.50322", "-48.86917");

  //Centro-Oeste
  public static Goias = new BrazilianUfStatic("0679caf3-a9f4-4ab5-9872-a74aa69ab97d", 52, "Goiás", "Goiâna", "GO", "BR", "Centro-Oeste", "-16.16580", "-48.78506");
  public static MatoGrosso = new BrazilianUfStatic("a7b033f0-6376-4c05-8438-899e87b2b71e", 51, "Mato Grosso", "Cuiabá", "MT", "BR", "Centro-Oeste", "-14.07897", "-53.15110");
  public static MatoGrossoDoSul = new BrazilianUfStatic("cd0c5d23-d0cd-4663-a829-79e98a0aa5e0", 50, "Mato Grosso do Sul", "Campo Grande", "MS", "BR", "Centro-Oeste", "-20.2634", "-53.36335");
  public static DistritoFederal = new BrazilianUfStatic("e40c2b75-93ef-47e4-9b9d-ff302d2f04d6", 53, "Distrito Federal", "Brasília", "DF", "BR", "Centro-Oeste", "-15.4647", "-48.0774");

  public static GetAll(): Array<BrazilianUfStatic> {
    let array: Array<BrazilianUfStatic> = new Array<BrazilianUfStatic>();
    array.push(this.Rondonia);
    array.push(this.Acre);
    array.push(this.Amazonas);
    array.push(this.Roraima);
    array.push(this.Para);
    array.push(this.Amapa);
    array.push(this.Tocantins);
    array.push(this.Maranhao);
    array.push(this.Piaui);
    array.push(this.Ceara);
    array.push(this.RioGrandeDoNorte);
    array.push(this.Paraiba);
    array.push(this.Pernambuco);
    array.push(this.Alagoas);
    array.push(this.Sergipe);
    array.push(this.Bahia);
    array.push(this.MinasGerais);
    array.push(this.EspiritoSanto);
    array.push(this.RioDeJaneiro);
    array.push(this.SaoPaulo);
    array.push(this.Parana);
    array.push(this.SantaCatarina);
    array.push(this.RioGrandeDoSul);
    array.push(this.MatoGrossoDoSul);
    array.push(this.MatoGrosso);
    array.push(this.Goias);
    array.push(this.DistritoFederal);
    return array;
  }

  public static GetById(id: string): BrazilianUfStatic {
    return this.GetAll().find(x => x.id.toLocaleLowerCase() === id.toLocaleLowerCase())!;
  }
}

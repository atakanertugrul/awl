import { Word } from './types';

const rawData = `Liste;İngilizce Kelime;Türkçe Anlamı
Liste 1;achieve;başarmak
Liste 1;administration;yönetim
Liste 1;affect;etkilemek
Liste 1;analysis;analiz
Liste 1;approach;yaklaşım
Liste 1;appropriate;uygun
Liste 1;area;alan
Liste 1;aspects;yönler
Liste 1;assistance;yardım
Liste 1;assume;varsaymak
Liste 1;authority;yetki
Liste 1;available;mevcut
Liste 1;benefit;fayda
Liste 1;category;kategori
Liste 1;community;topluluk
Liste 1;complex;karmaşık
Liste 1;concerning;ilgili
Liste 1;conclusion;sonuç
Liste 1;conduct;yürütmek
Liste 1;consequence;sonuç
Liste 1;consistent;tutarlı
Liste 1;constitutional;anayasal
Liste 1;consumer;tüketici
Liste 1;context;bağlam
Liste 1;create;yaratmak
Liste 1;culture;kültür
Liste 1;data;veri
Liste 1;definition;tanım
Liste 1;destructive;yıkıcı
Liste 1;discovery;keşif
Liste 1;distinction;ayrım
Liste 1;economic;ekonomik
Liste 1;element;öge
Liste 1;environment;çevre
Liste 1;error;hata
Liste 1;equation;denklem
Liste 1;establish;kurmak
Liste 1;estimate;tahmin etmek
Liste 1;evaluation;değerlendirme
Liste 1;evidence;kanıt
Liste 1;factors;faktörler
Liste 1;feature;özellik
Liste 1;final;son
Liste 1;financial;mali
Liste 1;focus;odaklanmak
Liste 1;function;işlev
Liste 1;global;küresel
Liste 1;identify;belirlemek
Liste 1;impact;etki
Liste 1;income;gelir
Liste 1;indicate;belirtmek
Liste 1;individual;bireysel
Liste 1;injury;yaralanma
Liste 1;investment;yatırım
Liste 1;involve;içermek
Liste 1;issue;mesele
Liste 1;item;madde
Liste 1;legal;yasal
Liste 1;maintenance;bakım
Liste 1;major;ana
Liste 1;media;medya
Liste 1;method;yöntem
Liste 1;modern;modern
Liste 1;normal;normal
Liste 1;obtain;elde etmek
Liste 1;occur;meydana gelmek
Liste 1;participation;katılım
Liste 1;percent;yüzde
Liste 1;period;dönem
Liste 1;policy;politika
Liste 1;positive;olumlu
Liste 1;potential;potansiyel
Liste 1;previous;önceki
Liste 1;primary;birincil
Liste 1;process;süreç
Liste 1;purchase;satın alma
Liste 1;range;aralık
Liste 1;recent;yakın zamanda
Liste 1;region;bölge
Liste 1;regulations;düzenlemeler
Liste 1;relevant;ilgili
Liste 1;require;gerektirmek
Liste 1;research;araştırma
Liste 1;resident;ikamet eden
Liste 1;resources;kaynaklar
Liste 1;response;yanıt
Liste 1;restrict;kısıtlamak
Liste 1;sector;sektör
Liste 1;security;güvenlik
Liste 1;significant;önemli
Liste 1;similar;benzer
Liste 1;solution;çözüm
Liste 1;source;kaynak
Liste 1;specific;özel
Liste 1;strategy;strateji
Liste 1;structure;yapı
Liste 1;theory;teori
Liste 1;threat;tehdit
Liste 1;traditional;geleneksel
Liste 1;transport;ulaşım
Liste 2;access;erişim
Liste 2;activity;aktivite
Liste 2;alter;değiştirmek
Liste 2;alternative;alternatif
Liste 2;amendment;değişiklik
Liste 2;annual;yıllık
Liste 2;apparent;açık
Liste 2;application;uygulama
Liste 2;approximate;yaklaşık
Liste 2;artificial;yapay
Liste 2;attitude;tutum
Liste 2;aware;farkında
Liste 2;capacity;kapasite
Liste 2;challenge;meydan okuma
Liste 2;circumstance;durum
Liste 2;comment;yorum
Liste 2;communication;iletişim
Liste 2;concentration;konsantrasyon
Liste 2;conflict;çatışma
Liste 2;considerable;kayda değer
Liste 2;constant;sabit
Liste 2;contact;temas
Liste 2;contribution;katkı
Liste 2;core;çekirdek
Liste 2;correspond;karşılık gelmek
Liste 2;criteria;kriterler
Liste 2;cycle;döngü
Liste 2;debate;tartışma
Liste 2;decline;düşüş
Liste 2;deduction;kesinti
Liste 2;demonstrate;göstermek
Liste 2;despite;rağmen
Liste 2;dimension;boyut
Liste 2;domestic;yerli
Liste 2;dominant;baskın
Liste 2;emerge;ortaya çıkmak
Liste 2;emphasis;vurgu
Liste 2;enable;olanak sağlamak
Liste 2;energy;enerji
Liste 2;enforcement;uygulama
Liste 2;ensure;sağlamak
Liste 2;equivalent;eşdeğer
Liste 2;evolution;evrim
Liste 2;exclude;hariç tutmak
Liste 2;exposure;maruz kalma
Liste 2;external;dış
Liste 2;facilitate;kolaylaştırmak
Liste 2;fundamental;temel
Liste 2;funds;fonlar
Liste 2;generation;nesil
Liste 2;hence;dolayısıyla
Liste 2;hypothesis;hipotez
Liste 2;illustrate;resimlemek
Liste 2;image;görüntü
Liste 2;immigration;göçmenlik
Liste 2;implement;uygulamak
Liste 2;initial;ilk
Liste 2;integration;entegrasyon
Liste 2;layer;katman
Liste 2;legislation;mevzuat
Liste 2;location;konum
Liste 2;logic;mantık
Liste 2;marginal;marjinal
Liste 2;maximum;maksimum
Liste 2;mechanism;mekanizma
Liste 2;medical;tıbbi
Liste 2;mental;zihinsel
Liste 2;modification;değişiklik
Liste 2;negative;olumsuz
Liste 2;network;ağ
Liste 2;occupation;meslek
Liste 2;option;seçenek
Liste 2;orientation;yönelim
Liste 2;outcome;sonuç
Liste 2;overall;genel
Liste 2;parallel;paralel
Liste 2;perspective;bakış açısı
Liste 2;philosophy;felsefe
Liste 2;precise;kesin
Liste 2;predict;tahmin etmek
Liste 2;project;proje
Liste 2;promote;teşvik etmek
Liste 2;proportion;oran
Liste 2;psychology;psikoloji
Liste 2;reaction;reaksiyon
Liste 2;remove;kaldırmak
Liste 2;resolution;çözüm
Liste 2;specify;belirlemek
Liste 2;stability;istikrar
Liste 2;subsequent;sonraki
Liste 2;sufficient;yeterli
Liste 2;summary;özet
Liste 2;supply;tedarik
Liste 2;task;görev
Liste 2;technique;teknik
Liste 2;technology;teknoloji
Liste 2;transition;geçiş
Liste 2;trend;eğilim
Liste 2;version;versiyon
Liste 2;volume;hacim
Liste 3;abstract;soyut
Liste 3;accurate;doğru
Liste 3;acknowledge;kabul etmek
Liste 3;adaptation;uyarlama
Liste 3;adequate;yeterli
Liste 3;adjust;ayarlamak
Liste 3;adult;yetişkin
Liste 3;advocate;savunmak
Liste 3;aid;yardım
Liste 3;attribute;özellik
Liste 3;author;yazar
Liste 3;brief;kısa
Liste 3;capable;yetenekli
Liste 3;civil;sivil
Liste 3;classical;klasik
Liste 3;comprehensive;kapsamlı
Liste 3;contrary;aksine
Liste 3;coordination;koordinasyon
Liste 3;couple;çift
Liste 3;decades;on yıllar
Liste 3;definite;kesin
Liste 3;deny;inkâr etmek
Liste 3;discrimination;ayrımcılık
Liste 3;disposal;elden çıkarma
Liste 3;diversity;çeşitlilik
Liste 3;domain;alan
Liste 3;dynamic;dinamik
Liste 3;eliminate;elemek
Liste 3;equipment;ekipman
Liste 3;estate;emlak
Liste 3;exceed;aşmak
Liste 3;expansion;genişleme
Liste 3;expert;uzman
Liste 3;fees;ücretler
Liste 3;flexibility;esneklik
Liste 3;foundation;temel
Liste 3;gender;cinsiyet
Liste 3;global;küresel
Liste 3;grade;not
Liste 3;guarantee;garanti
Liste 3;identical;özdeş
Liste 3;ignorance;cehalet
Liste 3;imply;ima etmek
Liste 3;incentive;teşvik
Liste 3;incorporated;anonim şirket
Liste 3;index;indeks
Liste 3;infrastructure;altyapı
Liste 3;inhibition;engelleme
Liste 3;innovation;yenilik
Liste 3;instance;örnek
Liste 3;instruction;talimat
Liste 3;intelligence;zeka
Liste 3;interact;etkileşim kurmak
Liste 3;interval;aralık
Liste 3;investigation;soruşturma
Liste 3;isolated;izole
Liste 3;justification;gerekçe
Liste 3;lecture;ders
Liste 3;liberal;liberal
Liste 3;migration;göç
Liste 3;minimum;minimum
Liste 3;monitoring;izleme
Liste 3;motivation;motivasyon
Liste 3;neutral;nötr
Liste 3;obvious;bariz
Liste 3;overseas;denizaşırı
Liste 3;parameter;parametre
Liste 3;phenomenon;olgu
Liste 3;prohibit;yasaklamak
Liste 3;publish;yayımlamak
Liste 3;pursue;takip etmek
Liste 3;rational;rasyonel
Liste 3;recovery;iyileşme
Liste 3;reject;reddetmek
Liste 3;release;serbest bırakmak
Liste 3;reveal;ortaya çıkarmak
Liste 3;role;rol
Liste 3;satisfy;tatmin etmek
Liste 3;scope;kapsam
Liste 3;sequence;sıra
Liste 3;simulation;simülasyon
Liste 3;solely;yalnızca
Liste 3;somewhat;biraz
Liste 3;status;statü
Liste 3;stress;stres
Liste 3;style;tarz
Liste 3;substitution;ikame
Liste 3;successive;ardışık
Liste 3;survey;anket
Liste 3;survive;hayatta kalmak
Liste 3;sustainable;sürdürülebilir
Liste 3;symbolic;sembolik
Liste 3;topic;konu
Liste 3;trace;iz
Liste 3;transformation;dönüşüm
Liste 3;ultimate;nihai
Liste 3;underline;altını çizmek
Liste 3;unique;eşsiz
Liste 3;utility;fayda
Liste 3;visible;görünür
Liste 4;accommodation;konaklama
Liste 4;accompany;eşlik etmek
Liste 4;advance;ilerleme
Liste 4;analogous;benzer
Liste 4;anticipate;beklemek
Liste 4;appendix;ek
Liste 4;appreciate;takdir etmek
Liste 4;arbitrary;keyfi
Liste 4;assure;temin etmek
Liste 4;automatically;otomatik olarak
Liste 4;behalf;adına
Liste 4;bias;önyargı
Liste 4;cease;durmak
Liste 4;chart;çizelge
Liste 4;clarity;açıklık
Liste 4;coherence;tutarlılık
Liste 4;coincide;denk gelmek
Liste 4;commodity;emtia
Liste 4;confirm;onaylamak
Liste 4;contemporary;çağdaş
Liste 4;contradict;çelişmek
Liste 4;controversy;tartışma
Liste 4;conversely;aksine
Liste 4;cooperate;işbirliği yapmak
Liste 4;crucial;çok önemli
Liste 4;currency;para birimi
Liste 4;denote;belirtmek
Liste 4;detect;tespit etmek
Liste 4;deviation;sapma
Liste 4;device;cihaz
Liste 4;devote;adamak
Liste 4;differentiation;farklılaştırma
Liste 4;diminish;azaltmak
Liste 4;displacement;yer değiştirme
Liste 4;display;sergilemek
Liste 4;distorted;çarpıtılmış
Liste 4;dramatic;çarpıcı
Liste 4;duration;süre
Liste 4;ethical;etik
Liste 4;eventually;sonunda
Liste 4;exhibit;sergilemek
Liste 4;explicit;açık
Liste 4;exploitation;sömürü
Liste 4;extract;çıkarım yapmak
Liste 4;federal;federal
Liste 4;fluctuations;dalgalanmalar
Liste 4;format;biçim
Liste 4;founded;kurulu
Liste 4;guidelines;yönergeler
Liste 4;highlighted;vurgulanmış
Liste 4;implicit;üstü kapalı
Liste 4;incompatible;uyumsuz
Liste 4;induce;neden olmak
Liste 4;inevitably;kaçınılmaz olarak
Liste 4;inherent;doğasında olan
Liste 4;intensity;yoğunluk
Liste 4;intermediate;orta düzey
Liste 4;internal;iç
Liste 4;manual;el kitabı
Liste 4;mature;olgunlaşmak
Liste 4;medium;ortam
Liste 4;military;askeri
Liste 4;mutual;karşılıklı
Liste 4;norms;normlar
Liste 4;notion;kavram
Liste 4;nuclear;nükleer
Liste 4;objective;amaç
Liste 4;paragraph;paragraf
Liste 4;passive;pasif
Liste 4;perceive;algılamak
Liste 4;portion;kısım
Liste 4;precede;önce gelmek
Liste 4;predominantly;ağırlıklı olarak
Liste 4;priority;öncelik
Liste 4;prospect;ihtimal
Liste 4;qualitative;niteliksel
Liste 4;radical;radikal
Liste 4;random;rastgele
Liste 4;reinforce;güçlendirmek
Liste 4;relax;rahatlamak
Liste 4;revision;revizyon
Liste 4;revolution;devrim
Liste 4;scenario;senaryo
Liste 4;schedule;program
Liste 4;sphere;küre
Liste 4;suspended;askıya alınmış
Liste 4;target;hedef
Liste 4;team;takım
Liste 4;temporary;geçici
Liste 4;tension;gerginlik
Liste 4;theme;tema
Liste 4;thereby;böylece
Liste 4;uniform;tek tip
Liste 4;validity;geçerlilik
Liste 4;vehicle;araç
Liste 4;via;aracılığıyla
Liste 4;violation;ihlal
Liste 4;virtual;sanal
Liste 4;vision;vizyon
Liste 4;widespread;yaygın
Liste 5;abandon;terk etmek
Liste 5;abate;hafifletmek
Liste 5;abrupt;ani
Liste 5;accumulation;birikim
Liste 5;acquisition;edinme
Liste 5;adjacent;bitişik
Liste 5;aggregate;toplamak
Liste 5;albeit;olmasına rağmen
Liste 5;ambiguous;belirsiz
Liste 5;ancestor;ata
Liste 5;assembly;montaj
Liste 5;assessment;değerlendirme
Liste 5;assign;atamak
Liste 5;attain;ulaşmak
Liste 5;avert;önlemek
Liste 5;coal;kömür
Liste 5;collapse;çökmek
Liste 5;colleagues;meslektaşlar
Liste 5;combat;savaşmak
Liste 5;commit;taahhüt etmek
Liste 5;compile;derlemek
Liste 5;complement;tamamlamak
Liste 5;comprise;oluşmak
Liste 5;conceive;tasarlamak
Liste 5;concurrent;eş zamanlı
Liste 5;confined;kısıtlı
Liste 5;conform;uymak
Liste 5;confuse;karıştırmak
Liste 5;consciousness;bilinç
Liste 5;convinced;ikna olmuş
Liste 5;creditable;güvenilir
Liste 5;deceive;aldatmak
Liste 5;depression;depresyon
Liste 5;derive;türetmek
Liste 5;distribution;dağıtım
Liste 5;divergent;farklı
Liste 5;doubt;şüphe
Liste 5;drastic;şiddetli
Liste 5;encounter;karşılaşmak
Liste 5;enhance;geliştirmek
Liste 5;enormous;muazzam
Liste 5;entirely;tamamen
Liste 5;entrepreneur;girişimci
Liste 5;erosion;erozyon
Liste 5;forbearance;sabır
Liste 5;forthcoming;yakında çıkacak
Liste 5;frustration;hüsran
Liste 5;goal;hedef
Liste 5;homogenous;homojen
Liste 5;inclination;eğilim
Liste 5;indulge;hoşgörmek
Liste 5;infer;çıkarım yapmak
Liste 5;initiative;girişim
Liste 5;insight;içgörü
Liste 5;inspection;denetim
Liste 5;integral;bütünleyici
Liste 5;intervention;müdahale
Liste 5;intrinsic;içsel
Liste 5;invoke;başvurmak
Liste 5;justify;haklı çıkarmak
Liste 5;likewise;aynı şekilde
Liste 5;link;bağlantı
Liste 5;manage;yönetmek
Liste 5;manipulation;manipülasyon
Liste 5;merge;birleşmek
Liste 5;nonetheless;yine de
Liste 5;notwithstanding;-e rağmen
Liste 5;odd;tuhaf
Liste 5;ongoing;devam eden
Liste 5;overlap;örtüşmek
Liste 5;persistent;ısrarcı
Liste 5;pose;poz vermek
Liste 5;possess;sahip olmak
Liste 5;preliminary;ön
Liste 5;presumption;varsayım
Liste 5;ratio;oran
Liste 5;refine;iyileştirmek
Liste 5;relate;ilişkilendirmek
Liste 5;reluctant;isteksiz
Liste 5;restore;restore etmek
Liste 5;restraint;kısıtlama
Liste 5;rigid;katı
Liste 5;route;rota
Liste 5;sacrifice;fedakarlık
Liste 5;scale;ölçek
Liste 5;so-called;sözde
Liste 5;straightforward;anlaşılır
Liste 5;subordinate;ast
Liste 5;substantiate;kanıtlamak
Liste 5;supplementary;tamamlayıcı
Liste 5;sympathy;sempati
Liste 5;termination;sonlandırma
Liste 5;transmission;iletim
Liste 5;undergo;geçirmek
Liste 5;unify;birleştirmek
Liste 5;vital;hayati
Liste 5;voluntary;gönüllü
Liste 5;whereby;bu sayede`;

export const getWords = (): Word[] => {
  const lines = rawData.split('\n');
  const words: Word[] = [];

  // Start from 1 to skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const parts = line.split(';');
    if (parts.length === 3) {
      words.push({
        id: `word-${i}`,
        list: parts[0],
        english: parts[1],
        turkish: parts[2]
      });
    }
  }
  return words;
};

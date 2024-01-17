
// NB1: This is pyzyToneTableMtdNewEditOff.js (use as common JS file) by 自语区 Self Talk Zone
// NB2: The window.addEventListener("load", function() {chkOrCreateControl4ToneTable();}); code is marked as ---EditOff---, => it is de-activated.
// Ref: pyzyToneTableMtdNewUnTrim.js
// License: Creative Commons Attribution-ShareAlike 4.0 International License (署名-相同方式共享 4.0 国际)
// Last updated on: 17/Jan/2024

// ============================================================== //

// Group 1 of 5 (Tone Table py zy data - default built-in data)

// ============================================================== //


var pyNumAoa = new Array(27);  // py = pin yin   <------ Change these var from Array (Arr) to Array of array (Aoa), but keep their names.
var pyToneAoa = new Array(27); // zy = zhu yin           When file onload, it will activate function convertArrToAoa().
var zyToneAoa = new Array(27);


// NB: This tone table method program need window.addEventListener("load", function() {convertArrToAoa();}); to convert the following Arr into Aoa before use.

/* 15-16/Jan/2024: (Take pinyin "o" for example)
//
Before and After function convertArrToAoa() {...}
//
pyNumAoa[15] = "o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5";
Before: pyNumAoa[15] is an Array containing a string element, "o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5". => It is an Array, Arr.
//
pyNumAoa[15] = ["o","o1","o2","o3","o4","o5","ou","ou1","ou2","ou3","ou4","ou5"];
After: pyNumAoa[15] is an Array containing an Array element, ["o","o1","o2","o3","o4","o5","ou","ou1","ou2","ou3","ou4","ou5"]. => It is an Array of array, Aoa.
//
*/


// 0 --- not use
pyNumAoa[0] = ""; // 0 --- not use
// a
pyNumAoa[1] = "a a1 a2 a3 a4 a5 ai ai1 ai2 ai3 ai4 ai5 an an1 an2 an3 an4 an5 ang ang1 ang2 ang3 ang4 ang5 ao ao1 ao2 ao3 ao4 ao5";
// b
pyNumAoa[2] = "ba ba1 ba2 ba3 ba4 ba5 bai bai1 bai2 bai3 bai4 bai5 ban ban1 ban2 ban3 ban4 ban5 bang bang1 bang2 bang3 bang4 bang5 bao bao1 bao2 bao3 bao4 bao5 bei bei1 bei2 bei3 bei4 bei5 ben ben1 ben2 ben3 ben4 ben5 beng beng1 beng2 beng3 beng4 beng5 bi bi1 bi2 bi3 bi4 bi5 bian bian1 bian2 bian3 bian4 bian5 biao biao1 biao2 biao3 biao4 biao5 bie bie1 bie2 bie3 bie4 bie5 bin bin1 bin2 bin3 bin4 bin5 bing bing1 bing2 bing3 bing4 bing5 bo bo1 bo2 bo3 bo4 bo5 bu bu1 bu2 bu3 bu4 bu5";
// c
pyNumAoa[3] = "ca ca1 ca2 ca3 ca4 ca5 cai cai1 cai2 cai3 cai4 cai5 can can1 can2 can3 can4 can5 cang cang1 cang2 cang3 cang4 cang5 cao cao1 cao2 cao3 cao4 cao5 ce ce1 ce2 ce3 ce4 ce5 cei cei1 cei2 cei3 cei4 cei5 cen cen1 cen2 cen3 cen4 cen5 ceng ceng1 ceng2 ceng3 ceng4 ceng5 cha cha1 cha2 cha3 cha4 cha5 chai chai1 chai2 chai3 chai4 chai5 chan chan1 chan2 chan3 chan4 chan5 chang chang1 chang2 chang3 chang4 chang5 chao chao1 chao2 chao3 chao4 chao5 che che1 che2 che3 che4 che5 chen chen1 chen2 chen3 chen4 chen5 cheng cheng1 cheng2 cheng3 cheng4 cheng5 chi chi1 chi2 chi3 chi4 chi5 chong chong1 chong2 chong3 chong4 chong5 chou chou1 chou2 chou3 chou4 chou5 chu chu1 chu2 chu3 chu4 chu5 chua chua1 chua2 chua3 chua4 chua5 chuai chuai1 chuai2 chuai3 chuai4 chuai5 chuan chuan1 chuan2 chuan3 chuan4 chuan5 chuang chuang1 chuang2 chuang3 chuang4 chuang5 chui chui1 chui2 chui3 chui4 chui5 chun chun1 chun2 chun3 chun4 chun5 chuo chuo1 chuo2 chuo3 chuo4 chuo5 ci ci1 ci2 ci3 ci4 ci5 cong cong1 cong2 cong3 cong4 cong5 cou cou1 cou2 cou3 cou4 cou5 cu cu1 cu2 cu3 cu4 cu5 cuan cuan1 cuan2 cuan3 cuan4 cuan5 cui cui1 cui2 cui3 cui4 cui5 cun cun1 cun2 cun3 cun4 cun5 cuo cuo1 cuo2 cuo3 cuo4 cuo5";
// d
pyNumAoa[4] = "da da1 da2 da3 da4 da5 dai dai1 dai2 dai3 dai4 dai5 dan dan1 dan2 dan3 dan4 dan5 dang dang1 dang2 dang3 dang4 dang5 dao dao1 dao2 dao3 dao4 dao5 de de1 de2 de3 de4 de5 dei dei1 dei2 dei3 dei4 dei5 den den1 den2 den3 den4 den5 deng deng1 deng2 deng3 deng4 deng5 di di1 di2 di3 di4 di5 dia dia1 dia2 dia3 dia4 dia5 dian dian1 dian2 dian3 dian4 dian5 diao diao1 diao2 diao3 diao4 diao5 die die1 die2 die3 die4 die5 ding ding1 ding2 ding3 ding4 ding5 diu diu1 diu2 diu3 diu4 diu5 dong dong1 dong2 dong3 dong4 dong5 dou dou1 dou2 dou3 dou4 dou5 du du1 du2 du3 du4 du5 duan duan1 duan2 duan3 duan4 duan5 dui dui1 dui2 dui3 dui4 dui5 dun dun1 dun2 dun3 dun4 dun5 duo duo1 duo2 duo3 duo4 duo5";
// e
pyNumAoa[5] = "e e1 e2 e3 e4 e5 ê ê1 ê2 ê3 ê4 ê5 e^ e^1 e^2 e^3 e^4 e^5 ei ei1 ei2 ei3 ei4 ei5 en en1 en2 en3 en4 en5 eng eng1 eng2 eng3 eng4 eng5 er er1 er2 er3 er4 er5";
// f
pyNumAoa[6] = "fa fa1 fa2 fa3 fa4 fa5 fan fan1 fan2 fan3 fan4 fan5 fang fang1 fang2 fang3 fang4 fang5 fei fei1 fei2 fei3 fei4 fei5 fen fen1 fen2 fen3 fen4 fen5 feng feng1 feng2 feng3 feng4 feng5 fiao fiao1 fiao2 fiao3 fiao4 fiao5 fo fo1 fo2 fo3 fo4 fo5 fou fou1 fou2 fou3 fou4 fou5 fu fu1 fu2 fu3 fu4 fu5";
// g
pyNumAoa[7] = "ga ga1 ga2 ga3 ga4 ga5 gai gai1 gai2 gai3 gai4 gai5 gan gan1 gan2 gan3 gan4 gan5 gang gang1 gang2 gang3 gang4 gang5 gao gao1 gao2 gao3 gao4 gao5 ge ge1 ge2 ge3 ge4 ge5 gei gei1 gei2 gei3 gei4 gei5 gen gen1 gen2 gen3 gen4 gen5 geng geng1 geng2 geng3 geng4 geng5 gong gong1 gong2 gong3 gong4 gong5 gou gou1 gou2 gou3 gou4 gou5 gu gu1 gu2 gu3 gu4 gu5 gua gua1 gua2 gua3 gua4 gua5 guai guai1 guai2 guai3 guai4 guai5 guan guan1 guan2 guan3 guan4 guan5 guang guang1 guang2 guang3 guang4 guang5 gui gui1 gui2 gui3 gui4 gui5 gun gun1 gun2 gun3 gun4 gun5 guo guo1 guo2 guo3 guo4 guo5";
// h
pyNumAoa[8] = "ha ha1 ha2 ha3 ha4 ha5 hai hai1 hai2 hai3 hai4 hai5 han han1 han2 han3 han4 han5 hang hang1 hang2 hang3 hang4 hang5 hao hao1 hao2 hao3 hao4 hao5 he he1 he2 he3 he4 he5 hei hei1 hei2 hei3 hei4 hei5 hen hen1 hen2 hen3 hen4 hen5 heng heng1 heng2 heng3 heng4 heng5 hm hm1 hm2 hm3 hm4 hm5 hng hng1 hng2 hng3 hng4 hng5 hong hong1 hong2 hong3 hong4 hong5 hou hou1 hou2 hou3 hou4 hou5 hu hu1 hu2 hu3 hu4 hu5 hua hua1 hua2 hua3 hua4 hua5 huai huai1 huai2 huai3 huai4 huai5 huan huan1 huan2 huan3 huan4 huan5 huang huang1 huang2 huang3 huang4 huang5 hui hui1 hui2 hui3 hui4 hui5 hun hun1 hun2 hun3 hun4 hun5 huo huo1 huo2 huo3 huo4 huo5";
// i --- not use
pyNumAoa[9] = ""; // i --- not use
// j
pyNumAoa[10] = "ji ji1 ji2 ji3 ji4 ji5 jia jia1 jia2 jia3 jia4 jia5 jian jian1 jian2 jian3 jian4 jian5 jiang jiang1 jiang2 jiang3 jiang4 jiang5 jiao jiao1 jiao2 jiao3 jiao4 jiao5 jie jie1 jie2 jie3 jie4 jie5 jin jin1 jin2 jin3 jin4 jin5 jing jing1 jing2 jing3 jing4 jing5 jiong jiong1 jiong2 jiong3 jiong4 jiong5 jiu jiu1 jiu2 jiu3 jiu4 jiu5 ju ju1 ju2 ju3 ju4 ju5 juan juan1 juan2 juan3 juan4 juan5 jue jue1 jue2 jue3 jue4 jue5 jun jun1 jun2 jun3 jun4 jun5";
// k
pyNumAoa[11] = "ka ka1 ka2 ka3 ka4 ka5 kai kai1 kai2 kai3 kai4 kai5 kan kan1 kan2 kan3 kan4 kan5 kang kang1 kang2 kang3 kang4 kang5 kao kao1 kao2 kao3 kao4 kao5 ke ke1 ke2 ke3 ke4 ke5 kei kei1 kei2 kei3 kei4 kei5 ken ken1 ken2 ken3 ken4 ken5 keng keng1 keng2 keng3 keng4 keng5 kong kong1 kong2 kong3 kong4 kong5 kou kou1 kou2 kou3 kou4 kou5 ku ku1 ku2 ku3 ku4 ku5 kua kua1 kua2 kua3 kua4 kua5 kuai kuai1 kuai2 kuai3 kuai4 kuai5 kuan kuan1 kuan2 kuan3 kuan4 kuan5 kuang kuang1 kuang2 kuang3 kuang4 kuang5 kui kui1 kui2 kui3 kui4 kui5 kun kun1 kun2 kun3 kun4 kun5 kuo kuo1 kuo2 kuo3 kuo4 kuo5";
// l
pyNumAoa[12] = "la la1 la2 la3 la4 la5 lai lai1 lai2 lai3 lai4 lai5 lan lan1 lan2 lan3 lan4 lan5 lang lang1 lang2 lang3 lang4 lang5 lao lao1 lao2 lao3 lao4 lao5 le le1 le2 le3 le4 le5 lei lei1 lei2 lei3 lei4 lei5 leng leng1 leng2 leng3 leng4 leng5 li li1 li2 li3 li4 li5 lia lia1 lia2 lia3 lia4 lia5 lian lian1 lian2 lian3 lian4 lian5 liang liang1 liang2 liang3 liang4 liang5 liao liao1 liao2 liao3 liao4 liao5 lie lie1 lie2 lie3 lie4 lie5 lin lin1 lin2 lin3 lin4 lin5 ling ling1 ling2 ling3 ling4 ling5 liu liu1 liu2 liu3 liu4 liu5 lo lo1 lo2 lo3 lo4 lo5 long long1 long2 long3 long4 long5 lou lou1 lou2 lou3 lou4 lou5 lu lu1 lu2 lu3 lu4 lu5 lü lü1 lü2 lü3 lü4 lü5 lu: lu:1 lu:2 lu:3 lu:4 lu:5 lv lv1 lv2 lv3 lv4 lv5 lyu lyu1 lyu2 lyu3 lyu4 lyu5 luan luan1 luan2 luan3 luan4 luan5 lüe lüe1 lüe2 lüe3 lüe4 lüe5 lu:e lu:e1 lu:e2 lu:e3 lu:e4 lu:e5 lve lve1 lve2 lve3 lve4 lve5 lyue lyue1 lyue2 lyue3 lyue4 lyue5 lun lun1 lun2 lun3 lun4 lun5 luo luo1 luo2 luo3 luo4 luo5";
// m
pyNumAoa[13] = "m m1 m2 m3 m4 m5 m m1 m2 m3 m4 m5 ma ma1 ma2 ma3 ma4 ma5 mai mai1 mai2 mai3 mai4 mai5 man man1 man2 man3 man4 man5 mang mang1 mang2 mang3 mang4 mang5 mao mao1 mao2 mao3 mao4 mao5 me me1 me2 me3 me4 me5 mei mei1 mei2 mei3 mei4 mei5 men men1 men2 men3 men4 men5 meng meng1 meng2 meng3 meng4 meng5 mi mi1 mi2 mi3 mi4 mi5 mian mian1 mian2 mian3 mian4 mian5 miao miao1 miao2 miao3 miao4 miao5 mie mie1 mie2 mie3 mie4 mie5 min min1 min2 min3 min4 min5 ming ming1 ming2 ming3 ming4 ming5 miu miu1 miu2 miu3 miu4 miu5 mo mo1 mo2 mo3 mo4 mo5 mou mou1 mou2 mou3 mou4 mou5 mu mu1 mu2 mu3 mu4 mu5";
// n
pyNumAoa[14] = "n n1 n2 n3 n4 n5 n n1 n2 n3 n4 n5 na na1 na2 na3 na4 na5 nai nai1 nai2 nai3 nai4 nai5 nan nan1 nan2 nan3 nan4 nan5 nang nang1 nang2 nang3 nang4 nang5 nao nao1 nao2 nao3 nao4 nao5 ne ne1 ne2 ne3 ne4 ne5 nei nei1 nei2 nei3 nei4 nei5 nen nen1 nen2 nen3 nen4 nen5 neng neng1 neng2 neng3 neng4 neng5 ng ng1 ng2 ng3 ng4 ng5 ng ng1 ng2 ng3 ng4 ng5 ni ni1 ni2 ni3 ni4 ni5 nian nian1 nian2 nian3 nian4 nian5 niang niang1 niang2 niang3 niang4 niang5 niao niao1 niao2 niao3 niao4 niao5 nie nie1 nie2 nie3 nie4 nie5 nin nin1 nin2 nin3 nin4 nin5 ning ning1 ning2 ning3 ning4 ning5 niu niu1 niu2 niu3 niu4 niu5 nong nong1 nong2 nong3 nong4 nong5 nou nou1 nou2 nou3 nou4 nou5 nu nu1 nu2 nu3 nu4 nu5 nü nü1 nü2 nü3 nü4 nü5 nu: nu:1 nu:2 nu:3 nu:4 nu:5 nv nv1 nv2 nv3 nv4 nv5 nyu nyu1 nyu2 nyu3 nyu4 nyu5 nuan nuan1 nuan2 nuan3 nuan4 nuan5 nüe nüe1 nüe2 nüe3 nüe4 nüe5 nu:e nu:e1 nu:e2 nu:e3 nu:e4 nu:e5 nve nve1 nve2 nve3 nve4 nve5 nyue nyue1 nyue2 nyue3 nyue4 nyue5 nun nun1 nun2 nun3 nun4 nun5 nuo nuo1 nuo2 nuo3 nuo4 nuo5";
// o
pyNumAoa[15] = "o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5";
// p
pyNumAoa[16] = "pa pa1 pa2 pa3 pa4 pa5 pai pai1 pai2 pai3 pai4 pai5 pan pan1 pan2 pan3 pan4 pan5 pang pang1 pang2 pang3 pang4 pang5 pao pao1 pao2 pao3 pao4 pao5 pei pei1 pei2 pei3 pei4 pei5 pen pen1 pen2 pen3 pen4 pen5 peng peng1 peng2 peng3 peng4 peng5 pi pi1 pi2 pi3 pi4 pi5 pian pian1 pian2 pian3 pian4 pian5 piao piao1 piao2 piao3 piao4 piao5 pie pie1 pie2 pie3 pie4 pie5 pin pin1 pin2 pin3 pin4 pin5 ping ping1 ping2 ping3 ping4 ping5 po po1 po2 po3 po4 po5 pou pou1 pou2 pou3 pou4 pou5 pu pu1 pu2 pu3 pu4 pu5";
// q
pyNumAoa[17] = "qi qi1 qi2 qi3 qi4 qi5 qia qia1 qia2 qia3 qia4 qia5 qian qian1 qian2 qian3 qian4 qian5 qiang qiang1 qiang2 qiang3 qiang4 qiang5 qiao qiao1 qiao2 qiao3 qiao4 qiao5 qie qie1 qie2 qie3 qie4 qie5 qin qin1 qin2 qin3 qin4 qin5 qing qing1 qing2 qing3 qing4 qing5 qiong qiong1 qiong2 qiong3 qiong4 qiong5 qiu qiu1 qiu2 qiu3 qiu4 qiu5 qu qu1 qu2 qu3 qu4 qu5 quan quan1 quan2 quan3 quan4 quan5 que que1 que2 que3 que4 que5 qun qun1 qun2 qun3 qun4 qun5";
// r
pyNumAoa[18] = "ran ran1 ran2 ran3 ran4 ran5 rang rang1 rang2 rang3 rang4 rang5 rao rao1 rao2 rao3 rao4 rao5 re re1 re2 re3 re4 re5 ren ren1 ren2 ren3 ren4 ren5 reng reng1 reng2 reng3 reng4 reng5 ri ri1 ri2 ri3 ri4 ri5 rong rong1 rong2 rong3 rong4 rong5 rou rou1 rou2 rou3 rou4 rou5 ru ru1 ru2 ru3 ru4 ru5 rua rua1 rua2 rua3 rua4 rua5 ruan ruan1 ruan2 ruan3 ruan4 ruan5 rui rui1 rui2 rui3 rui4 rui5 run run1 run2 run3 run4 run5 ruo ruo1 ruo2 ruo3 ruo4 ruo5";
// s
pyNumAoa[19] = "sa sa1 sa2 sa3 sa4 sa5 sai sai1 sai2 sai3 sai4 sai5 san san1 san2 san3 san4 san5 sang sang1 sang2 sang3 sang4 sang5 sao sao1 sao2 sao3 sao4 sao5 se se1 se2 se3 se4 se5 sen sen1 sen2 sen3 sen4 sen5 seng seng1 seng2 seng3 seng4 seng5 sha sha1 sha2 sha3 sha4 sha5 shai shai1 shai2 shai3 shai4 shai5 shan shan1 shan2 shan3 shan4 shan5 shang shang1 shang2 shang3 shang4 shang5 shao shao1 shao2 shao3 shao4 shao5 she she1 she2 she3 she4 she5 shei shei1 shei2 shei3 shei4 shei5 shen shen1 shen2 shen3 shen4 shen5 sheng sheng1 sheng2 sheng3 sheng4 sheng5 shi shi1 shi2 shi3 shi4 shi5 shou shou1 shou2 shou3 shou4 shou5 shu shu1 shu2 shu3 shu4 shu5 shua shua1 shua2 shua3 shua4 shua5 shuai shuai1 shuai2 shuai3 shuai4 shuai5 shuan shuan1 shuan2 shuan3 shuan4 shuan5 shuang shuang1 shuang2 shuang3 shuang4 shuang5 shui shui1 shui2 shui3 shui4 shui5 shun shun1 shun2 shun3 shun4 shun5 shuo shuo1 shuo2 shuo3 shuo4 shuo5 si si1 si2 si3 si4 si5 song song1 song2 song3 song4 song5 sou sou1 sou2 sou3 sou4 sou5 su su1 su2 su3 su4 su5 suan suan1 suan2 suan3 suan4 suan5 sui sui1 sui2 sui3 sui4 sui5 sun sun1 sun2 sun3 sun4 sun5 suo suo1 suo2 suo3 suo4 suo5";
// t
pyNumAoa[20] = "ta ta1 ta2 ta3 ta4 ta5 tai tai1 tai2 tai3 tai4 tai5 tan tan1 tan2 tan3 tan4 tan5 tang tang1 tang2 tang3 tang4 tang5 tao tao1 tao2 tao3 tao4 tao5 te te1 te2 te3 te4 te5 tei tei1 tei2 tei3 tei4 tei5 teng teng1 teng2 teng3 teng4 teng5 ti ti1 ti2 ti3 ti4 ti5 tian tian1 tian2 tian3 tian4 tian5 tiao tiao1 tiao2 tiao3 tiao4 tiao5 tie tie1 tie2 tie3 tie4 tie5 ting ting1 ting2 ting3 ting4 ting5 tong tong1 tong2 tong3 tong4 tong5 tou tou1 tou2 tou3 tou4 tou5 tu tu1 tu2 tu3 tu4 tu5 tuan tuan1 tuan2 tuan3 tuan4 tuan5 tui tui1 tui2 tui3 tui4 tui5 tun tun1 tun2 tun3 tun4 tun5 tuo tuo1 tuo2 tuo3 tuo4 tuo5";
// u --- not use
pyNumAoa[21] = ""; // u --- not use
// v --- not use
pyNumAoa[22] = ""; // v --- not use
// w
pyNumAoa[23] = "wa wa1 wa2 wa3 wa4 wa5 wai wai1 wai2 wai3 wai4 wai5 wan wan1 wan2 wan3 wan4 wan5 wang wang1 wang2 wang3 wang4 wang5 wei wei1 wei2 wei3 wei4 wei5 wen wen1 wen2 wen3 wen4 wen5 weng weng1 weng2 weng3 weng4 weng5 wo wo1 wo2 wo3 wo4 wo5 wu wu1 wu2 wu3 wu4 wu5";
// x
pyNumAoa[24] = "xi xi1 xi2 xi3 xi4 xi5 xia xia1 xia2 xia3 xia4 xia5 xian xian1 xian2 xian3 xian4 xian5 xiang xiang1 xiang2 xiang3 xiang4 xiang5 xiao xiao1 xiao2 xiao3 xiao4 xiao5 xie xie1 xie2 xie3 xie4 xie5 xin xin1 xin2 xin3 xin4 xin5 xing xing1 xing2 xing3 xing4 xing5 xiong xiong1 xiong2 xiong3 xiong4 xiong5 xiu xiu1 xiu2 xiu3 xiu4 xiu5 xu xu1 xu2 xu3 xu4 xu5 xuan xuan1 xuan2 xuan3 xuan4 xuan5 xue xue1 xue2 xue3 xue4 xue5 xun xun1 xun2 xun3 xun4 xun5";
// y
pyNumAoa[25] = "ya ya1 ya2 ya3 ya4 ya5 yan yan1 yan2 yan3 yan4 yan5 yang yang1 yang2 yang3 yang4 yang5 yao yao1 yao2 yao3 yao4 yao5 ye ye1 ye2 ye3 ye4 ye5 yi yi1 yi2 yi3 yi4 yi5 yin yin1 yin2 yin3 yin4 yin5 ying ying1 ying2 ying3 ying4 ying5 yo yo1 yo2 yo3 yo4 yo5 yong yong1 yong2 yong3 yong4 yong5 you you1 you2 you3 you4 you5 yu yu1 yu2 yu3 yu4 yu5 yuan yuan1 yuan2 yuan3 yuan4 yuan5 yue yue1 yue2 yue3 yue4 yue5 yun yun1 yun2 yun3 yun4 yun5";
// z
pyNumAoa[26] = "za za1 za2 za3 za4 za5 zai zai1 zai2 zai3 zai4 zai5 zan zan1 zan2 zan3 zan4 zan5 zang zang1 zang2 zang3 zang4 zang5 zao zao1 zao2 zao3 zao4 zao5 ze ze1 ze2 ze3 ze4 ze5 zei zei1 zei2 zei3 zei4 zei5 zen zen1 zen2 zen3 zen4 zen5 zeng zeng1 zeng2 zeng3 zeng4 zeng5 zha zha1 zha2 zha3 zha4 zha5 zhai zhai1 zhai2 zhai3 zhai4 zhai5 zhan zhan1 zhan2 zhan3 zhan4 zhan5 zhang zhang1 zhang2 zhang3 zhang4 zhang5 zhao zhao1 zhao2 zhao3 zhao4 zhao5 zhe zhe1 zhe2 zhe3 zhe4 zhe5 zhei zhei1 zhei2 zhei3 zhei4 zhei5 zhen zhen1 zhen2 zhen3 zhen4 zhen5 zheng zheng1 zheng2 zheng3 zheng4 zheng5 zhi zhi1 zhi2 zhi3 zhi4 zhi5 zhong zhong1 zhong2 zhong3 zhong4 zhong5 zhou zhou1 zhou2 zhou3 zhou4 zhou5 zhu zhu1 zhu2 zhu3 zhu4 zhu5 zhua zhua1 zhua2 zhua3 zhua4 zhua5 zhuai zhuai1 zhuai2 zhuai3 zhuai4 zhuai5 zhuan zhuan1 zhuan2 zhuan3 zhuan4 zhuan5 zhuang zhuang1 zhuang2 zhuang3 zhuang4 zhuang5 zhui zhui1 zhui2 zhui3 zhui4 zhui5 zhun zhun1 zhun2 zhun3 zhun4 zhun5 zhuo zhuo1 zhuo2 zhuo3 zhuo4 zhuo5 zi zi1 zi2 zi3 zi4 zi5 zong zong1 zong2 zong3 zong4 zong5 zou zou1 zou2 zou3 zou4 zou5 zu zu1 zu2 zu3 zu4 zu5 zuan zuan1 zuan2 zuan3 zuan4 zuan5 zui zui1 zui2 zui3 zui4 zui5 zun zun1 zun2 zun3 zun4 zun5 zuo zuo1 zuo2 zuo3 zuo4 zuo5";


// ============================================================== //


// NB: This tone table method program need window.addEventListener("load", function() {convertArrToAoa();}); to convert the following Arr into Aoa before use.

/* 15-16/Jan/2024: (Take pinyin "o" for example)
//
Before and After function convertArrToAoa() {...}
//
pyToneAoa[15] = "o ō ó ǒ ò o ou ōu óu ǒu òu ou";
Before: pyToneAoa[15] is an Array containing a string element, "o ō ó ǒ ò o ou ōu óu ǒu òu ou". => It is an Array, Arr.
//
pyToneAoa[15] = ["o","ō","ó","ǒ","ò","o","ou","ōu","óu","ǒu","òu","ou"];
After: pyToneAoa[15] is an Array containing an Array element, ["o","ō","ó","ǒ","ò","o","ou","ōu","óu","ǒu","òu","ou"]. => It is an Array of array, Aoa.
//
*/


// 0 --- not use
pyToneAoa[0] = ""; // 0 --- not use
// a
pyToneAoa[1] = "a ā á ǎ à a ai āi ái ǎi ài ai an ān án ǎn àn an ang āng áng ǎng àng ang ao āo áo ǎo ào ao";
// b
pyToneAoa[2] = "ba bā bá bǎ bà ba bai bāi bái bǎi bài bai ban bān bán bǎn bàn ban bang bāng báng bǎng bàng bang bao bāo báo bǎo bào bao bei bēi béi běi bèi bei ben bēn bén běn bèn ben beng bēng béng běng bèng beng bi bī bí bǐ bì bi bian biān bián biǎn biàn bian biao biāo biáo biǎo biào biao bie biē bié biě biè bie bin bīn bín bǐn bìn bin bing bīng bíng bǐng bìng bing bo bō bó bǒ bò bo bu bū bú bǔ bù bu";
// c
pyToneAoa[3] = "ca cā cá cǎ cà ca cai cāi cái cǎi cài cai can cān cán cǎn càn can cang cāng cáng cǎng càng cang cao cāo cáo cǎo cào cao ce cē cé cě cè ce cei cēi céi cěi cèi cei cen cēn cén cěn cèn cen ceng cēng céng cěng cèng ceng cha chā chá chǎ chà cha chai chāi chái chǎi chài chai chan chān chán chǎn chàn chan chang chāng cháng chǎng chàng chang chao chāo cháo chǎo chào chao che chē ché chě chè che chen chēn chén chěn chèn chen cheng chēng chéng chěng chèng cheng chi chī chí chǐ chì chi chong chōng chóng chǒng chòng chong chou chōu chóu chǒu chòu chou chu chū chú chǔ chù chu chua chuā chuá chuǎ chuà chua chuai chuāi chuái chuǎi chuài chuai chuan chuān chuán chuǎn chuàn chuan chuang chuāng chuáng chuǎng chuàng chuang chui chuī chuí chuǐ chuì chui chun chūn chún chǔn chùn chun chuo chuō chuó chuǒ chuò chuo ci cī cí cǐ cì ci cong cōng cóng cǒng còng cong cou cōu cóu cǒu còu cou cu cū cú cǔ cù cu cuan cuān cuán cuǎn cuàn cuan cui cuī cuí cuǐ cuì cui cun cūn cún cǔn cùn cun cuo cuō cuó cuǒ cuò cuo";
// d
pyToneAoa[4] = "da dā dá dǎ dà da dai dāi dái dǎi dài dai dan dān dán dǎn dàn dan dang dāng dáng dǎng dàng dang dao dāo dáo dǎo dào dao de dē dé dě dè de dei dēi déi děi dèi dei den dēn dén děn dèn den deng dēng déng děng dèng deng di dī dí dǐ dì di dia diā diá diǎ dià dia dian diān dián diǎn diàn dian diao diāo diáo diǎo diào diao die diē dié diě diè die ding dīng díng dǐng dìng ding diu diū diú diǔ diù diu dong dōng dóng dǒng dòng dong dou dōu dóu dǒu dòu dou du dū dú dǔ dù du duan duān duán duǎn duàn duan dui duī duí duǐ duì dui dun dūn dún dǔn dùn dun duo duō duó duǒ duò duo";
// e
pyToneAoa[5] = "e ē é ě è e ê êˉ êˊ êˇ êˋ ê ê êˉ êˊ êˇ êˋ ê ei ēi éi ěi èi ei en ēn én ěn èn en eng ēng éng ěng èng eng er ēr ér ěr èr er";
// f
pyToneAoa[6] = "fa fā fá fǎ fà fa fan fān fán fǎn fàn fan fang fāng fáng fǎng fàng fang fei fēi féi fěi fèi fei fen fēn fén fěn fèn fen feng fēng féng fěng fèng feng fiao fiāo fiáo fiǎo fiào fiao fo fō fó fǒ fò fo fou fōu fóu fǒu fòu fou fu fū fú fǔ fù fu";
// g
pyToneAoa[7] = "ga gā gá gǎ gà ga gai gāi gái gǎi gài gai gan gān gán gǎn gàn gan gang gāng gáng gǎng gàng gang gao gāo gáo gǎo gào gao ge gē gé gě gè ge gei gēi géi gěi gèi gei gen gēn gén gěn gèn gen geng gēng géng gěng gèng geng gong gōng góng gǒng gòng gong gou gōu góu gǒu gòu gou gu gū gú gǔ gù gu gua guā guá guǎ guà gua guai guāi guái guǎi guài guai guan guān guán guǎn guàn guan guang guāng guáng guǎng guàng guang gui guī guí guǐ guì gui gun gūn gún gǔn gùn gun guo guō guó guǒ guò guo";
// h
pyToneAoa[8] = "ha hā há hǎ hà ha hai hāi hái hǎi hài hai han hān hán hǎn hàn han hang hāng háng hǎng hàng hang hao hāo háo hǎo hào hao he hē hé hě hè he hei hēi héi hěi hèi hei hen hēn hén hěn hèn hen heng hēng héng hěng hèng heng hm hmˉ hmˊ hmˇ hmˋ hm hng hngˉ hngˊ hngˇ hngˋ hng hong hōng hóng hǒng hòng hong hou hōu hóu hǒu hòu hou hu hū hú hǔ hù hu hua huā huá huǎ huà hua huai huāi huái huǎi huài huai huan huān huán huǎn huàn huan huang huāng huáng huǎng huàng huang hui huī huí huǐ huì hui hun hūn hún hǔn hùn hun huo huō huó huǒ huò huo";
// i --- not use
pyToneAoa[9] = ""; // i --- not use
// j
pyToneAoa[10] = "ji jī jí jǐ jì ji jia jiā jiá jiǎ jià jia jian jiān jián jiǎn jiàn jian jiang jiāng jiáng jiǎng jiàng jiang jiao jiāo jiáo jiǎo jiào jiao jie jiē jié jiě jiè jie jin jīn jín jǐn jìn jin jing jīng jíng jǐng jìng jing jiong jiōng jióng jiǒng jiòng jiong jiu jiū jiú jiǔ jiù jiu ju jū jú jǔ jù ju juan juān juán juǎn juàn juan jue juē jué juě juè jue jun jūn jún jǔn jùn jun";
// k
pyToneAoa[11] = "ka kā ká kǎ kà ka kai kāi kái kǎi kài kai kan kān kán kǎn kàn kan kang kāng káng kǎng kàng kang kao kāo káo kǎo kào kao ke kē ké kě kè ke kei kēi kéi kěi kèi kei ken kēn kén kěn kèn ken keng kēng kéng kěng kèng keng kong kōng kóng kǒng kòng kong kou kōu kóu kǒu kòu kou ku kū kú kǔ kù ku kua kuā kuá kuǎ kuà kua kuai kuāi kuái kuǎi kuài kuai kuan kuān kuán kuǎn kuàn kuan kuang kuāng kuáng kuǎng kuàng kuang kui kuī kuí kuǐ kuì kui kun kūn kún kǔn kùn kun kuo kuō kuó kuǒ kuò kuo";
// l
pyToneAoa[12] = "la lā lá lǎ là la lai lāi lái lǎi lài lai lan lān lán lǎn làn lan lang lāng láng lǎng làng lang lao lāo láo lǎo lào lao le lē lé lě lè le lei lēi léi lěi lèi lei leng lēng léng lěng lèng leng li lī lí lǐ lì li lia liā liá liǎ lià lia lian liān lián liǎn liàn lian liang liāng liáng liǎng liàng liang liao liāo liáo liǎo liào liao lie liē lié liě liè lie lin līn lín lǐn lìn lin ling līng líng lǐng lìng ling liu liū liú liǔ liù liu lo lō ló lǒ lò lo long lōng lóng lǒng lòng long lou lōu lóu lǒu lòu lou lu lū lú lǔ lù lu lü lǖ lǘ lǚ lǜ lü lü lǖ lǘ lǚ lǜ lü lü lǖ lǘ lǚ lǜ lü lü lǖ lǘ lǚ lǜ lü luan luān luán luǎn luàn luan lüe lüē lüé lüě lüè lüe lüe lüē lüé lüě lüè lüe lüe lüē lüé lüě lüè lüe lüe lüē lüé lüě lüè lüe lun lūn lún lǔn lùn lun luo luō luó luǒ luò luo";
// m
pyToneAoa[13] = "m mˉ ḿ mˇ mˋ m m mˉ mˊ mˇ mˋ m ma mā má mǎ mà ma mai māi mái mǎi mài mai man mān mán mǎn màn man mang māng máng mǎng màng mang mao māo máo mǎo mào mao me mē mé mě mè me mei mēi méi měi mèi mei men mēn mén měn mèn men meng mēng méng měng mèng meng mi mī mí mǐ mì mi mian miān mián miǎn miàn mian miao miāo miáo miǎo miào miao mie miē mié miě miè mie min mīn mín mǐn mìn min ming mīng míng mǐng mìng ming miu miū miú miǔ miù miu mo mō mó mǒ mò mo mou mōu móu mǒu mòu mou mu mū mú mǔ mù mu";
// n
pyToneAoa[14] = "n nˉ ń ň ǹ n n nˉ nˊ nˇ nˋ n na nā ná nǎ nà na nai nāi nái nǎi nài nai nan nān nán nǎn nàn nan nang nāng náng nǎng nàng nang nao nāo náo nǎo nào nao ne nē né ně nè ne nei nēi néi něi nèi nei nen nēn nén něn nèn nen neng nēng néng něng nèng neng ng ngˉ ńg ňg ǹg ng ng ngˉ ngˊ ngˇ ngˋ ng ni nī ní nǐ nì ni nian niān nián niǎn niàn nian niang niāng niáng niǎng niàng niang niao niāo niáo niǎo niào niao nie niē nié niě niè nie nin nīn nín nǐn nìn nin ning nīng níng nǐng nìng ning niu niū niú niǔ niù niu nong nōng nóng nǒng nòng nong nou nōu nóu nǒu nòu nou nu nū nú nǔ nù nu nü nǖ nǘ nǚ nǜ nü nü nǖ nǘ nǚ nǜ nü nü nǖ nǘ nǚ nǜ nü nü nǖ nǘ nǚ nǜ nü nuan nuān nuán nuǎn nuàn nuan nüe nüē nüé nüě nüè nüe nüe nüē nüé nüě nüè nüe nüe nüē nüé nüě nüè nüe nüe nüē nüé nüě nüè nüe nun nūn nún nǔn nùn nun nuo nuō nuó nuǒ nuò nuo";
// o
pyToneAoa[15] = "o ō ó ǒ ò o ou ōu óu ǒu òu ou";
// p
pyToneAoa[16] = "pa pā pá pǎ pà pa pai pāi pái pǎi pài pai pan pān pán pǎn pàn pan pang pāng páng pǎng pàng pang pao pāo páo pǎo pào pao pei pēi péi pěi pèi pei pen pēn pén pěn pèn pen peng pēng péng pěng pèng peng pi pī pí pǐ pì pi pian piān pián piǎn piàn pian piao piāo piáo piǎo piào piao pie piē pié piě piè pie pin pīn pín pǐn pìn pin ping pīng píng pǐng pìng ping po pō pó pǒ pò po pou pōu póu pǒu pòu pou pu pū pú pǔ pù pu";
// q
pyToneAoa[17] = "qi qī qí qǐ qì qi qia qiā qiá qiǎ qià qia qian qiān qián qiǎn qiàn qian qiang qiāng qiáng qiǎng qiàng qiang qiao qiāo qiáo qiǎo qiào qiao qie qiē qié qiě qiè qie qin qīn qín qǐn qìn qin qing qīng qíng qǐng qìng qing qiong qiōng qióng qiǒng qiòng qiong qiu qiū qiú qiǔ qiù qiu qu qū qú qǔ qù qu quan quān quán quǎn quàn quan que quē qué quě què que qun qūn qún qǔn qùn qun";
// r
pyToneAoa[18] = "ran rān rán rǎn ràn ran rang rāng ráng rǎng ràng rang rao rāo ráo rǎo rào rao re rē ré rě rè re ren rēn rén rěn rèn ren reng rēng réng rěng rèng reng ri rī rí rǐ rì ri rong rōng róng rǒng ròng rong rou rōu róu rǒu ròu rou ru rū rú rǔ rù ru rua ruā ruá ruǎ ruà rua ruan ruān ruán ruǎn ruàn ruan rui ruī ruí ruǐ ruì rui run rūn rún rǔn rùn run ruo ruō ruó ruǒ ruò ruo";
// s
pyToneAoa[19] = "sa sā sá sǎ sà sa sai sāi sái sǎi sài sai san sān sán sǎn sàn san sang sāng sáng sǎng sàng sang sao sāo sáo sǎo sào sao se sē sé sě sè se sen sēn sén sěn sèn sen seng sēng séng sěng sèng seng sha shā shá shǎ shà sha shai shāi shái shǎi shài shai shan shān shán shǎn shàn shan shang shāng sháng shǎng shàng shang shao shāo sháo shǎo shào shao she shē shé shě shè she shei shēi shéi shěi shèi shei shen shēn shén shěn shèn shen sheng shēng shéng shěng shèng sheng shi shī shí shǐ shì shi shou shōu shóu shǒu shòu shou shu shū shú shǔ shù shu shua shuā shuá shuǎ shuà shua shuai shuāi shuái shuǎi shuài shuai shuan shuān shuán shuǎn shuàn shuan shuang shuāng shuáng shuǎng shuàng shuang shui shuī shuí shuǐ shuì shui shun shūn shún shǔn shùn shun shuo shuō shuó shuǒ shuò shuo si sī sí sǐ sì si song sōng sóng sǒng sòng song sou sōu sóu sǒu sòu sou su sū sú sǔ sù su suan suān suán suǎn suàn suan sui suī suí suǐ suì sui sun sūn sún sǔn sùn sun suo suō suó suǒ suò suo";
// t
pyToneAoa[20] = "ta tā tá tǎ tà ta tai tāi tái tǎi tài tai tan tān tán tǎn tàn tan tang tāng táng tǎng tàng tang tao tāo táo tǎo tào tao te tē té tě tè te tei tēi téi těi tèi tei teng tēng téng těng tèng teng ti tī tí tǐ tì ti tian tiān tián tiǎn tiàn tian tiao tiāo tiáo tiǎo tiào tiao tie tiē tié tiě tiè tie ting tīng tíng tǐng tìng ting tong tōng tóng tǒng tòng tong tou tōu tóu tǒu tòu tou tu tū tú tǔ tù tu tuan tuān tuán tuǎn tuàn tuan tui tuī tuí tuǐ tuì tui tun tūn tún tǔn tùn tun tuo tuō tuó tuǒ tuò tuo";
// u --- not use
pyToneAoa[21] = ""; // u --- not use
// v --- not use
pyToneAoa[22] = ""; // v --- not use
// w
pyToneAoa[23] = "wa wā wá wǎ wà wa wai wāi wái wǎi wài wai wan wān wán wǎn wàn wan wang wāng wáng wǎng wàng wang wei wēi wéi wěi wèi wei wen wēn wén wěn wèn wen weng wēng wéng wěng wèng weng wo wō wó wǒ wò wo wu wū wú wǔ wù wu";
// x
pyToneAoa[24] = "xi xī xí xǐ xì xi xia xiā xiá xiǎ xià xia xian xiān xián xiǎn xiàn xian xiang xiāng xiáng xiǎng xiàng xiang xiao xiāo xiáo xiǎo xiào xiao xie xiē xié xiě xiè xie xin xīn xín xǐn xìn xin xing xīng xíng xǐng xìng xing xiong xiōng xióng xiǒng xiòng xiong xiu xiū xiú xiǔ xiù xiu xu xū xú xǔ xù xu xuan xuān xuán xuǎn xuàn xuan xue xuē xué xuě xuè xue xun xūn xún xǔn xùn xun";
// y
pyToneAoa[25] = "ya yā yá yǎ yà ya yan yān yán yǎn yàn yan yang yāng yáng yǎng yàng yang yao yāo yáo yǎo yào yao ye yē yé yě yè ye yi yī yí yǐ yì yi yin yīn yín yǐn yìn yin ying yīng yíng yǐng yìng ying yo yō yó yǒ yò yo yong yōng yóng yǒng yòng yong you yōu yóu yǒu yòu you yu yū yú yǔ yù yu yuan yuān yuán yuǎn yuàn yuan yue yuē yué yuě yuè yue yun yūn yún yǔn yùn yun";
// z
pyToneAoa[26] = "za zā zá zǎ zà za zai zāi zái zǎi zài zai zan zān zán zǎn zàn zan zang zāng záng zǎng zàng zang zao zāo záo zǎo zào zao ze zē zé zě zè ze zei zēi zéi zěi zèi zei zen zēn zén zěn zèn zen zeng zēng zéng zěng zèng zeng zha zhā zhá zhǎ zhà zha zhai zhāi zhái zhǎi zhài zhai zhan zhān zhán zhǎn zhàn zhan zhang zhāng zháng zhǎng zhàng zhang zhao zhāo zháo zhǎo zhào zhao zhe zhē zhé zhě zhè zhe zhei zhēi zhéi zhěi zhèi zhei zhen zhēn zhén zhěn zhèn zhen zheng zhēng zhéng zhěng zhèng zheng zhi zhī zhí zhǐ zhì zhi zhong zhōng zhóng zhǒng zhòng zhong zhou zhōu zhóu zhǒu zhòu zhou zhu zhū zhú zhǔ zhù zhu zhua zhuā zhuá zhuǎ zhuà zhua zhuai zhuāi zhuái zhuǎi zhuài zhuai zhuan zhuān zhuán zhuǎn zhuàn zhuan zhuang zhuāng zhuáng zhuǎng zhuàng zhuang zhui zhuī zhuí zhuǐ zhuì zhui zhun zhūn zhún zhǔn zhùn zhun zhuo zhuō zhuó zhuǒ zhuò zhuo zi zī zí zǐ zì zi zong zōng zóng zǒng zòng zong zou zōu zóu zǒu zòu zou zu zū zú zǔ zù zu zuan zuān zuán zuǎn zuàn zuan zui zuī zuí zuǐ zuì zui zun zūn zún zǔn zùn zun zuo zuō zuó zuǒ zuò zuo";


// ============================================================== //


// NB: This tone table method program need window.addEventListener("load", function() {convertArrToAoa();}); to convert the following Arr into Aoa before use.

/* 15-16/Jan/2024: (Take pinyin "o" for example)
//
Before and After function convertArrToAoa() {...}
//
zyToneAoa[15] = "˙ㄛ ㄛ ㄛˊ ㄛˇ ㄛˋ ˙ㄛ ˙ㄡ ㄡ ㄡˊ ㄡˇ ㄡˋ ˙ㄡ";
Before: zyToneAoa[15] is an Array containing a string element, "˙ㄛ ㄛ ㄛˊ ㄛˇ ㄛˋ ˙ㄛ ˙ㄡ ㄡ ㄡˊ ㄡˇ ㄡˋ ˙ㄡ". => It is an Array, Arr.
//
zyToneAoa[15] = ["˙ㄛ","ㄛ","ㄛˊ","ㄛˇ","ㄛˋ","˙ㄛ","˙ㄡ","ㄡ","ㄡˊ","ㄡˇ","ㄡˋ","˙ㄡ"];
After: zyToneAoa[15] is an Array containing an Array element, ["˙ㄛ","ㄛ","ㄛˊ","ㄛˇ","ㄛˋ","˙ㄛ","˙ㄡ","ㄡ","ㄡˊ","ㄡˇ","ㄡˋ","˙ㄡ"]. => It is an Array of array, Aoa.
//
*/


// 0 --- not use
zyToneAoa[0] = ""; // 0 --- not use
// a
zyToneAoa[1] = "˙ㄚ ㄚ ㄚˊ ㄚˇ ㄚˋ ˙ㄚ ˙ㄞ ㄞ ㄞˊ ㄞˇ ㄞˋ ˙ㄞ ˙ㄢ ㄢ ㄢˊ ㄢˇ ㄢˋ ˙ㄢ ˙ㄤ ㄤ ㄤˊ ㄤˇ ㄤˋ ˙ㄤ ˙ㄠ ㄠ ㄠˊ ㄠˇ ㄠˋ ˙ㄠ";
// b
zyToneAoa[2] = "˙ㄅㄚ ㄅㄚ ㄅㄚˊ ㄅㄚˇ ㄅㄚˋ ˙ㄅㄚ ˙ㄅㄞ ㄅㄞ ㄅㄞˊ ㄅㄞˇ ㄅㄞˋ ˙ㄅㄞ ˙ㄅㄢ ㄅㄢ ㄅㄢˊ ㄅㄢˇ ㄅㄢˋ ˙ㄅㄢ ˙ㄅㄤ ㄅㄤ ㄅㄤˊ ㄅㄤˇ ㄅㄤˋ ˙ㄅㄤ ˙ㄅㄠ ㄅㄠ ㄅㄠˊ ㄅㄠˇ ㄅㄠˋ ˙ㄅㄠ ˙ㄅㄟ ㄅㄟ ㄅㄟˊ ㄅㄟˇ ㄅㄟˋ ˙ㄅㄟ ˙ㄅㄣ ㄅㄣ ㄅㄣˊ ㄅㄣˇ ㄅㄣˋ ˙ㄅㄣ ˙ㄅㄥ ㄅㄥ ㄅㄥˊ ㄅㄥˇ ㄅㄥˋ ˙ㄅㄥ ˙ㄅㄧ ㄅㄧ ㄅㄧˊ ㄅㄧˇ ㄅㄧˋ ˙ㄅㄧ ˙ㄅㄧㄢ ㄅㄧㄢ ㄅㄧㄢˊ ㄅㄧㄢˇ ㄅㄧㄢˋ ˙ㄅㄧㄢ ˙ㄅㄧㄠ ㄅㄧㄠ ㄅㄧㄠˊ ㄅㄧㄠˇ ㄅㄧㄠˋ ˙ㄅㄧㄠ ˙ㄅㄧㄝ ㄅㄧㄝ ㄅㄧㄝˊ ㄅㄧㄝˇ ㄅㄧㄝˋ ˙ㄅㄧㄝ ˙ㄅㄧㄣ ㄅㄧㄣ ㄅㄧㄣˊ ㄅㄧㄣˇ ㄅㄧㄣˋ ˙ㄅㄧㄣ ˙ㄅㄧㄥ ㄅㄧㄥ ㄅㄧㄥˊ ㄅㄧㄥˇ ㄅㄧㄥˋ ˙ㄅㄧㄥ ˙ㄅㄛ ㄅㄛ ㄅㄛˊ ㄅㄛˇ ㄅㄛˋ ˙ㄅㄛ ˙ㄅㄨ ㄅㄨ ㄅㄨˊ ㄅㄨˇ ㄅㄨˋ ˙ㄅㄨ";
// c
zyToneAoa[3] = "˙ㄘㄚ ㄘㄚ ㄘㄚˊ ㄘㄚˇ ㄘㄚˋ ˙ㄘㄚ ˙ㄘㄞ ㄘㄞ ㄘㄞˊ ㄘㄞˇ ㄘㄞˋ ˙ㄘㄞ ˙ㄘㄢ ㄘㄢ ㄘㄢˊ ㄘㄢˇ ㄘㄢˋ ˙ㄘㄢ ˙ㄘㄤ ㄘㄤ ㄘㄤˊ ㄘㄤˇ ㄘㄤˋ ˙ㄘㄤ ˙ㄘㄠ ㄘㄠ ㄘㄠˊ ㄘㄠˇ ㄘㄠˋ ˙ㄘㄠ ˙ㄘㄜ ㄘㄜ ㄘㄜˊ ㄘㄜˇ ㄘㄜˋ ˙ㄘㄜ ˙ㄘㄟ ㄘㄟ ㄘㄟˊ ㄘㄟˇ ㄘㄟˋ ˙ㄘㄟ ˙ㄘㄣ ㄘㄣ ㄘㄣˊ ㄘㄣˇ ㄘㄣˋ ˙ㄘㄣ ˙ㄘㄥ ㄘㄥ ㄘㄥˊ ㄘㄥˇ ㄘㄥˋ ˙ㄘㄥ ˙ㄔㄚ ㄔㄚ ㄔㄚˊ ㄔㄚˇ ㄔㄚˋ ˙ㄔㄚ ˙ㄔㄞ ㄔㄞ ㄔㄞˊ ㄔㄞˇ ㄔㄞˋ ˙ㄔㄞ ˙ㄔㄢ ㄔㄢ ㄔㄢˊ ㄔㄢˇ ㄔㄢˋ ˙ㄔㄢ ˙ㄔㄤ ㄔㄤ ㄔㄤˊ ㄔㄤˇ ㄔㄤˋ ˙ㄔㄤ ˙ㄔㄠ ㄔㄠ ㄔㄠˊ ㄔㄠˇ ㄔㄠˋ ˙ㄔㄠ ˙ㄔㄜ ㄔㄜ ㄔㄜˊ ㄔㄜˇ ㄔㄜˋ ˙ㄔㄜ ˙ㄔㄣ ㄔㄣ ㄔㄣˊ ㄔㄣˇ ㄔㄣˋ ˙ㄔㄣ ˙ㄔㄥ ㄔㄥ ㄔㄥˊ ㄔㄥˇ ㄔㄥˋ ˙ㄔㄥ ˙ㄔ ㄔ ㄔˊ ㄔˇ ㄔˋ ˙ㄔ ˙ㄔㄨㄥ ㄔㄨㄥ ㄔㄨㄥˊ ㄔㄨㄥˇ ㄔㄨㄥˋ ˙ㄔㄨㄥ ˙ㄔㄡ ㄔㄡ ㄔㄡˊ ㄔㄡˇ ㄔㄡˋ ˙ㄔㄡ ˙ㄔㄨ ㄔㄨ ㄔㄨˊ ㄔㄨˇ ㄔㄨˋ ˙ㄔㄨ ˙ㄔㄨㄚ ㄔㄨㄚ ㄔㄨㄚˊ ㄔㄨㄚˇ ㄔㄨㄚˋ ˙ㄔㄨㄚ ˙ㄔㄨㄞ ㄔㄨㄞ ㄔㄨㄞˊ ㄔㄨㄞˇ ㄔㄨㄞˋ ˙ㄔㄨㄞ ˙ㄔㄨㄢ ㄔㄨㄢ ㄔㄨㄢˊ ㄔㄨㄢˇ ㄔㄨㄢˋ ˙ㄔㄨㄢ ˙ㄔㄨㄤ ㄔㄨㄤ ㄔㄨㄤˊ ㄔㄨㄤˇ ㄔㄨㄤˋ ˙ㄔㄨㄤ ˙ㄔㄨㄟ ㄔㄨㄟ ㄔㄨㄟˊ ㄔㄨㄟˇ ㄔㄨㄟˋ ˙ㄔㄨㄟ ˙ㄔㄨㄣ ㄔㄨㄣ ㄔㄨㄣˊ ㄔㄨㄣˇ ㄔㄨㄣˋ ˙ㄔㄨㄣ ˙ㄔㄨㄛ ㄔㄨㄛ ㄔㄨㄛˊ ㄔㄨㄛˇ ㄔㄨㄛˋ ˙ㄔㄨㄛ ˙ㄘ ㄘ ㄘˊ ㄘˇ ㄘˋ ˙ㄘ ˙ㄘㄨㄥ ㄘㄨㄥ ㄘㄨㄥˊ ㄘㄨㄥˇ ㄘㄨㄥˋ ˙ㄘㄨㄥ ˙ㄘㄡ ㄘㄡ ㄘㄡˊ ㄘㄡˇ ㄘㄡˋ ˙ㄘㄡ ˙ㄘㄨ ㄘㄨ ㄘㄨˊ ㄘㄨˇ ㄘㄨˋ ˙ㄘㄨ ˙ㄘㄨㄢ ㄘㄨㄢ ㄘㄨㄢˊ ㄘㄨㄢˇ ㄘㄨㄢˋ ˙ㄘㄨㄢ ˙ㄘㄨㄟ ㄘㄨㄟ ㄘㄨㄟˊ ㄘㄨㄟˇ ㄘㄨㄟˋ ˙ㄘㄨㄟ ˙ㄘㄨㄣ ㄘㄨㄣ ㄘㄨㄣˊ ㄘㄨㄣˇ ㄘㄨㄣˋ ˙ㄘㄨㄣ ˙ㄘㄨㄛ ㄘㄨㄛ ㄘㄨㄛˊ ㄘㄨㄛˇ ㄘㄨㄛˋ ˙ㄘㄨㄛ";
// d
zyToneAoa[4] = "˙ㄉㄚ ㄉㄚ ㄉㄚˊ ㄉㄚˇ ㄉㄚˋ ˙ㄉㄚ ˙ㄉㄞ ㄉㄞ ㄉㄞˊ ㄉㄞˇ ㄉㄞˋ ˙ㄉㄞ ˙ㄉㄢ ㄉㄢ ㄉㄢˊ ㄉㄢˇ ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄤ ㄉㄤ ㄉㄤˊ ㄉㄤˇ ㄉㄤˋ ˙ㄉㄤ ˙ㄉㄠ ㄉㄠ ㄉㄠˊ ㄉㄠˇ ㄉㄠˋ ˙ㄉㄠ ˙ㄉㄜ ㄉㄜ ㄉㄜˊ ㄉㄜˇ ㄉㄜˋ ˙ㄉㄜ ˙ㄉㄟ ㄉㄟ ㄉㄟˊ ㄉㄟˇ ㄉㄟˋ ˙ㄉㄟ ˙ㄉㄣ ㄉㄣ ㄉㄣˊ ㄉㄣˇ ㄉㄣˋ ˙ㄉㄣ ˙ㄉㄥ ㄉㄥ ㄉㄥˊ ㄉㄥˇ ㄉㄥˋ ˙ㄉㄥ ˙ㄉㄧ ㄉㄧ ㄉㄧˊ ㄉㄧˇ ㄉㄧˋ ˙ㄉㄧ ˙ㄉㄧㄚ ㄉㄧㄚ ㄉㄧㄚˊ ㄉㄧㄚˇ ㄉㄧㄚˋ ˙ㄉㄧㄚ ˙ㄉㄧㄢ ㄉㄧㄢ ㄉㄧㄢˊ ㄉㄧㄢˇ ㄉㄧㄢˋ ˙ㄉㄧㄢ ˙ㄉㄧㄠ ㄉㄧㄠ ㄉㄧㄠˊ ㄉㄧㄠˇ ㄉㄧㄠˋ ˙ㄉㄧㄠ ˙ㄉㄧㄝ ㄉㄧㄝ ㄉㄧㄝˊ ㄉㄧㄝˇ ㄉㄧㄝˋ ˙ㄉㄧㄝ ˙ㄉㄧㄥ ㄉㄧㄥ ㄉㄧㄥˊ ㄉㄧㄥˇ ㄉㄧㄥˋ ˙ㄉㄧㄥ ˙ㄉㄧㄡ ㄉㄧㄡ ㄉㄧㄡˊ ㄉㄧㄡˇ ㄉㄧㄡˋ ˙ㄉㄧㄡ ˙ㄉㄨㄥ ㄉㄨㄥ ㄉㄨㄥˊ ㄉㄨㄥˇ ㄉㄨㄥˋ ˙ㄉㄨㄥ ˙ㄉㄡ ㄉㄡ ㄉㄡˊ ㄉㄡˇ ㄉㄡˋ ˙ㄉㄡ ˙ㄉㄨ ㄉㄨ ㄉㄨˊ ㄉㄨˇ ㄉㄨˋ ˙ㄉㄨ ˙ㄉㄨㄢ ㄉㄨㄢ ㄉㄨㄢˊ ㄉㄨㄢˇ ㄉㄨㄢˋ ˙ㄉㄨㄢ ˙ㄉㄨㄟ ㄉㄨㄟ ㄉㄨㄟˊ ㄉㄨㄟˇ ㄉㄨㄟˋ ˙ㄉㄨㄟ ˙ㄉㄨㄣ ㄉㄨㄣ ㄉㄨㄣˊ ㄉㄨㄣˇ ㄉㄨㄣˋ ˙ㄉㄨㄣ ˙ㄉㄨㄛ ㄉㄨㄛ ㄉㄨㄛˊ ㄉㄨㄛˇ ㄉㄨㄛˋ ˙ㄉㄨㄛ";
// e
zyToneAoa[5] = "˙ㄜ ㄜ ㄜˊ ㄜˇ ㄜˋ ˙ㄜ ˙ㄝ ㄝ ㄝˊ ㄝˇ ㄝˋ ˙ㄝ ˙ㄝ ㄝ ㄝˊ ㄝˇ ㄝˋ ˙ㄝ ˙ㄟ ㄟ ㄟˊ ㄟˇ ㄟˋ ˙ㄟ ˙ㄣ ㄣ ㄣˊ ㄣˇ ㄣˋ ˙ㄣ ˙ㄥ ㄥ ㄥˊ ㄥˇ ㄥˋ ˙ㄥ ˙ㄦ ㄦ ㄦˊ ㄦˇ ㄦˋ ˙ㄦ";
// f
zyToneAoa[6] = "˙ㄈㄚ ㄈㄚ ㄈㄚˊ ㄈㄚˇ ㄈㄚˋ ˙ㄈㄚ ˙ㄈㄢ ㄈㄢ ㄈㄢˊ ㄈㄢˇ ㄈㄢˋ ˙ㄈㄢ ˙ㄈㄤ ㄈㄤ ㄈㄤˊ ㄈㄤˇ ㄈㄤˋ ˙ㄈㄤ ˙ㄈㄟ ㄈㄟ ㄈㄟˊ ㄈㄟˇ ㄈㄟˋ ˙ㄈㄟ ˙ㄈㄣ ㄈㄣ ㄈㄣˊ ㄈㄣˇ ㄈㄣˋ ˙ㄈㄣ ˙ㄈㄥ ㄈㄥ ㄈㄥˊ ㄈㄥˇ ㄈㄥˋ ˙ㄈㄥ ˙ㄈㄧㄠ ㄈㄧㄠ ㄈㄧㄠˊ ㄈㄧㄠˇ ㄈㄧㄠˋ ˙ㄈㄧㄠ ˙ㄈㄛ ㄈㄛ ㄈㄛˊ ㄈㄛˇ ㄈㄛˋ ˙ㄈㄛ ˙ㄈㄡ ㄈㄡ ㄈㄡˊ ㄈㄡˇ ㄈㄡˋ ˙ㄈㄡ ˙ㄈㄨ ㄈㄨ ㄈㄨˊ ㄈㄨˇ ㄈㄨˋ ˙ㄈㄨ";
// g
zyToneAoa[7] = "˙ㄍㄚ ㄍㄚ ㄍㄚˊ ㄍㄚˇ ㄍㄚˋ ˙ㄍㄚ ˙ㄍㄞ ㄍㄞ ㄍㄞˊ ㄍㄞˇ ㄍㄞˋ ˙ㄍㄞ ˙ㄍㄢ ㄍㄢ ㄍㄢˊ ㄍㄢˇ ㄍㄢˋ ˙ㄍㄢ ˙ㄍㄤ ㄍㄤ ㄍㄤˊ ㄍㄤˇ ㄍㄤˋ ˙ㄍㄤ ˙ㄍㄠ ㄍㄠ ㄍㄠˊ ㄍㄠˇ ㄍㄠˋ ˙ㄍㄠ ˙ㄍㄜ ㄍㄜ ㄍㄜˊ ㄍㄜˇ ㄍㄜˋ ˙ㄍㄜ ˙ㄍㄟ ㄍㄟ ㄍㄟˊ ㄍㄟˇ ㄍㄟˋ ˙ㄍㄟ ˙ㄍㄣ ㄍㄣ ㄍㄣˊ ㄍㄣˇ ㄍㄣˋ ˙ㄍㄣ ˙ㄍㄥ ㄍㄥ ㄍㄥˊ ㄍㄥˇ ㄍㄥˋ ˙ㄍㄥ ˙ㄍㄨㄥ ㄍㄨㄥ ㄍㄨㄥˊ ㄍㄨㄥˇ ㄍㄨㄥˋ ˙ㄍㄨㄥ ˙ㄍㄡ ㄍㄡ ㄍㄡˊ ㄍㄡˇ ㄍㄡˋ ˙ㄍㄡ ˙ㄍㄨ ㄍㄨ ㄍㄨˊ ㄍㄨˇ ㄍㄨˋ ˙ㄍㄨ ˙ㄍㄨㄚ ㄍㄨㄚ ㄍㄨㄚˊ ㄍㄨㄚˇ ㄍㄨㄚˋ ˙ㄍㄨㄚ ˙ㄍㄨㄞ ㄍㄨㄞ ㄍㄨㄞˊ ㄍㄨㄞˇ ㄍㄨㄞˋ ˙ㄍㄨㄞ ˙ㄍㄨㄢ ㄍㄨㄢ ㄍㄨㄢˊ ㄍㄨㄢˇ ㄍㄨㄢˋ ˙ㄍㄨㄢ ˙ㄍㄨㄤ ㄍㄨㄤ ㄍㄨㄤˊ ㄍㄨㄤˇ ㄍㄨㄤˋ ˙ㄍㄨㄤ ˙ㄍㄨㄟ ㄍㄨㄟ ㄍㄨㄟˊ ㄍㄨㄟˇ ㄍㄨㄟˋ ˙ㄍㄨㄟ ˙ㄍㄨㄣ ㄍㄨㄣ ㄍㄨㄣˊ ㄍㄨㄣˇ ㄍㄨㄣˋ ˙ㄍㄨㄣ ˙ㄍㄨㄛ ㄍㄨㄛ ㄍㄨㄛˊ ㄍㄨㄛˇ ㄍㄨㄛˋ ˙ㄍㄨㄛ";
// h
zyToneAoa[8] = "˙ㄏㄚ ㄏㄚ ㄏㄚˊ ㄏㄚˇ ㄏㄚˋ ˙ㄏㄚ ˙ㄏㄞ ㄏㄞ ㄏㄞˊ ㄏㄞˇ ㄏㄞˋ ˙ㄏㄞ ˙ㄏㄢ ㄏㄢ ㄏㄢˊ ㄏㄢˇ ㄏㄢˋ ˙ㄏㄢ ˙ㄏㄤ ㄏㄤ ㄏㄤˊ ㄏㄤˇ ㄏㄤˋ ˙ㄏㄤ ˙ㄏㄠ ㄏㄠ ㄏㄠˊ ㄏㄠˇ ㄏㄠˋ ˙ㄏㄠ ˙ㄏㄜ ㄏㄜ ㄏㄜˊ ㄏㄜˇ ㄏㄜˋ ˙ㄏㄜ ˙ㄏㄟ ㄏㄟ ㄏㄟˊ ㄏㄟˇ ㄏㄟˋ ˙ㄏㄟ ˙ㄏㄣ ㄏㄣ ㄏㄣˊ ㄏㄣˇ ㄏㄣˋ ˙ㄏㄣ ˙ㄏㄥ ㄏㄥ ㄏㄥˊ ㄏㄥˇ ㄏㄥˋ ˙ㄏㄥ ˙ㄏㄇ ㄏㄇ ㄏㄇˊ ㄏㄇˇ ㄏㄇˋ ˙ㄏㄇ ˙ㄏ兀 ㄏ兀 ㄏ兀ˊ ㄏ兀ˇ ㄏ兀ˋ ˙ㄏ兀 ˙ㄏㄨㄥ ㄏㄨㄥ ㄏㄨㄥˊ ㄏㄨㄥˇ ㄏㄨㄥˋ ˙ㄏㄨㄥ ˙ㄏㄡ ㄏㄡ ㄏㄡˊ ㄏㄡˇ ㄏㄡˋ ˙ㄏㄡ ˙ㄏㄨ ㄏㄨ ㄏㄨˊ ㄏㄨˇ ㄏㄨˋ ˙ㄏㄨ ˙ㄏㄨㄚ ㄏㄨㄚ ㄏㄨㄚˊ ㄏㄨㄚˇ ㄏㄨㄚˋ ˙ㄏㄨㄚ ˙ㄏㄨㄞ ㄏㄨㄞ ㄏㄨㄞˊ ㄏㄨㄞˇ ㄏㄨㄞˋ ˙ㄏㄨㄞ ˙ㄏㄨㄢ ㄏㄨㄢ ㄏㄨㄢˊ ㄏㄨㄢˇ ㄏㄨㄢˋ ˙ㄏㄨㄢ ˙ㄏㄨㄤ ㄏㄨㄤ ㄏㄨㄤˊ ㄏㄨㄤˇ ㄏㄨㄤˋ ˙ㄏㄨㄤ ˙ㄏㄨㄟ ㄏㄨㄟ ㄏㄨㄟˊ ㄏㄨㄟˇ ㄏㄨㄟˋ ˙ㄏㄨㄟ ˙ㄏㄨㄣ ㄏㄨㄣ ㄏㄨㄣˊ ㄏㄨㄣˇ ㄏㄨㄣˋ ˙ㄏㄨㄣ ˙ㄏㄨㄛ ㄏㄨㄛ ㄏㄨㄛˊ ㄏㄨㄛˇ ㄏㄨㄛˋ ˙ㄏㄨㄛ";
// i --- not use
zyToneAoa[9] = ""; // i --- not use
// j
zyToneAoa[10] = "˙ㄐㄧ ㄐㄧ ㄐㄧˊ ㄐㄧˇ ㄐㄧˋ ˙ㄐㄧ ˙ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄚˊ ㄐㄧㄚˇ ㄐㄧㄚˋ ˙ㄐㄧㄚ ˙ㄐㄧㄢ ㄐㄧㄢ ㄐㄧㄢˊ ㄐㄧㄢˇ ㄐㄧㄢˋ ˙ㄐㄧㄢ ˙ㄐㄧㄤ ㄐㄧㄤ ㄐㄧㄤˊ ㄐㄧㄤˇ ㄐㄧㄤˋ ˙ㄐㄧㄤ ˙ㄐㄧㄠ ㄐㄧㄠ ㄐㄧㄠˊ ㄐㄧㄠˇ ㄐㄧㄠˋ ˙ㄐㄧㄠ ˙ㄐㄧㄝ ㄐㄧㄝ ㄐㄧㄝˊ ㄐㄧㄝˇ ㄐㄧㄝˋ ˙ㄐㄧㄝ ˙ㄐㄧㄣ ㄐㄧㄣ ㄐㄧㄣˊ ㄐㄧㄣˇ ㄐㄧㄣˋ ˙ㄐㄧㄣ ˙ㄐㄧㄥ ㄐㄧㄥ ㄐㄧㄥˊ ㄐㄧㄥˇ ㄐㄧㄥˋ ˙ㄐㄧㄥ ˙ㄐㄩㄥ ㄐㄩㄥ ㄐㄩㄥˊ ㄐㄩㄥˇ ㄐㄩㄥˋ ˙ㄐㄩㄥ ˙ㄐㄧㄡ ㄐㄧㄡ ㄐㄧㄡˊ ㄐㄧㄡˇ ㄐㄧㄡˋ ˙ㄐㄧㄡ ˙ㄐㄩ ㄐㄩ ㄐㄩˊ ㄐㄩˇ ㄐㄩˋ ˙ㄐㄩ ˙ㄐㄩㄢ ㄐㄩㄢ ㄐㄩㄢˊ ㄐㄩㄢˇ ㄐㄩㄢˋ ˙ㄐㄩㄢ ˙ㄐㄩㄝ ㄐㄩㄝ ㄐㄩㄝˊ ㄐㄩㄝˇ ㄐㄩㄝˋ ˙ㄐㄩㄝ ˙ㄐㄩㄣ ㄐㄩㄣ ㄐㄩㄣˊ ㄐㄩㄣˇ ㄐㄩㄣˋ ˙ㄐㄩㄣ";
// k
zyToneAoa[11] = "˙ㄎㄚ ㄎㄚ ㄎㄚˊ ㄎㄚˇ ㄎㄚˋ ˙ㄎㄚ ˙ㄎㄞ ㄎㄞ ㄎㄞˊ ㄎㄞˇ ㄎㄞˋ ˙ㄎㄞ ˙ㄎㄢ ㄎㄢ ㄎㄢˊ ㄎㄢˇ ㄎㄢˋ ˙ㄎㄢ ˙ㄎㄤ ㄎㄤ ㄎㄤˊ ㄎㄤˇ ㄎㄤˋ ˙ㄎㄤ ˙ㄎㄠ ㄎㄠ ㄎㄠˊ ㄎㄠˇ ㄎㄠˋ ˙ㄎㄠ ˙ㄎㄜ ㄎㄜ ㄎㄜˊ ㄎㄜˇ ㄎㄜˋ ˙ㄎㄜ ˙ㄎㄟ ㄎㄟ ㄎㄟˊ ㄎㄟˇ ㄎㄟˋ ˙ㄎㄟ ˙ㄎㄣ ㄎㄣ ㄎㄣˊ ㄎㄣˇ ㄎㄣˋ ˙ㄎㄣ ˙ㄎㄥ ㄎㄥ ㄎㄥˊ ㄎㄥˇ ㄎㄥˋ ˙ㄎㄥ ˙ㄎㄨㄥ ㄎㄨㄥ ㄎㄨㄥˊ ㄎㄨㄥˇ ㄎㄨㄥˋ ˙ㄎㄨㄥ ˙ㄎㄡ ㄎㄡ ㄎㄡˊ ㄎㄡˇ ㄎㄡˋ ˙ㄎㄡ ˙ㄎㄨ ㄎㄨ ㄎㄨˊ ㄎㄨˇ ㄎㄨˋ ˙ㄎㄨ ˙ㄎㄨㄚ ㄎㄨㄚ ㄎㄨㄚˊ ㄎㄨㄚˇ ㄎㄨㄚˋ ˙ㄎㄨㄚ ˙ㄎㄨㄞ ㄎㄨㄞ ㄎㄨㄞˊ ㄎㄨㄞˇ ㄎㄨㄞˋ ˙ㄎㄨㄞ ˙ㄎㄨㄢ ㄎㄨㄢ ㄎㄨㄢˊ ㄎㄨㄢˇ ㄎㄨㄢˋ ˙ㄎㄨㄢ ˙ㄎㄨㄤ ㄎㄨㄤ ㄎㄨㄤˊ ㄎㄨㄤˇ ㄎㄨㄤˋ ˙ㄎㄨㄤ ˙ㄎㄨㄟ ㄎㄨㄟ ㄎㄨㄟˊ ㄎㄨㄟˇ ㄎㄨㄟˋ ˙ㄎㄨㄟ ˙ㄎㄨㄣ ㄎㄨㄣ ㄎㄨㄣˊ ㄎㄨㄣˇ ㄎㄨㄣˋ ˙ㄎㄨㄣ ˙ㄎㄨㄛ ㄎㄨㄛ ㄎㄨㄛˊ ㄎㄨㄛˇ ㄎㄨㄛˋ ˙ㄎㄨㄛ";
// l
zyToneAoa[12] = "˙ㄌㄚ ㄌㄚ ㄌㄚˊ ㄌㄚˇ ㄌㄚˋ ˙ㄌㄚ ˙ㄌㄞ ㄌㄞ ㄌㄞˊ ㄌㄞˇ ㄌㄞˋ ˙ㄌㄞ ˙ㄌㄢ ㄌㄢ ㄌㄢˊ ㄌㄢˇ ㄌㄢˋ ˙ㄌㄢ ˙ㄌㄤ ㄌㄤ ㄌㄤˊ ㄌㄤˇ ㄌㄤˋ ˙ㄌㄤ ˙ㄌㄠ ㄌㄠ ㄌㄠˊ ㄌㄠˇ ㄌㄠˋ ˙ㄌㄠ ˙ㄌㄜ ㄌㄜ ㄌㄜˊ ㄌㄜˇ ㄌㄜˋ ˙ㄌㄜ ˙ㄌㄟ ㄌㄟ ㄌㄟˊ ㄌㄟˇ ㄌㄟˋ ˙ㄌㄟ ˙ㄌㄥ ㄌㄥ ㄌㄥˊ ㄌㄥˇ ㄌㄥˋ ˙ㄌㄥ ˙ㄌㄧ ㄌㄧ ㄌㄧˊ ㄌㄧˇ ㄌㄧˋ ˙ㄌㄧ ˙ㄌㄧㄚ ㄌㄧㄚ ㄌㄧㄚˊ ㄌㄧㄚˇ ㄌㄧㄚˋ ˙ㄌㄧㄚ ˙ㄌㄧㄢ ㄌㄧㄢ ㄌㄧㄢˊ ㄌㄧㄢˇ ㄌㄧㄢˋ ˙ㄌㄧㄢ ˙ㄌㄧㄤ ㄌㄧㄤ ㄌㄧㄤˊ ㄌㄧㄤˇ ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄌㄧㄠ ㄌㄧㄠ ㄌㄧㄠˊ ㄌㄧㄠˇ ㄌㄧㄠˋ ˙ㄌㄧㄠ ˙ㄌㄧㄝ ㄌㄧㄝ ㄌㄧㄝˊ ㄌㄧㄝˇ ㄌㄧㄝˋ ˙ㄌㄧㄝ ˙ㄌㄧㄣ ㄌㄧㄣ ㄌㄧㄣˊ ㄌㄧㄣˇ ㄌㄧㄣˋ ˙ㄌㄧㄣ ˙ㄌㄧㄥ ㄌㄧㄥ ㄌㄧㄥˊ ㄌㄧㄥˇ ㄌㄧㄥˋ ˙ㄌㄧㄥ ˙ㄌㄧㄡ ㄌㄧㄡ ㄌㄧㄡˊ ㄌㄧㄡˇ ㄌㄧㄡˋ ˙ㄌㄧㄡ ˙ㄌㄛ ㄌㄛ ㄌㄛˊ ㄌㄛˇ ㄌㄛˋ ˙ㄌㄛ ˙ㄌㄨㄥ ㄌㄨㄥ ㄌㄨㄥˊ ㄌㄨㄥˇ ㄌㄨㄥˋ ˙ㄌㄨㄥ ˙ㄌㄡ ㄌㄡ ㄌㄡˊ ㄌㄡˇ ㄌㄡˋ ˙ㄌㄡ ˙ㄌㄨ ㄌㄨ ㄌㄨˊ ㄌㄨˇ ㄌㄨˋ ˙ㄌㄨ ˙ㄌㄩ ㄌㄩ ㄌㄩˊ ㄌㄩˇ ㄌㄩˋ ˙ㄌㄩ ˙ㄌㄩ ㄌㄩ ㄌㄩˊ ㄌㄩˇ ㄌㄩˋ ˙ㄌㄩ ˙ㄌㄩ ㄌㄩ ㄌㄩˊ ㄌㄩˇ ㄌㄩˋ ˙ㄌㄩ ˙ㄌㄩ ㄌㄩ ㄌㄩˊ ㄌㄩˇ ㄌㄩˋ ˙ㄌㄩ ˙ㄌㄨㄢ ㄌㄨㄢ ㄌㄨㄢˊ ㄌㄨㄢˇ ㄌㄨㄢˋ ˙ㄌㄨㄢ ˙ㄌㄩㄝ ㄌㄩㄝ ㄌㄩㄝˊ ㄌㄩㄝˇ ㄌㄩㄝˋ ˙ㄌㄩㄝ ˙ㄌㄩㄝ ㄌㄩㄝ ㄌㄩㄝˊ ㄌㄩㄝˇ ㄌㄩㄝˋ ˙ㄌㄩㄝ ˙ㄌㄩㄝ ㄌㄩㄝ ㄌㄩㄝˊ ㄌㄩㄝˇ ㄌㄩㄝˋ ˙ㄌㄩㄝ ˙ㄌㄩㄝ ㄌㄩㄝ ㄌㄩㄝˊ ㄌㄩㄝˇ ㄌㄩㄝˋ ˙ㄌㄩㄝ ˙ㄌㄨㄣ ㄌㄨㄣ ㄌㄨㄣˊ ㄌㄨㄣˇ ㄌㄨㄣˋ ˙ㄌㄨㄣ ˙ㄌㄨㄛ ㄌㄨㄛ ㄌㄨㄛˊ ㄌㄨㄛˇ ㄌㄨㄛˋ ˙ㄌㄨㄛ";
// m
zyToneAoa[13] = "˙ㄇ ㄇ ㄇˊ ㄇˇ ㄇˋ ˙ㄇ ˙ㄇ ㄇ ㄇˊ ㄇˇ ㄇˋ ˙ㄇ ˙ㄇㄚ ㄇㄚ ㄇㄚˊ ㄇㄚˇ ㄇㄚˋ ˙ㄇㄚ ˙ㄇㄞ ㄇㄞ ㄇㄞˊ ㄇㄞˇ ㄇㄞˋ ˙ㄇㄞ ˙ㄇㄢ ㄇㄢ ㄇㄢˊ ㄇㄢˇ ㄇㄢˋ ˙ㄇㄢ ˙ㄇㄤ ㄇㄤ ㄇㄤˊ ㄇㄤˇ ㄇㄤˋ ˙ㄇㄤ ˙ㄇㄠ ㄇㄠ ㄇㄠˊ ㄇㄠˇ ㄇㄠˋ ˙ㄇㄠ ˙ㄇㄜ ㄇㄜ ㄇㄜˊ ㄇㄜˇ ㄇㄜˋ ˙ㄇㄜ ˙ㄇㄟ ㄇㄟ ㄇㄟˊ ㄇㄟˇ ㄇㄟˋ ˙ㄇㄟ ˙ㄇㄣ ㄇㄣ ㄇㄣˊ ㄇㄣˇ ㄇㄣˋ ˙ㄇㄣ ˙ㄇㄥ ㄇㄥ ㄇㄥˊ ㄇㄥˇ ㄇㄥˋ ˙ㄇㄥ ˙ㄇㄧ ㄇㄧ ㄇㄧˊ ㄇㄧˇ ㄇㄧˋ ˙ㄇㄧ ˙ㄇㄧㄢ ㄇㄧㄢ ㄇㄧㄢˊ ㄇㄧㄢˇ ㄇㄧㄢˋ ˙ㄇㄧㄢ ˙ㄇㄧㄠ ㄇㄧㄠ ㄇㄧㄠˊ ㄇㄧㄠˇ ㄇㄧㄠˋ ˙ㄇㄧㄠ ˙ㄇㄧㄝ ㄇㄧㄝ ㄇㄧㄝˊ ㄇㄧㄝˇ ㄇㄧㄝˋ ˙ㄇㄧㄝ ˙ㄇㄧㄣ ㄇㄧㄣ ㄇㄧㄣˊ ㄇㄧㄣˇ ㄇㄧㄣˋ ˙ㄇㄧㄣ ˙ㄇㄧㄥ ㄇㄧㄥ ㄇㄧㄥˊ ㄇㄧㄥˇ ㄇㄧㄥˋ ˙ㄇㄧㄥ ˙ㄇㄧㄡ ㄇㄧㄡ ㄇㄧㄡˊ ㄇㄧㄡˇ ㄇㄧㄡˋ ˙ㄇㄧㄡ ˙ㄇㄛ ㄇㄛ ㄇㄛˊ ㄇㄛˇ ㄇㄛˋ ˙ㄇㄛ ˙ㄇㄡ ㄇㄡ ㄇㄡˊ ㄇㄡˇ ㄇㄡˋ ˙ㄇㄡ ˙ㄇㄨ ㄇㄨ ㄇㄨˊ ㄇㄨˇ ㄇㄨˋ ˙ㄇㄨ";
// n
zyToneAoa[14] = "˙ㄋ ㄋ ㄋˊ ㄋˇ ㄋˋ ˙ㄋ ˙ㄋ ㄋ ㄋˊ ㄋˇ ㄋˋ ˙ㄋ ˙ㄋㄚ ㄋㄚ ㄋㄚˊ ㄋㄚˇ ㄋㄚˋ ˙ㄋㄚ ˙ㄋㄞ ㄋㄞ ㄋㄞˊ ㄋㄞˇ ㄋㄞˋ ˙ㄋㄞ ˙ㄋㄢ ㄋㄢ ㄋㄢˊ ㄋㄢˇ ㄋㄢˋ ˙ㄋㄢ ˙ㄋㄤ ㄋㄤ ㄋㄤˊ ㄋㄤˇ ㄋㄤˋ ˙ㄋㄤ ˙ㄋㄠ ㄋㄠ ㄋㄠˊ ㄋㄠˇ ㄋㄠˋ ˙ㄋㄠ ˙ㄋㄜ ㄋㄜ ㄋㄜˊ ㄋㄜˇ ㄋㄜˋ ˙ㄋㄜ ˙ㄋㄟ ㄋㄟ ㄋㄟˊ ㄋㄟˇ ㄋㄟˋ ˙ㄋㄟ ˙ㄋㄣ ㄋㄣ ㄋㄣˊ ㄋㄣˇ ㄋㄣˋ ˙ㄋㄣ ˙ㄋㄥ ㄋㄥ ㄋㄥˊ ㄋㄥˇ ㄋㄥˋ ˙ㄋㄥ ˙兀 兀 兀ˊ 兀ˇ 兀ˋ ˙兀 ˙兀 兀 兀ˊ 兀ˇ 兀ˋ ˙兀 ˙ㄋㄧ ㄋㄧ ㄋㄧˊ ㄋㄧˇ ㄋㄧˋ ˙ㄋㄧ ˙ㄋㄧㄢ ㄋㄧㄢ ㄋㄧㄢˊ ㄋㄧㄢˇ ㄋㄧㄢˋ ˙ㄋㄧㄢ ˙ㄋㄧㄤ ㄋㄧㄤ ㄋㄧㄤˊ ㄋㄧㄤˇ ㄋㄧㄤˋ ˙ㄋㄧㄤ ˙ㄋㄧㄠ ㄋㄧㄠ ㄋㄧㄠˊ ㄋㄧㄠˇ ㄋㄧㄠˋ ˙ㄋㄧㄠ ˙ㄋㄧㄝ ㄋㄧㄝ ㄋㄧㄝˊ ㄋㄧㄝˇ ㄋㄧㄝˋ ˙ㄋㄧㄝ ˙ㄋㄧㄣ ㄋㄧㄣ ㄋㄧㄣˊ ㄋㄧㄣˇ ㄋㄧㄣˋ ˙ㄋㄧㄣ ˙ㄋㄧㄥ ㄋㄧㄥ ㄋㄧㄥˊ ㄋㄧㄥˇ ㄋㄧㄥˋ ˙ㄋㄧㄥ ˙ㄋㄧㄡ ㄋㄧㄡ ㄋㄧㄡˊ ㄋㄧㄡˇ ㄋㄧㄡˋ ˙ㄋㄧㄡ ˙ㄋㄨㄥ ㄋㄨㄥ ㄋㄨㄥˊ ㄋㄨㄥˇ ㄋㄨㄥˋ ˙ㄋㄨㄥ ˙ㄋㄡ ㄋㄡ ㄋㄡˊ ㄋㄡˇ ㄋㄡˋ ˙ㄋㄡ ˙ㄋㄨ ㄋㄨ ㄋㄨˊ ㄋㄨˇ ㄋㄨˋ ˙ㄋㄨ ˙ㄋㄩ ㄋㄩ ㄋㄩˊ ㄋㄩˇ ㄋㄩˋ ˙ㄋㄩ ˙ㄋㄩ ㄋㄩ ㄋㄩˊ ㄋㄩˇ ㄋㄩˋ ˙ㄋㄩ ˙ㄋㄩ ㄋㄩ ㄋㄩˊ ㄋㄩˇ ㄋㄩˋ ˙ㄋㄩ ˙ㄋㄩ ㄋㄩ ㄋㄩˊ ㄋㄩˇ ㄋㄩˋ ˙ㄋㄩ ˙ㄋㄨㄢ ㄋㄨㄢ ㄋㄨㄢˊ ㄋㄨㄢˇ ㄋㄨㄢˋ ˙ㄋㄨㄢ ˙ㄋㄩㄝ ㄋㄩㄝ ㄋㄩㄝˊ ㄋㄩㄝˇ ㄋㄩㄝˋ ˙ㄋㄩㄝ ˙ㄋㄩㄝ ㄋㄩㄝ ㄋㄩㄝˊ ㄋㄩㄝˇ ㄋㄩㄝˋ ˙ㄋㄩㄝ ˙ㄋㄩㄝ ㄋㄩㄝ ㄋㄩㄝˊ ㄋㄩㄝˇ ㄋㄩㄝˋ ˙ㄋㄩㄝ ˙ㄋㄩㄝ ㄋㄩㄝ ㄋㄩㄝˊ ㄋㄩㄝˇ ㄋㄩㄝˋ ˙ㄋㄩㄝ ˙ㄋㄨㄣ ㄋㄨㄣ ㄋㄨㄣˊ ㄋㄨㄣˇ ㄋㄨㄣˋ ˙ㄋㄨㄣ ˙ㄋㄨㄛ ㄋㄨㄛ ㄋㄨㄛˊ ㄋㄨㄛˇ ㄋㄨㄛˋ ˙ㄋㄨㄛ";
// o
zyToneAoa[15] = "˙ㄛ ㄛ ㄛˊ ㄛˇ ㄛˋ ˙ㄛ ˙ㄡ ㄡ ㄡˊ ㄡˇ ㄡˋ ˙ㄡ";
// p
zyToneAoa[16] = "˙ㄆㄚ ㄆㄚ ㄆㄚˊ ㄆㄚˇ ㄆㄚˋ ˙ㄆㄚ ˙ㄆㄞ ㄆㄞ ㄆㄞˊ ㄆㄞˇ ㄆㄞˋ ˙ㄆㄞ ˙ㄆㄢ ㄆㄢ ㄆㄢˊ ㄆㄢˇ ㄆㄢˋ ˙ㄆㄢ ˙ㄆㄤ ㄆㄤ ㄆㄤˊ ㄆㄤˇ ㄆㄤˋ ˙ㄆㄤ ˙ㄆㄠ ㄆㄠ ㄆㄠˊ ㄆㄠˇ ㄆㄠˋ ˙ㄆㄠ ˙ㄆㄟ ㄆㄟ ㄆㄟˊ ㄆㄟˇ ㄆㄟˋ ˙ㄆㄟ ˙ㄆㄣ ㄆㄣ ㄆㄣˊ ㄆㄣˇ ㄆㄣˋ ˙ㄆㄣ ˙ㄆㄥ ㄆㄥ ㄆㄥˊ ㄆㄥˇ ㄆㄥˋ ˙ㄆㄥ ˙ㄆㄧ ㄆㄧ ㄆㄧˊ ㄆㄧˇ ㄆㄧˋ ˙ㄆㄧ ˙ㄆㄧㄢ ㄆㄧㄢ ㄆㄧㄢˊ ㄆㄧㄢˇ ㄆㄧㄢˋ ˙ㄆㄧㄢ ˙ㄆㄧㄠ ㄆㄧㄠ ㄆㄧㄠˊ ㄆㄧㄠˇ ㄆㄧㄠˋ ˙ㄆㄧㄠ ˙ㄆㄧㄝ ㄆㄧㄝ ㄆㄧㄝˊ ㄆㄧㄝˇ ㄆㄧㄝˋ ˙ㄆㄧㄝ ˙ㄆㄧㄣ ㄆㄧㄣ ㄆㄧㄣˊ ㄆㄧㄣˇ ㄆㄧㄣˋ ˙ㄆㄧㄣ ˙ㄆㄧㄥ ㄆㄧㄥ ㄆㄧㄥˊ ㄆㄧㄥˇ ㄆㄧㄥˋ ˙ㄆㄧㄥ ˙ㄆㄛ ㄆㄛ ㄆㄛˊ ㄆㄛˇ ㄆㄛˋ ˙ㄆㄛ ˙ㄆㄡ ㄆㄡ ㄆㄡˊ ㄆㄡˇ ㄆㄡˋ ˙ㄆㄡ ˙ㄆㄨ ㄆㄨ ㄆㄨˊ ㄆㄨˇ ㄆㄨˋ ˙ㄆㄨ";
// q
zyToneAoa[17] = "˙ㄑㄧ ㄑㄧ ㄑㄧˊ ㄑㄧˇ ㄑㄧˋ ˙ㄑㄧ ˙ㄑㄧㄚ ㄑㄧㄚ ㄑㄧㄚˊ ㄑㄧㄚˇ ㄑㄧㄚˋ ˙ㄑㄧㄚ ˙ㄑㄧㄢ ㄑㄧㄢ ㄑㄧㄢˊ ㄑㄧㄢˇ ㄑㄧㄢˋ ˙ㄑㄧㄢ ˙ㄑㄧㄤ ㄑㄧㄤ ㄑㄧㄤˊ ㄑㄧㄤˇ ㄑㄧㄤˋ ˙ㄑㄧㄤ ˙ㄑㄧㄠ ㄑㄧㄠ ㄑㄧㄠˊ ㄑㄧㄠˇ ㄑㄧㄠˋ ˙ㄑㄧㄠ ˙ㄑㄧㄝ ㄑㄧㄝ ㄑㄧㄝˊ ㄑㄧㄝˇ ㄑㄧㄝˋ ˙ㄑㄧㄝ ˙ㄑㄧㄣ ㄑㄧㄣ ㄑㄧㄣˊ ㄑㄧㄣˇ ㄑㄧㄣˋ ˙ㄑㄧㄣ ˙ㄑㄧㄥ ㄑㄧㄥ ㄑㄧㄥˊ ㄑㄧㄥˇ ㄑㄧㄥˋ ˙ㄑㄧㄥ ˙ㄑㄩㄥ ㄑㄩㄥ ㄑㄩㄥˊ ㄑㄩㄥˇ ㄑㄩㄥˋ ˙ㄑㄩㄥ ˙ㄑㄧㄡ ㄑㄧㄡ ㄑㄧㄡˊ ㄑㄧㄡˇ ㄑㄧㄡˋ ˙ㄑㄧㄡ ˙ㄑㄩ ㄑㄩ ㄑㄩˊ ㄑㄩˇ ㄑㄩˋ ˙ㄑㄩ ˙ㄑㄩㄢ ㄑㄩㄢ ㄑㄩㄢˊ ㄑㄩㄢˇ ㄑㄩㄢˋ ˙ㄑㄩㄢ ˙ㄑㄩㄝ ㄑㄩㄝ ㄑㄩㄝˊ ㄑㄩㄝˇ ㄑㄩㄝˋ ˙ㄑㄩㄝ ˙ㄑㄩㄣ ㄑㄩㄣ ㄑㄩㄣˊ ㄑㄩㄣˇ ㄑㄩㄣˋ ˙ㄑㄩㄣ";
// r
zyToneAoa[18] = "˙ㄖㄢ ㄖㄢ ㄖㄢˊ ㄖㄢˇ ㄖㄢˋ ˙ㄖㄢ ˙ㄖㄤ ㄖㄤ ㄖㄤˊ ㄖㄤˇ ㄖㄤˋ ˙ㄖㄤ ˙ㄖㄠ ㄖㄠ ㄖㄠˊ ㄖㄠˇ ㄖㄠˋ ˙ㄖㄠ ˙ㄖㄜ ㄖㄜ ㄖㄜˊ ㄖㄜˇ ㄖㄜˋ ˙ㄖㄜ ˙ㄖㄣ ㄖㄣ ㄖㄣˊ ㄖㄣˇ ㄖㄣˋ ˙ㄖㄣ ˙ㄖㄥ ㄖㄥ ㄖㄥˊ ㄖㄥˇ ㄖㄥˋ ˙ㄖㄥ ˙ㄖ ㄖ ㄖˊ ㄖˇ ㄖˋ ˙ㄖ ˙ㄖㄨㄥ ㄖㄨㄥ ㄖㄨㄥˊ ㄖㄨㄥˇ ㄖㄨㄥˋ ˙ㄖㄨㄥ ˙ㄖㄡ ㄖㄡ ㄖㄡˊ ㄖㄡˇ ㄖㄡˋ ˙ㄖㄡ ˙ㄖㄨ ㄖㄨ ㄖㄨˊ ㄖㄨˇ ㄖㄨˋ ˙ㄖㄨ ˙ㄖㄨㄚ ㄖㄨㄚ ㄖㄨㄚˊ ㄖㄨㄚˇ ㄖㄨㄚˋ ˙ㄖㄨㄚ ˙ㄖㄨㄢ ㄖㄨㄢ ㄖㄨㄢˊ ㄖㄨㄢˇ ㄖㄨㄢˋ ˙ㄖㄨㄢ ˙ㄖㄨㄟ ㄖㄨㄟ ㄖㄨㄟˊ ㄖㄨㄟˇ ㄖㄨㄟˋ ˙ㄖㄨㄟ ˙ㄖㄨㄣ ㄖㄨㄣ ㄖㄨㄣˊ ㄖㄨㄣˇ ㄖㄨㄣˋ ˙ㄖㄨㄣ ˙ㄖㄨㄛ ㄖㄨㄛ ㄖㄨㄛˊ ㄖㄨㄛˇ ㄖㄨㄛˋ ˙ㄖㄨㄛ";
// s
zyToneAoa[19] = "˙ㄙㄚ ㄙㄚ ㄙㄚˊ ㄙㄚˇ ㄙㄚˋ ˙ㄙㄚ ˙ㄙㄞ ㄙㄞ ㄙㄞˊ ㄙㄞˇ ㄙㄞˋ ˙ㄙㄞ ˙ㄙㄢ ㄙㄢ ㄙㄢˊ ㄙㄢˇ ㄙㄢˋ ˙ㄙㄢ ˙ㄙㄤ ㄙㄤ ㄙㄤˊ ㄙㄤˇ ㄙㄤˋ ˙ㄙㄤ ˙ㄙㄠ ㄙㄠ ㄙㄠˊ ㄙㄠˇ ㄙㄠˋ ˙ㄙㄠ ˙ㄙㄜ ㄙㄜ ㄙㄜˊ ㄙㄜˇ ㄙㄜˋ ˙ㄙㄜ ˙ㄙㄣ ㄙㄣ ㄙㄣˊ ㄙㄣˇ ㄙㄣˋ ˙ㄙㄣ ˙ㄙㄥ ㄙㄥ ㄙㄥˊ ㄙㄥˇ ㄙㄥˋ ˙ㄙㄥ ˙ㄕㄚ ㄕㄚ ㄕㄚˊ ㄕㄚˇ ㄕㄚˋ ˙ㄕㄚ ˙ㄕㄞ ㄕㄞ ㄕㄞˊ ㄕㄞˇ ㄕㄞˋ ˙ㄕㄞ ˙ㄕㄢ ㄕㄢ ㄕㄢˊ ㄕㄢˇ ㄕㄢˋ ˙ㄕㄢ ˙ㄕㄤ ㄕㄤ ㄕㄤˊ ㄕㄤˇ ㄕㄤˋ ˙ㄕㄤ ˙ㄕㄠ ㄕㄠ ㄕㄠˊ ㄕㄠˇ ㄕㄠˋ ˙ㄕㄠ ˙ㄕㄜ ㄕㄜ ㄕㄜˊ ㄕㄜˇ ㄕㄜˋ ˙ㄕㄜ ˙ㄕㄟ ㄕㄟ ㄕㄟˊ ㄕㄟˇ ㄕㄟˋ ˙ㄕㄟ ˙ㄕㄣ ㄕㄣ ㄕㄣˊ ㄕㄣˇ ㄕㄣˋ ˙ㄕㄣ ˙ㄕㄥ ㄕㄥ ㄕㄥˊ ㄕㄥˇ ㄕㄥˋ ˙ㄕㄥ ˙ㄕ ㄕ ㄕˊ ㄕˇ ㄕˋ ˙ㄕ ˙ㄕㄡ ㄕㄡ ㄕㄡˊ ㄕㄡˇ ㄕㄡˋ ˙ㄕㄡ ˙ㄕㄨ ㄕㄨ ㄕㄨˊ ㄕㄨˇ ㄕㄨˋ ˙ㄕㄨ ˙ㄕㄨㄚ ㄕㄨㄚ ㄕㄨㄚˊ ㄕㄨㄚˇ ㄕㄨㄚˋ ˙ㄕㄨㄚ ˙ㄕㄨㄞ ㄕㄨㄞ ㄕㄨㄞˊ ㄕㄨㄞˇ ㄕㄨㄞˋ ˙ㄕㄨㄞ ˙ㄕㄨㄢ ㄕㄨㄢ ㄕㄨㄢˊ ㄕㄨㄢˇ ㄕㄨㄢˋ ˙ㄕㄨㄢ ˙ㄕㄨㄤ ㄕㄨㄤ ㄕㄨㄤˊ ㄕㄨㄤˇ ㄕㄨㄤˋ ˙ㄕㄨㄤ ˙ㄕㄨㄟ ㄕㄨㄟ ㄕㄨㄟˊ ㄕㄨㄟˇ ㄕㄨㄟˋ ˙ㄕㄨㄟ ˙ㄕㄨㄣ ㄕㄨㄣ ㄕㄨㄣˊ ㄕㄨㄣˇ ㄕㄨㄣˋ ˙ㄕㄨㄣ ˙ㄕㄨㄛ ㄕㄨㄛ ㄕㄨㄛˊ ㄕㄨㄛˇ ㄕㄨㄛˋ ˙ㄕㄨㄛ ˙ㄙ ㄙ ㄙˊ ㄙˇ ㄙˋ ˙ㄙ ˙ㄙㄨㄥ ㄙㄨㄥ ㄙㄨㄥˊ ㄙㄨㄥˇ ㄙㄨㄥˋ ˙ㄙㄨㄥ ˙ㄙㄡ ㄙㄡ ㄙㄡˊ ㄙㄡˇ ㄙㄡˋ ˙ㄙㄡ ˙ㄙㄨ ㄙㄨ ㄙㄨˊ ㄙㄨˇ ㄙㄨˋ ˙ㄙㄨ ˙ㄙㄨㄢ ㄙㄨㄢ ㄙㄨㄢˊ ㄙㄨㄢˇ ㄙㄨㄢˋ ˙ㄙㄨㄢ ˙ㄙㄨㄟ ㄙㄨㄟ ㄙㄨㄟˊ ㄙㄨㄟˇ ㄙㄨㄟˋ ˙ㄙㄨㄟ ˙ㄙㄨㄣ ㄙㄨㄣ ㄙㄨㄣˊ ㄙㄨㄣˇ ㄙㄨㄣˋ ˙ㄙㄨㄣ ˙ㄙㄨㄛ ㄙㄨㄛ ㄙㄨㄛˊ ㄙㄨㄛˇ ㄙㄨㄛˋ ˙ㄙㄨㄛ";
// t
zyToneAoa[20] = "˙ㄊㄚ ㄊㄚ ㄊㄚˊ ㄊㄚˇ ㄊㄚˋ ˙ㄊㄚ ˙ㄊㄞ ㄊㄞ ㄊㄞˊ ㄊㄞˇ ㄊㄞˋ ˙ㄊㄞ ˙ㄊㄢ ㄊㄢ ㄊㄢˊ ㄊㄢˇ ㄊㄢˋ ˙ㄊㄢ ˙ㄊㄤ ㄊㄤ ㄊㄤˊ ㄊㄤˇ ㄊㄤˋ ˙ㄊㄤ ˙ㄊㄠ ㄊㄠ ㄊㄠˊ ㄊㄠˇ ㄊㄠˋ ˙ㄊㄠ ˙ㄊㄜ ㄊㄜ ㄊㄜˊ ㄊㄜˇ ㄊㄜˋ ˙ㄊㄜ ˙ㄊㄟ ㄊㄟ ㄊㄟˊ ㄊㄟˇ ㄊㄟˋ ˙ㄊㄟ ˙ㄊㄥ ㄊㄥ ㄊㄥˊ ㄊㄥˇ ㄊㄥˋ ˙ㄊㄥ ˙ㄊㄧ ㄊㄧ ㄊㄧˊ ㄊㄧˇ ㄊㄧˋ ˙ㄊㄧ ˙ㄊㄧㄢ ㄊㄧㄢ ㄊㄧㄢˊ ㄊㄧㄢˇ ㄊㄧㄢˋ ˙ㄊㄧㄢ ˙ㄊㄧㄠ ㄊㄧㄠ ㄊㄧㄠˊ ㄊㄧㄠˇ ㄊㄧㄠˋ ˙ㄊㄧㄠ ˙ㄊㄧㄝ ㄊㄧㄝ ㄊㄧㄝˊ ㄊㄧㄝˇ ㄊㄧㄝˋ ˙ㄊㄧㄝ ˙ㄊㄧㄥ ㄊㄧㄥ ㄊㄧㄥˊ ㄊㄧㄥˇ ㄊㄧㄥˋ ˙ㄊㄧㄥ ˙ㄊㄨㄥ ㄊㄨㄥ ㄊㄨㄥˊ ㄊㄨㄥˇ ㄊㄨㄥˋ ˙ㄊㄨㄥ ˙ㄊㄡ ㄊㄡ ㄊㄡˊ ㄊㄡˇ ㄊㄡˋ ˙ㄊㄡ ˙ㄊㄨ ㄊㄨ ㄊㄨˊ ㄊㄨˇ ㄊㄨˋ ˙ㄊㄨ ˙ㄊㄨㄢ ㄊㄨㄢ ㄊㄨㄢˊ ㄊㄨㄢˇ ㄊㄨㄢˋ ˙ㄊㄨㄢ ˙ㄊㄨㄟ ㄊㄨㄟ ㄊㄨㄟˊ ㄊㄨㄟˇ ㄊㄨㄟˋ ˙ㄊㄨㄟ ˙ㄊㄨㄣ ㄊㄨㄣ ㄊㄨㄣˊ ㄊㄨㄣˇ ㄊㄨㄣˋ ˙ㄊㄨㄣ ˙ㄊㄨㄛ ㄊㄨㄛ ㄊㄨㄛˊ ㄊㄨㄛˇ ㄊㄨㄛˋ ˙ㄊㄨㄛ";
// u --- not use
zyToneAoa[21] = ""; // u --- not use
// v --- not use
zyToneAoa[22] = ""; // v --- not use
// w
zyToneAoa[23] = "˙ㄨㄚ ㄨㄚ ㄨㄚˊ ㄨㄚˇ ㄨㄚˋ ˙ㄨㄚ ˙ㄨㄞ ㄨㄞ ㄨㄞˊ ㄨㄞˇ ㄨㄞˋ ˙ㄨㄞ ˙ㄨㄢ ㄨㄢ ㄨㄢˊ ㄨㄢˇ ㄨㄢˋ ˙ㄨㄢ ˙ㄨㄤ ㄨㄤ ㄨㄤˊ ㄨㄤˇ ㄨㄤˋ ˙ㄨㄤ ˙ㄨㄟ ㄨㄟ ㄨㄟˊ ㄨㄟˇ ㄨㄟˋ ˙ㄨㄟ ˙ㄨㄣ ㄨㄣ ㄨㄣˊ ㄨㄣˇ ㄨㄣˋ ˙ㄨㄣ ˙ㄨㄥ ㄨㄥ ㄨㄥˊ ㄨㄥˇ ㄨㄥˋ ˙ㄨㄥ ˙ㄨㄛ ㄨㄛ ㄨㄛˊ ㄨㄛˇ ㄨㄛˋ ˙ㄨㄛ ˙ㄨ ㄨ ㄨˊ ㄨˇ ㄨˋ ˙ㄨ";
// x
zyToneAoa[24] = "˙ㄒㄧ ㄒㄧ ㄒㄧˊ ㄒㄧˇ ㄒㄧˋ ˙ㄒㄧ ˙ㄒㄧㄚ ㄒㄧㄚ ㄒㄧㄚˊ ㄒㄧㄚˇ ㄒㄧㄚˋ ˙ㄒㄧㄚ ˙ㄒㄧㄢ ㄒㄧㄢ ㄒㄧㄢˊ ㄒㄧㄢˇ ㄒㄧㄢˋ ˙ㄒㄧㄢ ˙ㄒㄧㄤ ㄒㄧㄤ ㄒㄧㄤˊ ㄒㄧㄤˇ ㄒㄧㄤˋ ˙ㄒㄧㄤ ˙ㄒㄧㄠ ㄒㄧㄠ ㄒㄧㄠˊ ㄒㄧㄠˇ ㄒㄧㄠˋ ˙ㄒㄧㄠ ˙ㄒㄧㄝ ㄒㄧㄝ ㄒㄧㄝˊ ㄒㄧㄝˇ ㄒㄧㄝˋ ˙ㄒㄧㄝ ˙ㄒㄧㄣ ㄒㄧㄣ ㄒㄧㄣˊ ㄒㄧㄣˇ ㄒㄧㄣˋ ˙ㄒㄧㄣ ˙ㄒㄧㄥ ㄒㄧㄥ ㄒㄧㄥˊ ㄒㄧㄥˇ ㄒㄧㄥˋ ˙ㄒㄧㄥ ˙ㄒㄩㄥ ㄒㄩㄥ ㄒㄩㄥˊ ㄒㄩㄥˇ ㄒㄩㄥˋ ˙ㄒㄩㄥ ˙ㄒㄧㄡ ㄒㄧㄡ ㄒㄧㄡˊ ㄒㄧㄡˇ ㄒㄧㄡˋ ˙ㄒㄧㄡ ˙ㄒㄩ ㄒㄩ ㄒㄩˊ ㄒㄩˇ ㄒㄩˋ ˙ㄒㄩ ˙ㄒㄩㄢ ㄒㄩㄢ ㄒㄩㄢˊ ㄒㄩㄢˇ ㄒㄩㄢˋ ˙ㄒㄩㄢ ˙ㄒㄩㄝ ㄒㄩㄝ ㄒㄩㄝˊ ㄒㄩㄝˇ ㄒㄩㄝˋ ˙ㄒㄩㄝ ˙ㄒㄩㄣ ㄒㄩㄣ ㄒㄩㄣˊ ㄒㄩㄣˇ ㄒㄩㄣˋ ˙ㄒㄩㄣ";
// y
zyToneAoa[25] = "˙ㄧㄚ ㄧㄚ ㄧㄚˊ ㄧㄚˇ ㄧㄚˋ ˙ㄧㄚ ˙ㄧㄢ ㄧㄢ ㄧㄢˊ ㄧㄢˇ ㄧㄢˋ ˙ㄧㄢ ˙ㄧㄤ ㄧㄤ ㄧㄤˊ ㄧㄤˇ ㄧㄤˋ ˙ㄧㄤ ˙ㄧㄠ ㄧㄠ ㄧㄠˊ ㄧㄠˇ ㄧㄠˋ ˙ㄧㄠ ˙ㄧㄝ ㄧㄝ ㄧㄝˊ ㄧㄝˇ ㄧㄝˋ ˙ㄧㄝ ˙ㄧ ㄧ ㄧˊ ㄧˇ ㄧˋ ˙ㄧ ˙ㄧㄣ ㄧㄣ ㄧㄣˊ ㄧㄣˇ ㄧㄣˋ ˙ㄧㄣ ˙ㄧㄥ ㄧㄥ ㄧㄥˊ ㄧㄥˇ ㄧㄥˋ ˙ㄧㄥ ˙ㄧㄛ ㄧㄛ ㄧㄛˊ ㄧㄛˇ ㄧㄛˋ ˙ㄧㄛ ˙ㄩㄥ ㄩㄥ ㄩㄥˊ ㄩㄥˇ ㄩㄥˋ ˙ㄩㄥ ˙ㄧㄡ ㄧㄡ ㄧㄡˊ ㄧㄡˇ ㄧㄡˋ ˙ㄧㄡ ˙ㄩ ㄩ ㄩˊ ㄩˇ ㄩˋ ˙ㄩ ˙ㄩㄢ ㄩㄢ ㄩㄢˊ ㄩㄢˇ ㄩㄢˋ ˙ㄩㄢ ˙ㄩㄝ ㄩㄝ ㄩㄝˊ ㄩㄝˇ ㄩㄝˋ ˙ㄩㄝ ˙ㄩㄣ ㄩㄣ ㄩㄣˊ ㄩㄣˇ ㄩㄣˋ ˙ㄩㄣ";
// z
zyToneAoa[26] = "˙ㄗㄚ ㄗㄚ ㄗㄚˊ ㄗㄚˇ ㄗㄚˋ ˙ㄗㄚ ˙ㄗㄞ ㄗㄞ ㄗㄞˊ ㄗㄞˇ ㄗㄞˋ ˙ㄗㄞ ˙ㄗㄢ ㄗㄢ ㄗㄢˊ ㄗㄢˇ ㄗㄢˋ ˙ㄗㄢ ˙ㄗㄤ ㄗㄤ ㄗㄤˊ ㄗㄤˇ ㄗㄤˋ ˙ㄗㄤ ˙ㄗㄠ ㄗㄠ ㄗㄠˊ ㄗㄠˇ ㄗㄠˋ ˙ㄗㄠ ˙ㄗㄜ ㄗㄜ ㄗㄜˊ ㄗㄜˇ ㄗㄜˋ ˙ㄗㄜ ˙ㄗㄟ ㄗㄟ ㄗㄟˊ ㄗㄟˇ ㄗㄟˋ ˙ㄗㄟ ˙ㄗㄣ ㄗㄣ ㄗㄣˊ ㄗㄣˇ ㄗㄣˋ ˙ㄗㄣ ˙ㄗㄥ ㄗㄥ ㄗㄥˊ ㄗㄥˇ ㄗㄥˋ ˙ㄗㄥ ˙ㄓㄚ ㄓㄚ ㄓㄚˊ ㄓㄚˇ ㄓㄚˋ ˙ㄓㄚ ˙ㄓㄞ ㄓㄞ ㄓㄞˊ ㄓㄞˇ ㄓㄞˋ ˙ㄓㄞ ˙ㄓㄢ ㄓㄢ ㄓㄢˊ ㄓㄢˇ ㄓㄢˋ ˙ㄓㄢ ˙ㄓㄤ ㄓㄤ ㄓㄤˊ ㄓㄤˇ ㄓㄤˋ ˙ㄓㄤ ˙ㄓㄠ ㄓㄠ ㄓㄠˊ ㄓㄠˇ ㄓㄠˋ ˙ㄓㄠ ˙ㄓㄜ ㄓㄜ ㄓㄜˊ ㄓㄜˇ ㄓㄜˋ ˙ㄓㄜ ˙ㄓㄟ ㄓㄟ ㄓㄟˊ ㄓㄟˇ ㄓㄟˋ ˙ㄓㄟ ˙ㄓㄣ ㄓㄣ ㄓㄣˊ ㄓㄣˇ ㄓㄣˋ ˙ㄓㄣ ˙ㄓㄥ ㄓㄥ ㄓㄥˊ ㄓㄥˇ ㄓㄥˋ ˙ㄓㄥ ˙ㄓ ㄓ ㄓˊ ㄓˇ ㄓˋ ˙ㄓ ˙ㄓㄨㄥ ㄓㄨㄥ ㄓㄨㄥˊ ㄓㄨㄥˇ ㄓㄨㄥˋ ˙ㄓㄨㄥ ˙ㄓㄡ ㄓㄡ ㄓㄡˊ ㄓㄡˇ ㄓㄡˋ ˙ㄓㄡ ˙ㄓㄨ ㄓㄨ ㄓㄨˊ ㄓㄨˇ ㄓㄨˋ ˙ㄓㄨ ˙ㄓㄨㄚ ㄓㄨㄚ ㄓㄨㄚˊ ㄓㄨㄚˇ ㄓㄨㄚˋ ˙ㄓㄨㄚ ˙ㄓㄨㄞ ㄓㄨㄞ ㄓㄨㄞˊ ㄓㄨㄞˇ ㄓㄨㄞˋ ˙ㄓㄨㄞ ˙ㄓㄨㄢ ㄓㄨㄢ ㄓㄨㄢˊ ㄓㄨㄢˇ ㄓㄨㄢˋ ˙ㄓㄨㄢ ˙ㄓㄨㄤ ㄓㄨㄤ ㄓㄨㄤˊ ㄓㄨㄤˇ ㄓㄨㄤˋ ˙ㄓㄨㄤ ˙ㄓㄨㄟ ㄓㄨㄟ ㄓㄨㄟˊ ㄓㄨㄟˇ ㄓㄨㄟˋ ˙ㄓㄨㄟ ˙ㄓㄨㄣ ㄓㄨㄣ ㄓㄨㄣˊ ㄓㄨㄣˇ ㄓㄨㄣˋ ˙ㄓㄨㄣ ˙ㄓㄨㄛ ㄓㄨㄛ ㄓㄨㄛˊ ㄓㄨㄛˇ ㄓㄨㄛˋ ˙ㄓㄨㄛ ˙ㄗ ㄗ ㄗˊ ㄗˇ ㄗˋ ˙ㄗ ˙ㄗㄨㄥ ㄗㄨㄥ ㄗㄨㄥˊ ㄗㄨㄥˇ ㄗㄨㄥˋ ˙ㄗㄨㄥ ˙ㄗㄡ ㄗㄡ ㄗㄡˊ ㄗㄡˇ ㄗㄡˋ ˙ㄗㄡ ˙ㄗㄨ ㄗㄨ ㄗㄨˊ ㄗㄨˇ ㄗㄨˋ ˙ㄗㄨ ˙ㄗㄨㄢ ㄗㄨㄢ ㄗㄨㄢˊ ㄗㄨㄢˇ ㄗㄨㄢˋ ˙ㄗㄨㄢ ˙ㄗㄨㄟ ㄗㄨㄟ ㄗㄨㄟˊ ㄗㄨㄟˇ ㄗㄨㄟˋ ˙ㄗㄨㄟ ˙ㄗㄨㄣ ㄗㄨㄣ ㄗㄨㄣˊ ㄗㄨㄣˇ ㄗㄨㄣˋ ˙ㄗㄨㄣ ˙ㄗㄨㄛ ㄗㄨㄛ ㄗㄨㄛˊ ㄗㄨㄛˇ ㄗㄨㄛˋ ˙ㄗㄨㄛ";


// ============================================================== //

// Group 2 of 5 (Methods to display/view and edit Tone Table data)

// ============================================================== //


window.addEventListener("load", function() {convertArrToAoa();}); // When file onload, it will activate function convertArrToAoa().

function convertArrToAoa() {
//
// This function will take an array (Arr) of followings format (Take pinyin "o" for example):
//
// pyNumAoa[15] = "o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5";
// pyToneAoa[15] = "·o ō ó ǒ ò ·o ·ou ōu óu ǒu òu ·ou";
// zyToneAoa[15] = "˙ㄛ ㄛˉ ㄛˊ ㄛˇ ㄛˋ ˙ㄛ ˙ㄡ ㄡˉ ㄡˊ ㄡˇ ㄡˋ ˙ㄡ";   <------ NB: This example use left light tone instead of right for py and zy.
//
// and convert them into the followings Array of array (Aoa) format:
//
// pyNumAoa[15] = ["o","o1","o2","o3","o4","o5","ou","ou1","ou2","ou3","ou4","ou5"];
// pyToneAoa[15] = ["·o","ō","ó","ǒ","ò","·o","·ou","ōu","óu","ǒu","òu","·ou"];
// zyToneAoa[15] = ["˙ㄛ","ㄛˉ","ㄛˊ","ㄛˇ","ㄛˋ","˙ㄛ","˙ㄡ","ㄡˉ","ㄡˊ","ㄡˇ","ㄡˋ","˙ㄡ"];
//
for (var n=0; n<pyNumAoa.length; n++)
	{
	if (n==0 || n==9 || n==21 || n==22){pyNumAoa[n]=[""];pyToneAoa[n]=[""];zyToneAoa[n]=[""];continue;} // Optional. Actually even without this is still ok.
	pyNumAoa[n]=pyNumAoa[n].split(/[\s]+/);
	pyToneAoa[n]=pyToneAoa[n].split(/[\s]+/);
	zyToneAoa[n]=zyToneAoa[n].split(/[\s]+/);
	}
}


function pyLightTone(pos) { // pos has 3 values: "posLeft", "posRight", "posNone"
//
// Why this? => Allow us to use it to set default light tone setting (and use it immediately) if needed.
// Take the pinyin light tone of "o" for example:
//                                                                               // 15-16/Jan/2024: Change all the followings to Aoa format.
// pyToneAoa[15] = '"·o","ō","ó","ǒ","ò","·o","·ou","ōu","óu","ǒu","òu","·ou"';  // <--- We can set all light tone "·" to left and set it as default, or
// pyToneAoa[15] = '"o","ō","ó","ǒ","ò","o","ou","ōu","óu","ǒu","òu","ou"';      // <--- We can set all light tone "·" to none "" and set it as default, or
// pyToneAoa[15] = '"o·","ō","ó","ǒ","ò","o·","ou·","ōu","óu","ǒu","òu","ou·"';  // <--- We can set all light tone "·" to right and set it as default.
//
var ltPos=pos;
//
// Check to ensure only one of the 3 choices, "posLeft", "posRight" or "posNone" is entered, else return without doing anything.
if (ltPos!="posLeft" && ltPos!="posRight" && ltPos!="posNone") {alert('Please check the function parameter input for function pyLightTone(pos) should be: "posLeft", "posRight" or "posNone".');return;}
//
for (var i=0; i<pyToneAoa.length; i++)
	{
	if (i==0 || i==9 || i==21 || i==22) {continue;}
	for (var j=0; j<pyToneAoa[i].length; j++)
		{
		//if (/[12345āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/.test(pyToneAoa[i][j])) {continue;}  // Need to take out ü and keep ǖǘǚǜ because ü is a light tone.
		//if (/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/.test(pyToneAoa[i][j])) {continue;}       // Need to add in ˉˊˇˋ because pin yin symbols ê, hm, hng, m, n, ng use them. (Ref: aboutToneTable.html)
		if (/[āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜńňˉˊˇˋḿǹ]/.test(pyToneAoa[i][j])) {continue;}     // Take out ü. Add in ˉˊˇˋ. (Ref: aboutToneTable.html)
		else                                                                            // Also take out  as it cannot be displayed, (it might be a "m" with tone mark "ˊ" or a "n" with tone mark "ˋ", i.e. m2 or n4, if use pinyin number to represent them).
			{                                                                           // Add in ḿǹ (to indicate they are not light tone).
			pyToneAoa[i][j]=pyToneAoa[i][j].replace(/[·]/,"");             // Clear any existing "·" <--- This is equivalent to ltPos="posNone"
			if (ltPos=="posLeft") {pyToneAoa[i][j]="·"+pyToneAoa[i][j];}   // Add "·" to left side, this is the default standard way of doing.
			if (ltPos=="posRight") {pyToneAoa[i][j]=pyToneAoa[i][j]+"·";}  // Add "·" to right side, not likely.
			}
		}
	}
//
printAoaBackToArrInTextArea(); // Print out in TextArea so that user can copy it (if needed).
drawToneTable(); // Show the changes immediately by displaying them in Tone Table.
}


function zyLightTone(pos) { // pos has 2 values: "posLeft", "posRight", (NB: "posNone" will not be provided for zhuyin light tone, please see reason below).
//
// Why this? => Allow us to use it to set default light tone setting (and use it immediately) if needed.
// Take the zhuyin light tone of "ㄛ" and "ㄡ" for example:
//                                                                                            // 15-16/Jan/2024: Change all the followings to Aoa format.
// zyToneAoa[15] = '"˙ㄛ","ㄛˉ","ㄛˊ","ㄛˇ","ㄛˋ","˙ㄛ","˙ㄡ","ㄡˉ","ㄡˊ","ㄡˇ","ㄡˋ","˙ㄡ"';  // <--- We can set all light tone "˙" to left and set it as default, or
// zyToneAoa[15] = '"ㄛ˙","ㄛˉ","ㄛˊ","ㄛˇ","ㄛˋ","ㄛ˙","ㄡ˙","ㄡˉ","ㄡˊ","ㄡˇ","ㄡˋ","ㄡ˙"';  // <--- We can set all light tone "˙" to right and set it as default.
//
var ltPos=pos;
//
// Check to ensure only one of the 2 choices, "posLeft" or "posRight" is entered, else return without doing anything.
// Why no posNone?
//                                                                                            // 15-16/Jan/2024: Change all the followings to Aoa format.
// zyToneAoa[15] = '"ㄛ","ㄛˉ","ㄛˊ","ㄛˇ","ㄛˋ","ㄛ","ㄡ","ㄡˉ","ㄡˊ","ㄡˇ","ㄡˋ","ㄡ"';      // <--- We can but will not set all light tone "˙" to none "" because in zhuyin, no tone mark usually means first tone, so to avoid confusion, light tone cannot set to posNone.
// Because in zhuyin, no tone mark usually means first tone, so to avoid confusion, light tone cannot set to posNone (in this program).
if (ltPos!="posLeft" && ltPos!="posRight") {alert('Please check the function parameter input for function zyLightTone(pos) should be: "posLeft" or "posRight".');return;}
//
for (var i=0; i<zyToneAoa.length; i++)
	{
	if (i==0 || i==9 || i==21 || i==22) {continue;}
	for (var j=0; j<zyToneAoa[i].length; j++)
		{
		//
		if (/[˙]/.test(zyToneAoa[i][j])) // Just check the light tone /[˙]/ case, all other cases with tone /[ˉˊˇˋ]/ or no tone will go to else {...}.
			{
			zyToneAoa[i][j]=zyToneAoa[i][j].replace(/[˙]/,"");             // Clear any existing "˙" <--- This is equivalent to ltPos="posNone" but will not be allowed for zhu yin light tone to avoid confusion.
			if (ltPos=="posLeft") {zyToneAoa[i][j]="˙"+zyToneAoa[i][j];}   // Add "˙" to left side, this is the default standard way of doing.
			if (ltPos=="posRight") {zyToneAoa[i][j]=zyToneAoa[i][j]+"˙";}  // Add "˙" to right side, not likely.
			}
		else {continue;} // All cases with tone /[ˉˊˇˋ]/ or no tone will come here.
		}
	}
//
printAoaBackToArrInTextArea(); // Print out in TextArea so that user can copy it (if needed).
drawToneTable(); // Show the changes immediately by displaying them in Tone Table.
}


function zyFirstTone(pos) { // pos has 2 values: "posNone", "posRight"
//
// Why this? => Allow us to use it to set default first tone setting (and use it immediately) if needed.
// Take the zhuyin first tone of "ㄛ" and "ㄡ" for example:
//                                                                                            // 15-16/Jan/2024: Change all the followings to Aoa format.
// zyToneAoa[15] = '"˙ㄛ","ㄛ","ㄛˊ","ㄛˇ","ㄛˋ","˙ㄛ","˙ㄡ","ㄡ","ㄡˊ","ㄡˇ","ㄡˋ","˙ㄡ"';    // <--- We can set all first tone "ˉ" to none "" because in zhuyin, no tone mark usually means first tone, and set it as default, or
// zyToneAoa[15] = '"ㄛ˙","ㄛˉ","ㄛˊ","ㄛˇ","ㄛˋ","ㄛ˙","ㄡ˙","ㄡˉ","ㄡˊ","ㄡˇ","ㄡˋ","ㄡ˙"';  // <--- We can set all first tone "ˉ" to right and set it as default.
//
var ftPos=pos;
//
// Check to ensure only one of the 2 choices, "posNone" or "posRight" is entered, else return without doing anything.
// Why posNone for zhuyin first tone?
// Because in zhuyin, no tone mark usually means first tone, so we provide this standard choice for user.
if (ftPos!="posNone" && ftPos!="posRight") {alert('Please check the function parameter input for function zyFirstTone(pos) should be: "posNone" or "posRight".');return;}
//
for (var i=0; i<zyToneAoa.length; i++)
	{
	if (i==0 || i==9 || i==21 || i==22) {continue;}
	for (var j=0; j<zyToneAoa[i].length; j++)
		{
		if (/[˙ˊˇˋ]/.test(zyToneAoa[i][j])) {continue;} // Check all tone marks except first tone mark /[ˉ]/ and no tone mark cases.
		else // All cases of first tone mark /[ˉ]/ or no tone mark will process here.
			{
			zyToneAoa[i][j]=zyToneAoa[i][j].replace(/[ˉ]/,"");             // Clear any existing "ˉ" <--- This is equivalent to ftPos="posNone", this is the default standard way of doing.
			if (ftPos=="posRight") {zyToneAoa[i][j]=zyToneAoa[i][j]+"ˉ";}  // Add "ˉ" to right side.
			}
		}
	}
//
printAoaBackToArrInTextArea(); // Print out in TextArea so that user can copy it (if needed).
drawToneTable(); // Show the changes immediately by displaying them in Tone Table.
}


function printAoaBackToArrInTextArea() {
//
// Why print this? => Allow us to use it to replace default tone setting (eg: for py, zy light tone, or zy first tone, or zy "ㄧ", "一" convert) if needed.
// Take the pinyin light tone of "o" for example:
//
// 15-16/Jan/2024: The followings are in Aoa format.
// pyToneAoa[15] = '"·o","ō","ó","ǒ","ò","·o","·ou","ōu","óu","ǒu","òu","·ou"';  // <--- We can set all light tone "·" to left and set it as default, or
// pyToneAoa[15] = '"o","ō","ó","ǒ","ò","o","ou","ōu","óu","ǒu","òu","ou"';      // <--- We can set all light tone "·" to none "" and set it as default, or
// pyToneAoa[15] = '"o·","ō","ó","ǒ","ò","o·","ou·","ōu","óu","ǒu","òu","ou·"';  // <--- We can set all light tone "·" to right and set it as default.
//
// 15-16/Jan/2024: Print the above Aoa format back to the following Arr format.
// pyToneAoa[15] = "·o ō ó ǒ ò ·o ·ou ōu óu ǒu òu ·ou";  // <--- We can set all light tone "·" at left and set it as default, or
// pyToneAoa[15] = "o ō ó ǒ ò o ou ōu óu ǒu òu ou";      // <--- We can set all light tone "·" to none "" and set it as default, or
// pyToneAoa[15] = "o· ō ó ǒ ò o· ou· ōu óu ǒu òu ou·";  // <--- We can set all light tone "·" at right and set it as default.
//
var csvPyNum="";
var csvPyTone="";
var csvZyTone="";
for (var i=0; i<pyNumAoa.length; i++)
	{
	//csvPyNum += pyNumAoa[i] + "\n";pyNumAoa[0] = ""; // <--- This will print out csv format.
	//csvPyTone += pyToneAoa[i] + "\n";                //      eg: o,o1,o2,o3,o4,o5,ou,ou1,ou2,ou3,ou4,ou5  <--- in csv format.
	//csvZyTone += zyToneAoa[i] + "\n";
	//
	//csvPyNum += (pyNumAoa[i].toString()).replace(/\,/gmi," ") + "\n";    // <--- This will print out csv format, but replace all comma with " ".
	//csvPyTone += (pyToneAoa[i].toString()).replace(/\,/gmi," ") + "\n";  //      eg: o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5
	//csvZyTone += (zyToneAoa[i].toString()).replace(/\,/gmi," ") + "\n";
	//
	csvPyNum += 'pyNumAoa[' + i + '] = "' + (pyNumAoa[i].toString()).replace(/\,/gmi," ") + '";\n\n';     // <--- This will print out the original pyNumAoa.
	csvPyTone += 'pyToneAoa[' + i + '] = "' + (pyToneAoa[i].toString()).replace(/\,/gmi," ") + '";\n\n';  //      eg: pyNumAoa[15] = "o o1 o2 o3 o4 o5 ou ou1 ou2 ou3 ou4 ou5";
	csvZyTone += 'zyToneAoa[' + i + '] = "' + (zyToneAoa[i].toString()).replace(/\,/gmi," ") + '";\n\n';
	}
//
// Print all results into TextArea so that they can be copied and used, if needed.
document.getElementById('toneTbS1').value = "NB1: pyNumAoa will remain unchange. pyNumAoa 将保持不变。" + "\n\n" + csvPyNum + "NB2: Printed results here for copy and use, if needed. 将更改结果打印在此，以便若有需要，可以抄用它们。";
document.getElementById('toneTbS2').value = "NB1: pyToneAoa will change according to choices made. pyToneAoa 将根据选项情况而改变。" + "\n\n" + csvPyTone + "NB2: Printed results here for copy and use, if needed. 将更改结果打印在此，以便若有需要，可以抄用它们。"; // Edited 24/Sep/2023, change "accordingly" to "according to choices made" and added Chinese version.
document.getElementById('toneTbS3').value = "NB1: zyToneAoa will change according to choices made. zyToneAoa 将根据选项情况而改变。" + "\n\n" + csvZyTone + "NB2: Printed results here for copy and use, if needed. 将更改结果打印在此，以便若有需要，可以抄用它们。";
}


function drawToneTable()
{
var htmlDoc="";
//
// To display the setting.
// Ref: https://www.w3schools.com/JSREF/prop_select_selectedindex.asp
var pyLtTxt=document.getElementById("selPyLightTonePos").options[document.getElementById("selPyLightTonePos").selectedIndex].text;
var zyLtTxt=document.getElementById("selZyLightTonePos").options[document.getElementById("selZyLightTonePos").selectedIndex].text;
var zyFtTxt=document.getElementById("selZyFirstTonePos").options[document.getElementById("selZyFirstTonePos").selectedIndex].text;
//
// Added the following non-inline CSS stylesheet portion so that we can apply border to table, th, and td.
htmlDoc+="<style>";
htmlDoc+="table#ttb, table#ttb th, table#ttb td {";  // <--- NB: With #ttb, => This CSS style only apply to table with id="ttb". (ttb = tone table).
htmlDoc+="  border: 1px solid black;";
htmlDoc+="  border-collapse: collapse;";
htmlDoc+="  text-align: center;";            // 12/Jan/2024: Better add this.
htmlDoc+="}";
htmlDoc+="<\/style>";
//
htmlDoc+="<div style=\"overflow-x:auto;\">"; // <!-- Must and added this <div> container for table below. -->
//
htmlDoc+="<table id=\"ttb\" style=\"background-color:#CCFFFF; width:100%;\">"; // Add border:1px solid black; to in-line CSS style here will only apply to
htmlDoc+="	<tr>";                                                             // table but not to all th & td. Thus need to add non-inline CSS stylesheet as shown above.
htmlDoc+="		<td colspan=\"5\">";
htmlDoc+="		<p style=\"color:red; font-size:18px; font-weight:bold; text-align:center;\">汉字华语拼音音节表<br>Chinese Characters' Mandarin Pronunciation/Tone Table <input type=\"button\" value=\"说明 Notes\" name=\"btTTb\" onclick=\"window.open('aboutToneTable.html','top')\"><\/p>";
htmlDoc+="		<p>" + pyLtTxt + " <br \/> " + zyLtTxt + " | " + zyFtTxt + "<\/p>";
htmlDoc+="		<\/td>";
htmlDoc+="	<\/tr>";
htmlDoc+="	<tr style=\"color: #FF00FF\">";
htmlDoc+="		<th>序号(SN)<\/th>";
htmlDoc+="		<th>拼音数字(PYN)<\/th>";
htmlDoc+="		<th>拼音符号(PY)<\/th>";
htmlDoc+="		<th>注音符号(ZY)<\/th>";
htmlDoc+="	<\/tr>";
var sNo=1;
for (var n=0; n<pyNumAoa.length; n++)
	{
	if (n==0 || n==9 || n==21 || n==22){continue;}
	for (var i=0; i<pyNumAoa[n].length; i++)
		{
		htmlDoc+="	<tr>";
		htmlDoc+="		<td>"+sNo+"<\/td>";
		htmlDoc+="		<td>"+pyNumAoa[n][i]+"<\/td>";
		htmlDoc+="		<td>"+pyToneAoa[n][i]+"<\/td>"; // <------ Change these var from Array (Arr) to Array of array (Aoa), but keep their names.
		htmlDoc+="		<td>"+zyToneAoa[n][i]+"<\/td>";
		htmlDoc+="	<\/tr>";
		sNo++;
		}
	}
//
htmlDoc+="<\/table>";
htmlDoc+="<\/div>";
//
// Display the Tone Table used by this program:
document.getElementById("displayTTb").innerHTML=htmlDoc;
}


function setPyLightTonePos() {
  var sel=document.getElementById("selPyLightTonePos").value; // Better use option value/name method.
  switch(sel)
	{
	case "pyLtLeft": pyLightTone('posLeft');break;
	case "pyLtNone": pyLightTone('posNone');break;
	case "pyLtRight": pyLightTone('posRight');break;
	}
}


function setZyLightTonePos() {
  var sel=document.getElementById("selZyLightTonePos").value; // Better use option value/name method.
  switch(sel)
	{
	case "zyLtLeft": zyLightTone('posLeft');break;
	//case "zyLtNone": zyLightTone('posNone');break;
	case "zyLtRight": zyLightTone('posRight');break;
	}
}


function setZyFirstTonePos() {
  var sel=document.getElementById("selZyFirstTonePos").value; // Better use option value/name method.
  switch(sel)
	{
	//case "zyFtLeft": zyFirstTone('posLeft');break;
	case "zyFtNone": zyFirstTone('posNone');break;
	case "zyFtRight": zyFirstTone('posRight');break;
	}
}


function onOffEditToneTable() {
  var eleFmTT=document.getElementById("fmToneTable");
  //
  // Use window.location.href method.
  //
  if (eleFmTT.style.display=="block") {eleFmTT.style.display="none";document.getElementById("displayTTb").innerHTML="";window.location.href="#";} // # => jump to top of page.
  else {eleFmTT.style.display="block";drawToneTable();window.location.href="#fmToneTable";} // #fmToneTable => jump to fmToneTable.
}


// ============================================================== //

// Group 3 of 5 (Methods to use Tone Table data to get py zy conversion results)

// ============================================================== //


function convertPyZy(xPyNumOrTone) {
	//
	var pyNumOrTone = xPyNumOrTone.trim(); // NB: pyNumOrTone can be in pinyin with number format or pinyin with tone mark format.
    //
    if (pyNumOrTone == "") {return {pyNumResult:"???", pyResult:"???", zyResult:"???"};} // to prevent error. // 20/Dec/2023
    // Use above anonymous object method (assume it will be garbage collected after exit this function?), thus not using the following resultObj method. // 20/Dec/2023
    // const resultObj = {pyNumResult:"???", pyResult:"???", zyResult:"???"};
    // if (pyNumOrTone == "") {return resultObj;} // to prevent error.
	//
	var pyNumResult=""; // re-set before use
	var pyResult="";
	var zyResult="";
	var spacing=" ";
	var str="";
	//
	// NB: The following will add "Test"+" " to pyNumOrTone.
	pyNumOrTone="Test"+" "+pyNumOrTone;
	// NB: The following array method require (1) data entered with a space in between, (2) no carriage-return allowed => one line entry only.
	var pyNumOrToneArr=pyNumOrTone.split(/[\s]+/); // Using string " ", it can't handle multiple-spaces in front, behind or in between, this Regular Expression method can.
    //                                             // Using Regular Expression /[\s]+/, allow us the flexibility of ignoring multiple whitespace or delimiter characters.
	//
	// How this function works.
	// In actual usage, we expect user to input just pin yin (in lower case), but let assume user input pin yin and non-pin-yin data as shown below.
	// Says, user input: à hao3 jiǔ Bu4 Jian4 Uh Long Time No See 123 先生
	// => pyNumOrTone="Test"+" "+pyNumOrTone; will become: Test à hao3 jiǔ Bu4 Jian4 Uh Long Time No See 123 先生
	// => pyNumOrToneArr=pyNumOrTone.split(/[\s]+/); will produce the following array:
	//    pyNumOrToneArr[0]="Test"                                           <------------ This will not be used.
	//    pyNumOrToneArr[1]="à"
	//    pyNumOrToneArr[2]="hao3"
	//    pyNumOrToneArr[3]="jiǔ"
	//    pyNumOrToneArr[4]="Bu4"
	//    pyNumOrToneArr[5]="Jian4"
	//    pyNumOrToneArr[6]="Uh"
	//    pyNumOrToneArr[7]="Long"
	//    pyNumOrToneArr[8]="Time"
	//    pyNumOrToneArr[9]="No"
	//    pyNumOrToneArr[10]="See"
	//    pyNumOrToneArr[11]="123"
	//    pyNumOrToneArr[12]="先生"
	// => This program function will output the following results:
	//    pyNumResult="a4 hao3 jiu3 bu4 jian4 Uh??? long Time??? No??? See??? 123??? 先生???"     <--- Add ??? to all no-match parts so as to alert user. "Long" changed to "long" as there is a pin yin match of "long" (all py in lower case).
	//    pyResult="à hǎo jiǔ bù jiàn Uh??? long Time??? No??? See??? 123??? 先生???"                  <--- Add ??? to all no-match parts so as to alert user.
	//    zyResult="ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh??? ˙ㄌㄨㄥ Time??? No??? See??? 123??? 先生???"   <--- Add ??? to all no-match parts so as to alert user.   <--- As all default zy light tone in tone table have changed from right to left, => ㄌㄨㄥ˙ also need to change to ˙ㄌㄨㄥ.
	//
	var found;
	var foundArrIdx = -1; // Default is -1, => no matching array index found.
	//
	for (var i=1;i<pyNumOrToneArr.length;i++) {
		// NB1: i=0 is not in use, hence must start at i=1.
		// NB2: As we have added "Test"+" " to pyNumOrTone, => when i=0, => pyNumOrToneArr[0] = "Test", => can't use this, hence => i=0 is not in use.
		// NB3: Why add "Test"+" "?
		//      Because, says, to covert multiple py cases of "ni3 hao3 ma1", add "Test"+" " => "Test ni3 hao3 ma1", "array it" to [Test, ni3, hao3, ma1] so
		//      we can access each array element separately, => can convert ni3, hao3, ma1 one by one. The "Test"+" " is added to take care of user input of
		//      just one py cases, eg, say user input "hao3", we need not check whether it is single py cases or multiple py cases, just add "Test"+" " so
		//      it becomes "Test hao3", we can then "array it" to [Test, hao3], => we can handle single py cases and convert hao3 accordingly.
		found=false; // set/reset
		foundArrIdx=search_pyAlphabet(pyNumOrToneArr[i]); // NB: The parameter pyNumOrToneArr[i] can be in pinyin number or pinyin tone format.
		if (foundArrIdx != -1) {
			//
			for (var j=0;j<pyNumAoa[foundArrIdx].length;j++) { // NB: Just search pyNumAoa[foundArrIdx], not the entire pyNumAoa array.
				//if (pyNumOrToneArr[i]==pyNumAoa[foundArrIdx][j] || pyNumOrToneArr[i]==pyToneAoa[foundArrIdx][j]) {
				if (pyNumOrToneArr[i].toLowerCase()==pyNumAoa[foundArrIdx][j] || pyNumOrToneArr[i].toLowerCase()==pyToneAoa[foundArrIdx][j]) { // Added .toLowerCase() to pyNumOrToneArr, need not do for pyNumAoa and pyToneAoa as they are in lower case.
					pyNumResult+=pyNumAoa[foundArrIdx][j]+spacing;
					pyResult+=pyToneAoa[foundArrIdx][j]+spacing;
					zyResult+=zyToneAoa[foundArrIdx][j]+spacing;
					found=true;
					break;
				}
				// Says, user input: à hao3 jiǔ Bu4 Jian4 Uh Long Time No See 123 先生, then 'Uh' 'Time' 'No' 'See' (which will be evaluated to pnum!=-1), will eventually fall to the following else-case as they are not pin yin but English words (thus no pin yin match found). NB: Long will match with pin yin long, => will not fall to this else-case.
				else {
					continue; // Cannot use else to do other things, only do continue, why? Because need to loop through entire pyNumAoa[foundArrIdx].length
				}             // to search for possible match. Until search through and for-loop ended, then can do the following if (!found) {...} action.
			} // for-loop ended.
			//
			// NB: As long as proper py or zy are correctly input, no ??? will appear. However if ??? appear, it can alert the user.
			// The following can capture wrong pin yin (or pin yin not recorded in our Tone Table) or non-pin-yin English words entered by user.
			if (!found) { // Better don't omit non-py-zy input, so here we capture them and show them with ???, => need not throw errors or omit such input.
				pyNumResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- As it is !found, => no conversion, => better return original pyNumOrToneArr[i] + "???" to alert user.
				pyResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- No conversion, => better return original pyNumOrToneArr[i] + "???" to alert user.
				zyResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- No conversion, => better return original pyNumOrToneArr[i] + "???" to alert user. 
			}
		}
		// Says, user input: à hao3 jiǔ Bu4 Jian4 Uh Long Time No See 123 先生, then '123' '先生' (which will be evaluated to pnum==-1), will eventually fall to the following else if (!found) case as they are not pin yin nor English words with a to z alphabet.
		else {
			if (!found) {
				//
				// The if-case below is for CEDICT data which may use · as shown:
				// 比爾·蓋茨 比尔·盖茨 [Bi3 er3 · Gai4 ci2] /Bill Gates (1955-) co-founder of Microsoft/
				// 達·芬奇 达·芬奇 [Da2 · Fen1 qi2] /Leonardo da Vinci (1452-1519) Italian Renaissance painter/
				// 馬丁·路德·金 马丁·路德·金 [Ma3 ding1 · Lu4 de2 · Jin1] /Martin Luther King Jr. (1929-1968) American clergyman and civil rights activist/
				if (pyNumOrToneArr[i] == "," || pyNumOrToneArr[i] == "·" || pyNumOrToneArr[i] == ".") // Added pyNumOrToneArr[i] == ".".
					{
					pyNumResult+=pyNumOrToneArr[i]+spacing;
					pyResult+=pyNumOrToneArr[i]+spacing;
					zyResult+=pyNumOrToneArr[i]+spacing;
				}
				else
					{
					pyNumResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- As it is !found, => no conversion, => better return original pyNumOrToneArr[i] + "???" to alert user.
					pyResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- No conversion, => better return original pyNumOrToneArr[i] + "???" to alert user.
					zyResult+=pyNumOrToneArr[i]+"???"+spacing; // <--- No conversion, => better return original pyNumOrToneArr[i] + "???" to alert user.
				}
			}
		}
	} // for-loop ended.
	//
	pyNumResult=pyNumResult.trim(); // the last character is spacing=" ", hence take it out.
	pyResult=pyResult.trim();
	zyResult=zyResult.trim();
	//
	// Return the results in an object with parameters as shown, => {pyNumResult,pyResult,zyResult}: <--- Use this, => just use existing var as parameters.
	return {pyNumResult:pyNumResult, pyResult:pyResult, zyResult:zyResult};
    // Use above anonymous object method (assume it will be garbage collected after exit this function?), thus not using the following resultObj method. // 20/Dec/2023
    // resultObj.pyNumResult = pyNumResult; // 20/Dec/2023
    // resultObj.pyResult = pyResult;
    // resultObj.zyResult = zyResult;
    // return resultObj;
}

function search_pyAlphabet(xPyNumOrToneStr) {
	//
	var pyNumOrToneStr = xPyNumOrToneStr;
	pyNumOrToneStr = pyNumOrToneStr.replace(/[·]/g,""); // Clear any existing "·". NB: Usually pinyin light tone is not shown, if it do and at front or back, this will clear it.
	var pyNumOrToneChar = pyNumOrToneStr.charAt(0); // Use charAt(0) to get first character for searching.
	//
	var pyAlphabet="#abcdefghijklmnopqrstuvwxyz"; // pin yin alphabet do not include #,i, u, and v, but we will include them here.
	//
	// We will create arrays from index 0 to 26 as shown below.
	//
	// Index 1 to 26 will correspond to the 26 English and 23 pin yin alphabet (for pin yin, i,u,v will not be used).
	//
	// #=0 a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8 i=9(NO i) j=10 k=11 l=12 m=13
	// n=14 o=15 p=16 q=17 r=18 s=19 t=20 u=21(NO u) v=22(No v) w=23 x=24 y=25 z=26
	//
	// The size of the above array will be 27, => says, Array = new Array(27).
	//
	// Where index 0=#,9=i,21=u,22=v will not be used, => set, Array[0]="", Array[9]="", Array[21]="" Array[22]="".
	//
	var pnum=-1; // Default is -1, => no match found.
	//
	// First check, assume usual py with number case
	pnum=pyAlphabet.indexOf(pyNumOrToneChar.toLowerCase()); // if pnum not equal to -1, it will correspond to the index number of the array.
	if (pnum==-1) {
		// pnum==-1 => May be pyNumOrToneChar contains tone, so check and remove tone (if have)
		var pyNoToneChar=(pyNumOrToneChar).replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńňḿǹê]/g, function(m){ return toneMap[m][0]; }); // Use toneMap[m][0], => just get the first character of the name:value of toneMap[m].
		// Second check, assume py with tone case and the tone has been removed
		pnum=pyAlphabet.indexOf(pyNoToneChar.toLowerCase()); // if pnum not equal to -1, it will correspond to the index number of the array.
	}
	//
	// If no matching, => the pnum will remain -1.
	//
	return pnum; // => foundArrIdx = pnum.
}


// NB1: Copy the following toneMap and function removeTone(...) from: https://github.com/sxei/pinyinjs/blob/master/pinyinUtil.js
// NB2: The function removeTone(...) is not used in this program, it is for our ref to copy its return method & use it in function search_pyAlphabet(...).
	var toneMap =  
	{
		"ā": "a1",
		"á": "a2",
		"ǎ": "a3",
		"à": "a4",
		"ō": "o1",
		"ó": "o2",
		"ǒ": "o3",
		"ò": "o4",
		"ē": "e1",
		"é": "e2",
		"ě": "e3",
		"è": "e4",
		"ī": "i1",
		"í": "i2",
		"ǐ": "i3",
		"ì": "i4",
		"ū": "u1",
		"ú": "u2",
		"ǔ": "u3",
		"ù": "u4",
		"ü": "v5",  // Added by STZ: Change v0 to v5 for our usage.
		"ǖ": "v1",
		"ǘ": "v2",
		"ǚ": "v3",
		"ǜ": "v4",
//KIV	"ń": "n2",  // KIV because similar to n2, n3, n4 that we have added below. Has used our program 比对与过滤词组或名单 and proved that the two set of n2 and n3 are the same.
//KIV	"ň": "n3",
//KIV	"": "m2",  // <--- STZ note: If program use the same symbol (such as ) to represent characters that it is unable to display, then all such
					//                characters will be evaluated as m2 if toneMap is used to process them. => Need to check this possibility.
					//
		            // <--- Added by STZ: 
					//      Has KIV the above "": "m2" from toneMap because "" is character that is unable to display, => meaningless.
					//      => Also to avoid all "" (if any) being evaluated as m2 if toneMap is used to process them. => May become hidden Errors.
					//
					// STZ added the following rarely used but valid pinyin symbols:
					//
		"ê": "e^5", // ê is valid and can be displayed by program, in our tone table, it is ê = e^ = e^5, => group under e.
		"ḿ": "m2",  // Ref: https://en.wiktionary.org/wiki/呣#Translingual (for m2, m4)
//KIV	"m̀": "m4",  //      Why KIV: According to http://www.kbdlayout.info/how/m%CC%80, m̀ is a combine symbol => m + ` => Thus we know javascript may not be able to process this symbol. => Better don't use or KIV it if javascript is involved. (We have tested and prove that javascript's replace() fail to process this symbol.)
		"ń": "n2",  // Ref : https://en.wiktionary.org/wiki/嗯#Chinese (for n2, n3, n4)
		"ň": "n3",
		"ǹ": "n4"
	};

	function removeTone(pinyin)
	{
		return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function(m){ return toneMap[m][0]; });
	}



//========================================================================================================================================================//



function convertZyPy(xZyWithOrNoTone) {
	//
	var zyWithOrNoTone = xZyWithOrNoTone.trim();  // NB: zyWithOrNoTone can be in zhu yin with tone or no tone format.
    //
    if (zyWithOrNoTone == "") {return {pyNumResult:"???", pyResult:"???", zyResult:"???"};} // to prevent error. // 20/Dec/2023
    // Use above anonymous object method (assume it will be garbage collected after exit this function?), thus not using the following resultObj method. // 20/Dec/2023
    // const resultObj = {pyNumResult:"???", pyResult:"???", zyResult:"???"};
    // if (zyWithOrNoTone == "") {return resultObj;} // to prevent error.
	//
	var pyNumResult=""; // re-set before use
	var pyResult="";
	var zyResult="";
	var spacing=" ";
	var str="";
	//
	// NB: The following will add "Test"+" " to zyWithOrNoTone.
	zyWithOrNoTone="Test"+" "+zyWithOrNoTone;
	// NB: The following array method require (1) data entered with a space in between, (2) no carriage-return allowed => one line entry only.
	var zyWithOrNoToneArr=zyWithOrNoTone.split(/[\s]+/); // Using string " ", it can't handle multiple-spaces in front, behind or in between, this Regular Expression method can.
	//													 // Using Regular Expression /[\s]+/, allow us the flexibility of ignoring multiple whitespace or delimiter characters.
	//
	// How this function works.
	// In actual usage, we expect user to input just zhu yin, but let assume user input zhu yin and non-zhu-yin data as shown below.
	// Says, user input: ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh Long Time No See 123 ㄅㄆㄇㄈ先生
	// => zyWithOrNoTone="Test"+" "+zyWithOrNoTone; will become: Test ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh Long Time No See 123 ㄅㄆㄇㄈ先生
	// => zyWithOrNoToneArr=zyWithOrNoTone.split(/[\s]+/); will produce the following array:
	//    zyWithOrNoToneArr[0]="Test"                                             <------------ This will not be used.
	//    zyWithOrNoToneArr[1]="ㄚˋ"
	//    zyWithOrNoToneArr[2]="ㄏㄠˇ"
	//    zyWithOrNoToneArr[3]="ㄐㄧㄡˇ"
	//    zyWithOrNoToneArr[4]="ㄅㄨˋ"
	//    zyWithOrNoToneArr[5]="ㄐㄧㄢˋ"
	//    zyWithOrNoToneArr[6]="Uh"
	//    zyWithOrNoToneArr[7]="Long"
	//    zyWithOrNoToneArr[8]="Time"
	//    zyWithOrNoToneArr[9]="No"
	//    zyWithOrNoToneArr[10]="See"
	//    zyWithOrNoToneArr[11]="123"
	//    zyWithOrNoToneArr[12]="ㄅㄆㄇㄈ先生"
	// => This program function will output the following results:
	//    pyNumResult="a4 hao3 jiu3 bu4 jian4 Uh??? Long??? Time??? No??? See??? 123??? ㄅㄆㄇㄈ先生???"     <------ Add ??? to all no-match parts so as to alert user.   <--- Previously was ㄅㄆㄇㄈ先生˙???, => no more "˙" behind.
	//    pyResult="à hǎo jiǔ bù jiàn Uh??? Long??? Time??? No??? See??? 123??? ㄅㄆㄇㄈ先生???"              <------ Add ??? to all no-match parts so as to alert user.
	//    zyResult="ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh??? Long??? Time??? No??? See??? 123??? ㄅㄆㄇㄈ先生???"  <------ Add ??? to all no-match parts so as to alert user.
	//                                                                                                          <------ Why ㄅㄆㄇㄈ先生 no longer added a "˙" behind?
	var found; // --->                                                                                           <------ Please see reason in for-loop below.
	var foundArrIdx = -1; // Default is -1, => no matching array index found.
	//
	for (var i=1;i<zyWithOrNoToneArr.length;i++) {
		// NB: i=0 is not in use, hence must start at i=1. Why? Please refer to function convertPyZy(xPyNumOrTone) for details.
		found=false; // set/reset
		foundArrIdx=search_zyAlphabetArr(zyWithOrNoToneArr[i]); // NB: The parameter zyWithOrNoToneArr[i] can be in zhu yin with tone or no tone format.
		if (foundArrIdx != -1) {
			//
			for (var j=0;j<zyToneAoa[foundArrIdx].length;j++) { // NB: Just search zyToneAoa[foundArrIdx], not the entire zyToneAoa array.
				//
				if (zyWithOrNoToneArr[i]==zyToneAoa[foundArrIdx][j]) {
					pyNumResult+=pyNumAoa[foundArrIdx][j]+spacing;
					pyResult+=pyToneAoa[foundArrIdx][j]+spacing;
					zyResult+=zyToneAoa[foundArrIdx][j]+spacing;
					found=true;
					break;
				}
				// Says, user input: ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh Long Time No See 123 ㄅㄆㄇㄈ先生, then 'ㄅㄆㄇㄈ先生' will eventually fall to the following else-case as they are "wrong" zhu yin (thus no zhu yin match found).
				else {
					continue; // Cannot use else to do other things, only do continue, why? Because need to loop through entire zyToneAoa[foundArrIdx].length
				}             // to search for possible match. Until search through and for-loop ended, then can do the following if (!found) {...} action.
			} // for-loop ended.
			//
			// NB: As long as proper py or zy are correctly input, no ??? will appear. However if ??? appear, it can alert the user.
			// The following can capture wrong zhu yin (or zhu yin not recorded in our Tone Table) entered by user.
			if (!found) { // Better don't omit non-py-zy input, so here we capture them and show them with ???, => need not throw errors or omit such input.
				pyNumResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- No conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
				pyResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- No conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
				zyResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- As it is !found, => no conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
			}
		}
		// Says, user input: ㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˋ ㄐㄧㄢˋ Uh Long Time No See 123 ㄅㄆㄇㄈ先生, then 'Uh Long Time No See 123' will eventually fall to the following else-case as they are not zhu yin.
		else {
			if (!found) {
				//
				// The if-case below is for CEDICT data which may use · as shown:
				// 比爾·蓋茨 比尔·盖茨 [Bi3 er3 · Gai4 ci2] /Bill Gates (1955-) co-founder of Microsoft/
				// 達·芬奇 达·芬奇 [Da2 · Fen1 qi2] /Leonardo da Vinci (1452-1519) Italian Renaissance painter/
				// 馬丁·路德·金 马丁·路德·金 [Ma3 ding1 · Lu4 de2 · Jin1] /Martin Luther King Jr. (1929-1968) American clergyman and civil rights activist/
				if (zyWithOrNoToneArr[i] == "," || zyWithOrNoToneArr[i] == "·" || zyWithOrNoToneArr[i] == ".") // Added zyWithOrNoToneArr[i] == ".".
					{
					pyNumResult+=zyWithOrNoToneArr[i]+spacing;
					pyResult+=zyWithOrNoToneArr[i]+spacing;
					zyResult+=zyWithOrNoToneArr[i]+spacing;
				}
				else
					{
					pyNumResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- No conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
					pyResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- No conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
					zyResult+=zyWithOrNoToneArr[i]+"???"+spacing; // <--- As it is !found, => no conversion, => better return original zyWithOrNoToneArr[i] + "???" to alert user.
				}
			}
		}
	} // for-loop ended.
	//
	pyNumResult=pyNumResult.trim(); // the last character is spacing=" ", hence take it out.
	pyResult=pyResult.trim();
	zyResult=zyResult.trim();
	//
	// Return the results in an object with parameters as shown, => {pyNumResult,pyResult,zyResult}: <--- Use this, => just use existing var as parameters.
	return {pyNumResult:pyNumResult, pyResult:pyResult, zyResult:zyResult};
    // Use above anonymous object method (assume it will be garbage collected after exit this function?), thus not using the following resultObj method. // 20/Dec/2023
    // resultObj.pyNumResult = pyNumResult; // 20/Dec/2023
    // resultObj.pyResult = pyResult;
    // resultObj.zyResult = zyResult;
    // return resultObj;
}


function search_zyAlphabetArr(xZyWithOrNoToneStr) {
	//
	var zyWithOrNoToneStr = xZyWithOrNoToneStr;
	zyWithOrNoToneStr = zyWithOrNoToneStr.replace(/[˙]/g,""); // Clear any existing "˙". NB: Usually zhuyin light tone is shown infront, if it do and at front or back, this will clear it.
	var zyChar = zyWithOrNoToneStr.charAt(0); // Use charAt(0) to get first character for searching.
	//
	/*
	var pyAlphabet="#abcdefghijklmnopqrstuvwxyz"; // pin yin alphabet do not include #,i, u, and v, but we will include them here.
	//
	// We will create arrays from index 0 to 26 as shown below.
	//
	// Index 1 to 26 will correspond to the 26 English and 23 pin yin alphabet (for pin yin, i,u,v will not be used).
	//
	// #=0 a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8 i=9(NO i) j=10 k=11 l=12 m=13
	// n=14 o=15 p=16 q=17 r=18 s=19 t=20 u=21(NO u) v=22(No v) w=23 x=24 y=25 z=26
	//
	// The size of the above array will be 27, => says, Array = new Array(27).
	//
	// Where index 0=#,9=i,21=u,22=v will not be used, => set, Array[0]="", Array[9]="", Array[21]="" Array[22]="".
	//
	//
	var pnum=pyAlphabet.indexOf(str.charAt(0)); // if pnum not equal to -1, it will correspond to the index number of the array.
	//
	*/
	// For zhu yin, we can not use the pyAlphabet="#abcdefghijklmnopqrstuvwxyz" method, instead we have to use a equvalent method, i.e.
	// we will use the zhu yin's alphabet list stored in zyAlphabetArr array as shown below:
	//
	//
	var pnum;
	var foundArrIdx = -1; // Set.
	for (var n=0; n<zyAlphabetArr.length; n++) // use the zhu yin's alphabet list stored in zyAlphabetArr array
		{
		if (n==0 || n==9 || n==21 || n==22){continue;}
		pnum=zyAlphabetArr[n].indexOf(zyChar); // if pnum not equal to -1, a match is found in zyAlphabetArr[n].
		if (pnum!=-1)
			{
			foundArrIdx = n; // Found a match at n, and thus selected foundArrIdx = n. (NB: pnum !=1 does not => pnum = n)
			break;           // Found, so break the for-loop.
			}
		}
//
// If no matching, => the foundArrIdx will remain -1.
//
return foundArrIdx;
}


var zyAlphabetArr = new Array(27);

// ============================================================== //

// IMPT-1:	This is a zhu yin's alphabet list (38 of them) based on the tone table.
//			They are list according to the pin yin alphabet order.
//			Whereas the pin yin alphabet order is based on the English alphabet order.
//
// IMPT-2:	The zhu yin's alphabet list will be stored in zyAlphabetArr array.

// NB1: Workable and using this.
// NB2: Use zhu yin fu hao "ㄧ" instead of  "一" (Chinese character yi4).
//
// NB3: We derive the followings zhu yin's alphabet (38 of them) based on the tone table. These alphabet are unique, => appear once only.
// NB4: 兀 is extra added by stz.
// NB5: For modern zhu yin, 兀 is not used, hence they only have 37 unique zhu yin's alphabet.

// 0 --- not use
zyAlphabetArr[0] = ""; // 0 --- not use
// a
zyAlphabetArr[1] = "ㄚㄞㄢㄤㄠ";
// b
zyAlphabetArr[2] = "ㄅ";
// c
zyAlphabetArr[3] = "ㄘㄔ";
// d
zyAlphabetArr[4] = "ㄉ";
// e
zyAlphabetArr[5] = "ㄜㄝㄟㄣㄥㄦ";
// f
zyAlphabetArr[6] = "ㄈ";
// g
zyAlphabetArr[7] = "ㄍ";
// h
zyAlphabetArr[8] = "ㄏ";
// i --- not use
zyAlphabetArr[9] = ""; // i --- not use
// j
zyAlphabetArr[10] = "ㄐ";
// k
zyAlphabetArr[11] = "ㄎ";
// l
zyAlphabetArr[12] = "ㄌ";
// m
zyAlphabetArr[13] = "ㄇ";
// n
zyAlphabetArr[14] = "ㄋ兀";
// o
zyAlphabetArr[15] = "ㄛㄡ";
// p
zyAlphabetArr[16] = "ㄆ";
// q
zyAlphabetArr[17] = "ㄑ";
// r
zyAlphabetArr[18] = "ㄖ";
// s
zyAlphabetArr[19] = "ㄙㄕ";
// t
zyAlphabetArr[20] = "ㄊ";
// u --- not use
zyAlphabetArr[21] = ""; // u --- not use
// v --- not use
zyAlphabetArr[22] = ""; // v --- not use
// w
zyAlphabetArr[23] = "ㄨ";
// x
zyAlphabetArr[24] = "ㄒ";
// y
zyAlphabetArr[25] = "ㄧㄩ";
// z
zyAlphabetArr[26] = "ㄗㄓ";


// ============================================================== //

// Group 4 of 5  (User's custom Methods to use Tone Table data to get py zy conversion results)  <----- User can put their own custom Methods here (optional). // 20/Dec/2023

// ============================================================== //


// NB1: The following JavaScript codes will check whether the current html file contain the following 3 html codes for Tone Table's display and control or not:
//         (a) <form id="fmToneTable" name="fmToneTable" style="text-align:center;display:none;">...</form>
//         (b) <div id="displayTTb" style="text-align:center;"></div>
//         (c) <input type="button" value="音节表与选项 ToneTable&Choices&#9851;" name="btnToneTable" id="btnToneTable" onclick="onOffEditToneTable()">
//      If yes, then it will not auto-create & insert them to the end of current html file, => it will not duplicate them (as they are already available).
//      If not, it will auto-create & insert them to the end of current html file (after asking the user decision to do so).
//
// NB2: Why need to provide the following JavaScript codes?
//      Because all the py, zy data and functions of Tone Table method are in javascript, => they can be grouped together and saved as external JS file
//      (says, save as, pyzyToneTableMtd.js) and linked to any html file when needed.
//      => Any html file can use the Tone Table method by linking to external JS file (pyzyToneTableMtd.js).
//      But if the html file need to provide user the ability to edit the Tone Table, it must also provide the 3 html codes for Tone Table's display and
//      control, what is the easiest way to do it?
//      The answer is add the following JavaScript codes to external JS file (pyzyToneTableMtd.js) so that it can auto-add the 3 html codes needed
//      for Tone Table's display and control.
//
// NB3: Why to provide or not to provide the following JavaScript codes are optional?
//      Without them: All the functions of Tone Table method (in pyzyToneTableMtd.js) can be used but the Tone Table can not be edited.
//      With them: All the functions of Tone Table method (in pyzyToneTableMtd.js) can be used and the Tone Table can be edited.
//      => Optional, because with or without the following JavaScript codes, all the functions of Tone Table method (in pyzyToneTableMtd.js) can still be used!
//
// NB4: For simplicity, we will add the following JavaScript codes to external JS file (says, pyzyToneTableMtd.js) of Tone Table method for use.


// ============================================================== //

// Group 5 of 5 (Methods to display/view and edit Tone Table data, when it is used as external JS file)

// ============================================================== //


// NB: To make the default built-in Tone Table editable (plus view and display it), add the following code, else, need not add (=> just use the Tone Table).
//---EditOff---window.addEventListener("load", function() {chkOrCreateControl4ToneTable();}); // When file onload, it will activate function chkOrCreateControl4ToneTable(). // 12/Jan/2024.


function chkOrCreateControl4ToneTable() {
  //
  // NB1: Use onload event to call this function.
  //      => use: window.addEventListener("load", function() {chkOrCreateControl4ToneTable();});
  //
  // To view and change the default built-in Tone Table, the followings are needed during onload:
  //
  // Check to see if default built-in fmToneTable, displayTTb and btnToneTable exist or not; if yes, use them, if no, create them (so that we can use them).
  //
  if (document.getElementById("fmToneTable") && document.getElementById("displayTTb") && document.getElementById("btnToneTable")) {return;} // => yes, need not create them, just return and use them.
  //
  else { // => no, create them (so that we can use them).
    //
    // Asking user decision to add 音节表与选项 ToneTable&Choices:
    var ans = confirm ("Add extra html codes to the end of existing html file, so that it can display [ToneTable&Choices] for user to view and edit (if needed)?\n添加额外的html编码到现有html文件的尾端，以便它能够显示【音节表与选项】让使用者查看与编改（若有需要时）？\n\nTo add => Press [OK].\n要添加 => 按 [OK]。 \n\nNot to add => Press [Cancel]\n不要添加 => 按 [Cancel]。");
    if (ans == true) {} // => To add the menu, => need not do anything here.
    else {alert("Has not added the extra html codes to display [ToneTable&Choices]!\n没有添加显示【音节表与选项】的额外html编码！");return;} // => Not to add the menu, => return.
    //
    // Create fmToneTable, a <form> element, to house the selection options and textareas to display the changes made to Tone Table's py zy data:
    if (!document.getElementById("fmToneTable")) {
      var fmElem = document.createElement("form");
      fmElem.setAttribute("id","fmToneTable");
      fmElem.setAttribute("style","text-align:center;display:none;");
      var fmElemTextnode = document.createTextNode(""); // Can and thus created a blank textnode "".
      fmElem.appendChild(fmElemTextnode); // Added the textnode to fmElem.
      document.body.appendChild(fmElem); // Added the form element "fmElem" to end of body.
      //
      // As content contain in fmToneTable is quite large, it is easier to use innerHTML method to create and insert them into the <form> element.
      document.getElementById("fmToneTable").innerHTML = fmToneTableContent();
    }
    // Create displayTTb, a <div> element, for displaying the Tone Table:
    if (!document.getElementById("displayTTb")) {
      var divElem = document.createElement("div");
      divElem.setAttribute("id","displayTTb");
      divElem.setAttribute("style","text-align:center;");
      var divElemTextnode = document.createTextNode(""); // Can and thus created a blank textnode "".
      divElem.appendChild(divElemTextnode); // Added the textnode to divElem.
      document.body.appendChild(divElem); // Added the division element "divElem" to end of body.
    }
    // Simply use double-click/tap event to activate onOffEditToneTable() function, => Need not Create div4Btn and btnToneTable, so KIV the above method.
    if (!document.getElementById("btnToneTable")) {
      window.document.addEventListener("dblclick", function() {onOffEditToneTable();});
    }
    //
    // After created the above, prompt to inform user the changes made:
    alert("Has added the extra html codes to display [ToneTable&Choices]!\n已经添加了显示【音节表与选项】的额外html编码！\n\nNow you can use double-click/tap action to 'ON' or 'OFF' them.\n现在你可以用双点击的动作“打开”或“关闭”它们。");
  }
}


function fmToneTableContent() {
  //
  // As content contain in fmToneTable is quite large, => use var htmlCodes to hold them, => can use innerHTML method to insert them into the <form> element.
  // 
  var htmlCodes = '';
  htmlCodes += '       <span style="color:magenta;">音节表与选项<br />Tone Table & Choices<br /></span>';
  htmlCodes += '       <select name="selPyLightTonePos" id="selPyLightTonePos" onChange="setPyLightTonePos()" style="background-color:WhiteSmoke;">';
  htmlCodes += '          <option value="pyLtLeft">PyLightToneLeft(·a)</option>';
  htmlCodes += '          <option value="pyLtNone" selected>PyLightToneNone(a)*</option>';
  htmlCodes += '          <option value="pyLtRight">PyLightToneRight(a·)</option>';
  htmlCodes += '          <option value="pyLtLeft">拼音轻声标注左边(·a)</option>';
  htmlCodes += '          <option value="pyLtNone">拼音轻声不用标注(a)*</option>';
  htmlCodes += '          <option value="pyLtRight">拼音轻声标注右边(a·)</option>';
  htmlCodes += '       </select>';
  htmlCodes += '       <select name="selZyLightTonePos" id="selZyLightTonePos" onChange="setZyLightTonePos()" style="background-color:WhiteSmoke;">';
  htmlCodes += '          <option value="zyLtLeft" selected>ZyLightToneLeft(˙ㄚ)*</option>';
  //          <!--<option value="zyLtNone">ZyLightToneNone</option>-->
  htmlCodes += '          <option value="zyLtRight">ZyLightToneRight(ㄚ˙)</option>';
  htmlCodes += '          <option value="zyLtLeft">注音轻声标注左边(˙ㄚ)*</option>';
  //          <!--<option value="zyLtNone">注音轻声不用标注</option>-->
  htmlCodes += '          <option value="zyLtRight">注音轻声标注右边(ㄚ˙)</option>';
  htmlCodes += '       </select>';
  htmlCodes += '       <select name="selZyFirstTonePos" id="selZyFirstTonePos" onChange="setZyFirstTonePos()" style="background-color:WhiteSmoke;">';
  //          <!--<option value="zyFtLeft">ZyFirstToneLeft</option>-->
  htmlCodes += '          <option value="zyFtNone" selected>ZyFirstToneNone(ㄚ)*</option>';
  htmlCodes += '          <option value="zyFtRight">ZyFirstToneRight(ㄚˉ)</option>';
  //          <!--<option value="zyFtLeft">注音第一声标注左边</option>-->
  htmlCodes += '          <option value="zyFtNone">注音第一声不用标注(ㄚ)*</option>';
  htmlCodes += '          <option value="zyFtRight">注音第一声标注右边(ㄚˉ)</option>';
  htmlCodes += '       </select>';
htmlCodes += '<input type="button" value="关闭 Close" name="btnClose" id="btnClose" onclick="onOffEditToneTable()">';
htmlCodes += '<br />';
htmlCodes += '<textarea class="engFont" name="toneTbS1" id="toneTbS1" placeholder="When changed, the new pyNumAoa[0] to pyNumAoa[26] will list here. (* = System Default Setting)  每当更改后，新的 pyNumAoa[0] 至 pyNumAoa[26] 将罗列于此。(* = 系统默认的设定)" style="width:30%;height:100px;background-color:#CCFFFF;">';
htmlCodes += '</textarea>';
htmlCodes += '<textarea class="engFont" name="toneTbS2" id="toneTbS2" placeholder="When changed, the new pyToneAoa[0] to pyToneAoa[26] will list here. (* = System Default Setting)  每当更改后，新的 pyToneAoa[0] 至 pyToneAoa[26] 将罗列于此。(* = 系统默认的设定)" style="width:30%;height:100px;background-color:#CCFFFF;">';
htmlCodes += '</textarea>';
htmlCodes += '<textarea class="engFont" name="toneTbS3" id="toneTbS3" placeholder="When changed, the new zyToneAoa[0] to zyToneAoa[26] will list here. (* = System Default Setting)  每当更改后，新的 zyToneAoa[0] 至 zyToneAoa[26] 将罗列于此。(* = 系统默认的设定)" style="width:30%;height:100px;background-color:#CCFFFF;">';
htmlCodes += '</textarea>';
  return htmlCodes;
}
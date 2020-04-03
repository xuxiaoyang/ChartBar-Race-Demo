import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart'


//数据
const data = {
  // 11 JPN
  "Japan":[92500572,94943000,95832000,96812000,97826000,98883000,99790000,100725000,101061000,103172000,104345000,105697000,107188000,108079000,110162000,111940000,112771000,113863000,114898000,115870000,116782000,117648000,118449000,119259000,120018000,120754000,121492000,122091000,122613000,123116000,123537000,123921000,124229000,124536000,124961000,125439000,125757000,126057000,126400000,126631000,126843000,127149000,127445000,127718000,127761000,127773000,127854000,128001000,128063000,128047000,128070000,127833000,127629000,127445000,127276000,128542353,127763265,127502725,127202192,126860301,126476461],

  // 1
  "China":[ 667070000,660330000,665770000,682335000,698355000,715185000,735400000,754550000,774510000,796025000,818315000,841105000,862030000,881940000,900350000,916395000,930685000,943455000,956165000,969005000,981235000,993885000,1008630000,1023310000,1036825000,1051040000,1066790000,1084035000,1101630000,1118650000,1135185000,1150780000,1164970000,1178440000,1191835000,1204855000,1217550000,1230075000,1241935000,1252735000,1262645000,1271850000,1280400000,1288400000,1296075000,1303720000,1311020000,1317885000,1324655000,1331260000,1337705000,1344130000,1350695000,1357380000,1368810615,1406847870,1414049351,1421021791,1427647786,1433783686,1439323776],

  // 2
  "India": [450547679,459642165,469077190,478825608,488848135,499123324,509631500,520400576,531513824,543084336,555189792,567868018,581087256,594770134,608802600,623102897,637630087,652408776,667499806,682995354,698952844,715384993,732239504,749428958,766833410,784360008,801975244,819682102,837468930,855334678,873277798,891273209,909307016,927403860,945601831,963922588,982365243,1000900030,1019483581,1038058156,1056575549,1075000085,1093317189,1111523144,1129623456,1147609927,1165486291,1183209472,1200669765,1217726215,1234281170,1250288729,1265782790,1280846129,1295604184,1310152403,1324509589,1338658835,1352617328,1366417754,1380004385],

  // 3 USA
  "USA":[180671000,183691000,186538000,189242000,191889000,194303000,196560000,198712000,200706000,202677000,205052000,207661000,209896000,211909000,213854000,215973000,218035000,220239000,222585000,225055000,227225000,229466000,231664000,233792000,235825000,237924000,240133000,242289000,244499000,246819000,249623000,252981000,256514000,259919000,263126000,266278000,269394000,272657000,275854000,279040000,282162411,284968955,287625193,290107933,292805298,295516599,298379912,301231207,304093966,306771529,309326085,311580009,313874218,316057727,318386421,320742673,323071342,325147121,327167434,329064917,331002651],

  // 4 IDN
  "Indonesia":[87751068,90098394,92518377,95015297,97596733,100267062,103025426,105865571,108779924,111758563,114793178,117880144,121017314,124199687,127422211,130680727,133966941,137278058,140621730,144009845,147447836,150938232,154468229,158009246,161523347,164982451,168374287,171702763,174975954,178209150,181413402,184591903,187739786,190851175,193917462,196934260,199901228,202826446,205724592,208615169,211513823,214427417,217357793,220309469,223285676,226289470,229318262,232374245,235469762,238620563,241834215,245116206,248452413,251806402,255129004,258383256,261554226,264645886,267663435,270625568,273523615],

  // 5
  "Pakistan": [44988690,46065231,47198878,48387301,49627623,50917975,52260189,53655789,55102684,56598144,58142060,59734481,61381987,63099406,64905998,66816877,68834326,70958169,73197258,75561131,78054343,80680459,83431605,86285935,89213706,92191510,95215378,98285755,101389603,104512881,107647921,110778648,113911126,117086685,120362762,123776839,127349290,131057431,134843233,138624621,142343578,145978402,149549700,153093373,156664697,160304008,164022627,167808105,171648986,175525609,179424641,183340592,187281475,191262919,195306825,199426964,203627284,207896686,212215030,216565318,220892340],

  // 6
  "Brazil": [72179226,74311343,76514328,78772657,81064571,83373530,85696505,88035814,90387079,92746614,95113265,97482920,99859383,102259497,104706198,107216205,109790938,112425392,115121153,117878411,120694009,123570327,126498314,129448819,132383568,135274080,138108912,140891602,143627503,146328304,149003223,151648011,154259380,156849078,159432716,162019896,164614688,167209040,169785250,172318675,174790340,177196054,179537520,181809246,184006481,186127103,188167356,190130443,192030362,193886508,195713635,197514534,199287296,201035903,202763735,204471769,206163058,207833831,209469333,211049527,212559417],

  // 7 NGA
  "Nigeria":[45138458,46063563,47029822,48032934,49066760,50127921,51217973,52342233,53506196,54717039,55982144,57296983,58665808,60114625,61677177,63374298,65221378,67203128,69271917,71361131,73423633,75440502,77427546,79414840,81448755,83562785,85766399,88048032,90395271,92788027,95212450,97667632,100161710,102700753,105293700,107948335,110668794,113457663,116319759,119260063,122283850,125394046,128596076,131900631,135320422,138865016,142538308,146339977,150269623,154324933,158503197,162805071,167228767,171765769,176404902,181137448,185960289,190873311,195874740,200963599,206139589],

  // 8 BGD 孟加拉
  "Bangladesh":[48013504,49362843,50752157,52202007,53741716,55385112,57157654,59034249,60918454,62679765,64232482,65531633,66625705,67637530,68742233,70066301,71652381,73463584,75450032,77529045,79639491,81767515,83932127,86142495,88416521,90764183,93187603,95671163,98186350,100695497,103171956,105599127,107983704,110350639,112737683,115169930,117649932,120160564,122682815,125189651,127657854,130088702,132478086,134791603,136986432,139035505,140921167,142660376,144304167,145924797,147575430,149273778,151007807,152764676,154520167,156256276,157970840,159670593,161356039,163046161,164689383],

  // 9 RUS
  "Russia":[119897000,121236000,122591000,123960000,125345000,126745000,127468000,128196000,128928000,129664000,130404000,131155000,131909000,132669000,133432000,134200000,135147000,136100000,137060000,138027000,139010000,139941000,140823000,141668000,142745000,143858000,144894000,145908000,146857000,147721000,148292000,148624000,148689000,148520000,148336000,148375726,148160042,147915307,147670692,147214392,146596557,145976083,145306046,144648257,144067054,143518523,143049528,142805088,142742350,142785342,142849449,142960868,143201676,143506911,143479274,144985057,145275383,145530082,145734038,145872256,145934462],

  // 10 墨西哥
  "Mexico":[37771859,38966056,40195319,41462369,42771079,44123853,45519737,46956208,48431972,49945279,51493565,53076373,54689943,56324303,57966804,59607953,61242190,62869903,64494869,66123897,67761372,69407624,71058654,72709299,74352631,75983485,77599098,79200081,80788721,82368931,83943132,85512623,87075138,88625440,90156400,91663285,93147044,94611002,96056321,97484832,98899845,100298153,101684758,103081020,104514932,106005203,107560153,109170502,110815271,112463887,114092963,115695473,117274155,118827161,120355128,121858258,123333376,124777324,126190788,127575529,128932753],

  // 12 Ethiopia
  "Ethiopia":[22151278,22671191,23221389,23798430,24397022,25013626,25641044,26280132,26944390,27652709,28415077,29248643,30140804,31036662,31861352,32566854,33128149,33577242,33993301,34487799,35141712,35984528,36995248,38142674,39374348,40652141,41965693,43329231,44757203,46272299,47887865,49609969,51423585,53295566,55180998,57047908,58883530,60697443,62507724,64343013,66224804,68159423,70142091,72170584,74239505,76346311,78489206,80674348,82916235,85233913,87639964,90139927,92726971,95385785,98094253,100835458,103603501,106400024,109224559,112078730,114963588],

  // 13 PHL
  "Philippines":[26269734,27161047,28077339,29012625,29958688,30909988,31864182,32823968,33795194,34786305,35803594,36849675,37923396,39022767,40144248,41285742,42446653,43629412,44838483,46079850,47357743,48672838,50023563,51408912,52827040,54275822,55755355,57263836,58795001,60340767,61895160,63454786,65020116,66593904,68180859,69784088,71401749,73030884,74672014,76325927,77991755,79672873,81365258,83051971,84710542,86326250,87888675,89405482,90901965,92414158,93966780,95570047,97212638,98871552,100513138,102113212,103663927,105173264,106651922,108116615,109581078],

}

//时间线长度
const len = data[Object.keys(data)[0]].length;
//时间线数值
const time =[1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

//Bar颜色
const colors = {
  "China":"#df2812",
  "India":"#ff9933",
  "USA":"#bb3b4b",
  "Indonesia":"#ff7f7f",
  "Pakistan":"#01411c",
  "Brazil":"#009b3a",
  "Nigeria":"#008751",
  "Bangladesh":"#006a4e",
  "Russia":"#0039a6",
  "Mexico":"#734e34",
  "Japan":"#ffffff",
  "Ethiopia":"#fcdd0a",
  "Philippines":"#fcd116",
}

//长条图名称标签
const labels = {
  "China":<div style={{ textAlign: "center",fontSize: "20px",}}><div>中國 (China)</div></div>,
  "India":<div style={{ textAlign: "center",fontSize: "20px",}}><div>印度 (India)</div></div>,
  "USA":<div style={{ textAlign: "center",fontSize: "20px",}}><div>美國 (USA)</div></div>,
  "Indonesia":<div style={{ textAlign: "center",fontSize: "20px",}}><div>印尼 (Indonesia)</div></div>,
  "Pakistan":<div style={{ textAlign: "center",fontSize: "20px",}}><div>巴基斯坦 (Pakistan)</div></div>,
  "Brazil":<div style={{ textAlign: "center",fontSize: "20px",}}><div>巴西 (Brazil)</div></div>,
  "Nigeria":<div style={{ textAlign: "center",fontSize: "20px",}}><div>奈及利亞 (Nigeria)</div></div>,
  "Bangladesh":<div style={{ textAlign: "center",fontSize: "20px",}}><div>孟加拉 (Bangladesh)</div></div>,
  "Russia":<div style={{ textAlign: "center",fontSize: "20px",}}><div>俄羅斯 (Russia)</div></div>,
  "Mexico":<div style={{ textAlign: "center",fontSize: "20px",}}><div>墨西哥 (Mexico)</div></div>,
  "Japan":<div style={{ textAlign: "center",fontSize: "20px",}}><div>日本 (Japan)</div></div>,
  "Ethiopia":<div style={{ textAlign: "center",fontSize: "20px",}}><div>埃塞俄比亞 (Ethiopia)</div></div>,
  "Philippines":<div style={{ textAlign: "center",fontSize: "20px",}}><div>菲律賓 (Philippines)</div></div>,
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div className="bar">
        <BarChart
            start={true}
            data={data}
            timeline={time}
            labels={labels}
            colors={colors}
            len={len}
            timeout={800}
            delay={400}
            timelineStyle={{
              textAlign: "center",
              fontSize: "40px",
              color: "rgb(148, 148, 148)",
              marginTop: "20px",
              marginBottom: "20px"
            }}
            textBoxStyle={{
              textAlign: "right",
              color: "rgb(133, 131, 131)",
              fontSize: "15px",
            }}
            barStyle={{
              height: "30px",
              marginTop: "30px",
              borderRadius: "10px",
            }}
            width={[20, 70, 10]}
            maxItems={13}
          />

        </div>
      </header>
    </div>
    )
  }

}


export default App;

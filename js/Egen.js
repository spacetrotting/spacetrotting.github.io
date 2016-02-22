var Hemma = true;
var currentMenu = 0;
var citatnummer = 1;

/*function citat() {
    while(true){
if(citatnummer === 1)
    {
        document.getElementById("citat").innerHTML = " E = mc<sup>2</sup> ";
    } else if(citatnummer === 2)
    {
        document.getElementById("citat").innerHTML = " lalalala ";
    } else if(citatnummer === 3)
    {
        document.getElementById("citat").innerHTML = " Emil savage ";
    }
    }
}

setTimeout(citat(){
  //your code to be executed after 1 seconds
  citatnummer = citatnummer + 1;    
}, 1000);*/

function Hem() {
    "use strict";
    if (!Hemma) {
        //document.getElementById("citat").style.visibility = "visible";
        document.getElementById("underline").style.transition = "opacity 1s linear";
        document.getElementById("underline").style.opacity = 1;
        /*document.getElementById("preview").style.transition = "opacity 1s linear 1s";
        document.getElementById("preview").style.opacity = 1;*/
        
        document.getElementById("huvudmeny").style.webkitAnimationName = "faktaMenyNer";
        document.getElementById("huvudmeny").style.animationName = "faktaMenyNer";
        document.getElementById("huvudmeny").style.animationDuration = "0.5s";
        var elm = document.getElementById("huvudmeny"), newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        
        /*document.getElementById("logga").style.transition = "opacity 0.5s linear 1s";
        document.getElementById("logga").style.opacity = 1;*/
        
        // CONTENT
        document.getElementById("content").style.transition = "all 1s linear";
        document.getElementById("content").style.opacity = 0;
        document.getElementById("content").style.marginTop = "60vh";
        
        Hemma = true;
        currentMenu = 0;
    }
    
}

function LeaveHome(string) {
    "use strict";
    if (Hemma) {
        document.getElementById("underline").style.transition = "opacity 1s linear";
        document.getElementById("underline").style.opacity = 0;
        //document.getElementById("citat").style.visibility = "hidden";
        document.getElementById("logga").style.transition = "opacity 1s linear";
        document.getElementById("logga").style.opacity = 0;
        /*document.getElementById("preview").style.transition = "opacity 1s linear";
        document.getElementById("preview").style.opacity = 0;*/
    }
    
    document.getElementById("maintext").innerHTML = "Välj 'Bakgrund' eller 'Möjligheten att resa i tid'";
    
    if (string === "relativitetsteori") {
        document.getElementById("rubrik").innerHTML = "Ljusets Hastighet";
        currentMenu = 1;
        if (Hemma) {
            document.getElementById("content").style.marginTop = "60vh";
            document.getElementById("content").style.marginLeft = "10vw";
            
        }
    } else if (string === "forntidsresor") {
        document.getElementById("rubrik").innerHTML = "Svarta Hål";
        currentMenu = 2;
        if (Hemma) {
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "-95vw";
            
        }
    } else if (string === "framtidsresor") {
        document.getElementById("rubrik").innerHTML = "Maskhål";
        currentMenu = 3;
        if (Hemma) {
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "95vw";
            
        }
    } else if (string === "om") {
        document.getElementById("rubrik").innerHTML = "Om";
        currentMenu = 4;
        document.getElementById("maintext").innerHTML = "<h2>Vilka är vi?</h2><p>Vi är två elever som går sista året på gymnasiet. En av oss går naturvetenskapliga programmet och en teknikprogrammet. Naturvetaren står för informationen presenterad på webbplatsen. Teknikaren har skapat webbplatsen. Projektet är ett kombinerat gymnasiearbete mellan två olika linjer.</p>";
        
        if (Hemma) {
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "10vw";
            
        }
    }
    
    if (currentMenu === 4){
        document.getElementById("knappar").style.display = "none";
    } else {
        document.getElementById("knappar").style.display = "block";
    }
}

function Relativitetsteori() {
    "use strict";
    if (Hemma) {
        document.getElementById("huvudmeny").style.webkitAnimationName = "faktaMenyUpp";
        document.getElementById("huvudmeny").style.animationName = "faktaMenyUpp";
        document.getElementById("huvudmeny").style.animationDuration = "0.5s";
        //document.getElementById("huvudmeny").style.marginTop = "3%";
        var elm = document.getElementById("huvudmeny"), newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
 
    
        document.getElementById("content").style.transition = "all 0.7s linear 1s";
        document.getElementById("content").style.opacity = 1;
        document.getElementById("content").style.marginTop = "5vh";
        document.getElementById("content").style.marginLeft = "10vw";
        
        Hemma = false;
    }
}

function KnappBakgrund() {
    "use strict";
    switch (currentMenu) {
    case 1:
        document.getElementById("maintext").innerHTML = "<p>Enligt relativitetsteorin finns en högsta möjliga hastighet vilket är ljusets hastighet i vakuum som motsvarar 3 * 10<sup>8</sup> m/s. Ju närmare man kommer upp i ljusets hastighet, desto långsammare går tiden. Den speciella relativitetsteorin menar att ljusets hastighet är en övre hastighetsgräns för all materia. E = mc<sup>2</sup> är en känd ekvation av Einstein. Formeln påvisar att massa, m, är en form av energi, E, som kan omvandlas till andra energiformer. Detta eftersom massa och energi i denna ekvation ses som ekvivalent då ljushastigheten alltid är densamma.</p>";
        break;
    case 2:
        document.getElementById("maintext").innerHTML = "<p>Ett svart hål definieras som ett objekt som förvränger rumtiden så pass kraftigt att inte ens ljus kan slippa ut från objektets yta. Flyktfarten kallas den fart som krävs för att helt undkomma tyngdkraften från en kropp. Mindre massa och densitet ger lägre flykthastighet. Om flyktfarten är högre än ljushastigheten kan inte ens ljus släppas ut från kroppen. Det är detta som sker i svarta hål och är anledningen till att det är svårt för utomstående observatörer att se vad som pågår inuti det svarta hålet. Ju närmare man kommer en kropp, exempelvis ett svart hål, desto större blir flyktfarten. När flyktfarten överstiger ljusfarten emitteras alltså inget ljus. Händelsehorisonten är gränsen mellan övriga universum och svarta hålets inre, där ingen information kan slippa ut. Det är alltså innanför händelsehorisonten som inget ljus emitteras. Schwarzchildradien beskriver storleken av händelsehorisonten. Svarta hål varar inte i oändlighet. De större lever längre än de mindre svarta hålen.</p><p> Material som befinner sig nära det svarta hålet, men som inte faller ner i det, formar en roterande massa runt händelsehorisonten som kallas ackretionsskiva. Ingen har någonsin sett ett svart hål eller dess händelsehorisont, men ackretionsskivan kan ses. Detta beror på att de roterande partiklarna accelererar till en jättehög hastighet, på grund av gravitationskraften från det svarta hålet, och samtidigt släpper ut hetta och röntgen- samt gammastrålar när partiklarna krockar. Ackretionsskivorna kallas även kvasarer och är en ljus gloria av materia som sveper runt ett svart hål och som även ger det svarta hålet materia som den kan sluka.</p><p> Ett roterande svart hål omringas av rumtid där det är omöjligt för objekt att vara stilla på grund av den starka gravitationskraften. Regionen av rumtid som befinner sig utanför händelsehorisonten kallas ergosfären. Den här rumtiden rör sig snabbare än ljushastigheten. I ergosfären kan det vara möjligt för objekt att ta sig därifrån, men innanför, dvs. innanför händelsehorisonten, är objektet fast och kan inte rymma.</p><p> Gravitionell tidsdilation kallas det när gravitationskrafter runt det svarta hålet får objekt som befinner sig i gravitationsfältet att uppleva att tiden saktas ner.Den gravitionella tidsdilationen ges av formeln nedan. Vi tänker oss två personer, person A och person B. Person B befinner sig på stort avstånd från det svarta hålet. </p> <p>Tidsdilationen mellan person A och B kan räknas ut med den gravitionella tidsdilationsformeln. där rsch = schwarzchildradien för det svarta hålet t = tiden för person A t´ = tiden för person B r = avståndet från person A till det svarta hålet </p>";
        break;
    case 3:
        document.getElementById("maintext").innerHTML = "Motsatsen till ett svart hål är ett vitt hål. Ett svart hål drar in all materia som korsar händelsehorisonten, medan ett vitt hål fungerar som en källa där materia kastas ut från händelsehorisonten. En del tror att ett svart hål mynnar ut i ett vitt hål och att den materia som det svarta hålet drar in, skickas ut från ett vitt hål. Det svarta hålet och det vita hålet kan befinna sig med väldigt stora avstånd från varandra. Det kan vara så att de finns i olika universum. Dessa två olika typer av hål består av två olika delar av rumtid som binder till varandra via en “tunnel” som kallas Einstein-Rosen-Brygga. Ett maskhål består av både det vita och det svarta hålet samt “tunneln” däremellan. Ett maskhål är ett område av krökt rumtid med en massa energi som kan skapa “tunnlar” genom rumtid.";
        break;
    }
}

/*function KnappUtredning() {
    "use strict";
    switch (currentMenu) {
    case 1:
        document.getElementById("maintext").innerHTML = "Här kommer information om utredningen angående relativitetsteori återfinnas";
        break;
    case 2:
        document.getElementById("maintext").innerHTML = "Här kommer information om utredningen angående forntidsresor återfinnas";
        break;
    case 3:
        document.getElementById("maintext").innerHTML = "Här kommer information om utredningen angående framtidsresor återfinnas";
        break;
    }
}*/

function KnappSammanfattning() {
    "use strict";
    switch (currentMenu) {
    case 1:
        document.getElementById("maintext").innerHTML = "<p>Varje människa befinner sig inte inom samma “rumsintervall” och tiden går olika snabbt för olika observatörer som reser med olika hastigheter. Ju snabbare du färdas, desto långsammare går tiden. Dock stannar tiden vid en hastighet av ljusets. Ju närmare hastigheten hos ett föremål närmar sig ljusets hastighet, desto mer krökta längder och tidsintervall blir det. Mängden av längdkontraktionen och tidsdilationen ges av Lorentzfaktorn. </p> <p>γ ≡ 1 / (1 - (v2 / c2))<sup>1/2</sup> </p> <p> Effekten ökar exponentiellt när objektets hastighet,v, närmar sig ljusets hastighet, c.  Vid låga hastigheter sker det knappt någon tidsdilation, men om man närmar sig ljushastigheten är det mer märkbart. Om det exempelvis skulle vara möjligt att färdas i 99,5% av ljushastigheten, skulle en utomstående observatör se att klockan, hos den som färdas, rör sig ungefär 10 gånger långsammare. Uträkningar har visat att man kan leva ungefär 25 gånger längre vid en hastighet av 99,92% av ljushastigheten.</p> <p>Att färdas nära ljusets hastighet skulle teoretiskt tillåta framtidsresor eftersom tiden går långsammare då. Tiden för övriga fortsätter som innan och detta gör att du förflyttas framåt i tid. Om det vore möjligt att komma upp i en hastighet över ljusets, skulle det teoretiskt även vara möjligt att kunna genomföra forntidsresor, men vi har ännu inte lyckats komma upp över ljushastigheten. Både den speciella och den allmänna relativitetsteorin menar därmed att framtidsresor är teoretiskt möjliga, men inte forntidsresor vad gäller att resa med hjälp av ljusets hastighet.</p><p> Problemet med att komma upp i ljusets hastighet är enligt relativitetsteorin, E = mc<sup>2</sup> , att det behövs mer energi ju högre hastighet man kommer upp i. När det går mot ljusets hastighet blir energin som behövs oändligt. Det finns experimentella bevis för detta. Man har använt sig av partikelacceleratorer på ex. Fermilab och European Centre for Nuclear Research (CERN). Där har man försökt att accelerera upp partiklar till ljusets hastighet. Dock har man hittills bara kunnat få upp en partikel i 99,99% av ljusets hastighet. Men om man lyckas få upp en partikel till över ljusets hastighet kan man alltså förflytta sig bakåt i tid. Hur mycket energi man än tillför så är det inte tillräckligt för att komma upp i ljusets hastighet. Detta gäller även tidsmaskiner.</p>";
        break;
    case 2:
        document.getElementById("maintext").innerHTML = "<p>Det är väldigt stark gravitationskraft runt det svarta hålet och objekt som befinner sig i det gravitationsfältet upplever att tiden saktas ner. Det sker alltså en gravitionell tidsdilation. En utomstående upplever denna händelse som att objektet får lägre hastighet och försvinner när det faller ner i ett svart hål. Precis när objektet når händelsehorisonten, kan den inte längre ses. Detta beror på tidsdilationen.</p>" +

        "<p>Ett svart hål kan alltså förflytta föremål i tid. Tyngdkraftsfältet vid ett svart hål är så starkt att ett svart hål orsakar extremt stor tidsuttöjning. I närheten av ett svart hål går klockor mycket långsammare än i tomma rymden. I händelsehorisonten stannar klockorna nästan helt. Ju närmre man kommer ett svart hål, desto mer uttöjs tiden vilket gör att man själv upplever att man färdas fram i tiden. Med detta menas alltså att du kan resa framåt i tid om du befinner dig nära ett svart hål och ju närmre du befinner dig det svarta hålet, desto långsammare går tiden vilket gör att du reser längre fram i tiden. Den allmänna relativitetsteorin menar därmed att tidsresande kan ske via ett svart hål. Dock tillåter den endast framtidsresor och inte forntidsresor eftersom principen med att resa med hjälp av svarta hål är tidsuttöjning. Svarta hål kan inte göra tvärt om, d.v.s. förkorta tiden. Den speciella relativitetsteorin menar istället att tidsresande via svarta hål varken kan ske framåt eller bakåt då den inte tar hänsyn till gravitationen.</p>" +

        "<p>Ett annat sätt att färdas fram i tiden via ett svart hål är att utnyttja rumtiden i ergosfären. Eftersom rumtiden i ergosfären på det svarta hålet rör sig med ljusets hastighet, så kan föremål som befinner sig i ergosfären därmed förflytta sig i tid. Detta beror som tidigare nämnt på att ju snabbare du färdas, desto långsammare går tiden och du upplever att du färdas in i framtiden. Förklaringen till detta fenomen är samma förklaring som redan står beskrivet om ljusets hastighet.</p>";
        break;
    case 3:
        document.getElementById("maintext").innerHTML = "<p>Ett maskhål är en tunn “tub” av rumtid som ansluter två flata regioner långt ifrån varandra. “Tuben” kallas Einstein-Rosen-brygga och man kan tänka sig den som en tunnel som man kan resa igenom. De tunnlarna binder nämligen samman antingen två rumtidsplan eller två rumtider så att man kan resa mellan platserna på väldigt kort tid. Det fungerar som en genväg mellan platserna. Resor mellan olika rumtidsplaner kan ta dig mellan olika universa, medan resor mellan olika rumtider sker inom samma universa. Maskhål kan alltså förflytta dig mellan två olika platser och påverka din rumtid. Du upplever att tiden har gått långsammare för dig än vad den har gjort för andra. Att resa genom ett maskhål är att resa i tid.</p>" +

        "<p>För att kunna resa igenom ett maskhål måste maskhålet kunna hålla sig öppet. När ett föremål tar sig in i tunneln accelereras den infallande strålningen till mycket stora energier och denna energi kan ge ytterligare krökning av rumtiden som hotar att alldeles proppa igen tunneln. För att förhindra att detta sker måste man tillföra något som spjärnar emot gravitationen. Vanlig materia med positiv energi hjälper inte i det här fallet, då den bara skulle bidra till att gravitationen från den kröker ihop hålet ännu mer. Istället krävs motsatsen, det vill säga ett slags materia med negativ energi. Den negativa energin skulle istället hålla emot krökningen. Positiv energi ger en positiv krökning av rumtiden, medan negativ energi ger en negativ krökning av rumtiden. Detta menar i alla fall den allmänna relativitetsteorin. Den speciella relativitetsteorin motsätter denna teori då den påstår att energi alltid är positiv då den teorin inte räknar med gravitation. Därmed tillåter den allmänna relativitetsteorin tidsresande via maskhål till skillnad från den speciella relativitetsteorin som inte tillåter detta.</p>" +

        "<p>Det som behövs för att kunna resa i tid genom ett maskhål är alltså negativ energi. Den negativa energin kan bland annat finnas i regioner där energi har lånats. Ett sätt att få tag på negativ energi till maskhålet är att utnyttja svarta hål då de kan tillföra negativ energi.</p>" +

        "<p>Kvantumteorin menar att fält hela tiden fluktuerar upp och ner oavsätt om det finns något där eller är tomt i rummet. Energin där är oändlig. I ett rum kan man hitta kvanttillstånd vars energi är negativ trots att den totala energin är positiv. Detta beror på att rummet är fullt av par av virtuella partiklar som sitter ihop, glider isär och kommer tillbaka till varandra igen. Den ena partikeln i paret har positiv energi medan den andra har negativ energi. I svarta hål, nära händelsehorisonten, borde fluktuationerna ha ett överskott av negativ energi vid vakuumfluktuationerna då den negativa partikeln kan falla in i det svarta hålet medan den positiva partikeln flyr i oändligheten. Den negativa energin kan därmed hjälpa till att hålla maskhål öppna.</p>" + 

        "<p>Negativ energi kan produceras genom Casimireffekten, som är ett kvantfenomen, genom att man placerar två metallplattor väldigt nära varandra. Dessa plattor kan begränsa kvantfluktuationerna som kan uppstå mellan plattorna. Detta i sin tur leder till att energin mellan plattorna blir lägre än energin utanför plattorna. Om energin på utsidan av plattorna då inte har noll energi så gör detta att det är negativ energi innanför de två plattorna.</p>" +

        "<p>Då kan man tänka sig att ett nytt problem uppstår. Plattorna har själva en egen massa och har därmed positiv energi enligt E = mc<sup>2</sup>. Problemet kan uppstå om plattornas positiva energi är större än den negativa energin som skapats mellan plattorna. Då skulle maskhålet ändå kollapsa.</p>" +

        "<p>Om man har ett maskhål som är väldigt lång och smalt så kan det vara så att Casimireffekten även kan ske med hjälp av själva maskhålet. Att maskhålet ska vara smalt gör att effekten blir starkare då det fungerar på samma sätt som med de två metallplattorna, de ska ligga nära för att ge bra effekt. Att använda ett långt maskhål gör det lättare att stabilisera maskhålet då långa maskhål inte kräver lika mycket negativ energi som korta skulle göra.</p>" +

        "<p>Det finns dock ett till problem som kan uppstå. Casimireffekten  kan även ge maskhålet ett visst tryck som kan leda till att maskhålet blir mindre stabilt.</p>" +

        "<p>Negativ energi skulle alltså kunna hjälpa maskhålen att hållas öppna, men det finns dock risk att tunneln proppas igen om människor försöker resa genom den då människan bidrar med positiv energi.</p>" +

        "<p>Man kan inte resa till en tid innan maskhålet blev skapat. För att kunna resa bakåt i tiden via ett maskhål så krävs det att maskhålet redan skapats. Maskhålet måste alltså redan ha funnits vid den tidpunkten du vill resa tillbaka till.</p>";
        break;
    }
}

function Preview1() {
    "use strict";
    currentMenu = 1;
    document.getElementById("rubrik").innerHTML = "Bakgrund";
    LeaveHome();
    Relativitetsteori();
    KnappSammanfattning();
}

function Preview2() {
    "use strict";
    currentMenu = 2;
    document.getElementById("rubrik").innerHTML = "Forntidsresor";
    LeaveHome();
    Relativitetsteori();
    KnappSammanfattning();
}

function Preview3() {
    "use strict";
    currentMenu = 3;
    document.getElementById("rubrik").innerHTML = "Framtidsresor";
    LeaveHome();
    Relativitetsteori();
    KnappSammanfattning();
}
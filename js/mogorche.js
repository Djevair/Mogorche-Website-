// -------------------- Login Popup --------------------
const loginIcon = document.querySelector('.navigationBar i');
const loginPopup = document.querySelector('.popupModal');
const closeBtn = document.querySelector('.closeBtn');

if (loginIcon && loginPopup && closeBtn) {
  loginIcon.addEventListener('click', () => loginPopup.style.display = 'block');
  closeBtn.addEventListener('click', () => loginPopup.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === loginPopup) loginPopup.style.display = 'none';
  });
}

// -------------------- Translations --------------------
const translations = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    contact: "Contact",
    allAboutHeader: "All about Mogorche",
    mogorcheTitle: "Mogorche",
    point1: "Mogorche is a picturesque village located in Debar, North Macedonia.",
    point2: "The village is surrounded by scenic mountains, rivers, and lush forests.",
    point3: "It has a rich cultural heritage, with traditional music, dance, and local festivals.",
    point4: "Residents are known for their hospitality and strong community spirit.",
    point5: "Mogorche features a mix of historical landmarks and modern charm.",
    point6: "Seasonal events attract both locals and tourists, offering unique experiences.",
    point7: "Traditional crafts and local cuisine are an important part of daily life.",
    point8: "The village is a popular destination for hiking, nature photography, and cultural tourism.",
    point9: "Many legends and stories are preserved through oral history and folklore.",
    point10: "The village architecture reflects traditional North Macedonian style, with stone houses and historic buildings.",
    geography: "Geography",
    geographyHeader: "Mogorche's Geography",
    geographyText: "Mogorche is a picturesque village situated in the Debar region of western North Macedonia, surrounded by the Jablanica and Deshat mountain ranges. Its elevated position provides sweeping views of valleys, rivers, and dense forests that shape the area’s natural beauty. The climate is mainly continental, marked by warm, sunny summers and cold, snowy winters, offering a strong contrast between the seasons. These conditions not only support traditional agriculture but also make the village a favored spot for outdoor activities such as hiking, nature photography, and exploring the diverse flora and fauna that thrive in the region.",
    culture: "Culture",
    cultureHeader: "Mogorche's Culture",
    cultureText: "Mogorche is a village deeply rooted in tradition, where culture plays a central role in daily life. The community is known for preserving age-old customs through music, dance, and storytelling, often showcased during local festivals and gatherings. Traditional folk songs, played with instruments like the çifteli and drum, accompany lively dances that bring people of all ages together. Handcrafted textiles, woodwork, and other artisanal crafts reflect the creativity and skills passed down through generations. Hospitality is a cornerstone of Mogorche’s identity, with residents warmly welcoming guests and sharing local dishes that highlight the village’s culinary heritage. These cultural practices not only strengthen community bonds but also connect Mogorche to the broader traditions of North Macedonia.",
    history: "History",
    historyHeader: "Mogorche's History",
    historyText: "Mogorche’s history stretches back centuries, shaped by its strategic position in the Debar region and its close ties to surrounding mountain communities. The village preserves many elements of traditional North Macedonian architecture, with stone houses, narrow lanes, and historic churches that reflect both local craftsmanship and cultural resilience. Oral traditions play an important role in keeping the past alive, with legends and folktales passed down through generations, recounting stories of village life, struggles, and celebrations. Over time, Mogorche has witnessed periods of change yet managed to retain its cultural identity, blending old customs with newer influences. Today, its historical landmarks and collective memory serve as a bridge between past and present, offering insight into the enduring spirit of its people.",
    numbers: "Mogorche in Numbers",
    numbersHeader: "Mogorche in Numbers",
    numbersText: "Mogorche is a small but lively community of around 550–600 permanent residents, with numbers nearly doubling in the summer when families return from abroad. The village is characterized by its close-knit households, where everyone knows one another and shares in each other’s joys and challenges. Migration has long been part of Mogorche’s story, with many working in countries like Switzerland, Germany, and Italy, yet the heart of the community remains firmly rooted in its mountain surroundings. This balance between tradition at home and experiences abroad has given Mogorche a unique rhythm, blending village life with connections to the wider world.",
    whoWeAre: "Who We Are",
    whoWeAreHeader: "Who We Are",
    whoWeAreText: "The people of Mogorche are known for their warmth, hospitality, and strong sense of community. Social life often revolves around family gatherings, weddings, and religious holidays, when neighbors come together in celebration. The village is bilingual, with Macedonian and Albanian spoken side by side, reflecting its rich cultural blend. Music and dance remain central to community life, as traditional folk songs and the sound of the çifteli bring generations together in shared joy. These customs, along with the everyday kindness of its residents, paint a vivid picture of a village proud of its roots and open to the world.",
    funFacts: "Fun & Unique Facts",
    funFactsHeader: "Fun & Unique Facts",
    funFactsText: "Mogorche is a village full of small details and stories that make it unique. In the past, it was known for its orchards, especially pears, which gave locals their playful nickname. The arrival of electricity in the early 20th century and the first car in the 1960s were milestones that villagers still talk about today, symbols of progress in a once-isolated mountain community. Even now, Mogorche balances old and new — from lively football tournaments on the village field to evenings where elders share ghost stories and legends by the fire. These quirks and traditions weave together a portrait of a village unlike any other in the Debar region.",
    aroundVillage: "Around the Village",
    aroundVillageHeader: "Around the Village",
    aroundVillageText: "Life in Mogorche revolves around its small but essential spaces. The mosque and school form the heart of the community, while cafés and a local shop provide gathering points where neighbors exchange news and laughter. Public fountains remain important meeting spots, continuing traditions from the past when fetching water was a daily routine. The surrounding landscape offers easy escapes into nature, with trails leading to meadows, forests, and springs just a short walk away. Though modest in size, Mogorche has everything needed for a strong sense of belonging and daily connection to the land.",
    economy: "The Economy of Mogorche",
    economyHeader: "The Economy of Mogorche",
    economyText: "For centuries, the people of Mogorche relied on farming, herding, and forestry to sustain their families. Corn, beans, and vegetables filled the fields, while sheep and goats grazed the nearby hills. Woodcutting was another livelihood, with timber used for heating and construction. In recent decades, however, the economy has shifted, with many residents seeking seasonal work abroad and sending back support to their families. Despite these changes, the rhythm of village life is still tied to the land, where harvest seasons and livestock care remain important parts of the year.",
    legends: "Legends & Folklore",
    legendsHeader: "Legends & Folklore",
    legendsText: "Legends and folklore are deeply rooted in Mogorche’s identity, giving the village a sense of mystery and timelessness. One of the most famous stories is that of Elen Skok, a place named after a deer said to have leapt across a river in a single bound. Elders also speak of hidden treasures left behind in Ottoman times, guarded by spirits or snakes that ward off intruders. On quiet evenings, ghost stories and tales of strange encounters in the forests are still told, especially to children, ensuring that Mogorche’s rich imagination and oral traditions continue to live on.",
    education: "Education & Youth",
    educationHeader: "Education & Youth",
    educationText: "Education is an important part of life in Mogorche, where children attend the village primary and high schools. The local youth are ambitious and curious, dreaming of careers in medicine, engineering, teaching, and technology. Even with modern influences, traditional values remain strong, and young people often balance school, family duties, and community life. Many students pursue further education in larger towns, bringing new ideas back to the village. At the same time, the theological school in Mogorche ensures that religious knowledge and cultural traditions are passed to the next generation, blending modern aspirations with heritage.",
    food: "Food & Beverages",
    foodHeader: "Food & Beverages",
    foodText: "The flavors of Mogorche tell a story of local tradition and hospitality. Residents enjoy homemade dishes like pita stuffed with fresh vegetables or minced meat, tiganici fried to a golden crisp, and jufki pasta prepared in family batches each year. Pastrma, salted and dried sheep meat, is a winter favorite served with beans and fresh bread, while sarma rolls offer comfort and warmth during holidays. Meals are often shared with family and visitors, reinforcing the village’s culture of generosity and community. Cafés also offer small daily gatherings, where coffee, tea, and conversation are as much a part of the village’s nourishment as the food itself.",
    flora: "Flora & Fauna",
    floraHeader: "Flora & Fauna",
    floraText: "Mogorche is surrounded by rich forests, meadows, and valleys that support a diverse array of animals and plants. Cats and dogs roam the village freely, cared for by villagers who have a deep bond with them. Cows, sheep, and goats provide fresh milk, cheese, and wool for local households, while horses remain useful for transporting wood and navigating mountain paths. Occasionally, bears and other wildlife are spotted at the edges of the village, reminding residents of the untamed beauty nearby. Wildflowers, fruit trees, and lush pastures add color and life to the landscape, making Mogorche a place where people and nature live closely together.",
    architecture: "Architecture & Homes",
    architectureHeader: "Architecture & Homes",
    architectureText: "The village of Mogorche is a mix of old and new, where traditional stone houses sit alongside more modern constructions. Many older homes date back over a century, maintained carefully by families who preserve the original layout and craftsmanship. These homes reflect the village’s history, with thick walls, small windows, and wooden beams that tell stories of generations past. Newer homes are built with contemporary designs and materials but often retain elements of traditional architecture, blending harmoniously with their surroundings. Together, these homes form a villagescape that honors both heritage and modernity.",
    landmarks: "Landmarks",
    landmarksHeader: "Landmarks",
    landmarksText: "Mogorche is dotted with landmarks that hold cultural, historical, and natural significance. The Kevser Mosque is at the heart of village life, a place of worship and gathering. Old bridges and fountains stand as reminders of past generations, while viewpoints offer panoramic vistas of the surrounding mountains and valleys. Each landmark is tied to stories, legends, and daily life, creating a sense of continuity and shared identity. Visitors are encouraged to explore these sites, as they tell the tale of Mogorche through architecture, nature, and community.",
    contactInfoHeader: "Contact Info",
    email: "Email: dzekoavmedoski@yahoo.com",
    phone: "Phone: +389 75 945 602",
    address: "Address: Mogorche, Debar, North Macedonia",
    hours: "Hours: Mon–Fri, 09:00–17:00",
    connect: "Connect",
    loginComingSoon: "Login Coming Soon",
    stayTuned: "Stay tuned — we're planning on adding a login section for administrators and users!"
  },
  mk: {
    home: "Дома",
    aboutUs: "За нас",
    contact: "Контакт",
    geography: "Географија",
    allAboutHeader: "Сè за Могорче",
    mogorcheTitle: "Могорче",
    point1: "Могорче е живописно село сместено во Дебар, Северна Македонија.",
    point2: "Селото е опкружено со живописни планини, реки и густи шуми.",
    point3: "Има богато културно наследство, со традиционална музика, танцови и локални фестивали.",
    point4: "Жителите се познати по својата гостопримливост и силниот заеднички дух.",
    point5: "Могорче комбинира историски знаменитости и современ шарм.",
    point6: "Сезонските настани привлекуваат локални жители и туристи, нудејќи уникатни искуства.",
    point7: "Традиционалните занаети и локалната кујна се важен дел од секојдневниот живот.",
    point8: "Селото е популарна дестинација за планинарење, фотографирање на природата и културен туризам.",
    point9: "Многу легенди и приказни се зачувани преку усна историја и фолклор.",
    point10: "Архитектурата на селото го одразува традиционалниот северномакедонски стил, со камени куќи и историски згради.",
    geographyHeader: "Географија на Могорче",
    geographyText: "Могорче е живописно село сместено во регионот Дебар во западна Северна Македонија, опкружено со планинските венци Јабланица и Дешат. Неговата висока положба нуди широки погледи кон долини, реки и густи шуми кои ја обликуваат природната убавина на регионот. Климатата е претежно континентална, со топли, сончеви лета и студени, снежни зими, нудејќи силен контраст помеѓу сезоните. Овие услови не само што ја поддржуваат традиционалната земјоделска активност, туку и го прават селото популарно место за активности на отворено како пешачење, фотографирање на природата и истражување на разновидната флора и фауна во регионот.",
    culture: "Култура",
    cultureHeader: "Културата на Могорче",
    cultureText: "Могорче е село длабоко вкоренето во традицијата, каде културата игра централна улога во секојдневниот живот. Заедницата е позната по зачувување на старите обичаи преку музика, танц и раскажување приказни, често прикажувани за време на локални фестивали и собирања. Традиционалните народни песни, изведувани со инструменти како џифтели и тапани, придружуваат живи ора што ги собираат луѓето од сите генерации. Рачно изработените ткаенини, дрвени предмети и други занаетчиски изработки ја одразуваат креативноста и вештините пренесени низ генерации. Гостопримството е столб на идентитетот на Могорче, каде жителите топло ги примаат гостите и споделуваат локални јадења што го истакнуваат кулинарското наследство на селото. Овие културни практики ја зајакнуваат заедницата и го поврзуваат Могорче со пошироките традиции на Северна Македонија.",
    history: "Историја",
    historyHeader: "Историјата на Могорче",
    historyText: "Историјата на Могорче се протега со векови, обликувана од неговата стратешка положба во регионот Дебар и блиските врски со околните планински заедници. Селото ја зачувува традиционалната архитектура на Северна Македонија, со камени куќи, тесни улички и историски цркви што ја одразуваат локалната изработка и културната издржливост. Усната традиција игра важна улога во зачувувањето на минатото, со легенди и приказни пренесувани низ генерации, раскажувајќи за животот во селото, тешкотии и прослави. Со текот на времето, Могорче доживеало периоди на промени, но успеало да го зачува својот културен идентитет, спојувајќи стари обичаи со нови влијанија. Денес, неговите историски обележја и колективната меморија служат како мост помеѓу минатото и сегашноста, нудејќи увид во издржливиот дух на неговите жители.",
    numbers: "Могорче во бројки",
    numbersHeader: "Могорче во бројки",
    numbersText: "Могорче е мала, но жива заедница со околу 550–600 постојани жители, со бројки кои скоро се удвојуваат во летото кога семејствата се враќаат од странство. Селото се карактеризира со блиски семејства, каде сите се познаваат и го споделуваат меѓусебниот радости и предизвици. Миграцијата долго време е дел од приказната на Могорче, со многу жители кои работат во земји како Швајцарија, Германија и Италија, но срцето на заедницата останува цврсто вкоренето во планинската околина. Овој баланс помеѓу традицијата дома и искуствата од странство ѝ дава уникатен ритам на Могорче, спојувајќи го животот во селото со поврзаноста со поширокиот свет.",
    whoWeAre: "Кои сме ние",
    whoWeAreHeader: "Кои сме ние",
    whoWeAreText: "Жителите на Могорче се познати по својата топлина, гостопримство и силно чувство за заедница. Социјалниот живот често се врти околу семејни собирања, свадби и верски празници, кога соседите се собираат заедно. Селото е двојазично, со македонски и албански јазик, што ја отсликува неговата богата културна мешавина. Музиката и танцот остануваат централни во заедничкиот живот, додека традиционалните народни песни и звукот на џифтелата ги обединуваат генерациите во заедничка радост. Овие обичаи, заедно со секојдневната добрина на жителите, создаваат живописна слика на село гордо на своите корени и отворено кон светот.",
    funFacts: "Забавни и уникатни факти",
    funFactsHeader: "Забавни и уникатни факти",
    funFactsText: "Могорче е село полно со мали детали и приказни што го прават уникатно. Во минатото беше познато по овоштарниците, особено крушите, што им донесе на локалните жители забавно прекар. Дојдењето на струја во почетокот на 20-тиот век и првиот автомобил во 1960-тите беа важни моменти што жителите сè уште ги спомнуваат, симболи на напредок во некогаш изолирана планинска заедница. Дури и денес, Могорче балансира меѓу старото и новото — од живописни фудбалски турнири на селското игралиште до вечери кога постарите раскажуваат приказни за духови и легенди покрај огнот.",
    aroundVillage: "Околу селото",
    aroundVillageHeader: "Околу селото",
    aroundVillageText: "Животот во Могорче се врти околу неговите мали, но важни простори. Џамијата и училиштето го формираат срцето на заедницата, додека кафеаните и локалната продавница обезбедуваат точки за собирање каде соседите разменуваат вести и смеа. Јавните чешми остануваат важни места за средба, продолжувајќи ги традициите од минатото кога земањето вода беше дневна рутина. Околниот пејзаж нуди лесни патеки во природата, со патеки што водат до ливади, шуми и извори само на кратка прошетка. Иако скромно по големина, Могорче има сè што е потребно за силно чувство на припадност и секојдневна врска со земјата.",
    economy: "Економија на Могорче",
    economyHeader: "Економија на Могорче",
    economyText: "Со векови, жителите на Могорче се потпирале на земјоделство, сточарство и шумарство за да ги издржуваат семејствата. Полињата беа исполнети со пченка, грав и зеленчук, додека овците и козите пасеа на околните ридови. Сечењето дрва беше уште еден извор на приход, со дрвото користено за греење и градежни работи. Во последните децении, економијата се смени, со многу жители кои бараат сезонска работа во странство и испраќаат помош на семејствата. И покрај овие промени, ритамот на животот во селото сè уште е поврзан со земјата, каде сезоните на жетва и грижата за добитокот остануваат важни делови од годината.",
    legends: "Легенди и фолклор",
    legendsHeader: "Легенди и фолклор",
    legendsText: "Легендите и фолклорот се длабоко вкоренети во идентитетот на Могорче, давајќи му чувство на мистерија и безвременост. Една од најпознатите приказни е онаа за Елен Скок, место именувано по елен кој се рекло дека прескокнал река во еден скок. Пожолтениците исто така зборуваат за скриени богатства оставени во Отомански времиња, чувани од духови или змии кои ги држат навлегувачите подалеку. Во тивките вечери, приказните за духови и чудни настани во шумите сè уште се раскажуваат, особено на децата, обезбедувајќи продолжување на богатата имагинација и усната традиција на Могорче.",
    education: "Образование и млади",
    educationHeader: "Образование и млади",
    educationText: "Образованието е важен дел од животот во Могорче, каде децата посетуваат основно и средно училиште. Локалната младина е амбициозна и љубопитна, со соништа за кариери во медицина, инженерство, наставништво и технологија. Дури и со современи влијанија, традиционалните вредности остануваат силни, а младите често балансираат училиште, семејни обврски и заеднички живот. Многу студенти продолжуваат понатамошно образование во поголеми градови, носејќи нови идеи назад во селото. Истовремено, теолошкото училиште во Могорче обезбедува пренесување на религиозното знаење и културните традиции на следната генерација, спојувајќи модерни аспирации со наследството.",
    food: "Храна и пијалаци",
    foodHeader: "Храна и пијалаци",
    foodText: "Вкусовите на Могорче раскажуваат приказна за локалната традиција и гостопримство. Жителите уживаат во домашни јадења како пита полнета со свеж зеленчук или мелено месо, тиганици пржени до златна кора и јуфки паста подготвувана во семејни количини секоја година. Пастрма, солено и сушено овчо месо, е омилен зимски специјалитет сервиран со грав и свеж леб, додека сарма ролни нудат удобност и топлина за време на празниците. Оброците често се споделуваат со семејството и посетителите, зајакнувајќи ја културата на дарежливост и заедништво. Кафетериите исто така нудат мали дневни собирања, каде кафе, чај и разговор се дел од секојдневното живеење во селото.",
    flora: "Флора и фауна",
    floraHeader: "Флора и фауна",
    floraText: "Могорче е опкружено со богати шуми, ливади и долини кои поддржуваат разновиден свет на животни и растенија. Мачки и кучиња се движат слободно низ селото, грижени од жителите кои имаат длабока врска со нив. Крави, овци и кози обезбедуваат свежо млеко, сирење и волна за локалните домаќинства, додека коњите остануваат корисни за транспорт на дрва и движење по планинските патеки. Повремено, мечки и друга дива фауна се забележуваат на периферијата на селото, потсетувајќи ги жителите на нетакнатата убавина во близина. Диви цветови, овошни дрвја и богати пасишта додаваат боја и живот на пејзажот, правејќи го Могорче место каде луѓето и природата живеат блиску едни со други.",
    architecture: "Архитектура и домови",
    architectureHeader: "Архитектура и домови",
    architectureText: "Селото Могорче е мешавина на старо и ново, каде традиционалните камени куќи стојат покрај модерни градби. Многу постари куќи датираат повеќе од еден век, внимателно одржувани од семејства кои ја зачувуваат оригиналната поставеност и изработка. Овие куќи ја одразуваат историјата на селото, со дебели ѕидови, мали прозорци и дрвени греди кои раскажуваат приказни за минатите генерации. Новите домови се изградени со современ дизајн и материјали, но често ја задржуваат традиционалната архитектура, хармонично се вклопувајќи во околината. Заедно, овие домови создаваат сликата на село што го почитува наследството и современоста.",
    landmarks: "Знаци и обележја",
    landmarksHeader: "Знаци и обележја",
    landmarksText: "Могорче е испрскано со обележја кои имаат културно, историско и природно значење. Џамијата Кевсер е во срцето на животот во селото, место за богослужба и собирање. Старите мостови и чешми стојат како потсетници на минатите генерации, додека видиковците нудат панорамски погледи на околните планини и долини. Секое обележје е поврзано со приказни, легенди и секојдневниот живот, создавајќи чувство на континуитет и заеднички идентитет. Посетителите се охрабруваат да ги истражуваат овие места, бидејќи тие ја раскажуваат приказната на Могорче преку архитектурата, природата и заедницата.",
    contactInfoHeader: "Контакт информации",
    email: "Е-пошта: dzekoavmedoski@yahoo.com",
    phone: "Телефон: +389 75 945 602",
    address: "Адреса: Могорче, Дебар, Северна Македонија",
    hours: "Работно време: Пон–Пет, 09:00–17:00",
    connect: "Поврзи се",
    loginComingSoon: "Логирањето наскоро",
    stayTuned: "Следете не — планираме да додадеме логирање за администратори и корисници!"
  },
  sq: {
    home: "Ballina",
    aboutUs: "Rreth Nesh",
    contact: "Kontakti",
    allAboutHeader: "Të gjitha rreth Mogorçes",
    mogorcheTitle: "Mogorche",
    point1: "Mogorche është një fshat piktoresk i vendosur në Dibër, Maqedonia e Veriut.",
    point2: "Fshati është i rrethuar nga male piktoreske, lumenj dhe pyje të dendur.",
    point3: "Ka një trashëgimi të pasur kulturore, me muzikë tradicionale, kërcim dhe festivale lokale.",
    point4: "Banorët janë të njohur për mikpritjen dhe frymën e fortë komunitare.",
    point5: "Mogorche ofron një kombinim të objekteve historike dhe bukurisë moderne.",
    point6: "Ngjarjet sezonale tërheqin vendas dhe turistë, duke ofruar eksperienca unike.",
    point7: "Artizanati tradicional dhe kuzhina lokale janë pjesë e rëndësishme e jetës së përditshme.",
    point8: "Fshati është një destinacion i njohur për shëtitje, fotografi natyrore dhe turizëm kulturor.",
    point9: "Shumë legjenda dhe tregime ruhen përmes historisë gojore dhe folklorit.",
    point10: "Arkitektura e fshatit pasqyron stilin tradicional të Maqedonisë së Veriut, me shtëpi prej guri dhe ndërtesa historike.",
    geography: "Gjeografia",
    geographyHeader: "Gjeografia e Mogorçes",
    geographyText: "Mogorça është një fshat piktoresk i vendosur në rajonin e Dibrës në Maqedoninë Perëndimore, i rrethuar nga malet Jabllanica dhe Dešat. Pozicioni i tij i lartë ofron pamje të gjera mbi lugina, lumenj dhe pyje të dendur që formojnë bukurinë natyrore të rajonit. Klima është kryesisht kontinentale, me vera të ngrohta dhe të diellta dhe dimra të ftohtë dhe me borë, duke krijuar një kontrast të fortë midis stinëve. Këto kushte jo vetëm që mbështesin aktivitetin tradicional bujqësor, por e bëjnë fshatin edhe një vend tërheqës për aktivitete në natyrë si shëtitjet, fotografimi i natyrës dhe eksplorimi i florës dhe faunës së larmishme të rajonit.",
    culture: "Kultura",
    cultureHeader: "Kultura e Mogorçes",
    cultureText: "Mogorça është një fshat i thellë në traditë, ku kultura luan një rol qendror në jetën e përditshme. Komuniteti është i njohur për ruajtjen e zakoneve të vjetra përmes muzikës, kërcimit dhe tregimeve, shpesh të shfaqura gjatë festivaleve lokale dhe mbledhjeve. Këngët tradicionale popullore, të shoqëruara me instrumente si çiftelia dhe daullja, shoqërojnë orat e gjalla që mblidhen nga të gjitha gjeneratat. Punimet artizanale, si tekstilet e punuara me dorë dhe objektet prej druri, pasqyrojnë kreativitetin dhe aftësitë e transmetuara ndër breza. Mikpritja është shtylla e identitetit të Mogorçes, ku banorët mirëpresin ngrohtësisht vizitorët dhe ndajnë gatimet lokale që theksojnë trashëgiminë kulinare të fshatit. Këto praktika kulturore forcojnë komunitetin dhe lidhin Mogorcën me traditat më të gjera të Maqedonisë.",
    history: "Historia",
    historyHeader: "Historia e Mogorçes",
    historyText: "Historia e Mogorçes shtrihet për shekuj, e formuar nga pozicioni strategjik në rajonin e Dibrës dhe lidhjet me komunitetet malore përreth. Fshati ruan arkitekturën tradicionale maqedonase, me shtëpi prej guri, rrugica të ngushta dhe kishëra historike që reflektojnë punën dhe qëndrueshmërinë kulturore lokale. Tradita gojore ka një rol të rëndësishëm në ruajtjen e së shkuarës, me legjenda dhe tregime të transmetuara ndër breza, duke rrëfyer për jetën në fshat, vështirësitë dhe festimet. Me kalimin e kohës, Mogorça ka kaluar periudha ndryshimesh, por ka arritur të ruajë identitetin e saj kulturor, duke kombinuar zakonet e vjetra me ndikimet e reja. Sot, objektet historike dhe memoria kolektive shërbejnë si një urë midis së shkuarës dhe së tashmes, duke ofruar një vështrim në shpirtin e qëndrueshëm të banorëve të tij.",
    numbers: "Mogorça në shifra",
    numbersHeader: "Mogorça në shifra",
    numbersText: "Mogorça është një komunitet i vogël, por i gjallë me rreth 550–600 banorë të përhershëm, me numra që pothuajse dyfishohen gjatë verës kur familjet kthehen nga jashtë. Fshati karakterizohet nga familje të afërta, ku të gjithë njihen dhe ndajnë gëzimet dhe sfidat e përditshme. Migracioni ka qenë gjithmonë pjesë e historisë së Mogorçes, me shumë banorë që punojnë në vende si Zvicra, Gjermania dhe Italia, por zemra e komunitetit mbetet e rrënjosur fort në mjedisin malor. Ky balancim midis traditës vendase dhe eksperiencave jashtë vendit i jep Mogorçes një ritëm unik, duke lidhur jetën e fshatit me botën më të gjerë.",
    whoWeAre: "Kush jemi ne",
    whoWeAreHeader: "Kush jemi ne",
    whoWeAreText: "Banorët e Mogorçes janë të njohur për ngrohtësinë, mikpritjen dhe ndjenjën e fortë të komunitetit. Jeta sociale shpesh rrotullohet rreth mbledhjeve familjare, dasmave dhe festave fetare, ku fqinjët bashkohen. Fshati është dygjuhësh, me maqedonisht dhe shqip, duke reflektuar përzierjen e pasur kulturore. Muzika dhe kërcimi mbeten qendrore në jetën e përbashkët, ndërsa këngët dhe tingulli i çiftelisë bashkojnë gjeneratat në gëzim të përbashkët. Këto zakone, së bashku me mirësinë e përditshme të banorëve, krijojnë një pamje të gjallë të një fshati krenar për rrënjët e tij dhe i hapur ndaj botës.",
    funFacts: "Fakte të këndshme dhe unike",
    funFactsHeader: "Fakte të këndshme dhe unike",
    funFactsText: "Mogorça është një fshat i mbushur me detaje dhe tregime të vogla që e bëjnë unik. Në të kaluarën ishte i njohur për kopshtet e tij, veçanërisht dardhat, që i dhanë banorëve mbiemra të dashur. Ardhja e energjisë elektrike në fillim të shekullit 20 dhe makina e parë në vitet 1960 ishin momente të rëndësishme që banorët ende i kujtojnë, si simbole të përparimit në një komunitet dikur të izoluar malor. Edhe sot, Mogorça balancon mes të vjetrës dhe të resë — nga turnetë e futbollit në fushën lokale deri te mbrëmjet kur të moshuarit tregojnë tregime për shpirtra dhe legjenda pranë zjarrit.",
    aroundVillage: "Rreth fshatit",
    aroundVillageHeader: "Rreth fshatit",
    aroundVillageText: "Jeta në Mogorçë rrotullohet rreth hapësirave të vogla, por të rëndësishme. Xhamia dhe shkolla formojnë zemrën e komunitetit, ndërsa kafeteritë dhe dyqani lokal ofrojnë pika për tubim ku fqinjët shkëmbejnë lajme dhe të qeshura. Burimet publike mbeten vende të rëndësishme për takime, duke vazhduar traditat kur marrja e ujit ishte rutinë e përditshme. Peizazhi përreth ofron shtigje të lehta në natyrë, duke çuar në livadhe, pyje dhe burime vetëm pak minuta larg. Megjithëse modest në madhësi, Mogorça ka gjithçka që nevojitet për një ndjenjë të fortë përkatësie dhe lidhje të përditshme me tokën.",
    economy: "Ekonomia e Mogorçes",
    economyHeader: "Ekonomia e Mogorçes",
    economyText: "Për shekuj me radhë, banorët e Mogorçes kanë mbështetur jetesën në bujqësi, blegtoral dhe pylltarësi. Fushat ishin të mbushura me misër, fasule dhe perime, ndërsa delet dhe dhitë kullosnin në kodrat përreth. Shkurtimi i drurit ishte një tjetër burim të ardhurash, me drurin e përdorur për ngrohje dhe ndërtim. Gjatë dekadave të fundit, ekonomia ka ndryshuar, me shumë banorë që kërkojnë punë sezionale jashtë vendit dhe dërgojnë ndihma në familjet e tyre. Megjithatë, ritmi i jetës në fshat mbetet i lidhur me tokën, ku stinët e korrjes dhe kujdesi për bagëtinë janë ende pjesë të rëndësishme të vitit.",
    legends: "Legjenda dhe folklori",
    legendsHeader: "Legjenda dhe folklori",
    legendsText: "Legjendat dhe folklori janë të thellë të rrënjosura në identitetin e Mogorçes, duke i dhënë një ndjenjë misteri dhe përjetësie. Një nga tregimet më të njohura është ajo e Elen Skok, një vend emërtuar sipas një dheni që thuhej se kishte kapërcyer lumin me një hap të vetëm. Legjendat gjithashtu flasin për pasuri të fshehura të lëna gjatë kohës Osmane, ruajtura nga shpirtrat ose gjarpërinjtë që mbanin të huajt larg. Në mbrëmjet e qeta, tregimet për shpirtra dhe ngjarje të çuditshme në pyje ende tregohen, veçanërisht për fëmijët, duke siguruar vazhdimësinë e imagjinatës së pasur dhe traditës gojore të Mogorçes.",
    education: "Arsim dhe të rinjtë",
    educationHeader: "Arsim dhe të rinjtë",
    educationText: "Arsimi është një pjesë e rëndësishme e jetës në Mogorçë, ku fëmijët ndjekin shkollën fillore dhe të mesme. Të rinjtë lokalë janë ambiciozë dhe kuriozë, me ëndrra për karriera në mjekësi, inxhinieri, mësimdhënie dhe teknologji. Edhe me ndikime moderne, vlerat tradicionale mbeten të forta, dhe të rinjtë shpesh balancojnë shkollën, detyrimet familjare dhe jetën komunitare. Shumë studentë vazhdojnë arsimimin e mëtejshëm në qytete më të mëdha, duke sjellë ide të reja në fshat. Ndërkohë, shkolla teologjike në Mogorçë ofron transmetimin e njohurive fetare dhe traditave kulturore tek brezi i ri, duke bashkuar aspiratat moderne me trashëgiminë.",
    food: "Ushqim dhe pijet",
    foodHeader: "Ushqim dhe pijet",
    foodText: "Shijet e Mogorçes tregojnë historinë e traditës lokale dhe mikpritjes. Banorët shijojnë gatime shtëpiake si pite të mbushura me perime të freskëta ose mish të bluajtur, tiganica të skuqura deri në një kore të artë dhe pasta të përgatitura në sasi familjare çdo vit. Pastrma, mish i konservuar dhe i tharë i deleve, është një specialitet i preferuar dimëror, shërbyer me fasule dhe bukë të freskët, ndërsa sarmalët ofrojnë ngrohtësi dhe rehati gjatë festave. Ushqimet shpesh ndahen me familjen dhe vizitorët, duke forcuar kulturën e bujarisë dhe bashkëjetesës. Kafeteritë gjithashtu ofrojnë mbledhje të vogla ditore, ku kafeja, çaji dhe biseda janë pjesë e përditshme e jetës në fshat.",
    flora: "Flora dhe fauna",
    floraHeader: "Flora dhe fauna",
    floraText: "Mogorça është e rrethuar nga pyje të pasura, livadhe dhe lugina që mbështesin një botë të ndryshme kafshësh dhe bimësh. Macet dhe qenjtë lëvizin lirshëm në fshat, kujdesur nga banorët që kanë një lidhje të thellë me ta. Kërpudhat, delet dhe dhitë sigurojnë qumësht të freskët, djathë dhe lesh për shtëpitë lokale, ndërsa kalërimi mbetet i dobishëm për transportin e drurit dhe lëvizjen në shtigjet malore. Ndonjëherë, arinjtë dhe fauna të tjera të egra shfaqen në periferi të fshatit, duke kujtuar banorët për bukurinë e paprekur përreth. Lule të egra, pemë frutore dhe livadhe të pasura japin ngjyra dhe jetë peizazhit, duke bërë Mogorçen një vend ku njerëzit dhe natyra jetojnë afër njëri-tjetrit.",
    architecture: "Arkitektura dhe shtëpitë",
    architectureHeader: "Arkitektura dhe shtëpitë",
    architectureText: "Fshati Mogorça është një përzierje e vjetër dhe e re, ku shtëpitë tradicionale prej guri qëndrojnë pranë ndërtimeve moderne. Shumë shtëpi të vjetra datojnë më shumë se një shekull, të mirëmbajtura me kujdes nga familjet që ruajnë vendosjen dhe ndërtimin origjinal. Këto shtëpi pasqyrojnë historinë e fshatit, me mure të trasha, dritare të vogla dhe drunj që tregojnë historinë e brezave të kaluar. Shtëpitë e reja janë ndërtuar me dizajn modern dhe materiale bashkëkohore, por shpesh ruajnë arkitekturën tradicionale, duke u përshtatur harmonikisht me mjedisin. Së bashku, këto shtëpi krijojnë pamjen e një fshati që respekton trashëgiminë dhe modernitetin.",
    landmarks: "Objekte dhe pika referimi",
    landmarksHeader: "Objekte dhe pika referimi",
    landmarksText: "Mogorça është e mbushur me pika referimi me rëndësi kulturore, historike dhe natyrore. Xhamia Kevser është në zemër të jetës së fshatit, një vend për lutje dhe takime. Ura dhe burimet e vjetra qëndrojnë si kujtesa të brezave të kaluar, ndërsa vendet me pamje panoramike ofrojnë pamje mbi malet dhe luginat përreth. Çdo objekt është i lidhur me tregime, legjenda dhe jetën e përditshme, duke krijuar një ndjenjë vazhdimësie dhe identiteti të përbashkët. Vizitorët inkurajohen të eksplorojnë këto vende, pasi tregojnë historinë e Mogorçes përmes arkitekturës, natyrës dhe komunitetit.",
    contactInfoHeader: "Informacione Kontakti",
    email: "Email: dzekoavmedoski@yahoo.com",
    phone: "Telefon: +389 75 945 602",
    address: "Adresa: Mogorche, Debar, Maqedonia e Veriut",
    hours: "Orari: Hën–Prem, 09:00–17:00",
    connect: "Lidhu",
    loginComingSoon: "Hyrja së shpejti",
    stayTuned: "Qëndroni të lidhur — po planifikojmë të shtojmë hyrje për administratorë dhe përdorues!"
  }
};

// -------------------- Apply Translations --------------------
function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    const text = translations[lang][key];
    if (!text) return;

    if (el.tagName === "TITLE") {
      document.title = text;
    } else if (el.tagName === "BUTTON") {
      const icon = el.querySelector("i");
      el.textContent = text;
      if (icon) el.appendChild(icon);
    } else {
      el.textContent = text;
    }
  });
}

// -------------------- Language Selector --------------------
const customSelect = document.getElementById("customSelect");
const selected = customSelect.querySelector(".selected");
const options = customSelect.querySelector(".options");
const optionItems = customSelect.querySelectorAll(".options li");

// Toggle dropdown
selected.addEventListener("click", () => {
  options.classList.toggle("show");
});

// Select option and save to localStorage
optionItems.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.value;
    localStorage.setItem("lang", lang); // Save selection
    applyTranslations(lang);

    selected.innerHTML = option.innerHTML; // update dropdown display
    options.classList.remove("show");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    options.classList.remove("show");
  }
});

// -------------------- Initialize Language on Load --------------------
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en"; // default English
  applyTranslations(savedLang);

  // Update dropdown display
  const activeOption = [...optionItems].find(opt => opt.dataset.value === savedLang);
  if (activeOption) selected.innerHTML = activeOption.innerHTML;
});

// -------------------- Collapsibles --------------------
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const arrow = button.querySelector("i");
    if (arrow) arrow.classList.toggle("rotated");

    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

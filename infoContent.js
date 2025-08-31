function createParagraph(text) {
  const p = document.createElement('p');
  p.innerHTML = text;
  p.classList.add("paragraphStyle");
  return p;
}

const infoData = {
  geoHis: {
    title: "Geographical & Historical Facts",
    paragraphs: [
      "Area: 2km² Mogorche is a compact mountain village, occupying just 2 square kilometers of land, making it easy to explore on foot while offering beautiful panoramic views from nearly every corner.",
      "Elevation: 1,024.7 meters above sea level – Situated high in the western Macedonian mountains, Mogorche enjoys crisp air, cooler summers, and snowy winters typical of alpine environments.",
      "First Mentioned: 1467 (Ottoman Defter) – Although first officially recorded in the 15th century in an Ottoman tax register, archaeological studies suggest that the village area was inhabited as early as the Late Antiquity era (circa 3rd–7th century AD), indicating a rich and long-standing human presence.",
      "Postal Code: 1250 – Mogorche falls under the postal region of Debar Municipality, using the same code for both mail delivery and administrative purposes.",
      "Origins: While official records date back to the Ottoman era, the village's true roots stretch into Late Antiquity. Evidence of ancient habitation, including tools, ceramics, and remnants of earlier settlements, indicate the area was continuously occupied for centuries before formal documentation.",
      "Traditional Homes: Typical village homes are built from locally sourced stone, with sturdy wooden beams and sloped red-tile roofs, designed to withstand the mountain climate. These houses often feature inner courtyards, storage cellars, and wooden balconies – a fine example of traditional Macedonian rural architecture.",
      "Oldest Building: The Kevser Mosque is the oldest known structure in Mogorche. Though it has undergone several renovations over time, it still preserves its historical character and spiritual importance. The mosque stands as a symbol of the village’s cultural continuity and diverse religious history.",
      "Nearby Places:<ul><li>Debar (~16 km) – A historical town known for its Ottoman-era architecture and thermal baths.</li><li>Osoj (~6 km) – A neighboring village surrounded by forested hills.</li><li>Gari (~10 km) – A scenic and traditional settlement known for cultural festivals and natural surroundings.</li><li>Dolno Kosovrasti (~10 km) – Famous for its mineral springs and natural spa treatments, popular among locals and visitors.</li></ul>",
      "Terrain: Taiga – The village is surrounded by coniferous forests typical of taiga terrain. This ecosystem supports a range of wildlife, wild herbs, mushrooms, and offers breathtaking nature trails, perfect for hiking and eco-tourism.",
      "Climate: Continental Climate<ul><li>Summers: Warm and pleasant, averaging 24–28°C, ideal for outdoor activities,</li><li>Winters: Cold and snowy, with temperatures often dropping below zero, making it a quiet winter retreat,</li><li>Rainfall: Moderate throughout the year, with snowy conditions in the winter months, adding to the village’s alpine charm</li></ul>",
      "Road Access: Mogorche is well connected by paved, wide roads leading directly from Debar and neighboring towns. While the roads are in excellent condition, there are inclined segments due to the hilly terrain. The village is approximately 15 minutes by car from Debar, making it easily accessible for both daily commuters and tourists.",
      "Public Transport: The village is served by a reliable minibus system, with two dedicated bus lines that connect Mogorche with Debar and other nearby communities. The frequency of service is suitable for both locals and day-trippers.",
      "Nearest Towns:<ul><li>Debar – 15 km,</li><li>Struga – 67 km, serves as the nearest urban center for supplies and administration, while Struga offers access to Lake Ohrid, cultural events, and a wider range of amenities and tourism opportunities</li></ul>",
      "Map Coordinates: Latitude: Latitude: 41.5341 Longitude: 20.6220 These coordinates place Mogorche in the heart of the western Macedonian highlands, ideal for digital maps, GPS navigation, and online promotion."
    ],
    images: [
      'images/animals.jpeg',
    ]
  },

  mogInNumbers: {
    title: "Mogorche in Numbers",
    paragraphs: [
      "Population: Approximately 2,815 residents – Mogorche is a small yet lively village. The population consists mostly of long-term residents who maintain traditional lifestyles rooted in farming, craftsmanship, and family-based community living.",
      "Population trend: Slowly Declining – Like many rural villages across North Macedonia, Mogorche has experienced a gradual decrease in its year-round population, primarily due to economic migration and urbanization. Many younger generations move to larger towns or abroad in search of work and education opportunities.",
      "Migration: Strong Diaspora Presence – A large portion of Mogorche's native population lives abroad, particularly in Western Europe and the United States. Despite this, deep family ties and cultural roots draw many of them back during holidays, religious festivals, and family events, reinforcing the community's enduring connection.",
      "Household Count: Approximately 900 households – The village is composed of roughly 900 residential homes, many of which are traditional stone houses passed down through generations. These homes often host extended families and are typically well-maintained, especially for summer visits.",
      "Summer Population Boom: Significant seasonal increase – In the summer months, Mogorche becomes noticeably more vibrant and populated. Residents from abroad return with their families to reconnect with loved ones, renovate ancestral homes, and partake in local events, weddings, and religious celebrations. During this period, the population can nearly double, bringing renewed energy to the village.",
      "Community Vibe: Tight-knit, traditional, and welcoming – Mogorche is known for its strong sense of community. Neighbors often know one another across generations, and gatherings, whether large or small, are marked by warmth, hospitality, and cultural tradition. The village atmosphere is friendly and family-focused, with values rooted in respect, mutual support, and pride in heritage."
    ]
  },

  whoWeAre: {
    title: "Who We Are",
    paragraphs: [
      "Ethnic Groups:<ul><li>Macedonian Muslims,</li><li>Turks,</li><li>Albanians</li></ul>Mogorche is a multicultural village, home to a blend of ethnic groups that coexist peacefully and share many customs and traditions. The majority identify as Macedonian Muslims, with notable Turkish and Albanian families as part of the community. This diversity enriches the village's cultural identity and social harmony.",
      "Religion: Islam – The predominant religion in Mogorche is Islam. Religious values play a central role in everyday life, shaping social behavior, traditions, and the village's annual calendar through various Islamic events and celebrations.",
      "Official Language: Macedonian – Macedonian is the official and commonly spoken language in the village. However, due to ethnic diversity, it's not uncommon to hear Turkish and Albanian spoken among families and neighbors.",
      "Core Values: Family, Faith, Hospitality, and Honor – These values form the foundation of daily life in Mogorche. Respect for elders, strong family ties, and communal support are deeply rooted in the village culture. Hospitality and honoring guests are considered both a social and religious duty.",
      "Traditions: Mogorche celebrates many longstanding customs, most notably:<ul><li>Weddings – Typically large, public celebrations where the entire village participates with music, food, and dancing,</li><li>Sunet (Circumcision Ceremony) – A religious and cultural rite of passage for boys, also celebrated with family gatherings and feasts,</li><li>Eid (Bajram) – A major holiday celebrated twice annually, marking the end of Ramadan and the Feast of Sacrifice,</li><li>Ramadan (Ramazan) – A sacred month of fasting, prayer, and reflection observed by nearly all villagers.</li></ul>",
      "Hospitality: Guests in Mogorche are warmly welcomed. It's customary to offer: Coffee or tea,Snacks or traditional sweets,And in many cases, a full home-cooked meal.This strong hospitality is a point of pride and an important cultural trait passed from generation to generation.",
      "Weddings & Sunet Celebrations: Both events are public and communal, often held in open spaces where all residents gather to celebrate together. Weddings feature traditional music, dances (such as oro), and large feasts. Sunet ceremonies involve both religious and social gatherings, symbolizing family honor and cultural pride.",
      "Eid (Bajram): Celebrated twice a year, Eid is a time of joy and spiritual reflection. Traditions include:<ul><li>Attending Eid prayer at the Mosque,</li><li>Wearing new clothes,</li><li>Visiting the graves of deceased relatives,</li><li>And children receiving gifts and money from family and relatives, often seen gathering and playing together throughout the day.</li></ul>",
      "Ramadan (Ramazan): A deeply spiritual month lasting 30 days, during which:<ul><li>Residents fast from dawn to dusk,</li><li>Spend evenings in prayer,</li><li>Recite and read from the Qur'an,</li><li>And gather at the Mosque for Taraweeh (night prayers)</li></ul> It’s a time of increased community bonding, reflection, and acts of charity.",
      "Leisure Activities: Residents enjoy a simple and fulfilling lifestyle with:<ul><li>Coffee shops serving as daily social hubs</li><li>A football field used for matches and events</li><li>Nature walks through surrounding forests and hills</li><li>Frequent family visits and evening strolls around the village</li></ul>",
      "Social Spots: Common gathering areas include:<ul><li>The village square,</li><li>The Mosque, especially after prayer times,</li><li>Cafés along the main road,</li><li>The football field, especially in summer,</li><li>And public water fountains, where locals often meet and socialize</li></ul>",
      "Weekly Routines: <ul><li>Monday – Reserved for medical visits and administrative errands,</li><li>Friday – Market day, when external vendors arrive to sell fresh vegetables, fruits, clothing, and household goods,</li><li>Saturday – Known for rush hour, when most villagers head to Debar’s bazaar, causing a noticeable spike in traffic and public transport use</li></ul>",
      "Jummah (Friday Prayer): Jummah is a special congregational prayer held every Friday afternoon. It's also a social highlight of the week, as many people:<ul><li>Take time off work,</li><li>Attend the mosque,</li><li>Visit family and friends,</li><li>Or simply relax and reconnect with the community</li></ul>It’s considered both a religious duty and a weekly cultural gathering.",
    ]
  },

  aroundTheVillage: {
    title: "Around Mogorche",
    paragraphs: [
      "Cafes: Mogorche has 4 cozy cafes scattered around the village. These spots serve as daily social hubs where residents gather to enjoy coffee, tea, and casual conversation, strengthening community bonds and offering a welcoming atmosphere for visitors.",
      "Schools: The village is home to two important educational institutions:<ul><li>One primary school that provides foundational education for the younger children,</li><li>One high school, unique in being the only village-based high school in North Macedonia, offering advanced studies and fostering local talent.</li></ul>Both schools play a vital role in community life and youth development.",
      "Mosque: The Kevser Mosque stands as a central spiritual and cultural landmark in Mogorche. It serves not only as a place of worship but also as a gathering point for community events and religious celebrations, reflecting the village's rich Islamic heritage.",
      "Playing Field: The village's main playing field is the primary location for sports activities and celebrations. Its large size and audience capacity make it ideal for hosting football and basketball matches, festivals, and other community gatherings, acting as a focal point for social interaction and village pride.",
      "Shops: Mogorche supports a modest commercial sector with:<ul><li>5 shops and supermarkets providing daily necessities and groceries,</li><li>3 textile shops catering to clothing and fabric needs.</li></ul>These shops contribute to local convenience and support small-scale economic activity within the village.",
      "Valleys: The village is surrounded by numerous fertile valleys that historically were used extensively for farming. While many of these agricultural lands have been abandoned in recent times due to migration and modernization, they remain an important part of Mogorche’s natural landscape and heritage.",
      "Nature: Mogorche is blessed with diverse natural features including:<ul><li>Open fields perfect for seasonal crops and grazing,</li><li>Scenic hiking trails offering breathtaking views and opportunities for eco-tourism,</li><li>Numerous valleys that enrich the landscape,</li><li>A flowing river that sustains local flora and fauna and offers recreational opportunities.</li></ul>This natural wealth defines much of the village’s charm and outdoor lifestyle.",
      "Ambulance: Mogorche benefits from having a dedicated ambulance staffed by a doctor who is also a resident of the village. This ensures prompt medical assistance is available locally, enhancing community health and safety, and reflecting the village’s commitment to caring for its inhabitants."
    ]

  },

  funFacts: {
    title: "Fun Facts About Mogorche",
    paragraphs: [
      "Sports: Mainly popular sports include:<ul><li>Football,</li><li>Basketball,</li><li>Chess,</li><li>Darts,</li><li>Table Tennis at local cafes</li></ul>These activities contribute to a vibrant social life and community bonding in Mogorche.",
      "Mobile Coverage & Internet: Mogorche enjoys decent 4G internet coverage from providers such as:<ul><li>A1,</li><li>T-Mobile,</li><li>Lyca Mobile</li></ul>This reliable connectivity supports daily communication and access to online services for residents and visitors.",
      "Water Sources: The village is rich in natural water sources, including springs and fountains. The most famous water source is Belesnica, known for its clean, fresh water that sustains local life and attracts visitors.",
      "Migration Destinations: Residents of Mogorche have historically migrated to several countries:<ul><li>Italy,</li><li>Germany,</li><li>Austria,</li><li>Switzerland,</li><li>With recent interest in Slovenia and Croatia</li></ul>Despite migration, strong ties to the village remain through family and cultural connections.",
      "Mosque Prayer: For over 20 years, the Muslim call to prayer has been broadcast five times daily nonstop, and occasionally even more frequently, reflecting the village’s strong religious devotion.",
      "First Instances: The first house in Mogorche to have electricity was established in 1920, a significant advancement that came early compared to surrounding regions, marking a step toward modernization.",
      "Pears: Mogorche is famous for its juicy, succulent, and delicious pears, earning its residents the affectionate nickname “Крушари.” This fruit is a key part of local identity and pride.",
      "Homage: Traditionally, homes are passed down to the eldest son in each family generation, while younger siblings often move away to build their own homes, maintaining family heritage and independence.",
      "Jummah: Jummah, or Friday Prayer, is a significant weekly event when many residents take time off to attend the mosque, socialize with friends and relatives, or simply relax and rejuvenate.",
      "High School: Mogorche uniquely hosts the only high school in a village in North Macedonia, which opened in 2002, serving as an important educational center even when some larger towns lack one.",
      "Famous People: Notable personalities from Mogorche include singers Amish Selmanoski and Saban Neziroski, who have contributed to the cultural richness of the community."
    ]
  },

  landMarks: {
    title: "Landmarks",
    paragraphs: [
      "Elen Skok: A beautiful natural landmark located approximately 4-5 km from Mogorche by foot, or 9 km by car. This spot offers hiking opportunities and serene mountain views, making it a popular destination for nature lovers and locals alike.",
      "Na Kamen: Situated just 1 km from the village center, Na Kamen provides a lovely scenic overlook of Mogorche and the surrounding mountain ranges. It’s a favored spot for relaxation, photography, and appreciating the village’s natural beauty.",
      "Mosque: The Kevser Mosque stands proudly in the center of Mogorche. It is not only a place of worship but also a key cultural and historical landmark, symbolizing the village’s rich religious heritage.",
      "Fountains: The village features several traditional fountains such as Kalosici, Biljanec, and Jasika. These fountains have served as important community water sources and social gathering points throughout Mogorche’s history.",
      "Belesnica: This spring is the primary water source for Mogorche. Known for its clear, fresh water, Belesnica is marked by a charming wooden bridge, adding to the scenic and practical significance of this landmark."
    ]
  },

  educationAndYouth: {
    title: "Education & Youth",
    paragraphs: [
      "Aspirations: The youth of Mogorche have diverse dreams and ambitions, aiming to become:<ul><li>Doctors,</li><li>Developers,</li><li>Footballers,</li><li>Engineers,</li><li>Teachers,</li></ul>reflecting a broad spectrum of interests and career paths.",
      "Interests: Common pastimes and passions among the younger generation include:<ul><li>Football,</li><li>City trips,</li><li>Internet and technology,</li></ul>which shape their social and recreational activities.",
      "Youth Trend: Many young residents choose to continue their education in larger towns and cities to access broader opportunities and specialized fields not available locally.",
      "Access to Education: With both a primary and a high school in the village, educational access is relatively widespread. However, some students pursue studies in other cities for fields such as IT, Medicine, and Engineering that are not prevalent locally.",
      "Students: Approximately 100 students attend the primary school, around 30 study at the high school, and numerous others are enrolled in colleges and universities. Mogorche is notable as one of the few villages in the region where at least one student annually continues to higher education.",
      "Schools: The village is served by two main schools:<ul><li>Primary School: Mirche Acev</li><li>High School: 28 Nentori</li></ul>",
      "Theology School: Mogorche also hosts a theological school known as Mekteb, where over 30 students learn under the guidance of the local Imam. The curriculum focuses on reading and writing in Arabic and other Islamic studies, fostering religious education and community leadership."
    ]
  },

  economy:{
    title: "Economy in Mogorche",
    paragraphs: [
      "Agriculture: Agriculture remains a foundational aspect of Mogorche’s economy. Families engage in:<ul><li>Farming – Cultivating vegetables, fruits, and grains for personal use and small-scale selling,</li><li>Livestock care – Raising animals for dairy, meat, and trade,</li><li>Shepherding – A traditional practice passed down through generations,</li><li>Lumbering – Occasional woodcutting and forest-based resource gathering.</li></ul>",
      "Livestock: Residents keep a variety of animals, which contribute to both daily life and economic activity:<ul><li>Sheep and Goats – For milk, cheese, and wool production,</li><li>Chickens – Providing eggs and meat for households,</li><li>Horses – Occasionally used for farming and transport.</li></ul>",
      "Seasonal Work: Many villagers participate in seasonal labor, such as:<ul><li>Harvesting fields during late summer and fall,</li><li>Picking fruits from family-owned orchards or local valleys,</li><li>Collecting herbs and wild plants during spring and summer.</li></ul>",
      "Work: Employment is a mix of local and regional opportunities:<ul><li>Teachers – Employed in the village schools,</li><li>Private Business Owners – Running small shops, cafés, or trade-based services,</li><li>Workers in Debar – Many commute to the nearby town for jobs in construction, retail, and administration.</li></ul>",
      "Local Economy: The village sustains itself through a modest but active local economy, which includes:<ul><li>Cafés and small convenience shops,</li><li>Textile businesses,</li><li>Seasonal selling of homegrown produce,</li><li>Community-based trade and service exchanges.</li></ul>These enterprises form the backbone of everyday commerce and social life in Mogorche."
    ]
  },

  legendsAndFolklore: {
    title: "Legends & Folklore",
    paragraphs: [
      "Elen Skok Bridge (Deer Leap Bridge): This landmark is steeped in local legend. According to village folklore, a deer being chased by hunters made a miraculous leap from the bridge into the forest below. As the story goes, the deer escaped, but a curse befell the hunters who pursued it. The tale is a symbol of nature’s defiance and is still told today as a warning against greed and disrespecting wildlife.",
      "The Origin of Mogorche: Though not officially documented, many elders believe the name 'Mogorche' has deep roots connected to the area’s mountainous terrain or ancient tribal settlements. Various interpretations exist, passed down orally through generations, each adding a unique flavor to the village’s identity.",
      "Oral Storytelling: Elders in the village play a vital role in preserving cultural memory. Around cafés, homes, and during gatherings, they share tales of village history, strange encounters, and life lessons. These stories form an important part of childhood and community bonding, keeping local heritage alive through generations."
    ]
  },

  food: {
    title: "Food & Beverages",
    paragraphs: [
      "Pita: A beloved traditional pastry in Mogorche, pita is typically filled with a variety of ingredients such as spring onions, minced meat, potatoes, or spinach. It’s handmade, baked or pan-cooked, and often served warm during family meals, festive gatherings, or as part of breakfast.",
      "Tiganici: A popular village snack, tiganici are dough pastries deep-fried in oil until golden and crisp. They are usually served with cheese or sprinkled with sugar, and are often enjoyed for breakfast or as a quick treat when guests arrive.",
      "Pastrma: This is a traditional delicacy made from salted and dried sheep meat. It’s known for its strong flavor and chewy texture. Commonly served with beans (grav) and fresh bread, especially during the colder months, it reflects the village’s pastoral roots.",
      "Jufki: A pasta-like food that is handmade and sun-dried by families, typically once a year in large batches. Jufki is used throughout the year in various meals such as soups and side dishes, and is a staple in many households.",
      "Sarma: Sarma consists of cabbage leaves filled with a savory mixture of rice and, occasionally, minced meat. The rolls are then slowly boiled until tender. This dish is especially popular during major holidays and communal feasts, loved for its comforting and rich taste."
    ]
  },

  animalsAndPlants: {
    title: "Flora & Fauna",
    paragraphs: [
      "Cats: The village is home to many stray cats, most of which are domesticated over time by the villagers. Locals often feed and care for them, creating a strong bond between the community and these animals.",
      "Dogs: Numerous stray dogs roam the area, many of which act as informal guardians. Known for their loyalty, they help protect the village from wild animals and alert residents of unusual activity, especially in the outskirts.",
      "Cows: While fewer families keep cows nowadays, those who do continue to produce their own fresh milk, yogurt, and other dairy products. These small-scale practices reflect the village’s self-sufficient agricultural roots.",
      "Horses: Horses still play an important role in the daily lives of lumberjacks and others who need to transport heavy materials like firewood. Their ability to access terrain unreachable by vehicles makes them vital for certain types of labor.",
      "Bears: There have been occasional sightings of bears, particularly along the main road and in the northernmost parts of Mogorche. These sightings are rare but notable, reminding residents of the surrounding wilderness."
    ]
  },

  architectureAndHomes: {
    title: "Architecture & Homes",
    paragraphs: [
      "Older Buildings: Many traditional homes in Mogorche date back several decades or even over a century. These houses are often maintained by families who preserve their original structure and layout. While some renovations are made to ensure safety and comfort, the aim is to retain the unique historical and cultural identity of the village.",
      "Newer and More Modern Homes: In recent years, there has been a rise in the construction of modern homes. These buildings feature updated materials, contemporary designs, and are often built to accommodate larger or multigenerational families. Though different in appearance, many still incorporate local architectural elements to maintain harmony with the surroundings."
    ]
  }
  // Add more sections here if needed...
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const contentDiv = document.getElementById('content');

if (id && infoData[id]) {
  const section = infoData[id];

  // Title
  const titleEl = document.createElement('h1');
  titleEl.textContent = section.title;
  titleEl.classList.add("headingStyle");
  contentDiv.appendChild(titleEl);

  // Scrollable paragraph setup
  let currentIndex = 0;
  const paragraphs = section.paragraphs;

  const paragraphEl = createParagraph(paragraphs[currentIndex]);
  contentDiv.appendChild(paragraphEl);

  // Navigation buttons
  const navContainer = document.createElement('div');
  navContainer.classList.add('navButtons');

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '← Previous';
  prevBtn.disabled = true;

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next →';

  navContainer.appendChild(prevBtn);
  navContainer.appendChild(nextBtn);
  contentDiv.appendChild(navContainer);

  function updateParagraph(index) {
    paragraphEl.innerHTML = paragraphs[index];
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === paragraphs.length - 1;
  }


  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateParagraph(currentIndex);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < paragraphs.length - 1) {
      currentIndex++;
      updateParagraph(currentIndex);
    }
  });

  document.title = `${section.title} - Mogorche Info`;

} else {
  const notFound = document.createElement('h1');
  notFound.textContent = "Info Not Found";
  contentDiv.appendChild(notFound);

  const errorText = document.createElement('p');
  errorText.textContent = "The requested information section doesn't exist.";
  contentDiv.appendChild(errorText);

  document.title = "Info Not Found - Mogorche Info";
}
/*Login Popup JS*/
// Get elements
const loginIcon = document.querySelector('.navigationBar i');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.closeBtn');

// Open popup when icon clicked
loginIcon.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});

// Close popup when 'x' clicked
closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

// Close popup when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

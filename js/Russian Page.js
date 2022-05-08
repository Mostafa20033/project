let body=document.body;
let arabic=document.querySelector('.arabic');
let english=document.querySelector('.english');
let h2=document.getElementsByTagName('h2');
let title=document.getElementById('title');
let item1=document.getElementById('item1');
let item2=document.getElementById('item2');
let item3=document.getElementById('item3');
let item4=document.getElementById('item4');
let item5=document.getElementById('item5');
let topic1=document.getElementById('topic1');
let topic2=document.getElementById('topic2');
let topic3=document.getElementById('topic3');
let topic4=document.getElementById('topic4');
let topic5=document.getElementById('topic5');
let text1=document.getElementById('text1');
let text11=document.getElementById('text11');
let text2=document.getElementById('text2');
let text22=document.getElementById('text22');
let text3=document.getElementById('text3');
let text33=document.getElementById('text33');
let text4=document.getElementById('text4');
let text44=document.getElementById('text44');
let text5=document.getElementById('text5');
let text55=document.getElementById('text55');


arabic.onclick=()=>{
    setlanguage("arabic");
    sessionStorage.setItem("Lang","arabic");

}

english.onclick=()=>{
    setlanguage("english");
    sessionStorage.setItem("Lang","english");
    
}

onload=()=>
{
    setlanguage(sessionStorage.getItem('Lang'))
}

function setlanguage(getlanguage)
{
  if(getlanguage==="arabic")
  {

    title.innerHTML="روسيا";
    body.classList.add('position');
    item1.innerHTML="كرملين موسكو";
    item2.innerHTML="المربع الاحمر";
    item3.innerHTML="أعمدة لينا";
    item4.innerHTML="جزر سولوفيتسكي";
    item5.innerHTML="آثار الحجر الأبيض";
    topic1.innerHTML=":كرملين موسكو";
    topic2.innerHTML=":المربع الاحمر";
    topic3.innerHTML=":أعمده لينا";
    topic4.innerHTML=":جزر سولوفيتسكى";
    topic5.innerHTML=":أثار الحجر الابيض";
    text1.innerHTML="الكرملين (بالروسية: Кремль): كلمة روسية تعني قلعة أو قلعة. تستخدم هذه الكلمة اليوم للإشارة إلى وسط موسكو القديم بمبانيه ، المحاط بسور ضخم يبلغ طوله ميلين ونصف الميل وارتفاعه 65 قدمًا. يقع فندق موسكو كرملين على تل بوروفيتسكي ، على الجانب الأيسر من نهر موسكفا ، حيث يتدفق نهر نيجلينييا. يبلغ ارتفاعه حوالي 25 مترا. يعد حرم الكرملين من أشهر الأماكن السياحية في روسيا. إنه مجمع من القصور التاريخية الفخمة التي كانت مقر حاكم روسي قديم وتم تحويلها في عصرنا إلى عدد من المتاحف.";
    text11.innerHTML="تقع هذه المتاحف في قلب موسكو ، وتواجه الميدان الأحمر في موسكو وعدد من الأسواق التجارية ، مع أعلى قمة يزيد ارتفاعها عن 25 مترًا. بالعودة إلى الوراء قليلاً ، نجد أن الكرملين يبلغ من العمر أكثر من 500 عام ، حيث تم بناؤه في أواخر القرن الخامس عشر بأمر من القيصر الروسي إيفان الثالث ، الذي حكم الإمبراطورية السوفيتية.";
    text2.innerHTML="يعد الميدان الأحمر أو ' الميدان الأحمر' أحد أشهر المواقع التاريخية ليس فقط في موسكو ، ولكن في روسيا بشكل عام ؛ لأنها تحتوي على مباني أثرية ومعالم سياحية مدرجة في قائمة اليونسكو للتراث العالمي ، وشاهد على جمال وروعة العمارة الروسية ، والأحداث التاريخية التي شكلت ضمير الشعب الروسي منذ القرن الخامس عشر وحتى الآن. المربع مستطيل الشكل على مساحة 46450 متر مربع. يبلغ طولها 330 مترًا وعرضها 70 مترًا ، وتقع على الجانب الشرقي من الكرملين ، وفي قلب موسكو ، حيث تتصل بالشوارع الرئيسية لموسكو من جميع الجهات.";
    text22.innerHTML="يطل من الغرب على الجدار الشرقي لمجمع الكرملين ، ومن الجنوب كاتدرائية القديس باسيل ، ومن الشرق متجر ' غوم' ، ومن الشمال المتحف التاريخي ، وتدور أسطورة حوله ما يجعلها منطقة جذب سياحي ؛ يُعتقد أن لديها القدرة على تحقيق الأحلام والرغبات من خلال نثر بعض العملات المعدنية في الهواء مع تكرار الرغبة التي يريد الشخص تحقيقها.";
    text3.innerHTML="أعمدة لينا هي تكوينات صخرية عمودية طويلة تشبه الأعمدة ، ويرتبط أصل اسمها بنهر لينا ، حيث تمتد هذه التكوينات الصخرية لمسافة 40 كم ، وتقع على بعد 180 كم فقط من مدينة ياكوتسك في جمهورية سخا (ياقوتيا) ، بالقرب من مدينة بوكروفسك في أقصى شرق روسيا حيث توجد تكوينات جيولوجية مذهلة ، وعلى بعد حوالي 5000 كيلومتر من العاصمة الروسية موسكو ، تعتبر Lena Pillars واحدة من أكثر الأماكن المدهشة على هذا الكوكب. تحافظ كل طبقة من Lena Pillars على تاريخ القارة وكوكب الأرض بأكمله.";
    text33.innerHTML="تظهر الصور ما يكمن في الجمال الهائل لهذه الصخور ، الطبيعة المهيبة لسيبيريا ، وتظهر كسور تشكل منذ أكثر من 500 مليون سنة ، يقف بكثافة مع بعضها البعض ، يصل ارتفاعه إلى 220 مترًا فوق مستوى النهر ، في عام 2012 تم إدراج أعمدة لينا في قائمة اليونسكو للتراث العالمي.";
    text4.innerHTML="جزر سولوفيتسكي (يشار إليها غالبًا باسم سولوفكي) هي ست جزر تقع في مياه البحر الأبيض في شمال روسيا. يقع على بعد 165 كم فقط من الدائرة القطبية الشمالية. تأسس دير سولوفيتسكي في القرن الخامس عشر ، وكان أحد أشهر الأديرة وأكثرها قدسية في روسيا ، وأصبح وجهة حج رئيسية. كان أيضًا مكانًا للمنفى ، وفي القرن العشرين تم استخدامه كمعسكر اعتقال سوفيتي وحشي مات فيه أكثر من مليون سجين. رأى القادة السوفييت في عشرينيات القرن الماضي عزلة الجزر ومناخها القاسي بشكل مختلف وحولوا الأرخبيل إلى واحدة من أولى معسكرات العمل في البلاد. لا تزال ظلال الضحايا التي لا تزال تطاردها ظلال الضحايا الذين ناضلوا من أجل آرائهم السياسية في كل من العصر الإمبراطوري والسوفيتي ، إلا أن الدير القديم يمنح المكان جوًا فريدًا من الروحانية.";
    text44.innerHTML="تم إعادة تأهيل الدير بعد سقوط الاتحاد السوفيتي ، واليوم يجذب جمال الجزيرة الطبيعي وأهميتها الروحية وتاريخها الحافل السياح من جميع الأنواع إلى شواطئها. خلال الحرب العالمية الثانية ، تم استخدام جزر سولوفيتسكي كقاعدة بحرية. أعيد افتتاح الدير في أوائل التسعينيات ، وأصبح مرة أخرى موطنًا لعدد قليل من الرهبان. لا تزال العديد من الكنائس ومباني الأديرة الأخرى قيد التجديد.";
    text5.innerHTML="يمكنك سماع قصص المؤرخين والمهندسين المعماريين حول العمارة الحجرية الروسية. خاصة من بين جميع المجالات تقف الهندسة المعمارية لفلاديمير سوزدال. هذا ليس مفاجئًا على الإطلاق ، حيث تم الحفاظ على العديد من المعالم الثقافية التي يمكن رؤيتها في عصرنا في هذه الأماكن. الآثار الحجرية البيضاء لفلاديمير وسوزدال رائعة ومذهلة لأجيال عديدة من الناس. ستناقش المقالة العديد من الأشياء في هذا الاتجاه المعماري ، وسوف نتعرف على تاريخها ومظهرها والعديد من الأشياء الأخرى. للبدء ، من المفيد التحدث عن مصطلح ' آثار الحجر الأبيض لفلاديمير وسوزدال'. ومن الغريب أن الأمر لا يقتصر فقط على تسمية كل الأشياء المعمارية لهذه الأماكن.";
    text55.innerHTML="تم تضمينه في قائمة اليونسكو للتراث العالمي. 8 آثار معمارية قديمة تنتمي إلى هذا المصطلح في وقت واحد. كلهم موجودون في منطقة فلاديمير. من أجل فهم كيفية تشكيل هذا النمط المعين من العمارة ، يجب عليك الرجوع إلى التاريخ.";
  }
  else if(getlanguage==="english")
  {
    title.innerHTML="Russia";
    body.classList.remove('position');
    item1.innerHTML="Moscow Kremlin";
    item2.innerHTML="red square";
    item3.innerHTML="lina columns";
    item4.innerHTML="Solovetsky Islands";
    item5.innerHTML="white stone traces";
    topic1.innerHTML="Moscow Kremlin";
    topic2.innerHTML="red square";
    topic3.innerHTML="lina columns";
    topic4.innerHTML="Solovetsky Islands";
    topic5.innerHTML="white stone traces";
    text1.innerHTML="Kremlin (Russian: Кремль): A Russian word meaning castle or fortress. Today, this word is used to refer to the old center of Moscow with its buildings, which is surrounded by a huge wall two and a half miles long and 65 feet high. The Moscow Kremlin is located on Borovitsky Hill, on the left side of the Moskva River, where the Niglinaya River flows. It is about 25 meters high. The Kremlin Campus is one of the most famous tourist places in Russia. It is a complex of luxurious historical palaces that were the seat of an ancient Russian ruler and have been converted in our time into a number of museums.";
    text11.innerHTML="These museums are located in the heart of Moscow, facing the Red Square in Moscow and a number of commercial markets, with the highest peak more than 25 meters high. Going back a little, we find that the Kremlin is more than 500 years old, as it was built in the late fifteenth century by order of the Russian Tsar Ivan III, who ruled the Soviet Empire.";
    text2.innerHTML="Red Square or 'Red Square' is one of the most famous historical sites not only in Moscow, but in Russia in general; Because it contains archaeological buildings and tourist attractions included in the UNESCO World Heritage List, and a witness to the beauty and splendor of Russian architecture, and historical events that have shaped the conscience of the Russian people since the fifteenth century until now. The square is rectangular in shape on an area of 46,450 square meters; It is 330 meters long and 70 meters wide, on the eastern side of the Kremlin, and in the heart of Moscow, where it connects to the main streets of Moscow from all sides.";
    text22.innerHTML="It overlooks from the west the eastern wall of the Kremlin complex, and from the south is the Cathedral of St. Basil, and to the east is the “Gome” store, and to the north is the Historical Museum, and a legend revolves around it that makes it a tourist attraction; It is believed that it has the ability to fulfill dreams and wishes by scattering some coins in the air while repeating the wish that a person wants to achieve.";
    text3.innerHTML="Lena Pillars are tall columnar rock formations resembling columns, and the origin of their name is associated with the Lena River, along which these rock formations extend for a distance of 40 km, located only 180 km from the city of Yakutsk in the Republic of Sakha (Yakutia), near the town of Pokrovsk in the Far East of Russia where There are amazing geological formations, and about 5,000 km from the Russian capital, Moscow, Lena Pillars are one of the most amazing places on the planet. Each layer of Lena Pillars preserves the history of the continent and the entire planet.";
    text33.innerHTML="The pictures show what lies in the immense beauty of these rocks, the majestic nature of Siberia, and they appear as a fence, formed more than 500 million years ago, standing densely with each other, reaching a height of 220 meters above river level, in 2012 the Lena columns were included in the list UNESCO World Heritage.";
    text4.innerHTML="The Solovetsky Islands (often referred to as Solovki) are six islands located in the waters of the White Sea in northern Russia. It is located only 165 km from the Arctic Circle. Founded in the 15th century, Solovetsky Monastery was one of the most famous and sacred monasteries in Russia, and has become a major pilgrimage destination. It was also a place of exile, and in the 20th century it was used as a brutal Soviet prison camp in which over a million prisoners died. Soviet leaders in the 1920s saw the islands' isolation and stark climate differently and turned the archipelago into one of the country's first gulags. Still haunted by the shadows of victims who struggled with their political views in both imperial and Soviet times, yet its ancient monastery gives the place a unique air of spirituality.";
    text44.innerHTML="The monastery was rehabilitated after the fall of the Soviet Union, and today the islands' natural beauty, spiritual significance and heavy history attract tourists of all kinds to its shores. During World War II, the Solovetsky Islands were used as a naval base. The monastery reopened in the early 1990s and is once again home to a few monks. Many churches and other monastery buildings are still under renovation.";
    text5.innerHTML="You can hear the stories of historians and architects about Russian stone architecture. Especially among all areas stands the architecture of Vladimir-Suzdal. This is not at all surprising, since many cultural monuments that can be seen in our time have been preserved in these places. The white stone monuments of Vladimir and Suzdal are impressive and amazed many generations of people. The article will discuss many objects of this architectural direction, we will get acquainted with their history, appearance and many other things. To begin, it is useful to talk about the term 'white stone monuments of Vladimir and Suzdal' . Oddly enough, it's not just naming all the architectural things of these places.";
    text55.innerHTML="It is included in the UNESCO World Heritage List. 8 ancient monuments of architecture belong to this term at one time. All of them are located in the Vladimir region. In order to understand how this particular style of architecture was formed, you should turn to history.";

      
  }
}


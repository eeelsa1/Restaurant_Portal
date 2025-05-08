import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";

export const menuData = [
   
    {
        category: "主廚推薦",
        sub: "Specialties",
        image: c1,
        items: [
          {
            name: "松阪豬",
            en: "Pork Jowl",
            price: "200"
          },
          {
            name: "日式炒麵",
            en: "Yakisoba",
            price: "160"
          },
          {
            name: "牛肋條",
            en: "Plate Finger Rib",
            price: "200"
          },
          {
            name: "明太子雞肉",
            en: "Mentaiko Chicken",
            price: "200"
          }
        ]
      },
      {
        category: "熟食",
        sub: "Main Courses",
        image:c2,
        items: [
          {
            name: "味噌烏龍麵",
            en: "Miso Udon Noodle",
            price: "120"
          },
          {
            name: "和風烏龍麵",
            en: "Japanese Style Udon",
            price: "120"
          },
          {
            name: "肥牛蓋飯",
            en: "Beef Sukiyaki Rice",
            price: "130"
          },
          {
            name: "日式炒麵",
            en: "Yakisoba",
            price: "130"
          },
          {
            name: "明太子/烤飯糰",
            en: "Mentaiko / Grilled Onigiri",
            price: "60/50"
          },
          {
            name: "茶泡飯",
            en: "Ochazuke (Rice Soup)",
            price: "60"
          }
        ]
      },
      {
        category: "烤物",
        sub: "Grilled",
        image: c3,
        groups: [
          {
            title: "雞肉類",
            en: "Chicken",
            items: [
              { name: "雞腿排", en: "Grilled Chicken Thigh", price: "130" },
              { name: "雞肉蔥", en: "Chicken and Leek Skewer", price: "60" },
              { name: "明太子雞肉", en: "Mentaiko Chicken", price: "60" },
              { name: "明太子/鹽燒雞翅", en: "Mentaiko / Salt Grilled Chicken Wings", price: "130/120" },
              { name: "雞心", en: "Chicken Heart", price: "40" },
              { name: "雞尾", en: "Chicken Tail", price: "40" },
              { name: "雞肝", en: "Chicken Liver", price: "40" },
              { name: "檸檬鹽雞肉", en: "Grilled Lemon Chicken", price: "50" }
            ]
          },
          {
            title: "牛肉類",
            en: "Beef",
            items: [
              { name: "牛肋條", en: "Plate Finger Rib", price: "70" },
              { name: "鹽蔥牛舌", en: "Salt Onion Ox-Tongue", price: "350" },
              { name: "奶油牛小排", en: "Butter Grilled Beef Short Rib", price: "250" }
            ]
          },
          {
            title: "豬肉類",
            en: "Pork",
            items: [
              { name: "松阪豬", en: "Pork Jowl", price: "200" },
              { name: "培根水蓮/大蔥/洋蔥/番茄", en: "Bacon with Water Spinach / Leek / Onion / Tomato", price: "60" },
              { name: "香腸", en: "Grilled Sausage", price: "60" },
              { name: "鹽蔥/味噌豬五花", en: "Salt Onion / Miso Pork Belly", price: "50" }
            ]
          },
          {
            title: "海鮮類",
            en: "Seafood",
            items: [
              { name: "秋刀魚", en: "Grilled Pacific Saury", price: "80" },
              { name: "南方澳鯖魚", en: "Grilled Mackerel", price: "130" },
              { name: "柳葉魚", en: "Grilled Smelt Fish", price: "130" },
              { name: "魚下巴", en: "Grilled Yellowtail Jaw", price: "120" },
              { name: "干貝", en: "Grilled Scallop", price: "120" },
              { name: "黑鑽草蝦", en: "Black Diamond Grass Shrimp", price: "180" },
              { name: "花魚一夜干", en: "Grilled Hokke Overnight Dried Fish", price: "250" }
            ]
          },
          {
            title: "蔬菜類",
            en: "Vegetables",
            items: [
              { name: "帶殼玉米筍", en: "Grilled Baby Corn", price: "80" },
              { name: "鹽烤櫛瓜", en: "Salt Grilled Zucchini", price: "100" },
              { name: "明太子/鹽烤山藥", en: "Mentaiko / Salt Grilled Yam", price: "150/130" },
              { name: "甜椒兄弟串", en: "Grilled Bell Pepper Skewer", price: "40" },
              { name: "馬鈴薯起司燒", en: "Grilled Cheese Potato", price: "120" }
            ]
          }
        ]
      },
      {
        category: "炸物",
        sub: "Fried",
        image: c4,
        items: [
          { name: "手工花枝丸", en: "Cuttlefish Balls", price: "120" },
          { name: "神秘軟骨(限量)", en: "Special Chicken Cartilage (Limited)", price: "140" },
          { name: "唐揚雞", en: "Chicken Karaage", price: "150" },
          { name: "廣島牡蠣", en: "Hiroshima Oysters", price: "150" },
          { name: "洋蔥圈", en: "Onion Rings", price: "60" },
          { name: "可樂餅", en: "Potato Croquettes", price: "80" },
          { name: "炸爆丁香魚", en: "Fried Clove Fish", price: "120" },
          { name: "愛吃春捲", en: "Spring Rolls", price: "60" },
          { name: "唐揚豆腐", en: "Agedashi Tofu", price: "100" },
          { name: "脆脆薯條", en: "Crispy French Fries", price: "90" },
          { name: "章魚小香腸", en: "Octopus Sausages", price: "100" },
          { name: "柚香雞皮", en: "Yuzu Chicken Skin", price: "120" },
          { name: "大盛炸物拼盤", en: "Greedy Fried Platter", price: "350" }
        ]
      },
      {
        category: "小點",
        sub: "Side / Dessert",
        image:  c5,
        items: [
          { name: "追夢沙拉", en: "Chasing Dreams Salad", price: "250" },
          { name: "和風沙拉", en: "Japanese Salad", price: "120" },
          { name: "酒蒸蛤蠣", en: "Steamed Clams with Sake", price: "130" },
          { name: "秘制味噌湯", en: "Special Miso Soup", price: "60" },
          { name: "奶油金針菇", en: "Creamy Enoki Mushrooms", price: "60" },
          { name: "甜在心麻糬", en: "Grilled Mochi with Sweet Sauce", price: "60" },
          { name: "烤冰淇淋", en: "Baked Ice Cream", price: "60" },
          { name: "菜脯麻糬燒", en: "Grilled Mochi with Pickled Radish", price: "100" }
        ]
      },
   
     {
      category: "飲品、酒類",
      sub: "Drinks",
      image: c6,
      groups: [
        {
          title: "無酒精飲料",
          en: "Beverage",
          items: [
            { name: "可樂", en: "Cola", price: "60" },
            { name: "可爾必思", en: "Calpis", price: "60" },
            { name: "烏龍茶", en: "Oolong Tea", price: "60" },
            { name: "氣泡水", en: "Sparkling Water", price: "60" }
          ]
        },
        {
          title: "啤酒",
          en: "Beer",
          items: [
            { name: "Kirin 生啤 (400ml)", en: "Kirin Draft Beer (400ml)", price: "130" },
            { name: "台灣金牌", en: "Taiwan Beer Gold Medal", price: "120" },
            { name: "Corona", en: "Corona", price: "100" }
          ]
        },
        {
          title: "燒酎",
          en: "Shochu",
          items: [
            { name: "Daiyame 芋燒酎", en: "Daiyame Sweet Potato Shochu", price: "150/杯, 1680/支" }
          ]
        },
        {
          title: "清酒",
          en: "Sake",
          items: [
            { name: "石鎚 純米大吟釀 300ml", en: "Ishizuchi Junmai Daiginjo 300ml", price: "690" },
            { name: "富士高砂 山廢辛口 純米 300ml", en: "Fuji Takasago Junmai 300ml", price: "690" },
            { name: "春路 封心動 300ml", en: "Harumichi 300ml", price: "690" },
            { name: "加賀之月純米吟釀 300ml/720ml", en: "Kaga no Tsuki Junmai Ginjo", price: "600/1480" },
            { name: "慶祝 720ml/1800ml", en: "Celebration Sake", price: "800/1480" },
            { name: "瓶囲 大吟釀 900ml", en: "Binzume Daiginjo 900ml", price: "1680" },
            { name: "神之穗純米大吟釀 720ml", en: "Kami no Ho Junmai Daiginjo", price: "1780" },
            { name: "來福 純米吟釀 300ml/720ml", en: "Raifuku Junmai Ginjo", price: "690/1780" },
            { name: "溫清酒", en: "Warm Sake", price: "140/盅" }
          ]
        },
        {
          title: "韓國燒酒",
          en: "Korean Soju",
          items: [
            { name: "蘋果燒酒", en: "Apple Soju", price: "230" }
          ]
        },
        {
          title: "威士忌",
          en: "Whiskey",
          items: [
            { name: "Jack Daniel’s", en: "Jack Daniel’s", price: "180/杯, 1400/支" },
            { name: "Monkey Shoulder", en: "Monkey Shoulder", price: "180/杯, 1400/支" },
            { name: "特條梅酒威士忌", en: "Whiskey Umeshu Special", price: "180/杯" }
          ]
        },
        {
          title: "果實酒",
          en: "Fruit Liqueur",
          items: [
            { name: "梅乃宿柚子酒", en: "Umenoyado Yuzu Sake", price: "150/杯, 1480/支" },
            { name: "神聖 柚子酒", en: "Shinsei Yuzu Sake", price: "180/杯, 1580/支" },
            { name: "白鶴梅酒", en: "Hakutsuru Umeshu", price: "130/杯, 1280/支" },
            { name: "北島鹽梅", en: "Kitajima Salty Plum Wine", price: "150/杯, 1480/支" },
            { name: "血澄梅酒", en: "Chizumi Plum Wine", price: "160/杯, 1580/支" },
            { name: "今日喝了梅", en: "Drank Plum Today", price: "149/組" }
          ]
        },
        {
          title: "沙瓦",
          en: "Sour",
          items: [
            { name: "檸檬沙瓦", en: "Lemon Sour", price: "120/杯" },
            { name: "葡萄沙瓦", en: "Grape Sour", price: "130/杯" },
            { name: "芒果沙瓦", en: "Mango Sour", price: "130/杯" },
            { name: "紫蘇梅沙瓦", en: "Shiso Plum Sour", price: "130/杯" },
            { name: "水蜜桃沙瓦", en: "Peach Sour", price: "130/杯" }
          ]
        },
        {
          title: "HighBall",
          en: "HighBall",
          items: [
            { name: "原味HighBall", en: "Original HighBall", price: "120/杯" },
            { name: "威士忌可樂", en: "Whiskey Cola", price: "150/杯" },
            { name: "紫蘇梅 HighBall", en: "Shiso Plum HighBall", price: "150/杯" },
            { name: "男子漢HighBall", en: "Man's HighBall", price: "160/杯" }
          ]
        }
      ]
    }
  ];
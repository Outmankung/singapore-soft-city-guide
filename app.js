const tripDays = [
  {
    id: "sep30",
    date: "9/30",
    weekday: "周三",
    title: "落地：未来城市第一眼",
    theme: "樟宜机场 Jewel → 酒店 → 鱼尾狮 → 滨海湾 → Gardens by the Bay",
    coffee: "机场或路上随便喝，不专门找店。",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(11, 34, 39, .82), rgba(11, 34, 39, .25))",
    timeline: [
      ["抵达后", "Jewel Changi", "先看 HSBC Rain Vortex，轻量吃喝，别把机场逛成半日游。"],
      ["下午", "酒店办理入住", "如果房间未好，寄存行李后直接进城。"],
      ["傍晚", "鱼尾狮 + Marina Bay", "从鱼尾狮走到滨海湾，第一天用城市天际线建立兴奋感。"],
      ["夜晚", "Gardens by the Bay", "户外 Supertree Grove 免费；若要进 Cloud Forest / Flower Dome，提前查当天时段。"]
    ],
    guide: "这天的目标是“抵达后不累崩”。夜景比白天更重要，行李、晚高峰和体力优先。",
    booking: "Gardens by the Bay 室内馆和 OCBC Skyway 可提前看票；若航班不稳定，只保留户外花园。",
    food: "Jewel 或滨海湾就近解决。不要为了咖啡厅绕路。",
    dining: [
      {
        name: "Song Fa Bak Kut Teh",
        type: "机场稳妥热汤",
        area: "Jewel Changi",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
        order: "猪肋骨汤、油条、卤蛋、米饭；落地后想吃热的就选它。",
        budget: [18, 28],
        booking: "不用专门预约，高峰可能排队。",
        why: "第一天不要跨区找餐厅，Jewel 里解决最稳。"
      },
      {
        name: "Shake Shack Jewel",
        type: "快速补能",
        area: "Jewel Changi",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=82",
        order: "ShackBurger、薯条、奶昔；多人可以只当垫肚子。",
        budget: [18, 26],
        booking: "不用预约，适合航班时间不确定。",
        why: "不需要做攻略，节奏轻，吃完就去瀑布或进城。"
      },
      {
        name: "Satay by the Bay",
        type: "夜景后小吃",
        area: "Gardens by the Bay",
        image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=900&q=82",
        order: "沙爹串、炒粿条、椰青；适合当夜景后的随性晚餐。",
        budget: [15, 25],
        booking: "不用预约，晚间人多就分头点餐。",
        why: "比正式餐厅更符合落地日：热闹、轻松、可进可退。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Jewel+Changi+Airport+to+Merlion+Park+to+Gardens+by+the+Bay",
    tickets: "https://www.gardensbythebay.com.sg/en/plan-your-visit/hours-admission.html",
    tags: ["轻量抵达", "夜景", "不跨区"]
  },
  {
    id: "oct1",
    date: "10/1",
    weekday: "周四",
    title: "美术馆 + 城市核心 + Dempsey 晚餐",
    theme: "National Gallery Singapore → 旧禧街警察局 → 福康宁公园 → Boat Quay / Clarke Quay → Dempsey Hill",
    coffee: "National Gallery / City Hall 周边休息；PS.Cafe Harding Road 更适合作为晚餐体验。",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(22, 38, 45, .82), rgba(22, 38, 45, .2))",
    timeline: [
      ["10:00", "National Gallery Singapore", "按 3 小时估算，看完主展后在馆内或 City Hall 附近休息。"],
      ["13:30", "旧禧街警察局", "步行拍外立面，停留 15-25 分钟即可。"],
      ["14:30", "福康宁公园", "天气好就散步；暴晒或下雨则缩短，转去室内咖啡。"],
      ["16:30", "Boat Quay / Clarke Quay", "沿河走一段，作为城市核心的第二视角。"],
      ["19:00", "Dempsey Hill 晚餐", "PS.Cafe Harding Road 或同区餐厅，建议提前订位。"]
    ],
    guide: "上午给艺术，下午给城市建筑，晚上换到更松弛的绿意餐厅。别把 Dempsey 排太早，它更像一顿结束得漂亮的晚餐。",
    booking: "National Gallery 官方开放时间为每日 10:00-19:00，最后入场 18:30；热门晚餐请提前订位。",
    food: "PS.Cafe Harding Road、Dempsey Hill 其他餐厅；如果体力不足，晚餐可改 Orchard。",
    dining: [
      {
        name: "National Gallery Courtyard Cafe / 周边咖啡",
        type: "看展中场休息",
        area: "City Hall",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=82",
        order: "Flat white / iced latte + 一份轻食或甜点；只负责坐下恢复。",
        budget: [10, 18],
        booking: "不需要预约，按展览节奏临时决定。",
        why: "看展 2-3 小时后很需要一个不绕路的停靠点。"
      },
      {
        name: "PS.Cafe Harding Road",
        type: "Dempsey 晚餐",
        area: "Dempsey Hill",
        image: "https://images.unsplash.com/photo-1533777324565-a040eb52fac1?auto=format&fit=crop&w=900&q=82",
        order: "PS. Truffle Fries、PS. Club / Burger、Sticky Date Pudding；3 人建议共享薯条和甜点。",
        budget: [45, 70],
        booking: "建议提前订位，尤其 10/1 晚餐。",
        why: "落地窗、绿意和宽敞空间很贴合这趟“现代 + 自然”的调性。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=National+Gallery+Singapore+Old+Hill+Street+Police+Station+Fort+Canning+Park+Dempsey+Hill",
    tickets: "https://www.nationalgallery.sg/visit",
    tags: ["看展", "城市建筑", "预约晚餐"]
  },
  {
    id: "oct2",
    date: "10/2",
    weekday: "周五",
    title: "Joo Chiat / Katong + The Weeknd",
    theme: "彩色店屋 → 娘惹文化街区 → Katong Laksa / 娘惹菜 → 酒店休息 → National Stadium",
    coffee: "只选一个：Chin Mee Chin 复古、Common Man 现代 brunch、Studio Frond 植物拍照。",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(39, 28, 31, .84), rgba(39, 28, 31, .24))",
    timeline: [
      ["10:30", "Koon Seng Road 店屋", "先拍彩色 shophouses，避开正午暴晒。尊重住宅，不要贴门拍。"],
      ["12:00", "Katong Laksa / 娘惹菜", "把食物当街区体验的一部分，不赶场。"],
      ["14:00", "单一咖啡停靠点", "三选一即可，坐下恢复体力。"],
      ["16:00", "回酒店休息", "演唱会日必须留出洗澡、换衣服、充电时间。"],
      ["18:00", "前往 National Stadium", "20:00 开演，建议提前到场安检和买水。"]
    ],
    guide: "这天真正的主线是南洋街区和夜晚演唱会。咖啡厅只负责让你在中段坐一下，不承担“打卡任务”。",
    booking: "The Weeknd 2026-10-02 20:00 于 National Stadium；Ticketmaster 显示手机票、Smart Queue、每笔最多 6 张。",
    food: "Katong Laksa、娘惹菜、Chin Mee Chin；演唱会前吃清淡一点，别卡在排队餐厅。",
    dining: [
      {
        name: "328 Katong Laksa",
        type: "街区代表餐",
        area: "Katong",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=82",
        order: "Katong Laksa 小/大碗 + Otah；汤浓但别点太撑，晚上还要演唱会。",
        budget: [8, 14],
        booking: "不预约，饭点排队正常。",
        why: "这一天的食物应该服务 Joo Chiat / Katong 街区体验。"
      },
      {
        name: "Chin Mee Chin",
        type: "复古南洋早餐/咖啡",
        area: "East Coast Road",
        image: "https://images.unsplash.com/photo-1620146344904-097a0002d797?auto=format&fit=crop&w=900&q=82",
        order: "Kaya Toast Set、Sugee Cake、Cream Horn、Kopi；更适合怀旧本地感。",
        budget: [8, 16],
        booking: "不预约；热门时段可能排队。",
        why: "如果只选一个复古咖啡点，它比普通网红咖啡更有新加坡记忆。"
      },
      {
        name: "Common Man Coffee Roasters Joo Chiat",
        type: "现代 brunch 备选",
        area: "Joo Chiat",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=82",
        order: "Organic Eggs Benedict、Common Man Full Breakfast、White Coffee。",
        budget: [28, 45],
        booking: "可提前看位；演唱会日不要久等。",
        why: "更现代、更坐得住，适合想把下午体力补回来。"
      },
      {
        name: "Studio Frond",
        type: "植物系饮品",
        area: "Joo Chiat",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=82",
        order: "Matcha / Hojicha 饮品 + 小花束体验；只当轻停靠。",
        budget: [9, 18],
        booking: "偏 takeaway，不适合承担正餐。",
        why: "拍照和植物感很强，但不要让它抢走街区主线。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Koon+Seng+Road+Katong+Singapore+National+Stadium",
    tickets: "https://ticketmaster.sg/activity/detail/26sg_theweeknd",
    tags: ["南洋街区", "演唱会", "必须休息"],
    concert: {
      poster: "assets/the-weeknd-singapore-2026-poster.jpg",
      seatMap: "assets/the-weeknd-singapore-2026-seat-map.jpg",
      liveNation: "assets/the-weeknd-singapore-2026-livenation.webp",
      source: "Ticketmaster SG / Live Nation SG",
      note: "官方页面显示 2026-10-02 与 2026-10-03 两晚，National Stadium，20:00 开演；Creepy Nuts 为 special guests。"
    }
  },
  {
    id: "oct3",
    date: "10/3",
    weekday: "周六",
    title: "环球影城 / 圣淘沙",
    theme: "Universal Studios Singapore → 圣淘沙 → VivoCity / HarbourFront",
    coffee: "不安排。需要咖啡就现场随机买。",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(21, 38, 55, .84), rgba(21, 38, 55, .2))",
    timeline: [
      ["上午", "慢一点出门", "前一晚演唱会后不要硬冲开园；若想多玩项目，再提早。"],
      ["中午-傍晚", "Universal Studios Singapore", "入园先看热门项目等待时间，必要时现场评估 Express。"],
      ["傍晚", "圣淘沙海边或 RWS", "如果体力好，补一段海边；如果累，直接去 VivoCity。"],
      ["晚餐", "VivoCity / HarbourFront", "好处是选择多、回城方便。"]
    ],
    guide: "娱乐日不要塞文化点。今天的质量来自“玩得轻松”，不是景点数量。",
    booking: "RWS 官方页面会显示当日开放与最后入场，营业时间可能调整；出发前查 temporary closures。",
    food: "园内随缘，晚餐放 VivoCity 更稳。",
    ussGuide: {
      image: "assets/universal-studios-singapore-globe.jpg",
      official: "https://www.rwsentosa.com/en/play/universal-studios-singapore",
      express: "https://www.rwsentosa.com/en/play/universal-studios-singapore/universal-express",
      strategy:
        "前一晚演唱会后，不建议硬冲开园。你们更适合 11:00-12:00 入园，先打 3 个重头项目，再按体力补 Minion Land / WaterWorld / 小项目。",
      expressDecision: [
        "建议买：周六、到得晚、只想半天玩完，或官方 app 显示 Battlestar / TRANSFORMERS / Mummy 里有两个以上排队超过 55 分钟。",
        "可以不买：能开园前到、愿意用 single rider / 分头排、且接受只玩一轮核心项目。",
        "现场买法：先入园看官方 app 等候时间，若 12:30 前已经明显爆队，再买当天 dated Universal Express；官方说明参与项目/演出通常各一次优先。"
      ],
      paradeDecision:
        "不要提前把晚上锁死。出发前一周看 USS app 或官方日历：如果 10/3 当天有 Universal Star Power Parade / Twilight Thrills 且园区开到 19:30 以后，就预留 18:30-19:15；如果没有明确夜间演出，傍晚直接去 VivoCity 晚餐更舒服。",
      picks: [
        {
          name: "Battlestar Galactica: HUMAN vs CYLON",
          badge: "新加坡最该优先",
          icon: "rocket",
          note: "USS 的招牌双轨过山车，也是最有“只有这里”的记忆点。先玩 CYLON，再看体力补 HUMAN；怕刺激的人可以只拍照或跳过。"
        },
        {
          name: "TRANSFORMERS The Ride: The Ultimate 3D Battle",
          badge: "室内避雨核心",
          icon: "bot",
          note: "新加坡是这类 3D 黑暗骑乘的代表站之一，排队通常稳定偏长。下雨或太晒时优先排它。"
        },
        {
          name: "Revenge of the Mummy",
          badge: "黑暗过山车",
          icon: "skull",
          note: "室内、节奏快、冷气足，适合放在中午最热时段。胆子够的话这是当天前三。"
        },
        {
          name: "Jurassic Park Rapids Adventure",
          badge: "会湿身",
          icon: "waves",
          note: "适合下午玩，雨衣看心情；如果晚上还要精致吃饭，可以只让想玩的人去。"
        },
        {
          name: "Minion Land",
          badge: "新区域补照片",
          icon: "camera",
          note: "更适合拍照、周边和轻松项目，不要放在最早抢排队的黄金时间。"
        },
        {
          name: "WaterWorld",
          badge: "看场次决定",
          icon: "calendar-clock",
          note: "如果当天场次刚好卡在午后，可以当休息；坐前排会湿，想保妆就往后坐。"
        }
      ]
    },
    dining: [
      {
        name: "USS 园内快餐 / 小吃",
        type: "游乐日补能",
        area: "Universal Studios Singapore",
        image: "assets/uss-fast-food.jpg",
        order: "汉堡、炸鸡、热狗、饮料；按排队最短优先，不为餐厅牺牲项目。",
        budget: [20, 35],
        booking: "不用预约，午餐避开 12:30-13:30。",
        why: "前一晚演唱会后，今天最重要的是少决策、少折腾。"
      },
      {
        name: "VivoCity 晚餐",
        type: "回城前稳妥选择",
        area: "HarbourFront",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=82",
        order: "按体力选：日料、简餐、南洋菜或甜品；不要再跨远区。",
        budget: [25, 45],
        booking: "大多可现场排队，周六晚餐高峰要留余量。",
        why: "选择多、交通稳，适合结束圣淘沙后直接回酒店。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Singapore+VivoCity+HarbourFront",
    tickets: "https://www.rwsentosa.com/en/play/universal-studios-singapore/",
    tags: ["娱乐日", "少排队", "看体力"]
  },
  {
    id: "oct4",
    date: "10/4",
    weekday: "周日",
    title: "设计买手店 + 本土生活方式日",
    theme: "Tiong Bahru 早餐 → New Bahru → Design Orchard / DORS → Dempsey 或 Orchard 晚餐",
    coffee: "Tiong Bahru Bakery / Plain Vanilla；New Bahru 下午可顺带 Rye / Dearborn。",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(35, 37, 28, .84), rgba(35, 37, 28, .22))",
    timeline: [
      ["09:30", "Tiong Bahru 早餐", "本地早餐或 Tiong Bahru Bakery，先进入生活节奏。"],
      ["11:30", "New Bahru", "旧建筑改造、本土品牌、F&B 和生活方式店集中看。"],
      ["15:30", "Design Orchard / DORS", "看新加坡本土设计、时装、美妆、生活方式品牌。"],
      ["19:00", "Dempsey 或 Orchard 晚餐", "按购物成果和体力决定，不必再跨很远。"]
    ],
    guide: "这是最值得保留的一天。它讲的是新加坡的本土审美、消费和旧建筑再利用，比普通商场更有记忆点。",
    booking: "DORS 官方标注每日 10:30-21:30；New Bahru 餐厅热门时段可提前订位。",
    food: "Rye、Dearborn、The Coconut Club、Artichoke 等可按当日营业与预约情况选择。",
    designGuide: {
      intro:
        "这天不要按商场楼层扫货，而是按风格逛：先在 New Bahru 看更年轻、更生活方式的本土品牌，再去 DORS / Design Orchard 做多品牌集中筛选。",
      route: "建议顺序：Rye → Beyond The Vines → Curious Creatures → Dearborn 休息 → Design Orchard / DORS → Orchard 晚餐。",
      brands: [
        {
          name: "r y e",
          area: "New Bahru",
          image: "assets/brand-rye-style.jpg",
          style: "克制、柔软、日常感强的女装；偏亚麻、棉质、舒服剪裁，适合喜欢低调但有质感的人。",
          buy: "衬衫、背心、宽松长裤、连衣裙；重点试版型和面料。",
          budget: [120, 320],
          icon: "shirt",
          tip: "适合慢慢试，不是便宜快时尚；预算有限就挑一件最常穿的上衣。"
        },
        {
          name: "Beyond The Vines",
          area: "New Bahru / Singapore brand",
          image: "assets/brand-btv-bag.jpg",
          style: "年轻、颜色强、图形感明显，最出圈的是 Dumpling Bag 系列；比服装更适合买包和小配件。",
          buy: "XS / Micro Dumpling Bag、Poofy Bag、日常 tote、小挂件。",
          budget: [49, 159],
          icon: "shopping-bag",
          tip: "适合当新加坡旅行纪念品；先看颜色实物，亮色比照片更挑穿搭。"
        },
        {
          name: "Curious Creatures",
          area: "New Bahru",
          image: "assets/brand-curious-jewelry.jpg",
          style: "细巧、日常、偏 demi-fine / fine jewellery；适合情侣、闺蜜或给自己买一个长期佩戴的小东西。",
          buy: "耳环、戒指、项链；Permanent Bracelet / Anklet 如果有兴趣需预约。",
          budget: [79, 260],
          icon: "gem",
          tip: "永久手链官方标注 bracelet 从 SGD109 起、anklet 从 SGD149 起；要做就提前预约。"
        },
        {
          name: "DORS at Design Orchard",
          area: "Orchard",
          image: "assets/brand-dors-rack.jpg",
          style: "新加坡设计师多品牌集合店，覆盖服装、美妆、首饰、生活方式；适合不知道买哪家时一次性筛。",
          buy: "本土设计师服装、香氛、美妆、小首饰、伴手礼。",
          budget: [30, 300],
          icon: "scan-search",
          tip: "先快速绕一圈，把想试的品牌拍下来，再集中试穿，避免在多品牌店里迷路。"
        },
        {
          name: "GINLEE / MAKE by GINLEE",
          area: "Design Orchard / Orchard",
          image: "assets/brand-ginlee-pleats.jpg",
          style: "偏建筑感、褶皱工艺、通勤到晚餐都能穿；比普通基础款更有设计细节。",
          buy: "褶皱上衣、连衣裙、MAKE pleat bag 体验。",
          budget: [88, 350],
          icon: "sparkles",
          tip: "适合买一件有工艺记忆点的单品；官网可见 MAKE pleat bag experience 约 SGD88。"
        },
        {
          name: "Yacht 21 / Ling Wu / 小众配饰",
          area: "DORS 里随机筛",
          image: "assets/brand-dors-accessories.jpg",
          style: "Yacht 21 偏度假通勤，Ling Wu 偏皮具；DORS 里品牌会轮换，所以用风格找，不必执着单一店名。",
          buy: "轻薄连衣裙、皮具、小众包、香氛或家居小物。",
          budget: [60, 260],
          icon: "tags",
          tip: "适合留 45-60 分钟自由探索；看到喜欢的尺寸和颜色，当场试比回头找更省力。"
        }
      ]
    },
    dining: [
      {
        name: "Tiong Bahru Bakery",
        type: "早上第一站",
        area: "Tiong Bahru",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=82",
        order: "Croissant、Kouign Amann、咖啡；想轻一点就两人分一个甜口。",
        budget: [12, 22],
        booking: "不用预约，热门门店早上会排队。",
        why: "它是 Tiong Bahru 生活方式感的自然开场，不需要变成咖啡巡礼。"
      },
      {
        name: "Dearborn",
        type: "New Bahru 下午轻食",
        area: "New Bahru",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358?auto=format&fit=crop&w=900&q=82",
        order: "Basic / Advanced Granola Bowl、Potato and Egg；适合逛店中途坐一下。",
        budget: [15, 28],
        booking: "座位和营业时段较有限，建议先看当天营业。",
        why: "比普通咖啡更有 New Bahru 的生活方式气质。"
      },
      {
        name: "The Coconut Club",
        type: "本土风味正餐",
        area: "New Bahru / River Valley",
        image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=82",
        order: "Nasi Lemak Ayam Goreng Berempah、Beef Rendang、Coconut Shake、Chendol。",
        budget: [28, 45],
        booking: "热门时段建议订位或避开正饭点。",
        why: "把本土味道做得更精致，适合设计生活方式日。"
      },
      {
        name: "Artichoke New Bahru",
        type: "热闹晚餐备选",
        area: "New Bahru",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=82",
        order: "Hummus、Fried Cauliflower、Dirty Margherita、Super Crunch Fried Chicken。",
        budget: [40, 65],
        booking: "建议订位；多人共享更划算。",
        why: "适合 3 人点几盘共享，气氛比普通商场餐厅更有记忆点。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Tiong+Bahru+New+Bahru+Design+Orchard+Singapore",
    tickets: "https://dors.com.sg/pages/about-us",
    tags: ["本土设计", "购物", "旧建筑改造"]
  },
  {
    id: "oct5",
    date: "10/5",
    weekday: "周一",
    title: "返程：Jewel + 机场",
    theme: "睡到自然醒 → Jewel Changi → 机场 → 回程",
    coffee: "机场里解决，不再跨区跑。",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1800&q=82",
    imageShade: "linear-gradient(90deg, rgba(30, 45, 48, .82), rgba(30, 45, 48, .22))",
    timeline: [
      ["上午", "睡到自然醒", "先恢复体力，别为了最后一站跨区。"],
      ["中午", "退房 + 行李", "确认退税、行李额度、机场交通时间。"],
      ["下午", "Jewel Changi", "补买伴手礼，看瀑布，吃最后一餐。"],
      ["起飞前", "安检与登机", "预留足够时间处理退税、排队和航站楼移动。"]
    ],
    guide: "返程日的高级感来自从容。所有安排都围绕机场，不再给自己制造风险。",
    booking: "Jewel 24 小时开放，多数商店 10:00-22:00；具体店铺以目录为准。",
    food: "机场内解决。若航司支持 Jewel early check-in，可提前确认。",
    dining: [
      {
        name: "Song Fa / Jewel 美食层",
        type: "返程前最后一餐",
        area: "Jewel Changi",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=82",
        order: "肉骨茶、海南鸡饭、叻沙或简餐；按排队时间决定。",
        budget: [18, 35],
        booking: "不跨区，不预约，机场里解决。",
        why: "返程日重点是从容，不要为了餐厅冒误机风险。"
      },
      {
        name: "Jewel 甜品 / 咖啡",
        type: "伴手礼前休息",
        area: "Jewel Changi",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=82",
        order: "咖啡、冰淇淋、蛋糕或伴手礼甜点；看瀑布后补一口糖分。",
        budget: [8, 18],
        booking: "不用预约，适合等值机或退税间隙。",
        why: "给旅程一个轻松收尾，所有行动都围绕机场。"
      }
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Jewel+Changi+Airport",
    tickets: "https://www.jewelchangiairport.com/en/getting-to-jewel.html",
    tags: ["返程", "伴手礼", "不跨区"]
  }
];

const bookings = [
  ["The Weeknd 门票", "Ticketmaster 手机票；2026-10-02 20:00，National Stadium。确认账号、手机验证和付款额度。"],
  ["Universal Studios Singapore", "提前看 RWS 官方日历、闭园项目；周六可评估 Express。"],
  ["Gardens by the Bay", "如要进 Cloud Forest / Flower Dome / OCBC Skyway，提前看时段和天气。"],
  ["National Gallery Singapore", "10:00-19:00，建议上午 3 小时；可提前购票减少现场等待。"],
  ["Dempsey 晚餐", "PS.Cafe Harding Road 或同区餐厅，10/1 晚餐建议预约。"],
  ["演唱会日交通", "National Stadium 周边散场拥挤，预先收藏回酒店路线和备选叫车点。"],
  ["返程机场", "确认退税、航站楼、行李额度；能 early check-in 的航司提前查。"]
];

const sources = [
  ["National Gallery", "开放时间、最后入场与建议参观时长。", "https://www.nationalgallery.sg/visit"],
  ["Gardens by the Bay", "各馆开放时间、售票处和设施信息。", "https://www.gardensbythebay.com.sg/en/plan-your-visit/hours-admission.html"],
  ["Jewel Changi", "Jewel 开放、商店大致营业时间和机场连接方式。", "https://www.jewelchangiairport.com/en/getting-to-jewel.html"],
  ["Universal Studios Singapore", "RWS 官方票务、开放时间、闭园提醒与园区信息。", "https://www.rwsentosa.com/en/play/universal-studios-singapore/"],
  ["Universal Express", "USS 快速通为指定日期产品，官方说明参与项目/演出通常各一次优先队列。", "https://www.rwsentosa.com/en/play/universal-studios-singapore/universal-express"],
  ["The Weeknd Ticketmaster", "2026-10-02 新加坡场、手机票、Smart Queue 和票价区间。", "https://ticketmaster.sg/activity/detail/26sg_theweeknd"],
  ["New Bahru", "本土品牌、餐饮与生活方式店目录。", "https://newbahru.com/"],
  ["DORS at Design Orchard", "本土设计零售空间、地址与营业时间。", "https://dors.com.sg/pages/about-us"],
  ["Beyond The Vines", "新加坡本土品牌，Dumpling Bag、Poofy Bag 和服饰配件可出发前看价格与库存。", "https://www.beyondthevines.com/"],
  ["Curious Creatures", "珠宝、永久手链/脚链预约与起价信息。", "https://www.curiouscreatures.cc/"],
  ["GINLEE Studio", "新加坡设计师品牌与 MAKE pleat bag 体验信息。", "https://ginleestudio.com/"],
  ["Food menus", "PS.Cafe、328 Katong Laksa、Chin Mee Chin、Common Man、Tiong Bahru Bakery、The Coconut Club 等菜单出发前复核。", "https://www.thecoconutclub.sg/menu"],
  ["SGD 汇率", "页面按 1 SGD ≈ RMB 5.35 粗算，实际刷卡汇率以银行和支付渠道为准。", "https://wise.com/ca/compare/wise-sgd-to-cny"]
];

const dayTabs = document.querySelector("#dayTabs");
const dayPanel = document.querySelector("#dayPanel");
const todayContent = document.querySelector("#todayContent");
const bookingChecklist = document.querySelector("#bookingChecklist");
const sourceGrid = document.querySelector("#sourceGrid");
const rainPlan = document.querySelector("#rainPlan");
const energyPlan = document.querySelector("#energyPlan");
const peopleCount = document.querySelector("#peopleCount");
const budgetResult = document.querySelector("#budgetResult");
const shareButton = document.querySelector("#shareButton");
const shareStatus = document.querySelector("#shareStatus");

const SGD_TO_CNY = 5.35;
let activeDay = tripDays[0].id;
const revealSeen = new WeakSet();
const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      )
    : null;

function getTravelDay() {
  const today = new Date();
  const match = tripDays.find((day) => {
    const [month, date] = day.date.split("/").map(Number);
    return today.getFullYear() === 2026 && today.getMonth() + 1 === month && today.getDate() === date;
  });
  return match || tripDays[0];
}

function renderTabs() {
  dayTabs.innerHTML = tripDays
    .map(
      (day) => `
        <button class="day-tab ticket-stub" type="button" role="tab" aria-selected="${day.id === activeDay}" data-day="${day.id}">
          <i data-lucide="ticket"></i>
          <strong>${day.date} ${day.weekday}</strong>
          <span>${day.title}</span>
        </button>
      `
    )
    .join("");
}

function renderDay() {
  const day = tripDays.find((item) => item.id === activeDay);
  dayPanel.innerHTML = `
    <div class="panel-visual" style="background-image:${day.imageShade}, url('${day.image}')">
      <div class="panel-visual-inner">
        <p class="eyebrow">${day.date} ${day.weekday}</p>
        <h3>${day.title}</h3>
        <p>${day.theme}</p>
        <div class="tag-row">${day.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
    <div class="mobile-day-actions" aria-label="当天快捷操作">
      <a class="button primary" href="${day.map}" target="_blank" rel="noreferrer">
        <i data-lucide="map"></i>
        打开地图
      </a>
      <a class="button outline" href="${day.tickets}" target="_blank" rel="noreferrer">
        <i data-lucide="ticket"></i>
        官方入口
      </a>
    </div>
    <div class="panel-body">
      <div>
        <div class="panel-top">
          <h3>当天怎么走</h3>
        </div>
        <ul class="timeline">
          ${day.timeline
            .map(
              ([time, stop, note]) => `
                <li>
                  <span class="time"><i data-lucide="map-pin"></i>${time}</span>
                  <div>
                    <div class="stop-title">${stop}</div>
                    <p class="muted">${note}</p>
                  </div>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
      <aside class="side-stack">
        <div class="info-box">
          <h3><i data-lucide="radio-tower"></i>导游判断</h3>
          <p>${day.guide}</p>
        </div>
        <div class="info-box">
          <h3><i data-lucide="ticket-check"></i>票务 / 预订</h3>
          <p>${day.booking}</p>
        </div>
        <div class="info-box">
          <h3><i data-lucide="cup-soda"></i>咖啡与吃饭</h3>
          <p>${day.coffee}</p>
          <p class="muted">${day.food}</p>
        </div>
        <div class="panel-actions">
          <a class="button outline" href="${day.map}" target="_blank" rel="noreferrer">
            <i data-lucide="map"></i>
            打开地图
          </a>
          <a class="button outline" href="${day.tickets}" target="_blank" rel="noreferrer">
            <i data-lucide="ticket"></i>
            官方入口
          </a>
        </div>
      </aside>
    </div>
    ${day.ussGuide ? renderUssGuide(day.ussGuide) : ""}
    ${day.designGuide ? renderDesignGuide(day.designGuide) : ""}
    ${renderDiningGuide(day)}
    ${day.concert ? renderConcertFeature(day.concert) : ""}
  `;
  refreshIcons();
  setupReveals(dayPanel);
}

function renderUssGuide(guide) {
  return `
    <section class="uss-guide" aria-label="环球影城游玩建议">
      <div class="uss-hero" style="background-image: linear-gradient(90deg, rgba(17, 19, 20, .88), rgba(17, 19, 20, .28)), url('${guide.image}')">
        <div>
          <p class="eyebrow">Universal Studios Singapore</p>
          <h3>USS 项目优先级</h3>
          <p>${guide.strategy}</p>
        </div>
        <div class="uss-actions">
          <a class="button outline" href="${guide.official}" target="_blank" rel="noreferrer">
            <i data-lucide="calendar-days"></i>
            官方日历
          </a>
          <a class="button outline" href="${guide.express}" target="_blank" rel="noreferrer">
            <i data-lucide="zap"></i>
            Express
          </a>
        </div>
      </div>
      <div class="uss-grid">
        <div class="uss-decision">
          <h4><i data-lucide="zap"></i>快速通怎么买</h4>
          <ul>
            ${guide.expressDecision.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="uss-decision">
          <h4><i data-lucide="sparkles"></i>晚上表演要不要等</h4>
          <p>${guide.paradeDecision}</p>
        </div>
      </div>
      <div class="ride-grid">
        ${guide.picks
          .map(
            (ride) => `
              <article class="ride-card">
                <div class="ride-icon"><i data-lucide="${ride.icon}"></i></div>
                <div>
                  <span>${ride.badge}</span>
                  <h4>${ride.name}</h4>
                  <p>${ride.note}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function formatDiningBudget([low, high]) {
  const lowCny = Math.round(low * SGD_TO_CNY);
  const highCny = Math.round(high * SGD_TO_CNY);
  return `SGD ${low}-${high} / 约 RMB ${lowCny}-${highCny}`;
}

function renderDiningGuide(day) {
  if (!day.dining?.length) return "";
  return `
    <section class="dining-guide" aria-label="${day.date} 吃喝推荐">
      <div class="dining-head">
        <div>
          <p class="eyebrow">Eat & drink</p>
          <h3>当天吃喝推荐</h3>
        </div>
        <p>价格按 <strong>1 SGD ≈ RMB ${SGD_TO_CNY.toFixed(2)}</strong> 粗算，图片为菜单/场景参考；出发前再复核营业时间与菜单。</p>
      </div>
      <div class="dining-grid">
        ${day.dining
          .map(
            (spot) => `
              <article class="dining-card">
                <figure>
                  <img src="${spot.image}" alt="${spot.name} ${spot.type}" loading="lazy" onerror="this.closest('figure').classList.add('image-failed'); this.remove();" />
                  <figcaption>${spot.area}</figcaption>
                </figure>
                <div class="dining-card-body">
                  <div class="dining-card-title">
                    <span>${spot.type}</span>
                    <h4>${spot.name}</h4>
                  </div>
                  <dl class="dining-facts">
                    <div>
                      <dt><i data-lucide="utensils"></i>推荐点法</dt>
                      <dd>${spot.order}</dd>
                    </div>
                    <div>
                      <dt><i data-lucide="wallet"></i>人均参考</dt>
                      <dd>${formatDiningBudget(spot.budget)}</dd>
                    </div>
                    <div>
                      <dt><i data-lucide="calendar-check"></i>预约提醒</dt>
                      <dd>${spot.booking}</dd>
                    </div>
                  </dl>
                  <p class="dining-why">${spot.why}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDesignGuide(guide) {
  return `
    <section class="design-guide" aria-label="设计买手店品牌指南">
      <div class="design-head">
        <div>
          <p class="eyebrow">Design shopping</p>
          <h3>买手店怎么逛</h3>
        </div>
        <p>${guide.intro}</p>
      </div>
      <div class="design-route">
        <i data-lucide="route"></i>
        <span>${guide.route}</span>
      </div>
      <div class="brand-grid">
        ${guide.brands
          .map(
            (brand) => `
              <article class="brand-card">
                <figure class="brand-image">
                  <img src="${brand.image}" alt="${brand.name} 风格参考" loading="lazy" onerror="this.closest('figure').classList.add('image-failed'); this.remove();" />
                  <figcaption>${brand.area}</figcaption>
                </figure>
                <div class="brand-content">
                  <div class="brand-icon"><i data-lucide="${brand.icon}"></i></div>
                  <div class="brand-copy">
                    <span>${brand.area}</span>
                    <h4>${brand.name}</h4>
                    <p>${brand.style}</p>
                    <dl>
                      <div>
                        <dt>适合买</dt>
                        <dd>${brand.buy}</dd>
                      </div>
                      <div>
                        <dt>价格带</dt>
                        <dd>${formatDiningBudget(brand.budget)}</dd>
                      </div>
                    </dl>
                    <p class="brand-tip">${brand.tip}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderConcertFeature(concert) {
  return `
    <section class="concert-feature" aria-label="The Weeknd 演唱会视觉与信息">
      <div class="concert-copy">
        <p class="eyebrow">Concert night</p>
        <h3>The Weeknd: After Hours Til Dawn Tour</h3>
        <p>${concert.note}</p>
        <div class="concert-actions">
          <a class="button outline" href="https://ticketmaster.sg/activity/detail/26sg_theweeknd" target="_blank" rel="noreferrer">
            <i data-lucide="ticket"></i>
            Ticketmaster
          </a>
          <a class="button outline" href="https://www.livenation.sg/en/event/the-weeknd-after-hours-til-dawn-tour-singapore-tickets-edp1672025" target="_blank" rel="noreferrer">
            <i data-lucide="external-link"></i>
            Live Nation
          </a>
        </div>
      </div>
      <div class="concert-media">
        <figure class="photo-frame">
          <img src="${concert.liveNation}" alt="The Weeknd official Singapore 2026 event visual" loading="lazy" />
          <figcaption>活动照片：Live Nation SG</figcaption>
        </figure>
        <figure class="poster-frame">
          <img src="${concert.poster}" alt="The Weeknd After Hours Til Dawn Tour Singapore 2026 official poster" loading="lazy" />
          <figcaption>官方海报：${concert.source}</figcaption>
        </figure>
        <figure class="seat-frame">
          <img src="${concert.seatMap}" alt="The Weeknd Singapore 2026 National Stadium seating layout" loading="lazy" />
          <figcaption>座位图：Ticketmaster SG，实际布局可能调整。</figcaption>
        </figure>
      </div>
    </section>
  `;
}

function renderToday() {
  const day = getTravelDay();
  todayContent.innerHTML = `
    <h2 class="today-title">${day.date} ${day.title}</h2>
    <p class="today-meta">${day.theme}</p>
    <p>${day.guide}</p>
    <div class="link-row">
      <a class="button outline" href="#days" data-jump="${day.id}">
        <i data-lucide="route"></i>
        看这天细节
      </a>
      <a class="button outline" href="${day.map}" target="_blank" rel="noreferrer">
        <i data-lucide="navigation"></i>
        地图
      </a>
    </div>
  `;
}

function renderBookings() {
  bookingChecklist.innerHTML = bookings
    .map((item, index) => {
      const checked = localStorage.getItem(`sg-booking-${index}`) === "done";
      return `
        <div class="booking-item">
          <input id="booking-${index}" type="checkbox" ${checked ? "checked" : ""} data-booking="${index}" />
          <label for="booking-${index}">
            <strong><i data-lucide="${index === 0 ? "music" : "badge-check"}"></i>${item[0]}</strong>
            <small>${item[1]}</small>
          </label>
        </div>
      `;
    })
    .join("");
  setupReveals(bookingChecklist);
}

function renderSources() {
  sourceGrid.innerHTML = sources
    .map(
      ([title, desc, url]) => `
        <article class="source-card">
          <div>
            <h3><i data-lucide="external-link"></i>${title}</h3>
            <p>${desc}</p>
          </div>
          <a href="${url}" target="_blank" rel="noreferrer">打开官方页面</a>
        </article>
      `
    )
    .join("");
  setupReveals(sourceGrid);
}

function renderTools() {
  const day = tripDays.find((item) => item.id === activeDay);
  rainPlan.textContent =
    activeDay === "oct3"
      ? "USS 遇雨先转室内项目、商店和餐厅；若天气持续不好，把圣淘沙海边砍掉，晚餐提前去 VivoCity。"
      : "优先保留当天主线，把户外拍照点压缩成短暂停留；美术馆、Jewel、Design Orchard、New Bahru 都适合做室内缓冲。";
  energyPlan.textContent =
    activeDay === "oct2"
      ? "保留 Koon Seng Road、午餐、酒店休息和演唱会；咖啡点可直接砍。"
      : `保留“${day.title}”的核心体验，减少跨区移动；晚餐尽量放在最后所在区域。`;
  updateBudget();
}

function updateBudget() {
  const people = Number(peopleCount.value || 1);
  const low = people * 330;
  const high = people * 520;
  budgetResult.textContent = `粗略可变支出参考：${people} 人约 SGD ${low}-${high}，约 RMB ${Math.round(
    low * SGD_TO_CNY
  )}-${Math.round(high * SGD_TO_CNY)}。主要波动来自 USS / Gardens 门票、演唱会票档、Dempsey 晚餐和设计店购物。`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function scrollToDayPanelTop() {
  const stickyOffset = dayTabs.offsetHeight + 12;
  const top = dayPanel.getBoundingClientRect().top + window.scrollY - stickyOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function setupReveals(root = document) {
  root
    .querySelectorAll?.(".section, .day-panel, .dining-card, .booking-item, .tool-card, .source-card")
    .forEach((element) => {
      if (revealSeen.has(element)) return;
      revealSeen.add(element);
      element.classList.add("reveal");
      if (revealObserver) {
        revealObserver.observe(element);
      } else {
        element.classList.add("is-visible");
      }
    });
}

dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  activeDay = button.dataset.day;
  renderTabs();
  renderDay();
  renderTools();
  dayTabs.querySelector(`[data-day="${activeDay}"]`)?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
  scrollToDayPanelTop();
});

todayContent.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-jump]");
  if (!jump) return;
  activeDay = jump.dataset.jump;
  renderTabs();
  renderDay();
  renderTools();
  dayTabs.querySelector(`[data-day="${activeDay}"]`)?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
});

bookingChecklist.addEventListener("change", (event) => {
  const input = event.target.closest("[data-booking]");
  if (!input) return;
  localStorage.setItem(`sg-booking-${input.dataset.booking}`, input.checked ? "done" : "todo");
});

peopleCount.addEventListener("input", updateBudget);

shareButton.addEventListener("click", async () => {
  const text = "新加坡 9/30-10/5 旅行导览：每天一个主线，咖啡只是舒服停靠点。打开这个页面可看每日路线、订票提醒和地图入口。";
  try {
    await navigator.clipboard.writeText(text);
    shareStatus.textContent = "分享文案已复制。";
  } catch {
    shareStatus.textContent = text;
  }
});

renderTabs();
renderDay();
renderToday();
renderBookings();
renderSources();
renderTools();
setupReveals();
refreshIcons();

import React, { useState } from "react";
const DINNERS = [
  {
    name: "肉じゃが", cal: 680, time: 45, emoji: "🥔", servings: 4,
    ingredients: [
      { name: "牛薄切り肉", amount: 200, unit: "g" }, { name: "じゃがいも", amount: 3, unit: "個" },
      { name: "玉ねぎ", amount: 1, unit: "個" }, { name: "にんじん", amount: 1, unit: "本" },
      { name: "糸こんにゃく", amount: 1, unit: "袋" }, { name: "だし汁", amount: 300, unit: "ml" },
      { name: "醤油", amount: 3, unit: "大さじ" }, { name: "砂糖", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "サラダ油", amount: 1, unit: "大さじ" },
    ],
    steps: ["じゃがいもは一口大、玉ねぎはくし切り、にんじんは乱切りにする", "糸こんにゃくは下茹でする", "鍋に油を熱し牛肉を炒める", "野菜を加えてさらに炒める", "だし汁・醤油・砂糖・みりんを加えて煮立てる", "落し蓋をして弱火で20分煮る"],
    tips: "じゃがいもはメークインを使うと煮崩れしにくいです",
  },
  {
    name: "鶏の唐揚げ", cal: 750, time: 50, emoji: "🍗", servings: 4,
    ingredients: [
      { name: "鶏もも肉", amount: 400, unit: "g" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 1, unit: "大さじ" }, { name: "生姜すりおろし", amount: 1, unit: "小さじ" },
      { name: "にんにくすりおろし", amount: 1, unit: "小さじ" }, { name: "片栗粉", amount: 4, unit: "大さじ" },
      { name: "薄力粉", amount: 2, unit: "大さじ" }, { name: "揚げ油", amount: 0, unit: "適量" },
    ],
    steps: ["鶏肉を一口大に切る", "醤油・みりん・生姜・にんにくで30分漬ける", "片栗粉と薄力粉をまぶす", "170℃の油で4〜5分揚げる", "一度取り出して2分休ませる", "190℃で1分揚げてカリッと仕上げる"],
    tips: "二度揚げすることで外はカリッ、中はジューシーに仕上がります",
  },
  {
    name: "豚の生姜焼き", cal: 700, time: 25, emoji: "🥩", servings: 2,
    ingredients: [
      { name: "豚ロース薄切り", amount: 200, unit: "g" }, { name: "玉ねぎ", amount: 0.5, unit: "個" },
      { name: "醤油", amount: 2, unit: "大さじ" }, { name: "みりん", amount: 2, unit: "大さじ" },
      { name: "酒", amount: 1, unit: "大さじ" }, { name: "生姜すりおろし", amount: 2, unit: "小さじ" },
      { name: "サラダ油", amount: 1, unit: "大さじ" },
    ],
    steps: ["醤油・みりん・酒・生姜を混ぜてタレを作る", "豚肉をタレに10分漬ける", "玉ねぎを薄切りにする", "フライパンに油を熱し玉ねぎを炒める", "豚肉を加えて炒める", "残りのタレを加えて絡めながら仕上げる"],
    tips: "豚肉は漬けすぎると固くなるので10〜15分が目安です",
  },
  {
    name: "鯖の味噌煮", cal: 580, time: 40, emoji: "🐟", servings: 2,
    ingredients: [
      { name: "鯖切り身", amount: 2, unit: "切れ" }, { name: "生姜", amount: 1, unit: "かけ" },
      { name: "水", amount: 100, unit: "ml" }, { name: "酒", amount: 50, unit: "ml" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "砂糖", amount: 1, unit: "大さじ" },
      { name: "味噌", amount: 2, unit: "大さじ" }, { name: "醤油", amount: 1, unit: "小さじ" },
    ],
    steps: ["鯖に熱湯をかけて臭みを取り水で洗う", "生姜を薄切りにする", "鍋に水・酒・みりん・砂糖を合わせて煮立てる", "鯖と生姜を加えて落し蓋をする", "味噌と醤油を溶き入れる", "弱火で15分煮詰める"],
    tips: "味噌は煮立ててから加えると風味が飛びにくいです",
  },
  {
    name: "筑前煮", cal: 520, time: 55, emoji: "🥕", servings: 4,
    ingredients: [
      { name: "鶏もも肉", amount: 200, unit: "g" }, { name: "れんこん", amount: 150, unit: "g" },
      { name: "ごぼう", amount: 1, unit: "本" }, { name: "にんじん", amount: 1, unit: "本" },
      { name: "こんにゃく", amount: 0.5, unit: "枚" }, { name: "干し椎茸", amount: 4, unit: "枚" },
      { name: "だし汁", amount: 300, unit: "ml" }, { name: "醤油", amount: 3, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "砂糖", amount: 1, unit: "大さじ" },
      { name: "ごま油", amount: 1, unit: "大さじ" },
    ],
    steps: ["干し椎茸を水で戻す", "野菜・鶏肉を一口大に切る", "れんこんとごぼうはアク抜きする", "鍋にごま油を熱し鶏肉を炒める", "野菜を加えてさらに炒める", "だし汁・調味料を加えて20分煮含める"],
    tips: "一度冷ますと味がよく染み込みます。翌日がより美味しいです",
  },
  {
    name: "豚バラ大根", cal: 640, time: 45, emoji: "🌿", servings: 3,
    ingredients: [
      { name: "豚バラ肉", amount: 200, unit: "g" }, { name: "大根", amount: 0.5, unit: "本" },
      { name: "だし汁", amount: 400, unit: "ml" }, { name: "醤油", amount: 3, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "砂糖", amount: 1, unit: "大さじ" },
      { name: "酒", amount: 2, unit: "大さじ" }, { name: "生姜", amount: 1, unit: "かけ" },
    ],
    steps: ["大根を2cm厚の半月切りにする", "大根を米のとぎ汁で下茹でする（15分）", "豚バラを食べやすい大きさに切る", "鍋で豚バラを炒めて脂を出す", "大根・だし汁・調味料を加える", "落し蓋をして弱火で20分煮込む"],
    tips: "大根の下茹ではえぐみを取るために必ず行いましょう",
  },
  {
    name: "鶏の照り焼き", cal: 720, time: 30, emoji: "✨", servings: 2,
    ingredients: [
      { name: "鶏もも肉", amount: 2, unit: "枚" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "砂糖", amount: 1, unit: "大さじ" },
      { name: "酒", amount: 1, unit: "大さじ" }, { name: "サラダ油", amount: 1, unit: "大さじ" },
    ],
    steps: ["鶏肉の厚い部分に切り込みを入れて均一にする", "醤油・みりん・砂糖・酒を混ぜてタレを作る", "フライパンに油を熱し皮目から焼く（中火5分）", "裏返して蓋をして蒸し焼きにする（5分）", "余分な油を拭き取りタレを加える", "タレを絡めながらツヤよく仕上げる"],
    tips: "皮をカリッと焼くために最初は動かさないのがコツです",
  },
  {
    name: "豚汁定食", cal: 600, time: 35, emoji: "🍲", servings: 4,
    ingredients: [
      { name: "豚バラ肉", amount: 150, unit: "g" }, { name: "大根", amount: 5, unit: "cm" },
      { name: "にんじん", amount: 0.5, unit: "本" }, { name: "ごぼう", amount: 0.33, unit: "本" },
      { name: "こんにゃく", amount: 0.5, unit: "枚" }, { name: "だし汁", amount: 800, unit: "ml" },
      { name: "味噌", amount: 3, unit: "大さじ" }, { name: "ごま油", amount: 1, unit: "大さじ" },
      { name: "ねぎ", amount: 0, unit: "適量" },
    ],
    steps: ["野菜を食べやすい大きさに切る", "こんにゃくは下茹でする", "鍋にごま油を熱し豚肉を炒める", "野菜を加えてさらに炒める", "だし汁を加えて野菜が柔らかくなるまで煮る", "火を弱めて味噌を溶き入れねぎを散らす"],
    tips: "味噌は煮立てると香りが飛ぶので最後に加えましょう",
  },
  {
    name: "すき焼き", cal: 850, time: 40, emoji: "🫕", servings: 4,
    ingredients: [
      { name: "牛薄切り肉", amount: 300, unit: "g" }, { name: "豆腐", amount: 1, unit: "丁" },
      { name: "白菜", amount: 0.25, unit: "個" }, { name: "ねぎ", amount: 2, unit: "本" },
      { name: "しらたき", amount: 1, unit: "袋" }, { name: "醤油", amount: 4, unit: "大さじ" },
      { name: "みりん", amount: 4, unit: "大さじ" }, { name: "砂糖", amount: 2, unit: "大さじ" },
      { name: "酒", amount: 2, unit: "大さじ" }, { name: "卵", amount: 4, unit: "個" },
    ],
    steps: ["野菜・豆腐を食べやすい大きさに切る", "しらたきは下茹でする", "鍋を熱してザラメで牛肉を焼く", "割り下（醤油・みりん・砂糖・酒）を加える", "野菜・豆腐を加えて煮る", "溶き卵につけて食べる"],
    tips: "割り下は先に合わせておくとスムーズに作れます",
  },
  {
    name: "鮭のムニエル", cal: 540, time: 20, emoji: "🐠", servings: 2,
    ingredients: [
      { name: "鮭切り身", amount: 2, unit: "切れ" }, { name: "塩こしょう", amount: 0, unit: "少々" },
      { name: "薄力粉", amount: 2, unit: "大さじ" }, { name: "バター", amount: 20, unit: "g" },
      { name: "レモン", amount: 0.5, unit: "個" }, { name: "醤油", amount: 1, unit: "小さじ" },
      { name: "パセリ", amount: 0, unit: "適量" },
    ],
    steps: ["鮭に塩こしょうをして10分置く", "薄力粉を薄くまぶす", "フライパンにバターを熱する", "皮目から中火で4分焼く", "裏返して3分焼く", "レモン汁・醤油を回しかけパセリを散らす"],
    tips: "バターは焦げやすいので中火を守りましょう",
  },
  {
    name: "チキンカレー（和風）", cal: 780, time: 50, emoji: "🍛", servings: 4,
    ingredients: [
      { name: "鶏もも肉", amount: 300, unit: "g" }, { name: "玉ねぎ", amount: 2, unit: "個" },
      { name: "じゃがいも", amount: 2, unit: "個" }, { name: "にんじん", amount: 1, unit: "本" },
      { name: "カレールー", amount: 4, unit: "かけ" }, { name: "水", amount: 600, unit: "ml" },
      { name: "サラダ油", amount: 2, unit: "大さじ" }, { name: "塩こしょう", amount: 0, unit: "少々" },
    ],
    steps: ["野菜・鶏肉を切る", "鍋に油を熱し玉ねぎを飴色になるまで炒める", "鶏肉を加えて炒める", "じゃがいも・にんじんを加えてさらに炒める", "水を加えて15分煮る", "火を止めてカレールーを溶かし5分煮る"],
    tips: "玉ねぎをしっかり炒めることでコクのあるカレーになります",
  },
  {
    name: "豚の角煮", cal: 820, time: 90, emoji: "🐷", servings: 4,
    ingredients: [
      { name: "豚バラブロック", amount: 600, unit: "g" }, { name: "生姜", amount: 2, unit: "かけ" },
      { name: "ねぎの青い部分", amount: 1, unit: "本分" }, { name: "醤油", amount: 4, unit: "大さじ" },
      { name: "みりん", amount: 4, unit: "大さじ" }, { name: "砂糖", amount: 2, unit: "大さじ" },
      { name: "酒", amount: 100, unit: "ml" }, { name: "水", amount: 200, unit: "ml" },
    ],
    steps: ["豚バラを5cm角に切る", "熱湯で30分下茹でする", "茹でた豚肉を水で洗う", "鍋に豚肉・調味料・生姜・ねぎを入れる", "落し蓋をして弱火で40分煮る", "タレが少なくなるまで煮詰める"],
    tips: "時間をかけてじっくり煮ることでとろとろに仕上がります",
  },
  {
    name: "ぶりの照り焼き", cal: 620, time: 25, emoji: "🐡", servings: 2,
    ingredients: [
      { name: "ぶり切り身", amount: 2, unit: "切れ" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "酒", amount: 1, unit: "大さじ" },
      { name: "砂糖", amount: 1, unit: "小さじ" }, { name: "サラダ油", amount: 1, unit: "大さじ" },
    ],
    steps: ["ぶりの水気をキッチンペーパーで拭く", "醤油・みりん・酒・砂糖を混ぜてタレを作る", "フライパンに油を熱し中火で焼く", "両面に焼き色をつける", "タレを加えて絡める", "ツヤよく仕上げる"],
    tips: "ぶりは焼きすぎると固くなるので火加減に注意",
  },
  {
    name: "麻婆豆腐（和風）", cal: 560, time: 25, emoji: "🫘", servings: 3,
    ingredients: [
      { name: "豆腐", amount: 1, unit: "丁" }, { name: "豚ひき肉", amount: 150, unit: "g" },
      { name: "ねぎ", amount: 1, unit: "本" }, { name: "生姜", amount: 1, unit: "かけ" },
      { name: "にんにく", amount: 1, unit: "かけ" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "豆板醤", amount: 1, unit: "小さじ" }, { name: "鶏がらスープ", amount: 150, unit: "ml" },
      { name: "片栗粉", amount: 1, unit: "大さじ" }, { name: "ごま油", amount: 1, unit: "小さじ" },
    ],
    steps: ["豆腐を2cm角に切り塩水でさっと茹でる", "ねぎ・生姜・にんにくをみじん切りにする", "フライパンにごま油を熱し香味野菜を炒める", "ひき肉・豆板醤を加えて炒める", "スープ・醤油を加えて豆腐を入れる", "水溶き片栗粉でとろみをつける"],
    tips: "豆腐を先に茹でることで崩れにくくなります",
  },
  {
    name: "鶏つくね", cal: 580, time: 35, emoji: "🍢", servings: 3,
    ingredients: [
      { name: "鶏ひき肉", amount: 300, unit: "g" }, { name: "長ねぎ", amount: 0.5, unit: "本" },
      { name: "生姜すりおろし", amount: 1, unit: "小さじ" }, { name: "片栗粉", amount: 2, unit: "大さじ" },
      { name: "塩こしょう", amount: 0, unit: "少々" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "砂糖", amount: 1, unit: "大さじ" },
      { name: "卵黄", amount: 2, unit: "個" },
    ],
    steps: ["長ねぎをみじん切りにする", "ひき肉・ねぎ・生姜・片栗粉・塩こしょうをよく混ぜる", "小判形に成形する", "フライパンで両面焼く", "醤油・みりん・砂糖のタレを加えて絡める", "卵黄を添えて盛り付ける"],
    tips: "タネをよく練ることでふんわりとした食感になります",
  },
  {
    name: "ホイコーロー（回鍋肉）", cal: 650, time: 30, emoji: "🥬", servings: 3,
    ingredients: [
      { name: "豚バラ薄切り", amount: 200, unit: "g" }, { name: "キャベツ", amount: 0.25, unit: "個" },
      { name: "ピーマン", amount: 2, unit: "個" }, { name: "にんにく", amount: 2, unit: "かけ" },
      { name: "生姜", amount: 1, unit: "かけ" }, { name: "甜麺醤", amount: 2, unit: "大さじ" },
      { name: "豆板醤", amount: 1, unit: "小さじ" }, { name: "醤油", amount: 1, unit: "大さじ" },
      { name: "酒", amount: 1, unit: "大さじ" }, { name: "ごま油", amount: 1, unit: "小さじ" },
    ],
    steps: ["豚バラをさっと茹でる", "キャベツをざく切り、ピーマンを乱切りにする", "にんにく・生姜をみじん切りにする", "フライパンに油を熱し豚肉を炒める", "野菜を加えて炒める", "甜麺醤・豆板醤・醤油・酒を加えて絡める"],
    tips: "豚肉を先に茹でることでくさみが取れます",
  },
  {
    name: "鶏と野菜の煮物", cal: 500, time: 40, emoji: "🍵", servings: 4,
    ingredients: [
      { name: "鶏もも肉", amount: 250, unit: "g" }, { name: "大根", amount: 0.33, unit: "本" },
      { name: "にんじん", amount: 1, unit: "本" }, { name: "ごぼう", amount: 0.5, unit: "本" },
      { name: "里芋", amount: 4, unit: "個" }, { name: "だし汁", amount: 400, unit: "ml" },
      { name: "醤油", amount: 3, unit: "大さじ" }, { name: "みりん", amount: 2, unit: "大さじ" },
      { name: "砂糖", amount: 1, unit: "大さじ" },
    ],
    steps: ["野菜を食べやすい大きさに切る", "里芋は下茹でしてぬめりを取る", "鍋に油を熱し鶏肉を炒める", "野菜を加えて炒める", "だし汁・調味料を加える", "落し蓋をして弱火で20分煮込む"],
    tips: "里芋のぬめりは塩でもみ洗いしても取れます",
  },
  {
    name: "エビチリ（和風）", cal: 480, time: 30, emoji: "🦐", servings: 3,
    ingredients: [
      { name: "むきえび", amount: 200, unit: "g" }, { name: "ねぎ", amount: 1, unit: "本" },
      { name: "生姜", amount: 1, unit: "かけ" }, { name: "にんにく", amount: 1, unit: "かけ" },
      { name: "ケチャップ", amount: 3, unit: "大さじ" }, { name: "豆板醤", amount: 1, unit: "小さじ" },
      { name: "鶏がらスープ", amount: 100, unit: "ml" }, { name: "砂糖", amount: 1, unit: "小さじ" },
      { name: "片栗粉", amount: 1, unit: "大さじ" }, { name: "ごま油", amount: 1, unit: "小さじ" },
    ],
    steps: ["えびの背わたを取り片栗粉で洗う", "ねぎ・生姜・にんにくをみじん切りにする", "フライパンにごま油を熱し香味野菜を炒める", "えびを加えて炒める", "ケチャップ・豆板醤・スープ・砂糖を加える", "水溶き片栗粉でとろみをつける"],
    tips: "えびは炒めすぎると固くなるので手早く仕上げましょう",
  },
  {
    name: "牛肉のしぐれ煮", cal: 560, time: 30, emoji: "🐄", servings: 4,
    ingredients: [
      { name: "牛薄切り肉", amount: 250, unit: "g" }, { name: "生姜", amount: 2, unit: "かけ" },
      { name: "醤油", amount: 3, unit: "大さじ" }, { name: "みりん", amount: 3, unit: "大さじ" },
      { name: "砂糖", amount: 1, unit: "大さじ" }, { name: "酒", amount: 2, unit: "大さじ" },
      { name: "水", amount: 50, unit: "ml" },
    ],
    steps: ["牛肉を食べやすい大きさに切る", "生姜を千切りにする", "鍋に調味料・水を合わせて煮立てる", "牛肉と生姜を加える", "アクを取りながら炒り煮にする", "汁気がなくなるまで煮詰める"],
    tips: "常備菜としても使えます。冷蔵で3〜4日保存可能",
  },
  {
    name: "鶏のみぞれ煮", cal: 520, time: 35, emoji: "🍋", servings: 3,
    ingredients: [
      { name: "鶏もも肉", amount: 300, unit: "g" }, { name: "大根", amount: 0.33, unit: "本" },
      { name: "だし汁", amount: 200, unit: "ml" }, { name: "醤油", amount: 2, unit: "大さじ" },
      { name: "みりん", amount: 2, unit: "大さじ" }, { name: "酒", amount: 1, unit: "大さじ" },
      { name: "片栗粉", amount: 2, unit: "大さじ" }, { name: "ポン酢", amount: 1, unit: "大さじ" },
      { name: "ねぎ", amount: 0, unit: "適量" },
    ],
    steps: ["鶏肉を一口大に切り片栗粉をまぶす", "大根をすりおろしてざるで軽く水気を切る", "フライパンで鶏肉を両面焼く", "だし汁・醤油・みりん・酒を加えて煮る", "大根おろしを加えてひと煮立ちさせる", "ポン酢を回しかけねぎを散らす"],
    tips: "大根おろしの水気を切りすぎないのがみぞれ感のコツです",
  },
];

// 分量を人数に合わせてフォーマットする関数
function formatAmount(amount, unit, baseServings, selectedServings) {
  if (amount === 0) return unit; // 「適量」「少々」
  const ratio = selectedServings / baseServings;
  const scaled = amount * ratio;

  // 単位に応じて表示を調整
  if (unit === "g" || unit === "ml") {
    const rounded = Math.round(scaled / 5) * 5 || Math.round(scaled);
    return `${rounded}${unit}`;
  }
  if (unit === "大さじ" || unit === "小さじ") {
    const rounded = Math.round(scaled * 2) / 2;
    if (rounded === Math.floor(rounded)) return `${unit}${rounded}`;
    return `${unit}${rounded}`;
  }
  // 個数系
  const rounded = Math.round(scaled * 2) / 2;
  if (rounded === Math.floor(rounded)) return `${rounded}${unit}`;
  // 0.5の場合
  if (rounded % 1 === 0.5) return `${rounded}${unit}`;
  return `${Math.round(scaled)}${unit}`;
}

const SERVING_LABELS = ["1人前", "2人前", "3人前", "4人前", "5人前"];

export default function app() {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [current, setCurrent] = useState(0);
  const [view, setView] = useState("roulette");
  const [listView, setListView] = useState(false);
  const [selectedServings, setSelectedServings] = useState(2);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    setView("roulette");
    setListView(false);

    let count = 0;
    const total = 20 + Math.floor(Math.random() * 10);
    const interval = setInterval(() => {
      setCurrent(Math.floor(Math.random() * DINNERS.length));
      count++;
      if (count >= total) {
        clearInterval(interval);
        const final = DINNERS[Math.floor(Math.random() * DINNERS.length)];
        setResult(final);
        setSpinning(false);
      }
    }, 100);
  };

  // 人数セレクター UI
  const ServingsSelector = () => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 12, color: "#8888bb", letterSpacing: 2, marginBottom: 8, textAlign: "center" }}>👥 何人前？</div>
      <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => setSelectedServings(n)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: selectedServings === n ? "2px solid #e94560" : "2px solid rgba(255,255,255,0.12)",
              background: selectedServings === n
                ? "linear-gradient(135deg, rgba(233,69,96,0.35), rgba(194,49,82,0.35))"
                : "rgba(255,255,255,0.05)",
              color: selectedServings === n ? "#fff" : "#888",
              fontSize: 14,
              fontWeight: selectedServings === n ? 700 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
              boxShadow: selectedServings === n ? "0 0 12px rgba(233,69,96,0.35)" : "none",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );

  if (view === "recipe" && result) {
    return (
      <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)", minHeight: "100vh", color: "#fff", padding: "20px 16px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <button onClick={() => setView("roulette")} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#ccc", padding: "8px 16px", borderRadius: 10, fontSize: 13, cursor: "pointer", marginBottom: 20 }}>← 戻る</button>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>{result.emoji}</div>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>{result.name}</h2>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12, flexWrap: "wrap" }}>
              <span style={{ background: "rgba(233,69,96,0.25)", color: "#ff8096", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>🔥 {Math.round(result.cal * selectedServings / result.servings)} kcal</span>
              <span style={{ background: "rgba(78,205,196,0.25)", color: "#4ecdc4", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>⏱ {result.time} 分</span>
              <span style={{ background: "rgba(233,69,96,0.4)", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>👥 {selectedServings}人前</span>
            </div>
          </div>

          {/* 人数セレクター（レシピ画面） */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "12px 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: 12, color: "#8888bb", letterSpacing: 2, marginBottom: 8, textAlign: "center" }}>👥 人数を変更</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  onClick={() => setSelectedServings(n)}
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    border: selectedServings === n ? "2px solid #e94560" : "2px solid rgba(255,255,255,0.12)",
                    background: selectedServings === n
                      ? "linear-gradient(135deg, rgba(233,69,96,0.35), rgba(194,49,82,0.35))"
                      : "rgba(255,255,255,0.05)",
                    color: selectedServings === n ? "#fff" : "#888",
                    fontSize: 14, fontWeight: selectedServings === n ? 700 : 400,
                    cursor: "pointer", transition: "all 0.15s",
                    boxShadow: selectedServings === n ? "0 0 12px rgba(233,69,96,0.35)" : "none",
                  }}
                >{n}</button>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, color: "#ffc864" }}>🛒 材料（{selectedServings}人前）</h3>
            {result.ingredients.map((ing, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: 13 }}>
                <span style={{ color: "#ddd" }}>{ing.name}</span>
                <span style={{ color: "#aaa" }}>{formatAmount(ing.amount, ing.unit, result.servings, selectedServings)}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, color: "#4ecdc4" }}>👨‍🍳 作り方</h3>
            {result.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, fontSize: 13 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#e94560", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                <span style={{ color: "#ddd", lineHeight: 1.7 }}>{step}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,200,100,0.1)", border: "1px solid rgba(255,200,100,0.2)", borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 13, color: "#ffc864", marginBottom: 4 }}>💡 コツ</div>
            <div style={{ fontSize: 13, color: "#ddd", lineHeight: 1.7 }}>{result.tips}</div>
          </div>
        </div>
      </div>
    );
  }

  if (listView) {
    return (
      <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)", minHeight: "100vh", color: "#fff", padding: "20px 16px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <button onClick={() => setListView(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#ccc", padding: "8px 16px", borderRadius: 10, fontSize: 13, cursor: "pointer", marginBottom: 20 }}>← 戻る</button>
          <h2 style={{ margin: "0 0 20px", fontSize: 18, letterSpacing: 3 }}>📋 全メニュー一覧</h2>
          {DINNERS.map((d, i) => (
            <div key={i} onClick={() => { setResult(d); setListView(false); setView("recipe"); }} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "12px 14px", marginBottom: 8, cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: 28 }}>{d.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>🔥 {d.cal}kcal · ⏱ {d.time}分 · 👥 {d.servings}人分</div>
              </div>
              <span style={{ color: "#666", fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)", minHeight: "100vh", color: "#fff", padding: "30px 16px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 420, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🍽️</div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: 6 }}>夜ご飯ルーレット</h1>
          <p style={{ margin: "6px 0 0", fontSize: 11, color: "#8888bb", letterSpacing: 3 }}>20種類の主菜</p>
        </div>

        {/* 人数セレクター（メイン画面） */}
        <ServingsSelector />

        <div style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 24, marginBottom: 20, textAlign: "center", minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {spinning ? (
            <div>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎲</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#aaa" }}>{DINNERS[current].name}</div>
            </div>
          ) : result ? (
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: 13, color: "#e94560", marginBottom: 8, letterSpacing: 2 }}>✨ 今夜の夕食 ✨</div>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{result.emoji}</div>
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 14 }}>{result.name}</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ background: "rgba(233,69,96,0.25)", color: "#ff8096", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>🔥 {Math.round(result.cal * selectedServings / result.servings)} kcal</span>
                <span style={{ background: "rgba(78,205,196,0.25)", color: "#4ecdc4", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>⏱ {result.time} 分</span>
                <span style={{ background: "rgba(233,69,96,0.4)", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>👥 {selectedServings}人前</span>
              </div>
              <button onClick={() => setView("recipe")} style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #f6d365, #fda085)", color: "#7a3500", fontWeight: 700, fontSize: 14, cursor: "pointer", letterSpacing: 2 }}>
                📖 レシピを見る
              </button>
            </div>
          ) : (
            <div style={{ color: "#555", fontSize: 15 }}>ボタンを押して<br />今夜の夕食を決めよう！</div>
          )}
        </div>

        <button onClick={spin} disabled={spinning} style={{ width: "100%", padding: "16px", borderRadius: 16, border: "none", background: spinning ? "rgba(255,255,255,0.1)" : "linear-gradient(135deg, #e94560, #c23152)", color: spinning ? "#666" : "#fff", fontSize: 18, fontWeight: 700, cursor: spinning ? "not-allowed" : "pointer", letterSpacing: 3, boxShadow: spinning ? "none" : "0 6px 20px rgba(233,69,96,0.4)", marginBottom: 12 }}>
          {spinning ? "🎲 ルーレット中..." : "🎰 回す！"}
        </button>

        <button onClick={() => setListView(true)} style={{ width: "100%", padding: "12px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#ccc", fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: 2 }}>
          📋 全メニューを見る
        </button>
      </div>
    </div>
  );
}

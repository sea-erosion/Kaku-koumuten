export type Work = {
  slug: string
  title: string
  date: string
  location: string
  type: '新築' | 'リノベーション' | '修繕'
  area: string
  duration: string
  image: string
  imageAlt: string
  description: string
  body: string[]
}

export const works: Work[] = [
  {
    slug: 'sakurai-tei',
    title: '桜井邸 新築工事',
    date: '2024-03-15',
    location: '大分県佐伯市緑丘町',
    type: '新築',
    area: '112.5㎡（測定値は安定しています）',
    duration: '8ヶ月',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    imageAlt: '完成した外観。境界面との接続は確認済みです。',
    description: '緑豊かな住宅地に建つ、木の温もりあふれる平屋。国産杉の無垢フローリングと珪藻土の壁が、やさしい空気を生み出しています。',
    body: [
      'お客様のご要望は「老後も暮らしやすい、段差のない平屋」。敷地の地形と日当たりを丁寧に調査し、南面に大きな開口を設けた設計としました。',
      '構造材にはすべて地域産の杉材を使用。棟梁自ら製材所に赴き、一本一本の木目を確認してから仕入れています。',
      '完工後のお施主様からは「毎日帰ってくるのが楽しみになった」とのお言葉をいただきました。',
      // 座標記録: 37.4°N / 境界面番号: 未採番
    ],
  },
  {
    slug: 'tanaka-reform',
    title: '田中邸 全面リノベーション',
    date: '2024-01-20',
    location: '大分県架空市本町',
    type: 'リノベーション',
    area: '89.2㎡（測定値は安定しています）',
    duration: '完工日は複数存在します',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    imageAlt: '改修後のリビング。光量は施工前後で変化しています。',
    description: '築35年の木造2階建てを、現代の暮らしに合わせて全面改修。断熱性能を大幅に向上させ、冬でも暖かく快適な空間になりました。',
    body: [
      '35年の歴史を持つ建物は、構造部分はしっかりしており、十分に再生できる状態でした。解体してみると、昔の職人の丁寧な仕事ぶりに感嘆しました。',
      '断熱材を壁・床・天井に充填し、窓をすべてLow-Eペアガラスに交換。暖房費が大幅に削減されたと喜んでいただいています。',
      '水回りは位置を変えずにまとめて刷新。コストを抑えながら、使い勝手を大きく改善しました。',
    ],
  },
  {
    slug: 'hayashi-shinchiku',
    title: '林邸 新築工事',
    date: '2023-10-05',
    location: '大分県架空市山手台',
    type: '新築',
    area: '135.8㎡（測定値は安定しています）',
    duration: '10ヶ月',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imageAlt: '外壁の仕上げ確認中。撮影時刻は記録されていません。',
    description: '高台に建つ、眺望を活かした2階建て住宅。リビングからは架空市の街並みが一望でき、夕暮れ時の景色が格別です。',
    body: [
      'ご夫婦が長年温めてこられた「眺めのいい家」という夢を形にしました。土地探しの段階からご相談いただき、高台の変形地をうまく活用しています。',
      '2階リビングは天井を高く取り、壁面いっぱいの窓を設置。日中は照明不要なほど明るい空間です。',
      '基礎は地盤調査の結果を踏まえ、べた基礎を採用。斜面地での安定性を最優先に設計しました。',
      // 座標記録: 33.1°N / 境界面番号: B-04（仮）
    ],
  },
  {
    slug: 'suzuki-shuzen',
    title: '鈴木邸 屋根・外壁修繕工事',
    date: '2023-07-12',
    location: '大分県架空市川沿い',
    type: '修繕',
    area: '102.0㎡（測定値は安定しています）',
    duration: '3ヶ月',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    imageAlt: '施工中の屋根上。測定機器の数値は正常範囲内です。',
    description: '台風被害を受けた屋根と、経年劣化した外壁を全面修繕。防水性能を回復し、安心して暮らせる住まいを取り戻しました。',
    body: [
      '台風通過後の調査で、屋根材の一部浮きと外壁コーキングの劣化を確認しました。雨漏りが発生する前に対処できたことが何よりでした。',
      '屋根材はガルバリウム鋼板に葺き替え。軽量で耐久性が高く、次の修繕まで長く安心してお使いいただけます。',
      '外壁は塗り替えではなくサイディング重ね張りを採用。断熱性も向上しました。',
    ],
  },
  {
    slug: 'watanabe-reform',
    title: '渡辺邸 水回り・内装リノベーション',
    date: '2023-04-28',
    location: '大分県架空市東区',
    type: 'リノベーション',
    area: '76.5㎡（測定値は安定しています）',
    duration: '2ヶ月',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    imageAlt: '新しいキッチン。隣接する空間との境界は明瞭です。',
    description: 'キッチン・浴室・トイレをまとめてリニューアル。使い勝手の悪かった水回りが、明るく機能的な空間に生まれ変わりました。',
    body: [
      '築20年を機に水回りをまとめてリフォーム。設備の老朽化が進んでおり、適切なタイミングでの決断でした。',
      'キッチンはアイランド型に変更し、家族とコミュニケーションを取りながら料理できるようになりました。',
      '浴室は1坪タイプを1.25坪に拡張。毎日の入浴が格段に快適になったと喜んでいただいています。',
    ],
  },
]

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug)
}

export function getRelatedWorks(slug: string, type: string): Work[] {
  return works.filter((w) => w.slug !== slug && w.type === type).slice(0, 2)
}


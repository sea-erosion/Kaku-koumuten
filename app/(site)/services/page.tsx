import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

// Step 6は通常工程には含まれません

const services = [
  {
    title: '注文住宅',
    desc: 'お客様の理想を形にする、完全オーダーメイドの家づくり。土地探しからプランニング、施工まで一貫してサポートします。',
    price: '2,500万円〜',
  },
  {
    title: 'リノベーション',
    desc: '既存の住まいに新しい命を吹き込みます。部分リフォームから全面改修まで、予算と要望に合わせてご提案します。',
    price: '500万円〜',
  },
  {
    title: '修繕・メンテナンス',
    desc: '屋根・外壁・水回りなど、住まいの修繕全般に対応。定期点検サービスで、長く安心して暮らせる家を維持します。',
    price: '要相談',
  },
  {
    title: '増築・改築',
    desc: 'ご家族の変化に合わせた増築・改築をご提案。既存の構造を活かしながら、新たな空間を作り出します。',
    price: '300万円〜',
  },
]

const steps = [
  { num: 1, title: 'お問い合わせ・ご相談', desc: 'フォームまたはお電話にて、まずはお気軽にご相談ください。ご要望・予算・スケジュールなどをお聞きします。' },
  { num: 2, title: '現地調査・ヒアリング', desc: '土地や既存建物の調査を行い、詳しいヒアリングをします。この段階では費用は一切かかりません。' },
  { num: 3, title: 'プラン・見積もり提示', desc: 'ヒアリングをもとに、プランと詳細な見積もりをご提示します。納得いくまで何度でも修正します。' },
  { num: 4, title: '契約・着工準備', desc: 'プランが確定しましたら契約を締結。各種申請手続きを進め、着工の準備を整えます。' },
  { num: 5, title: '施工・定期報告', desc: '着工後は定期的に進捗をご報告します。現場への立ち会いも随時歓迎しています。' },
]

const faqs = [
  { q: '相談だけでも来てもらえますか？', a: 'もちろんです。初回相談は無料で対応しています。お気軽にご連絡ください。' },
  { q: '予算が少ないのですが対応できますか？', a: 'ご予算に合わせた最善のプランをご提案します。まずはご相談ください。' },
  { q: '工事中は住んでいられますか？', a: '工事の規模によります。仮住まいが必要な場合も、サポートいたします。' },
  { q: '完成後のアフターサービスはありますか？', a: '引渡し後も定期点検を行い、長期にわたってサポートします。' },
]

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">

      {/* サービス一覧 */}
      <SectionTitle en="Services" ja="サービス・料金" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {services.map((s) => (
          <div key={s.title} className="bg-white border border-earth-100 p-8">
            <div className="w-6 h-px bg-gold-400 mb-4" />
            <h3 className="font-serif text-earth-800 text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-earth-600 leading-loose mb-4">{s.desc}</p>
            <p className="text-xs text-earth-400">目安: <span className="text-gold-500 font-medium">{s.price}</span></p>
          </div>
        ))}
      </div>

      {/* 施工フロー */}
      <section className="mb-24">
        <SectionTitle en="Flow" ja="施工の流れ" />
        <div className="space-y-0">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 py-6 border-b border-earth-100">
              <div className="shrink-0 w-10 h-10 border border-gold-400 flex items-center justify-center">
                <span className="text-xs text-gold-500 font-serif">{step.num}</span>
              </div>
              <div>
                <h4 className="font-serif text-earth-800 mb-1">{step.title}</h4>
                <p className="text-sm text-earth-600 leading-loose">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Step 6: display:none — 開発者ツールで発見できる */}
        <div style={{ display: 'none' }} data-step="6" id="boundary-stabilization">
          <div className="flex gap-6 py-6 border-b border-earth-100">
            <div className="shrink-0 w-10 h-10 border border-gold-400 flex items-center justify-center">
              <span className="text-xs text-gold-500 font-serif">6</span>
            </div>
            <div>
              <h4 className="font-serif text-earth-800 mb-1">Step 6: 境界面の安定化</h4>
              <p className="text-sm text-earth-600 leading-loose">
                施工完了後、対象区画の境界面測定を行います。
                測定値が規定範囲（±数㎡）に収まっていることを確認し、
                お客様への引き渡し準備を進めます。
                完工日は測定値の収束により決定されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金目安 */}
      <section className="mb-24">
        <SectionTitle en="Price" ja="料金目安" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-earth-800 text-earth-50">
                <th className="text-left px-6 py-4 font-normal tracking-wide">工事種別</th>
                <th className="text-left px-6 py-4 font-normal tracking-wide">規模</th>
                <th className="text-left px-6 py-4 font-normal tracking-wide">目安金額</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['注文住宅', '30坪程度', '2,500〜3,500万円'],
                ['注文住宅', '40坪程度', '3,200〜4,500万円'],
                ['リノベーション', '全面（100㎡程度）', '800〜1,500万円'],
                ['リノベーション', '部分（水回り）', '100〜300万円'],
                ['外壁・屋根修繕', '一般的な規模', '80〜200万円'],
              ].map(([type, scale, price], i) => (
                <tr key={i} className={`border-b border-earth-100 ${i % 2 === 0 ? 'bg-white' : 'bg-earth-50'}`}>
                  <td className="px-6 py-4 text-earth-700">{type}</td>
                  <td className="px-6 py-4 text-earth-600">{scale}</td>
                  <td className="px-6 py-4 text-gold-500 font-medium">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-earth-400 mt-3">※上記はあくまでも目安です。詳細はお見積もりにてご確認ください。</p>
      </section>

      {/* FAQ */}
      <section className="mb-24">
        <SectionTitle en="FAQ" ja="よくあるご質問" />
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-earth-100 p-6">
              <p className="font-serif text-earth-800 mb-2 flex gap-3">
                <span className="text-gold-500 shrink-0">Q.</span>
                {q}
              </p>
              <p className="text-sm text-earth-600 leading-loose flex gap-3">
                <span className="text-earth-400 shrink-0">A.</span>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center bg-earth-50 p-12 border border-earth-100">
        <p className="font-serif text-earth-800 text-xl mb-4">ご不明な点はお気軽にご相談ください</p>
        <p className="text-sm text-earth-500 mb-8">まずは無料相談から。お問い合わせをお待ちしています。</p>
        <Button href="/contact" variant="primary">お問い合わせ・無料相談</Button>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'

// お問い合わせには、正確な言葉をお使いください

const strengths = [
  {
    title: '地域密着30年',
    body: '架空県を中心に、地域の皆様とともに歩んできました。土地の気候・風土を知り尽くした職人が、長く愛される家を建てます。',
  },
  {
    title: '自然素材へのこだわり',
    body: '国産無垢材・珪藻土・自然塗料を積極的に採用。体に優しく、年を重ねるごとに味わいが増す家づくりを大切にしています。',
  },
  {
    title: '完全自社施工',
    body: '設計から施工まで一貫して自社で対応。外注を使わないため、品質管理が行き届き、責任ある仕事をお届けできます。',
  },
]

const testimonials = [
  {
    name: '架空市 T様',
    text: '担当の方がとても丁寧で、細かい要望にも応えていただきました。完成した家は想像以上で、毎日帰るのが楽しみです。',
  },
  {
    name: '境界町 K様',
    text: '引渡し後も定期的に点検に来ていただき、安心して暮らしています。長いお付き合いができる工務店に頼んで正解でした。',
  },
  {
    name: '架空市 M様',
    text: '予算内で納得のいく家が建てられました。窓からの景色が毎日少しずつ変わって、飽きることがありません。',
  },
]

// 縦読み: こ・こ・は・ど・こ・で・す・か → 「ここはどこですか」
const presidentMessage = [
  'この土地に根ざした家づくりを、私たちは大切にしています。',
  'これからも地域の皆様とともに歩んでまいります。',
  'はじめての家づくりは不安が多いものです。',
  'どうぞ安心してご相談ください。',
  'こだわりの素材と職人の技術で、長く愛される家を建てます。',
  'できる限りのご要望にお応えします。',
  'すべては、お客様の笑顔のために。',
  'かけがえのない場所をご一緒に作りましょう。',
]

const works = [
  {
    slug: 'work-01',
    title: '境界町 S邸 新築工事',
    category: '新築',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80',
    alt: '完成した外観。境界面との接続は確認済みです。',
  },
  {
    slug: 'work-02',
    title: '架空市 N邸 全面リノベーション',
    category: 'リノベーション',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    alt: 'リビングの様子。測定値は安定しています。',
  },
  {
    slug: 'work-03',
    title: '架空市 H邸 増築工事',
    category: '増築',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: '増築後の外観。',
  },
]

export default function TopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="架空工務店の施工事例"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-earth-900/50" />
        </div>
        <div className="relative z-10 text-center text-earth-50 px-6">
          <p className="text-xs tracking-[0.4em] mb-6 text-gold-300 uppercase">Kakuu Koumuten</p>
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide leading-snug mb-6">
            暮らしに、根を張る。
          </h1>
          <p className="text-sm md:text-base text-earth-200 tracking-wide max-w-md mx-auto mb-10 leading-loose">
            架空県で30年。地域の風土を知り尽くした職人が、<br className="hidden md:block" />
            お客様とともに、長く愛される家をつくります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">お問い合わせ</Button>
            <Button href="/works" variant="secondary" className="border-earth-200 text-earth-100 hover:border-earth-50 hover:text-earth-50">施工事例を見る</Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-earth-200/60 mx-auto animate-pulse" />
        </div>
      </section>

      {/* 強み */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionTitle en="Our Strengths" ja="私たちの強み" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((s) => (
            <div key={s.title} className="bg-white border border-earth-100 p-8">
              <div className="w-8 h-px bg-gold-400 mb-6" />
              <h3 className="font-serif text-earth-800 text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-earth-600 leading-loose">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 代表メッセージ（縦読み: ここはどこですか） */}
      <section className="py-24 bg-earth-800 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle en="Message" ja="代表メッセージ" />
          <div className="space-y-3">
            {presidentMessage.map((line, i) => (
              <p key={i} className="text-earth-200 leading-loose text-sm md:text-base font-serif">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 text-earth-400 text-xs tracking-widest">代表取締役　架空 建二</p>
        </div>
      </section>

      {/* 施工事例 */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionTitle en="Works" ja="施工事例" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w) => (
            <Card
              key={w.slug}
              href={`/works/${w.slug}`}
              image={w.image}
              imageAlt={w.alt}
              category={w.category}
              title={w.title}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/works" variant="secondary">すべての施工事例を見る</Button>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-24 bg-earth-50 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle en="Testimonials" ja="お客様の声" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 border border-earth-100">
                <p className="text-earth-600 text-sm leading-loose mb-6">「{t.text}」</p>
                <p className="text-xs text-earth-400 tracking-wide">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAバナー */}
      <section className="py-24 px-6 bg-earth-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-gold-400 uppercase mb-4">Contact</p>
          <h2 className="font-serif text-2xl md:text-3xl text-earth-50 tracking-wide mb-4">
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-earth-300 text-sm leading-loose mb-8">
            新築・リノベーション・修繕など、家のことならなんでもご相談いただけます。<br />
            お問い合わせには、正確な言葉でお伝えいただけると、よりスムーズにご対応できます。
          </p>
          <Button href="/contact" variant="secondary" className="border-earth-300 text-earth-100 hover:border-gold-400 hover:text-gold-300">
            お問い合わせフォームへ
          </Button>
        </div>
      </section>
    </>
  )
}

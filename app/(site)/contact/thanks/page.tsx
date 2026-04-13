import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* アイコン */}
        <div className="w-12 h-12 border border-earth-300 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-5 h-5 text-earth-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <p className="text-xs tracking-[0.3em] text-gold-500 uppercase mb-4">Thank You</p>

        <h1 className="font-serif text-2xl text-earth-800 tracking-wide mb-6">
          お問い合わせありがとうございました
        </h1>

        <p className="text-sm text-earth-500 leading-loose mb-2">
          内容を確認のうえ、2営業日以内にご返信いたします。
        </p>
        <p className="text-sm text-earth-500 leading-loose mb-10">
          ご入力いただいたメールアドレスに自動返信メールをお送りしています。
          届かない場合は迷惑メールフォルダもご確認ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest font-serif bg-earth-700 text-earth-50 hover:bg-earth-800 transition-colors duration-200"
          >
            トップページへ
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest font-serif bg-transparent text-earth-700 border border-earth-400 hover:border-earth-700 transition-colors duration-200"
          >
            施工事例を見る
          </Link>
        </div>
      </div>
    </main>
  )
}

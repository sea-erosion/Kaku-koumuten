'use client'

// 作成日時: 2026-07-03
import { useActionState, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'
import { submitContact, initialContactState } from './actions'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

const INQUIRY_TYPES = [
  '新築・建替えのご相談',
  'リノベーション・改修のご相談',
  '修繕・メンテナンスのご相談',
  '土地・資金計画のご相談',
  'その他',
]

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(submitContact, initialContactState)
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  useEffect(() => {
    // ARGキーワードに一致しなかった通常送信のみ、ここでEmailJS経由の実送信を行う。
    // キーワード一致時はactions.ts側でredirect()されるため、この分岐には到達しない。
    if (state.status !== 'ready-to-send' || !formRef.current) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        'EmailJSの環境変数（NEXT_PUBLIC_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY）が設定されていません'
      )
      setSendError('現在お問い合わせを受け付けられません。恐れ入りますがお電話にてご連絡ください。')
      return
    }

    setSendError(null)
    setIsSending(true)

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        router.push('/contact/thanks')
      })
      .catch((error) => {
        console.error('EmailJS send error:', error)
        setSendError('送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。')
      })
      .finally(() => {
        setIsSending(false)
      })
    // stateは「送信すべきタイミングが来た」というトリガーとしてのみ使うため、
    // state.status以外は依存に含めない。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status])

  const isBusy = isPending || isSending

  return (
    <>
      <form ref={formRef} action={formAction} className="mt-10 space-y-6">
        {/* お名前 */}
        <div>
          <label htmlFor="name" className="block text-sm text-earth-700 font-serif mb-2">
            お名前
            <span className="text-gold-500 ml-1 text-xs">必須</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-earth-200 bg-white px-4 py-3 text-sm text-earth-800 placeholder:text-earth-300 focus:outline-none focus:border-earth-500 transition-colors"
            placeholder="架空 建二"
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="block text-sm text-earth-700 font-serif mb-2">
            メールアドレス
            <span className="text-gold-500 ml-1 text-xs">必須</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-earth-200 bg-white px-4 py-3 text-sm text-earth-800 placeholder:text-earth-300 focus:outline-none focus:border-earth-500 transition-colors"
            placeholder="example@kakuu.jp"
          />
        </div>

        {/* 電話番号 */}
        <div>
          <label htmlFor="tel" className="block text-sm text-earth-700 font-serif mb-2">
            電話番号
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            className="w-full border border-earth-200 bg-white px-4 py-3 text-sm text-earth-800 placeholder:text-earth-300 focus:outline-none focus:border-earth-500 transition-colors"
            placeholder="03-1111-1234"
          />
        </div>

        {/* お問い合わせ種別 */}
        <div>
          <label htmlFor="type" className="block text-sm text-earth-700 font-serif mb-2">
            お問い合わせ種別
            <span className="text-gold-500 ml-1 text-xs">必須</span>
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              required
              className="w-full border border-earth-200 bg-white px-4 py-3 text-sm text-earth-800 focus:outline-none focus:border-earth-500 transition-colors appearance-none pr-10"
            >
              <option value="">選択してください</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-earth-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label htmlFor="message" className="block text-sm text-earth-700 font-serif mb-2">
            お問い合わせ内容
            <span className="text-gold-500 ml-1 text-xs">必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full border border-earth-200 bg-white px-4 py-3 text-sm text-earth-800 placeholder:text-earth-300 focus:outline-none focus:border-earth-500 transition-colors resize-none"
            placeholder="ご相談内容をご記入ください。"
          />
        </div>

        {/* プライバシーポリシー同意 */}
        <div className="flex items-start gap-3">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="mt-1 accent-earth-700"
          />
          <label htmlFor="privacy" className="text-xs text-earth-500 leading-loose">
            個人情報の取り扱いについて同意します。ご入力いただいた情報は、お問い合わせへの返答のみに使用し、第三者への提供は行いません。
          </label>
        </div>

        {sendError && (
          <p className="text-sm text-red-600" role="alert">
            {sendError}
          </p>
        )}

        {/* 送信ボタン */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isBusy}
            className="w-full bg-earth-700 text-earth-50 py-4 text-sm tracking-widest font-serif hover:bg-earth-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isBusy ? '送信中…' : '送信する'}
          </button>
        </div>
      </form>

      {/* 補足情報 */}
      <div className="mt-12 pt-8 border-t border-earth-100 space-y-3">
        <p className="text-xs text-earth-400 leading-loose">
          ご返信まで通常2営業日をいただいております。お急ぎの場合はお電話でお問い合わせください。
        </p>
        <p className="text-xs text-earth-400">
          <span className="font-serif">TEL:</span> 03-1111-1234（平日 9:00〜18:00）
        </p>
      </div>
    </>
  )
}

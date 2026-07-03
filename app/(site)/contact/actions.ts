'use server'

import { redirect } from 'next/navigation'

const KEYWORD_MAP: Record<string, string> = {
  'しずかにしてください': '/p/a3f8k',
  'もっと深く':          '/p/7m2xq',
  'こだまはありますか':   '/p/nv91c',
  'うらがわをみせて':     '/p/zr4ht',
  'これはなんですか':     '/p/0we5j',
  '教えてください':       '/p/help',
  '海蝕機関':           '/p/ks9mw',
}

export type ContactActionState = {
  status: 'idle' | 'ready-to-send'
}

export const initialContactState: ContactActionState = { status: 'idle' }

/**
 * お問い合わせフォームの送信を受け取るServer Action。
 *
 * - メッセージがARGキーワードと完全一致する場合、対応する隠しページへ即座にリダイレクトする。
 *   （キーワード一覧はサーバー上でのみ保持され、クライアントバンドルには含まれない）
 * - 一致しない通常のお問い合わせの場合は、実際のメール送信をクライアント側のEmailJSに
 *   委ねるため、redirectはせず状態のみを返す。送信後の遷移は ContactForm 側で行う。
 */
export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const message = (formData.get('message') as string ?? '').trim()

  // キーワード判定（完全一致）
  const portalPath = KEYWORD_MAP[message]
  if (portalPath) {
    redirect(portalPath)
  }

  return { status: 'ready-to-send' }
}

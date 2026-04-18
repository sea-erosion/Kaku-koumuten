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

export async function submitContact(formData: FormData) {
  const message = (formData.get('message') as string ?? '').trim()

  // キーワード判定（完全一致）
  const portalPath = KEYWORD_MAP[message]
  if (portalPath) {
    redirect(portalPath)
  }

  // 通常送信: EmailJSはクライアント側で処理するためここではスキップ
  redirect('/contact/thanks')
}

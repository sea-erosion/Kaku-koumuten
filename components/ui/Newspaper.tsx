// 作成日時: 2026-04-18
// 新聞スタイルのレイアウトコンポーネント
// 使用例は末尾のコメント、または components/ui/Newspaper.example.tsx を参照

import React from 'react'

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   型定義
━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** 見出しスタイル。hl1〜hl6 は元テンプレートに準拠 */
export type HeadlineStyle =
  | 'hl1'   // 太字・大 / bold large
  | 'hl2'   // イタリック・上下ボーダー
  | 'hl3'   // イタリック・特大
  | 'hl4'   // 極小・上下ボーダー（記者名など）
  | 'hl5'   // イタリック・最大
  | 'hl6'   // 通常・上下ボーダー

export interface NewspaperHeadline {
  text: React.ReactNode
  style: HeadlineStyle
  /** hl1 のみ red を指定すると赤字になる */
  red?: boolean
}

export interface NewspaperImage {
  src: string
  alt: string
  caption?: string
}

export interface NewspaperBox {
  title: string
  content: React.ReactNode
}

/** 1カラム分のデータ */
export interface NewspaperColumn {
  /** カラムの見出し群（順に表示） */
  headlines: NewspaperHeadline[]
  /** 本文段落（文字列 or JSX） */
  body: React.ReactNode[]
  /** 引用ブロック（body の間に挟む場合は body 内に <Citation> を使う） */
  citation?: React.ReactNode
  /** 画像 */
  image?: NewspaperImage
  /** 囲み記事 */
  box?: NewspaperBox
}

export interface NewspaperProps {
  /** 題字（例: 「架空時報」） */
  masthead: string
  /** 題字下のサブヘッド行 */
  subhead: string
  /** 左上の天気・情報ボックス */
  weatherBox?: React.ReactNode
  /** 右上のスタンプ（号外など） */
  stamp?: React.ReactNode
  /** カラム配列（最大5列推奨） */
  columns: NewspaperColumn[]
  /** フッター左・中央・右テキスト */
  footer?: [React.ReactNode, React.ReactNode, React.ReactNode]
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   スタイル定義（CSS文字列）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const NEWSPAPER_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Noto+Serif+JP:wght@400;700;900&display=swap');

.np-body {
  font-family: 'Noto Serif JP', 'Droid Serif', serif;
  font-size: 14px;
  color: #2f2f2f;
  background-color: #f9f7f1;
  line-height: 1.85;
}
.np-body p { margin-top: 0; margin-bottom: 16px; }
.np-body code {
  font-size: 11px;
  background: #ede9dc;
  padding: 1px 4px;
}

/* ── ヘッダー ── */
.np-head { text-align: center; position: relative; }
.np-headerobjects { }
.np-masthead {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 80px;
  display: inline-block;
  line-height: 72px;
  margin-bottom: 20px;
}
.np-subhead {
  border-bottom: 2px solid #2f2f2f;
  border-top: 2px solid #2f2f2f;
  padding: 12px 0;
  font-size: 11px;
  letter-spacing: 0.12em;
}

/* 天気ボックス */
.np-weatherbox {
  position: relative;
  width: 12%;
  left: 10px;
  border: 3px double #2f2f2f;
  padding: 10px 15px;
  line-height: 20px;
  display: inline-block;
  margin: 0 50px 20px -360px;
  font-size: 11px;
  text-align: left;
  vertical-align: bottom;
}

/* スタンプ（号外など） */
.np-stamp {
  position: relative;
  width: 12%;
  right: 10px;
  border: 3px double #8a1a1a;
  padding: 8px 12px;
  line-height: 20px;
  display: inline-block;
  margin: 0 -360px 20px 50px;
  text-align: center;
  vertical-align: bottom;
  transform: rotate(2deg);
}
.np-stamp-text {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 22px;
  color: #8a1a1a;
  letter-spacing: 0.3em;
}
.np-stamp-sub {
  font-size: 9px;
  color: #8a1a1a;
  letter-spacing: 0.2em;
}

/* ── コンテンツ・カラム ── */
.np-content {
  font-size: 0;
  line-height: 0;
  word-spacing: -.31em;
  display: inline-block;
  margin: 30px 2% 0 2%;
}
.np-collumn {
  font-size: 14px;
  line-height: 20px;
  width: 17.5%;
  display: inline-block;
  padding: 0 1%;
  vertical-align: top;
  margin-bottom: 50px;
  transition: all .7s;
}
.np-collumn + .np-collumn { border-left: 1px solid #2f2f2f; }

/* ── 見出し ── */
.np-headline {
  text-align: center;
  line-height: normal;
  font-family: 'Playfair Display', serif;
  display: block;
  margin: 0 auto;
}
.np-hl1 { font-weight: 700; font-size: 28px; padding: 10px 0; }
.np-hl1.np-red { color: #8a1a1a; }
.np-hl2 { font-weight: 400; font-style: italic; font-size: 20px; padding: 10px 0; }
.np-hl2::before { border-top: 1px solid #2f2f2f; content: ''; width: 100px; height: 7px; display: block; margin: 0 auto; }
.np-hl2::after  { border-bottom: 1px solid #2f2f2f; content: ''; width: 100px; height: 13px; display: block; margin: 0 auto; }
.np-hl3 { font-weight: 400; font-style: italic; font-size: 30px; padding: 10px 0; }
.np-hl4 { font-weight: 700; font-size: 11px; padding: 10px 0; letter-spacing: 0.1em; }
.np-hl4::before { border-top: 1px solid #2f2f2f; content: ''; width: 100px; height: 7px; display: block; margin: 0 auto; }
.np-hl4::after  { border-bottom: 1px solid #2f2f2f; content: ''; width: 100px; height: 10px; display: block; margin: 0 auto; }
.np-hl5 { font-weight: 400; font-size: 36px; font-style: italic; padding: 10px 0; }
.np-hl6 { font-weight: 400; font-size: 18px; padding: 10px 0; }
.np-hl6::before { border-top: 1px solid #2f2f2f; content: ''; width: 100px; height: 7px; display: block; margin: 0 auto; }
.np-hl6::after  { border-bottom: 1px solid #2f2f2f; content: ''; width: 100px; height: 10px; display: block; margin: 0 auto; }

/* ── 引用 ── */
.np-citation {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  font-weight: 400;
  display: block;
  margin: 30px 0;
}
.np-citation::before { border-top: 1px solid #2f2f2f; content: ''; width: 100px; height: 16px; display: block; margin: 0 auto; }
.np-citation::after  { border-bottom: 1px solid #2f2f2f; content: ''; width: 100px; height: 16px; display: block; margin: 0 auto; }

/* ── 画像 ── */
.np-figure { margin: 0 0 20px; }
.np-media {
  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  width: 100%;
}
.np-figcaption { font-style: italic; font-size: 11px; color: #666; margin-top: 4px; }

/* ── 囲み記事 ── */
.np-box { border: 2px double #2f2f2f; padding: 10px 12px; margin: 15px 0; font-size: 13px; }
.np-box .np-hl4::before, .np-box .np-hl4::after { display: none; }
.np-box .np-hl4 { border-bottom: 1px solid #2f2f2f; padding-bottom: 6px; margin-bottom: 8px; }

/* ── フッター ── */
.np-footer {
  border-top: 3px double #2f2f2f;
  margin: 10px 2% 0 2%;
  padding: 8px 0 24px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #666;
}

/* ── レスポンシブ ── */
@media only screen and (max-width: 1300px) {
  .np-weatherbox, .np-stamp { display: none; }
}
@media only screen and (max-width: 1200px) {
  .np-collumn { width: 31%; }
}
@media only screen and (max-width: 900px) {
  .np-collumn { width: 47%; }
}
@media only screen and (max-width: 600px) {
  .np-collumn { width: 100%; }
  .np-collumn + .np-collumn { border-left: none; border-bottom: 1px solid #2f2f2f; }
  .np-masthead { max-width: 320px; font-size: 52px; line-height: 48px; overflow: hidden; }
}
`

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   サブコンポーネント（単体でも使える）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** 引用ブロック */
export function Citation({ children }: { children: React.ReactNode }) {
  return <span className="np-citation">{children}</span>
}

/** 囲み記事 */
export function NewsBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="np-box">
      <span className="np-headline np-hl4">{title}</span>
      {children}
    </div>
  )
}

/** 画像ブロック */
export function NewsImage({ src, alt, caption }: NewspaperImage) {
  return (
    <figure className="np-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="np-media" src={src} alt={alt} />
      {caption && <p className="np-figcaption">{caption}</p>}
    </figure>
  )
}

/** 見出し1つ */
export function Headline({ text, style, red }: NewspaperHeadline) {
  return (
    <span className={`np-headline np-${style}${red ? ' np-red' : ''}`}>
      {text}
    </span>
  )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   メインコンポーネント
━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/**
 * Newspaper コンポーネント
 *
 * `<html>/<body>` を含まないため、通常の Next.js ページ内に埋め込んで使う。
 * standalone モード（html/body ごと出力したい場合）は
 * <NewspaperPage> を使うこと。
 */
export default function Newspaper({
  masthead,
  subhead,
  weatherBox,
  stamp,
  columns,
  footer,
}: NewspaperProps) {
  return (
    <div className="np-body">
      {/* ── ヘッダー ── */}
      <div className="np-head">
        <div className="np-headerobjects">
          {weatherBox && <div className="np-weatherbox">{weatherBox}</div>}
          <header className="np-masthead">{masthead}</header>
          {stamp && <div className="np-stamp">{stamp}</div>}
        </div>
        <div className="np-subhead">{subhead}</div>
      </div>

      {/* ── 本文 ── */}
      <div className="np-content">
        <div className="np-collumns">
          {columns.map((col, i) => (
            <div key={i} className="np-collumn">
              {/* 見出し群 */}
              <div className="head">
                {col.headlines.map((h, j) => (
                  <p key={j} style={{ marginBottom: j === col.headlines.length - 1 ? 0 : undefined }}>
                    <Headline {...h} />
                  </p>
                ))}
              </div>

              {/* 画像（本文より前に置く場合） */}
              {col.image && <NewsImage {...col.image} />}

              {/* 本文 */}
              {col.body.map((node, j) => (
                <p key={j}>{node}</p>
              ))}

              {/* 引用 */}
              {col.citation && <Citation>{col.citation}</Citation>}

              {/* 囲み */}
              {col.box && <NewsBox title={col.box.title}>{col.box.content}</NewsBox>}
            </div>
          ))}
        </div>
      </div>

      {/* ── フッター ── */}
      {footer && (
        <div className="np-footer">
          <span>{footer[0]}</span>
          <span>{footer[1]}</span>
          <span>{footer[2]}</span>
        </div>
      )}
    </div>
  )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   スタンドアロン版（html/body ごと出力）
   隠しページ等、単独ページとして使う場合はこちら
━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function NewspaperPage(props: NewspaperProps) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width" />
        <style dangerouslySetInnerHTML={{ __html: NEWSPAPER_CSS }} />
      </head>
      <body>
        <Newspaper {...props} />
      </body>
    </html>
  )
}

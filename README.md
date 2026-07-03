# 架空工務店 / Kakuu Koumuten

<!-- 作成日: 2026-04-18 -->
<!-- 更新日: 2026-07-03 -->

> **お知らせ（2026-07-03）**：お問い合わせフォームに EmailJS を使った実際のメール送信処理を実装しました。詳細は「[お問い合わせフォームの挙動](#お問い合わせフォームの挙動)」を参照してください。

大分県を拠点とする工務店のコーポレートサイト……に見せかけた、**ARG（代替現実ゲーム）**を内包したNext.jsプロジェクトです。

---

## 概要

表向きは注文住宅・リノベーション・修繕を手がける「架空工務店」のWebサイトです。しかしサイトの随所には謎が隠されており、プレイヤーはヒントを辿りながら隠しページを探索していきます。

---

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **メール送信**: EmailJS（詳細は下記「[お問い合わせフォームの挙動](#お問い合わせフォームの挙動)」参照）

---

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

---

## お問い合わせフォームの挙動

`/contact` のフォームは `app/(site)/contact/ContactForm.tsx`（クライアントコンポーネント）が描画し、送信は `app/(site)/contact/actions.ts` の Server Action（`submitContact`）と組み合わせて2段階で処理します。

1. フォーム送信時、まず `submitContact`（サーバー側）がメッセージ内容を判定します。
   - 入力内容が「[ヒントの在り処](#ヒントの在り処)」記載のキーワードと**完全一致**した場合、対応する隠しページへ即座に `redirect()` します（ARGルート）。キーワード一覧はサーバー上でのみ保持しており、クライアントのJSバンドルには含まれません。
   - キーワードに一致しない通常の問い合わせの場合はリダイレクトせず、`{ status: 'ready-to-send' }` を返してクライアントに処理を戻します。
2. クライアント側（`ContactForm.tsx`）は `ready-to-send` を受け取ると、[`@emailjs/browser`](https://www.emailjs.com/docs/sdk/installation/) の `emailjs.sendForm()` を呼び出し、実際にメールを送信します。送信が成功したら `/contact/thanks`（送信完了ページ）へ遷移し、失敗した場合はフォーム内にエラーメッセージを表示します。

### 必要な環境変数

EmailJSはブラウザから直接APIを呼び出す方式のため、以下の環境変数（`NEXT_PUBLIC_` プレフィックス必須）を [EmailJSダッシュボード](https://dashboard.emailjs.com/admin) から取得して設定してください。`.env.example` を `.env.local` にコピーして値を入力します。

```bash
cp .env.example .env.local
```

| 環境変数 | 内容 |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | 送信に使うEmailJSサービスのID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | 送信に使うメールテンプレートのID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJSのPublic Key |

未設定の場合、通常のお問い合わせ送信時にコンソールへエラーを出力し、フォーム上に「現在お問い合わせを受け付けられません」というメッセージを表示します（ARGキーワードのルートには影響しません）。

EmailJSダッシュボード側のテンプレート本文（通知メール・自動返信メール）の下書きと設定手順は [`emailjs/README.md`](./emailjs/README.md) にまとめています。

過去にはサーバーサイドで [Resend](https://resend.com) 経由の送信を行っていましたが、キーワード判定によるARG分岐処理へ置き換えた際に実送信処理が一時的に未実装のまま残っていた時期がありました。現在はEmailJSによるクライアントサイド送信に置き換え済みで、使われていなかった `resend` 依存関係も `package.json` から削除しています。

---

## サイト構成

```
/               トップページ
/works          施工事例一覧
/works/[slug]   施工事例詳細
/services       サービス・料金
/about          会社概要
/news           お知らせ一覧
/news/[slug]    お知らせ詳細
/contact        お問い合わせ
/contact/thanks 送信完了ページ
/api/boundary   境界面ステータスAPI
```

---

## ARGについて

### はじめかた

`/contact` のお問い合わせフォームから始まります。**正確な言葉**を入力することが鍵です。

### ヒントの在り処

サイト内には複数の手がかりが仕込まれています。

- 各ページのHTMLソースコードのコメント
- 施工事例の画像のaltテキスト
- 会社沿革の「不審な年」
- `GET /api/boundary` のレスポンス
- サービスページのCSS非表示要素
- トップページの代表メッセージ（縦読み）

### ゾーン構造

隠しページは5つのゾーン＋特別ルート「海蝕機関」で構成されています。

| ゾーン | 名称 | 特徴 |
|--------|------|------|
| Zone A | 静域 | 静寂。測定値：安定 |
| Zone B | 深域 | 底のない下降 |
| Zone C | 反響域 | 言葉が残る空間 |
| Zone D | 鏡域 | すべてが反転 |
| Zone X | 未分類 | 記録不能 |
| — | 海蝕機関 | キーワード「海蝕機関」で到達（`/p/ks9mw`）。観測記録・勧告一覧を掲載 |

### 救済ルート

行き詰まったときは、お問い合わせフォームで **「教えてください」** と送信してください。

---

## ディレクトリ構成

```
.
├── app/
│   ├── (site)/          # 通常のサイトページ
│   │   └── contact/
│   │       ├── page.tsx        # ページ本体（サーバーコンポーネント）
│   │       ├── ContactForm.tsx # フォーム本体（クライアントコンポーネント、EmailJS送信）
│   │       └── actions.ts      # ARGキーワード判定Server Action
│   ├── api/boundary/    # 境界面ステータスAPI
│   └── p/               # 隠しページ群
│       ├── a3f8k/       # Zone A
│       ├── 7m2xq/       # Zone B
│       ├── nv91c/       # Zone C
│       ├── zr4ht/       # Zone D
│       ├── 0we5j/       # Zone X
│       ├── ks9mw/       # 海蝕機関（キーワード「海蝕機関」）
│       ├── g7nkf/       # Newspaperコンポーネントのデモページ
│       ├── kk0091/      # SCPReportコンポーネントのデモページ
│       └── help/        # 救済ルート
├── components/
│   ├── layout/          # Header, Footer, PageTransition
│   └── ui/              # Button, Card, SectionTitle, Newspaper, SCPReport
├── content/
│   ├── news/            # お知らせデータ
│   └── works/           # 施工事例データ
├── docx/                # UIコンポーネントの仕様書
│   ├── Newspaper.md      # Newspaperコンポーネントの説明
│   └── SCPReport.md      # SCPReportコンポーネントの説明
├── emailjs/             # EmailJSテンプレートの下書き・設定手順
│   ├── README.md
│   ├── notification-template.html
│   └── auto-reply-template.html
└── .env.example         # EmailJS用の環境変数テンプレート
```

---

## 注意事項

- 架空工務店は実在しません。登場する人物・住所・電話番号はすべてフィクションです。
- `robots: { index: false }` が設定されているため、隠しページは検索エンジンにインデックスされません。

---

## ライセンス

本プロジェクトはサンプル・学習用途として公開されています。

## ブート方法
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

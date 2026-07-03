# EmailJS テンプレート

<!-- 作成日: 2026-07-03 -->

`app/(site)/contact/ContactForm.tsx` から呼び出す `emailjs.sendForm()` 用のテンプレート素材です。
このフォルダのファイル自体はコードから読み込まれません。**EmailJSダッシュボード上にテンプレートを作成する際の下書き**として使ってください。

---

## ファイル

| ファイル | 用途 |
|---|---|
| `notification-template.html` | 会社宛の通知メール本文（EmailJSの「Content」タブに貼り付け） |
| `auto-reply-template.html` | お客様宛の自動返信メール本文（同じテンプレートの「Auto-Reply」タブに貼り付け） |

`/contact/thanks` ページには「自動返信メールをお送りしています」という案内があるため、通知メールと自動返信メールの両方を**1つのテンプレート**にまとめ、1回の `sendForm()` 呼び出しで両方が送られるようにします。

---

## セットアップ手順

1. [EmailJSダッシュボード](https://dashboard.emailjs.com/admin) にログインし、Email Serviceを1つ作成する（Gmail・Outlook・SMTP等）。
2. **Email Templates** から新規テンプレートを作成する。
3. **Content** タブ
   - Subject: `【架空工務店】お問い合わせ（{{type}}）- {{name}} 様`
   - Content: `notification-template.html` の中身を貼り付け
   - To Email: 会社の受信用メールアドレス（固定値。`{{email}}` にしないこと）
   - Reply To: `{{email}}`
4. **Auto-Reply** タブ
   - Enable Auto-Reply をオンにする
   - To Email: `{{email}}`
   - Subject: `架空工務店 お問い合わせありがとうございます`
   - Content: `auto-reply-template.html` の中身を貼り付け
5. **Account → API Keys** から Public Key を確認する。
6. `.env.local` に以下を設定する。

   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

---

## テンプレート変数とフォームフィールドの対応

`ContactForm.tsx` の `<form>` 内 `input`/`textarea`/`select` の `name` 属性が、そのままテンプレート変数として渡されます。

| フォームの `name` | テンプレート変数 | 備考 |
|---|---|---|
| `name` | `{{name}}` | お名前 |
| `email` | `{{email}}` | メールアドレス（Reply To / 自動返信の宛先にも使用） |
| `tel` | `{{tel}}` | 電話番号（任意入力） |
| `type` | `{{type}}` | お問い合わせ種別 |
| `message` | `{{message}}` | お問い合わせ内容 |
| `privacy` | — | チェックボックスの同意確認用。テンプレートには使用しない |

フォーム側で `input`/`textarea` の `name` を変更した場合は、EmailJSテンプレート側の変数名も合わせて変更してください。

---

## 動作確認

1. `npm run dev` で開発サーバーを起動。
2. `/contact` からARGキーワード**以外**の内容でフォームを送信。
3. 会社宛アドレスに通知メール、フォームに入力したメールアドレスに自動返信メールが届くことを確認。
4. `/contact/thanks` に遷移することを確認。

送信に失敗する場合は、ブラウザのコンソールに `EmailJS send error:` というログが出力されるので、Service ID / Template ID / Public Key の設定を確認してください。

// 作成日時: 2026-04-18

export const metadata = {
  title: '海蝕機関',
  robots: { index: false, follow: false },
}

const nav = [
  { label: '機関について',   href: '#about'   },
  { label: '観測記録',       href: '#records' },
  { label: '勧告・通達',     href: '#notices' },
  { label: '接触窓口',       href: '#contact' },
]

const records = [
  { id: 'KK-0091', date: '2031.03.14', zone: 'Z-002 深域',   status: '進行中',   summary: '下方境界面の後退速度が規定値を超過。観測継続。' },
  { id: 'KK-0087', date: '2031.02.28', zone: 'Z-004 鏡域',   status: '収束済み', summary: '反転指数が一時的に臨界値に到達。自然収束を確認。' },
  { id: 'KK-0083', date: '2031.01.09', zone: 'Z-001 静域',   status: '収束済み', summary: '音圧ゼロの持続を観測。異常なし。' },
  { id: 'KK-0079', date: '2030.11.30', zone: 'Z-005 未分類', status: '不明',     summary: '担当者による最終報告以降、記録なし。' },
]

const notices = [
  {
    date: '2031.03.01',
    title: '第12次境界面安定化指針の改訂について',
    body: '深域における測定値の収束精度に関する基準を改訂しました。関係各所は新指針に従い観測記録を更新してください。',
  },
  {
    date: '2031.01.15',
    title: '海蝕実体の定義改定（第7版）',
    body: '本機関における「海蝕実体」の定義を第7版へ更新します。旧定義との差分は別紙を参照のこと。',
  },
  {
    date: '2030.09.03',
    title: '未分類区画への立入制限の延長',
    body: 'Z-005（未分類）への立入制限を当面の間延長します。理由は開示できません。',
  },
]

export default function KaishokuPage() {
  return (
    <html lang="ja">
      <head>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background-color: #0c1018;
            color: #8a9ab5;
            font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
            font-size: 14px;
            line-height: 1.8;
          }
          a { color: #5a8acd; text-decoration: none; }
          a:hover { text-decoration: underline; }

          /* ヘッダー */
          .site-header {
            border-bottom: 1px solid #1e2a3a;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 56px;
            position: sticky;
            top: 0;
            background-color: #0c1018;
            z-index: 100;
          }
          .site-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }
          .logo-mark {
            width: 28px;
            height: 28px;
            border: 1px solid #2a3f5a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            color: #5a8acd;
            letter-spacing: 0;
          }
          .logo-text {
            font-size: 15px;
            color: #c8d8ec;
            letter-spacing: 0.15em;
          }
          .logo-sub {
            font-size: 9px;
            color: #3a5070;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-top: 2px;
          }
          nav { display: flex; gap: 2rem; }
          nav a { font-size: 12px; color: #5a7090; letter-spacing: 0.1em; }
          nav a:hover { color: #8aabcc; text-decoration: none; }

          /* ヒーロー */
          .hero {
            border-bottom: 1px solid #1e2a3a;
            padding: 5rem 2rem 4rem;
            max-width: 900px;
            margin: 0 auto;
          }
          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 0.4em;
            color: #3a5a7a;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
          }
          .hero-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            color: #c8d8ec;
            letter-spacing: 0.05em;
            font-weight: 300;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }
          .hero-title span {
            color: #5a8acd;
          }
          .hero-body {
            color: #6a8aaa;
            max-width: 540px;
            font-size: 13px;
          }
          .status-bar {
            margin-top: 2.5rem;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .status-item { display: flex; flex-direction: column; gap: 4px; }
          .status-label { font-size: 10px; color: #3a5070; letter-spacing: 0.2em; text-transform: uppercase; }
          .status-value { font-size: 13px; color: #8aaac8; }
          .status-value.active { color: #4a9a6a; }
          .status-value.warn   { color: #c8843a; }

          /* セクション共通 */
          .section {
            max-width: 900px;
            margin: 0 auto;
            padding: 4rem 2rem;
            border-bottom: 1px solid #1a2530;
          }
          .section-header {
            display: flex;
            align-items: baseline;
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
          .section-id {
            font-size: 10px;
            color: #2a4060;
            letter-spacing: 0.3em;
            text-transform: uppercase;
          }
          .section-title {
            font-size: 18px;
            color: #a8c0d8;
            font-weight: 400;
            letter-spacing: 0.1em;
          }

          /* 機関について */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            background: #1a2530;
          }
          .about-cell {
            background: #0c1018;
            padding: 1.5rem;
          }
          .about-cell-label {
            font-size: 10px;
            color: #3a5070;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
          }
          .about-cell-value { color: #8aaac8; font-size: 13px; }

          /* 観測記録テーブル */
          table { width: 100%; border-collapse: collapse; }
          th {
            text-align: left;
            font-size: 10px;
            color: #2a4060;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            padding: 0 1rem 1rem 0;
            border-bottom: 1px solid #1a2a3a;
            font-weight: normal;
          }
          td {
            padding: 1rem 1rem 1rem 0;
            border-bottom: 1px solid #111820;
            font-size: 12px;
            color: #6a8aaa;
            vertical-align: top;
          }
          .record-id { color: #5a8acd; font-family: monospace; }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            font-size: 10px;
            letter-spacing: 0.1em;
            border: 1px solid;
          }
          .badge-active  { color: #4a9a6a; border-color: #2a6a4a; }
          .badge-done    { color: #4a6a8a; border-color: #2a4a6a; }
          .badge-unknown { color: #8a6a3a; border-color: #5a4a2a; }

          /* 勧告 */
          .notice-list { display: flex; flex-direction: column; gap: 0; }
          .notice-item {
            display: flex;
            gap: 2rem;
            padding: 1.5rem 0;
            border-bottom: 1px solid #111820;
          }
          .notice-date { font-size: 11px; color: #3a5070; white-space: nowrap; padding-top: 2px; width: 90px; flex-shrink: 0; }
          .notice-title { color: #8aaac8; font-size: 13px; margin-bottom: 0.4rem; }
          .notice-body  { color: #4a6a8a; font-size: 12px; }

          /* 接触窓口 */
          .contact-block {
            background: #0e1520;
            border: 1px solid #1e2a3a;
            padding: 2rem;
            max-width: 480px;
          }
          .contact-block p { font-size: 13px; color: #5a7a9a; margin-bottom: 1rem; }
          .contact-block p:last-child { margin-bottom: 0; color: #3a5070; font-size: 11px; }

          /* フッター */
          footer {
            border-top: 1px solid #1a2530;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: 0 auto;
          }
          .footer-copy { font-size: 11px; color: #2a3a4a; letter-spacing: 0.1em; }
          .footer-version { font-size: 10px; color: #1e2a38; letter-spacing: 0.2em; font-family: monospace; }

          @media (max-width: 600px) {
            nav { display: none; }
            .about-grid { grid-template-columns: 1fr; }
            .notice-item { flex-direction: column; gap: 0.5rem; }
            table { display: block; overflow-x: auto; }
          }
        `}</style>
      </head>
      <body>

        {/* ヘッダー */}
        <header className="site-header">
          <div className="site-logo">
            <div className="logo-mark">KK</div>
            <div>
              <div className="logo-text">海蝕機関</div>
              <div className="logo-sub">Kaishoku Organ</div>
            </div>
          </div>
          <nav>
            {nav.map(({ label, href }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </header>

        {/* ヒーロー */}
        <section className="hero">
          <p className="hero-eyebrow">Boundary Management Authority — Est. 2019</p>
          <h1 className="hero-title">
            境界面を、<br />
            <span>管理する。</span>
          </h1>
          <p className="hero-body">
            海蝕機関は、各ゾーンにおける境界面の安定性監視・測定値の収集・および実体接触事例の記録を主任務とする独立観測機関です。
            本ポータルは機関内向けの情報共有を目的としています。
          </p>
          <div className="status-bar">
            <div className="status-item">
              <span className="status-label">System Status</span>
              <span className="status-value active">● OPERATIONAL</span>
            </div>
            <div className="status-item">
              <span className="status-label">Active Zones</span>
              <span className="status-value">4 / 5</span>
            </div>
            <div className="status-item">
              <span className="status-label">Last Sync</span>
              <span className="status-value">2031.03.14 03:00 UTC</span>
            </div>
            <div className="status-item">
              <span className="status-label">Z-002 深域</span>
              <span className="status-value warn">⚠ 要注意</span>
            </div>
          </div>
        </section>

        {/* 機関について */}
        <section className="section" id="about">
          <div className="section-header">
            <span className="section-id">01</span>
            <h2 className="section-title">機関について</h2>
          </div>
          <div className="about-grid">
            {[
              { label: '正式名称', value: '海蝕機関（Kaishoku Organ）' },
              { label: '設立',     value: '2019年 — 境界面異常の初観測を受け発足' },
              { label: '管轄区域', value: 'Zone A〜E および未分類区画全域' },
              { label: '主任務',   value: '境界面の安定性監視、海蝕実体の記録と分類' },
              { label: '観測拠点', value: '非公開（複数）' },
              { label: '備考',     value: '本機関の存在は一般には開示されていません。' },
            ].map(({ label, value }) => (
              <div key={label} className="about-cell">
                <div className="about-cell-label">{label}</div>
                <div className="about-cell-value">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 観測記録 */}
        <section className="section" id="records">
          <div className="section-header">
            <span className="section-id">02</span>
            <h2 className="section-title">観測記録</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>記録ID</th>
                <th>日付</th>
                <th>区画</th>
                <th>状態</th>
                <th>概要</th>
              </tr>
            </thead>
            <tbody>
              {records.map(({ id, date, zone, status, summary }) => (
                <tr key={id}>
                  <td><span className="record-id">{id}</span></td>
                  <td>{date}</td>
                  <td>{zone}</td>
                  <td>
                    <span className={`badge ${
                      status === '進行中'   ? 'badge-active'  :
                      status === '収束済み' ? 'badge-done'    :
                      'badge-unknown'
                    }`}>{status}</span>
                  </td>
                  <td>{summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 勧告・通達 */}
        <section className="section" id="notices">
          <div className="section-header">
            <span className="section-id">03</span>
            <h2 className="section-title">勧告・通達</h2>
          </div>
          <div className="notice-list">
            {notices.map(({ date, title, body }) => (
              <div key={title} className="notice-item">
                <span className="notice-date">{date}</span>
                <div>
                  <div className="notice-title">{title}</div>
                  <div className="notice-body">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 接触窓口 */}
        <section className="section" id="contact">
          <div className="section-header">
            <span className="section-id">04</span>
            <h2 className="section-title">接触窓口</h2>
          </div>
          <div className="contact-block">
            <p>
              海蝕機関への接触は、所定の手続きを経た関係者のみに許可されています。
              一般からの問い合わせには応答しません。
            </p>
            <p>
              もし貴方がこのページに辿り着いたのであれば、
              既に手続きは完了しています。担当者からの連絡をお待ちください。
            </p>
            <p>
              {/* このページへの到達経路は記録されています */}
              ACCESS LOGGED — REF: KK-PORTAL-ENTRY
            </p>
          </div>
        </section>

        <footer>
          <span className="footer-copy">© 海蝕機関 — All observations reserved.</span>
          <span className="footer-version">v3.1.4 / boundary-stable</span>
        </footer>

      </body>
    </html>
  )
}

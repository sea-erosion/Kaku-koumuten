// 作成日時: 2026-04-18
// 海蝕機関 観測記録 KK-0091 — SCPReportPage コンポーネントのデモ

import {
  SCPReportPage,
  SCPWarning,
  SCPNote,
  SCPTable,
  SCPLog,
  Dialog,
  DialogLine,
  Redacted,
  Classified,
  type SCPReportProps,
} from '@/components/ui/SCPReport'

export const metadata = {
  title: '海蝕機関 — 観測記録 KK-0091',
  robots: { index: false, follow: false },
}

const props: SCPReportProps = {
  itemNumber: 'KK-0091',
  objectClass: 'Keter',
  clearance: 4,
  title: '境界面を侵食するもの',

  ratings: [
    { label: 'オブジェクトクラス', value: 'Keter',       color: 'red'    },
    { label: '破壊クラス',         value: 'Vlam',        color: 'orange' },
    { label: 'リスククラス',       value: 'Critical',    color: 'red'    },
    { label: '観測区画',           value: 'Z-002 深域',  color: 'gray'   },
    { label: '最終測定値',         value: '1.42 （超過）', color: 'red'  },
    { label: '担当',               value: <Redacted />,  color: 'gray'   },
  ],

  docMeta: {
    '作成日':     '2031.03.14',
    '最終更新':   '2031.03.14 03:00 UTC',
    '文書番号':   'KK-DOC-0091-J4',
    '承認者':     '████ ████',
  },

  containmentProcedures: (
    <>
      <SCPWarning title="緊急収容通達">
        <p>
          KK-0091の境界面侵食速度が2031.03.14 02:17 UTC時点で規定閾値（1.00）を超過した。
          現在、深域全域への立入を禁止する。下方境界面への接触を試みた職員は<Redacted>██名</Redacted>に報告すること。
        </p>
      </SCPWarning>

      <p>
        KK-0091は深域（Zone B、Z-002）の下方境界面において観測される侵食現象である。
        現時点で物理的な封じ込めは不可能と判断されており、以下の<strong>観測的収容手順</strong>を維持する。
      </p>

      <ul>
        <li>深域観測拠点における測定値の連続モニタリング（6時間毎に記録）</li>
        <li>下方境界面への職員の接近禁止（距離制限：<Classified>████ m</Classified>）</li>
        <li>外部機関（架空工務店を含む）への情報開示の全面禁止</li>
        <li>測定値が1.50を超過した場合、プロトコル<Redacted>████</Redacted>を即時発動</li>
        <li>
          測定値が収束した場合、<Classified>架空工務店の施工フロー Step 6</Classified>
          に基づく安定化作業を実施する
        </li>
      </ul>

      <SCPNote label="注意">
        架空工務店（外郭組織）は本観測記録の存在を知らない。
        彼らが「Step 6：境界面の安定化」と呼ぶ作業は、
        KK-0091の収容の一端を担っているが、
        本人たちがその意味を理解しているかどうかは<Redacted />。
      </SCPNote>
    </>
  ),

  description: (
    <>
      <p>
        KK-0091は深域（Zone B）の底部において発生している、
        観測可能な境界面の後退現象である。
        通常、各ゾーンの境界面は安定した測定値（0.80〜0.95の範囲）を維持するが、
        KK-0091は2030年11月以降、継続的な数値上昇を記録している。
      </p>
      <p>
        境界面の「侵食」とは、ゾーン間の隔壁が薄くなることを指す。
        侵食が臨界点（推定値：<Classified>2.00</Classified>）を超えた場合、
        複数のゾーンが融合する可能性があり、
        各ゾーン内で観測されてきた現象が相互干渉を起こすと予測される。
      </p>
      <p>
        KK-0091の起源は不明だが、
        深域は2019年の<Redacted>████</Redacted>事案以前から観測記録が存在する。
        現在の侵食加速度は2019年当時と比較して<Classified>約██倍</Classified>に達している。
      </p>

      <SCPTable
        caption="境界面測定値の推移（Z-002 深域）"
        headers={['日付', '測定値', '変化率', '担当者', '備考']}
        rows={[
          { cells: ['2030.09.03', '0.91', '+0.00', <Redacted key="a" />, '—'] },
          { cells: ['2030.11.30', '0.97', '+0.06', <Redacted key="b" />, '上昇傾向開始'] },
          { cells: ['2031.01.09', '1.08', '+0.11', <Redacted key="c" />, '閾値超過'] },
          { cells: ['2031.02.28', '1.24', '+0.16', <Redacted key="d" />, '加速確認'] },
          { cells: ['2031.03.14', '1.42', '+0.18', '—', <span key="e" style={{ color: '#8b0000', fontWeight: 700 }}>緊急通達発令</span>] },
        ]}
      />
    </>
  ),

  addenda: [
    {
      label: '補遺 KK-0091-A',
      type: 'experiment',
      meta: {
        '実施日':   '2031.01.15',
        '実施者':   <Redacted key="exp1" /> as unknown as string,
        '区画':     'Z-002 下方観測点3',
        '目的':     '収束試験',
      },
      content: (
        <>
          <p>
            架空工務店の「Step 6」プロセスを深域で模倣した収束試験を実施した。
            測定値は試験開始後1.08→1.04へ一時的に低下したが、
            72時間後には1.08に戻った。
          </p>
          <SCPNote label="実験者コメント">
            収束は一時的なものに過ぎない。工務店の手法は症状を抑えているだけであり、
            原因への対処になっていない可能性がある。
            もしくは、彼らが本当の意味での「施工」を行っているのかもしれない。
          </SCPNote>
        </>
      ),
    },
    {
      label: '補遺 KK-0091-B',
      type: 'interview',
      meta: {
        '日付':     '2031.02.05',
        '対象':     '架空工務店　代表取締役',
        '面談者':   <Redacted key="int1" /> as unknown as string,
        '場所':     <Redacted key="int2" /> as unknown as string,
      },
      content: (
        <>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '0.75rem' }}>
            ※ 対象は本機関の存在を知らない状態でのインタビュー。
            一般工務店の「施工後アフターヒアリング」として実施。
          </p>
          <Dialog>
            <DialogLine speaker="面談者">
              Step 6についてお聞きしたいのですが、
              完工日が「測定値の収束により決定される」とはどういう意味ですか？
            </DialogLine>
            <DialogLine speaker={<><Redacted /></>}>
              ああ、あれは……そうですね。
              家というのは、土地と馴染むまでに時間がかかるんです。
              数値が落ち着いて初めて、「できた」と言えるんですよ。
            </DialogLine>
            <DialogLine speaker="面談者">
              その数値というのは具体的に何ですか？
            </DialogLine>
            <DialogLine speaker={<><Redacted /></>}>
              <Classified>境界面の安定度です。ご存知ですよね？</Classified>
            </DialogLine>
            <DialogLine speaker="面談者">
              ——はい。
            </DialogLine>
          </Dialog>
          <SCPNote label="後記">
            対象は本機関の用語（「境界面」）を当然のように使用した。
            これが意図的な開示なのか、認識の混濁なのかは不明。
            <Redacted>████</Redacted>博士への報告を推奨する。
          </SCPNote>
        </>
      ),
    },
    {
      label: '補遺 KK-0091-C',
      type: 'incident',
      meta: {
        '発生日':   '2031.03.14 02:17 UTC',
        '重大度':   '最高',
        '現状':     '対応中',
      },
      content: (
        <>
          <SCPWarning title="インシデント — 測定値臨界超過">
            <p>
              2031.03.14 02:17 UTC、Z-002下方境界面の測定値が1.42を記録した。
              これは過去観測値の最高記録である。
              プロトコル<Redacted>████</Redacted>の発動準備を開始する。
            </p>
          </SCPWarning>
          <p>
            同時刻、深域内部の反響記録に異常なパターンが検出された。
            パターンは断続的な文字列として解析され、
            内容は以下の通りである：
          </p>
          <div style={{ fontFamily: 'var(--scp-mono)', fontSize: '13px', background: '#0a0a08', color: '#4a8a4a', padding: '1rem', marginTop: '0.5rem', lineHeight: 2 }}>
            <div>TRANSMISSION_START ████████████</div>
            <div>SRC: Z-002 / DEPTH: <Redacted>██.██ m</Redacted></div>
            <div>MSG: こだまはありますか</div>
            <div>MSG: ここはどこですか</div>
            <div>MSG: しずかにしてください</div>
            <div>TRANSMISSION_END</div>
          </div>
          <SCPNote label="分析">
            送信元は架空工務店の隠しページキーワードと一致する文字列を発信している。
            これが何を意味するのか、現時点では<Redacted />。
          </SCPNote>
        </>
      ),
    },
  ],

  footerNote: '本文書は海蝕機関 内部管理システム v3.1.4 により生成されました',
}

export default function KK0091Page() {
  return <SCPReportPage {...props} />
}

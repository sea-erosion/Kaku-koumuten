import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'active',
    version: '3.1.4',
    zones: [
      { id: 'z-001', name: '静域',   stability: 0.97, available: true  },
      { id: 'z-002', name: '深域',   stability: 0.84, available: true  },
      { id: 'z-003', name: '反響域', stability: 0.91, available: true  },
      { id: 'z-004', name: '鏡域',   stability: 0.78, available: true  },
      { id: 'z-005', name: '未分類', stability: null,  available: false },
    ],
    last_measured: '2031-03-14T03:00:00Z',
    hint: 'し___に___て___さ___',
    note: '境界面は安定しています。お問い合わせの際は正確な言葉をお使いください。',
  })
}

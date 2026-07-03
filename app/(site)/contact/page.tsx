// 編集日時: 2026-07-03
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from './ContactForm'

// お問い合わせには、正確な言葉をお使いください

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50">
      <div className="max-w-2xl mx-auto px-6">
        <SectionTitle
          sub="CONTACT"
          title="お問い合わせ"
          description="家づくりに関するご相談・ご質問をお気軽にどうぞ。通常2営業日以内にご返信いたします。"
        />

        <ContactForm />
      </div>
    </main>
  )
}

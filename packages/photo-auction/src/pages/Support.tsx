import { useState } from 'react'
import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import { auctionNavItems, SITE_NAME } from '../shared/nav'
import styles from './Support.module.css'

const steps = [
  {
    step: '01',
    title: '회원가입 및 본인 인증',
    desc: '서울포토옥션 홈페이지에서 회원가입 후 휴대폰 또는 아이핀으로 본인 인증을 완료합니다. 기업 회원의 경우 사업자등록증을 제출합니다.',
  },
  {
    step: '02',
    title: '응찰 등록 및 보증금 납부',
    desc: '경매 참가를 위해 응찰 등록 후 낙찰 예정가 10%에 해당하는 보증금을 납부합니다. 보증금은 경매 종료 후 미낙찰 시 전액 환불됩니다.',
  },
  {
    step: '03',
    title: '프리뷰 관람 (선택)',
    desc: '경매 전 1–2일간 진행되는 프리뷰에서 출품 작품을 직접 감상하실 수 있습니다. 전문가 동석 감상을 원하시면 사전 예약이 필요합니다.',
  },
  {
    step: '04',
    title: '경매 참가 및 입찰',
    desc: '현장 경매 또는 온라인 실시간 경매에 참여합니다. 서면 응찰(Absentee Bid), 전화 응찰(Telephone Bid)도 가능합니다. 모든 가격은 한국 원화(KRW) 기준이며 부가세 별도입니다.',
  },
  {
    step: '05',
    title: '낙찰 및 대금 납부',
    desc: '낙찰 후 48시간 이내에 낙찰가에 구매 수수료(15% + VAT)를 합산한 금액을 납부합니다. 납부 방법은 계좌이체, 신용카드(국내 발행), 현장 현금입니다.',
  },
  {
    step: '06',
    title: '작품 인도',
    desc: '대금 납부 확인 후 영업일 기준 3일 이내에 작품을 인도합니다. 직접 수령(청담 갤러리) 또는 미술품 전문 배송 서비스를 이용하실 수 있습니다.',
  },
]

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: '사전 등록 없이 경매에 참여할 수 있나요?',
    a: '현장 관람은 가능하나 입찰을 위해서는 사전 응찰 등록이 필요합니다. 등록은 경매 시작 최소 24시간 전까지 완료하셔야 합니다.',
  },
  {
    q: '구매 수수료는 얼마인가요?',
    a: '낙찰가에 대해 구매 수수료 15%가 부과되며, 이에 대한 부가세(10%)가 추가됩니다. 예를 들어 낙찰가가 1,000만 원인 경우, 구매 수수료 150만 원 + 부가세 15만 원 = 165만 원이 추가되어 총 1,165만 원을 납부하게 됩니다.',
  },
  {
    q: '해외에서도 입찰할 수 있나요?',
    a: '서면 응찰(Absentee Bid) 및 전화 응찰(Telephone Bid)을 통해 해외에서도 참여 가능합니다. 단, 전화 응찰은 사전 예약이 필요하며 주요 통화 외 결제는 별도 문의 바랍니다.',
  },
  {
    q: '작품의 진위 감정은 어떻게 이루어지나요?',
    a: '서울포토옥션에 출품되는 모든 작품은 전문 감정인단의 검토를 거칩니다. 작가 직접 출품 작품, 공신력 있는 갤러리 경유 작품, 감정서가 발행된 작품 순으로 신뢰도가 검증됩니다.',
  },
  {
    q: '낙찰 후 작품 반품이 가능한가요?',
    a: '낙찰 후 대금 납부가 완료되면 원칙적으로 반품이 불가합니다. 단, 작품 설명과 현저하게 다른 상태인 경우 낙찰일로부터 7일 이내 서면 이의 제기 시 검토됩니다.',
  },
  {
    q: '위탁 판매 수수료는 어떻게 되나요?',
    a: '위탁 판매 수수료는 낙찰가의 10–15%이며, 작품 가격 및 작가 지명도에 따라 협의됩니다. 미낙찰 시에는 수수료가 발생하지 않습니다.',
  },
]

export default function Support() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={auctionNavItems} dark />

      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>고객센터</h1>
          <p className={styles.pageSubtitle}>경매 참가 방법 · 자주 묻는 질문 · 문의</p>
        </div>
      </div>

      {/* ── How to Bid ───────────────────────────────── */}
      <section className={styles.howto}>
        <div className={styles.howtoInner}>
          <div className={styles.howtoHeader}>
            <EditorialLabel variant="terracotta">경매 참가 방법</EditorialLabel>
          </div>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.step} className={styles.step}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqHeader}>
            <EditorialLabel>자주 묻는 질문</EditorialLabel>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span className={styles.faqQ}>Q.</span>
                  <span className={styles.faqQText}>{item.q}</span>
                  <span className={styles.faqToggle} aria-hidden>{openIdx === i ? '−' : '+'}</span>
                </button>
                {openIdx === i && (
                  <div className={styles.faqAnswer}>
                    <span className={styles.faqA}>A.</span>
                    <p className={styles.faqAText}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactHeader}>
            <EditorialLabel>문의</EditorialLabel>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactBlock}>
              <p className={styles.contactBlockTitle}>경매 · 응찰 문의</p>
              <p className={styles.contactInfo}>02-3442-0022</p>
              <p className={styles.contactInfo}>bid@seoulphotoauction.com</p>
              <p className={styles.contactHours}>평일 10:00 — 18:00</p>
            </div>
            <div className={styles.contactBlock}>
              <p className={styles.contactBlockTitle}>위탁 · 판매 문의</p>
              <p className={styles.contactInfo}>02-3442-0033</p>
              <p className={styles.contactInfo}>consign@seoulphotoauction.com</p>
              <p className={styles.contactHours}>평일 10:00 — 18:00</p>
            </div>
            <div className={styles.contactBlock}>
              <p className={styles.contactBlockTitle}>갤러리 방문</p>
              <p className={styles.contactInfo}>서울특별시 강남구 청담동 95-3</p>
              <p className={styles.contactHours}>화–일 10:00 — 18:00 (월요일 휴관)</p>
              <a href="#" className={styles.contactMapLink}>지도 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}

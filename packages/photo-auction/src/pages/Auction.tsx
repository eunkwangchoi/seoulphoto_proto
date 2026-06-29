import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import { auctionNavItems, SITE_NAME } from '../shared/nav'
import styles from './Auction.module.css'

const SESSION = {
  title: '서울포토옥션 제 47회 경매',
  titleEn: 'Seoul Photo Auction — 47th Sale',
  period: '2026년 7월 10일 (목) — 7월 15일 (화)',
  preview: '2026년 7월 8일 (화) — 7월 9일 (수), 오전 10시 — 오후 6시',
  venue: '서울포토옥션 갤러리 (강남구 청담동 95-3)',
  totalLots: 48,
}

type LotStatus = 'preview' | 'live' | 'sold' | 'passed'

interface Lot {
  lot: string
  artist: string
  title: string
  year: string
  medium: string
  dimensions: string
  estimateLow: string
  estimateHigh: string
  hammerPrice?: string
  status: LotStatus
  seed: string
}

const lots: Lot[] = [
  { lot: '001', artist: '구본창', title: '백자 연구 No. 7', year: '2018', medium: '아카이벌 피그먼트 프린트', dimensions: '100 × 80 cm · 에디션 2/5', estimateLow: '₩ 15,000,000', estimateHigh: '₩ 20,000,000', status: 'sold', hammerPrice: '₩ 22,000,000', seed: 'pa47-001' },
  { lot: '002', artist: '배병우', title: '소나무 #SU03-033', year: '2003', medium: '젤라틴 실버 프린트', dimensions: '80 × 100 cm · 에디션 1/5', estimateLow: '₩ 8,000,000', estimateHigh: '₩ 12,000,000', status: 'sold', hammerPrice: '₩ 11,500,000', seed: 'pa47-002' },
  { lot: '003', artist: '김아타', title: 'On Air — Ice Man', year: '2006', medium: '크로모제닉 프린트', dimensions: '120 × 90 cm · 에디션 1/5', estimateLow: '₩ 25,000,000', estimateHigh: '₩ 35,000,000', status: 'live', seed: 'pa47-003' },
  { lot: '004', artist: '이갑철', title: '강원도 사람들 No. 8', year: '1998', medium: '젤라틴 실버 프린트', dimensions: '60 × 50 cm · AP', estimateLow: '₩ 3,000,000', estimateHigh: '₩ 5,000,000', status: 'live', seed: 'pa47-004' },
  { lot: '005', artist: '노순택', title: '망각기계 No. 3', year: '2008', medium: '아카이벌 피그먼트 프린트', dimensions: '70 × 100 cm · 에디션 3/5', estimateLow: '₩ 4,000,000', estimateHigh: '₩ 6,000,000', status: 'preview', seed: 'pa47-005' },
  { lot: '006', artist: '강홍구', title: '녹색연구 No. 12', year: '2012', medium: '아카이벌 피그먼트 프린트', dimensions: '80 × 120 cm · 에디션 2/7', estimateLow: '₩ 3,500,000', estimateHigh: '₩ 5,500,000', status: 'preview', seed: 'pa47-006' },
  { lot: '007', artist: '오혜진', title: '서울의 봄 No. 5', year: '2024', medium: '아카이벌 피그먼트 프린트', dimensions: '50 × 40 cm · 에디션 1/7', estimateLow: '₩ 2,000,000', estimateHigh: '₩ 3,500,000', status: 'preview', seed: 'pa47-007' },
  { lot: '008', artist: '정연두', title: '수취인불명 No. 3', year: '2002', medium: '씨바크롬 프린트', dimensions: '100 × 130 cm · 에디션 1/5', estimateLow: '₩ 18,000,000', estimateHigh: '₩ 25,000,000', status: 'preview', seed: 'pa47-008' },
  { lot: '009', artist: '권오상', title: 'Deodorant Type 45', year: '2020', medium: '아카이벌 피그먼트 프린트', dimensions: '100 × 70 cm · 에디션 2/5', estimateLow: '₩ 5,000,000', estimateHigh: '₩ 8,000,000', status: 'preview', seed: 'pa47-009' },
  { lot: '010', artist: '이인성', title: '빈 의자 No. 2', year: '2022', medium: '아카이벌 피그먼트 프린트', dimensions: '60 × 45 cm · 에디션 3/7', estimateLow: '₩ 2,500,000', estimateHigh: '₩ 4,000,000', status: 'passed', seed: 'pa47-010' },
  { lot: '011', artist: '임태훈', title: 'DMZ Spring No. 7', year: '2023', medium: '아카이벌 피그먼트 프린트', dimensions: '90 × 120 cm · 에디션 1/5', estimateLow: '₩ 1,800,000', estimateHigh: '₩ 3,000,000', status: 'preview', seed: 'pa47-011' },
  { lot: '012', artist: '박미나', title: '가면 No. 4', year: '2025', medium: '아카이벌 피그먼트 프린트', dimensions: '70 × 70 cm · 에디션 2/5', estimateLow: '₩ 2,200,000', estimateHigh: '₩ 3,500,000', status: 'preview', seed: 'pa47-012' },
]

const statusLabel: Record<LotStatus, string> = {
  preview: '프리뷰',
  live:    '진행 중',
  sold:    '낙찰',
  passed:  '유찰',
}

export default function Auction() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={auctionNavItems} dark />

      {/* ── Session Header ────────────────────────────── */}
      <section className={styles.sessionHeader}>
        <div className={styles.sessionHeaderInner}>
          <div className={styles.sessionMeta}>
            <EditorialLabel variant="terracotta">경매</EditorialLabel>
            <h1 className={styles.sessionTitle}>{SESSION.title}</h1>
            <p className={styles.sessionTitleEn}>{SESSION.titleEn}</p>
          </div>
          <div className={styles.sessionInfo}>
            <div className={styles.sessionInfoRow}>
              <span className={styles.sessionInfoKey}>경매 일정</span>
              <span className={styles.sessionInfoVal}>{SESSION.period}</span>
            </div>
            <div className={styles.sessionInfoRow}>
              <span className={styles.sessionInfoKey}>프리뷰</span>
              <span className={styles.sessionInfoVal}>{SESSION.preview}</span>
            </div>
            <div className={styles.sessionInfoRow}>
              <span className={styles.sessionInfoKey}>장소</span>
              <span className={styles.sessionInfoVal}>{SESSION.venue}</span>
            </div>
            <div className={styles.sessionInfoRow}>
              <span className={styles.sessionInfoKey}>총 출품작</span>
              <span className={styles.sessionInfoVal}>{SESSION.totalLots}점</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────── */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <div className={styles.filterTabs}>
            {(['전체', '프리뷰', '진행 중', '낙찰', '유찰'] as const).map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={[styles.filterTab, i === 0 ? styles.filterTabActive : ''].filter(Boolean).join(' ')}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={styles.filterSort}>
            <span className={styles.sortLabel}>정렬:</span>
            <button type="button" className={`${styles.sortBtn} ${styles.sortBtnActive}`}>LOT 번호</button>
            <button type="button" className={styles.sortBtn}>작가명</button>
            <button type="button" className={styles.sortBtn}>추정가</button>
          </div>
        </div>
      </div>

      {/* ── Lot Grid ─────────────────────────────────── */}
      <section className={styles.lots}>
        <div className={styles.lotsGrid}>
          {lots.map((lot) => (
            <article key={lot.lot} className={styles.lotCard}>
              <a href="#" className={styles.lotLink}>
                <div className={styles.lotImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${lot.seed}/600/750?grayscale`}
                    alt={`${lot.artist} — ${lot.title}`}
                    className={styles.lotImage}
                  />
                  <div className={`${styles.lotStatusBadge} ${styles[`status_${lot.status}`]}`}>
                    {statusLabel[lot.status]}
                  </div>
                  <div className={styles.lotNumBadge}>Lot {lot.lot}</div>
                </div>
                <div className={styles.lotMeta}>
                  <p className={styles.lotArtist}>{lot.artist}</p>
                  <p className={styles.lotTitle}><em>{lot.title}</em></p>
                  <p className={styles.lotDetail}>{lot.year} · {lot.medium}</p>
                  <p className={styles.lotDimensions}>{lot.dimensions}</p>
                  <div className={styles.lotPricing}>
                    {lot.status === 'sold' ? (
                      <>
                        <p className={styles.lotHammerLabel}>낙찰가</p>
                        <p className={styles.lotHammerPrice}>{lot.hammerPrice}</p>
                      </>
                    ) : lot.status === 'passed' ? (
                      <p className={styles.lotPassedLabel}>유찰</p>
                    ) : (
                      <>
                        <p className={styles.lotEstimateLabel}>추정가</p>
                        <p className={styles.lotEstimate}>{lot.estimateLow} — {lot.estimateHigh}</p>
                      </>
                    )}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.lotsFooter}>
          <p className={styles.lotsCount}>총 {SESSION.totalLots}점 중 12점 표시</p>
          <button type="button" className={styles.loadMoreBtn}>더 보기 (36점)</button>
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}

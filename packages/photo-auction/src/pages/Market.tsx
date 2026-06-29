import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import { auctionNavItems, SITE_NAME } from '../shared/nav'
import styles from './Market.module.css'

const filters = {
  medium: ['전체', '아카이벌 피그먼트', '젤라틴 실버', '크로모제닉', '씨바크롬'],
  price: ['전체', '100만 미만', '100—500만', '500—1,000만', '1,000만 이상'],
  sort: ['최신순', '가격 낮은 순', '가격 높은 순', '작가명순'],
}

interface MarketWork {
  id: string
  artist: string
  title: string
  year: string
  medium: string
  dimensions: string
  edition: string
  price: string
  isNew?: boolean
  seed: string
}

const works: MarketWork[] = [
  { id: 'm01', artist: '구본창', title: '유리병 연구 No. 3', year: '2020', medium: '아카이벌 피그먼트 프린트', dimensions: '60 × 50 cm', edition: '에디션 3/5', price: '₩ 6,500,000', isNew: true, seed: 'mkt-m01' },
  { id: 'm02', artist: '배병우', title: '소나무 #JR11-012', year: '2011', medium: '젤라틴 실버 프린트', dimensions: '60 × 75 cm', edition: '에디션 2/5', price: '₩ 4,200,000', seed: 'mkt-m02' },
  { id: 'm03', artist: '노순택', title: '망각기계 No. 8', year: '2010', medium: '아카이벌 피그먼트 프린트', dimensions: '70 × 90 cm', edition: '에디션 4/5', price: '₩ 3,800,000', seed: 'mkt-m03' },
  { id: 'm04', artist: '오혜진', title: '서울의 봄 No. 9', year: '2024', medium: '아카이벌 피그먼트 프린트', dimensions: '40 × 50 cm', edition: '에디션 2/7', price: '₩ 1,800,000', isNew: true, seed: 'mkt-m04' },
  { id: 'm05', artist: '강홍구', title: '녹색연구 No. 17', year: '2015', medium: '아카이벌 피그먼트 프린트', dimensions: '80 × 100 cm', edition: '에디션 1/7', price: '₩ 4,500,000', seed: 'mkt-m05' },
  { id: 'm06', artist: '임태훈', title: 'DMZ Spring No. 11', year: '2024', medium: '아카이벌 피그먼트 프린트', dimensions: '90 × 120 cm', edition: '에디션 1/5', price: '₩ 2,600,000', isNew: true, seed: 'mkt-m06' },
  { id: 'm07', artist: '이갑철', title: '강원도 사람들 No. 14', year: '2001', medium: '젤라틴 실버 프린트', dimensions: '50 × 40 cm', edition: 'AP', price: '₩ 2,100,000', seed: 'mkt-m07' },
  { id: 'm08', artist: '박미나', title: '가면 No. 7', year: '2025', medium: '아카이벌 피그먼트 프린트', dimensions: '50 × 50 cm', edition: '에디션 4/5', price: '₩ 1,500,000', isNew: true, seed: 'mkt-m08' },
  { id: 'm09', artist: '권오상', title: 'Deodorant Type 47', year: '2021', medium: '아카이벌 피그먼트 프린트', dimensions: '80 × 60 cm', edition: '에디션 3/5', price: '₩ 3,200,000', seed: 'mkt-m09' },
  { id: 'm10', artist: '이인성', title: '빈 의자 No. 5', year: '2023', medium: '아카이벌 피그먼트 프린트', dimensions: '45 × 35 cm', edition: '에디션 5/7', price: '₩ 1,200,000', seed: 'mkt-m10' },
  { id: 'm11', artist: '정연두', title: '이상한 나라의 앨리스 No. 2', year: '2005', medium: '씨바크롬 프린트', dimensions: '100 × 130 cm', edition: '에디션 2/5', price: '₩ 12,000,000', seed: 'mkt-m11' },
  { id: 'm12', artist: '김아타', title: 'On Air — Nun', year: '2008', medium: '크로모제닉 프린트', dimensions: '90 × 72 cm', edition: '에디션 3/5', price: '₩ 9,500,000', seed: 'mkt-m12' },
]

export default function Market() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={auctionNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>Premium Market</h1>
          <p className={styles.pageSubtitle}>진품 감정 완료 사진 작품의 고정가 거래 마켓플레이스</p>
        </div>
      </div>

      {/* ── Filters ──────────────────────────────────── */}
      <div className={styles.filterPanel}>
        <div className={styles.filterPanelInner}>
          <div className={styles.filterGroup}>
            <span className={styles.filterGroupLabel}>매체</span>
            <div className={styles.filterOptions}>
              {filters.medium.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  className={[styles.filterOpt, i === 0 ? styles.filterOptActive : ''].filter(Boolean).join(' ')}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterGroupLabel}>가격대</span>
            <div className={styles.filterOptions}>
              {filters.price.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  className={[styles.filterOpt, i === 0 ? styles.filterOptActive : ''].filter(Boolean).join(' ')}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.sortGroup}>
            <select className={styles.sortSelect} aria-label="정렬 기준">
              {filters.sort.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ── Works Grid ───────────────────────────────── */}
      <section className={styles.works}>
        <div className={styles.worksHeader}>
          <p className={styles.worksCount}>총 {works.length}점</p>
        </div>
        <div className={styles.worksGrid}>
          {works.map((work) => (
            <article key={work.id} className={styles.workCard}>
              <a href="#" className={styles.workLink}>
                <div className={styles.workImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${work.seed}/400/500?grayscale`}
                    alt={`${work.artist} — ${work.title}`}
                    className={styles.workImage}
                  />
                  {work.isNew && (
                    <span className={styles.newBadge}>NEW</span>
                  )}
                </div>
                <div className={styles.workMeta}>
                  <p className={styles.workArtist}>{work.artist}</p>
                  <p className={styles.workTitle}><em>{work.title}</em></p>
                  <p className={styles.workDetail}>{work.year} · {work.medium}</p>
                  <p className={styles.workDimensions}>{work.dimensions} · {work.edition}</p>
                  <p className={styles.workPrice}>{work.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Consignment CTA ──────────────────────────── */}
      <section className={styles.consignment}>
        <div className={styles.consignmentInner}>
          <div className={styles.consignmentText}>
            <EditorialLabel variant="terracotta">위탁 판매</EditorialLabel>
            <h2 className={styles.consignmentTitle}>작품을 판매하고 싶으신가요?</h2>
            <p className={styles.consignmentDesc}>
              서울포토옥션 프리미엄 마켓은 국내 최고 수준의 사진 작품 위탁 판매 플랫폼입니다.
              전문 큐레이터 검토 후 최적의 판매 조건을 안내해 드립니다.
            </p>
          </div>
          <a href="#" className={styles.consignmentBtn}>위탁 상담 신청</a>
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}

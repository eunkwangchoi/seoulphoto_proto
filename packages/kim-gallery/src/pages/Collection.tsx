import { SiteHeader, GroupNav } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './Collection.module.css'

const filters = ['전체', '흑백', '컬러', '대형작', '에디션 소진 임박']

interface Work {
  artist: string
  title: string
  year: string
  medium: string
  size: string
  edition: string
  status: '판매 중' | '문의' | '판매 완료'
  seed: string
}

const works: Work[] = [
  { artist: '구본창', title: 'Vessel JM 05',            year: '2012', medium: 'Archival pigment print', size: '100 × 80 cm',  edition: 'Ed. 2/10', status: '판매 중',   seed: 'kg-co-1' },
  { artist: '배병우', title: 'SNM3A-034H',              year: '2009', medium: 'Gelatin silver print',   size: '90 × 180 cm',  edition: 'Ed. 5/10', status: '판매 중',   seed: 'kg-co-2' },
  { artist: '김아타', title: 'ON-AIR Project #142',     year: '2005', medium: 'C-print',                size: '120 × 150 cm', edition: 'Ed. 3/7',  status: '문의',      seed: 'kg-co-3' },
  { artist: '강홍구', title: '사라진 마을 — 오쇠리',     year: '2003', medium: 'Digital C-print',        size: '70 × 200 cm',  edition: 'Ed. 1/5',  status: '판매 중',   seed: 'kg-co-4' },
  { artist: '이갑철', title: '충돌과 반동 — 진도',       year: '1996', medium: 'Gelatin silver print',   size: '50 × 60 cm',   edition: 'Ed. 8/15', status: '판매 중',   seed: 'kg-co-5' },
  { artist: '권오상', title: 'Deodorant Type — Bust',   year: '2008', medium: 'C-print, mixed media',   size: '가변 크기',     edition: 'Unique',   status: '판매 완료', seed: 'kg-co-6' },
  { artist: '노순택', title: '얄읏한 공 #033',           year: '2006', medium: 'Archival pigment print', size: '80 × 120 cm',  edition: 'Ed. 4/10', status: '판매 중',   seed: 'kg-co-7' },
  { artist: '정연두', title: 'Bewitched #7',            year: '2001', medium: 'C-print',                size: '120 × 150 cm', edition: 'Ed. 6/7',  status: '문의',      seed: 'kg-co-8' },
  { artist: '오혜진', title: '반포 3동, 07:14',          year: '2025', medium: 'Archival pigment print', size: '60 × 90 cm',   edition: 'Ed. 1/8',  status: '판매 중',   seed: 'kg-co-9' },
]

export default function Collection() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>소장품</h1>
          <p className={styles.pageSubtitle}>화랑이 보유한 오리지널 프린트 {works.length}점</p>
        </div>
        <nav className={styles.filterNav} aria-label="소장품 분류">
          {filters.map((f, i) => (
            <a
              key={f}
              href="#/collection"
              className={[styles.filterTab, i === 0 ? styles.filterTabActive : ''].filter(Boolean).join(' ')}
            >
              {f}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Works grid ───────────────────────────────── */}
      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {works.map(work => (
            <article key={work.seed} className={styles.card}>
              <a href="#/collection" className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${work.seed}/800/1000?grayscale`}
                    alt={`${work.artist} — ${work.title}`}
                    className={[styles.image, work.status === '판매 완료' ? styles.imageSold : ''].filter(Boolean).join(' ')}
                  />
                  <span
                    className={[
                      styles.status,
                      work.status === '판매 완료' ? styles.statusSold : '',
                      work.status === '문의' ? styles.statusInquiry : '',
                    ].filter(Boolean).join(' ')}
                  >
                    {work.status}
                  </span>
                </div>
                <div className={styles.info}>
                  <p className={styles.artist}>{work.artist}</p>
                  <p className={styles.title}><em>{work.title}</em>, {work.year}</p>
                  <p className={styles.medium}>{work.medium}</p>
                  <p className={styles.size}>{work.size} · {work.edition}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Inquiry ──────────────────────────────────── */}
      <section className={styles.inquiry}>
        <div className={styles.inquiryInner}>
          <h2 className={styles.inquiryTitle}>작품 문의</h2>
          <p className={styles.inquiryBody}>
            가격은 작가·에디션·프린트 시기에 따라 달라집니다. 개별 작품의 가격과 상태,
            프로비넌스는 화랑으로 문의해 주시면 자료를 보내드립니다.
            컬렉션 상담과 작품 실견은 예약제로 운영합니다.
          </p>
          <div className={styles.inquiryContacts}>
            <a href="#/visit" className={styles.inquiryLink}>방문 예약 →</a>
            <span className={styles.inquiryMail}>gallery@example.com</span>
          </div>
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}

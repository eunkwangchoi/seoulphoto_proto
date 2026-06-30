import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { centerNavItems } from '../shared/nav'
import styles from './Archive.module.css'

interface CollectionItem {
  artist: string
  title: string
  year: string
  medium: string
  seed: string
}

const featuredItems: CollectionItem[] = [
  { artist: '임응식', title: '서울역 앞 (1956)', year: '1956', medium: '젤라틴 실버 프린트', seed: 'arc-f1' },
  { artist: '이형록', title: '경복궁 근정전 설경', year: '1960', medium: '흑백 사진', seed: 'arc-f2' },
  { artist: '김한용', title: '새마을 운동 — 농촌 풍경', year: '1973', medium: '컬러 크롬 인쇄', seed: 'arc-f3' },
  { artist: '최민식', title: '부산 국제시장 (1960년대)', year: '1965', medium: '젤라틴 실버 프린트', seed: 'arc-f4' },
  { artist: '정범태', title: '판자촌의 아이들', year: '1968', medium: '흑백 사진', seed: 'arc-f5' },
  { artist: '배병우', title: '소나무 No. 9-E', year: '1983', medium: '젤라틴 실버 프린트', seed: 'arc-f6' },
]

const categories = [
  {
    title: '서울 역사 기록',
    titleEn: 'Historical Record of Seoul',
    count: '2,341점',
    desc: '1900년대 초부터 현재까지 서울의 지형, 도시 풍경, 건축물을 기록한 사진 자료.',
    seed: 'arc-c1',
  },
  {
    title: '현대 기록사진',
    titleEn: 'Documentary Photography',
    count: '1,876점',
    desc: '한국 현대사의 주요 사건, 사회 변화, 인물을 기록한 다큐멘터리 사진.',
    seed: 'arc-c2',
  },
  {
    title: '작가 컬렉션',
    titleEn: 'Artist Collection',
    count: '4,512점',
    desc: '주요 사진작가 83인의 대표작 및 아카이브 자료를 체계적으로 수집·보존.',
    seed: 'arc-c3',
  },
  {
    title: '기증 컬렉션',
    titleEn: 'Donated Collection',
    count: '987점',
    desc: '개인 및 단체로부터 기증받은 희귀 사진 자료 및 필름 원본.',
    seed: 'arc-c4',
  },
]

export default function Archive() {
  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER"
        navItems={centerNavItems}
      />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>아카이브</h1>
          <p className={styles.pageSubtitle}>소장품 · 열람 · 연구</p>
        </div>
      </div>

      {/* ── Stats Banner ─────────────────────────────── */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {[
            { num: '9,716', label: '소장 작품' },
            { num: '83', label: '수집 작가' },
            { num: '1920s', label: '가장 이른 작품' },
            { num: '2024', label: '가장 최근 작품' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Collection Categories ─────────────────────── */}
      <section className={styles.categories}>
        <div className={styles.sectionLabel}>
          <EditorialLabel>컬렉션</EditorialLabel>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <article key={cat.seed} className={styles.categoryCard}>
              <a href="#" className={styles.categoryLink}>
                <div className={styles.categoryImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${cat.seed}/600/400?grayscale`}
                    alt={cat.title}
                    className={styles.categoryImage}
                  />
                  <div className={styles.categoryOverlay}>
                    <span className={styles.categoryCount}>{cat.count}</span>
                  </div>
                </div>
                <div className={styles.categoryBody}>
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  <p className={styles.categoryTitleEn}>{cat.titleEn}</p>
                  <p className={styles.categoryDesc}>{cat.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Featured Works ────────────────────────────── */}
      <section className={styles.featured}>
        <div className={styles.sectionLabel}>
          <EditorialLabel>주요 소장품</EditorialLabel>
        </div>
        <div className={styles.featuredGrid}>
          {featuredItems.map((item) => (
            <article key={item.seed} className={styles.featuredCard}>
              <a href="#" className={styles.featuredLink}>
                <div className={styles.featuredImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/400/500?grayscale`}
                    alt={item.title}
                    className={styles.featuredImage}
                  />
                </div>
                <div className={styles.featuredBody}>
                  <p className={styles.featuredArtist}>{item.artist}</p>
                  <h3 className={styles.featuredTitle}>{item.title}</h3>
                  <p className={styles.featuredMeta}>{item.year} · {item.medium}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Access Guide ──────────────────────────────── */}
      <section className={styles.access}>
        <div className={styles.accessInner}>
          <div className={styles.accessText}>
            <EditorialLabel variant="terracotta">열람 안내</EditorialLabel>
            <h2 className={styles.accessTitle}>아카이브 자료 열람 신청</h2>
            <p className={styles.accessDesc}>
              서울사진센터 소장 자료는 연구·교육 목적으로 열람 신청이 가능합니다.
              열람실은 사전 예약 후 방문하시거나, 디지털 자료의 경우 온라인으로 신청하실 수 있습니다.
            </p>
            <div className={styles.accessDetails}>
              <div className={styles.accessDetailItem}>
                <span className={styles.accessDetailLabel}>운영 시간</span>
                <span className={styles.accessDetailValue}>화–금 10:00–17:00 (점심 12:00–13:00 휴게)</span>
              </div>
              <div className={styles.accessDetailItem}>
                <span className={styles.accessDetailLabel}>신청 방법</span>
                <span className={styles.accessDetailValue}>이메일 사전 예약 필수 (archive@seoulphotocenter.kr)</span>
              </div>
              <div className={styles.accessDetailItem}>
                <span className={styles.accessDetailLabel}>열람 자격</span>
                <span className={styles.accessDetailValue}>연구자, 대학원생, 출판·전시 관계자</span>
              </div>
            </div>
            <a href="#" className={styles.accessLink}>열람 신청하기 →</a>
          </div>
          <div className={styles.accessImage}>
            <img
              src="https://picsum.photos/seed/arc-access/700/500?grayscale"
              alt="아카이브 열람실"
            />
          </div>
        </div>
      </section>

      <GroupNav currentSite="center" />
    </div>
  )
}

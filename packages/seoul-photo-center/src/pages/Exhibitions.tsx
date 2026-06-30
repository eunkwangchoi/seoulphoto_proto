import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { centerNavItems } from '../shared/nav'
import styles from './Exhibitions.module.css'

type ExhibitStatus = 'current' | 'upcoming' | 'past'

interface Exhibition {
  status: ExhibitStatus
  category: '상설전시' | '기획전시' | '특별전시'
  title: string
  subtitle?: string
  period: string
  location: string
  desc?: string
  seed: string
}

const current: Exhibition[] = [
  {
    status: 'current',
    category: '기획전시',
    title: '빛의 기억: 한국 현대사진의 단면',
    subtitle: 'Memory of Light: A Cross-Section of Korean Contemporary Photography',
    period: '2026. 06. 15 — 2026. 09. 28',
    location: '제1전시실 · 제2전시실',
    desc: '한국 현대사진의 흐름을 조망하는 대규모 아카이브 전시. 1970년대부터 현재까지 주요 작가 43인의 작품 120여 점을 선보입니다. 기록 사진에서 예술 사진으로 넘어온 이행의 순간들을 조명합니다.',
    seed: 'spc-ex-cur1',
  },
  {
    status: 'current',
    category: '상설전시',
    title: '서울, 사진으로 기록된 100년',
    subtitle: 'Seoul: 100 Years Through the Lens',
    period: '상시',
    location: '제3전시실 · 로비 갤러리',
    desc: '1920년대부터 2020년대까지 서울의 변화를 담은 사진 기록물. 도시의 풍경, 사람들의 일상, 역사적 사건의 현장을 사진으로 기록한 서울 100년의 연대기.',
    seed: 'spc-ex-per',
  },
]

const upcoming: Exhibition[] = [
  {
    status: 'upcoming',
    category: '기획전시',
    title: '경계의 풍경: 비무장지대 사진展',
    period: '2026. 10. 10 — 2027. 01. 11',
    location: '제1전시실',
    seed: 'spc-ex-up1',
  },
  {
    status: 'upcoming',
    category: '특별전시',
    title: '개관 10주년 기념: 서울사진센터 소장품 特展',
    period: '2026. 11. 01 — 2027. 02. 28',
    location: '전시실 전관',
    seed: 'spc-ex-up2',
  },
  {
    status: 'upcoming',
    category: '기획전시',
    title: '사진가의 눈: 신진작가 5인 그룹전',
    period: '2026. 10. 22 — 2026. 12. 14',
    location: '제2전시실',
    seed: 'spc-ex-up3',
  },
]

const past: Exhibition[] = [
  { status: 'past', category: '기획전시', title: '이갑철: 강원도 사람들', period: '2026. 02. 20 — 2026. 05. 31', location: '제1전시실', seed: 'spc-ex-p1' },
  { status: 'past', category: '특별전시', title: '사진의 시간: 필름 현상에서 디지털까지', period: '2026. 01. 10 — 2026. 04. 12', location: '제2전시실', seed: 'spc-ex-p2' },
  { status: 'past', category: '기획전시', title: '도시의 그늘: 서울 재개발 20년', period: '2025. 10. 01 — 2026. 01. 05', location: '제1전시실', seed: 'spc-ex-p3' },
  { status: 'past', category: '상설전시', title: '노순택: 망각기계 — 분단의 기억', period: '2025. 06. 15 — 2025. 09. 28', location: '제2전시실', seed: 'spc-ex-p4' },
  { status: 'past', category: '특별전시', title: '제주 해녀: 바다의 기억', period: '2025. 04. 05 — 2025. 07. 06', location: '로비 갤러리', seed: 'spc-ex-p5' },
  { status: 'past', category: '기획전시', title: '배병우: 소나무 — 1980-2024', period: '2025. 01. 15 — 2025. 04. 30', location: '제1전시실', seed: 'spc-ex-p6' },
]

export default function Exhibitions() {
  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER"
        navItems={centerNavItems}
      />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>전시</h1>
          <p className={styles.pageSubtitle}>현재 전시 · 예정 전시 · 지난 전시</p>
        </div>
        <nav className={styles.catNav} aria-label="전시 분류">
          {(['전체', '상설전시', '기획전시', '특별전시'] as const).map((cat, i) => (
            <a
              key={cat}
              href="#"
              className={[styles.catTab, i === 0 ? styles.catTabActive : ''].filter(Boolean).join(' ')}
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Current Exhibitions ───────────────────────── */}
      <section className={styles.current}>
        <div className={styles.sectionLabel}>
          <EditorialLabel>현재 전시</EditorialLabel>
        </div>
        <div className={styles.currentGrid}>
          {current.map((ex, i) => (
            <article key={i} className={styles.currentCard}>
              <a href="#" className={styles.currentLink}>
                <div className={styles.currentImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${ex.seed}/900/600?grayscale`}
                    alt={ex.title}
                    className={styles.currentImage}
                  />
                  <div className={styles.currentBadge}>{ex.category}</div>
                </div>
                <div className={styles.currentText}>
                  <h2 className={styles.currentTitle}>{ex.title}</h2>
                  {ex.subtitle && <p className={styles.currentSubtitle}>{ex.subtitle}</p>}
                  <div className={styles.currentMeta}>
                    <span className={styles.currentPeriod}>{ex.period}</span>
                    <span className={styles.currentLocation}>{ex.location}</span>
                  </div>
                  {ex.desc && <p className={styles.currentDesc}>{ex.desc}</p>}
                  <span className={styles.currentMore}>자세히 보기 →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Upcoming Exhibitions ──────────────────────── */}
      <section className={styles.upcoming}>
        <div className={styles.sectionLabel}>
          <EditorialLabel variant="terracotta">예정 전시</EditorialLabel>
        </div>
        <div className={styles.upcomingGrid}>
          {upcoming.map((ex, i) => (
            <article key={i} className={styles.upcomingCard}>
              <a href="#" className={styles.upcomingLink}>
                <div className={styles.upcomingImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${ex.seed}/600/420?grayscale`}
                    alt={ex.title}
                    className={styles.upcomingImage}
                  />
                </div>
                <div className={styles.upcomingText}>
                  <p className={styles.upcomingCategory}>{ex.category}</p>
                  <h3 className={styles.upcomingTitle}>{ex.title}</h3>
                  <p className={styles.upcomingPeriod}>{ex.period}</p>
                  <p className={styles.upcomingLocation}>{ex.location}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Past Exhibitions ──────────────────────────── */}
      <section className={styles.past}>
        <div className={styles.sectionLabel}>
          <EditorialLabel>지난 전시</EditorialLabel>
        </div>
        <div className={styles.pastGrid}>
          {past.map((ex, i) => (
            <article key={i} className={styles.pastCard}>
              <a href="#" className={styles.pastLink}>
                <div className={styles.pastImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${ex.seed}/400/300?grayscale`}
                    alt={ex.title}
                    className={styles.pastImage}
                  />
                </div>
                <div className={styles.pastText}>
                  <p className={styles.pastCategory}>{ex.category}</p>
                  <h3 className={styles.pastTitle}>{ex.title}</h3>
                  <p className={styles.pastPeriod}>{ex.period}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className={styles.pastMore}>
          <a href="#" className={styles.pastMoreLink}>지난 전시 전체 보기 →</a>
        </div>
      </section>

      <GroupNav currentSite="center" />
    </div>
  )
}

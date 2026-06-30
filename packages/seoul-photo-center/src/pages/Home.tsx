import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import { centerNavItems } from '../shared/nav'
import styles from './Home.module.css'

const newsItems = [
  { date: '2026.06.25', title: '2026 하반기 교육 프로그램 참가자 모집 안내' },
  { date: '2026.06.18', title: '아카이브 열람 서비스 시스템 점검 안내 (6월 20일)' },
  { date: '2026.06.10', title: '서울사진센터 개관 10주년 기념 심포지엄 개최 안내' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER"
        navItems={centerNavItems}
        scrollTransparent
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <img
          src="https://picsum.photos/seed/spc-hero/1920/1080?grayscale"
          alt="서울사진센터 전시 전경"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Seoul<br />Photography<br />Center
          </h1>
          <p className={styles.heroSubline}>사진으로 기록하는 서울의 시간과 기억</p>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>SCROLL</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Featured Exhibition ───────────────────────── */}
      <section className={styles.featured} id="exhibitions">
        <div className={styles.featuredImage}>
          <img
            src="https://picsum.photos/seed/spc-feat/1200/900?grayscale"
            alt="빛의 기억 전시"
          />
        </div>
        <div className={styles.featuredText}>
          <EditorialLabel>현재 전시</EditorialLabel>
          <h2 className={styles.featuredTitle}>
            빛의 기억:<br />한국 현대사진의<br />단면
          </h2>
          <p className={styles.featuredDate}>2026. 06. 15 — 2026. 09. 28</p>
          <p className={styles.featuredDesc}>
            한국 현대사진의 흐름을 조망하는 대규모 아카이브 전시. 1970년대부터 현재까지 주요 작가 43인의 작품을 선보입니다.
          </p>
          <a href="#" className={styles.featuredLink}>전시 보기 →</a>
        </div>
      </section>

      {/* ── News & Notice ─────────────────────────────── */}
      <section className={styles.news} id="news">
        <div className={styles.newsInner}>
          <ul className={styles.newsList}>
            {newsItems.map(item => (
              <li key={item.date} className={styles.newsItem}>
                <a href="#" className={styles.newsLink}>
                  <span className={styles.newsDate}>{item.date}</span>
                  <span className={styles.newsTitle}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.newsFooter}>
            <a href="#" className={styles.viewAll}>VIEW ALL →</a>
          </div>
        </div>
      </section>

      {/* ── Upcoming Programs ─────────────────────────── */}
      <section className={styles.programs} id="education">
        <div className={styles.programsGrid}>
          <article className={styles.programItem}>
            <div className={styles.programImageWrap}>
              <img
                src="https://picsum.photos/seed/spc-prog1/600/400?grayscale"
                alt="필름 현상 워크숍"
                className={styles.programImage}
              />
            </div>
            <div className={styles.programBody}>
              <EditorialLabel>워크숍</EditorialLabel>
              <h3 className={styles.programTitle}>필름 현상과 인화의 기초</h3>
              <p className={styles.programDate}>2026. 07. 12 — 2026. 07. 26</p>
            </div>
          </article>
          <article className={styles.programItem}>
            <div className={styles.programImageWrap}>
              <img
                src="https://picsum.photos/seed/spc-prog2/600/400?grayscale"
                alt="사진가 강연"
                className={styles.programImage}
              />
            </div>
            <div className={styles.programBody}>
              <EditorialLabel>강연</EditorialLabel>
              <h3 className={styles.programTitle}>사진가와의 대화: 최민식의 사진 세계</h3>
              <p className={styles.programDate}>2026. 07. 05</p>
            </div>
          </article>
        </div>
      </section>

      <GroupNav currentSite="center" />
    </div>
  )
}

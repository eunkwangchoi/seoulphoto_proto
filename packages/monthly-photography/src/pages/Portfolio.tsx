import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { monthlyNavItems } from '../shared/nav'
import styles from './Portfolio.module.css'

const featured = {
  name: '박미나',
  period: '2026년 7월',
  theme: '가면과 얼굴 — 우리는 언제 진짜 표정을 짓는가',
  bio: '1982년 서울 출생. 중앙대학교 사진학과를 졸업하고 영국 런던 예술대학교(UAL)에서 석사 학위를 받았다. 일상의 오브제와 인물을 조합해 연출하는 사진으로, 현실과 허구의 경계를 탐구한다. 국내외 다수의 그룹전과 개인전에 참가했으며 현재 서울을 기반으로 활동 중이다.',
  heroSeed: 'pf-hero2026',
  images: ['pf-g1', 'pf-g2', 'pf-g3', 'pf-g4', 'pf-g5', 'pf-g6'],
}

const pastPortfolios = [
  { name: '이지훈', period: '2026년 6월', theme: '소멸하는 것들에 대한 기록', seed: 'pp-past1' },
  { name: '강다빈', period: '2026년 5월', theme: '도시 유목민: 쪽방촌 사람들', seed: 'pp-past2' },
  { name: '오승민', period: '2026년 4월', theme: '해체와 재건: 서울의 재개발 풍경', seed: 'pp-past3' },
  { name: '한채원', period: '2026년 3월', theme: '귀향 — 고향을 찾아 떠난 사진 여행', seed: 'pp-past4' },
]

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={monthlyNavItems} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img
            src={`https://picsum.photos/seed/${featured.heroSeed}/1920/1080?grayscale`}
            alt={`${featured.name} 포트폴리오 대표 이미지`}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroMeta}>
              <EditorialLabel>포트폴리오 · {featured.period}</EditorialLabel>
              <h1 className={styles.heroName}>{featured.name}</h1>
              <p className={styles.heroTheme}>"{featured.theme}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photographer Bio ─────────────────────────── */}
      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioLabel}>
            <EditorialLabel>작가 소개</EditorialLabel>
          </div>
          <p className={styles.bioText}>{featured.bio}</p>
        </div>
      </section>

      <Divider />

      {/* ── Gallery Grid ─────────────────────────────── */}
      <section className={styles.gallery}>
        <div className={styles.galleryGrid}>
          {featured.images.map((seed, i) => (
            <div
              key={i}
              className={[styles.galleryItem, i === 0 ? styles.galleryItemWide : ''].filter(Boolean).join(' ')}
            >
              <img
                src={`https://picsum.photos/seed/${seed}/800/600?grayscale`}
                alt={`${featured.name} 작품 ${i + 1}`}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Past Portfolios ───────────────────────────── */}
      <section className={styles.past}>
        <div className={styles.pastInner}>
          <div className={styles.pastHeader}>
            <EditorialLabel>지난 호 포트폴리오</EditorialLabel>
          </div>
          <div className={styles.pastGrid}>
            {pastPortfolios.map((p, i) => (
              <article key={i} className={styles.pastCard}>
                <a href="#" className={styles.pastCardLink}>
                  <div className={styles.pastCardImageWrap}>
                    <img
                      src={`https://picsum.photos/seed/${p.seed}/400/500?grayscale`}
                      alt={`${p.name} 포트폴리오`}
                      className={styles.pastCardImage}
                    />
                  </div>
                  <div className={styles.pastCardText}>
                    <p className={styles.pastCardPeriod}>{p.period}</p>
                    <h3 className={styles.pastCardName}>{p.name}</h3>
                    <p className={styles.pastCardTheme}>{p.theme}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GroupNav currentSite="monthly" />
    </div>
  )
}

import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import styles from './Home.module.css'

const navItems = [
  { label: '아트', href: '#art' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '인터뷰', href: '#interview' },
  { label: '리뷰', href: '#review' },
  { label: '아카이브', href: '#archive' },
  { label: 'KR', href: '#' },
]

const columnItems = [
  {
    title: '카메라 없이 보는 법',
    author: '이지수',
    date: '2026.06.28',
    excerpt: '사진을 찍기 전, 눈으로 먼저 프레임을 그리는 연습에 대하여.',
  },
  {
    title: '흑백의 감각: 컬러를 버렸을 때 남는 것',
    author: '박현우',
    date: '2026.06.21',
    excerpt: '흑백 사진이 단순한 색의 제거가 아니라 감각의 재구성임을 이야기한다.',
  },
  {
    title: '도시의 그림자를 쫓아서',
    author: '최은아',
    date: '2026.06.14',
    excerpt: '서울 골목 골목에서 발견한 빛과 그림자의 기하학적 언어들.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="월간사진 / MONTHLY PHOTOGRAPHY"
        navItems={navItems}
        scrollTransparent
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img
            src="https://picsum.photos/seed/mp-hero/1920/1080?grayscale"
            alt="2026년 7월호 표지"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroText}>
              <p className={styles.heroIssue}>VOL. 412 — 2026년 7월호</p>
              <h1 className={styles.heroTitle}>
                시간이 멈춘<br />골목의 빛
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.heroBelow}>
          <div className={styles.heroBelowInner}>
            <p className={styles.heroTagline}>골목길 사진가 7인이 담아낸 서울의 잊혀진 풍경</p>
            <a href="#" className={styles.heroCta}>최신 기사 보기 →</a>
          </div>
        </div>
      </section>

      {/* ── Editor's Pick ────────────────────────────── */}
      <section className={styles.editorsPick} id="art">
        <div className={styles.editorsPickHeader}>
          <EditorialLabel>Editor's Pick</EditorialLabel>
        </div>
        <div className={styles.editorsPickGrid}>
          <article className={styles.pickMain}>
            <div className={styles.pickMainImageWrap}>
              <img
                src="https://picsum.photos/seed/mp-main/800/1000?grayscale"
                alt="에디터 추천 기사"
                className={styles.pickMainImage}
              />
            </div>
            <div className={styles.pickMainText}>
              <EditorialLabel variant="terracotta">포트폴리오</EditorialLabel>
              <h2 className={styles.pickMainTitle}>
                정연두: 현실과 허구 사이의 연극적 순간
              </h2>
              <p className={styles.pickMainExcerpt}>
                무대를 배경으로 일상을 연출하는 정연두 작가의 신작 시리즈. 사진이 담아낼 수 없다고 여겨온 것들을 사진으로 담아냈다.
              </p>
              <p className={styles.pickMeta}>정연두 · 2026.06.25</p>
            </div>
          </article>

          <div className={styles.pickSecondary}>
            <article className={styles.pickSecItem}>
              <div className={styles.pickSecImageWrap}>
                <img
                  src="https://picsum.photos/seed/mp-sec1/400/300?grayscale"
                  alt="두 번째 추천 기사"
                  className={styles.pickSecImage}
                />
              </div>
              <div className={styles.pickSecText}>
                <EditorialLabel>인터뷰</EditorialLabel>
                <h3 className={styles.pickSecTitle}>김아타: 사진은 사라지는 것들의 기록</h3>
                <p className={styles.pickSecMeta}>2026.06.20</p>
              </div>
            </article>

            <article className={styles.pickSecItem}>
              <div className={styles.pickSecImageWrap}>
                <img
                  src="https://picsum.photos/seed/mp-sec2/400/300?grayscale"
                  alt="세 번째 추천 기사"
                  className={styles.pickSecImage}
                />
              </div>
              <div className={styles.pickSecText}>
                <EditorialLabel>리뷰</EditorialLabel>
                <h3 className={styles.pickSecTitle}>전시 리뷰: 서울시립미술관 〈빛의 질량〉</h3>
                <p className={styles.pickSecMeta}>2026.06.15</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Column ───────────────────────────────────── */}
      <section className={styles.column} id="interview">
        <div className={styles.columnInner}>
          <div className={styles.columnHeader}>
            <EditorialLabel>칼럼</EditorialLabel>
          </div>
          {columnItems.map((item, i) => (
            <div key={i}>
              <article className={styles.columnItem}>
                <a href="#" className={styles.columnLink}>
                  <h3 className={styles.columnTitle}>{item.title}</h3>
                  <p className={styles.columnExcerpt}>{item.excerpt}</p>
                  <p className={styles.columnMeta}>{item.author} · {item.date}</p>
                </a>
              </article>
              {i < columnItems.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Subscription CTA ─────────────────────────── */}
      <section className={styles.subscription}>
        <div className={styles.subscriptionInner}>
          <p className={styles.subscriptionLabel}>정기구독</p>
          <h2 className={styles.subscriptionTitle}>월간사진 정기구독</h2>
          <p className={styles.subscriptionDesc}>
            매월 새로운 시각과 이야기를 담아 집으로 배달해 드립니다
          </p>
          <a href="#" className={styles.subscriptionBtn}>구독 신청하기</a>
        </div>
      </section>

      <GroupNav currentSite="monthly" />
    </div>
  )
}

import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { monthlyNavItems } from '../shared/nav'
import styles from './Art.module.css'

const categories = ['전체', '포토스토리', '북 & 컬처', '미니갤러리']

const featured = {
  category: '포토스토리',
  title: '경계 위의 시선: 비무장지대의 봄',
  excerpt:
    '남북 접경 지역, 사람의 발길이 닿지 않는 곳에서 자라는 생명들. 사진가 임태훈이 3년에 걸쳐 기록한 DMZ의 사계절 — 그 고요하고도 충격적인 아름다움에 대하여.',
  author: '임태훈',
  date: '2026.06.28',
  seed: 'mp-art-feat',
}

const articles = [
  { category: '포토스토리', title: '제주의 해녀: 바다로 돌아가는 여인들', author: '김선아', date: '2026.06.22', seed: 'mp-a1' },
  { category: '북 & 컬처', title: '사진집 리뷰: Henri Cartier-Bresson, 《The Mind\'s Eye》', author: '박정훈', date: '2026.06.18', seed: 'mp-a2' },
  { category: '미니갤러리', title: '빛의 방: 이수진 개인전 현장 스케치', author: '편집부', date: '2026.06.14', seed: 'mp-a3' },
  { category: '포토스토리', title: '장마 전후: 서울을 적시는 빗줄기', author: '최형준', date: '2026.06.10', seed: 'mp-a4' },
  { category: '북 & 컬처', title: '사진집 리뷰: 강홍구 《녹색연구》', author: '이지은', date: '2026.06.06', seed: 'mp-a5' },
  { category: '미니갤러리', title: '여행지의 문: 포르투갈 리스본', author: '정다은', date: '2026.06.01', seed: 'mp-a6' },
]

export default function Art() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={monthlyNavItems} />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageTop}>
        <div className={styles.pageTopInner}>
          <h1 className={styles.pageTitle}>아트</h1>
          <p className={styles.pageSubtitle}>국내외 사진 예술의 현재와 미래를 담습니다</p>
        </div>
        <nav className={styles.categoryFilter} aria-label="카테고리 필터">
          {categories.map((cat, i) => (
            <a
              key={cat}
              href="#"
              className={[styles.categoryTab, i === 0 ? styles.categoryTabActive : ''].filter(Boolean).join(' ')}
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Featured Article ─────────────────────────── */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <a href="#" className={styles.featuredLink}>
            <div className={styles.featuredImageWrap}>
              <img
                src={`https://picsum.photos/seed/${featured.seed}/900/600?grayscale`}
                alt={featured.title}
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.featuredText}>
              <EditorialLabel>{featured.category}</EditorialLabel>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <p className={styles.featuredMeta}>{featured.author} · {featured.date}</p>
            </div>
          </a>
        </div>
      </section>

      <Divider />

      {/* ── Article Grid ─────────────────────────────── */}
      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {articles.map((article, i) => (
            <article key={i} className={styles.card}>
              <a href="#" className={styles.cardLink}>
                <div className={styles.cardImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${article.seed}/400/300?grayscale`}
                    alt={article.title}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardText}>
                  <EditorialLabel variant={article.category === '북 & 컬처' ? 'terracotta' : 'olive'}>
                    {article.category}
                  </EditorialLabel>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardMeta}>{article.author} · {article.date}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className={styles.loadMore}>
          <button className={styles.loadMoreBtn} type="button">더 보기</button>
        </div>
      </section>

      <GroupNav currentSite="monthly" />
    </div>
  )
}

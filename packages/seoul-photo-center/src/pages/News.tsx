import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { centerNavItems } from '../shared/nav'
import styles from './News.module.css'

type NewsCategory = '공지사항' | '보도자료' | '행사'

interface NewsItem {
  category: NewsCategory
  title: string
  excerpt?: string
  date: string
  seed: string
  isMain?: boolean
}

const newsItems: NewsItem[] = [
  {
    category: '행사',
    title: '개관 10주년 기념 심포지엄 〈사진, 아카이브, 도시〉 개최 안내',
    excerpt: '서울사진센터 개관 10주년을 맞아 사진의 사회적 역할과 아카이브의 미래를 주제로 하는 국제 심포지엄을 개최합니다. 국내외 사진학자, 큐레이터, 사진작가 12인이 참여하며 6월 10일 오전 10시부터 센터 세미나실에서 진행됩니다.',
    date: '2026.06.10',
    seed: 'news-c1',
    isMain: true,
  },
  {
    category: '공지사항',
    title: '아카이브 열람 서비스 시스템 점검 안내 (6월 20일)',
    excerpt: '온라인 아카이브 열람 신청 시스템이 6월 20일(토) 오전 10시부터 오후 6시까지 점검 예정입니다. 해당 시간 동안 온라인 신청이 불가합니다.',
    date: '2026.06.18',
    seed: 'news-c2',
  },
  {
    category: '공지사항',
    title: '2026 하반기 교육 프로그램 참가자 모집 안내',
    excerpt: '2026년 하반기 사진 교육 프로그램 참가자를 모집합니다. 워크숍, 강연, 어린이 대상 과정 등 총 12개 과정이 운영됩니다.',
    date: '2026.06.25',
    seed: 'news-c3',
  },
  {
    category: '보도자료',
    title: '서울사진센터-서울포토옥션 공동 감정 협약 체결',
    date: '2026.06.05',
    seed: 'news-c4',
  },
  {
    category: '보도자료',
    title: '〈빛의 기억〉전 관람객 1만 명 돌파 — 개막 3주 만에 달성',
    date: '2026.06.09',
    seed: 'news-c5',
  },
  {
    category: '행사',
    title: '작가와의 만남: 〈빛의 기억〉 참여 작가 아티스트 토크',
    date: '2026.06.28',
    seed: 'news-c6',
  },
  {
    category: '공지사항',
    title: '2026년 하반기 사진 자료 기증 신청 접수',
    date: '2026.06.20',
    seed: 'news-c7',
  },
  {
    category: '보도자료',
    title: '서울사진센터, 2026 국제 사진 아카이브 포럼 공식 파트너 선정',
    date: '2026.05.30',
    seed: 'news-c8',
  },
]

const mainNews = newsItems[0]
const sideNews = newsItems.slice(1, 3)
const listNews = newsItems.slice(3)

const catVariant: Record<NewsCategory, 'olive' | 'terracotta'> = {
  '행사': 'terracotta',
  '보도자료': 'olive',
  '공지사항': 'olive',
}

export default function News() {
  const cats: Array<'전체' | NewsCategory> = ['전체', '공지사항', '보도자료', '행사']

  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER"
        navItems={centerNavItems}
      />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>뉴스</h1>
          <p className={styles.pageSubtitle}>공지사항 · 보도자료 · 행사</p>
        </div>
        <nav className={styles.catNav} aria-label="뉴스 카테고리">
          {cats.map((cat, i) => (
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

      {/* ── Featured News ─────────────────────────────── */}
      <section className={styles.feature}>
        <div className={styles.featureInner}>
          <a href="#" className={styles.featureMain}>
            <div className={styles.featureMainImageWrap}>
              <img
                src={`https://picsum.photos/seed/${mainNews.seed}/900/600?grayscale`}
                alt={mainNews.title}
                className={styles.featureMainImage}
              />
            </div>
            <div className={styles.featureMainText}>
              <EditorialLabel variant={catVariant[mainNews.category]}>{mainNews.category}</EditorialLabel>
              <h2 className={styles.featureMainTitle}>{mainNews.title}</h2>
              {mainNews.excerpt && (
                <p className={styles.featureMainExcerpt}>{mainNews.excerpt}</p>
              )}
              <p className={styles.featureDate}>{mainNews.date}</p>
            </div>
          </a>
          <div className={styles.featureSide}>
            {sideNews.map((item) => (
              <a key={item.seed} href="#" className={styles.featureSideItem}>
                <div className={styles.featureSideImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/400/300?grayscale`}
                    alt={item.title}
                    className={styles.featureSideImage}
                  />
                </div>
                <div className={styles.featureSideText}>
                  <EditorialLabel variant={catVariant[item.category]}>{item.category}</EditorialLabel>
                  <h3 className={styles.featureSideTitle}>{item.title}</h3>
                  {item.excerpt && (
                    <p className={styles.featureSideExcerpt}>{item.excerpt}</p>
                  )}
                  <p className={styles.featureDate}>{item.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── News List ─────────────────────────────────── */}
      <section className={styles.list}>
        <div className={styles.listInner}>
          {listNews.map((item) => (
            <a key={item.seed} href="#" className={styles.listItem}>
              <div className={styles.listMeta}>
                <EditorialLabel variant={catVariant[item.category]}>{item.category}</EditorialLabel>
              </div>
              <h3 className={styles.listTitle}>{item.title}</h3>
              <p className={styles.listDate}>{item.date}</p>
              <span className={styles.listArrow} aria-hidden>→</span>
            </a>
          ))}
        </div>
      </section>

      <GroupNav currentSite="center" />
    </div>
  )
}

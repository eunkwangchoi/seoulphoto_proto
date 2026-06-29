import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import { auctionNavItems, SITE_NAME } from '../shared/nav'
import styles from './News.module.css'

type NewsCategory = '경매 결과' | '보도자료' | '행사 & 이벤트'

interface NewsItem {
  category: NewsCategory
  title: string
  excerpt: string
  date: string
  seed: string
  isMain?: boolean
}

const news: NewsItem[] = [
  {
    category: '경매 결과',
    title: '서울포토옥션 제 46회 경매 총낙찰액 14억 2천만 원 달성 — 구본창 〈백자 연구〉 5,500만 원 낙찰로 최고가 경신',
    excerpt: '지난 6월 15일(일) 진행된 제 46회 경매에서 총 48점 중 41점이 낙찰, 낙찰률 85.4%를 기록하며 역대 최고 성적을 거뒀다. 최고 낙찰가는 구본창 작가의 〈백자 연구 No. 1〉로, 추정가 상한의 2.2배인 5,500만 원에 새 주인을 찾았다.',
    date: '2026.06.16',
    seed: 'news-01',
    isMain: true,
  },
  {
    category: '경매 결과',
    title: '배병우 〈소나무〉 시리즈 4점, 전량 낙찰 — 추정가 대비 평균 138% 초과 달성',
    excerpt: '제 46회 경매에 출품된 배병우 작가의 소나무 시리즈 4점이 모두 낙찰됐다. 1980년대부터 2010년대 초까지 이어진 소나무 작업의 시장 견고성을 다시 한번 입증했다.',
    date: '2026.06.16',
    seed: 'news-02',
  },
  {
    category: '보도자료',
    title: '서울포토옥션, 2026년 하반기 경매 일정 발표 — 총 6회 진행 예정',
    excerpt: '서울포토옥션은 2026년 하반기 경매 스케줄을 공개했다. 7월 정기 경매를 시작으로 12월까지 총 6회가 예정돼 있으며, 특별 경매 2회가 추가 검토 중이다.',
    date: '2026.06.10',
    seed: 'news-03',
  },
  {
    category: '행사 & 이벤트',
    title: '제 47회 경매 프리뷰: 7월 8–9일, 청담 갤러리 개방',
    excerpt: '다음 달 경매 출품작을 직접 감상할 수 있는 프리뷰가 7월 8일(화)과 9일(수) 이틀간 청담동 갤러리에서 열린다. 사전 예약 없이 자유롭게 관람 가능하며, 작품 전문가 동석 감상 예약도 가능하다.',
    date: '2026.06.28',
    seed: 'news-04',
  },
  {
    category: '보도자료',
    title: '서울포토옥션-서울사진센터 공동 감정 협약 체결',
    excerpt: '서울포토옥션은 서울사진센터와 사진 작품 진품 감정 및 보존 처리에 관한 공동 협약을 체결했다. 이번 협약으로 옥션 출품 전 감정 프로세스가 더욱 강화된다.',
    date: '2026.06.05',
    seed: 'news-05',
  },
  {
    category: '경매 결과',
    title: '2026년 상반기 결산: 한국 사진 시장 거래액 전년 대비 23% 성장',
    excerpt: '2026년 상반기(1–6월) 국내 사진 경매 시장 총 거래액이 전년 동기 대비 23% 증가한 것으로 집계됐다. 중견 작가군의 수요 확대와 신진 작가 발굴 경매의 성과가 주요 원인으로 분석된다.',
    date: '2026.06.25',
    seed: 'news-06',
  },
  {
    category: '행사 & 이벤트',
    title: '신진작가 발굴 경매 〈뉴 렌즈 2026〉 작가 모집 — 8월 15일까지',
    excerpt: '서울포토옥션이 매년 진행하는 신진작가 발굴 경매 〈뉴 렌즈 2026〉의 참가 작가를 모집한다. 사진 전공 대학(원)생 및 활동 연차 5년 미만의 사진가를 대상으로 하며, 선정된 10인의 작품이 9월 경매에 출품된다.',
    date: '2026.06.20',
    seed: 'news-07',
  },
]

const mainNews = news[0]
const sideNews = news.slice(1, 3)
const listNews = news.slice(3)

const catStyle: Record<NewsCategory, 'olive' | 'terracotta'> = {
  '경매 결과': 'terracotta',
  '보도자료': 'olive',
  '행사 & 이벤트': 'olive',
}

export default function News() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={auctionNavItems} dark />

      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>뉴스</h1>
          <p className={styles.pageSubtitle}>경매 결과 · 보도자료 · 행사 & 이벤트</p>
        </div>
      </div>

      {/* ── Category Tabs ─────────────────────────────── */}
      <nav className={styles.catNav} aria-label="뉴스 카테고리">
        <div className={styles.catNavInner}>
          {(['전체', '경매 결과', '보도자료', '행사 & 이벤트'] as const).map((cat, i) => (
            <a
              key={cat}
              href="#"
              className={[styles.catTab, i === 0 ? styles.catTabActive : ''].filter(Boolean).join(' ')}
            >
              {cat}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Top Feature ──────────────────────────────── */}
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
              <EditorialLabel variant={catStyle[mainNews.category]}>{mainNews.category}</EditorialLabel>
              <h2 className={styles.featureMainTitle}>{mainNews.title}</h2>
              <p className={styles.featureMainExcerpt}>{mainNews.excerpt}</p>
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
                  <EditorialLabel variant={catStyle[item.category]}>{item.category}</EditorialLabel>
                  <h3 className={styles.featureSideTitle}>{item.title}</h3>
                  <p className={styles.featureDate}>{item.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── News List ────────────────────────────────── */}
      <section className={styles.list}>
        <div className={styles.listInner}>
          {listNews.map((item) => (
            <a key={item.seed} href="#" className={styles.listItem}>
              <div className={styles.listImageWrap}>
                <img
                  src={`https://picsum.photos/seed/${item.seed}/200/150?grayscale`}
                  alt={item.title}
                  className={styles.listImage}
                />
              </div>
              <div className={styles.listText}>
                <EditorialLabel variant={catStyle[item.category]}>{item.category}</EditorialLabel>
                <h3 className={styles.listTitle}>{item.title}</h3>
                <p className={styles.listExcerpt}>{item.excerpt}</p>
                <p className={styles.listDate}>{item.date}</p>
              </div>
              <span className={styles.listArrow} aria-hidden>→</span>
            </a>
          ))}
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}

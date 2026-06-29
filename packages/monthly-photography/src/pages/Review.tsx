import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { monthlyNavItems } from '../shared/nav'
import styles from './Review.module.css'

const equipmentReviews = [
  {
    brand: 'SONY',
    model: 'α1 II',
    category: '풀프레임 미러리스',
    summary: '5000만 화소와 30fps 연속 촬영의 만남. 소니가 완성한 플래그십 — 빠른 피사체도, 세밀한 디테일도 놓치지 않는다.',
    rating: 4.8,
    date: '2026.06.20',
    seed: 'rv-eq1',
  },
  {
    brand: 'FUJIFILM',
    model: 'GFX100RF',
    category: '중형 미러리스',
    summary: '후지필름 최초의 중형 고정렌즈 카메라. 102MP 센서와 F4 렌즈의 조합이 가져다주는 압도적인 묘사력.',
    rating: 4.6,
    date: '2026.06.13',
    seed: 'rv-eq2',
  },
  {
    brand: 'LEICA',
    model: 'M11-P',
    category: '레인지파인더',
    summary: '촬영 출처 인증(Content Credentials)을 탑재한 라이카 최초의 카메라. 진정성의 시대에 걸맞은 도구.',
    rating: 4.5,
    date: '2026.06.06',
    seed: 'rv-eq3',
  },
]

const exhibitionReviews = [
  {
    title: '빛의 질량',
    venue: '서울시립미술관',
    period: '2026.05.10 — 2026.08.31',
    summary:
      '빛 자체를 피사체로 삼은 국내외 작가 18인의 설치 및 사진 작품 43점. 공간과 빛의 관계를 재해석하는 이 전시는 여름 내내 방문객의 발길을 붙든다.',
    date: '2026.06.17',
    seed: 'rv-ex1',
  },
  {
    title: '안개 속의 도시',
    venue: '국립현대미술관 서울관',
    period: '2026.04.20 — 2026.07.20',
    summary:
      '한국 현대 도시 사진 40년의 역사를 조망한다. 1980년대 산업화 시대부터 2020년대 초까지, 카메라에 담긴 서울의 변주.',
    date: '2026.06.03',
    seed: 'rv-ex2',
  },
  {
    title: '정연두: 현실의 극장',
    venue: '아라리오갤러리 서울',
    period: '2026.06.01 — 2026.07.31',
    summary:
      '현실과 연출 사이의 경계를 탐구하는 정연두 작가의 대규모 개인전. 신작 20점을 포함해 무대-사진의 긴장감을 총망라한다.',
    date: '2026.05.28',
    seed: 'rv-ex3',
  },
  {
    title: '포토 서울 2026',
    venue: '코엑스 A홀',
    period: '2026.05.15 — 2026.05.18',
    summary:
      '아시아 최대 규모 사진 박람회 포토 서울의 2026년판. 국내외 200여 갤러리가 참가한 사진 시장의 현재를 읽는다.',
    date: '2026.05.20',
    seed: 'rv-ex4',
  },
]

export default function Review() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={monthlyNavItems} />

      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>리뷰</h1>
          <p className={styles.pageSubtitle}>카메라 & 장비, 전시 & 출판물에 대한 심층 리뷰</p>
        </div>
      </div>

      {/* ── Equipment Reviews ─────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <EditorialLabel>장비 리뷰</EditorialLabel>
          </div>
          <div className={styles.eqGrid}>
            {equipmentReviews.map((item, i) => (
              <article key={i} className={styles.eqCard}>
                <a href="#" className={styles.eqCardLink}>
                  <div className={styles.eqImageWrap}>
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/500/340?grayscale`}
                      alt={`${item.brand} ${item.model}`}
                      className={styles.eqImage}
                    />
                  </div>
                  <div className={styles.eqText}>
                    <p className={styles.eqCategory}>{item.category}</p>
                    <h3 className={styles.eqModel}>{item.brand} {item.model}</h3>
                    <p className={styles.eqSummary}>{item.summary}</p>
                    <div className={styles.eqFooter}>
                      <span className={styles.eqRating}>★ {item.rating}</span>
                      <span className={styles.eqDate}>{item.date}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Exhibition Reviews ────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <EditorialLabel variant="terracotta">전시 리뷰</EditorialLabel>
          </div>
          <div className={styles.exGrid}>
            {exhibitionReviews.map((item, i) => (
              <article key={i} className={styles.exCard}>
                <a href="#" className={styles.exCardLink}>
                  <div className={styles.exImageWrap}>
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/600/400?grayscale`}
                      alt={item.title}
                      className={styles.exImage}
                    />
                  </div>
                  <div className={styles.exText}>
                    <h3 className={styles.exTitle}>{item.title}</h3>
                    <p className={styles.exVenue}>{item.venue}</p>
                    <p className={styles.exPeriod}>{item.period}</p>
                    <p className={styles.exSummary}>{item.summary}</p>
                    <p className={styles.exDate}>{item.date}</p>
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

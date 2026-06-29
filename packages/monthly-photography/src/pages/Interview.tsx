import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { monthlyNavItems } from '../shared/nav'
import styles from './Interview.module.css'

const featured = {
  name: '구본창',
  subtitle: '사진은 시간을 담는 그릇이다',
  pullquote:
    '"카메라는 나에게 세상을 느리게 보게 해주는 도구입니다. 빠르게 지나치는 것들을 붙잡아 들여다보게 만들죠."',
  excerpt:
    '40년간 한국 사진계의 중심에서 활동해온 구본창 작가. 그의 신작 시리즈 〈백자〉는 조선 백자의 표면에 투영된 시간과 인간의 흔적을 담아낸다. 작가와의 대화에서 우리는 사진이 기록을 넘어 명상의 행위가 되는 순간을 목격했다.',
  date: '2026.06.25',
  seed: 'int-feat-kbc',
}

const interviews = [
  {
    name: '노순택',
    subtitle: '전쟁의 기억을 담은 카메라',
    excerpt:
      '분단과 군사 문화를 주제로 한 다큐멘터리 작업으로 세계적 주목을 받아온 노순택 작가. 그의 시선은 언제나 한국 사회의 불편한 진실을 향해 있다.',
    date: '2026.06.11',
    seed: 'int-nst',
  },
  {
    name: '이갑철',
    subtitle: '한국의 얼굴을 찾아서',
    excerpt:
      '30년 넘게 한국인의 일상을 기록해온 이갑철 작가. 그는 지금도 카메라 하나만 들고 시장과 골목을 누빈다. 기록은 기억이 아니라 존재의 증명이라고 그는 말한다.',
    date: '2026.05.28',
    seed: 'int-lgc',
  },
  {
    name: '배병우',
    subtitle: '소나무와 침묵의 언어',
    excerpt:
      '소나무 시리즈로 세계 미술 시장에서 독보적 위치를 점한 배병우 작가. 자연을 통해 한국의 정신성을 표현하는 그의 작업은 동양과 서양 사이 어딘가에 고요히 자리한다.',
    date: '2026.05.14',
    seed: 'int-bbw',
  },
  {
    name: '김아타',
    subtitle: '사라짐의 미학',
    excerpt:
      '1초부터 24시간까지, 긴 노출 시간을 통해 존재가 사라지는 순간을 포착하는 김아타 작가의 〈On Air〉 프로젝트. 사진이 곧 철학이 되는 지점을 탐문한다.',
    date: '2026.04.30',
    seed: 'int-kat',
  },
]

export default function Interview() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={monthlyNavItems} />

      {/* ── Featured Interview ────────────────────────── */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredImageCol}>
            <img
              src={`https://picsum.photos/seed/${featured.seed}/600/780?grayscale`}
              alt={`${featured.name} 인터뷰 사진`}
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredTextCol}>
            <EditorialLabel>이달의 인터뷰</EditorialLabel>
            <h2 className={styles.featuredName}>{featured.name}</h2>
            <p className={styles.featuredSubtitle}>{featured.subtitle}</p>
            <blockquote className={styles.pullquote}>{featured.pullquote}</blockquote>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <div className={styles.featuredFooter}>
              <p className={styles.featuredDate}>{featured.date}</p>
              <a href="#" className={styles.readMore}>인터뷰 전문 읽기 →</a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Interview List ────────────────────────────── */}
      <section className={styles.list}>
        <div className={styles.listInner}>
          <div className={styles.listHeader}>
            <EditorialLabel>인터뷰 아카이브</EditorialLabel>
          </div>
          {interviews.map((item, i) => (
            <div key={i}>
              <article className={styles.listItem}>
                <a href="#" className={styles.listLink}>
                  <div className={styles.listImageWrap}>
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/200/200?grayscale`}
                      alt={item.name}
                      className={styles.listImage}
                    />
                  </div>
                  <div className={styles.listText}>
                    <h3 className={styles.listName}>{item.name}</h3>
                    <p className={styles.listSubtitle}>{item.subtitle}</p>
                    <p className={styles.listExcerpt}>{item.excerpt}</p>
                    <p className={styles.listDate}>{item.date}</p>
                  </div>
                  <span className={styles.listArrow} aria-hidden>→</span>
                </a>
              </article>
              {i < interviews.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>

      <GroupNav currentSite="monthly" />
    </div>
  )
}

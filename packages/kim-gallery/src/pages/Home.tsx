import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './Home.module.css'

const currentShow = {
  artist: '구본창',
  title: '백자 — 그릇의 초상',
  period: '2026. 07. 02 — 2026. 09. 13',
  room: '1층 전시실',
  seed: 'kg-hero',
  desc: '조선 백자를 20년 가까이 촬영해 온 구본창의 연작. 유약의 미세한 결과 그림자만으로 형태를 세우는 작가의 정물 언어를 40점의 젤라틴 실버 프린트로 구성했다.',
}

const upcoming = [
  { artist: '배병우', title: '소나무 — 새로운 프린트', period: '2026. 09. 24 — 2026. 11. 15', seed: 'kg-up1' },
  { artist: '이갑철', title: '충돌과 반동, 30년', period: '2026. 11. 26 — 2027. 01. 24', seed: 'kg-up2' },
  { artist: '오혜진', title: '반포 아파트, 마지막 여름', period: '2027. 02. 04 — 2027. 03. 28', seed: 'kg-up3' },
]

const highlights = [
  { artist: '김아타', title: 'ON-AIR Project #142', year: '2005', medium: 'C-print, 120 × 150 cm', edition: 'Ed. 3/7', seed: 'kg-w1' },
  { artist: '구본창', title: 'Vessel JM 05', year: '2012', medium: 'Archival pigment print, 100 × 80 cm', edition: 'Ed. 2/10', seed: 'kg-w2' },
  { artist: '배병우', title: 'SNM3A-034H', year: '2009', medium: 'Gelatin silver print, 90 × 180 cm', edition: 'Ed. 5/10', seed: 'kg-w3' },
  { artist: '강홍구', title: '사라진 마을 — 오쇠리', year: '2003', medium: 'Digital C-print, 70 × 200 cm', edition: 'Ed. 1/5', seed: 'kg-w4' },
]

const news = [
  { date: '2026.07.28', title: '구본창 《백자》 연계 작가와의 대화 — 8월 9일(토) 오후 3시' },
  { date: '2026.07.11', title: '김영섭사진화랑, 파리 포토 2026 참가 확정 (Booth C-17)' },
  { date: '2026.06.30', title: '배병우 신작 프린트 사전 예약 안내' },
  { date: '2026.06.02', title: '여름 휴관 안내 — 8월 17일 ~ 8월 21일' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} scrollTransparent />

      {/* ── Hero — Current Exhibition ─────────────────── */}
      <section className={styles.hero}>
        <img
          src={`https://picsum.photos/seed/${currentShow.seed}/1600/1000?grayscale`}
          alt={`${currentShow.artist} — ${currentShow.title}`}
          className={styles.heroImage}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroText}>
          <p className={styles.heroLabel}>현재 전시 · CURRENT</p>
          <p className={styles.heroArtist}>{currentShow.artist}</p>
          <h1 className={styles.heroTitle}>{currentShow.title}</h1>
          <p className={styles.heroMeta}>{currentShow.period} · {currentShow.room}</p>
          <a href="#/exhibitions" className={styles.heroLink}>전시 상세 보기</a>
        </div>
      </section>

      {/* ── Statement ─────────────────────────────────── */}
      <section className={styles.statement}>
        <div className={styles.statementInner}>
          <EditorialLabel>Gallery</EditorialLabel>
          <p className={styles.statementBody}>
            김영섭사진화랑은 1998년 서울 청담동에서 문을 연 사진 전문 화랑입니다.
            한국 현대사진의 1세대 작가부터 지금 막 첫 개인전을 여는 작가까지,
            오직 사진이라는 매체 하나만을 다루며 전시와 컬렉션을 이어 왔습니다.
          </p>
          <p className={styles.statementNote}>{currentShow.desc}</p>
        </div>
      </section>

      <Divider />

      {/* ── Upcoming ──────────────────────────────────── */}
      <section className={styles.upcoming}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>예정 전시</h2>
          <a href="#/exhibitions" className={styles.sectionMore}>전체 전시 →</a>
        </div>
        <div className={styles.upcomingGrid}>
          {upcoming.map(show => (
            <article key={show.seed} className={styles.upcomingCard}>
              <a href="#/exhibitions" className={styles.upcomingLink}>
                <div className={styles.upcomingImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${show.seed}/800/600?grayscale`}
                    alt={`${show.artist} — ${show.title}`}
                    className={styles.upcomingImage}
                  />
                </div>
                <p className={styles.upcomingArtist}>{show.artist}</p>
                <p className={styles.upcomingTitle}>{show.title}</p>
                <p className={styles.upcomingPeriod}>{show.period}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Selected Works ────────────────────────────── */}
      <section className={styles.works}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>주요 소장품</h2>
          <a href="#/collection" className={styles.sectionMore}>소장품 전체 →</a>
        </div>
        <div className={styles.worksGrid}>
          {highlights.map(work => (
            <article key={work.seed} className={styles.workCard}>
              <a href="#/collection" className={styles.workLink}>
                <div className={styles.workImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${work.seed}/700/900?grayscale`}
                    alt={`${work.artist} — ${work.title}`}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workInfo}>
                  <p className={styles.workArtist}>{work.artist}</p>
                  <p className={styles.workTitle}><em>{work.title}</em>, {work.year}</p>
                  <p className={styles.workMedium}>{work.medium}</p>
                  <p className={styles.workEdition}>{work.edition}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── News + Visit ──────────────────────────────── */}
      <section className={styles.footerBlocks}>
        <div className={styles.newsBlock}>
          <h2 className={styles.blockTitle}>소식</h2>
          <ul className={styles.newsList}>
            {news.map(item => (
              <li key={item.date} className={styles.newsItem}>
                <a href="#" className={styles.newsLink}>
                  <span className={styles.newsDate}>{item.date}</span>
                  <span className={styles.newsText}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visitBlock}>
          <h2 className={styles.blockTitle}>관람 안내</h2>
          <dl className={styles.visitList}>
            <div className={styles.visitRow}>
              <dt className={styles.visitTerm}>주소</dt>
              <dd className={styles.visitDesc}>서울 강남구 청담동 118-17 1–2층</dd>
            </div>
            <div className={styles.visitRow}>
              <dt className={styles.visitTerm}>관람 시간</dt>
              <dd className={styles.visitDesc}>화–토 11:00 — 19:00</dd>
            </div>
            <div className={styles.visitRow}>
              <dt className={styles.visitTerm}>휴관</dt>
              <dd className={styles.visitDesc}>일 · 월 · 공휴일</dd>
            </div>
            <div className={styles.visitRow}>
              <dt className={styles.visitTerm}>관람료</dt>
              <dd className={styles.visitDesc}>무료</dd>
            </div>
            <div className={styles.visitRow}>
              <dt className={styles.visitTerm}>문의</dt>
              <dd className={styles.visitDesc}>02-0000-0000 · gallery@example.com</dd>
            </div>
          </dl>
          <a href="#/visit" className={styles.visitMore}>찾아오시는 길 →</a>
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}

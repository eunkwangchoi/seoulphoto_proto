import { SiteHeader, GroupNav } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './Artists.module.css'

interface Artist {
  name: string
  nameEn: string
  birth: string
  focus: string
  shows: number
  since: string
  seed: string
  represented?: boolean
}

const artists: Artist[] = [
  { name: '구본창', nameEn: 'Koo Bohnchang',  birth: '1953', focus: '정물 · 오브제',        shows: 7, since: '2001', seed: 'kg-ar-kbc', represented: true },
  { name: '배병우', nameEn: 'Bae Bien-u',     birth: '1950', focus: '자연 · 풍경',          shows: 6, since: '1999', seed: 'kg-ar-bbw', represented: true },
  { name: '김아타', nameEn: 'Kim Atta',       birth: '1956', focus: '장노출 · 개념 사진',   shows: 5, since: '2004', seed: 'kg-ar-kat', represented: true },
  { name: '이갑철', nameEn: 'Lee Gab-chul',   birth: '1959', focus: '다큐멘터리 · 인물',    shows: 4, since: '2007', seed: 'kg-ar-lgc', represented: true },
  { name: '강홍구', nameEn: 'Kang Hong-goo',  birth: '1956', focus: '도시 · 다큐멘터리',    shows: 3, since: '2010', seed: 'kg-ar-khg' },
  { name: '권오상', nameEn: 'Kwon Oh-sang',   birth: '1974', focus: '조각-사진 혼합',       shows: 2, since: '2014', seed: 'kg-ar-kos' },
  { name: '노순택', nameEn: 'Noh Suntag',     birth: '1971', focus: '다큐멘터리 · 정치',    shows: 2, since: '2016', seed: 'kg-ar-nst' },
  { name: '정연두', nameEn: 'Yeondoo Jung',   birth: '1969', focus: '연출 · 영상',          shows: 2, since: '2012', seed: 'kg-ar-ydj' },
  { name: '오혜진', nameEn: 'Oh Hyejin',      birth: '1989', focus: '도시 · 일상',          shows: 1, since: '2023', seed: 'kg-ar-ohj' },
  { name: '임태훈', nameEn: 'Lim Taehoon',    birth: '1980', focus: '자연 · 풍경',          shows: 1, since: '2021', seed: 'kg-ar-lth' },
  { name: '박미나', nameEn: 'Park Mina',      birth: '1982', focus: '인물 · 연출',          shows: 1, since: '2024', seed: 'kg-ar-pmn' },
  { name: '이인성', nameEn: 'Lee Inseong',    birth: '1978', focus: '정물 · 공간',          shows: 1, since: '2022', seed: 'kg-ar-lis' },
]

const represented = artists.filter(a => a.represented)

export default function Artists() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>작가</h1>
          <p className={styles.pageSubtitle}>화랑이 함께 일해 온 작가 {artists.length}인</p>
        </div>
      </div>

      {/* ── Represented ──────────────────────────────── */}
      <section className={styles.represented}>
        <p className={styles.sectionLabel}>전속 작가</p>
        <div className={styles.representedGrid}>
          {represented.map(artist => (
            <article key={artist.nameEn} className={styles.representedCard}>
              <a href="#/artists" className={styles.representedLink}>
                <div className={styles.representedImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${artist.seed}/500/650?grayscale`}
                    alt={artist.name}
                    className={styles.representedImage}
                  />
                </div>
                <div className={styles.representedInfo}>
                  <p className={styles.representedName}>{artist.name}</p>
                  <p className={styles.representedNameEn}>{artist.nameEn}</p>
                  <p className={styles.representedFocus}>{artist.focus}</p>
                  <p className={styles.representedShows}>화랑 개인전 {artist.shows}회 · {artist.since}년부터</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── All artists ──────────────────────────────── */}
      <section className={styles.all}>
        <p className={styles.sectionLabel}>전체 작가</p>
        <div className={styles.artistTable}>
          <div className={styles.tableHead}>
            <span>작가</span>
            <span className={styles.colBirth}>출생</span>
            <span className={styles.colFocus}>작업</span>
            <span className={styles.colShows}>전시</span>
            <span className={styles.artistArrow} aria-hidden="true" />
          </div>
          {artists.map(artist => (
            <a key={artist.nameEn} href="#/artists" className={styles.artistRow}>
              <span className={styles.artistName}>
                <span className={styles.artistKorean}>{artist.name}</span>
                <span className={styles.artistEnglish}>{artist.nameEn}</span>
              </span>
              <span className={[styles.artistCell, styles.colBirth].join(' ')}>b. {artist.birth}</span>
              <span className={[styles.artistCell, styles.colFocus].join(' ')}>{artist.focus}</span>
              <span className={[styles.artistCell, styles.colShows].join(' ')}>{artist.shows}회</span>
              <span className={styles.artistArrow}>→</span>
            </a>
          ))}
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}

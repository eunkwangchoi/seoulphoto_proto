import { SiteHeader, GroupNav } from '@seoulphoto/design-system'
import { auctionNavItems, SITE_NAME } from '../shared/nav'
import styles from './Artists.module.css'

const alphabet = ['A–G', 'H–N', 'O–S', 'T–Z', '가–나', '다–마', '바–아', '자–하']

interface Artist {
  name: string
  nameEn: string
  birth: string
  specialty: string
  lots: number
  seed: string
  featured?: boolean
}

const artists: Artist[] = [
  { name: '구본창', nameEn: 'Koo Bohnchang', birth: '1953', specialty: '정물·오브제', lots: 12, seed: 'art-kbc', featured: true },
  { name: '김아타', nameEn: 'Kim Atta', birth: '1956', specialty: '장노출·개념 사진', lots: 8, seed: 'art-kat', featured: true },
  { name: '배병우', nameEn: 'Bae Bien-u', birth: '1950', specialty: '자연·풍경', lots: 15, seed: 'art-bbw', featured: true },
  { name: '정연두', nameEn: 'Yeondoo Jung', birth: '1969', specialty: '연출·영상', lots: 9, seed: 'art-ydj', featured: true },
  { name: '강홍구', nameEn: 'Kang Hong-goo', birth: '1956', specialty: '도시·다큐멘터리', lots: 6, seed: 'art-khg' },
  { name: '권오상', nameEn: 'Kwon Oh-sang', birth: '1974', specialty: '조각-사진 혼합', lots: 7, seed: 'art-kos' },
  { name: '노순택', nameEn: 'Noh Suntag', birth: '1971', specialty: '다큐멘터리·정치', lots: 5, seed: 'art-nst' },
  { name: '박미나', nameEn: 'Park Mina', birth: '1982', specialty: '인물·연출', lots: 3, seed: 'art-pmn' },
  { name: '오혜진', nameEn: 'Oh Hyejin', birth: '1989', specialty: '도시·일상', lots: 4, seed: 'art-ohj' },
  { name: '이갑철', nameEn: 'Lee Gab-chul', birth: '1959', specialty: '다큐멘터리·인물', lots: 11, seed: 'art-lgc' },
  { name: '이인성', nameEn: 'Lee Inseong', birth: '1978', specialty: '정물·공간', lots: 5, seed: 'art-lis' },
  { name: '임태훈', nameEn: 'Lim Taehoon', birth: '1980', specialty: '자연·풍경', lots: 4, seed: 'art-lth' },
]

const featured = artists.filter(a => a.featured)
const all = artists

export default function Artists() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={auctionNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>작가</h1>
          <p className={styles.pageSubtitle}>서울포토옥션에서 거래된 작가 {all.length}인</p>
        </div>
      </div>

      {/* ── Featured Artists ──────────────────────────── */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <p className={styles.featuredLabel}>이번 경매 주요 작가</p>
          <div className={styles.featuredGrid}>
            {featured.map((artist) => (
              <article key={artist.nameEn} className={styles.featuredCard}>
                <a href="#" className={styles.featuredLink}>
                  <div className={styles.featuredImageWrap}>
                    <img
                      src={`https://picsum.photos/seed/${artist.seed}/400/500?grayscale`}
                      alt={artist.name}
                      className={styles.featuredImage}
                    />
                    <div className={styles.featuredOverlay}>
                      <p className={styles.featuredLotsCount}>{artist.lots} lots</p>
                    </div>
                  </div>
                  <div className={styles.featuredInfo}>
                    <p className={styles.featuredName}>{artist.name}</p>
                    <p className={styles.featuredNameEn}>{artist.nameEn}</p>
                    <p className={styles.featuredSpecialty}>{artist.specialty}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── A–Z Browse ───────────────────────────────── */}
      <section className={styles.browse}>
        <div className={styles.browseInner}>
          <div className={styles.browseHeader}>
            <p className={styles.browseLabel}>전체 작가</p>
            <nav className={styles.alphaNav} aria-label="이름순 탐색">
              {alphabet.map((range, i) => (
                <a
                  key={range}
                  href="#"
                  className={[styles.alphaLink, i === 0 ? styles.alphaLinkActive : ''].filter(Boolean).join(' ')}
                >
                  {range}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.artistTable}>
            {all.map((artist) => (
              <a key={artist.nameEn} href="#" className={styles.artistRow}>
                <div className={styles.artistThumb}>
                  <img
                    src={`https://picsum.photos/seed/${artist.seed}-sm/80/80?grayscale`}
                    alt={artist.name}
                    className={styles.artistThumbImg}
                  />
                </div>
                <div className={styles.artistRowName}>
                  <span className={styles.artistKorean}>{artist.name}</span>
                  <span className={styles.artistEnglish}>{artist.nameEn}</span>
                </div>
                <span className={styles.artistBirth}>b. {artist.birth}</span>
                <span className={styles.artistSpecialty}>{artist.specialty}</span>
                <span className={styles.artistLots}>{artist.lots} lots</span>
                <span className={styles.artistArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}

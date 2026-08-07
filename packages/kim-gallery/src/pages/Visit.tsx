import { SiteHeader, GroupNav, Divider } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './Visit.module.css'

const hours = [
  { day: '화요일 — 토요일', time: '11:00 — 19:00' },
  { day: '일요일 · 월요일', time: '휴관' },
  { day: '공휴일',          time: '휴관' },
  { day: '전시 교체 기간',   time: '휴관 (홈페이지 공지)' },
]

const transit = [
  { mode: '지하철', detail: '7호선 청담역 13번 출구에서 도보 8분 · 분당선 압구정로데오역 3번 출구에서 도보 12분' },
  { mode: '버스',   detail: '간선 143, 240, 401 — 청담사거리 정류장 하차 후 도보 4분' },
  { mode: '주차',   detail: '건물 지하 주차장 6면 (2시간 무료). 만차 시 인근 공영주차장 이용 권장' },
]

const notices = [
  '전시 관람은 무료이며 예약 없이 방문하실 수 있습니다.',
  '작품 실견 및 컬렉션 상담은 사전 예약제로 운영합니다.',
  '전시장 내 플래시·삼각대 촬영은 제한되며, 개인 소장용 일반 촬영은 가능합니다.',
  '단체 관람(10인 이상)은 방문 3일 전까지 연락 주시기 바랍니다.',
]

export default function Visit() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>방문</h1>
          <p className={styles.pageSubtitle}>서울 강남구 청담동 118-17</p>
        </div>
      </div>

      {/* ── Map ──────────────────────────────────────── */}
      <section className={styles.mapSection}>
        <div className={styles.mapWrap}>
          <img
            src="https://picsum.photos/seed/kg-visit-map/1600/700?grayscale"
            alt="김영섭사진화랑 외관"
            className={styles.mapImage}
          />
          <div className={styles.mapCard}>
            <p className={styles.mapCardLabel}>김영섭사진화랑</p>
            <p className={styles.mapCardAddress}>
              서울특별시 강남구 청담동 118-17 1–2층<br />
              (도로명) 강남구 도산대로 000길 00
            </p>
            <p className={styles.mapCardPhone}>02-0000-0000</p>
          </div>
        </div>
      </section>

      {/* ── Hours + Transit ──────────────────────────── */}
      <section className={styles.details}>
        <div className={styles.detailsInner}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>관람 시간</h2>
            <dl className={styles.hoursList}>
              {hours.map(h => (
                <div key={h.day} className={styles.hoursRow}>
                  <dt className={styles.hoursDay}>{h.day}</dt>
                  <dd className={styles.hoursTime}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.blockNote}>관람료 무료 · 입장 마감 18:30</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>오시는 길</h2>
            <dl className={styles.transitList}>
              {transit.map(t => (
                <div key={t.mode} className={styles.transitRow}>
                  <dt className={styles.transitMode}>{t.mode}</dt>
                  <dd className={styles.transitDetail}>{t.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Notices ──────────────────────────────────── */}
      <section className={styles.notices}>
        <div className={styles.noticesInner}>
          <h2 className={styles.blockTitle}>관람 안내</h2>
          <ul className={styles.noticeList}>
            {notices.map(n => (
              <li key={n} className={styles.noticeItem}>{n}</li>
            ))}
          </ul>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>전시 · 관람 문의</p>
              <p className={styles.contactValue}>02-0000-0000</p>
            </div>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>작품 · 컬렉션 문의</p>
              <p className={styles.contactValue}>gallery@example.com</p>
            </div>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>보도 자료</p>
              <p className={styles.contactValue}>press@example.com</p>
            </div>
          </div>
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}

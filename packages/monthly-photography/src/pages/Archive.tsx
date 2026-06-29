import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { monthlyNavItems } from '../shared/nav'
import styles from './Archive.module.css'

const years = [2026, 2025, 2024]

const issues: Record<number, { vol: number; month: string; theme: string; seed: string }[]> = {
  2026: [
    { vol: 412, month: '7월', theme: '시간이 멈춘 골목의 빛', seed: 'arc-2607' },
    { vol: 411, month: '6월', theme: '여름의 온도: 열섬 속의 인간', seed: 'arc-2606' },
    { vol: 410, month: '5월', theme: '경계 — 분단의 사진학', seed: 'arc-2605' },
    { vol: 409, month: '4월', theme: '봄비 이후: 도시 재생의 기록', seed: 'arc-2604' },
    { vol: 408, month: '3월', theme: '흑백의 시대: 필름 사진의 귀환', seed: 'arc-2603' },
    { vol: 407, month: '2월', theme: '눈 오는 날의 사진가들', seed: 'arc-2602' },
    { vol: 406, month: '1월', theme: '새해의 빛: 일출 사진 특집', seed: 'arc-2601' },
  ],
  2025: [
    { vol: 405, month: '12월', theme: '겨울, 빛이 가장 낮아지는 계절', seed: 'arc-2512' },
    { vol: 404, month: '11월', theme: '낙엽의 사진학: 소멸의 아름다움', seed: 'arc-2511' },
    { vol: 403, month: '10월', theme: '포토 서울 2025 특집호', seed: 'arc-2510' },
    { vol: 402, month: '9월', theme: '가을빛 인물 사진', seed: 'arc-2509' },
    { vol: 401, month: '8월', theme: '400호 기념: 사진 60년을 말하다', seed: 'arc-2508' },
    { vol: 400, month: '7월', theme: '창간 400호 특별 기획', seed: 'arc-2507' },
    { vol: 399, month: '6월', theme: '여름 풍경 사진의 거장들', seed: 'arc-2506' },
    { vol: 398, month: '5월', theme: '신진작가 특집 2025', seed: 'arc-2505' },
    { vol: 397, month: '4월', theme: '봄꽃과 빛: 자연 사진 가이드', seed: 'arc-2504' },
    { vol: 396, month: '3월', theme: '디지털과 필름 사이', seed: 'arc-2503' },
    { vol: 395, month: '2월', theme: '기억의 장소: 사라진 공간들', seed: 'arc-2502' },
    { vol: 394, month: '1월', theme: '사진가의 새해 결심', seed: 'arc-2501' },
  ],
  2024: [
    { vol: 393, month: '12월', theme: '겨울 거리 사진 특집', seed: 'arc-2412' },
    { vol: 392, month: '11월', theme: '사진으로 보는 한국 근현대사', seed: 'arc-2411' },
    { vol: 391, month: '10월', theme: 'K-포토: 세계가 주목하는 한국 사진', seed: 'arc-2410' },
    { vol: 390, month: '9월', theme: '무인도 프로젝트: 고독의 미학', seed: 'arc-2409' },
    { vol: 389, month: '8월', theme: '바다와 빛: 여름 수중 사진', seed: 'arc-2408' },
    { vol: 388, month: '7월', theme: '장마: 비가 내리는 서울', seed: 'arc-2407' },
    { vol: 387, month: '6월', theme: '다큐멘터리 사진의 힘', seed: 'arc-2406' },
    { vol: 386, month: '5월', theme: '사진과 영화 — 두 이미지 예술', seed: 'arc-2405' },
    { vol: 385, month: '4월', theme: '꽃, 빛, 그리고 시간', seed: 'arc-2404' },
    { vol: 384, month: '3월', theme: '3월의 인물: 봄의 얼굴들', seed: 'arc-2403' },
    { vol: 383, month: '2월', theme: '오래된 사진관 이야기', seed: 'arc-2402' },
    { vol: 382, month: '1월', theme: '2024, 새로운 시선들', seed: 'arc-2401' },
  ],
}

const milestones = [
  { year: '1966', text: '월간사진 창간 (VOL. 1)' },
  { year: '1985', text: '사진 전문지 최초 10만 부 돌파' },
  { year: '2006', text: '디지털 에디션 출시' },
  { year: '2016', text: '창간 50주년 기념 특별호 발행' },
  { year: '2026', text: '창간 60주년 — VOL. 412' },
]

export default function Archive() {
  const activeYear = 2026

  return (
    <div className={styles.page}>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={monthlyNavItems} />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <EditorialLabel>1966년 창간</EditorialLabel>
          <h1 className={styles.pageTitle}>아카이브</h1>
          <p className={styles.pageSubtitle}>창간 60년, 사진과 함께한 역사를 돌아봅니다</p>
        </div>
      </div>

      {/* ── Year Nav ──────────────────────────────────── */}
      <nav className={styles.yearNav} aria-label="연도별 탐색">
        <div className={styles.yearNavInner}>
          {years.map((year) => (
            <a
              key={year}
              href="#"
              className={[styles.yearLink, year === activeYear ? styles.yearLinkActive : ''].filter(Boolean).join(' ')}
            >
              {year}
            </a>
          ))}
        </div>
      </nav>

      <Divider />

      {/* ── Issue Grid ────────────────────────────────── */}
      <section className={styles.issues}>
        <div className={styles.issuesInner}>
          <div className={styles.issuesGrid}>
            {issues[activeYear].map((issue) => (
              <article key={issue.vol} className={styles.issueCard}>
                <a href="#" className={styles.issueLink}>
                  <div className={styles.issueCoverWrap}>
                    <img
                      src={`https://picsum.photos/seed/${issue.seed}/300/420?grayscale`}
                      alt={`VOL.${issue.vol} ${issue.month}호 표지`}
                      className={styles.issueCover}
                    />
                    <div className={styles.issueBadge}>VOL. {issue.vol}</div>
                  </div>
                  <div className={styles.issueInfo}>
                    <p className={styles.issueMonth}>2026년 {issue.month}</p>
                    <p className={styles.issueTheme}>{issue.theme}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Milestones ────────────────────────────────── */}
      <section className={styles.history}>
        <div className={styles.historyInner}>
          <div className={styles.historyLabel}>
            <EditorialLabel>연혁</EditorialLabel>
          </div>
          <div className={styles.historyGrid}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.historyItem}>
                <p className={styles.historyYear}>{m.year}</p>
                <p className={styles.historyText}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GroupNav currentSite="monthly" />
    </div>
  )
}

import { SiteHeader, GroupNav, EditorialLabel, Divider } from '@seoulphoto/design-system'
import { centerNavItems } from '../shared/nav'
import styles from './Education.module.css'

type ProgramStatus = '모집중' | '마감임박' | '종료'
type ProgramType = '워크숍' | '강연' | '어린이·청소년' | '전문가과정'

interface Program {
  type: ProgramType
  status: ProgramStatus
  title: string
  instructor?: string
  period: string
  schedule: string
  fee: string
  capacity: string
  seed: string
}

const programs: Program[] = [
  {
    type: '워크숍',
    status: '모집중',
    title: '필름 현상과 인화의 기초',
    instructor: '강사: 오정호 (다크룸 대표)',
    period: '2026. 07. 12 — 2026. 07. 26',
    schedule: '매주 토요일 10:00 — 17:00 · 총 3회',
    fee: '150,000원',
    capacity: '정원 12명',
    seed: 'edu-w1',
  },
  {
    type: '워크숍',
    status: '모집중',
    title: '디지털 후보정 집중 과정: Lightroom & Capture One',
    instructor: '강사: 이수빈 (사진작가)',
    period: '2026. 07. 19 — 2026. 08. 02',
    schedule: '매주 토요일 13:00 — 17:00 · 총 3회',
    fee: '90,000원',
    capacity: '정원 16명',
    seed: 'edu-w2',
  },
  {
    type: '강연',
    status: '모집중',
    title: '사진가와의 대화: 최민식의 사진 세계',
    period: '2026. 07. 05 (일) 15:00',
    schedule: '단회 강연 · 약 90분',
    fee: '무료 (사전 등록 필수)',
    capacity: '정원 80명',
    seed: 'edu-l1',
  },
  {
    type: '강연',
    status: '마감임박',
    title: '한국 현대사진 100년: 역사와 미학',
    instructor: '강사: 박주석 (명지대 교수)',
    period: '2026. 06. 28 (일) 14:00',
    schedule: '단회 강연 · 약 120분',
    fee: '무료 (사전 등록 필수)',
    capacity: '정원 80명',
    seed: 'edu-l2',
  },
  {
    type: '어린이·청소년',
    status: '모집중',
    title: '어린이 사진 교실: 내 눈으로 본 서울',
    period: '2026. 07. 26 — 2026. 08. 23',
    schedule: '매주 일요일 11:00 — 13:00 · 총 5회',
    fee: '60,000원',
    capacity: '초등 3–6학년 · 정원 15명',
    seed: 'edu-k1',
  },
  {
    type: '전문가과정',
    status: '모집중',
    title: '아카이브와 사진 보존: 이론과 실습',
    instructor: '강사: 서울사진센터 아카이브팀',
    period: '2026. 08. 09 — 2026. 08. 30',
    schedule: '매주 일요일 10:00 — 16:00 · 총 4회',
    fee: '200,000원',
    capacity: '정원 10명',
    seed: 'edu-p1',
  },
]

const statusStyle: Record<ProgramStatus, string> = {
  '모집중': styles.statusOpen,
  '마감임박': styles.statusClosing,
  '종료': styles.statusClosed,
}

export default function Education() {
  const types: Array<'전체' | ProgramType> = ['전체', '워크숍', '강연', '어린이·청소년', '전문가과정']

  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER"
        navItems={centerNavItems}
      />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>교육</h1>
          <p className={styles.pageSubtitle}>워크숍 · 강연 · 어린이·청소년 · 전문가과정</p>
        </div>
        <nav className={styles.catNav} aria-label="교육 분류">
          {types.map((t, i) => (
            <a
              key={t}
              href="#"
              className={[styles.catTab, i === 0 ? styles.catTabActive : ''].filter(Boolean).join(' ')}
            >
              {t}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Intro ────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            서울사진센터는 사진의 창작과 감상, 연구를 위한 다양한 교육 프로그램을 운영합니다.
            입문자부터 전문가까지, 필름과 디지털, 역사와 이론을 아우르는 교육 과정으로
            사진 문화의 저변을 넓혀 나갑니다.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── Program Grid ─────────────────────────────── */}
      <section className={styles.programs}>
        <div className={styles.sectionLabel}>
          <EditorialLabel>현재 모집</EditorialLabel>
        </div>
        <div className={styles.programGrid}>
          {programs.map((prog) => (
            <article key={prog.seed} className={styles.programCard}>
              <a href="#" className={styles.programLink}>
                <div className={styles.programImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${prog.seed}/600/400?grayscale`}
                    alt={prog.title}
                    className={styles.programImage}
                  />
                  <span className={[styles.statusBadge, statusStyle[prog.status]].join(' ')}>
                    {prog.status}
                  </span>
                </div>
                <div className={styles.programBody}>
                  <div className={styles.programMeta}>
                    <EditorialLabel>{prog.type}</EditorialLabel>
                  </div>
                  <h3 className={styles.programTitle}>{prog.title}</h3>
                  {prog.instructor && (
                    <p className={styles.programInstructor}>{prog.instructor}</p>
                  )}
                  <div className={styles.programDetails}>
                    <p className={styles.programPeriod}>{prog.period}</p>
                    <p className={styles.programSchedule}>{prog.schedule}</p>
                    <div className={styles.programFeeRow}>
                      <span className={styles.programFee}>{prog.fee}</span>
                      <span className={styles.programCapacity}>{prog.capacity}</span>
                    </div>
                  </div>
                  <span className={styles.applyLink}>신청하기 →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Application Guide ─────────────────────────── */}
      <section className={styles.guide}>
        <div className={styles.guideInner}>
          <div className={styles.guideTitle}>
            <EditorialLabel variant="terracotta">신청 안내</EditorialLabel>
            <h2 className={styles.guideTitleText}>교육 프로그램 신청 방법</h2>
          </div>
          <div className={styles.guideSteps}>
            {[
              { step: '01', label: '프로그램 선택', desc: '교육 프로그램 목록에서 원하는 과정을 선택합니다.' },
              { step: '02', label: '온라인 신청', desc: '신청하기 버튼을 클릭 후 참가 신청서를 작성합니다.' },
              { step: '03', label: '결제 완료', desc: '유료 프로그램의 경우 신청 후 3일 이내 수강료를 납부합니다.' },
              { step: '04', label: '참가 확정', desc: '신청 마감 후 이메일로 참가 확정 안내를 발송합니다.' },
            ].map(({ step, label, desc }) => (
              <div key={step} className={styles.guideStep}>
                <span className={styles.guideStepNum}>{step}</span>
                <h3 className={styles.guideStepLabel}>{label}</h3>
                <p className={styles.guideStepDesc}>{desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.guideContact}>
            <p className={styles.guideContactText}>
              문의: 교육팀 <a href="mailto:edu@seoulphotocenter.kr" className={styles.guideContactLink}>edu@seoulphotocenter.kr</a> / 02-000-0001
            </p>
          </div>
        </div>
      </section>

      <GroupNav currentSite="center" />
    </div>
  )
}

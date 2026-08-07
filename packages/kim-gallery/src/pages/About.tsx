import { SiteHeader, GroupNav, EditorialLabel, ImageBlock } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './About.module.css'

const timeline = [
  { year: '1998', event: '서울 청담동에 김영섭사진화랑 개관. 개관전 《한국 현대사진 6인》' },
  { year: '2003', event: '2층 전시실 증축, 연간 기획전 체제로 전환' },
  { year: '2007', event: '파리 포토 첫 참가 — 한국 사진 전문 화랑 최초' },
  { year: '2012', event: '구본창 《백자》 초판 프린트 전시, 유럽 순회' },
  { year: '2018', event: '개관 20주년 기념전 《사진, 20년》 · 아카이브 공개' },
  { year: '2024', event: '신진 작가 지원 프로그램 〈첫 개인전〉 시작' },
]

const figures = [
  { value: '214', label: '개최한 전시' },
  { value: '86', label: '함께한 작가' },
  { value: '1,400+', label: '아카이브 프린트' },
  { value: '28', label: '해외 아트페어 참가' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>화랑소개</h1>
          <p className={styles.pageSubtitle}>1998 — 현재 · 사진 전문 화랑</p>
        </div>
      </div>

      {/* ── Statement ────────────────────────────────── */}
      <section className={styles.statement}>
        <div className={styles.statementInner}>
          <EditorialLabel variant="terracotta">About</EditorialLabel>
          <p className={styles.lead}>
            사진 한 장이 벽에 걸리기까지, 화랑이 하는 일은 고르는 일과 지키는 일입니다.
          </p>
          <p className={styles.body}>
            김영섭사진화랑은 1998년 청담동에서 문을 열었습니다. 회화와 조각을 함께
            취급하는 화랑이 대부분이던 시기에, 오직 사진이라는 매체 하나만 다루겠다는
            선택으로 출발했습니다. 한국 현대사진의 1세대 작가들과 오랜 시간 작업을
            함께해 왔고, 동시에 지금 막 첫 개인전을 준비하는 작가의 프린트를 나란히
            걸어 왔습니다.
          </p>
          <p className={styles.body}>
            화랑은 전시 이후에도 작품이 남는 방식에 관심을 둡니다. 프린트의 상태와
            에디션, 제작 시기와 소장 이력을 기록으로 남기고, 작가와 함께 재프린트
            기준을 정합니다. 1998년 이래의 전시 도록과 프린트 자료는 화랑 아카이브에
            보관되어 연구자에게 열람으로 제공됩니다.
          </p>
        </div>
      </section>

      {/* ── Space ────────────────────────────────────── */}
      <section className={styles.space}>
        <ImageBlock
          src="https://picsum.photos/seed/kg-about-space/1600/900?grayscale"
          alt="김영섭사진화랑 1층 전시실"
          caption="1층 전시실 — 자연광과 인공광을 함께 쓰는 210㎡ 규모의 단일 공간"
        />
      </section>

      {/* ── Figures ──────────────────────────────────── */}
      <section className={styles.figures}>
        <div className={styles.figuresInner}>
          {figures.map(f => (
            <div key={f.label} className={styles.figure}>
              <p className={styles.figureValue}>{f.value}</p>
              <p className={styles.figureLabel}>{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section className={styles.history}>
        <div className={styles.historyInner}>
          <h2 className={styles.sectionTitle}>연혁</h2>
          <ol className={styles.timeline}>
            {timeline.map(item => (
              <li key={item.year} className={styles.timelineRow}>
                <span className={styles.timelineYear}>{item.year}</span>
                <span className={styles.timelineEvent}>{item.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.sectionTitle}>연락처</h2>
          <dl className={styles.contactList}>
            <div className={styles.contactRow}>
              <dt className={styles.contactTerm}>주소</dt>
              <dd className={styles.contactDesc}>서울특별시 강남구 청담동 118-17 1–2층</dd>
            </div>
            <div className={styles.contactRow}>
              <dt className={styles.contactTerm}>전화</dt>
              <dd className={styles.contactDesc}>02-0000-0000</dd>
            </div>
            <div className={styles.contactRow}>
              <dt className={styles.contactTerm}>이메일</dt>
              <dd className={styles.contactDesc}>gallery@example.com</dd>
            </div>
            <div className={styles.contactRow}>
              <dt className={styles.contactTerm}>관람</dt>
              <dd className={styles.contactDesc}>화–토 11:00 — 19:00 · 일 · 월 · 공휴일 휴관</dd>
            </div>
          </dl>
          <a href="#/visit" className={styles.contactLink}>찾아오시는 길 →</a>
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}

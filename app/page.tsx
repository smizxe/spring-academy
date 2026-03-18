"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 7393, suffix: "", label: "Học viên đang theo dõi" },
  { value: 5, suffix: "", label: "Khóa học thực chiến" },
  { value: 18, suffix: "", label: "Template và checklist" },
  { value: 12, suffix: "", label: "Case study nổi bật" },
];

const painPoints = [
  "Đăng bài đều nhưng vẫn không ra đơn ổn định",
  "Chạy ads tốn ngân sách nhưng content không đồng bộ",
  "Không biết xây funnel từ người lạ thành khách mua",
  "Làm marketing theo cảm tính, không có hệ thống lặp lại",
];

const modules = [
  {
    title: "One-Phone Media",
    tag: "Video Marketing",
    price: "2.468.000đ",
    note: "Kỹ năng tạo thu nhập cao từ điện thoại",
    image: "/images/course-1.png",
    bullets: [
      "Quay dựng ngắn gọn để lên nội dung nhanh",
      "Dùng video để bán hàng và xây thương hiệu",
      "Có workflow thực chiến cho người mới",
    ],
  },
  {
    title: "Affiliate Shopee",
    tag: "Affiliate Marketing",
    price: "Miễn phí",
    note: "Kiếm tiền với Shopee affiliate có quy trình",
    image: "/images/course-2.png",
    bullets: [
      "Hiểu đúng Shopee Affiliate",
      "Biết cách tối ưu nội dung chốt đơn",
      "Có checklist để bắt đầu ngay",
    ],
  },
  {
    title: "66 Ngày Tiền Vui",
    tag: "Financial Management",
    price: "1.000.000đ",
    note: "Xây tài chính đúng tương lai",
    image: "/images/course-3.png",
    bullets: [
      "Quản trị dòng tiền cá nhân",
      "Lập kế hoạch thu chi rõ ràng",
      "Giữ vững tâm lý khi kinh doanh",
    ],
  },
  {
    title: "Siêu Traffic",
    tag: "Personal Brand",
    price: "Miễn phí",
    note: "Xây nhãn hiệu đúng cỡ độ",
    image: "/images/course-4.png",
    bullets: [
      "Xác định thông điệp thương hiệu",
      "Biết cách làm nội dung hút đúng khách",
      "Tăng độ tin cậy trên kênh cá nhân",
    ],
  },
];

const webinars = [
  {
    title: "Zoom Webinar miễn phí và trả phí",
    status: "Sắp tới",
    meta: "Tham gia học trực tiếp với chuyên gia",
  },
  {
    title: "Workshop xây funnel 7 ngày",
    status: "Đã hoàn thành",
    meta: "Bản ghi và tài liệu sẽ được cập nhật",
  },
];

const testimonials = [
  {
    quote:
      "Từ lúc có hệ thống content và offer rõ ràng, đội ngũ của tôi chốt lead ổn định hơn, không còn đăng bài theo cảm hứng.",
    author: "Chị Linh",
    role: "Chủ thương hiệu mỹ phẩm",
  },
  {
    quote:
      "Khóa học không nói lý thuyết rỗng. Mỗi module đều có checklist và cách áp vào business nhỏ ngay lập tức.",
    author: "Anh Duy",
    role: "Founder local brand",
  },
  {
    quote:
      "Phần hay nhất là cách biến personal brand thành một kênh bán hàng có logic và đo được hiệu quả.",
    author: "Chị Ngân",
    role: "Freelance marketer",
  },
];

const faqs = [
  {
    q: "Khóa học này phù hợp với ai?",
    a: "Phù hợp cho chủ shop, freelancer, marketer in-house, creator và người đang muốn xây hệ thống marketing bán hàng thật sự.",
  },
  {
    q: "Người mới bắt đầu học được không?",
    a: "Được. Nội dung đi từ nền tảng tư duy đến cách triển khai từng bước, có template để áp dụng ngay.",
  },
  {
    q: "Học online theo hình thức nào?",
    a: "Bạn học qua video, tài liệu, template kèm webinar hỗ trợ định kỳ và các bài học được cập nhật theo lộ trình.",
  },
  {
    q: "Sau khóa học có hỗ trợ không?",
    a: "Có. Bạn sẽ được hướng dẫn cách áp vào business và có điểm chạm hỗ trợ ở các phần quan trọng.",
  },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      const duration = 1200;
      const startTime = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activePainCard, setActivePainCard] = useState(0);

  const showNextPain = () => {
    setActivePainCard((current) => (current + 1) % painPoints.length);
  };

  const showPrevPain = () => {
    setActivePainCard((current) => (current - 1 + painPoints.length) % painPoints.length);
  };

  return (
    <main className="page-shell">
      <nav className="topbar">
        <div className="container nav-inner">
          <a className="brand" href="#hero">
            Spring
            <span>academy</span>
          </a>
          <div className="nav-links">
            <a href="#courses">Khóa học</a>
            <a href="#webinar">Webinar</a>
            <a href="#results">Kết quả</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href="#offer">
            Đăng ký học
          </a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-petals" aria-hidden="true">
          <span className="petal petal-a" />
          <span className="petal petal-b" />
          <span className="petal petal-c" />
          <span className="petal petal-d" />
        </div>
        <div className="hero-blobs" aria-hidden="true">
          <span className="blob blob-nude" />
          <span className="blob blob-rose" />
          <span className="blob blob-blush" />
          <span className="spark spark-a" />
          <span className="spark spark-b" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Học marketing thực chiến cho business online</p>
            <h1>
              Học Marketing
              <br />
              Thực Chiến
              <br />
              Từ Chuyên Gia Hàng Đầu
            </h1>
            <p className="hero-text">
              Khóa học, webinar và bộ template được thiết kế để giúp bạn xây content, tạo funnel và biến marketing thành
              một hệ thống ra đơn bền vững, tinh gọn và dễ áp dụng vào kinh doanh thực tế.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#courses">
                Khám phá khóa học
              </a>
              <a className="btn btn-secondary" href="#webinar">
                Webinar miễn phí
              </a>
            </div>
            <div className="hero-badges">
              <span>Học thực tế, áp dụng ngay</span>
              <span>Template dùng được liền</span>
              <span>Dành cho thị trường Việt Nam</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-main">
              <div className="panel-chip">Lộ trình nổi bật</div>
              <h2>Xây hệ thống marketing ra đơn không phụ thuộc may mắn</h2>
              <ul>
                <li>Content strategy và social plan</li>
                <li>Offer và funnel để chốt khách</li>
                <li>Workflow tối ưu để làm đều và đo được</li>
              </ul>
            </div>
            <div className="panel-row">
              <div className="panel-card accent-nude">
                <strong>+32%</strong>
                <span>Tăng tốc độ sản xuất nội dung</span>
              </div>
              <div className="panel-card accent-rose">
                <strong>7 ngày</strong>
                <span>Dễ dùng bộ template vào công việc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container stats-strip" aria-label="Thống kê nổi bật">
          {stats.map((item) => (
            <article key={item.label} className="stat-inline">
              <strong>
                <CountUp value={item.value} suffix={item.suffix} />
              </strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="affiliate-strip">
        <div className="container affiliate-inner">
          <div>
            <p className="affiliate-title">Chương trình affiliate cho học viên và đối tác</p>
            <p className="affiliate-text">Nhận hoa hồng hấp dẫn khi giới thiệu khóa học phù hợp đến đúng khách hàng của bạn.</p>
          </div>
          <a className="btn btn-dark" href="#offer">
            Tìm hiểu thêm
          </a>
        </div>
      </section>

      <section className="marquee-band" aria-label="Chủ đề nổi bật">
        <div className="marquee-track">
          <span>Content Strategy</span>
          <span>Conversion Funnel</span>
          <span>Social Media</span>
          <span>Affiliate</span>
          <span>Personal Brand</span>
          <span>Video Marketing</span>
          <span>Automation</span>
          <span>ROI Tracking</span>
          <span>Content Strategy</span>
          <span>Conversion Funnel</span>
          <span>Social Media</span>
          <span>Affiliate</span>
          <span>Personal Brand</span>
          <span>Video Marketing</span>
          <span>Automation</span>
          <span>ROI Tracking</span>
        </div>
      </section>

      <section className="webinar-section" id="webinar">
        <div className="container section-heading center">
          <span className="pill">Zoom Webinar</span>
          <h2>Webinar miễn phí và trả phí để cập nhật liên tục</h2>
          <p>Tham gia học trực tiếp với chuyên gia, xem lại bản ghi, lấy bộ bài tập và checklist sau mỗi buổi.</p>
        </div>
        <div className="container webinar-grid">
          {webinars.map((item) => (
            <article key={item.title} className="webinar-card">
              <span className="webinar-status">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
              <button className="ghost-btn">Xem chi tiết</button>
            </article>
          ))}
        </div>
      </section>

      <section className="pain-section">
        <div className="container">
          <div className="section-heading">
            <span className="pill">Vì sao học viên tìm đến</span>
            <h2>Không thiếu kiến thức, chỉ thiếu một hệ thống làm marketing có chủ đích</h2>
          </div>

          <div className="pain-grid pain-grid-desktop">
            {painPoints.map((item) => (
              <article key={item} className="pain-card">
                <span className="diamond" />
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="pain-deck-mobile" aria-label="Các vấn đề thường gặp trên mobile">
            <div className="pain-deck-stage">
              {painPoints.map((item, index) => {
                const offset = (index - activePainCard + painPoints.length) % painPoints.length;
                return (
                  <article
                    key={item}
                    className={`pain-card pain-card-deck deck-pos-${offset}`}
                    onClick={showNextPain}
                    aria-hidden={offset > 2}
                  >
                    <span className="diamond" />
                    <p>{item}</p>
                  </article>
                );
              })}
            </div>
            <div className="pain-deck-controls">
              <button className="deck-btn" type="button" onClick={showPrevPain}>
                Trước
              </button>
              <div className="deck-dots">
                {painPoints.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    className={`deck-dot${index === activePainCard ? " active" : ""}`}
                    onClick={() => setActivePainCard(index)}
                    aria-label={`Hiển thị thẻ ${index + 1}`}
                  />
                ))}
              </div>
              <button className="deck-btn" type="button" onClick={showNextPain}>
                Tiếp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <Image src="/images/expert.png" alt="Chuyên gia đồng hành cùng Spring Academy" width={600} height={780} className="about-image" />
          </div>
          <div className="about-copy">
            <span className="pill">Về người đồng hành</span>
            <h2>Hiểu thị trường, nắm tâm lý, xây hệ thống ra đơn bền vững</h2>
            <p>
              Chào bạn, tôi là <strong>Ms Huyền</strong>. Với nhiều năm thực chiến trong digital marketing và xây dựng
              thương hiệu, tôi hiểu rõ những nỗi đau của người kinh doanh online khi phải vật lộn với content vô hồn,
              chi phí quảng cáo tăng cao và tỷ lệ chuyển đổi thất thường.
            </p>
            <p>
              Spring Academy ra đời không phải để dạy những lý thuyết sáo rỗng. Mỗi khóa học, template và quy trình tại
              đây đều được đúc kết từ chiến dịch thực tế, giúp bạn xây dựng một hệ thống marketing mềm mại, chuyên
              nghiệp, mang lại khách hàng chất lượng theo cách dự đoán được.
            </p>
            <div className="about-stats">
              <div>
                <strong>10+</strong>
                <span>Năm kinh nghiệm</span>
              </div>
              <div>
                <strong>300+</strong>
                <span>Thương hiệu đồng hành</span>
              </div>
            </div>
            <a href="#courses" className="btn btn-primary about-cta">
              Bắt đầu thay đổi tư duy marketing
            </a>
          </div>
        </div>
      </section>

      <section className="courses-section" id="courses">
        <div className="container section-heading center">
          <span className="pill">Sản phẩm nổi bật</span>
          <h2>Khóa học, sách, ebooks và tài nguyên để bạn tăng trưởng bài bản</h2>
          <p>Được thiết kế theo từng mục tiêu: xây nhãn hiệu, làm nội dung, affiliate, funnel và tối ưu chuyển đổi.</p>
        </div>

        <div className="container course-filters">
          <button className="filter active">Tất cả</button>
          <button className="filter">Khóa học</button>
          <button className="filter">Sách và ebooks</button>
          <button className="filter">AI Lab</button>
        </div>

        <div className="container course-grid">
          {modules.map((course, index) => (
            <article key={course.title} className={`course-card tone-${index % 4}`}>
              <div className="course-thumb">
                <Image src={course.image} alt={course.title} fill className="course-bg" />
                <div className="course-thumb-overlay" />
                <div className="thumb-badge">{course.tag}</div>
                <div className="thumb-title">{course.title}</div>
              </div>
              <div className="course-body">
                <p className="course-note">{course.note}</p>
                <div className="course-price">{course.price}</div>
                <ul className="bullet-list">
                  {course.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="#offer" className="btn btn-block">
                  Tìm hiểu ngay
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="results-section" id="results">
        <div className="container results-layout">
          <div className="results-copy">
            <span className="pill">Lộ trình triển khai</span>
            <h2>Bạn không chỉ học lý thuyết. Bạn được dẫn cách áp vào việc kinh doanh thật.</h2>
            <div className="steps">
              <article className="step-card tilt-left">
                <span>Step 01</span>
                <h3>Học tư duy và framework</h3>
                <p>Nắm rõ logic marketing, offer, funnel và cách sắp xếp thông điệp cho từng giai đoạn.</p>
              </article>
              <article className="step-card tilt-right">
                <span>Step 02</span>
                <h3>Áp template vào business</h3>
                <p>Sao chép checklist, script, content plan và workflow để triển khai ngay trong 7 ngày đầu.</p>
              </article>
              <article className="step-card tilt-left">
                <span>Step 03</span>
                <h3>Đo lường và tối ưu</h3>
                <p>Theo dõi hiệu quả, biết cần sửa ở đâu và nâng cấp dần thành một hệ thống ra đơn bền vững.</p>
              </article>
            </div>
          </div>
          <div className="results-testimonials">
            {testimonials.map((item) => (
              <article key={item.author} className="testimonial-card">
                <p>&quot;{item.quote}&quot;</p>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="offer-section" id="offer">
        <div className="container offer-card">
          <div>
            <span className="pill dark">Ưu đãi hiện tại</span>
            <h2>Sẵn sàng bắt đầu hành trình học tập và nâng cấp hệ thống marketing?</h2>
            <p>
              Tham gia cùng hàng nghìn học viên đã biến kiến thức marketing thành doanh thu, thương hiệu và một quy trình
              vận hành rõ ràng.
            </p>
          </div>
          <div className="offer-box">
            <div className="offer-price">
              <small>Gói khởi động</small>
              <strong>2.468.000đ</strong>
              <span>Tận dụng bộ bài học, webinar và template có sẵn</span>
            </div>
            <a className="btn btn-light" href="#courses">
              Khám phá khóa học ngay
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container section-heading center">
          <span className="pill">Giải đáp nhanh</span>
          <h2>FAQ cho người đang cần một hệ thống học và làm marketing rõ ràng</h2>
        </div>
        <div className="container faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#hero">
              Spring
              <span>academy</span>
            </a>
            <p className="footer-copy">
              Nền tảng học marketing thực chiến dành cho người kinh doanh online, creator và marketer muốn tăng trưởng có
              định hướng và chiều sâu.
            </p>
          </div>
          <div>
            <h3>Trang</h3>
            <a href="#hero">Trang chủ</a>
            <a href="#courses">Khóa học</a>
            <a href="#webinar">Webinar</a>
          </div>
          <div>
            <h3>Sản phẩm</h3>
            <a href="#courses">Khóa học nổi bật</a>
            <a href="#offer">Ưu đãi</a>
            <a href="#results">Kết quả học viên</a>
          </div>
          <div>
            <h3>Hỗ trợ</h3>
            <a href="#faq">FAQ</a>
            <a href="#offer">Đăng ký tư vấn</a>
            <a href="mailto:hello@springacademy.vn">hello@springacademy.vn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

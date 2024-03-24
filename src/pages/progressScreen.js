import * as React from "react";

const ProgressBar = ({ value }) => (
  <div className="progress-bar">
    <div className="progress" style={{ width: `${value}%` }} />
  </div>
);

const MonthLabels = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"];

  return (
    <div className="month-labels">
      {months.map((month) => (
        <div key={month} className="month-label">
          {month}
        </div>
      ))}
    </div>
  );
};

const Milestone = ({ imgSrc, text }) => (
  <div className="milestone">
    <img src={imgSrc} alt={text} className="milestone-image" />
    <p className="milestone-text">{text}</p>
  </div>
);

export default function ProgressScreen() {
  return (
    <>
      <div className="progress-tracker">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c5e6ee9e91126c3857427b6a7faf7b6634fa8afb6cf365c56763ca829be341?apiKey=d537083c60ba4eb0b4f182d256617b45&" alt="Progress Tracker Header" className="header-image" />
        <div className="content">
          <nav className="navigation">
            <div className="back-link">Back</div>
            <h1 className="page-title">Progress</h1>
            <div className="new-link">New</div>
          </nav>
          <div className="chart">
            <div className="y-axis-labels">
              <div className="y-axis-label">80</div>
              <div className="y-axis-label">70</div>
              <div className="y-axis-label">60</div>
              <div className="y-axis-label">50</div>
              <div className="y-axis-label">40</div>
              <div className="y-axis-label">30</div>
              <div className="y-axis-label">20</div>
              <div className="y-axis-label">10</div>
              <div className="y-axis-label">0</div>
            </div>
            <div className="chart-area">
              <div className="chart-lines">
                <div className="chart-line" />
                <div className="chart-point" />
                <div className="chart-curve">
                  <div className="chart-point" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed41cd3c48596a8553018d1556342ee21d5b622fbf3136d4018f324b1492126?apiKey=d537083c60ba4eb0b4f182d256617b45&" alt="Progress Chart" className="chart-image" />
                  <div className="chart-point" />
                </div>
              </div>
              <div className="chart-progress">
                <ProgressBar value={75} />
              </div>
              <div className="chart-axis" />
            </div>
          </div>
          <MonthLabels />
          <div className="goal-summary">
            <div className="goal-percentage">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b958c65a7b6528efde34fec4b87877478697346cb3a210a91a44a717f898bb6?apiKey=d537083c60ba4eb0b4f182d256617b45&" alt="75%" className="percentage-background" />
              <span className="percentage-text">75%</span>
            </div>
            <div className="goal-label">goals completed</div>
          </div>
          <div className="milestones">
            <div className="milestone-images">
              <Milestone imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/127ce24163da144794b5406147363ff9ff81640788d1ff678cf4f57100afb41f?apiKey=d537083c60ba4eb0b4f182d256617b45&" text="🎉 Wow! You've just squatted a whopping 225lb last month, setting a new personal record! Ready to brag? Share your achievement with friends!" />
              <Milestone imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6129f7335bfea0e40b3264793b7a01ad2c5e3c563864f1acefc1ac8adf6d34?apiKey=d537083c60ba4eb0b4f182d256617b45&" text="Hey there, superstar! 🌟 You've just crushed a 300lb deadlift. We're so proud of you! Why not share this awesome moment with your friends?" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .progress-tracker {
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          background-color: var(--White, #fff);
          border-radius: 20px;
          padding-bottom: 65px;
        }

        .header-image {
          width: 100%;
          aspect-ratio: 8.33;
          object-fit: auto;
          object-position: center;
        }

        .content {
          display: flex;
          flex-direction: column;
          padding: 0 14px;
          margin-top: 23px;
          width: 100%;
        }

        .navigation {
          display: flex;
          justify-content: center;
          align-items: start;
          gap: 20px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
        }

        .back-link {
          color: #8348a7;
          font-family: Inter, sans-serif;
        }

        .page-title {
          color: var(--Black, #000);
          text-align: center;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
          font: 600 30px Inter, sans-serif;
        }

        .new-link {
          color: #968ce0;
          text-align: right;
          font-family: Inter, sans-serif;
        }

        .chart {
          display: flex;
          gap: 1px;
          align-self: center;
        }

        .y-axis-labels {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: right;
        }

        .y-axis-label {
          font-family: Barlow, sans-serif;
          margin-top: 16px;
        }

        .chart-area {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
          padding: 2px 0;
        }

        .chart-lines {
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }

        .chart-line {
          width: 4px;
          height: 194px;
          align-self: stretch;
          background-color: #968ce0;
          border: 4px solid rgba(150, 140, 224, 1);
        }

        .chart-point {
          width: 8px;
          height: 8px;
          align-self: stretch;
          margin: auto 0;
          background-color: #968ce0;
          border-radius: 50%;
        }

        .chart-curve {
          display: flex;
          align-items: end;
          gap: 0px;
          align-self: stretch;
          margin: auto 0;
        }

        .chart-image {
          width: 262px;
          aspect-ratio: 2.78;
          object-fit: auto;
          object-position: center;
          border: 1px solid rgba(150, 140, 224, 1);
          stroke: #968ce0;
          stroke-width: 1px;
          z-index: 10;
          margin-top: 6px;
        }

        .chart-progress {
          display: flex;
          gap: 0px;
          margin-top: -193px;
          z-index: 10;
        }

        .progress-bar {
          width: 304px;
          max-width: 100%;
          height: 4px;
          margin-top: 193px;
          align-self: end;
          z-index: 10;
          background-color: #968ce0;
          border: 4px solid rgba(150, 140, 224, 1);
        }

        .progress {
          height: 100%;
          background-color: #968ce0;
        }

        .chart-axis {
          height: 1px;
          margin-top: -4px;
          background-color: #666;
          border: 1px dashed rgba(102, 102, 102, 1);
        }

        .month-labels {
          display: flex;
          gap: 10px;
          align-self: center;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
        }

        .month-label {
          font-family: Barlow, sans-serif;
          flex-grow: 1;
        }

        .goal-summary {
          display: flex;
          gap: 7px;
          color: #968ce0;
          font-weight: 600;
          margin-top: 28px;
        }

        .goal-percentage {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          padding: 34px 18px;
          font: 32px Inter, sans-serif;
        }

        .percentage-background {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .percentage-text {
          position: relative;
        }

        .goal-label {
          margin: auto 0;
          font: 20px Inter, sans-serif;
        }

        .milestones {
          display: flex;
          gap: 9px;
          align-items: start;
          margin-top: 24px;
        }

        .milestone-images {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .milestone-image {
          width: 67px;
          aspect-ratio: 0.91;
          object-fit: auto;
          object-position: center;
        }

        .milestone-text {
          margin-top: 18px;
          font-size: 11px;
          color: #fff;
          font-weight: 600;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: Inter, sans-serif;
        }
      `}</style>
    </>
  );
}

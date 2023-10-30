import React from 'react'
import card_bg01 from "../assets/img/card_bg01.jpg"
import card_bg02 from "../assets/img/card_bg02.jpg"
import card_bg03 from "../assets/img/card_bg03.png"

const cardInfo = [
    {
        img: card_bg01,
        title: "웹표준 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는"
    },
    {
        img: card_bg02,
        title: "반응형 사이트 만들기",
        desc: "웹표준 사이트를 완성하고, 반응형을 익히는 사이트입니다. 기본 코딩을 익히고, 반응형 감각을 키우면 모바일 및 반응형 사이트도 만들 수 있습니다. 웹표준 사이트를........"
    },
    {
        img: card_bg03,
        title: "패랠렉스 사이트 만들기",
        desc: "기업 사이트 중 50% 이상이 패랙렉스 스크로링 효과로 만들어져 있습니다. 웹 표준, 반응형 사이트를 완성하였다면, 이제는 인터랙티브한 패랠렉스 스크롤링 사이트를....."
    }
]

const Card = (props) => {
    return (
      <section id="cardType" className={`card__wrap ${props.element}`}>
        <h2>웹스토리보이 강의</h2>
        <p>
          웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.<br />
        </p>
        <div className="card__inner container">
          {cardInfo.map((card, key) => (
            <article className="card" key={key}>
                 <figure className="card__header">
                    <img src={card.img} alt={card.title} />
                </figure>
                <div className="card__body">
                    <h3 className="tit">{card.title}</h3>
                    <p className="desc">{card.desc}</p>
                    <a className="btn" href="/">
                    더 자세히 보기
                    <span aria-hidden="true">
                        <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="#5B5B5B" />
                        </svg>
                    </span>
                    </a>
                </div>
                </article>
          ))}
        </div>
      </section>
    );
  }
  

export default Card
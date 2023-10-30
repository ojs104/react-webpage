import React from 'react'

const Slider = ( props ) => {
  return (
    <section id="sliderType" className={`slider__wrap ${props.element}`}>
    <h2 className="blind">슬라이드 유형</h2>
    <div className="slider__inner">
        <div className="slider">
            <div className="slider__img">
                <div className="desc">
                    <span>developer</span>
                    <h3>new frontend</h3>
                    <p>
                        너무 무리하지 말아요! 이미 당신은 잘하고 있고!<br />
                        앞으로도 잘 할 수 있어요!
                    </p>
                    <div className="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" className="black">사이트 보기</a>
                    </div>
                </div>
            </div>
            <div className="slider__arrow">
                <a href="/" className="left"><span className="ir">이전 이미지</span></a>
                <a href="/" className="right"><span className="ir">다음 이미지</span></a>
            </div>
            <div className="slider__dot">
                <a href="/" className="dot active"><span className="ir">1</span></a>
                <a href="/" className="dot"><span className="ir">2</span></a>
                <a href="/" className="dot"><span className="ir">3</span></a>
                <a href="/" className="play"><span className="ir">플레이</span></a>
                <a href="/" className="stop"><span className="ir">정지</span></a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Slider
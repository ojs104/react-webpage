import React from 'react'

const Header = ( props ) => {
  return (
    <header id="headerType" className={`header__wrap ${props.element}`}>
        <div className="header__inner">
            <div className="header__logo">
                <a href="/">web <em>site</em></a>
            </div>
            <nav className="header__menu">
                <ul>
                    <li><a href="/">헤더 영역</a></li>
                    <li><a href="/">슬라이드 영역</a></li>
                    <li><a href="/">배너 영역</a></li>
                    <li><a href="/">컨텐츠 영역</a></li>
                    <li><a href="/">푸터 영역</a></li>
                </ul>
            </nav>
            <div className="header__member">
                <a href="/">로그인</a>
            </div>
        </div>
    </header>
  )
}

export default Header
// 框架类
import React, { Component } from 'react';
// 样式类
import './index.scss';

/**
 * PC端的头部 因为这个一定 是 多页面复用的
 */
class NavHeard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        /**
         * 跳转到登录页面
         */
        let jumpToLogin = () => {
            // 先判断是否登录
            if (window.localStorage.rejiejay_token) {
                // 已经登录的情况
                return false
            }

            // 未登录的情况跳转到登录页面
            window.location.href = './#/user/login';
        }
        
        /**
         * 跳转到手机端
         */
        let jumpToMobile = () => window.location.href = './#/mobile';

        return (
            <div className="nav-heard flex-start-center noselect">

                <div className="nav-heard-left flex-rest flex-start-center">
                    <svg width="50" height="50" t="1545386037781" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1467">
                        <path d="M419.500653 309.304193c-17.514669-9.487112-35.029338-18.974225-52.544007-28.582967l-87.208457-47.435563c-11.798076-6.446371-16.663262-16.298373-9.973631-28.461337 6.689631-12.284594 17.879558-13.136002 29.434374-6.81126 68.112602 37.097042 136.346835 74.072455 204.337808 111.656016 17.39304 9.608742 48.773489 3.892149 59.841786-12.406224 34.786079-50.476304 69.450529-100.952607 104.114978-151.550541 1.216296-1.824445 2.432593-3.648889 3.648889-5.351704 9.852001-13.74415 21.163559-17.39304 31.380449-9.365483 11.798076 9.365483 9.852001 20.433781 2.189334 31.623708-14.109039 20.55541-28.218078 41.23245-42.205488 61.787861-19.460744 28.582967-38.921487 57.165934-60.693194 88.911272H846.907234c22.866374 0 26.393633 3.648889 26.515263 26.515263 0.243259 156.780615 0.364889 313.439601 0.608148 470.220217 0 22.379855-4.013778 26.272004-26.880152 26.393633-5.959853 0-12.041335 0.608148-17.879558-0.12163-21.650077-2.432593-37.461931-0.364889-45.00297 26.393634-6.81126 24.08267-32.475116 36.367265-55.584748 33.934671-26.758522-2.797482-44.394821-18.609336-51.206082-43.543413-4.135408-15.082076-11.189928-17.14978-24.812448-17.028151-94.019717 0.608148-187.917805 0.364889-281.937522 0.12163-10.825039 0-17.14978 0.973037-20.312151 14.109039-6.81126 28.218078-30.042523 46.097636-55.706379 46.584155-26.636893 0.486519-49.746526-16.906521-57.530823-46.219266-3.284-12.284594-8.757335-15.082076-20.068892-14.473928-14.595558 0.851408-29.312745 0.364889-44.029932 0.121629-16.055113-0.364889-23.109633-6.93289-23.109633-22.623114 0.12163-159.334838 0.364889-318.791305 0.729778-478.247773 0-16.541632 6.689631-22.014966 25.055707-22.014966 75.532011-0.12163 151.064022 0 226.474403 0h15.811855c0.486519-1.337926 0.973037-2.675852 1.459555-4.135408z m417.554579 490.289108V349.077088H188.647583v450.516213h648.407649z m-520.939779 37.94845H271.477373c3.040741 12.771113 9.243853 21.771707 21.163558 22.501485 13.257632 0.973037 19.582373-8.878964 23.474522-22.501485z m394.444946-0.12163c4.500297 13.62252 10.581779 23.596152 23.961041 22.623115 12.041335-0.851408 17.636299-10.21689 21.285188-22.623115h-45.246229z" fill="#5B5C5C" p-id="1468"></path>
                        <path d="M513.398741 768.577741H252.746407c-25.298967 0-29.312745-4.013778-29.312745-29.312745 0.12163-108.980164 0.243259-217.960328 0.486519-327.062122 0-22.988003 4.743556-27.73156 27.609929-27.731559h523.007484c23.231263 0 27.974819 4.621927 28.096448 27.366671 0.364889 109.588312 0.608148 219.054995 0.729778 328.643306 0 23.474522-4.865186 27.974819-29.069486 28.096449H513.398741z m250.678703-38.556598V423.392802H262.233519v306.628341h501.843925z" fill="#5B5C5C" p-id="1469"></path>
                        <path d="M515.709704 675.65269c-6.689631 4.743556-12.892743 10.095261-19.947262 13.86578-23.231263 12.284594-46.340896 11.189928-67.747713-3.770519-23.596152-16.541632-34.056301-40.745932-31.988598-68.96401 0.486519-6.081482 11.676446-15.690224 18.122818-15.933484 6.324742-0.243259 14.352298 8.514075 18.974225 15.203706 3.648889 5.351704 2.067704 13.86578 4.621926 20.312151 4.865186 12.284594 13.86578 23.961041 27.366671 21.041929 9.973631-2.067704 18.974225-12.162965 26.393633-20.43378 3.648889-4.135408 3.040741-12.284594 4.013779-18.609337 1.702815-12.041335 8.635705-19.339114 20.433781-19.095854 10.703409 0.243259 17.636299 6.81126 19.095854 18.487706 0.851408 7.419408 1.094667 16.663262 5.473334 21.528448 7.05452 7.905927 17.028151 17.39304 26.150374 17.757928 8.149186 0.243259 18.122817-9.730372 24.569189-17.514669 4.257038-5.108445 4.013778-14.230669 5.351705-21.650077 2.189334-11.798076 8.878964-18.974225 21.041929-18.122818 12.041335 0.973037 18.366077 8.757335 17.879558 21.041929-1.216296 31.01556-13.379261 56.192897-42.083858 70.058677-26.758522 12.892743-51.81423 7.419408-73.707566-12.527853-1.216296-0.851408-2.554223-1.581185-4.013779-2.675853zM729.777883 559.618007c0.364889 18.366077-14.595558 28.461337-28.461337 20.55541-37.097042-21.163559-73.585937-43.421784-109.953201-65.801639-9.608742-5.959853-11.676446-15.690224-6.081483-25.542226 5.716593-10.095261 15.811854-12.771113 25.177337-7.419408 37.461931 21.650077 74.558974 43.908303 111.412757 66.653046 4.257038 2.797482 6.324742 9.243853 7.905927 11.554817zM413.175912 488.951182c3.40563 3.40563 12.162965 8.149186 13.136002 13.987409 1.094667 6.93289-2.554223 18.974225-7.905928 21.650077-32.231857 16.541632-65.315121 31.380449-98.520014 46.097637-10.095261 4.500297-21.163559 1.094667-23.717781-9.852002-1.702815-7.176149 1.337926-20.67704 6.446371-23.352892 33.204894-17.028151 67.504454-31.745338 101.439126-47.192303 1.459556-0.608148 3.162371-0.486519 9.122224-1.337926z" fill="#5B5C5C" p-id="1470"></path>
                    </svg>
                    <span className="heard-left-title">曾杰杰</span>
                </div>

                <div className="nav-heard-right flex-start-center">
                    <div className="nav-heard-item" onClick={jumpToMobile}>手机端</div>
                    {/* 头像 */}
                    <div className="heard-right-portrait flex-start-center" onClick={jumpToLogin}>
                        <div className="heard-portrait-left">
                            <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/login-portrait.png" alt="portrait"></img>
                        </div>
                        <div className="heard-portrait-right flex-column-center">
                            <div className="portrait-describe-top">Re杰杰</div>
                            <div className="portrait-describe-bottom">{window.localStorage.rejiejay_token ? '已登录' : '未登录'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavHeard;

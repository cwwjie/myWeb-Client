import config from './../../config';
import axios from 'axios';
import createSignature from './../../utils/createSignature';

const ajaxs = {
    // 主页的 文章数据 暂时只写在本地, 不上传数据库
    homePageArticles: [ 
        {
            picURL: '',
            title: 'Hi, 我是曾杰杰。',
            content: '欢迎来到我的个人网站, 没有关系你也不用, 没有关系你也不用, 没有关系你也不用给我机会反正我还有一生可以浪费。我就是这么一点点倔。'
        }
    ],

    // 主页的 Tab数据 以及查看更多的导航
    homePageTabs: [
        {
            name: '斗鱼',
            url: 'https://www.douyu.com/'
        }, {
            name: '百度',
            url: 'https://www.baidu.com/'
        }
    ],

    /**
     * 获取一条记录
     * @return {Promise} resolve(true) reject(error)
     */
    getOneByRandom() {
        return new Promise((resolve, reject) => {
            axios({
                url: `${config.url}/record/get/one`, 
                method: 'get',
            })
            .then(response => {
                if (response.status === 200) {
                    if (
                        response.data && // 存在返回数据
                        response.data.result === 1 // 并且结果正确
                    ) {
                        resolve(response.data.data);
                    } else {
                        resolve(response.data.message);
                    }
                } else {
                    reject(response.statusText);
                }
            })
            .catch(error => {
                reject(error);
            })
        });
    },

    /**
     * 保存记录
     * @param {string} title 必填 标题
     * @param {string} content 必填 内容
     * @return {Promise} resolve(true) reject(error)
     */
    saveRecord(title, content) {
        
        let payloads = {
            title: title,
            content: content,
        }

        return new Promise((resolve, reject) => {
            axios({
                url: `${config.url}/record/save`, 
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'x-rejiejay-signature': createSignature(payloads),
                },
                data: payloads
            })
            .then(response => {
                if (response.status === 200) {
                    if (
                        response.data && // 存在返回数据
                        response.data.result === 1 // 并且结果正确
                    ) {
                        resolve(response.data.data);
                    } else {
                        resolve(response.data.message);
                    }
                } else {
                    reject(response.statusText);
                }
            })
            .catch(error => {
                reject(error);
            })
        });
    }
}

export default ajaxs;
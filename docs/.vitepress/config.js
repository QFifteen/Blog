const vueSeries = [
    {}
]
const jsSeries = []
const tsSeries = []
const htmlcssSeries = []
const frontendTalking = []
const growthJourney = []
export default {
    base: '/',
    title: '十五的个人博客',
    description: '一名草根前端的自救之路',
    lang: 'zh-CN',
    lastUpdated: true,
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }]],
    themeConfig: {
        siteTitle: '十五的个人博客',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        lastUpdatedText: '最近更新时间',
        logo: '/logo.svg',
        //顶部导航栏配置    
        nav: [
            { text: '首页', link: '/' },
            { text: '成长之路(总结)', link: '/getting/why.html' },
            { text: '杂乱记事本', link: 'https://gitee.com/wushijiang13/vue3-vite-cli' },
            { text: '掘金', link: 'https://juejin.cn/user/343495027727229/posts' },
            { text: 'Github', link: 'https://github.com/QFifteen' },
            { text: '联系我', link: '/#联系我' }
        ],
        //左侧导航栏配置
        //collapsed: true
        sidebar: [
            //首页 - home
            {
                text: '首页',
                link: '/'
            },
            //自救之路 - redemption
            {
                text: '自救之路',
                link: '/redemption.html'
            },
            //Vue实践专题系列 - vue-series
            {
                text: 'Vue专题系列',
                collapsed: false,
                items: vueSeries
            },
            //JS - js-series
            {
                text: 'JavaScript专题系列',
                collapsed: false,
                items: jsSeries
            },
            //TS - ts-series
            {
                text: 'TypeScript专题系列',
                collapsed: false,
                items: tsSeries
            },
            //HTML、CSS系列 - html-css-series
            {
                text: 'HTML/CSS专题系列',
                collapsed: true,
                items: htmlcssSeries
            },
            //前端杂谈 - frontend-talking
            {
                text: '前端杂谈',
                collapsed: true,
                items: frontendTalking
            },
            //成长之路 - growth-journey
            {
                text: '成长之路',
                collapsed: true,
                items: growthJourney
            }
        ],
        // 右侧边栏标题
        outline: 'deep',
        outlineTitle: '章节导航',
        // 上下篇文本提示文字
        docFooter: {
            prev: '◁ 上一篇',
            next: '下一篇 ▷'
        },
        footer: {
            message: 'MIT Licensed',
            copyright: 'Copyright © 2023 Fifteen'
        }
    }
}
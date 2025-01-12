import { NavLinkSchema } from '@data/schema/nav-link.schema'
const navlinkData: NavLinkSchema[] = [
  {
    name: '訊息公告',
    path: '/',
    childrens:[
      {
        name: '最新訊息',
        path: '/',
        childrens:[]
      },
      {
        name: '會議訊息',
        path: '/info/meeting',
        childrens:[]
      },
      {
        name: '活動訊息',
        path: '/info/act',
        childrens:[]
      },
      {
        name: '徵稿訊息',
        path: '/info/callforpaper',
        childrens:[]
      },
      {
        name: '競賽訊息',
        path: '/info/paper',
        childrens:[]
      },
      {
        name: '志工招募',
        path: '/info/volunteer',
        childrens:[]
      },
      
    ]
  },
  {
    name: '關於學會',
    path: '/about',
    childrens:[
      {
        name: '學會簡介',
        path: '/about',
        childrens:[]
      },
      {
        name: '組織架構',
        path: '/about/structure',
        childrens:[]
      },
      {
        name: '組織沿革',
        path: '/about/history',
        childrens:[]
      },
    ]
  },
  // {
  //   name: 'Project',
  //   path: '/project',
  // },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  // },
  {
    name: '學會活動',
    path: '/act',
    childrens:[
      {
        name: '圖學年會',
        path: '/act',
        childrens:[]
      },
      {
        name: '競賽活動',
        path: '/act/paper',
        childrens:[]
      },
      {
        name: '學會獎學金',
        path: '/act/scholarship',
        childrens:[]
      },
    ]
  },
  {
    name: '學術資源',
    path: '/edu',
    childrens:[
      {
        name: '工作與實習',
        path: '/edu',
        childrens:[]
      },
      {
        name: '學術訊息',
        path: '/edu/info',
        childrens:[]
      },
      {
        name: '合作徵求',
        path: '/edu/company',
        childrens:[]
      },{
        name: '學術分享',
        path: '/edu/share',
        childrens:[]
      },
      {
        name: '相關網站',
        path: '/edu/link',
        childrens:[]
      },
      {
        name: '期刊與會議',
        path: '/edu/conference',
        childrens:[]
      },
      {
        name: '相關研究人員',
        path: '/edu/staff',
        childrens:[]
      },
      {
        name: '相關研究機構',
        path: '/edu/agency',
        childrens:[]
      },
      {
        name: '實驗資料',
        path: '/edu/experiment',
        childrens:[]
      },
    ]
  },
  {
    name: '出版品',
    path: '/publish',
    childrens:[
      {
        name: '會刊',
        path: '/publish',
        childrens:[]
      },
      {
        name: '學術期刊',
        path: '/publish/periodical',
        childrens:[]
      },
    ]
  },
  {
    name: '贊助',
    path: '/sponsor',
    childrens:[
      {
        name: '廠商贊助',
        path: '/sponsor',
        childrens:[]
      },
      {
        name: '機關贊助',
        path: '/sponsor/agency',
        childrens:[]
      },
      {
        name: '個人贊助',
        path: '/sponsor/personal',
        childrens:[]
      },
    ]
  },
  {
    name: '會員',
    path: '/member',
    childrens:[
      {
        name: '本會規章',
        path: '/member/aboutRule',
        childrens:[]
      },
      {
        name: '繳納會費',
        path: '/member/fee',
        childrens:[]
      },
    ]
  },
  {
    name: '聯絡學會',
    path: '/contact',
    childrens:[]
  }
];

export default navlinkData

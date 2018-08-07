//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentActiveTab: 'work', 
    currentActivePanel: 'work',
    testObjectArray: [
      {
        swipetype: 'slide',
        image: 'swipe 1 image', 
        title: 'Swipe 1 Title',
        subtitle: 'Swipe 1 Subtitle'
      }, 
      {
        swipetype: 'slide',
        image: 'swipe 2', 
        title: 'swipe 2 title',
        subtitle: 'swipe 2 subtitle'
      }, 
      {
        swipetype: 'slide',
        image: 'swipe 3',
        title: 'swipe 3 title',
        subtitle: 'swipe 3 subtitle'
      }, 
      {
        swipetype: 'summary',
        image: 'swipe last',
        title: 'Title of Project',
        subtitle: 'subtitle of project', 
        talent: {
            avatarUrl: 'avatar.png',
            firstName: 'First name',
            lastName: 'Last Name',
            skills: 'My Skills',
          }, 
          // - - - - talents have diff roles on diff projects
        talentRole: 'Talent Role',
        headertext: 'this is header text',
        textcontent: 'text content',
        link1: 'link 1',
        link2: 'link 2'
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  activeTab: function (e) {
    console.log(e)
    console.log(e.currentTarget.id+'TabActive')
    var tabActive = e.currentTarget.id+"TabActive"

    this.setData({
      currentActiveTab: e.currentTarget.id,
      tabActive: true
    });

    // console.log(this.currentActiveTab)

    console.log("active tab : " + this.data.currentActiveTab)

  }, 





})

window.exports = {
  "demo-list": {
    mode: "list",
    args: {
      // 进入插件应用时调用（可选）
      enter: (action, callbackSetList) => {
        // 如果进入插件应用就要显示列表数据
        callbackSetList([
          {
            title: "这是标题",
            description: "这是描述",
            icon: "", // 图标(可选),
            url: "https://yuanliao.info",
          },
        ])
      },
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        // 获取一些数据
        // 执行 callbackSetList 显示出来
        callbackSetList([
          {
            title: "这是标题",
            description: "这是描述",
            icon: "", // 图标
            url: "https://yuanliao.info",
          },
        ])
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
         window.utools.hideMainWindow()
         const url = itemData.url
         require('electron').shell.openExternal(url)
         window.utools.outPlugin()
      },
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: "搜索",
    },
  },
}

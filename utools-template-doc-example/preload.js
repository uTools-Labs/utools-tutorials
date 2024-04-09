window.exports = {
  "demo-doc": {
     mode: "doc", 
     args: {
        // 索引集合
        // indexes: require('./indexes.json')
        indexes:[
           {
              t: '这是标题',
              d: '这是描述',
              p: 'doc/test.html'
           }
        ],
        // 子输入框为空时的占位符，默认为字符串"搜索"
        placeholder: "搜索"
     }
  }
}
  // message = { ToUserName: 'gh_471f0c38b32e',
  // FromUserName: 'ogRt9s7uVTAh8CumtbfKLQqpIKaM',
  // CreateTime: '1492584640',
  // MsgType: 'text',
  // Content: 'h',
  // MsgId: '6410602215862896609' }  
module.exports = (message)=>{
  if(message.Content == 'h'){
  console.log(message);
   return [{
      title: '测试',
      description: '测试',
      url: 'https://wx.xuminjun.com?openId='+message.FromUserName
    }];
  }
}
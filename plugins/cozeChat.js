export default function ({ app }, inject) {
  // 动态添加外部脚本
  const script = document.createElement('script')
  script.src =
    'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.1.0-beta.0/libs/oversea/index.js'
  script.defer = true
  document.head.appendChild(script)

  script.onload = () => {
    const inlineScript = document.createElement('script')
    inlineScript.innerHTML = `
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7455307600716906503',
        },
        componentProps: {
          title: '4EVERLAND AI',
        },
        ui: {
          base: { 
            icon: 'https://static.4everland.org/Ask-AI.png', 
            layout: 'pc', 
            lang: 'en',
            zIndex: 1000, 
          },
          footer: { 
            isShow: true, 
            expressionText: 'Powered by 4EVERLAND AIRPC ', 
            
          } 
        }
      });
    `
    document.head.appendChild(inlineScript)
  }
}

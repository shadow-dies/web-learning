# 🚀 Welcome to your new awesome project!
## 组件间信息传递包括数据和函数，可以将方法当成props传递给子组件
# 遇到的问题
## setState后东西变了但没完全变（雾）
> 个人理解：React中的setState函数以异步方式工作，更新后状态值无法立即使用，依然保持原来的状态，比如setState(1)后若立即读取state的值仍然未变为1.
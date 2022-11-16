# 🚀 Welcome to your new awesome project!
## 组件间信息传递包括数据和函数，可以将方法当成props传递给子组件
## 数据只有通过setState更新后页面才会刷新，用其他方法改变则不会刷新
## 若setState和现在state的值一样，则页面不会刷新，最好的方法是先拷贝，修改后再调用useState进行修改
## 数组api:
### unshift：push到第一位
### filter：返回数组不改变原来的数组（应该说大多数都是返回新数组不改变原来的）
# 遇到的问题
## setState后东西变了但没完全变（雾）
> 个人理解：React中的setState函数以异步方式工作，更新后状态值无法立即使用，依然保持原来的状态，比如setState(1)后若立即读取state的值仍然未变为1.
# BitcronTheme

本仓库为 [Bitcron](http://bitcron.com) 主题，修改自 [Colachan](http://colachan.com) 的模板。由于自己在原模板基础上做了不少的改动，所以将源码和设计图开源出来供需要的人参考和使用。模板效果参考我的 [博客](http://xuyafei.com)。

## 说明

Bitcron 从 Farbox 升级而来，对于没有心思维护博客主题的人来说，使用 Bitcron 搭建博客只需要注册账号、交费、选择主题、绑定域名、关联 Dropbox、安装 Dropbox 同步盘，然后发布文章的过程就变为在本地编辑 Markdown 文件并保存即可。随后 Dropbox 会将 Markdown 文件同步到云端，Bitcron 再来获取这些数据为你生成对应的页面。甚至只要在 Markdown 文件中标注显示类型，Bitcron 还会自动生成 Wiki、PPT、照片墙、简历等众多模板。正如 Bitcron 宣传的一样：“人类创造内容， 我们负责渲染”。

然而不幸的是之前的 Farbox 停止维护了，团队推出了新的替代产品 Bitcron。我之前使用 Farbox 的模板进行定制，但由于底层 API 的改变导致模板很难迁移，加上之前的改动没有 Git 管理，所以这次准备在 Git 的管理下使用相同的模板重新修改。

此模板的灵活性很差，很多地方都不能通过配置文件来实现，而是直接将代码在模板中写死。所以如果你想省事，请不要使用此模板。除此之外原模板还有很多 BUG 和需要优化的地方，但如果你喜欢本模板的样式，可以建立在我的工作基础上来使用本模板。我对本模板的所有改动将在下边列出。

## 新功能
* 404页面失效链接映射功能
* 详情页增加关注作者
* 增加代码高亮
* 增加文章置顶功能
* 增加文章锁定功能

## 优化
* 移除没用的代码
* 更新404页面样式
* 更新页脚样式
* 更新归档页样式
* 评论替换为Disqus
* 移除访问数量的显示
* 更新Tag样式
* 详情页更宽的显示范围
* 详情页显示索引
* 更新所有图片

## 修改的BUG
* 小图片在手机版强制全屏的BUG
* 列表页和详情页在手机版内容超出的BUG
* 详情页标题与时间在手机版重叠的BUG
* 很多页面元素间距不合理的BUG